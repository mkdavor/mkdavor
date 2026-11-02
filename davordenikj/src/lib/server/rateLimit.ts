type RateLimitWindow = {
  count: number;
  resetAt: number;
};

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const MAX_TRACKED_KEYS = 5_000;

function pruneWindows(windows: Map<string, RateLimitWindow>, now: number) {
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }

  // Map keeps insertion order, so the first key is the oldest window.
  if (windows.size >= MAX_TRACKED_KEYS) {
    const oldestKey = windows.keys().next().value;
    if (oldestKey !== undefined) windows.delete(oldestKey);
  }
}

// Fixed-window counter kept in memory. Each server instance has its own counters,
// so on serverless hosting this is a best-effort limit rather than a global guarantee.
export function createRateLimiter(limit: number, windowMs: number) {
  const windows = new Map<string, RateLimitWindow>();

  return function take(key: string, now = Date.now()): RateLimitResult {
    const current = windows.get(key);

    if (!current || current.resetAt <= now) {
      if (windows.size >= MAX_TRACKED_KEYS) pruneWindows(windows, now);
      windows.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterSeconds: 0 };
    }

    if (current.count >= limit) {
      return { allowed: false, retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000) };
    }

    current.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  };
}

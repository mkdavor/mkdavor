import { assetUrl } from "./assetUrl";
import type { Language } from "./types";

export const languages: Language[] = [
  {
    name: "English",
    level: "C1",
    flagUrl: assetUrl("gb.png"),
    flagAlt: "United Kingdom flag",
  },
  {
    name: "German",
    level: "B2",
    flagUrl: assetUrl("de.png"),
    flagAlt: "Germany flag",
  },
  {
    name: "Macedonian",
    level: "Native",
    flagUrl: assetUrl("mk.png"),
    flagAlt: "North Macedonia flag",
  },
  {
    name: "Croatian",
    level: "C1",
    flagUrl: assetUrl("hr.png"),
    flagAlt: "Croatia flag",
  },
];

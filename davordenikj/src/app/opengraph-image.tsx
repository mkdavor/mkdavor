import { ImageResponse } from "next/og";

export const alt = "Davor Denikj - Lead Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 82px",
        color: "#101827",
        background: "linear-gradient(135deg, #ffffff 0%, #fff3f0 54%, #ffe1db 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}>
        <div style={{ width: 54, height: 54, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "white", background: "#ff6347" }}>DD</div>
        davordenikj.com
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ color: "#ff6347", fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>LEAD SOFTWARE ENGINEER</div>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3 }}>Davor Denikj</div>
        <div style={{ color: "#4a5667", fontSize: 34 }}>.NET · Swift · Mobile · Backend · Cloud</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#4a5667", fontSize: 25 }}>
        <span>12+ years of software engineering</span>
        <span>Nuremberg, Germany</span>
      </div>
    </div>,
    size,
  );
}

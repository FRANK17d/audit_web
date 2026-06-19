import { ImageResponse } from "next/og";

export const alt = "Audit, app móvil para auditorías, checklists e informes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #fff7fb 0%, #ffffff 50%, #ffe6f0 100%)",
          color: "#111827",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "74px 86px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: 640 }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#ff5c93",
                borderRadius: 24,
                color: "white",
                display: "flex",
                fontSize: 34,
                fontWeight: 900,
                height: 72,
                justifyContent: "center",
                width: 72,
              }}
            >
              A
            </div>
            <div style={{ fontSize: 38, fontWeight: 900 }}>Audit</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h1 style={{ fontSize: 68, fontWeight: 900, lineHeight: 0.96, margin: 0 }}>
              Auditorías desde tu celular
            </h1>
            <p style={{ color: "#5f6472", fontSize: 28, lineHeight: 1.35, margin: 0 }}>
              Checklists, evidencias, hallazgos e informes profesionales para equipos de campo.
            </p>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #ff5c93, #e6005e)",
            borderRadius: 56,
            boxShadow: "0 30px 80px rgba(230, 0, 94, 0.28)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            fontSize: 30,
            fontWeight: 800,
            gap: 16,
            height: 360,
            justifyContent: "center",
            padding: 36,
            width: 330,
          }}
        >
          <div style={{ fontSize: 92, lineHeight: 1 }}>82%</div>
          <div style={{ textAlign: "center" }}>Cumplimiento general</div>
          <div style={{ background: "rgba(255,255,255,.32)", borderRadius: 999, height: 12, width: 220 }} />
        </div>
      </div>
    ),
    size,
  );
}

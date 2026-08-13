import { C, hexToRgba, TONE_GRADIENTS } from "../theme";

export function Diamond({ Icon, tone = "teal", size = 56 }) {
  const [from, to] = TONE_GRADIENTS[tone] || TONE_GRADIENTS.teal;
  return (
    <div style={{ width: size, height: size, flexShrink: 0 }} aria-hidden="true">
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 14,
          transform: "rotate(45deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${from}, ${to})`,
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: `0 0 0 1px rgba(10,27,51,0.04), 0 8px 20px ${hexToRgba(from, 0.35)}, inset 0 0 10px rgba(255,255,255,0.25)`,
        }}
      >
        <div style={{ transform: "rotate(-45deg)" }}>
          <Icon size={size * 0.42} color={C.ink} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

export function Chip({ Icon, tone = "teal", size = 40 }) {
  const [from, to] = TONE_GRADIENTS[tone] || TONE_GRADIENTS.teal;
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${from}, ${to})`,
        border: "1px solid rgba(255,255,255,0.45)",
        boxShadow: `0 6px 16px ${hexToRgba(from, 0.4)}, inset 0 0 8px rgba(255,255,255,0.3)`,
      }}
    >
      <Icon size={size * 0.46} color={C.ink} strokeWidth={2.2} />
    </div>
  );
}

export function NodeList({ items, tone = "teal" }) {
  const [dot] = TONE_GRADIENTS[tone] || TONE_GRADIENTS.teal;
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={i} style={{ display: "flex", gap: 12, paddingBottom: last ? 0 : 12 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 10,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  marginTop: 6,
                  flexShrink: 0,
                  background: dot,
                  boxShadow: `0 0 6px ${hexToRgba(dot, 0.9)}`,
                }}
              />
              {!last && (
                <span
                  style={{
                    flex: 1,
                    width: 1,
                    marginTop: 4,
                    background: `linear-gradient(${dot}, transparent)`,
                    opacity: 0.6,
                  }}
                />
              )}
            </div>
            <span
              className="font-body"
              style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.55 }}
            >
              {it}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

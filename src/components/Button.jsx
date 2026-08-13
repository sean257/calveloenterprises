import { ArrowRight } from "lucide-react";
import { C } from "../theme";

export default function Button({
  children,
  tone = "gold",
  onClick,
  icon: Icon = ArrowRight,
  size = "md",
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 600,
    borderRadius: 999,
    cursor: "pointer",
    border: "none",
    fontFamily: "'Inter',sans-serif",
  };
  const pad =
    size === "lg" ? { padding: "14px 26px", fontSize: 15 } : { padding: "11px 20px", fontSize: 14 };
  const styles =
    tone === "gold"
      ? { background: C.gold, color: C.ink }
      : tone === "outline"
        ? { background: "transparent", color: C.white, border: `1px solid rgba(255,255,255,0.35)` }
        : tone === "outlineInk"
          ? { background: "transparent", color: C.ink, border: `1px solid rgba(10,27,51,0.25)` }
          : { background: C.ink, color: C.white };
  return (
    <button
      onClick={onClick}
      className="foc"
      style={{ ...base, ...pad, ...styles, transition: "transform .15s ease, opacity .15s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {children} <Icon size={16} />
    </button>
  );
}

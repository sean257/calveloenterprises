import { C } from "../theme";
import logo from "../assets/logo.png";

export default function Logo({ dark = true, onClick }) {
  return (
    <button
      onClick={onClick}
      className="foc"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
      aria-label="Calvelo home"
    >
      <img
        src={logo}
        alt="Calvelo Enterprises logo"
        style={{ width: 34, height: 34, objectFit: "contain", flexShrink: 0 }}
      />
      <div style={{ textAlign: "left", lineHeight: 1.05 }}>
        <div
          className="font-display"
          style={{
            fontWeight: 700,
            fontSize: 17,
            color: dark ? C.white : C.ink,
            letterSpacing: "0.01em",
          }}
        >
          CALVELO
        </div>
        <div
          className="font-mono"
          style={{ fontSize: 9, letterSpacing: "0.22em", color: dark ? C.mutedOnDark : C.muted }}
        >
          ENTERPRISES
        </div>
      </div>
    </button>
  );
}

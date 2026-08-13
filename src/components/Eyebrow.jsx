import { C } from "../theme";

export default function Eyebrow({ children }) {
  return (
    <div
      className="font-mono"
      style={{
        color: C.teal,
        fontSize: 12,
        letterSpacing: "0.14em",
        fontWeight: 600,
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

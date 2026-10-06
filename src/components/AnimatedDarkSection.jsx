import { C } from "../theme";

export default function AnimatedDarkSection({ children }) {
  return (
    <section
      style={{ background: C.ink, color: C.white, position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </section>
  );
}

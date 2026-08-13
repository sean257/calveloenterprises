import { C, hexToRgba } from "../theme";
import NeuralBackground from "./NeuralBackground";

export default function AnimatedDarkSection({ children }) {
  return (
    <section
      style={{ background: C.ink, color: C.white, position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        className="hero-bg-glow"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.8,
          filter: "blur(70px)",
          background: `radial-gradient(480px 480px at 82% 15%, ${hexToRgba(C.teal, 0.35)}, transparent 60%), radial-gradient(420px 420px at 95% 75%, ${hexToRgba(C.gold, 0.3)}, transparent 60%), radial-gradient(400px 400px at 55% 90%, ${hexToRgba(C.violet, 0.28)}, transparent 60%), radial-gradient(360px 360px at 30% 10%, ${hexToRgba(C.cyan, 0.22)}, transparent 60%)`,
        }}
      />
      <NeuralBackground />
      <div
        aria-hidden="true"
        className="hero-bg-sheen"
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(100deg, ${C.ink} 0%, rgba(10,27,51,0.86) 38%, rgba(10,27,51,0.5) 70%, rgba(10,27,51,0.3) 100%)`,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </section>
  );
}

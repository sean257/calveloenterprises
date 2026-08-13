import { useState, useEffect } from "react";
import { C } from "../theme";

export default function BridgeGraphic() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const reduce =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setGo(true), reduce ? 0 : 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <svg
      viewBox="0 0 380 300"
      width="100%"
      height="100%"
      role="img"
      aria-label="Diagram connecting strategy to solution"
    >
      <path d="M40 230 L340 70" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
      <path
        className="bridge-path"
        d="M40 230 L340 70"
        stroke={C.teal}
        strokeWidth="2.5"
        fill="none"
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset={go ? 0 : 1}
      />
      {[0.18, 0.4, 0.62, 0.84].map((t, i) => {
        const x = 40 + (340 - 40) * t;
        const y = 230 + (70 - 230) * t;
        return (
          <circle
            key={i}
            className="bridge-node"
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 4 : 5}
            fill={i % 2 === 0 ? C.teal : C.gold}
            style={{
              opacity: go ? 1 : 0,
              transform: go ? "scale(1)" : "scale(0)",
              transformOrigin: `${x}px ${y}px`,
              transitionDelay: `${0.5 + i * 0.15}s`,
            }}
          />
        );
      })}
      <g className="bridge-node" style={{ opacity: go ? 1 : 0, transitionDelay: "0.2s" }}>
        <rect
          x="8"
          y="208"
          width="88"
          height="44"
          rx="10"
          fill={C.gold}
          transform="rotate(-6 8 208)"
        />
        <text
          x="52"
          y="234"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono',monospace"
          fontSize="11"
          fontWeight="600"
          fill={C.ink}
          transform="rotate(-6 52 234)"
        >
          STRATEGY
        </text>
      </g>
      <g className="bridge-node" style={{ opacity: go ? 1 : 0, transitionDelay: "0.75s" }}>
        <rect
          x="284"
          y="46"
          width="90"
          height="44"
          rx="10"
          fill={C.teal}
          transform="rotate(-6 284 46)"
        />
        <text
          x="329"
          y="72"
          textAnchor="middle"
          fontFamily="'IBM Plex Mono',monospace"
          fontSize="11"
          fontWeight="600"
          fill={C.ink}
          transform="rotate(-6 329 72)"
        >
          SOLUTION
        </text>
      </g>
    </svg>
  );
}

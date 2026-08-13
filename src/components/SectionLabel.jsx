import { C } from "../theme";
import Eyebrow from "./Eyebrow";

export default function SectionLabel({ eyebrow, title, sub, dark }) {
  return (
    <div style={{ maxWidth: 640 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(32px,4.5vw,46px)",
          fontWeight: 700,
          color: dark ? C.white : C.ink,
          lineHeight: 1.12,
          marginBottom: sub ? 14 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="font-body"
          style={{ color: dark ? C.mutedOnDark : C.muted, fontSize: 16, lineHeight: 1.65 }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

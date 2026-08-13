import { C, toneAt } from "../theme";
import { INDUSTRIES } from "../data";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import { Diamond } from "../components/Icons";

export default function Industries() {
  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="Industries"
            title="Where we work."
            sub="From logistics fleets to government ministries, our clients span nearly every sector of the economy."
          />
        </div>
      </AnimatedDarkSection>
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 90px" }}>
          <div
            style={{
              "--rg-base": "repeat(2,1fr)",
              "--rg-md": "repeat(3,1fr)",
              "--rg-lg": "repeat(4,1fr)",
              "--rg-gap": "16px",
            }}
            className="rgrid"
          >
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <Diamond Icon={ind.icon} tone={toneAt(i)} size={44} />
                <div
                  className="font-body"
                  style={{ fontWeight: 600, fontSize: 14.5, color: C.ink }}
                >
                  {ind.label}
                </div>
                <p
                  className="font-body"
                  style={{
                    margin: 0,
                    color: C.muted,
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  {ind.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

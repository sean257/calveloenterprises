import { C, toneAt } from "../theme";
import { VALUES, WHY } from "../data";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import { Diamond, Chip } from "../components/Icons";
import { CheckCircle2 } from "lucide-react";

export default function About({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="About Calvelo"
            title="From strategy to solution."
            sub="Calvelo Business Development is a business consulting and technology solutions firm dedicated to helping organizations improve performance, increase efficiency, embrace digital transformation, and achieve sustainable growth. We partner with businesses to identify opportunities, solve operational challenges, implement modern technologies, and develop practical strategies that improve productivity and profitability."
          />
        </div>
      </AnimatedDarkSection>

      {/* Vision / Mission */}
      <section style={{ background: C.paper }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "72px 24px",
            "--rg-base": "1fr",
            "--rg-md": "1fr 1fr",
            "--rg-gap": "24px",
          }}
          className="rgrid"
        >
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.paperDim}`,
              borderRadius: 18,
              padding: 30,
            }}
          >
            <Eyebrow>Vision</Eyebrow>
            <p className="font-body" style={{ fontSize: 15.5, color: C.text, lineHeight: 1.75 }}>
              To be a trusted partner in business development, digital transformation, and
              technology-driven innovation — empowering organizations everywhere to achieve
              sustainable growth and lasting success.
            </p>
          </div>
          <div style={{ background: C.ink, borderRadius: 18, padding: 30 }}>
            <Eyebrow>Mission</Eyebrow>
            <p className="font-body" style={{ fontSize: 15.5, color: C.white, lineHeight: 1.75 }}>
              To empower businesses through strategic consulting, innovative technology solutions,
              and operational excellence — delivering measurable value, enhancing competitiveness,
              and creating sustainable business growth. We build long-term partnerships by
              delivering practical, results-oriented solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 24px 84px" }}>
          <div style={{ marginBottom: 24 }}>
            <SectionLabel eyebrow="What we stand for" title="Our core values" />
          </div>
          <div
            style={{ "--rg-base": "repeat(2,1fr)", "--rg-md": "repeat(4,1fr)", "--rg-gap": "20px" }}
            className="rgrid"
          >
            {VALUES.map((v, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Diamond Icon={v.icon} tone={toneAt(i)} size={46} />
                <div className="font-body" style={{ fontWeight: 600, fontSize: 14, color: C.ink }}>
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px" }}>
          <div style={{ marginBottom: 32 }}>
            <SectionLabel eyebrow="Why choose us" title="What working with Calvelo looks like." />
          </div>
          <div
            style={{ "--rg-base": "1fr", "--rg-md": "1fr 1fr", "--rg-gap": "14px 40px" }}
            className="rgrid"
          >
            {WHY.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Chip Icon={CheckCircle2} tone={toneAt(i)} size={30} />
                <span className="font-body" style={{ fontSize: 15, color: C.text }}>
                  {w}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.ink2 }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "64px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <h2
            className="font-display"
            style={{ color: C.white, fontSize: "clamp(28px,4vw,36px)", fontWeight: 700 }}
          >
            Ready to work together?
          </h2>
          <Button tone="gold" size="lg" onClick={() => go("contact")}>
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}

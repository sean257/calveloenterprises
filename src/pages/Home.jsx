import { C, toneAt } from "../theme";
import { SERVICES, INDUSTRIES, PROCESS } from "../data";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import Eyebrow from "../components/Eyebrow";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import BridgeGraphic from "../components/BridgeGraphic";
import { Diamond, Chip, NodeList } from "../components/Icons";

export default function Home({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  const preview = SERVICES.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <AnimatedDarkSection>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "72px 24px 60px",
            alignItems: "center",
            "--rg-base": "1fr",
            "--rg-md": "1.1fr 0.9fr",
            "--rg-gap": "40px",
          }}
          className="rgrid"
        >
          <div className="rise">
            <Eyebrow>From strategy to solution</Eyebrow>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(40px,5.8vw,64px)",
                fontWeight: 700,
                lineHeight: 1.08,
                marginBottom: 20,
              }}
            >
              We help businesses run leaner, think sharper, and grow faster.
            </h1>
            <p
              className="font-body"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: C.mutedOnDark,
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              Calvelo partners with organizations to solve operational challenges, modernize
              systems, and build technology that people actually use.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button tone="gold" size="lg" onClick={() => go("contact")}>
                Start a conversation
              </Button>
              <Button tone="outline" size="lg" onClick={() => go("services")}>
                See what we do
              </Button>
            </div>
          </div>
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <BridgeGraphic />
          </div>
        </div>
      </AnimatedDarkSection>

      {/* PILLARS */}
      <section style={{ background: C.navy, color: C.white }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "36px 24px",
            "--rg-base": "1fr",
            "--rg-md": "repeat(3,1fr)",
            "--rg-gap": "24px",
          }}
          className="rgrid"
        >
          {[
            {
              t: "Consulting-led",
              d: "Every engagement starts with the business problem, not the software.",
            },
            {
              t: "Technology-built",
              d: "Custom systems, integrations, and automation delivered end to end.",
            },
            {
              t: "Built to scale",
              d: "Practical solutions designed to grow with you — from one market to many.",
            },
          ].map((p, i) => (
            <div key={i} style={{ padding: "8px 0" }}>
              <div
                className="font-display"
                style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}
              >
                {p.t}
              </div>
              <div
                className="font-body"
                style={{ fontSize: 14, color: C.mutedOnDark, lineHeight: 1.6 }}
              >
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ background: C.paper }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "84px 24px",
            alignItems: "center",
            "--rg-base": "1fr",
            "--rg-md": "1fr 1fr",
            "--rg-gap": "56px",
          }}
          className="rgrid"
        >
          <SectionLabel
            eyebrow="About Calvelo"
            title="We don't simply provide technology — we solve business problems."
            sub="We're a business consulting and technology solutions firm helping organizations improve performance, cut costs, and modernize the way they work. From strategy through execution, we partner with you end to end — identifying opportunities, designing practical solutions, and implementing the technology to support them."
          />
          <div>
            <Button tone="outlineInk" onClick={() => go("about")}>
              More about us
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 84px" }}>
          <div style={{ marginBottom: 44 }}>
            <SectionLabel eyebrow="What we do" title="Strategy and technology, under one roof." />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2,1fr)",
              "--rg-lg": "repeat(3,1fr)",
              "--rg-gap": "20px",
            }}
            className="rgrid"
          >
            {preview.map((s, i) => {
              const servicePageMap = {
                0: "business-development",
                1: "digital-transformation",
                3: "ai-training",
              };
              return (
                <div
                  key={i}
                  style={{
                    border: `1px solid ${C.paperDim}`,
                    borderRadius: 16,
                    padding: 26,
                    background: C.paper,
                    cursor: servicePageMap[i] ? "pointer" : "default",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => servicePageMap[i] && go(servicePageMap[i])}
                  onMouseEnter={(e) => {
                    if (servicePageMap[i]) {
                      e.currentTarget.style.boxShadow = `0 8px 16px rgba(0,0,0,0.06)`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Diamond Icon={s.icon} tone={toneAt(i)} size={48} />
                  <div
                    className="font-display"
                    style={{ fontWeight: 700, fontSize: 17, color: C.ink, margin: "18px 0 14px" }}
                  >
                    {s.title}
                  </div>
                  <NodeList items={s.items.slice(0, 3)} tone={toneAt(i)} />
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 32 }}>
            <Button tone="dark" onClick={() => go("services")}>
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ background: C.ink }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 24px" }}>
          <div style={{ marginBottom: 36 }}>
            <SectionLabel
              dark
              eyebrow="Who we work with"
              title="Built for the industries that keep businesses running."
            />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {INDUSTRIES.map((ind, i) => (
              <span
                key={i}
                className="font-body"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: C.white,
                  borderRadius: 999,
                  padding: "9px 16px",
                  fontSize: 13.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <ind.icon size={15} color={C.teal} /> {ind.label}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Button tone="outline" onClick={() => go("industries")}>
              See how we help your industry
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 24px" }}>
          <div style={{ marginBottom: 44 }}>
            <SectionLabel
              eyebrow="Our approach"
              title="Five steps from problem to working solution."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-sm": "repeat(2,1fr)",
              "--rg-lg": "repeat(5,1fr)",
              "--rg-gap": "18px",
            }}
            className="rgrid"
          >
            {PROCESS.map((p, i) => (
              <div
                key={p.n}
                style={{
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <Chip Icon={p.icon} tone={toneAt(i)} size={42} />
                  <span
                    className="font-mono"
                    style={{
                      color: C.muted,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {p.n}
                  </span>
                </div>
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 16, color: C.ink, marginBottom: 8 }}
                >
                  {p.title}
                </div>
                <div
                  className="font-body"
                  style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.6 }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: C.ink2 }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "72px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              className="font-display"
              style={{
                color: C.white,
                fontSize: "clamp(30px,4vw,38px)",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Let's build what's next.
            </h2>
            <p className="font-body" style={{ color: C.mutedOnDark, fontSize: 15 }}>
              Tell us about the problem you're solving — we'll help you find the fastest way there.
            </p>
          </div>
          <Button tone="gold" size="lg" onClick={() => go("contact")}>
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}

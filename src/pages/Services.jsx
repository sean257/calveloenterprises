import { C, toneAt } from "../theme";
import { SERVICES } from "../data";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { Diamond, NodeList } from "../components/Icons";

export default function Services({ setPage }) {
  const navigate = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  // Map services to their dedicated pages
  const servicePageMap = {
    0: "business-development", // Business Development & Consulting
    1: "digital-transformation", // Digital Transformation
    3: "ai-training", // AI & Applied Training
  };

  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="Services"
            title="Business strategy and technology, under one roof."
            sub="Nine practice areas, one team. Whichever problem you're solving, we can carry it from plan to production."
          />
        </div>
      </AnimatedDarkSection>
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 90px" }}>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2,1fr)",
              "--rg-lg": "repeat(3,1fr)",
              "--rg-gap": "20px",
            }}
            className="rgrid"
          >
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 18,
                  padding: 28,
                  cursor: servicePageMap[i] ? "pointer" : "default",
                  transition: "all 0.3s ease",
                }}
                onClick={() => servicePageMap[i] && navigate(servicePageMap[i])}
                onMouseEnter={(e) => {
                  if (servicePageMap[i]) {
                    e.currentTarget.style.boxShadow = `0 12px 24px rgba(0,0,0,0.08)`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Diamond Icon={s.icon} tone={toneAt(i)} size={50} />
                <div
                  className="font-display"
                  style={{ fontWeight: 700, fontSize: 18, color: C.ink, margin: "18px 0 14px" }}
                >
                  {s.title}
                </div>
                <NodeList items={s.items} tone={toneAt(i)} />
                {servicePageMap[i] && (
                  <Button
                    tone="outline"
                    size="sm"
                    onClick={() => navigate(servicePageMap[i])}
                    style={{ marginTop: 16, width: "100%" }}
                  >
                    Learn More
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

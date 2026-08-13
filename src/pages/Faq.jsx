import { useState } from "react";
import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const FAQ_ITEMS = [
  {
    q: "What kinds of businesses do you work with?",
    a: "We work with businesses across many sectors, including logistics, healthcare, education, retail, professional services, government, NGOs, and SMEs. Our focus is on organizations that want practical improvements in operations, process efficiency, and digital capability.",
  },
  {
    q: "Do you only provide consulting, or can you also implement solutions?",
    a: "We do both. Calvelo can support strategy and process design, as well as implementation support across software, automation, system integration, and digital transformation projects. We aim to deliver practical outcomes rather than just recommendations.",
  },
  {
    q: "How do you approach a new project?",
    a: "Most engagements begin with a discovery conversation to understand your current challenges, objectives, and constraints. From there, we assess the situation, identify opportunities, and propose a tailored approach that aligns with your operating model and goals.",
  },
  {
    q: "Can you help optimize existing systems and workflows?",
    a: "Yes. We regularly help organizations improve internal workflows, business processes, data visibility, and operational efficiency, often without needing a full system replacement. The goal is to make what you already have work better and scale more effectively.",
  },
  {
    q: "Do you support digital transformation initiatives?",
    a: "Absolutely. We support organizations at different stages of digital transformation, from planning and business process review to workflow automation, data reporting, software integration, and technology strategy. Our approach focuses on practical value and measurable gains.",
  },
  {
    q: "What is the typical engagement model?",
    a: "Engagements can be tailored to your needs, from advisory and project scoping to hands-on delivery support. Depending on the project, we may work on a consulting basis, an implementation partnership, or a longer-term advisory engagement.",
  },
  {
    q: "How can I get started?",
    a: "The easiest way is to contact us through the website or by email. We’ll arrange a conversation to learn about your goals, discuss the challenges you’re facing, and identify the right next steps.",
  },
];

export default function Faq({ setPage }) {
  const [openIndex, setOpenIndex] = useState(0);

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
            eyebrow="FAQ"
            title="Frequently asked questions"
            sub="A quick overview of the kinds of challenges, projects, and partnerships we support."
          />
        </div>
      </AnimatedDarkSection>

      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 24px 88px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.q}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.paperDim}`,
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="foc font-body"
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 18,
                      padding: "22px 24px",
                      textAlign: "left",
                      fontSize: 16,
                      fontWeight: 600,
                      color: C.ink,
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        fontSize: 30,
                        lineHeight: 1,
                        color: C.teal,
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s ease",
                        display: "inline-block",
                        minWidth: 18,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="font-body"
                      style={{
                        padding: "0 24px 22px",
                        color: C.text,
                        lineHeight: 1.8,
                        fontSize: 15,
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
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
            Need a tailored answer?
          </h2>
          <Button tone="gold" size="lg" onClick={() => go("contact")}>
            Speak with us
          </Button>
        </div>
      </section>
    </>
  );
}

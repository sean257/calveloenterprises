import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const TRANSFORMATION_OFFERINGS = [
  {
    title: "Business Process Automation & Workflow Redesign",
    badge: "CORE SERVICE",
    builtFor:
      "Operations teams, administrators, and organizations struggling with manual processes and inefficiency.",
    offerings: [
      "Process mapping and bottleneck analysis",
      "Workflow automation with AI and RPA",
      "Legacy system modernization",
      "Integration across business systems",
    ],
  },
  {
    title: "Digital Operating Model & Cloud Migration",
    badge: "CORE SERVICE",
    builtFor:
      "Enterprises ready to move infrastructure and operations to the cloud for greater scalability.",
    offerings: [
      "Cloud strategy and migration planning",
      "System architecture redesign",
      "Data modernization and analytics enablement",
      "Organizational change management",
    ],
  },
  {
    title: "AI Integration & Technology Enablement",
    badge: "CORE SERVICE",
    builtFor:
      "Leadership and innovation teams ready to embed AI into products, operations, and customer experience.",
    offerings: [
      "AI opportunity assessment and roadmap",
      "Machine learning implementation",
      "Intelligent automation deployment",
      "Competitive differentiation through AI",
    ],
  },
];

export default function DigitalTransformation({ setPage }) {
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
            eyebrow="Digital Transformation"
            title="Modernize your operations with practical systems that move the business forward."
            sub="Comprehensive digital transformation services designed to reduce friction, improve visibility, and build capabilities for sustainable growth."
          />
        </div>
      </AnimatedDarkSection>

      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 90px" }}>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "1fr",
              "--rg-lg": "repeat(3, 1fr)",
              "--rg-gap": "28px",
            }}
            className="rgrid"
          >
            {TRANSFORMATION_OFFERINGS.map((service, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Placeholder image */}
                <div
                  style={{
                    width: "100%",
                    paddingTop: "66.66%",
                    position: "relative",
                    background: `linear-gradient(135deg, ${C.teal}20, ${C.ink}20)`,
                  }}
                >
                  <img
                    src={`https://i.postimg.cc/C5GMwmwy/Gemini-Generated-Image-hpdvg2hpdvg2hpdv.jpg`}
                    alt={service.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      <h3
                        className="font-display"
                        style={{ fontWeight: 700, fontSize: 18, color: C.ink, margin: 0 }}
                      >
                        {service.title}
                      </h3>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: C.teal,
                          whiteSpace: "nowrap",
                          padding: "4px 10px",
                          border: `1px solid ${C.teal}`,
                          borderRadius: 4,
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>
                    <p
                      className="font-body"
                      style={{
                        fontSize: 13.5,
                        color: C.muted,
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      <strong>Built for:</strong> {service.builtFor}
                    </p>
                  </div>

                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: C.muted,
                        marginBottom: 10,
                      }}
                    >
                      SERVICE OFFERINGS
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {service.offerings.map((offering, idx) => (
                        <li
                          key={idx}
                          className="font-body"
                          style={{ fontSize: 13, color: C.text, lineHeight: 1.4 }}
                        >
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    tone="gold"
                    size="sm"
                    onClick={() => go("contact")}
                    style={{ marginTop: "auto" }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p className="font-body" style={{ fontSize: 15, color: C.text, marginBottom: 20 }}>
              Ready to transform your operations?
            </p>
            <Button tone="dark" onClick={() => go("contact")}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

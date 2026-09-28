import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const TRANSFORMATION_OFFERINGS = [
  {
    title: "Business Process Automation & Workflow Redesign",
    badge: "CORE SERVICE",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
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

const BUILD_LAUNCH_LICENSE_SERVICES = [
  {
    title: "Web Development",
    badge: "WEB",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    offerings: [
      "Business Websites",
      "E-commerce Stores",
      "Web Applications",
      "Customer Portals",
      "Website Redesign",
      "Maintenance & Support",
    ],
  },
  {
    title: "Software Development",
    badge: "SOFTWARE",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    offerings: [
      "Custom Business Software",
      "Mobile Applications",
      "Internal Tools & Workflow Apps",
      "API & System Integrations",
      "Database Development",
      "Ongoing Maintenance & Support",
    ],
  },
  {
    title: "Software Licensing",
    badge: "LICENSES",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    offerings: [
      "Microsoft 365 Licensing",
      "Google Workspace Licensing",
      "Antivirus & Endpoint Security Licenses",
      "Operating System & Office Licenses",
      "License Setup & Deployment",
      "Renewals & License Management",
    ],
  },
];

export default function DigitalTransformation({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  const handleLearnMore = (serviceTitle) => {
    const message = `Hi Calvelo,\n\nI would like to learn more about ${serviceTitle} on the Digital Transformation page. Please share more details about how this service works, the next steps, and what we should expect.\n\nThank you.`;
    window.sessionStorage.setItem(
      "calveloServiceLead",
      JSON.stringify({ service: serviceTitle, page: "Digital Transformation", message })
    );
    go("contact");
  };

  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="Digital Transformation"
            title="Turn process friction into smooth, scalable growth."
            sub="We help businesses simplify operations, strengthen visibility, and implement the systems that make growth sustainable and measurable."
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
                    src={service.image}
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
                    onClick={() => handleLearnMore(service.title)}
                    style={{ marginTop: "auto" }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <div
              style={{
                marginBottom: 28,
                padding: "28px 28px 8px",
                borderRadius: 18,
                background: "linear-gradient(135deg, rgba(76, 175, 175, 0.08), rgba(0, 149, 188, 0.04))",
                border: `1px solid rgba(76,175,175,0.18)`,
              }}
            >
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  color: C.ink,
                  margin: "0 0 12px 0",
                }}
              >
                Build it. Launch it. License it.
              </h3>
              <p className="font-body" style={{ fontSize: 15, color: C.text, margin: 0, maxWidth: 760, lineHeight: 1.7 }}>
                Once your processes are mapped, we can build the website or software you need and supply the licenses to run it.
              </p>
            </div>

            <div
              style={{
                "--rg-base": "1fr",
                "--rg-md": "repeat(2, minmax(0, 1fr))",
                "--rg-lg": "repeat(3, minmax(0, 1fr))",
                "--rg-gap": "24px",
              }}
              className="rgrid"
            >
              {BUILD_LAUNCH_LICENSE_SERVICES.map((service, i) => (
                <div
                  key={i}
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(239,247,247,0.96) 100%)",
                    border: `1px solid rgba(21, 99, 110, 0.14)`,
                    borderRadius: 18,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      paddingTop: "56%",
                      position: "relative",
                      background: `linear-gradient(135deg, ${C.teal}20, ${C.ink}20)`,
                    }}
                  >
                    <img
                      src={service.image}
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

                  <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <h4
                        className="font-display"
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: C.ink,
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </h4>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          color: C.ink,
                          background: "linear-gradient(135deg, rgba(214,177,109,0.18), rgba(76,175,175,0.18))",
                          whiteSpace: "nowrap",
                          padding: "6px 10px",
                          border: `1px solid rgba(21, 99, 110, 0.18)`,
                          borderRadius: 999,
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>

                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {service.offerings.map((offering, idx) => (
                        <li
                          key={idx}
                          className="font-body"
                          style={{
                            fontSize: 13,
                            color: C.text,
                            lineHeight: 1.5,
                          }}
                        >
                          {offering}
                        </li>
                      ))}
                    </ul>

                    <Button
                      tone="gold"
                      size="sm"
                      onClick={() => handleLearnMore(service.title)}
                      style={{ marginTop: "auto" }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              textAlign: "center",
              background: C.ink,
              borderRadius: 18,
              padding: "42px 24px",
              color: C.white,
              boxShadow: "0 16px 48px rgba(15,23,42,0.18)",
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: 15,
                color: C.mutedOnDark,
                marginBottom: 18,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Ready to transform your operations?
            </p>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 38px)",
                fontWeight: 700,
                color: C.white,
                margin: "0 0 18px 0",
              }}
            >
              Build a smarter digital foundation for growth.
            </h3>
            <Button tone="gold" onClick={() => go("contact")}>
              Start Your Transformation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

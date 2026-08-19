import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const SERVICE_OFFERINGS = [
  {
    title: "Growth Strategy & Market Opportunity Mapping",
    badge: "CORE SERVICE",
    builtFor:
      "Leadership teams and business owners seeking to identify and prioritize high-value growth opportunities.",
    offerings: [
      "Market analysis and competitive positioning",
      "Revenue stream identification and optimization",
      "Growth pathway development",
      "Executive planning and decision support",
    ],
    imageUrl: "https://i.postimg.cc/h4MJHtZ3/2026-Sales-Enablement-Trends.jpg",
  },
  {
    title: "Sales & Business Development Excellence",
    badge: "CORE SERVICE",
    builtFor:
      "Sales teams, business development managers, and organizations scaling their pipeline and revenue.",
    offerings: [
      "Sales process optimization and improvement",
      "Business pipeline development and management",
      "Customer acquisition strategy",
      "Proposal and tender preparation support",
    ],
    imageUrl: "https://i.postimg.cc/HW3Jfkvq/Business.jpg",
  },
  {
    title: "Strategic Partnerships & Commercial Expansion",
    badge: "CORE SERVICE",
    builtFor: "Organizations ready to expand through partnerships, licensing, or new market entry.",
    offerings: [
      "Partnership identification and negotiation",
      "Joint venture structuring and planning",
      "Market expansion and entry strategy",
      "Feasibility studies and business case development",
    ],
    imageUrl: "https://i.postimg.cc/xjgkW1Fr/The-Role-of-Corporate-Finance-in-Growth.jpg",
  },
];

export default function BusinessDevelopment({ setPage }) {
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
            eyebrow="Business Development & Consulting"
            title="Commercial strategy built for growth, clarity, and measurable traction."
            sub="Strategic consulting services designed to help organizations identify opportunities, optimize operations, and accelerate sustainable growth."
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
            {SERVICE_OFFERINGS.map((service, i) => (
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
                    src={service.imageUrl}
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
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <p className="font-body" style={{ fontSize: 15, color: C.text, marginBottom: 20 }}>
              Let's discuss your business development goals.
            </p>
            <Button tone="dark" onClick={() => go("contact")}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

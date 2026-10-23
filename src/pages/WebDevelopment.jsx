import {
  AppWindow,
  LayoutTemplate,
  RefreshCw,
  ShoppingCart,
  UsersRound,
  Wrench,
} from "lucide-react";
import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import BookCallButton from "../components/BookCallButton";
import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";

const WEB_SERVICES = [
  {
    Icon: LayoutTemplate,
    title: "Business Websites",
    description:
      "Professional, responsive websites that explain your offer and make it easy for customers to get in touch.",
  },
  {
    Icon: ShoppingCart,
    title: "E-commerce Stores",
    description:
      "Online stores with product catalogues and checkout flows shaped around your business requirements.",
  },
  {
    Icon: AppWindow,
    title: "Web Applications",
    description:
      "Purpose-built web applications for business workflows, customer experiences, and digital services.",
  },
  {
    Icon: UsersRound,
    title: "Customer Portals",
    description:
      "Convenient online spaces that help customers access the information and services they need.",
  },
  {
    Icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Refresh an existing website's structure, content, and experience to better support your goals.",
  },
  {
    Icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing website updates, maintenance, and technical support after launch.",
  },
];

const WEB_PACKAGES = [
  {
    name: "Starter Website",
    description:
      "A strong online foundation for businesses that need a clear, professional web presence.",
    features: [
      "Responsive business website",
      "Core pages and contact form",
      "On-page search foundations",
      "Testing and launch support",
    ],
  },
  {
    name: "Business Website",
    description:
      "A more complete website for organizations with multiple services, audiences, or lead journeys.",
    features: [
      "Everything in Starter Website",
      "Expanded page structure and content sections",
      "Lead-generation calls to action",
      "Relevant third-party integrations",
    ],
    popular: true,
  },
  {
    name: "E-commerce Store",
    description:
      "An online storefront for businesses ready to present and sell products online.",
    features: [
      "Product catalogue and store pages",
      "Cart and checkout setup",
      "Payment and delivery options scoped to your needs",
      "Store handover and launch support",
    ],
  },
];

export default function WebDevelopment({ setPage }) {
  const requestQuote = (serviceName) => {
    const message = `Hi Calvelo,\n\nI would like to request a quote for ${serviceName}.\n\nThank you.`;
    window.sessionStorage.setItem(
      "calveloServiceLead",
      JSON.stringify({
        service: serviceName,
        page: "Web Development Services & Packages",
        message,
      })
    );
    setPage("contact");
    window.scrollTo(0, 0);
  };

  const viewPackages = () => {
    document.getElementById("web-packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px" }}>
          <SectionLabel
            dark
            eyebrow="Web Development"
            title="Websites and digital experiences built around your business."
            sub="From business websites and online stores to custom web applications, customer portals, redesigns, and ongoing support."
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <BookCallButton tone="outline" />
            <Button tone="outline" onClick={viewPackages}>
              View packages
            </Button>
          </div>
        </div>
      </AnimatedDarkSection>

      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "68px 24px" }}>
          <SectionLabel
            eyebrow="Web services"
            title="The right web solution for your next step."
            sub="Choose a focused service or combine capabilities into a custom project."
          />
          <div
            className="rgrid"
            style={{
              "--rg-base": "repeat(1, minmax(0, 1fr))",
              "--rg-sm": "repeat(2, minmax(0, 1fr))",
              "--rg-lg": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "18px",
              marginTop: 32,
            }}
          >
            {WEB_SERVICES.map(({ Icon, title, description }) => (
              <article
                key={title}
                style={{
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  padding: 24,
                  minWidth: 0,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 48,
                    height: 48,
                    display: "grid",
                    placeItems: "center",
                    color: C.tealDeep,
                    background: `${C.teal}18`,
                    border: `1px solid ${C.teal}50`,
                    borderRadius: 12,
                    marginBottom: 18,
                  }}
                >
                  <Icon size={24} />
                </div>
                <h2
                  className="font-display"
                  style={{ color: C.ink, fontSize: 19, margin: "0 0 10px" }}
                >
                  {title}
                </h2>
                <p
                  className="font-body"
                  style={{ color: C.muted, fontSize: 14, lineHeight: 1.65, margin: 0 }}
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="web-packages" style={{ background: C.white, scrollMarginTop: 24 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px" }}>
          <SectionLabel
            eyebrow="Quote-based packages"
            title="A practical starting point, tailored to your scope."
            sub="Packages are quoted to fit your content, functionality, and integrations. Custom web applications and portals are scoped individually."
          />
          <div
            className="rgrid"
            style={{
              "--rg-base": "minmax(0, 1fr)",
              "--rg-md": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "20px",
              marginTop: 34,
              alignItems: "stretch",
            }}
          >
            {WEB_PACKAGES.map((plan) => (
              <article
                key={plan.name}
                style={{
                  minWidth: 0,
                  display: "flex",
                  flexDirection: "column",
                  background: C.white,
                  border: `1px solid ${plan.popular ? C.tealDeep : C.paperDim}`,
                  borderRadius: 18,
                  padding: 26,
                  boxShadow: plan.popular ? `0 12px 32px ${C.teal}20` : "none",
                }}
              >
                {plan.popular && (
                  <span
                    className="font-mono"
                    style={{
                      alignSelf: "flex-start",
                      color: C.ink,
                      background: `${C.teal}50`,
                      borderRadius: 999,
                      padding: "6px 10px",
                      fontSize: 10,
                      letterSpacing: "0.08em",
                      marginBottom: 14,
                    }}
                  >
                    POPULAR
                  </span>
                )}
                <h2
                  className="font-display"
                  style={{ color: C.ink, fontSize: 23, margin: "0 0 8px" }}
                >
                  {plan.name}
                </h2>
                <p
                  className="font-body"
                  style={{ color: C.muted, fontSize: 14, lineHeight: 1.6, margin: "0 0 22px" }}
                >
                  {plan.description}
                </p>
                <ul
                  className="font-body"
                  style={{
                    color: C.text,
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    paddingLeft: 18,
                    margin: "0 0 26px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Button
                  tone="gold"
                  onClick={() => requestQuote(plan.name)}
                  style={{ marginTop: "auto" }}
                >
                  Request a quote
                </Button>
              </article>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 38,
            }}
          >
            <p className="font-body" style={{ color: C.muted, margin: 0 }}>
              Have a custom project in mind?
            </p>
            <BookCallButton />
          </div>
        </div>
      </section>
    </>
  );
}

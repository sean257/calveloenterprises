import { ArrowDown, ArrowRight, Check, LockKeyhole, Radar, ShieldCheck } from "lucide-react";
import { C, hexToRgba, toneAt } from "../theme";
import {
  CYBER_SECURITY_ONE_OFFS,
  CYBER_SECURITY_PACKAGES,
  CYBER_SECURITY_SERVICES,
} from "../cybersecurity";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import Button from "../components/Button";
import BookCallButton from "../components/BookCallButton";
import { Diamond } from "../components/Icons";
import SectionLabel from "../components/SectionLabel";

const PACKAGE_ARTWORK = {
  Essentials: { Icon: LockKeyhole, color: C.teal, label: "Account protection" },
  Business: { Icon: ShieldCheck, color: C.gold, label: "Managed security" },
  Advanced: { Icon: Radar, color: C.violet, label: "Continuous monitoring" },
};

export default function CyberSecurity({ setPage }) {
  const requestQuote = (serviceName) => {
    const message = `Hi Calvelo,\n\nI would like to request a quote for ${serviceName}.\n\nThank you.`;
    window.sessionStorage.setItem(
      "calveloServiceLead",
      JSON.stringify({
        service: serviceName,
        page: "Cyber Security Services & Packages",
        message,
      })
    );
    setPage("contact");
    window.scrollTo(0, 0);
  };

  const viewPackages = () => {
    document.getElementById("cyber-packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatedDarkSection>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "76px 24px 72px",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: C.cyan,
                marginBottom: 22,
              }}
            >
              <LockKeyhole size={18} />
              <span
                className="font-mono"
                style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                Cyber Security
              </span>
            </div>
            <h1
              className="font-display"
              style={{
                color: C.white,
                fontSize: "clamp(36px, 6vw, 62px)",
                lineHeight: 1.08,
                margin: "0 0 18px",
              }}
            >
              Cyber Security Services &amp; Packages
            </h1>
            <p
              className="font-body"
              style={{
                color: C.mutedOnDark,
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.65,
                maxWidth: 650,
                margin: "0 0 30px",
              }}
            >
              Protect your business from threats before they become incidents.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Button tone="gold" onClick={() => requestQuote("Security Health Check")}>
                Book a Security Health Check
              </Button>
              <Button tone="outline" icon={ArrowDown} onClick={viewPackages}>
                View packages
              </Button>
            </div>
          </div>
        </div>
      </AnimatedDarkSection>

      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px" }}>
          <SectionLabel
            eyebrow="What we do"
            title="Practical protection across your business."
            sub="Choose targeted support for the systems, people and processes your business relies on."
          />
          <div
            className="rgrid"
            style={{
              "--rg-base": "minmax(0, 1fr)",
              "--rg-sm": "repeat(2, minmax(0, 1fr))",
              "--rg-lg": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "18px",
              marginTop: 34,
            }}
          >
            {CYBER_SECURITY_SERVICES.map((service, index) => (
              <article
                key={service.title}
                style={{
                  minWidth: 0,
                  background: C.white,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <Diamond Icon={service.icon} tone={toneAt(index)} size={46} />
                <h3
                  className="font-display"
                  style={{
                    color: C.ink,
                    fontSize: 18,
                    lineHeight: 1.3,
                    margin: "20px 0 10px",
                    overflowWrap: "anywhere",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-body"
                  style={{ color: C.muted, fontSize: 14, lineHeight: 1.65, margin: 0 }}
                >
                  {service.description}
                </p>
                <BookCallButton size="sm" style={{ marginTop: 16 }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cyber-packages" style={{ background: C.white, scrollMarginTop: 24 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 24px" }}>
          <SectionLabel
            eyebrow="Security packages"
            title="Ongoing support that fits your team."
            sub="Each package brings together practical controls, regular checks and clear reporting. Request a quote to discuss the right scope."
          />
          <div
            className="rgrid"
            style={{
              "--rg-base": "minmax(0, 1fr)",
              "--rg-md": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "20px",
              marginTop: 36,
              alignItems: "stretch",
            }}
          >
            {CYBER_SECURITY_PACKAGES.map((plan) => {
              const { Icon: PackageIcon, color, label } = PACKAGE_ARTWORK[plan.name];
              return (
                <article
                  key={plan.name}
                  style={{
                    minWidth: 0,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    background: C.white,
                    border: `1px solid ${plan.popular ? C.teal : C.paperDim}`,
                    borderRadius: 18,
                    padding: 26,
                    boxShadow: plan.popular ? `0 14px 34px ${hexToRgba(C.teal, 0.12)}` : "none",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      height: 142,
                      margin: "-26px -26px 22px",
                      borderRadius: "17px 17px 0 0",
                      overflow: "hidden",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${hexToRgba(color, 0.22)}, ${hexToRgba(C.ink, 0.96)})`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: 170,
                        height: 170,
                        border: `1px solid ${hexToRgba(C.white, 0.2)}`,
                        borderRadius: "50%",
                        right: -22,
                        top: -72,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: 110,
                        height: 110,
                        border: `1px solid ${hexToRgba(color, 0.55)}`,
                        borderRadius: "50%",
                        left: -36,
                        bottom: -58,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `radial-gradient(${hexToRgba(C.white, 0.34)} 1px, transparent 1px)`,
                        backgroundSize: "18px 18px",
                        opacity: 0.35,
                      }}
                    />
                    <div
                      style={{
                        width: 74,
                        height: 74,
                        borderRadius: 22,
                        display: "grid",
                        placeItems: "center",
                        color,
                        background: hexToRgba(C.ink, 0.72),
                        border: `1px solid ${hexToRgba(color, 0.55)}`,
                        boxShadow: `0 0 36px ${hexToRgba(color, 0.28)}`,
                        zIndex: 1,
                      }}
                    >
                      <PackageIcon size={38} strokeWidth={1.7} />
                    </div>
                    <span
                      className="font-mono"
                      style={{
                        position: "absolute",
                        right: 16,
                        bottom: 14,
                        color: C.white,
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  {plan.popular && (
                    <span
                      className="font-mono"
                      style={{
                        alignSelf: "flex-start",
                        background: C.teal,
                        color: C.ink,
                        borderRadius: 999,
                        padding: "6px 10px",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        marginBottom: 14,
                      }}
                    >
                      MOST POPULAR
                    </span>
                  )}
                  <h3
                    className="font-display"
                    style={{ fontSize: 25, color: C.ink, margin: "0 0 6px" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="font-body"
                    style={{ color: C.muted, fontSize: 13, margin: "0 0 20px" }}
                  >
                    {plan.audience}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 26px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      flex: 1,
                    }}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        style={{ display: "flex", alignItems: "flex-start", gap: 9, minWidth: 0 }}
                      >
                        <Check
                          size={16}
                          aria-hidden="true"
                          style={{ color: C.tealDeep, flexShrink: 0, marginTop: 2 }}
                        />
                        <span
                          className="font-body"
                          style={{ color: C.text, fontSize: 13.5, lineHeight: 1.5 }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    tone={plan.popular ? "gold" : "outlineInk"}
                    onClick={() => requestQuote(`Cyber Security – ${plan.name} package`)}
                  >
                    Request a quote
                  </Button>
                  <BookCallButton size="sm" style={{ marginTop: 12 }} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <SectionLabel eyebrow="One-off services" title="Help with a specific security need." />
          <div
            className="rgrid"
            style={{
              "--rg-base": "minmax(0, 1fr)",
              "--rg-sm": "repeat(2, minmax(0, 1fr))",
              "--rg-lg": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "16px",
              marginTop: 28,
            }}
          >
            {CYBER_SECURITY_ONE_OFFS.map((service) => (
              <article
                key={service.name}
                style={{
                  minWidth: 0,
                  background: C.white,
                  border: `1px solid ${hexToRgba(C.ink, 0.2)}`,
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: `0 8px 24px ${hexToRgba(C.ink, 0.06)}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                    height: 168,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: 1,
                  }}
                >
                  <h3
                    className="font-display"
                    style={{
                      color: C.ink,
                      fontSize: 17,
                      lineHeight: 1.35,
                      margin: "0 0 8px",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-body"
                    style={{
                      color: C.muted,
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      margin: "0 0 20px",
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </p>
                  <Button
                    tone="outlineInk"
                    icon={ArrowRight}
                    style={{ borderWidth: 2 }}
                    onClick={() => requestQuote(service.name)}
                  >
                    Request a quote
                  </Button>
                  <BookCallButton size="sm" style={{ marginTop: 12 }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, maxWidth: 720 }}>
              <div aria-hidden="true" style={{ color: C.teal, flexShrink: 0, marginTop: 4 }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2
                  className="font-display"
                  style={{ color: C.white, fontSize: "clamp(23px, 3vw, 32px)", margin: "0 0 8px" }}
                >
                  Not sure where to start?
                </h2>
                <p
                  className="font-body"
                  style={{ color: C.mutedOnDark, fontSize: 15, lineHeight: 1.6, margin: 0 }}
                >
                  Begin with a Security Health Check.
                </p>
              </div>
            </div>
            <Button tone="gold" onClick={() => requestQuote("Security Health Check")}>
              Book a Security Health Check
            </Button>
          </div>
        </div>
      </AnimatedDarkSection>
    </>
  );
}

import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { C } from "../theme";
import { NAV } from "../data";
import Logo from "./Logo";
import Button from "./Button";

const SERVICE_PAGES = [
  { id: "business-development", label: "Business Development & Consulting" },
  { id: "digital-transformation", label: "Digital Transformation" },
  { id: "ai-training", label: "AI & Applied Training" },
];

export default function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const go = (id) => {
    setPage(id);
    setOpen(false);
    setServicesDropdown(false);
    window.scrollTo(0, 0);
  };

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 3000);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: C.ink,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo onClick={() => go("home")} />
        <nav style={{ gap: 4 }} className="nav-desktop-links">
          {NAV.map((n) => {
            if (n.id === "services") {
              return (
                <div
                  key={n.id}
                  style={{ position: "relative" }}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    onClick={() => go(n.id)}
                    className="foc font-body"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "8px 14px",
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 500,
                      color: page === n.id || servicesDropdown ? C.ink : C.white,
                      backgroundColor: page === n.id || servicesDropdown ? C.teal : "transparent",
                      transition: "background-color .15s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    {n.label}
                    <ChevronDown
                      size={16}
                      style={{
                        transition: "transform .2s ease",
                        transform: servicesDropdown ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdown && (
                    <div
                      className="nav-dropdown"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: C.ink,
                        border: `1px solid ${C.teal}`,
                        borderRadius: 8,
                        marginTop: 4,
                        overflow: "hidden",
                        minWidth: 280,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.24)",
                        animation: "dropdownSlideDown .2s ease forwards",
                      }}
                    >
                      {SERVICE_PAGES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => go(service.id)}
                          className="foc"
                          style={{
                            width: "100%",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "12px 16px",
                            fontSize: 14,
                            fontWeight: 500,
                            color: page === service.id ? C.teal : C.white,
                            backgroundColor:
                              page === service.id ? "rgba(76, 175, 175, 0.1)" : "transparent",
                            transition: "all .15s ease",
                            borderLeft:
                              page === service.id ? `3px solid ${C.teal}` : "3px solid transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (page !== service.id) {
                              e.target.style.backgroundColor = `rgba(255,255,255,0.08)`;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (page !== service.id) {
                              e.target.style.backgroundColor = "transparent";
                            }
                          }}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="foc font-body"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 500,
                  color: page === n.id ? C.ink : C.white,
                  backgroundColor: page === n.id ? C.teal : "transparent",
                  transition: "background-color .15s ease",
                }}
              >
                {n.label}
              </button>
            );
          })}
        </nav>
        <div className="nav-desktop-cta">
          <Button tone="gold" onClick={() => go("contact")}>
            Get in touch
          </Button>
        </div>
        <button
          className="foc nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: C.white, cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {NAV.map((n) => {
            if (n.id === "services") {
              return (
                <div key={n.id}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="foc font-body"
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "12px 8px",
                      fontSize: 16,
                      fontWeight: 500,
                      color: page === n.id ? C.teal : C.white,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {n.label}
                    <ChevronDown
                      size={18}
                      style={{
                        transition: "transform .2s ease",
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div
                      style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}
                    >
                      {SERVICE_PAGES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => go(service.id)}
                          className="foc font-body"
                          style={{
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "10px 8px",
                            fontSize: 14,
                            fontWeight: 400,
                            color: page === service.id ? C.teal : C.mutedOnDark,
                          }}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="foc font-body"
                style={{
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 8px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: page === n.id ? C.teal : C.white,
                }}
              >
                {n.label}
              </button>
            );
          })}
          <div style={{ marginTop: 8 }}>
            <Button tone="gold" onClick={() => go("contact")}>
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

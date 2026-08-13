import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { C } from "../theme";
import { NAV, CONTACT } from "../data";
import Logo from "./Logo";

const SOCIALS = [
  { key: "facebook", label: "Facebook", href: "#", Icon: Facebook },
  { key: "instagram", label: "Instagram", href: "#", Icon: Instagram },
  { key: "linkedin", label: "LinkedIn", href: "#", Icon: Linkedin },
  { key: "twitter", label: "X / Twitter", href: "#", Icon: Twitter },
];

export default function Footer({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  return (
    <footer
      style={{
        background: C.ink2,
        color: C.mutedOnDark,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 24px 28px" }}>
        <div
          style={{ "--rg-base": "1fr", "--rg-md": "1.4fr 1fr 1fr", "--rg-gap": "32px" }}
          className="rgrid"
        >
          <div>
            <Logo />
            <p
              className="font-body"
              style={{ marginTop: 16, fontSize: 14, lineHeight: 1.65, maxWidth: 320 }}
            >
              Business consulting and technology solutions for organizations building their next
              chapter.
            </p>
          </div>
          <div>
            <div
              className="font-mono"
              style={{ fontSize: 11, letterSpacing: "0.14em", color: C.teal, marginBottom: 14 }}
            >
              SITE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="foc font-body"
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: C.mutedOnDark,
                    fontSize: 14,
                  }}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div
              className="font-mono"
              style={{ fontSize: 11, letterSpacing: "0.14em", color: C.teal, marginBottom: 14 }}
            >
              CONTACT
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}
              className="font-body"
            >
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="foc"
                style={{ color: C.mutedOnDark, display: "flex", gap: 8, textDecoration: "none" }}
              >
                <Phone size={16} /> {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="foc"
                style={{ color: C.mutedOnDark, display: "flex", gap: 8, textDecoration: "none" }}
              >
                <Mail size={16} /> {CONTACT.email}
              </a>
              <div style={{ display: "flex", gap: 8 }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} /> {CONTACT.address}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
          className="font-body"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12.5 }}>
              © 2026 Calvelo Enterprises. From strategy to solution.
            </span>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {SOCIALS.map(({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  title={label}
                  onClick={(event) => event.preventDefault()}
                  className="foc"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: C.white,
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <button
              onClick={() => go("faq")}
              className="foc"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.mutedOnDark,
                fontSize: 12.5,
                textDecoration: "underline",
                textUnderlineOffset: 3,
                padding: 0,
              }}
            >
              FAQ
            </button>
            <button
              onClick={() => go("privacy")}
              className="foc"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.mutedOnDark,
                fontSize: 12.5,
                textDecoration: "underline",
                textUnderlineOffset: 3,
                padding: 0,
              }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => go("terms")}
              className="foc"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.mutedOnDark,
                fontSize: 12.5,
                textDecoration: "underline",
                textUnderlineOffset: 3,
                padding: 0,
              }}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

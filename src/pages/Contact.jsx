import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { C } from "../theme";
import { CONTACT } from "../data";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { Diamond } from "../components/Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = () => {
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };
  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: `1px solid ${C.paperDim}`,
    fontFamily: "'Inter',sans-serif",
    fontSize: 14.5,
    background: C.white,
    color: C.text,
    boxSizing: "border-box",
  };
  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="Contact"
            title="Let's talk about what's next."
            sub="Tell us a bit about your business and what you're trying to solve — we'll get back to you."
          />
        </div>
      </AnimatedDarkSection>
      <section style={{ background: C.paper }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "64px 24px 100px",
            "--rg-base": "1fr",
            "--rg-md": "0.9fr 1.1fr",
            "--rg-gap": "40px",
          }}
          className="rgrid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="foc"
              style={{
                textDecoration: "none",
                background: C.white,
                border: `1px solid ${C.paperDim}`,
                borderRadius: 16,
                padding: 22,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <Diamond Icon={Phone} tone="teal" size={44} />
              <div>
                <div
                  className="font-mono"
                  style={{ fontSize: 11, color: C.muted, letterSpacing: "0.1em", marginBottom: 4 }}
                >
                  PHONE
                </div>
                <div className="font-body" style={{ fontWeight: 600, color: C.ink }}>
                  {CONTACT.phone}
                </div>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="foc"
              style={{
                textDecoration: "none",
                background: C.white,
                border: `1px solid ${C.paperDim}`,
                borderRadius: 16,
                padding: 22,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <Diamond Icon={Mail} tone="gold" size={44} />
              <div>
                <div
                  className="font-mono"
                  style={{ fontSize: 11, color: C.muted, letterSpacing: "0.1em", marginBottom: 4 }}
                >
                  EMAIL
                </div>
                <div className="font-body" style={{ fontWeight: 600, color: C.ink }}>
                  {CONTACT.email}
                </div>
              </div>
            </a>
            <div
              style={{
                background: C.white,
                border: `1px solid ${C.paperDim}`,
                borderRadius: 16,
                padding: 22,
                display: "flex",
                gap: 16,
                alignItems: "center",
              }}
            >
              <Diamond Icon={MapPin} tone="violet" size={44} />
              <div>
                <div
                  className="font-mono"
                  style={{ fontSize: 11, color: C.muted, letterSpacing: "0.1em", marginBottom: 4 }}
                >
                  ADDRESS
                </div>
                <div className="font-body" style={{ fontWeight: 600, color: C.ink }}>
                  {CONTACT.address}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.paperDim}`,
              borderRadius: 18,
              padding: 32,
            }}
          >
            <div
              className="font-display"
              style={{ fontWeight: 700, fontSize: 19, color: C.ink, marginBottom: 20 }}
            >
              Send a message
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label
                  className="font-body"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.text,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Name
                </label>
                <input
                  className="foc"
                  style={inputStyle}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  className="font-body"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.text,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Email
                </label>
                <input
                  className="foc"
                  style={inputStyle}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="font-body"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.text,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  className="foc"
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you're working on"
                />
              </div>
              <div style={{ marginTop: 6 }}>
                <Button tone="dark" onClick={submit}>
                  Send message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

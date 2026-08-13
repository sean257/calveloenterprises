import { C } from "../theme";
import SectionLabel from "./SectionLabel";
import AnimatedDarkSection from "./AnimatedDarkSection";

export function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 48px" }}>
          <SectionLabel dark eyebrow={eyebrow} title={title} />
        </div>
      </AnimatedDarkSection>
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 100px" }}>
          <div className="font-body" style={{ fontSize: 13, color: C.muted, marginBottom: 32 }}>
            Last updated: {updated}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>{children}</div>
          <div style={{ marginTop: 48, padding: 20, background: C.paperDim, borderRadius: 12 }}>
            <p
              className="font-body"
              style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.7, margin: 0 }}
            >
              This page is a general starting template and isn't a substitute for legal advice.
              Since Calvelo operates across multiple countries, we'd recommend having it reviewed by
              a qualified lawyer familiar with data protection and consumer law in each market you
              serve before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }) {
  return (
    <div>
      <h3
        className="font-display"
        style={{ fontSize: 18, fontWeight: 700, color: C.ink, marginBottom: 10 }}
      >
        {title}
      </h3>
      <div className="font-body" style={{ fontSize: 14.5, color: C.text, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}

import { CONTACT } from "../data";
import { LegalLayout, LegalSection } from "../components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="August 2026">
      <LegalSection title="Acceptance of terms">
        By accessing or using this website, you agree to these terms. If you don't agree, please
        don't use the site.
      </LegalSection>
      <LegalSection title="Use of this website">
        This website is provided for general information about Calvelo's services. You agree not to
        misuse the site — including attempting unauthorized access, disrupting its operation, or
        scraping content without permission.
      </LegalSection>
      <LegalSection title="Intellectual property">
        The content on this site — including text, graphics, logos, and design — belongs to Calvelo
        Enterprises or its licensors, unless stated otherwise, and may not be reproduced without
        permission.
      </LegalSection>
      <LegalSection title="Not professional advice">
        Information on this website is general in nature and doesn't constitute professional, legal,
        financial, or technical advice for your specific situation. Any actual engagement for
        services is governed by a separate agreement between Calvelo and the client.
      </LegalSection>
      <LegalSection title="No warranties">
        This website is provided "as is." While we try to keep information accurate and up to date,
        we make no guarantees about completeness, accuracy, or availability of the site.
      </LegalSection>
      <LegalSection title="Limitation of liability">
        To the extent permitted by law, Calvelo is not liable for any indirect, incidental, or
        consequential loss arising from your use of this website.
      </LegalSection>
      <LegalSection title="Third-party links">
        This site may link to third-party websites. We aren't responsible for the content or
        practices of sites we don't control.
      </LegalSection>
      <LegalSection title="Governing law">
        These terms are governed by the laws applicable in the jurisdiction in which Calvelo
        Enterprises is registered, without limiting any mandatory consumer protection laws that may
        apply to you in your own country.
      </LegalSection>
      <LegalSection title="Changes to these terms">
        We may update these terms from time to time. Continued use of the website after changes are
        posted means you accept the updated terms.
      </LegalSection>
      <LegalSection title="Contact us">
        Questions about these terms can be directed to {CONTACT.email} or {CONTACT.phone}.
      </LegalSection>
    </LegalLayout>
  );
}

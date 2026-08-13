import { CONTACT } from "../data";
import { LegalLayout, LegalSection } from "../components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="August 2026">
      <LegalSection title="Overview">
        Calvelo Enterprises provides business consulting and
        technology solutions to clients in multiple countries. This policy explains what information
        we collect through this website, how we use it, and the choices you have.
      </LegalSection>
      <LegalSection title="Information we collect">
        <strong>Information you give us</strong> — such as your name, email address, phone number,
        and message content when you submit a contact form or email us directly.
        <br />
        <br />
        <strong>Information collected automatically</strong> — such as your IP address, browser
        type, device information, and pages visited, typically gathered through standard website
        analytics and log files.
      </LegalSection>
      <LegalSection title="How we use your information">
        We use the information we collect to respond to enquiries, provide quotes or proposals,
        deliver services you've requested, improve this website, and — where you've agreed to it —
        send occasional updates about our services. We do not sell your personal information.
      </LegalSection>
      <LegalSection title="Sharing of information">
        We may share information with service providers who help us run our business (for example,
        email, hosting, or analytics providers), and where required to comply with law, protect our
        rights, or as part of a business transfer. These providers are only permitted to use your
        data to perform services on our behalf.
      </LegalSection>
      <LegalSection title="International data transfers">
        Because Calvelo serves clients across multiple countries, information may be processed in a
        country other than the one you're based in. Where this happens, we aim to apply consistent
        safeguards regardless of where the data is handled.
      </LegalSection>
      <LegalSection title="Data retention">
        We keep personal information only for as long as reasonably necessary for the purposes
        described in this policy, or as required by applicable law.
      </LegalSection>
      <LegalSection title="Your rights">
        Depending on where you're located, you may have rights to access, correct, delete, or object
        to our use of your personal information. To exercise any of these rights, contact us using
        the details below.
      </LegalSection>
      <LegalSection title="Cookies">
        This website may use cookies or similar technologies to understand how it's used and improve
        performance. You can control cookies through your browser settings.
      </LegalSection>
      <LegalSection title="Security">
        We take reasonable technical and organizational measures to protect personal information,
        though no method of transmission or storage is completely secure.
      </LegalSection>
      <LegalSection title="Children">
        This website is not directed at children, and we do not knowingly collect personal
        information from children.
      </LegalSection>
      <LegalSection title="Changes to this policy">
        We may update this policy from time to time. Material changes will be reflected by updating
        the "last updated" date above.
      </LegalSection>
      <LegalSection title="Contact us">
        Questions about this policy or your data can be directed to {CONTACT.email} or{" "}
        {CONTACT.phone}.
      </LegalSection>
    </LegalLayout>
  );
}

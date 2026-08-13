import { useEffect, useState } from "react";
import { MessageSquareText } from "lucide-react";
import { C } from "./theme";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Faq from "./pages/Faq";
import AiTraining from "./pages/AiTraining";
import BusinessDevelopment from "./pages/BusinessDevelopment";
import DigitalTransformation from "./pages/DigitalTransformation";

const META = {
  home: {
    title: "Calvelo Business Development | From Strategy to Solution",
    description:
      "Calvelo Business Development helps organizations improve performance, streamline operations, and embrace digital transformation with practical business and technology solutions.",
  },
  services: {
    title: "Business Services | Calvelo",
    description:
      "Explore Calvelo’s consulting, digital transformation, AI, cyber security, and technology solutions designed to improve business performance.",
  },
  industries: {
    title: "Industries We Serve | Calvelo",
    description:
      "Learn how Calvelo supports organizations across logistics, healthcare, education, retail, government, and more with tailored digital and operational solutions.",
  },
  about: {
    title: "About Calvelo | Business Consulting & Technology",
    description:
      "Discover Calvelo’s mission, values, and approach to helping growing organizations improve operations, technology, and long-term business outcomes.",
  },
  faq: {
    title: "FAQ | Calvelo",
    description:
      "Find answers to common questions about how Calvelo works with businesses, digital transformation initiatives, implementation support, and project engagement models.",
  },
  "ai-training": {
    title: "AI & Applied Training | Calvelo",
    description:
      "Practical AI training programs for professionals, teams, and business leaders. Build AI capability across your organization with hands-on, applied learning.",
  },
  "business-development": {
    title: "Business Development & Consulting | Calvelo",
    description:
      "Strategic business development and consulting services to identify growth opportunities, optimize sales, and build commercial excellence.",
  },
  "digital-transformation": {
    title: "Digital Transformation Services | Calvelo",
    description:
      "End-to-end digital transformation services including process automation, cloud migration, and AI integration for modern operations.",
  },
  contact: {
    title: "Contact Calvelo | Get in Touch",
    description:
      "Contact Calvelo to discuss your business challenges, digital transformation goals, and customized consulting or technology solutions.",
  },
  privacy: {
    title: "Privacy Policy | Calvelo",
    description:
      "Read Calvelo’s privacy policy to understand how personal information is collected, used, protected, and managed on this website.",
  },
  terms: {
    title: "Terms & Conditions | Calvelo",
    description:
      "Review Calvelo’s website terms and conditions for use of our digital services, content, and business information.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Calvelo Enterprises",
  description:
    "Calvelo Enterprises provides business consulting, digital transformation, and technology solutions to support organizational growth and operational efficiency.",
  areaServed: ["Zimbabwe", "Regional markets"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "41 Leopold Takawira Avenue",
    addressCountry: "ZW",
  },
  telephone: "+263780800757",
  email: "calveloenterprises@gmail.com",
  sameAs: [],
};

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const meta = META[page] || META.home;

    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", meta.description);

    ["og:title", "og:description", "twitter:title", "twitter:description"].forEach((property) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag && property.startsWith("twitter:")) {
        tag = document.querySelector(`meta[name="${property.replace(":", "-")}"]`);
      }
      if (!tag) {
        tag = document.createElement("meta");
        if (property.startsWith("og:")) tag.setAttribute("property", property);
        else tag.setAttribute("name", property.replace(":", "-"));
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", meta.title || meta.description);
      if (property === "og:description" || property === "twitter:description") {
        tag.setAttribute("content", meta.description);
      }
    });

    let schemaTag = document.getElementById("calvelo-schema");
    if (!schemaTag) {
      schemaTag = document.createElement("script");
      schemaTag.id = "calvelo-schema";
      schemaTag.type = "application/ld+json";
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(localBusinessSchema);
  }, [page]);

  return (
    <div className="font-body" style={{ background: C.navy, minHeight: "100vh" }}>
      <Nav page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "services" && <Services setPage={setPage} />}
      {page === "industries" && <Industries setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "faq" && <Faq setPage={setPage} />}
      {page === "ai-training" && <AiTraining setPage={setPage} />}
      {page === "business-development" && <BusinessDevelopment setPage={setPage} />}
      {page === "digital-transformation" && <DigitalTransformation setPage={setPage} />}
      {page === "contact" && <Contact />}
      {page === "privacy" && <Privacy />}
      {page === "terms" && <Terms />}
      <Footer setPage={setPage} />

      <button
        type="button"
        aria-label="Open FAQ bot"
        onClick={() => setPage("faq")}
        style={{
          position: "fixed",
          right: 22,
          bottom: 22,
          width: 58,
          height: 58,
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #16B8A6, #0E9184)",
          color: "white",
          boxShadow: "0 14px 30px rgba(22, 184, 166, 0.3)",
          zIndex: 100,
          cursor: "pointer",
        }}
      >
        <MessageSquareText size={24} />
      </button>
    </div>
  );
}

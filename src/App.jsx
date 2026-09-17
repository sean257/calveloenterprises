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

const PAGE_TO_PATH = {
  home: "/",
  services: "/services",
  industries: "/industries",
  about: "/about",
  faq: "/faq",
  "ai-training": "/ai-training",
  "business-development": "/business-development",
  "digital-transformation": "/digital-transformation",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page]),
);

const SITE_URL = "https://calveloenterprises.com";

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
  const getPageFromPath = () => {
    const pathname = window.location.pathname;
    if (pathname === "/") return "home";
    return PATH_TO_PAGE[pathname] || "home";
  };

  const [page, setPage] = useState(() => getPageFromPath());

  const updatePage = (nextPage) => {
    const nextPath = PAGE_TO_PATH[nextPage] || "/";
    setPage(nextPage);
    window.history.pushState({}, "", nextPath);
  };

  useEffect(() => {
    const onPopState = () => {
      setPage(getPageFromPath());
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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

    const canonicalUrl = `${SITE_URL}${PAGE_TO_PATH[page] || "/"}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);

    [
      ["og:url", "property", canonicalUrl],
      ["og:title", "property", meta.title],
      ["og:description", "property", meta.description],
      ["twitter:url", "name", canonicalUrl],
      ["twitter:title", "name", meta.title],
      ["twitter:description", "name", meta.description],
    ].forEach(([key, attrName, content]) => {
      let tag = document.querySelector(
        attrName === "property"
          ? `meta[property="${key}"]`
          : `meta[name="${key}"]`,
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
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
      <Nav page={page} setPage={updatePage} />
      {page === "home" && <Home setPage={updatePage} />}
      {page === "services" && <Services setPage={updatePage} />}
      {page === "industries" && <Industries setPage={updatePage} />}
      {page === "about" && <About setPage={updatePage} />}
      {page === "faq" && <Faq setPage={updatePage} />}
      {page === "ai-training" && <AiTraining setPage={updatePage} />}
      {page === "business-development" && <BusinessDevelopment setPage={updatePage} />}
      {page === "digital-transformation" && <DigitalTransformation setPage={updatePage} />}
      {page === "contact" && <Contact />}
      {page === "privacy" && <Privacy />}
      {page === "terms" && <Terms />}
      <Footer setPage={updatePage} />

      <button
        type="button"
        aria-label="Open FAQ bot"
        onClick={() => updatePage("faq")}
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

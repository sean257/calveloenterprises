import { useEffect, useState } from "react";
import { MessageSquareText, MessageCircle } from "lucide-react";
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
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
);

const SITE_URL = "https://calveloenterprises.com";

const META = {
  home: {
    title: "Business Consulting Zimbabwe | Calvelo Enterprises",
    description:
      "Business consulting in Zimbabwe, technology solutions in Harare, digital transformation, IT consulting, and business development for growing organizations.",
    keywords: [
      "business consulting Zimbabwe",
      "technology solutions Harare",
      "digital transformation Zimbabwe",
      "IT consulting Harare",
      "business development company Zimbabwe",
    ],
  },
  services: {
    title: "Business and Technology Services Zimbabwe | Calvelo",
    description:
      "Business consulting services in Zimbabwe and IT services in Harare, including software development, technology consulting, cloud, cybersecurity, and digital solutions.",
    keywords: [
      "business consulting services Zimbabwe",
      "IT services Harare",
      "software development Zimbabwe",
      "technology consulting Harare",
      "ERP solutions Zimbabwe",
      "CRM implementation Zimbabwe",
      "system integration Zimbabwe",
      "database development Harare",
      "AI solutions Zimbabwe",
      "AI chatbot for business",
      "AI automation Harare",
      "document automation",
      "AI customer support",
      "vehicle tracking Zimbabwe",
      "GPS tracking Harare",
      "fleet management Zimbabwe",
      "asset tracking Zimbabwe",
      "IoT solutions",
      "cyber security Zimbabwe",
      "cybersecurity consulting Harare",
      "network security Zimbabwe",
      "security assessment",
      "data backup solutions Zimbabwe",
      "SEO services Zimbabwe",
      "digital marketing Harare",
      "branding Zimbabwe",
      "social media strategy Zimbabwe",
      "online marketing company Harare",
      "business intelligence Zimbabwe",
      "Power BI dashboards Harare",
      "KPI reporting",
      "data analytics Zimbabwe",
      "business dashboards",
      "cloud solutions Zimbabwe",
      "Microsoft 365 Zimbabwe",
      "Google Workspace Harare",
      "cloud migration Zimbabwe",
      "backup and disaster recovery",
    ],
  },
  industries: {
    title: "Industries We Serve | Calvelo",
    description:
      "Explore business solutions by industry in Zimbabwe, including technology for SMEs and consulting for mining and agriculture.",
    keywords: [
      "business solutions by industry Zimbabwe",
      "technology for SMEs Zimbabwe",
      "consulting for mining and agriculture Zimbabwe",
    ],
  },
  about: {
    title: "About Calvelo Enterprises | Harare Consulting Firm",
    description:
      "Meet Calvelo Enterprises, a Harare consulting firm and technology consulting company in Zimbabwe helping organizations improve business performance.",
    keywords: [
      "about Calvelo Enterprises",
      "Harare consulting firm",
      "technology consulting company Zimbabwe",
    ],
  },
  faq: {
    title: "FAQ | Calvelo",
    description:
      "Find answers to common questions about how Calvelo works with businesses, digital transformation initiatives, implementation support, and project engagement models.",
  },
  "ai-training": {
    title: "AI & Applied Training | Calvelo",
    description:
      "AI training in Zimbabwe and business technology courses in Harare, with corporate training, cybersecurity awareness, AI automation, chatbots, and document automation.",
    keywords: [
      "AI solutions Zimbabwe",
      "AI chatbot for business",
      "AI automation Harare",
      "document automation",
      "AI customer support",
      "AI training Zimbabwe",
      "business technology courses Harare",
      "cyber security awareness training Zimbabwe",
      "corporate training Harare",
    ],
  },
  "business-development": {
    title: "Business Development & Consulting | Calvelo",
    description:
      "Business consulting in Zimbabwe from business development consultants in Harare, with tender proposal writing, feasibility studies, and business strategy consulting.",
    keywords: [
      "business consulting Zimbabwe",
      "business development consultants Harare",
      "tender proposal writing Zimbabwe",
      "feasibility study Zimbabwe",
      "business strategy consulting",
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation Services | Calvelo",
    description:
      "Digital transformation in Zimbabwe with business process and workflow automation, cloud migration, and consulting to modernize business operations.",
    keywords: [
      "digital transformation Zimbabwe",
      "business process automation Harare",
      "workflow automation Zimbabwe",
      "cloud migration Zimbabwe",
      "digital transformation consulting",
      "website development Harare",
      "web development Zimbabwe",
      "e-commerce website Zimbabwe",
      "web design company Harare",
      "website redesign",
      "custom software development Zimbabwe",
      "software development company Harare",
      "mobile app development Zimbabwe",
      "API integration",
      "bespoke software",
      "software licensing Zimbabwe",
      "Microsoft licences Harare",
      "business antivirus Zimbabwe",
      "software licence management",
      "buy software licences Zimbabwe",
    ],
  },
  contact: {
    title: "Contact Calvelo Enterprises | Harare Business Consultants",
    description:
      "Contact Calvelo Enterprises to reach business consultants in Harare and discuss IT services, digital transformation, or technology solutions.",
    keywords: [
      "contact Calvelo Enterprises",
      "business consultants Harare",
      "IT company Harare contact",
    ],
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
  email: "sales@calveloenterprises.com",
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

    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (meta.keywords) {
      if (!keywordsTag) {
        keywordsTag = document.createElement("meta");
        keywordsTag.name = "keywords";
        document.head.appendChild(keywordsTag);
      }
      keywordsTag.setAttribute("content", meta.keywords.join(", "));
    } else {
      keywordsTag?.remove();
    }

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
        attrName === "property" ? `meta[property="${key}"]` : `meta[name="${key}"]`
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

      <a
        href="https://wa.me/c/263779365818"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          right: 22,
          bottom: 96,
          width: 58,
          height: 58,
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #25D366, #1DAE5A)",
          color: "white",
          boxShadow: "0 14px 30px rgba(37, 211, 102, 0.3)",
          zIndex: 100,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <MessageCircle size={24} />
      </a>

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

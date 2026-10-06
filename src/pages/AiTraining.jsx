import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { CheckCircle2, Brain, Zap, Sparkles, Workflow, Users, Shield } from "lucide-react";

const TRAINING_COURSES = [
  {
    title: "AI Essentials for Professionals",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor:
      "Operations managers, business analysts, decision-makers ready to lead AI adoption in their teams.",
    summary:
      "A practical introduction to AI concepts, use cases, and adoption strategy for modern organizations.",
    duration: "4 weeks | 2 hours/week",
    format: "Hybrid (online + live sessions)",
    skills: [
      "AI fundamentals and real-world applications",
      "Identifying high-impact AI use cases for your business",
      "Responsible AI governance and risk management",
      "Building organizational AI capability",
      "Creating and executing an AI adoption roadmap",
    ],
    imageUrl:
      "https://i.postimg.cc/qBQt9vD9/Artificial-Intelligence-Course-in-Kerala-A-Guide-for-Learners.jpg",
  },
  {
    title: "Practical, Applied Training for AI",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor:
      "Teams who write, analyze, communicate, and solve problems, as well as anyone ready to use AI in daily work.",
    summary:
      "Hands-on training focused on applying AI tools to everyday business tasks with confidence and control.",
    duration: "6 weeks | 3 hours/week",
    format: "Hands-on labs + group projects",
    skills: [
      "Effective prompting and AI tool mastery",
      "Using AI for content creation, research, and analysis",
      "Workflow automation with AI and integrations",
      "Quality control and output verification",
      "Building sustainable AI habits in your work",
      "Practical problem-solving with AI tools",
    ],
    imageUrl:
      "https://i.postimg.cc/nVTs6hS5/Artificial-Intelligence-Classroom-Learning-AI-Machine-Learning-Training-for-Students.jpg",
  },
  {
    title: "AI for Small Business & Entrepreneurs",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor:
      "Business owners, entrepreneurs, and team leaders ready to accelerate growth with AI.",
    summary:
      "A focused learning path for owners who want practical AI tools that improve operations, strategy, and customer experience.",
    duration: "5 weeks | 2.5 hours/week",
    format: "Interactive workshops + 1-on-1 coaching",
    skills: [
      "AI-powered marketing and customer engagement",
      "Automation for operations and admin workflows",
      "Data-driven decision making with AI tools",
      "Building a competitive advantage through AI",
      "Cost reduction through intelligent automation",
      "Customer experience enhancement with AI",
    ],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Essentials for the Zimbabwean Professional",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Admin & operations, marketing & communications, finance, customer service: anyone starting from zero.",
    summary:
      "A beginner-friendly introduction to AI literacy, prompt writing, safety, verification, and responsible use in everyday work.",
    duration: "8 hours",
    format: "Online or in-person",
    skills: [
      "AI Literacy",
      "Prompt Writing",
      "AI Safety & Verification",
      "Responsible AI Use",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Beginner-friendly | Schedule: 4 weekly sessions or 2 half-days",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Everyday Work",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Anyone who writes emails, reports, or proposals for a living.",
    summary:
      "Build faster, clearer work habits using AI for writing, summarizing, and planning without losing quality.",
    duration: "8 hours",
    format: "Online or in-person",
    skills: [
      "Business Writing",
      "Document Summarising",
      "Weekly Planning",
      "Prompt Libraries",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Beginner-friendly | Schedule: 4 weekly sessions or 2 half-days",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Small Business & Entrepreneurs",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Business owners, entrepreneurs, informal traders.",
    summary:
      "Use AI to support marketing, communication, pricing, bookkeeping, and funding proposals on a realistic budget.",
    duration: "8 hours",
    format: "Online or in-person",
    skills: [
      "Marketing on a Budget",
      "Customer Communication",
      "Pricing & Bookkeeping",
      "Funding Proposals",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Beginner-friendly | Schedule: 4 weekly sessions or 2 half-days",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Project Management",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Team leads, project managers, operations staff, agencies.",
    summary:
      "Apply AI to planning, status reporting, coordination, and workflow automation without needing advanced technical skills.",
    duration: "8 hours",
    format: "Online or in-person",
    skills: [
      "Project Setup",
      "Workflow Automation",
      "Status Reporting",
      "Team Coordination",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Beginner-friendly, no ClickUp experience needed | Schedule: 4 weekly sessions or 2 half-days",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Educators",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Primary and secondary school teachers, tutors, education administrators.",
    summary:
      "Use AI to save time on planning, differentiated instruction, worksheets, and support while keeping teaching human-centered.",
    duration: "8 hours",
    format: "Online or in-person",
    skills: [
      "Lesson Planning",
      "Quiz & Worksheet Creation",
      "Differentiated Instruction",
      "Grading Support",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Beginner-friendly | Schedule: 4 weekly sessions or 2 half-days",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Business Operations",
    badge: "NEW",
    relatedService: "Artificial Intelligence",
    builtFor: "Managers, admin and operations staff, and business owners starting from zero.",
    summary:
      "Learn to use AI assistants to take routine work off your team's plate, with clear rules for accuracy, privacy, and responsible use.",
    duration: "3 sessions",
    format: "Live online coaching",
    skills: [
      "Write prompts that produce usable first drafts",
      "Check AI output before it reaches a customer or a report",
      "Set a simple team policy for what can go into an AI tool",
      "Build a reusable prompt library for your recurring tasks",
    ],
    sessions: [
      "Session 1: How AI assistants work, and where they fail",
      "Session 2: Prompting for real tasks: emails, reports, summaries, planning",
      "Session 3: Verification, privacy, and your team's AI-use policy",
    ],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Digital Transformation for SMEs",
    badge: "NEW",
    relatedService: "Digital Transformation",
    builtFor: "Owners and managers of small and mid-sized businesses.",
    summary:
      "A practical route from paper and spreadsheets to systems that scale, without buying software you don't need.",
    duration: "3 sessions",
    format: "Live online workshop",
    skills: [
      "Map how work actually flows through your business",
      "Pick the highest-value processes to fix first",
      "Compare systems and vendors with a simple scorecard",
      "Leave with a 90-day improvement roadmap",
    ],
    sessions: [
      "Session 1: Mapping your current processes",
      "Session 2: Choosing and sequencing improvements",
      "Session 3: Rollout, change management, and measuring results",
    ],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Cybersecurity Awareness for Teams",
    badge: "NEW",
    relatedService: "Cyber Security",
    builtFor: "Whole teams, from front desk to executives. No technical background needed.",
    summary:
      "Give every person on your team the habits that help prevent the most common attacks: phishing, weak passwords, and careless data handling.",
    duration: "3 sessions",
    format: "Live online training",
    skills: [
      "Recognize phishing messages and common scams",
      "Set up strong passwords and multi-factor authentication",
      "Handle customer and company data safely, including on personal devices",
      "Know what to do in the first hour after an incident",
    ],
    sessions: [
      "Session 1: How attacks actually happen",
      "Session 2: Accounts, devices, and data handling",
      "Session 3: Incident response and building a security culture",
    ],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Data & Dashboards for Managers",
    badge: "NEW",
    relatedService: "Data & Business Intelligence",
    builtFor: "Managers, finance, and operations staff who work with spreadsheets regularly.",
    summary:
      "Turn the numbers you already collect into reports and dashboards that support real decisions.",
    duration: "3 sessions",
    format: "Live online learning",
    skills: [
      "Choose KPIs that match your goals",
      "Clean and structure data in a spreadsheet",
      "Build a simple dashboard in Excel or Power BI",
      "Present findings clearly to decision-makers",
    ],
    sessions: [
      "Session 1: Choosing metrics that matter",
      "Session 2: Preparing and analyzing your data",
      "Session 3: Building and presenting a dashboard",
    ],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Tender & Proposal Writing",
    badge: "NEW",
    relatedService: "Business Development & Consulting",
    builtFor: "Business owners, sales and bid teams, and NGOs applying for contracts or funding.",
    summary:
      "Learn how strong bids are structured, and build a reusable proposal toolkit for your business.",
    duration: "3 sessions",
    format: "Live online workshop",
    skills: [
      "Read a tender document and extract every requirement",
      "Structure a clear, compliant technical response",
      "Price and present your offer with confidence",
      "Build a reusable library of proposal sections",
    ],
    sessions: [
      "Session 1: Reading the tender and planning your response",
      "Session 2: Writing the technical and commercial response",
      "Session 3: Review, compliance checks, and submission",
    ],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Master Claude: From First Prompt to Power User",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Anyone who wants to go deep on one tool rather than skim many.",
    summary:
      "Move beyond basic prompting to real workflows, document analysis, and custom usage patterns with Claude.",
    duration: "Single half-day session · 4 hours",
    format: "Online or in-person",
    skills: [
      "Advanced Prompting",
      "Projects & Artifacts",
      "Document Analysis",
      "Custom Workflows",
    ],
    bonus: "Professional Certificate of Competence in Applied AI Systems, verifiable online",
    detail: "Level: Best with some AI experience already",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Designers",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Graphic designers, brand & creative teams.",
    summary:
      "Use AI to speed up ideation, mockups, and design iteration while keeping your own creative judgment at the center.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "Design Ideation",
      "Rapid Mockups",
      "AI Image Tools",
      "Using an AI assistant for design ideation and iteration",
      "Other AI design tools worth knowing",
      "Speeding up mockups and concepts",
      "Where AI helps, and where your own eye still matters most",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Video & Movie Creation",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Content creators, marketers, filmmakers.",
    summary:
      "Learn how AI can support scripts, video generation, and editing for faster concept-to-output workflows.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "AI Scripting",
      "AI Video Generation",
      "Editing Basics",
      "Scripting with AI assistance",
      "Turning an idea into short AI-generated video",
      "Editing and refining AI video output",
      "A realistic view of what today’s tools can and can’t do",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Social Media & Content Creators",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Social media managers, marketers, small business owners.",
    summary:
      "Build faster content systems with AI for captions, planning, visuals, and short-form social output.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "Caption Writing",
      "Content Calendars",
      "Quick Graphics",
      "Captions and post copy in your own brand voice",
      "Building a month of content in an afternoon",
      "Quick graphics and short video for posts",
      "Staying consistent without burning out",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Writers",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Content writers, communications teams, students.",
    summary:
      "Create stronger first drafts, speed up research, and keep your own voice while improving consistency and quality.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "Drafting",
      "Editing",
      "Research",
      "Drafting faster without losing your voice",
      "Editing and tightening your own writing",
      "Research and fact-gathering with AI",
      "Avoiding the “obviously AI-written” trap",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Music & Podcast Creation",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Musicians, podcasters, content creators.",
    summary:
      "Explore AI-assisted music and audio creation, voice work, and practical ways to use these tools in real projects.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "AI Music Generation",
      "Voice & Narration",
      "Audio Editing",
      "Generating original music with AI tools",
      "Voice, narration, and podcast editing basics",
      "Where AI-made audio works well, and where it doesn’t",
      "Practical use in ads, intros, and jingles",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Presentations & Pitch Decks",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Anyone who pitches, presents, or reports to others.",
    summary:
      "Turn rough ideas into structured, memorable decks with AI support for content, speaker notes, and design.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "Deck Structuring",
      "Speaker Notes",
      "Rapid Design",
      "Structuring a presentation people actually remember",
      "Building a deck in a fraction of the usual time",
      "Using AI for talking points and speaker notes",
      "Polishing a deck without losing your own voice",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI for Spreadsheets & Reports",
    badge: "ENROLLING NOW",
    relatedService: "Artificial Intelligence",
    builtFor: "Finance, admin, and operations teams.",
    summary:
      "Use AI to summarize data, spot trends, and turn raw spreadsheets into clearer reporting workflows.",
    duration: "Single session · 2 hours",
    format: "Online or in-person",
    skills: [
      "Data Summarising",
      "Trend Spotting",
      "Report Templates",
      "Turning raw data into clear reports, faster",
      "Spotting trends without wading through spreadsheets by hand",
      "Simple, repeatable steps you can reuse every reporting cycle",
    ],
    bonus: "Certificate: Attendance",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
];

const WORKSHOPS = [
  {
    title: "Spreadsheet to System: Automating Repetitive Work",
    relatedService: "Technology Solutions",
    builtFor: "Operations, admin, and finance teams doing the same task every week.",
    summary:
      "Find the tasks worth automating, and learn when built-in tools are enough and when custom software pays off.",
    duration: "90-minute live online session",
    level: "Beginner-friendly",
    takeaway: "Take-home checklist",
    skills: [
      "Spot the repetitive tasks with the biggest payoff",
      "Use automation already built into tools you own",
      "Decide when custom software is worth the investment",
    ],
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Cloud Collaboration with Microsoft 365 & Google Workspace",
    relatedService: "Cloud Solutions",
    builtFor: "Teams moving to, or already on, Microsoft 365 or Google Workspace.",
    summary:
      "Set up shared files, permissions, and backups so your team can work together from anywhere without losing track of anything.",
    duration: "90-minute live online session",
    level: "Beginner-friendly",
    takeaway: "Take-home checklist",
    skills: [
      "Structure shared folders and permissions",
      "Run meetings, chat, and shared documents smoothly",
      "Share files securely and keep reliable backups",
    ],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Your Business Website: What It Needs to Bring in Customers",
    relatedService: "Digital Solutions",
    builtFor: "Business owners and marketing staff planning or improving a website.",
    summary:
      "The pages, messaging, and search basics that turn a website from a brochure into a source of inquiries.",
    duration: "90-minute live online session",
    level: "Beginner-friendly",
    takeaway: "Take-home checklist",
    skills: [
      "Structure pages around what visitors want to know",
      "Cover the search (SEO) basics that matter most",
      "Track visits and inquiries so you can improve",
    ],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Getting Value from Fleet Tracking",
    relatedService: "Fleet & Smart Technology",
    builtFor: "Fleet owners, transport and logistics operators, and asset managers.",
    summary:
      "Choose the right tracking setup, then use the data to cut costs, improve safety, and keep vehicles and assets accounted for.",
    duration: "90-minute live online session",
    level: "Beginner-friendly",
    takeaway: "Take-home checklist",
    skills: [
      "Choose tracking hardware and software for your fleet",
      "Read location, fuel, and driver-behavior reports",
      "Set alerts and boundaries, and act on what the data shows",
    ],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI Chatbots for Customer Service (new)",
    relatedService: "Artificial Intelligence",
    builtFor: "Business owners and customer service or sales teams who answer the same customer questions every day on WhatsApp, email, or their website.",
    summary:
      "Learn how a chatbot can handle your most common customer questions, and plan one that sounds like your business.",
    duration: "90-minute live online session",
    level: "Beginner-friendly",
    takeaway: "Take-home checklist",
    skills: [
      "List the questions a chatbot should handle, and the ones it should not",
      "Write clear, on-brand answers a chatbot can use",
      "Decide when a customer must be handed over to a person",
      "Measure whether the chatbot is actually helping",
    ],
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&q=80",
  },
];

const KEY_OUTCOMES = [
  {
    outcome: "Increased Productivity",
    description:
      "Teams using AI tools report 30-40% time savings on routine tasks, freeing up capacity for strategic work.",
  },
  {
    outcome: "Better Decision-Making",
    description:
      "AI-augmented analysis and insights lead to faster, more informed business decisions with reduced risk.",
  },
  {
    outcome: "Cost Reduction",
    description:
      "Automation of manual processes reduces operational costs and improves resource allocation efficiency.",
  },
  {
    outcome: "Competitive Advantage",
    description:
      "Early AI adoption positions your organization as an innovator and attracts top talent.",
  },
  {
    outcome: "Employee Engagement",
    description: "Teams excited about AI adoption show higher satisfaction and retention rates.",
  },
  {
    outcome: "Scalable Growth",
    description:
      "AI-enabled processes scale with minimal additional headcount, supporting sustainable growth.",
  },
];

const AI_SERVICES = [
  {
    icon: Brain,
    title: "AI Fundamentals & Strategy",
    description:
      "Define your AI vision, identify high-impact opportunities, and build a roadmap for strategic AI adoption aligned with business goals.",
    highlights: ["Vision & roadmap", "Opportunity assessment", "Strategic alignment"],
  },
  {
    icon: Zap,
    title: "Practical Hands-On AI Training",
    description:
      "Immersive training programs that teach your teams how to use AI tools effectively in real-world scenarios and daily workflows.",
    highlights: ["Hands-on labs", "Real-world projects", "Tool mastery"],
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering & Tool Mastery",
    description:
      "Advanced skills for getting the best results from AI tools, from ChatGPT and Claude to specialized industry-specific platforms.",
    highlights: ["Advanced techniques", "Tool ecosystem", "Output optimization"],
  },
  {
    icon: Workflow,
    title: "AI for Business Process Automation",
    description:
      "Identify and automate routine business processes using AI to improve efficiency, reduce costs, and free up human resources.",
    highlights: ["Process mapping", "Automation design", "Implementation"],
  },
  {
    icon: Users,
    title: "Organizational AI Adoption",
    description:
      "Full-cycle support for embedding AI into your culture, processes, and systems, from change management to scaling implementation.",
    highlights: ["Change management", "Adoption support", "Scaling strategies"],
  },
  {
    icon: Shield,
    title: "AI Governance & Responsible AI",
    description:
      "Establish guardrails for safe, ethical AI use, including compliance, bias detection, risk management, and organizational AI policies.",
    highlights: ["Risk framework", "Compliance", "Ethical guidelines"],
  },
];

const METHODOLOGY = [
  {
    step: "1. Assessment",
    description:
      "We evaluate current capabilities, identify AI opportunities, and understand organizational readiness.",
  },
  {
    step: "2. Design",
    description:
      "Tailored curriculum and learning paths based on roles, goals, and existing tech stack.",
  },
  {
    step: "3. Training",
    description:
      "Interactive, hands-on sessions with real-world examples, case studies, and live tool demonstrations.",
  },
  {
    step: "4. Application",
    description:
      "Participants work on their own projects and challenges, receiving personalized coaching and feedback.",
  },
  {
    step: "5. Support",
    description:
      "Ongoing guidance to ensure adoption sticks and teams achieve measurable business outcomes.",
  },
];

export default function AiTraining({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  const handleLearnMore = (serviceTitle) => {
    const message = `Hi Calvelo,\n\nI would like to learn more about ${serviceTitle} on the AI & Applied Training page. Please share more details, including the format, schedule, and what this training would involve for our team.\n\nThank you.`;
    window.sessionStorage.setItem(
      "calveloServiceLead",
      JSON.stringify({ service: serviceTitle, page: "AI & Applied Training", message })
    );
    go("contact");
  };

  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="AI & Applied Training"
            title="Build AI capability that delivers measurable business value."
            sub="Practical training programs designed to empower your team with the knowledge, skills, and confidence to use AI strategically, from C-suite to operations."
          />
        </div>
      </AnimatedDarkSection>

      {/* Why AI Matters Section */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 40 }}>
            <SectionLabel
              eyebrow="Why AI Matters Now"
              title="AI is not a future technology. It's reshaping how work gets done today."
              sub="Organizations that equip their teams with AI skills are moving faster, making better decisions, and pulling ahead of the competition. The question isn't whether to adopt AI, but how quickly you can build the capability to do it right."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              { stat: "40%", label: "Average productivity increase with AI tools" },
              { stat: "60%", label: "Of executives say AI skills are critical to strategy" },
              { stat: "3x", label: "Faster time-to-insight with AI-augmented analysis" },
              { stat: "80%", label: "Of workers want AI training to stay competitive" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: 24,
                  background: C.paper,
                  borderRadius: 14,
                  border: `1px solid ${C.paperDim}`,
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 36, fontWeight: 700, color: C.teal, marginBottom: 8 }}
                >
                  {item.stat}
                </div>
                <p
                  className="font-body"
                  style={{ fontSize: 14, color: C.text, lineHeight: 1.6, margin: 0 }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Ecosystem Section */}
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel
              eyebrow="Our AI Services Ecosystem"
              title="Beyond training: comprehensive AI solutions."
              sub="We offer a full suite of AI services to help you identify opportunities, implement solutions, and govern AI responsibly across your organization."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2, 1fr)",
              "--rg-lg": "repeat(3, 1fr)",
              "--rg-gap": "24px",
            }}
            className="rgrid"
          >
            {AI_SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    background: `linear-gradient(135deg, rgba(76, 175, 175, 0.15) 0%, rgba(0, 149, 188, 0.08) 100%)`,
                    border: `1px solid rgba(76, 175, 175, 0.3)`,
                    backdropFilter: "blur(12px)",
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, rgba(76, 175, 175, 0.25) 0%, rgba(0, 149, 188, 0.15) 100%)`;
                    e.currentTarget.style.border = `1px solid rgba(76, 175, 175, 0.5)`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 8px 32px rgba(76, 175, 175, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, rgba(76, 175, 175, 0.15) 0%, rgba(0, 149, 188, 0.08) 100%)`;
                    e.currentTarget.style.border = `1px solid rgba(76, 175, 175, 0.3)`;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${C.teal}30, ${C.cyan}20)`,
                      border: `1px solid rgba(76, 175, 175, 0.4)`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: C.teal,
                        filter: "drop-shadow(0 0 8px rgba(76, 175, 175, 0.6))",
                      }}
                    />
                  </div>

                  {/* Title with Glow */}
                  <h4
                    className="font-display"
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: C.teal,
                      margin: 0,
                      textShadow:
                        "0 0 20px rgba(76, 175, 175, 0.5), 0 0 40px rgba(76, 175, 175, 0.25)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="font-body"
                    style={{
                      fontSize: 13.5,
                      color: C.text,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      marginTop: 8,
                    }}
                  >
                    {service.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: C.teal,
                            boxShadow: `0 0 8px ${C.teal}`,
                          }}
                        />
                        <span
                          className="font-body"
                          style={{
                            fontSize: 12,
                            color: C.muted,
                          }}
                        >
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel
              eyebrow="Training Programs"
              title="Curated learning paths for modern teams."
              sub="From operational AI to digital transformation, cybersecurity, and data literacy, every program is designed to help leaders and teams build practical capability with measurable impact."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2, minmax(0, 1fr))",
              "--rg-lg": "repeat(3, minmax(0, 1fr))",
              "--rg-gap": "28px",
            }}
            className="rgrid"
          >
            {TRAINING_COURSES.map((course, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(239,247,247,0.96) 100%)",
                  border: `1px solid rgba(21, 99, 110, 0.14)`,
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 12px 40px rgba(15, 23, 42, 0.06)",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    paddingTop: "66.66%",
                    position: "relative",
                    background: `linear-gradient(135deg, ${C.teal}20, ${C.ink}20)`,
                  }}
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    flex: 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 12,
                      }}
                    >
                      <h3
                        className="font-display"
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          color: C.ink,
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        {course.title}
                      </h3>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          color: C.ink,
                          background: "linear-gradient(135deg, rgba(214,177,109,0.18), rgba(76,175,175,0.18))",
                          whiteSpace: "nowrap",
                          padding: "6px 10px",
                          border: `1px solid rgba(21, 99, 110, 0.18)`,
                          borderRadius: 999,
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: C.muted,
                        marginBottom: 8,
                      }}
                    >
                      RELATED SERVICE
                    </div>
                    <div
                      className="font-body"
                      style={{
                        fontSize: 12,
                        color: C.teal,
                        marginBottom: 12,
                        fontWeight: 600,
                      }}
                    >
                      {course.relatedService}
                    </div>
                    {course.summary && (
                      <p
                        className="font-body"
                        style={{
                          fontSize: 13.5,
                          color: C.muted,
                          lineHeight: 1.55,
                          margin: "0 0 12px 0",
                        }}
                      >
                        {course.summary}
                      </p>
                    )}
                    <p
                      className="font-body"
                      style={{
                        fontSize: 13.5,
                        color: C.muted,
                        lineHeight: 1.5,
                        margin: "0 0 12px 0",
                      }}
                    >
                      <strong style={{ color: C.ink }}>Built for:</strong> {course.builtFor}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
                      <div style={{ color: C.text }}>
                        <strong>Duration:</strong> {course.duration}
                      </div>
                      <div style={{ color: C.text }}>
                        <strong>Format:</strong> {course.format}
                      </div>
                      {course.bonus && (
                        <div style={{ color: C.text }}>
                          <strong>Certificate:</strong> {course.bonus}
                        </div>
                      )}
                      {course.detail && (
                        <div style={{ color: C.text }}>
                          {course.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: C.muted,
                        marginBottom: 10,
                      }}
                    >
                      YOU WILL LEARN TO
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {course.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="font-body"
                          style={{ fontSize: 13, color: C.text, lineHeight: 1.4 }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {course.sessions && (
                    <div>
                      <div
                        className="font-mono"
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: C.muted,
                          marginBottom: 10,
                        }}
                      >
                        SESSIONS
                      </div>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: 16,
                          display: "flex",
                          flexDirection: "column",
                          gap: 6,
                        }}
                      >
                        {course.sessions.map((session, idx) => (
                          <li
                            key={idx}
                            className="font-body"
                            style={{ fontSize: 12.5, color: C.text, lineHeight: 1.45 }}
                          >
                            {session}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    tone="gold"
                    size="sm"
                    onClick={() => handleLearnMore(course.title)}
                    style={{ marginTop: "auto" }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel
              eyebrow="Workshops"
              title="Focused, practical sessions for teams in motion."
              sub="Each live online workshop is designed for busy teams who need useful skills fast, with a beginner-friendly approach and a take-home checklist to keep momentum going."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2, 1fr)",
              "--rg-lg": "repeat(3, 1fr)",
              "--rg-gap": "24px",
            }}
            className="rgrid"
          >
            {WORKSHOPS.map((workshop, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(240,246,246,0.96) 100%)",
                  border: `1px solid rgba(21, 99, 110, 0.14)`,
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    paddingTop: "60%",
                    position: "relative",
                    background: `linear-gradient(135deg, ${C.teal}15, ${C.ink}15)`,
                  }}
                >
                  <img
                    src={workshop.imageUrl}
                    alt={workshop.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: C.muted,
                        marginBottom: 8,
                      }}
                    >
                      {workshop.relatedService}
                    </div>
                    <h3
                      className="font-display"
                      style={{ fontWeight: 700, fontSize: 18, color: C.ink, margin: 0, lineHeight: 1.3 }}
                    >
                      {workshop.title}
                    </h3>
                  </div>
                  <p
                    className="font-body"
                    style={{
                      fontSize: 13.5,
                      color: C.muted,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: C.ink }}>Built for:</strong> {workshop.builtFor}
                  </p>
                  <p
                    className="font-body"
                    style={{
                      fontSize: 13.5,
                      color: C.text,
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {workshop.summary}
                  </p>
                  <div className="font-body" style={{ fontSize: 12, color: C.text, lineHeight: 1.6 }}>
                    <div>
                      <strong>Format:</strong> {workshop.duration}
                    </div>
                    <div>
                      <strong>Level:</strong> {workshop.level}
                    </div>
                    <div>
                      <strong>Take-away:</strong> {workshop.takeaway}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: C.muted,
                        marginBottom: 8,
                      }}
                    >
                      YOU WILL LEARN TO
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: 16,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {workshop.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="font-body"
                          style={{ fontSize: 12.5, color: C.text, lineHeight: 1.5 }}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button tone="gold" size="sm" onClick={() => handleLearnMore(workshop.title)} style={{ marginTop: "auto" }}>
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel
              eyebrow="Expected Outcomes"
              title="What your team will achieve."
              sub="AI training delivers tangible, measurable improvements to productivity, decision-making, and competitive position."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "repeat(2, 1fr)",
              "--rg-gap": "24px",
            }}
            className="rgrid"
          >
            {KEY_OUTCOMES.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: 24,
                  background: C.paper,
                  borderRadius: 14,
                  border: `1px solid ${C.paperDim}`,
                }}
              >
                <CheckCircle2 size={24} color={C.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4
                    className="font-display"
                    style={{ fontWeight: 700, fontSize: 16, color: C.ink, margin: "0 0 6px 0" }}
                  >
                    {item.outcome}
                  </h4>
                  <p
                    className="font-body"
                    style={{ fontSize: 14, color: C.text, lineHeight: 1.6, margin: 0 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section style={{ background: C.paper }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 48 }}>
            <SectionLabel
              eyebrow="Our Approach"
              title="How we build lasting AI capability."
              sub="We don't just teach theory. We build practical skills through real challenges, live demonstrations, and ongoing support."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-lg": "repeat(5, 1fr)",
              "--rg-gap": "16px",
            }}
            className="rgrid"
          >
            {METHODOLOGY.map((item, i) => (
              <div
                key={i}
                style={{
                  background: C.white,
                  padding: 24,
                  borderRadius: 14,
                  border: `1px solid ${C.paperDim}`,
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: C.teal,
                    marginBottom: 12,
                  }}
                >
                  {item.step.split(".")[0]}
                </div>
                <h4
                  className="font-display"
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.step.split(".").slice(1).join(".")}
                </h4>
                <p
                  className="font-body"
                  style={{
                    fontSize: 13,
                    color: C.text,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div
            style={{
              background: C.ink,
              color: C.white,
              borderRadius: 18,
              padding: 40,
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              What's Included in Every Program
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 20,
              }}
            >
              {[
                "Expert-led live sessions with Q&A",
                "Recorded lessons for self-paced review",
                "Hands-on labs and real-world projects",
                "Access to AI tools and resources",
                "Personalized coaching and feedback",
                "Certificate of completion",
                "Alumni community access",
                "Post-training support and guidance",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle2 size={20} color={C.teal} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span className="font-body" style={{ fontSize: 14, lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: C.ink2 }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "72px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <h2
            className="font-display"
            style={{
              color: C.white,
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              margin: 0,
              maxWidth: 600,
            }}
          >
            Transform your team into AI leaders.
          </h2>
          <p
            className="font-body"
            style={{
              color: C.mutedOnDark,
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 600,
              margin: 0,
            }}
          >
            Whether you're just starting your AI journey or looking to deepen team expertise, we
            have a program designed for your needs.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button tone="gold" size="lg" onClick={() => go("contact")}>
              Schedule a Consultation
            </Button>
            <Button tone="outline" size="lg" onClick={() => go("services")}>
              Explore Other Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

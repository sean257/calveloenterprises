import { C } from "../theme";
import AnimatedDarkSection from "../components/AnimatedDarkSection";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { CheckCircle2, Brain, Zap, Sparkles, Workflow, Users, Shield } from "lucide-react";

const TRAINING_COURSES = [
  {
    title: "AI Essentials for Professionals",
    badge: "ENROLLING NOW",
    builtFor:
      "Operations managers, business analysts, decision-makers ready to lead AI adoption in their teams.",
    duration: "4 weeks | 2 hours/week",
    format: "Hybrid (online + live sessions)",
    skills: [
      "AI fundamentals and real-world applications",
      "Identifying high-impact AI use cases for your business",
      "Responsible AI governance and risk management",
      "Building organizational AI capability",
      "Creating and executing an AI adoption roadmap",
    ],
  },
  {
    title: "Practical, Applied Training for AI",
    badge: "ENROLLING NOW",
    builtFor:
      "Teams who write, analyze, communicate, and solve problems — anyone ready to use AI in daily work.",
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
  },
  {
    title: "AI for Small Business & Entrepreneurs",
    badge: "ENROLLING NOW",
    builtFor:
      "Business owners, entrepreneurs, and team leaders ready to accelerate growth with AI.",
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
      "Advanced skills for getting the best results from AI tools—from ChatGPT and Claude to specialized industry-specific platforms.",
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
      "Full-cycle support for embedding AI into your culture, processes, and systems—from change management to scaling implementation.",
    highlights: ["Change management", "Adoption support", "Scaling strategies"],
  },
  {
    icon: Shield,
    title: "AI Governance & Responsible AI",
    description:
      "Establish guardrails for safe, ethical AI use—including compliance, bias detection, risk management, and organizational AI policies.",
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

  return (
    <>
      <AnimatedDarkSection>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 56px" }}>
          <SectionLabel
            dark
            eyebrow="AI & Applied Training"
            title="Build AI capability that delivers measurable business value."
            sub="Practical training programs designed to empower your team with the knowledge, skills, and confidence to use AI strategically — from C-suite to operations."
          />
        </div>
      </AnimatedDarkSection>

      {/* Why AI Matters Section */}
      <section style={{ background: C.white }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ marginBottom: 40 }}>
            <SectionLabel
              eyebrow="Why AI Matters Now"
              title="AI is not a future technology—it's reshaping how work gets done today."
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
              title="Beyond training—comprehensive AI solutions."
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
              title="Three pathways to AI mastery."
              sub="Each program is designed for specific roles and objectives. Choose the path that matches your team's needs and experience level."
            />
          </div>
          <div
            style={{
              "--rg-base": "1fr",
              "--rg-md": "1fr",
              "--rg-lg": "repeat(3, 1fr)",
              "--rg-gap": "28px",
            }}
            className="rgrid"
          >
            {TRAINING_COURSES.map((course, i) => (
              <div
                key={i}
                style={{
                  background: C.paper,
                  border: `1px solid ${C.paperDim}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Placeholder image */}
                <div
                  style={{
                    width: "100%",
                    paddingTop: "66.66%",
                    position: "relative",
                    background: `linear-gradient(135deg, ${C.teal}20, ${C.ink}20)`,
                  }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=333&fit=crop&q=80`}
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

                {/* Content */}
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
                        style={{ fontWeight: 700, fontSize: 18, color: C.ink, margin: 0 }}
                      >
                        {course.title}
                      </h3>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: C.teal,
                          whiteSpace: "nowrap",
                          padding: "4px 10px",
                          border: `1px solid ${C.teal}`,
                          borderRadius: 4,
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>
                    <p
                      className="font-body"
                      style={{
                        fontSize: 13.5,
                        color: C.muted,
                        lineHeight: 1.5,
                        margin: "0 0 12px 0",
                      }}
                    >
                      <strong>Built for:</strong> {course.builtFor}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}>
                      <div style={{ color: C.text }}>
                        <strong>Duration:</strong> {course.duration}
                      </div>
                      <div style={{ color: C.text }}>
                        <strong>Format:</strong> {course.format}
                      </div>
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
                      SKILLS YOU'LL GAIN
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

                  <Button
                    tone="gold"
                    size="sm"
                    onClick={() => go("contact")}
                    style={{ marginTop: "auto" }}
                  >
                    Enroll Now
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
              sub="We don't just teach theory—we build practical skills through real challenges, live demonstrations, and ongoing support."
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

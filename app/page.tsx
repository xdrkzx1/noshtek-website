import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { stats, caseStudies, insights, leadershipTeam } from "@/lib/data";

const industries = [
  {
    id: "utilities",
    name: "Utilities",
    icon: "⚡",
    description:
      "Smart metering integration, FERC compliance, and AI-driven close transformation for regulated and deregulated energy companies.",
    modules: ["SAP IS-U", "S/4HANA Utilities", "SAP TRM", "AMI Integration"],
    href: "/industries/utilities",
    color: "#F59E0B",
  },
  {
    id: "telecom",
    name: "Telecom",
    icon: "📡",
    description:
      "SAP BRIM implementations for 5G monetization, subscription billing, and revenue assurance across Tier-1 carriers and digital telcos.",
    modules: ["SAP BRIM", "FI-CA", "Convergent Charging", "Revenue Assurance"],
    href: "/industries/telecom",
    color: "#3B82F6",
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: "🛡️",
    description:
      "IFRS 17 compliance, actuarial data integration, and financial reporting transformation for global insurers and reinsurers.",
    modules: ["SAP FPSL", "SAP TRM", "FS-CD", "IFRS 17 Accelerator"],
    href: "/industries/insurance",
    color: "#8B5CF6",
  },
];

const solutions = [
  {
    title: "Financial Transformation",
    description:
      "End-to-end SAP S/4HANA Finance implementations that compress close cycles, automate reconciliation with ML, and deliver real-time financial insights.",
    icon: "💹",
    href: "/solutions/financial-transformation",
    points: [
      "ML-powered cash application (90%+ auto-match)",
      "Real-time financial reporting",
      "Predictive close management",
    ],
  },
  {
    title: "SAP Implementation Services",
    description:
      "Full-lifecycle SAP project delivery from architecture design through hypercare, with dedicated industry SMEs for each engagement.",
    icon: "⚙️",
    href: "/solutions/sap-implementation",
    points: [
      "Architecture and design workshops",
      "Agile SAP delivery methodology",
      "Post-go-live hypercare support",
    ],
  },
  {
    title: "Integration & Automation",
    description:
      "AI-powered automation connecting SAP with adjacent systems — from CRM to smart meters — to eliminate manual handoffs and reduce operational cost.",
    icon: "🔗",
    href: "/solutions/integration-automation",
    points: [
      "SAP BTP integration architecture",
      "Robotic process automation",
      "Real-time data streaming",
    ],
  },
];

const trustSignals = [
  { label: "SAP Gold Partner", icon: "🏆" },
  { label: "15+ Years Experience", icon: "📅" },
  { label: "5 Global Offices", icon: "🌏" },
  { label: "98% Client Satisfaction", icon: "⭐" },
];

export default function HomePage() {
  const featuredCaseStudies = caseStudies.filter((c) => c.featured).slice(0, 3);
  const featuredInsights = insights.slice(0, 3);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center hero-mesh grid-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl" style={{background:'rgba(0,184,184,0.05)'}} />
          <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full blur-3xl" style={{background:'rgba(0,100,200,0.04)'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{background:'rgba(0,184,184,0.1)',border:'1px solid rgba(0,184,184,0.2)'}}>
                <span className="w-2 h-2 rounded-full bg-[#00B8B8] animate-pulse" />
                <span className="text-[#00B8B8] text-sm font-semibold">
                  SAP Gold Partner · AI-Driven Transformation
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Financial{" "}
                <span className="gradient-text">Transformation</span>
                <br />
                That Moves at the
                <br />
                Speed of AI.
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Noshtek is the boutique SAP consulting firm that enterprises choose for
                complex financial transformation — in Utilities, Telecom, and Insurance.
                We combine deep SAP expertise with AI to deliver outcomes that global
                firms promise but rarely achieve.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact" className="btn-primary-lg">
                  Talk to a Specialist
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="btn-outline">
                  View Case Studies
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {trustSignals.map((signal) => (
                  <div key={signal.label} className="flex items-center gap-2">
                    <span className="text-lg">{signal.icon}</span>
                    <span className="text-gray-400 text-sm font-medium">{signal.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="rounded-3xl p-8 card-shine" style={{background:'rgba(13,30,63,0.8)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.08)'}}>
                <p className="text-[#00B8B8] text-sm font-semibold uppercase tracking-widest mb-6">
                  Proven Outcomes
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="p-4 rounded-2xl" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.05)'}}>
                      <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-200">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-2xl" style={{background:'rgba(0,184,184,0.08)',border:'1px solid rgba(0,184,184,0.15)'}}>
                  <p className="text-[#00B8B8] text-xs font-semibold uppercase tracking-wide mb-2">Recent Outcome</p>
                  <p className="text-white font-bold">45% Faster Financial Close</p>
                  <p className="text-gray-400 text-sm">North American Utility · SAP S/4HANA + AI</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#00B8B8] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg animate-float">
                SAP Gold Partner 🏆
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </section>

      {/* ===== SOLUTIONS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Our Solutions</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              SAP Expertise. AI Innovation.
              <br />Enterprise Results.
            </h2>
            <p className="text-gray-500 text-lg">
              Three solution areas, each delivered by specialists with 15+ years of SAP experience in your industry.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <AnimatedSection key={sol.title} delay={i * 100} animation="fade-up">
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-[#00B8B8]/30 transition-all duration-300 h-full flex flex-col bg-white" style={{boxShadow:'0 2px 12px rgba(0,0,0,0.05)'}}>
                  <div className="text-4xl mb-5">{sol.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A1929] mb-3 group-hover:text-[#00B8B8] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 mb-6 flex-1 leading-relaxed">{sol.description}</p>
                  <ul className="space-y-2 mb-6">
                    {sol.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#00B8B8] mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={sol.href} className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm hover:gap-3 transition-all duration-200">
                    Explore solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-24 bg-[#0A1929] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-2xl mb-16">
            <span className="section-label">Industries</span>
            <h2 className="text-4xl font-black text-white mb-4">
              Deep Industry Expertise,
              <br />Not Generic Consulting.
            </h2>
            <p className="text-gray-400 text-lg">
              We do not serve every industry. We go deep in three — bringing specialized knowledge that generic SIs cannot match.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.id} delay={i * 120} animation="fade-up">
                <Link href={ind.href} className="group block p-8 rounded-2xl transition-all duration-300 h-full" style={{background:'#0D1E3F',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <div className="text-5xl mb-6 p-3 rounded-2xl inline-block" style={{background:`${ind.color}15`}}>
                    {ind.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00B8B8] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{ind.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ind.modules.map((m) => (
                      <span key={m} className="px-2.5 py-1 text-gray-300 text-xs font-medium rounded-lg" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.05)'}}>
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Explore {ind.name} <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">Case Studies</span>
              <h2 className="text-4xl font-black text-[#0A1929]">
                Outcomes that Speak
                <br />for Themselves.
              </h2>
            </div>
            <Link href="/case-studies" className="btn-outline-teal flex-shrink-0">
              All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, i) => (
              <AnimatedSection key={study.slug} delay={i * 100} animation="fade-up">
                <div className="card h-full flex flex-col overflow-hidden group">
                  <div className="bg-[#0A1929] px-6 py-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="tag-teal">{study.tag}</span>
                      <span className="text-gray-500 text-xs">{study.solution}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug">{study.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-gray-100 border-b border-gray-100">
                    {study.results.slice(0, 4).map((result) => (
                      <div key={result.label} className="bg-white p-4 text-center">
                        <div className="text-2xl font-black text-[#0A1929]">{result.metric}</div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-tight">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-3 flex-1">
                      <Quote className="w-5 h-5 text-[#00B8B8] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600 text-sm italic leading-relaxed mb-3">{study.quote}</p>
                        <p className="text-gray-400 text-xs">— {study.quoteAuthor}</p>
                      </div>
                    </div>
                    <Link href={`/case-studies/${study.slug}`} className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm mt-4 group-hover:gap-3 transition-all duration-200">
                      Read full case study <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY NOSHTEK ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <span className="section-label">Why Noshtek</span>
              <h2 className="text-4xl font-black text-[#0A1929] mb-6">
                Boutique Precision.<br />Enterprise Scale.
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Global SAP integrators bring large teams with generalist skills. We bring small, senior teams with specialist knowledge — and outcomes to match.
              </p>
              <div className="space-y-5">
                {[
                  {title:"Genuine SAP Specialization",text:"Our consultants hold 10–20+ years in SAP finance modules. Every engagement has a domain SME, not just a project manager."},
                  {title:"AI-First Methodology",text:"We integrate ML models for cash application, anomaly detection, and predictive close from day one — not as a post-implementation add-on."},
                  {title:"Industry-Specific Accelerators",text:"Pre-built templates for IS-U, BRIM, and FPSL reduce timelines by 20–30% while increasing quality and reducing risk."},
                  {title:"Senior-Only Delivery Model",text:"No junior-heavy offshore teams. Every client gets a senior architect and domain SME — with the accountability to match."},
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{background:'rgba(0,184,184,0.1)',border:'2px solid #00B8B8'}}>
                      <div className="w-2 h-2 rounded-full bg-[#00B8B8]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A1929] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/company/about" className="btn-primary">
                  Learn about Noshtek <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="bg-[#0A1929] rounded-3xl p-8 text-white">
                  <p className="text-[#00B8B8] text-sm font-semibold uppercase tracking-widest mb-6">Comparison</p>
                  {[
                    ["Feature","Large SIs","Noshtek"],
                    ["Team seniority","Mixed","Senior-only"],
                    ["Industry depth","Generalist","Specialized"],
                    ["AI integration","Add-on","Built-in"],
                    ["Accountability","Process-driven","Outcome-driven"],
                    ["Time-to-value","18–24 months","12–16 months"],
                  ].map(([feature, large, ntk], idx) => (
                    <div key={feature} className={`grid grid-cols-3 gap-4 py-3 ${idx > 0 ? "border-t border-white/6" : ""}`}>
                      <span className={`text-sm ${idx === 0 ? "text-[#00B8B8] font-semibold text-xs uppercase tracking-wide" : "text-gray-400"}`}>{feature}</span>
                      <span className={`text-sm text-center ${idx === 0 ? "text-gray-400 text-xs uppercase tracking-wide" : "text-gray-400"}`}>{large}</span>
                      <span className={`text-sm text-center font-semibold ${idx === 0 ? "text-[#00B8B8] text-xs uppercase tracking-wide" : "text-[#00B8B8]"}`}>{ntk}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 max-w-xs" style={{boxShadow:'0 8px 40px rgba(0,0,0,0.15)',border:'1px solid #f3f4f6'}}>
                  <div className="flex gap-1 mb-2">{[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-sm">★</span>)}</div>
                  <p className="text-gray-700 text-sm italic leading-relaxed">&ldquo;Noshtek brought senior expertise from day one. Our go-live was 6 weeks ahead of schedule.&rdquo;</p>
                  <p className="text-gray-400 text-xs mt-2">— CFO, Fortune 500 Utility</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label">Insights</span>
              <h2 className="text-4xl font-black text-[#0A1929]">
                Thought Leadership
                <br />from SAP Practitioners.
              </h2>
            </div>
            <Link href="/insights" className="btn-outline-teal flex-shrink-0">
              All Insights <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredInsights.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 100} animation="fade-up">
                <Link href={`/insights/${article.slug}`} className="card flex flex-col h-full overflow-hidden group block cursor-pointer">
                  <div className="h-48 flex items-center justify-center relative overflow-hidden" style={{background:'linear-gradient(135deg,#0A1929,#1A2F5C)'}}>
                    <span className="text-5xl opacity-30">{article.category === "AI & Finance" ? "🤖" : article.category === "Insurance" ? "🛡️" : "📡"}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 to-transparent" />
                    {article.gated && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-[#00B8B8] text-white text-xs font-bold rounded-lg">Whitepaper</div>
                    )}
                    <div className="absolute bottom-3 left-4">
                      <span className="tag-teal text-xs">{article.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-[#0A1929] mb-3 leading-snug group-hover:text-[#00B8B8] transition-colors">{article.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{article.excerpt.slice(0, 120)}...</p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="py-24 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Leadership</span>
            <h2 className="text-4xl font-black text-white mb-4">Meet the Experts Behind Noshtek.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our leadership team averages 18 years of SAP experience across the industries we serve.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {leadershipTeam.slice(0, 3).map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 100} animation="fade-up">
                <div className="card-dark p-6 text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{background:'rgba(0,184,184,0.15)',border:'2px solid rgba(0,184,184,0.3)'}}>
                    <span className="text-[#00B8B8] font-black text-xl">{person.initials}</span>
                  </div>
                  <h3 className="text-white font-bold mb-1">{person.name}</h3>
                  <p className="text-[#00B8B8] text-sm font-medium mb-4">{person.title}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {person.expertise.slice(0, 2).map((e) => (
                      <span key={e} className="px-2 py-0.5 text-gray-400 text-xs rounded-lg" style={{background:'rgba(255,255,255,0.05)'}}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center">
            <Link href="/company/leadership" className="btn-outline-teal">
              Meet the full team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label">Get Started</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-6">
              Ready to Transform Your
              <br />Financial Operations?
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
              Whether you&apos;re beginning an SAP S/4HANA journey, facing an IFRS 17 deadline, or looking to reduce revenue leakage — our specialists have seen it before.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary-lg">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/insights/ai-sap-financial-transformation-whitepaper" className="btn-outline-teal text-[1.125rem] px-8 py-4">
                Download AI + SAP Whitepaper
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

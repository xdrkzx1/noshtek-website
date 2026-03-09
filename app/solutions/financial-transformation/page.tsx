import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Brain, Zap, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Financial Transformation | SAP S/4HANA Finance, TRM & FPSL",
  description:
    "Noshtek delivers end-to-end SAP S/4HANA Finance implementations with AI-powered automation that compresses close cycles and eliminates manual reconciliation.",
};

const capabilities = [
  {
    Icon: Brain,
    title: "AI-Powered Cash Application",
    description:
      "ML models trained on your historical payment data achieve 90%+ auto-match rates, eliminating manual reconciliation and reducing days-sales-outstanding.",
    metrics: ["90%+ auto-match rate", "DSO reduction 15–25%", "75% less manual effort"],
  },
  {
    Icon: TrendingUp,
    title: "Predictive Financial Close",
    description:
      "AI-driven close management identifies at-risk items before they become delays. Average close cycle reduction of 40–50% across our client portfolio.",
    metrics: ["40–50% close cycle reduction", "Real-time close tracking", "Exception-first workflows"],
  },
  {
    Icon: Zap,
    title: "Real-Time Financial Reporting",
    description:
      "Universal Journal and embedded analytics deliver instant P&L, balance sheet, and cash flow visibility — eliminating batch reporting delays entirely.",
    metrics: ["Real-time P&L visibility", "Single source of truth", "SAP Analytics integration"],
  },
  {
    Icon: BarChart3,
    title: "Anomaly Detection & Controls",
    description:
      "Machine learning continuously monitors financial transactions for anomalies, duplicate payments, and control violations — surfacing issues before period close.",
    metrics: ["Continuous monitoring", "Full audit trail", "SOX / IFRS 17 compliance"],
  },
];

const sapModules = [
  "SAP S/4HANA Finance",
  "SAP Treasury & Risk Management (TRM)",
  "SAP Financial Products Subledger (FPSL)",
  "SAP Profitability & Performance Management (PaPM)",
  "SAP Group Reporting",
  "SAP Central Finance",
  "SAP S/4HANA Cloud",
  "SAP Business Planning & Consolidation (BPC)",
];

const methodology = [
  { phase: "01", title: "Assess", desc: "Current state analysis, pain-point mapping, AI opportunity identification, ROI model." },
  { phase: "02", title: "Design", desc: "Target architecture, chart of accounts rationalization, ML model design, integration blueprint." },
  { phase: "03", title: "Build", desc: "Agile sprints, parallel ML model training, unit testing, performance validation." },
  { phase: "04", title: "Validate", desc: "UAT with finance team, parallel run against legacy, control testing, audit readiness." },
  { phase: "05", title: "Deploy", desc: "Hypercare-supported go-live, war-room during first close, incident resolution SLA." },
  { phase: "06", title: "Evolve", desc: "Ongoing ML model tuning, quarterly business reviews, continuous improvement roadmap." },
];

export default function FinancialTransformationPage() {
  const relatedCaseStudies = caseStudies.filter(
    (c) => c.solution === "Financial Transformation"
  );

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Solutions</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">Financial Transformation</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              Financial Transformation
              <br />
              <span className="gradient-text">Powered by AI & SAP.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Noshtek delivers end-to-end SAP S/4HANA Finance implementations that
              transform how finance operates. Not just a system upgrade — a fundamental
              shift to AI-augmented, real-time, exception-driven financial management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary-lg">
                Speak to a Finance Specialist <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn-outline">
                See Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">What We Deliver</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              Four Areas Where AI Changes
              <br />the Finance Equation.
            </h2>
            <p className="text-gray-500 text-lg">
              Each capability is built into the implementation from day one — not bolted on after go-live.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 100}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{border:'1px solid #f3f4f6',boxShadow:'0 2px 16px rgba(0,0,0,0.05)',transition:'all 0.3s'}}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{background:'rgba(0,184,184,0.1)'}}
                  >
                    <cap.Icon className="w-6 h-6 text-[#00B8B8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1929] mb-3">{cap.title}</h3>
                  <p className="text-gray-500 mb-5 leading-relaxed">{cap.description}</p>
                  <ul className="space-y-2">
                    {cap.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#00B8B8] flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <span className="section-label">Our Approach</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              A Methodology Built for
              <br />Finance Complexity.
            </h2>
            <p className="text-gray-500 text-lg">
              Six phases designed to minimize disruption, maximize knowledge transfer,
              and deliver value before go-live.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {methodology.map((m, i) => (
              <AnimatedSection key={m.phase} delay={i * 80} animation="fade-up">
                <div className="p-6 rounded-2xl bg-white" style={{border:'1px solid #e9ecef',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                  <div className="text-[#00B8B8] font-black text-4xl mb-3 opacity-30">{m.phase}</div>
                  <h4 className="font-bold text-[#0A1929] text-lg mb-2">{m.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Modules */}
      <section className="py-24 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <span className="section-label">SAP Expertise</span>
            <h2 className="text-4xl font-black text-white mb-4">
              Deep Expertise Across the
              <br />SAP Finance Suite.
            </h2>
            <p className="text-gray-400 text-lg">
              Our consultants hold certifications and real-world delivery experience
              across all major SAP finance modules.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sapModules.map((mod, i) => (
              <AnimatedSection key={mod} delay={i * 60}>
                <div
                  className="p-4 rounded-xl text-white font-medium text-sm"
                  style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)'}}
                >
                  <span className="text-[#00B8B8] mr-2">✦</span>{mod}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="section-label">Proof Points</span>
                <h2 className="text-4xl font-black text-[#0A1929]">
                  Financial Transformation in Action.
                </h2>
              </div>
              <Link href="/case-studies" className="btn-outline-teal flex-shrink-0">
                All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((study, i) => (
                <AnimatedSection key={study.slug} delay={i * 100}>
                  <div className="card overflow-hidden h-full flex flex-col">
                    <div className="bg-[#0A1929] px-6 py-5">
                      <span className="tag-teal mb-3 inline-block">{study.tag}</span>
                      <h3 className="text-white font-bold text-lg">{study.title}</h3>
                    </div>
                    <div className="grid grid-cols-4 gap-px bg-gray-100">
                      {study.results.map((r) => (
                        <div key={r.label} className="bg-white p-4 text-center">
                          <div className="text-xl font-black text-[#0A1929]">{r.metric}</div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{study.challenge.slice(0, 140)}...</p>
                      <Link href={`/case-studies/${study.slug}`} className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm hover:gap-3 transition-all duration-200">
                        Read case study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Accelerate Your Financial Close?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Speak with a Noshtek S/4HANA Finance specialist about your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

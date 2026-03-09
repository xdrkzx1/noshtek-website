import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Shield, Clock, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "SAP Implementation Services | End-to-End SAP Delivery",
  description:
    "Noshtek provides senior-led, full-lifecycle SAP implementation services for Utilities, Telecom, and Insurance — from architecture through hypercare.",
};

const phases = [
  { num: "01", name: "Discover", duration: "2–4 weeks", tasks: ["Current state assessment", "Gap analysis", "ROI model", "Project charter"] },
  { num: "02", name: "Design", duration: "4–8 weeks", tasks: ["Solution architecture", "Configuration design", "Integration blueprint", "Data migration strategy"] },
  { num: "03", name: "Build", duration: "8–16 weeks", tasks: ["Configuration & development", "Unit testing", "Integration development", "ML model training"] },
  { num: "04", name: "Test", duration: "4–6 weeks", tasks: ["System integration testing", "User acceptance testing", "Performance testing", "Security review"] },
  { num: "05", name: "Deploy", duration: "2–4 weeks", tasks: ["Cutover planning", "Go-live execution", "Hypercare support", "War-room first close"] },
  { num: "06", name: "Evolve", duration: "Ongoing", tasks: ["Continuous improvement", "Model tuning", "Feature releases", "Business reviews"] },
];

const differentiators = [
  { Icon: Users, title: "Senior-Only Staffing", desc: "Every engagement has a named Partner as lead and dedicated Senior Architect. No bait-and-switch after contract signing." },
  { Icon: Shield, title: "Industry SME on Every Project", desc: "Your utility, telecom, or insurance domain expert is on every design session — not called in only when problems arise." },
  { Icon: Clock, title: "Accelerated Timelines", desc: "Pre-built industry configuration accelerators reduce build time by 20–30% while improving quality and reducing risk." },
  { Icon: Award, title: "Outcome-Based Accountability", desc: "Success metrics are agreed before project kick-off. We track against them every sprint, not just at go-live." },
];

const sapSolutions = [
  "SAP S/4HANA (On-Premise & Cloud)",
  "SAP IS-U (Utilities)",
  "SAP BRIM (Telecom)",
  "SAP FPSL / FS-CD (Insurance)",
  "SAP S/4HANA Central Finance",
  "SAP BTP & Integration Suite",
  "SAP Master Data Governance (MDG)",
  "SAP Analytics Cloud (SAC)",
];

export default function SAPImplementationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Solutions</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">SAP Implementation Services</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              SAP Implementation Services.
              <br />
              <span className="gradient-text">Senior-Led. Outcome-Driven.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Full-lifecycle SAP delivery from architecture through hypercare. Noshtek
              combines a proven agile delivery framework with industry-specific expertise
              that eliminates the rework that plagues generic SI implementations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary-lg">
                Discuss Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn-outline">See Our Work</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">The Noshtek Difference</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              Why Enterprises Choose Boutique
              <br />Over the Big Four.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 100}>
                <div className="flex gap-5 p-6 rounded-2xl" style={{border:'1px solid #f3f4f6',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(0,184,184,0.1)'}}>
                    <d.Icon className="w-6 h-6 text-[#00B8B8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1929] text-lg mb-2">{d.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Phases */}
      <section className="py-24 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <span className="section-label">Delivery Framework</span>
            <h2 className="text-4xl font-black text-white mb-4">Six Phases to Go-Live and Beyond.</h2>
            <p className="text-gray-400 text-lg">Each phase has clear deliverables, exit criteria, and senior oversight from Noshtek.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 80} animation="fade-up">
                <div className="p-6 rounded-2xl h-full" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#00B8B8] font-black text-3xl opacity-40">{phase.num}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background:'rgba(0,184,184,0.12)',color:'#00B8B8'}}>
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{phase.name}</h3>
                  <ul className="space-y-1.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-[#00B8B8] flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SAP Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <span className="section-label">SAP Portfolio</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              Certified Across the Full SAP Portfolio.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sapSolutions.map((sol, i) => (
              <AnimatedSection key={sol} delay={i * 50}>
                <div className="p-4 rounded-xl bg-white font-medium text-sm text-[#0A1929]" style={{border:'1px solid #e9ecef',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
                  <span className="text-[#00B8B8] mr-2">✦</span>{sol}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let&apos;s Scope Your SAP Program.</h2>
          <p className="text-white/80 text-lg mb-8">Share your project and we&apos;ll respond with a senior team and a realistic approach.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

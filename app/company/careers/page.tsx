import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { careers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers | Join Noshtek SAP Consulting",
  description:
    "Join a boutique SAP consulting firm where senior practitioners do the best work of their career. Open roles in SAP BRIM, S/4HANA Finance, FPSL, and AI/ML.",
};

const benefits = [
  { icon: "🎯", title: "Senior Work Only", desc: "We don't have junior roles. Every consultant works directly on client-facing delivery — no bench, no internal projects." },
  { icon: "🌍", title: "Global & Remote", desc: "Work from any of our 5 offices or remotely. We measure performance by outcomes, not office attendance." },
  { icon: "🚀", title: "Fast Career Growth", desc: "Boutique firms move fast. High performers move to principal roles in 2–3 years vs. 5–7 at large SIs." },
  { icon: "🧠", title: "AI-First Practice", desc: "Work at the frontier of AI + SAP. Noshtek's innovation lab means you'll work on ML applications most SIs don't touch." },
  { icon: "💰", title: "Competitive Compensation", desc: "Top-quartile base salaries plus project success bonuses. SAP Gold Partner revenue supports premium compensation." },
  { icon: "🤝", title: "Named Partner Access", desc: "No layers of management. Every consultant has direct access to a named Partner — and gets credit for their outcomes." },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/company/about" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Company</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">Careers</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              Do the Best SAP Work
              <br />
              <span className="gradient-text">of Your Career.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Noshtek is where senior SAP consultants come when they want real project
              complexity, genuine AI integration, and a culture that values depth over
              headcount. No bench. No intern staffing. Just expert work.
            </p>
            <Link href="#open-roles" className="btn-primary-lg">
              View Open Roles <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Noshtek for careers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Why Noshtek</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              Not Another Global Integrator.
            </h2>
            <p className="text-gray-500 text-lg">
              We&apos;ve built a culture around what senior consultants actually want: complex
              problems, real accountability, and a team that takes craft seriously.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80} animation="fade-up">
                <div className="p-6 rounded-2xl h-full" style={{border:'1px solid #f3f4f6',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
                  <span className="text-3xl mb-4 block">{b.icon}</span>
                  <h3 className="font-bold text-[#0A1929] text-lg mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <span className="section-label">Open Positions</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">Current Openings.</h2>
            <p className="text-gray-500 text-lg">
              All roles are senior-level and require real SAP implementation experience.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {careers.map((role, i) => (
              <AnimatedSection key={role.title} delay={i * 60}>
                <div className="card p-6 group cursor-pointer hover:border hover:border-[#00B8B8]/20" style={{border:'1px solid #f3f4f6'}}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{background:'rgba(0,184,184,0.1)',color:'#007A7A'}}>
                          {role.department}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{background:'#f1f3f5',color:'#495057'}}>
                          {role.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1929] mb-2 group-hover:text-[#00B8B8] transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{role.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {role.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" />
                          {role.type}
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm flex-shrink-0 transition-all duration-200"
                      style={{background:'rgba(0,184,184,0.08)',color:'#007A7A',border:'1.5px solid rgba(0,184,184,0.2)'}}
                    >
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Don&apos;t see the right role? We&apos;re always interested in exceptional SAP talent.
            </p>
            <Link href="/contact" className="btn-outline-teal">
              Send us your profile <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture quote */}
      <section className="py-20 bg-[#0A1929]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-6xl mb-6 block">💬</span>
            <blockquote className="text-2xl font-bold text-white italic leading-relaxed mb-6">
              &ldquo;I joined Noshtek after 12 years at a Big Four firm. The difference is that
              here, your opinion actually shapes the project architecture. The work is harder
              but the satisfaction is real.&rdquo;
            </blockquote>
            <p className="text-[#00B8B8] font-semibold">Senior SAP BRIM Consultant · New York</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

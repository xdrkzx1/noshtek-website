import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { leadershipTeam } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership Team | Noshtek SAP Consulting",
  description:
    "Meet the senior SAP consultants who lead Noshtek — 18+ years average experience across Utilities, Telecom, and Insurance financial transformation.",
};

export default function LeadershipPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/company/about" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Company</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">Leadership Team</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              The SAP Experts
              <br />
              <span className="gradient-text">You&apos;ll Actually Work With.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Noshtek, there&apos;s no bait-and-switch after contract signing. The senior
              practitioners who lead our engagements are the same people you meet in the
              sales process. Meet our team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 80} animation="fade-up">
                <div className="card p-0 overflow-hidden h-full flex flex-col group">
                  {/* Avatar area */}
                  <div
                    className="h-48 flex items-center justify-center relative"
                    style={{background:'linear-gradient(135deg, #0A1929, #1A2F5C)'}}
                  >
                    <div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center text-[#00B8B8] font-black text-2xl"
                      style={{background:'rgba(0,184,184,0.15)',border:'3px solid rgba(0,184,184,0.3)'}}
                    >
                      {person.initials}
                    </div>
                    <a
                      href={person.linkedin}
                      className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                      style={{background:'rgba(0,184,184,0.2)'}}
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-[#00B8B8]" />
                    </a>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-[#0A1929] mb-1">{person.name}</h3>
                    <p className="text-[#00B8B8] font-semibold text-sm mb-4">{person.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{person.bio}</p>

                    {/* Expertise */}
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Expertise</p>
                      <div className="flex flex-wrap gap-1.5">
                        {person.expertise.map((e) => (
                          <span
                            key={e}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg"
                            style={{background:'rgba(0,184,184,0.08)',color:'#007A7A'}}
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="card p-12 text-center">
            <span className="section-label">Careers</span>
            <h2 className="text-3xl font-black text-[#0A1929] mb-4">
              Want to Join This Team?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              We&apos;re always looking for senior SAP practitioners who want to do the best
              work of their career — without the bureaucracy of global integrators.
            </p>
            <Link href="/company/careers" className="btn-primary">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your SAP challenge and we&apos;ll identify the right specialist.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { locations, stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Noshtek | Boutique SAP Consulting Firm",
  description:
    "Noshtek is a boutique SAP consulting firm with 15+ years delivering financial transformation for Utilities, Telecom, and Insurance enterprises across 5 global offices.",
};

const values = [
  {
    icon: "🎯",
    title: "Specialist over Generalist",
    description:
      "We deliberately limit our scope to three industries because deep expertise cannot be faked. Every client gets consultants who have solved their exact problem before.",
  },
  {
    icon: "🤝",
    title: "Outcome Accountability",
    description:
      "We measure success by your metrics, not ours. If the close doesn't compress, the auto-match doesn't hit target, or the go-live slips — we own it.",
  },
  {
    icon: "🧠",
    title: "AI as Standard Practice",
    description:
      "Machine learning is not a premium add-on. Our delivery methodology integrates AI applications from the first design sprint — because that's where transformative value lives.",
  },
  {
    icon: "🌍",
    title: "Global Reach, Boutique Feel",
    description:
      "Five offices across three continents ensure we can staff engagements locally while drawing on a global talent pool. Yet you'll always have a named partner on speed dial.",
  },
];

const timeline = [
  { year: "2009", event: "Founded in New York by former SAP Principal Consultants" },
  { year: "2012", event: "Opened Singapore office; first APAC utility engagement" },
  { year: "2015", event: "Expanded to India delivery center (Bangalore)" },
  { year: "2017", event: "Launched Insurance Practice; first FPSL implementation" },
  { year: "2019", event: "Achieved SAP Gold Partner status" },
  { year: "2021", event: "Opened Toronto office; expanded Canada utilities practice" },
  { year: "2023", event: "Launched AI-augmented financial close methodology" },
  { year: "2024", event: "Taiwan office opened; APAC Insurance practice expansion" },
  { year: "2026", event: "40+ enterprise clients across 5 offices globally" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-label">About Noshtek</span>
            <h1 className="text-5xl font-black text-white mb-6">
              Built by SAP Practitioners.
              <br />
              <span className="gradient-text">For Enterprise Clients.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Noshtek was founded in 2009 by SAP consultants who were frustrated by
              what large integrators couldn&apos;t deliver: deep industry expertise,
              genuine AI integration, and the accountability that comes from naming a
              partner — not a practice — as responsible for your outcome.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary-lg">
                Meet our team <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/company/leadership" className="btn-outline">
                Leadership Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80} animation="fade-up">
                <div className="text-center">
                  <div className="text-5xl font-black text-[#0A1929] mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-700">{stat.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.sublabel}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <span className="section-label">Our Mission</span>
              <h2 className="text-4xl font-black text-[#0A1929] mb-6">
                To Make Boutique SAP
                <br />Consulting the Smarter Choice.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The SAP market is dominated by global integrators who promise the world
                  and deliver it through armies of junior consultants managed by distant
                  partners. We built Noshtek as the alternative.
                </p>
                <p>
                  We operate at the intersection of three forces: deep SAP module expertise
                  built over 15+ years, industry knowledge that goes beyond what a textbook
                  can teach, and emerging AI capabilities that are genuinely changing what's
                  possible in financial automation.
                </p>
                <p>
                  Our model is simple: fewer clients, deeper engagement, measurable outcomes.
                  We cap our active engagements so that every client receives the level of
                  attention they were promised in the sales process — not what's left after
                  the best people move to the next pursuit.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="space-y-4">
                {values.map((value, i) => (
                  <div
                    key={value.title}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{background:'rgba(0,184,184,0.04)', border:'1px solid rgba(0,184,184,0.1)'}}
                  >
                    <span className="text-2xl flex-shrink-0">{value.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#0A1929] mb-1">{value.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="text-4xl font-black text-white mb-4">
              17 Years of SAP Excellence.
            </h2>
            <p className="text-gray-400 text-lg">
              From a two-person New York consultancy to a global firm with 5 offices and 40+ enterprise clients.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div
              className="absolute left-16 top-0 bottom-0 w-px hidden md:block"
              style={{background:'linear-gradient(to bottom, #00B8B8, rgba(0,184,184,0.1))'}}
            />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 60} animation="slide-left">
                  <div className="flex items-center gap-8">
                    <div className="w-32 text-right flex-shrink-0 hidden md:block">
                      <span className="text-[#00B8B8] font-black text-xl">{item.year}</span>
                    </div>
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block"
                      style={{background:'#00B8B8', boxShadow:'0 0 12px rgba(0,184,184,0.5)'}}
                    />
                    <div className="p-4 rounded-xl flex-1" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                      <span className="text-[#00B8B8] font-bold md:hidden">{item.year} · </span>
                      <span className="text-white">{item.event}</span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Global Presence</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              Five Offices. One Noshtek.
            </h2>
            <p className="text-gray-500 text-lg">
              Local expertise, global standards. We staff engagements from the office
              closest to you, drawing on our full global bench when needed.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 80} animation="fade-up">
                <div className="card p-6">
                  <div className="text-4xl mb-4">{loc.flag}</div>
                  <h3 className="text-xl font-bold text-[#0A1929] mb-1">{loc.city}</h3>
                  <p className="text-[#00B8B8] text-sm font-semibold mb-3">{loc.role}</p>
                  <div className="flex items-start gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your SAP challenge and we&apos;ll match you with the right specialist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
            >
              Talk to a Specialist <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/company/leadership"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/lib/data";

interface IndustryStat {
  value: string;
  label: string;
}

interface IndustryChallenge {
  title: string;
  description: string;
}

interface IndustryData {
  name: string;
  tagline: string;
  description: string;
  hero_stats: IndustryStat[];
  challenges: IndustryChallenge[];
  solutions: string[];
  modules: string[];
}

interface IndustryPageProps {
  industry: IndustryData;
  industryKey: "utilities" | "telecom" | "insurance";
  icon: string;
  color: string;
}

export default function IndustryPageTemplate({ industry, industryKey, icon, color }: IndustryPageProps) {
  const industryCaseStudies = caseStudies.filter(
    (c) => c.industry === industry.name
  );

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/industries" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Industries</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">{industry.name}</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">{icon}</div>
                <h1 className="text-5xl font-black text-white mb-4">
                  {industry.tagline}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary-lg">
                    Talk to our {industry.name} Specialist <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="/case-studies" className="btn-outline">View Case Studies</Link>
                </div>
              </div>

              {/* Hero stats */}
              <div className="grid grid-cols-3 gap-4">
                {industry.hero_stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl text-center"
                    style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}
                  >
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Industry Challenges</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              We Understand the Complexity
              <br />of {industry.name} Finance.
            </h2>
            <p className="text-gray-500 text-lg">
              Generic SAP implementations fail because they miss industry-specific nuances.
              Our {industry.name} practice was built around these exact challenges.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.challenges.map((challenge, i) => (
              <AnimatedSection key={challenge.title} delay={i * 100} animation="fade-up">
                <div className="p-8 rounded-2xl h-full" style={{border:'1px solid #f3f4f6',boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:`${color}15`}}>
                    <div className="w-3 h-3 rounded-full" style={{background:color}} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1929] mb-3">{challenge.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{challenge.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="slide-left">
              <span className="section-label">Our Solutions</span>
              <h2 className="text-4xl font-black text-[#0A1929] mb-6">
                What Noshtek Delivers
                <br />for {industry.name} Clients.
              </h2>
              <ul className="space-y-3">
                {industry.solutions.map((sol) => (
                  <li key={sol} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B8B8] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{sol}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="p-8 rounded-2xl bg-[#0A1929] text-white">
                <p className="text-[#00B8B8] font-semibold text-sm uppercase tracking-widest mb-6">
                  SAP Modules
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industry.modules.map((mod) => (
                    <div
                      key={mod}
                      className="px-4 py-3 rounded-xl text-sm font-medium"
                      style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.08)'}}
                    >
                      {mod}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                  <p className="text-gray-400 text-sm mb-4">
                    Our {industry.name} practice has delivered {industryCaseStudies.length > 0 ? `${industryCaseStudies.length}+` : 'multiple'} successful implementations across the industry.
                  </p>
                  <Link href="/contact" className="btn-primary text-sm">
                    Meet our {industry.name} team <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {industryCaseStudies.length > 0 && (
        <section className="py-24 bg-[#0A1929]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="section-label">{industry.name} Case Studies</span>
                <h2 className="text-4xl font-black text-white">
                  Real Outcomes. Real Clients.
                </h2>
              </div>
              <Link href="/case-studies" className="btn-outline-teal flex-shrink-0">
                All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {industryCaseStudies.slice(0, 2).map((study, i) => (
                <AnimatedSection key={study.slug} delay={i * 100}>
                  <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{background:'#0D1E3F',border:'1px solid rgba(255,255,255,0.07)'}}>
                    <div className="px-6 py-5" style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                      <span className="tag-teal mb-3 inline-block">{study.tag}</span>
                      <h3 className="text-white font-bold text-lg">{study.title}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-px" style={{background:'rgba(255,255,255,0.04)'}}>
                      {study.results.slice(0, 4).map((r) => (
                        <div key={r.label} className="p-4 text-center" style={{background:'#0D1E3F'}}>
                          <div className="text-2xl font-black text-[#00B8B8]">{r.metric}</div>
                          <div className="text-xs text-gray-500 mt-0.5 leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{study.challenge.slice(0, 130)}...</p>
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
            Ready to Transform Your {industry.name} Finance Operations?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Speak with a Noshtek {industry.name} specialist about your specific challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Talk to a Specialist <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

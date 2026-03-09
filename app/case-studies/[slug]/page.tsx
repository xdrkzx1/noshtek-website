import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/lib/data";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: study.title,
    description: study.challenge,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00B8B8] transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="tag-teal">{study.tag}</span>
              <span className="px-3 py-1 text-sm text-gray-400" style={{background:'rgba(255,255,255,0.07)',borderRadius:'9999px'}}>
                {study.solution}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white max-w-4xl mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-gray-400 text-sm">{study.client}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-[#00B8B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.results.map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-4xl font-black text-white mb-1">{r.metric}</div>
                <div className="text-white/70 text-sm">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Body */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <AnimatedSection>
                <h2 className="text-2xl font-black text-[#0A1929] mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{study.challenge}</p>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-2xl font-black text-[#0A1929] mb-4">The Solution</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{study.solution_detail}</p>
              </AnimatedSection>

              {/* Quote */}
              <AnimatedSection>
                <div className="p-8 rounded-2xl" style={{background:'rgba(0,184,184,0.05)',border:'2px solid rgba(0,184,184,0.15)'}}>
                  <Quote className="w-8 h-8 text-[#00B8B8] mb-4" />
                  <p className="text-gray-700 text-xl italic leading-relaxed mb-4">
                    {study.quote}
                  </p>
                  <p className="text-gray-500 font-semibold">— {study.quoteAuthor}</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection animation="slide-right">
                <div className="p-6 rounded-2xl bg-[#0A1929] text-white sticky top-28">
                  <p className="text-[#00B8B8] text-xs font-semibold uppercase tracking-widest mb-4">
                    Technologies Used
                  </p>
                  <div className="space-y-2 mb-6">
                    {study.technology.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#00B8B8] flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="pt-5" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                    <p className="text-gray-400 text-sm mb-4">
                      Want similar results for your organization?
                    </p>
                    <Link href="/contact" className="btn-primary w-full justify-center text-center text-sm">
                      Talk to a Specialist <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <h2 className="text-3xl font-black text-[#0A1929]">More Case Studies</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <AnimatedSection key={rel.slug}>
                  <div className="card overflow-hidden">
                    <div className="bg-[#0A1929] px-6 py-5">
                      <span className="tag-teal mb-3 inline-block">{rel.tag}</span>
                      <h3 className="text-white font-bold">{rel.title}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-4 gap-4 mb-5">
                        {rel.results.map((r) => (
                          <div key={r.label} className="text-center">
                            <div className="text-xl font-black text-[#0A1929]">{r.metric}</div>
                            <div className="text-xs text-gray-500 leading-tight">{r.label}</div>
                          </div>
                        ))}
                      </div>
                      <Link href={`/case-studies/${rel.slug}`} className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm hover:gap-3 transition-all duration-200">
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
    </div>
  );
}

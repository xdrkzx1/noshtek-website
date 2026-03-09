"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { caseStudies } from "@/lib/data";

const filters = ["All", "Utilities", "Telecom", "Insurance"];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === active);

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">Case Studies</span>
            <h1 className="text-5xl font-black text-white mb-6">
              Outcomes that Speak
              <br />
              <span className="gradient-text">for Themselves.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real results from real engagements. Each case study reflects the kind of
              deep, senior-led work that Noshtek delivers — and the business impact
              our clients measure after go-live.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  active === f
                    ? { background: "#00B8B8", color: "white" }
                    : { background: "white", color: "#495057", border: "1.5px solid #dee2e6" }
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((study) => (
              <div key={study.slug} className="card flex flex-col overflow-hidden group h-full">
                {/* Header */}
                <div className="bg-[#0A1929] px-6 py-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag-teal">{study.tag}</span>
                    <span className="text-gray-500 text-xs">{study.solution}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug">{study.title}</h3>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-px bg-gray-100">
                  {study.results.slice(0, 4).map((r) => (
                    <div key={r.label} className="bg-white p-4 text-center">
                      <div className="text-2xl font-black text-[#0A1929]">{r.metric}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.technology.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs font-medium rounded-md" style={{background:'#f1f3f5',color:'#495057'}}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-1">
                    <Quote className="w-4 h-4 text-[#00B8B8] flex-shrink-0 mt-1" />
                    <p className="text-gray-500 text-sm italic leading-relaxed">
                      {study.quote.slice(0, 100)}...
                    </p>
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="flex items-center gap-2 text-[#00B8B8] font-semibold text-sm mt-5 group-hover:gap-3 transition-all duration-200"
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No case studies match that filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Your Company Could Be Next.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your SAP challenge and let&apos;s explore what&apos;s possible.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Talk to a Specialist <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

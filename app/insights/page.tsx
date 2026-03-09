"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { insights } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const filters = ["All", "AI & Finance", "Insurance", "Architecture", "Integration", "Migration", "Whitepaper"];

const categoryIcons: Record<string, string> = {
  "AI & Finance": "🤖",
  Insurance: "🛡️",
  Architecture: "🏗️",
  Integration: "🔗",
  Migration: "🚀",
  Whitepaper: "📄",
  Cross: "🌐",
};

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? insights
      : insights.filter((a) => a.category === activeFilter || (activeFilter === "Whitepaper" && a.gated));

  const featured = insights.find((a) => a.featured && !a.gated);
  const rest = filtered.filter((a) => a !== featured);

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-label">Insights</span>
            <h1 className="text-5xl font-black text-white mb-6">
              SAP Insights from
              <br />
              <span className="gradient-text">Practitioners, Not Pundits.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Articles, whitepapers, and technical guides written by the Noshtek
              consultants who implement SAP systems every day — not marketing teams
              or ghost-writers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeFilter === "All" && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label mb-6">Featured Article</p>
            <Link href={`/insights/${featured.slug}`} className="group block">
              <div className="card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div
                    className="h-72 lg:h-auto flex items-center justify-center relative"
                    style={{background:'linear-gradient(135deg, #0A1929, #1A2F5C)'}}
                  >
                    <span className="text-8xl opacity-20">{categoryIcons[featured.category] || "📖"}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 lg:hidden">
                      <span className="tag-teal">{featured.category}</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <span className="tag-teal mb-4 hidden lg:inline-flex w-fit">{featured.category}</span>
                    <h2 className="text-2xl font-black text-[#0A1929] mb-4 group-hover:text-[#00B8B8] transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6" style={{borderBottom:'1px solid #f3f4f6'}}>
                      <span className="font-medium text-gray-600">{featured.author} · {featured.authorTitle}</span>
                      <span>{featured.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#00B8B8] font-semibold group-hover:gap-3 transition-all duration-200">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filters + Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  activeFilter === f
                    ? { background: "#00B8B8", color: "white" }
                    : { background: "white", color: "#495057", border: "1.5px solid #dee2e6" }
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeFilter === "All" ? rest : filtered).map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="card flex flex-col overflow-hidden group cursor-pointer block"
              >
                {/* Image area */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{background:'linear-gradient(135deg, #0A1929, #1A2F5C)'}}
                >
                  <span className="text-5xl opacity-25">{categoryIcons[article.category] || "📖"}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 to-transparent" />
                  {article.gated && (
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg text-white"
                      style={{background:'#00B8B8'}}
                    >
                      <Lock className="w-3 h-3" />
                      Whitepaper
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <span className="tag-teal text-xs">{article.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0A1929] mb-3 leading-snug group-hover:text-[#00B8B8] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                    {article.excerpt.slice(0, 110)}...
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md"
                        style={{background:'#f1f3f5',color:'#495057'}}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4" style={{borderTop:'1px solid #f3f4f6'}}>
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400 text-lg">
              No articles match that filter.
            </div>
          )}
        </div>
      </section>

      {/* Whitepaper CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
            Free Whitepaper
          </p>
          <h2 className="text-3xl font-black text-white mb-4">
            The AI-Augmented Finance Function:
            <br />A Practical Roadmap for SAP Clients
          </h2>
          <p className="text-white/80 text-lg mb-8">
            25-page guide covering ML applications in financial close, anomaly detection,
            and predictive forecasting on SAP platforms.
          </p>
          <Link
            href="/insights/ai-sap-financial-transformation-whitepaper"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
          >
            Download Free Whitepaper <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock, Clock, User } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { insights, leadershipTeam } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import GatedContentForm from "@/components/ui/GatedContentForm";

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

// Static article body content per slug
const articleContent: Record<string, string[]> = {
  "ai-financial-close-utilities": [
    "The month-end close process has long been the Achilles heel of utility finance teams. In a sector where regulatory reporting is non-negotiable and reconciliation volumes are massive — think millions of billing transactions against bank statements — a 10–14 day close cycle is not just inefficient. It's a genuine competitive and compliance risk.",
    "At Noshtek, we've implemented AI-augmented financial close processes for seven utility clients over the past three years. The results have been consistent: average close cycle reduction of 45%, with one client moving from 12 days to under 5. What follows is an honest look at how we do it — and where the common failure points lie.",
    "**The Cash Application Problem**\n\nUtility billing generates enormous payment volumes — residential customers paying monthly, commercial customers on complex schedules, government entities with extended terms. Traditional cash application matches payments to open receivables through rule-based matching that, at best, auto-matches 60–70% of items.",
    "The remainder lands in a reconciliation queue where AR clerks manually research each exception. At scale, this is a full-time function consuming 3–5 FTEs in a mid-sized utility. And it's entirely solvable with machine learning.",
    "Our ML cash application model is trained on 24 months of historical payment data before go-live. It learns the payment patterns unique to your customer base — the industrial customer who always pays 3 days early but deducts disputed items, the municipality that pays in aggregate across multiple accounts, the retail customer who pays via bank transfer with a non-standard reference. After a 90-day live training period, typical auto-match rates reach 90–94%. One client achieved 97%.",
    "**Anomaly Detection in the Close Process**\n\nBeyond cash application, AI delivers significant value in close management itself. Traditional close processes are reactive — the finance team discovers problems at period-end during reconciliation. By that point, resolution paths are constrained by time pressure.",
    "We implement continuous anomaly detection that monitors journal postings, accrual balances, and intercompany transactions throughout the month. Models are trained on normal posting patterns and flag deviations in real time — an unusual journal posting on day 5, an accrual that's 40% higher than the prior quarter average without a corresponding business event, an intercompany balance that doesn't match the counterpart.",
    "The finance team reviews flagged items when they occur, not when the close clock is ticking. This shifts close management from reactive firefighting to proactive exception management — and it's the single biggest driver of close cycle compression in our experience.",
    "**Implementation Considerations**\n\nThe technology is proven. The harder challenge is organizational. Finance teams that have managed the close the same way for 10+ years need structured change management to adopt exception-driven workflows. We spend as much time on process redesign and training as on technical implementation.",
    "Second, data quality matters. ML models trained on inconsistent or incomplete historical data will underperform. We conduct a data quality assessment in the first project phase and remediate issues before model training begins — a step that adds 2–3 weeks but prevents months of post-go-live issues.",
    "The utilities that achieve the best outcomes are those that commit a senior finance lead as the business sponsor throughout implementation. They ensure the models are tuned to real-world business rules, they drive adoption with their teams, and they hold the SI accountable to outcome metrics — not just go-live milestones.",
  ],
  "ifrs17-sap-fpsl-guide": [
    "When IFRS 17 became mandatory for annual reporting periods beginning on or after January 1, 2023, it represented the most significant change to insurance accounting in decades. For the insurers who had not yet implemented SAP Financial Products Subledger (FPSL), the clock was already behind.",
    "Noshtek's insurance practice has implemented IFRS 17 on SAP FPSL for eight insurers across three continents. This guide reflects what we've learned about the three measurement model approaches — Building Block Approach (BBA), Premium Allocation Approach (PAA), and Variable Fee Approach (VFA) — and how each is configured in FPSL.",
    "**Building Block Approach (BBA)**\n\nThe BBA, also known as the General Measurement Model (GMM), is the default measurement approach for insurance contracts. It decomposes the liability for remaining coverage into three components: present value of future cash flows, risk adjustment, and contractual service margin (CSM).",
    "In SAP FPSL, the BBA is implemented through the Subledger's Insurance Contract Lifecycle Management (ICLM) component. Key configuration decisions include: the grouping methodology for contracts into cohorts, the granularity of CSM tracking, the approach for determining the risk adjustment (VaR, CTE, or explicit margin), and the CSM amortization pattern.",
    "The most complex BBA implementation challenge we encounter is actuarial data integration. FPSL needs present value of future cash flows from the actuarial system — typically Prophet or MoSes — at the contract group level and time step granularity required by the CSM roll-forward. We've built a data integration accelerator that transforms Prophet output into the FPSL-compatible format, reducing this integration effort from 8 weeks to 3.",
    "**Premium Allocation Approach (PAA)**\n\nThe PAA is a simplified measurement model permitted for short-duration contracts where the coverage period is one year or less, or where the PAA produces a reasonable approximation of the BBA result. For property & casualty insurers, the PAA is typically the predominant approach.",
    "PAA configuration in FPSL is simpler than BBA, but the eligibility assessment is often underestimated. Insurers need a documented eligibility test for each contract group, and FPSL needs to be configured to enforce the eligibility criteria and flag contracts that no longer qualify. We've seen insurers use PAA for contracts with 13-month policy periods and face audit challenges — the eligibility test is not merely administrative.",
    "**Variable Fee Approach (VFA)**\n\nThe VFA applies to direct participating contracts — policies where the policyholder shares in the return on a clearly identified pool of underlying items. Life insurance with profit participation and unit-linked products typically qualify.",
    "The VFA is the most technically complex FPSL configuration, primarily because of the financial variable fee treatment and the CSM adjustment for changes in financial risk. The key insight is that the VFA CSM absorbs changes in the entity's share of the fair value of underlying items — a feature that requires real-time or near-real-time fair value data flowing from the investment accounting system into FPSL.",
    "In practice, the VFA implementation requires a robust data feed from the asset management platform. We configure SAP FPSL to receive daily NAV updates for unit-linked products and use these to drive the VFA CSM adjustment at each reporting date.",
    "**Our Implementation Approach**\n\nRegardless of measurement model mix, our FPSL IFRS 17 implementations follow a consistent pattern: begin with a measurement model assessment and grouping strategy workshop, then configure a prototype in a sandbox environment using real actuarial data, run a parallel period with the legacy calculation before go-live, and conduct a detailed audit pack review with the external auditors at each major milestone.",
    "The parallel run is non-negotiable. It is the only way to demonstrate to auditors, regulators, and your own CFO that the FPSL numbers are right — and to catch the configuration issues that only surface with real data at scale.",
  ],
  "sap-brim-telecom-architecture": [
    "SAP BRIM (Billing and Revenue Innovation Management) is arguably the most architecturally complex product in the SAP portfolio. It sits at the intersection of network systems, product catalog, customer management, and financial accounting — processing millions of usage events in real time while maintaining consistency with the financial subledger.",
    "In our experience delivering BRIM for 12 telecom clients, the implementation failures we've seen — and the projects we've been brought in to rescue — share common architectural mistakes. This article documents the most critical design decisions and what the wrong choice costs.",
    "**Convergent Charging Architecture: Real-Time vs. Batch**\n\nThe foundational architectural decision in BRIM is whether to configure Convergent Charging (CC) in online (real-time) or offline (batch) mode. Online mode rates network usage events as they occur, enabling real-time balance management for prepaid and hybrid subscribers. Offline mode processes usage records in batch, suitable for postpaid-only billing.",
    "Telcos with mixed postpaid/prepaid portfolios consistently underestimate the complexity of online CC configuration. The online rating engine must be sized to handle peak network traffic — which, in a 5G environment with IoT devices, can be 50–100x the subscriber count in events per second. We design online CC deployments with a minimum 3x headroom over projected peak load, plus automatic horizontal scaling through SAP BRIM's cloud-native deployment options.",
    "One client went live with online CC sized for current subscriber count and hit capacity within 6 months of a 5G rollout. The emergency scaling exercise cost more than the initial infrastructure would have. Size for growth, not current state.",
    "**Contract Accounts Receivable (FI-CA) Integration Depth**\n\nFI-CA is the financial subledger for BRIM — it holds the contract accounts, manages open item clearing, and provides the interface to SAP FI. The integration depth between BRIM's billing engine and FI-CA determines whether you have a truly integrated billing-to-cash process or a complicated reconciliation problem.",
    "The most important integration decision is whether to use direct posting (BRIM posts directly to FI-CA in real time) or batch transfer (BRIM accumulates billing documents and transfers to FI-CA on a schedule). Direct posting provides real-time AR visibility but requires FI-CA to be available and performant during billing runs. Batch transfer is more resilient but creates a time lag in financial reporting.",
    "For large volume telcos, we typically recommend a hybrid approach: direct posting for high-value enterprise accounts where real-time AR is business-critical, and batch transfer for mass-market residential accounts where the volume would overwhelm synchronous FI-CA posting.",
    "**Product Catalog Governance**\n\nThe product catalog in BRIM's Subscription Order Management (SOM) component is where implementation projects consistently lose control. A telecom's commercial product portfolio — rate plans, bundles, add-ons, discounts, promotions — translates into a combinatorial explosion of BRIM configuration.",
    "Without rigorous catalog governance, product catalogs grow organically into unmaintainable complexity. We've seen a mid-sized MVNO with 200 commercial products end up with 1,400 BRIM charge plans. The resulting maintenance burden was a significant factor in their decision to re-implement.",
    "The solution is a product modeling governance process established before configuration begins. Every commercial product maps to a standardized template of charge plan components. New products must follow the template — exceptions require architecture review. The catalog governance process pays for itself within the first product launch cycle.",
    "**Revenue Assurance from Day One**\n\nFinally: do not treat revenue assurance as a post-implementation add-on. The revenue leakage that costs telcos 1–3% of revenues is most effectively addressed in the BRIM architecture phase, where data lineage from network to bill to FI-CA can be designed for auditability.",
    "We build reconciliation control points into every BRIM implementation: network event count vs. rated event count, rated event value vs. invoice value, invoice value vs. FI-CA posting, FI-CA posting vs. GL balance. Each control point runs automatically and exceptions surface on a revenue assurance dashboard. Implementing these controls at go-live — not retrofitting them 18 months later — is the difference between 0.3% leakage and 1.5% leakage.",
  ],
};

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) notFound();

  const author = leadershipTeam.find((m) => m.name === article.author);
  const related = insights.filter((a) => a.slug !== slug && a.industry === article.industry).slice(0, 2);
  const content = articleContent[slug] || [article.excerpt, "Full article content coming soon. Please check back shortly or contact us for more information."];

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/insights" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00B8B8] transition-colors text-sm mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="tag-teal">{article.category}</span>
              <span className="text-gray-500 text-sm">{article.industry}</span>
              {article.gated && (
                <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white" style={{background:'#00B8B8'}}>
                  <Lock className="w-3 h-3" />
                  Whitepaper
                </span>
              )}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white max-w-4xl mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author} · {article.authorTitle}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>{formatDate(article.date)}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-16">
            {/* Content */}
            <div className="lg:col-span-3">
              {article.gated ? (
                <GatedContentForm article={article} previewContent={content.slice(0, 2)} />
              ) : (
                <AnimatedSection>
                  <div className="prose prose-lg max-w-none">
                    {content.map((paragraph, i) => {
                      if (paragraph.startsWith("**") && paragraph.includes("**\n")) {
                        const [heading, ...rest] = paragraph.split("\n");
                        const headingText = heading.replace(/\*\*/g, "");
                        return (
                          <div key={i}>
                            <h2 className="text-2xl font-black text-[#0A1929] mt-10 mb-4">{headingText}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{rest.join("\n")}</p>
                          </div>
                        );
                      }
                      return (
                        <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8" style={{borderTop:'1px solid #f3f4f6'}}>
                    <p className="text-sm font-semibold text-gray-500 mb-3">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm rounded-full" style={{background:'#f1f3f5',color:'#495057'}}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Author bio */}
              {author && (
                <AnimatedSection className="mt-12">
                  <div className="p-6 rounded-2xl" style={{background:'#f8f9fa',border:'1px solid #e9ecef'}}>
                    <div className="flex items-start gap-5">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-[#00B8B8] font-black text-xl"
                        style={{background:'rgba(0,184,184,0.12)',border:'2px solid rgba(0,184,184,0.25)'}}
                      >
                        {author.initials}
                      </div>
                      <div>
                        <p className="font-bold text-[#0A1929] text-lg">{author.name}</p>
                        <p className="text-[#00B8B8] text-sm font-medium mb-3">{author.title}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{author.bio.slice(0, 200)}...</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA */}
                <div className="p-6 rounded-2xl bg-[#0A1929] text-white">
                  <p className="text-[#00B8B8] text-xs font-semibold uppercase tracking-widest mb-3">
                    Have a question?
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Our specialists can discuss how these approaches apply to your specific situation.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-center text-sm">
                    Talk to an Expert <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div>
                    <p className="font-bold text-[#0A1929] mb-4">Related Articles</p>
                    <div className="space-y-4">
                      {related.map((rel) => (
                        <Link key={rel.slug} href={`/insights/${rel.slug}`} className="block group">
                          <div className="p-4 rounded-xl" style={{border:'1px solid #e9ecef',background:'white'}}>
                            <span className="tag-teal text-xs mb-2 inline-block">{rel.category}</span>
                            <p className="text-sm font-semibold text-[#0A1929] group-hover:text-[#00B8B8] transition-colors leading-snug">
                              {rel.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{rel.readTime}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

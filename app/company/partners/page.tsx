import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Partners | SAP Gold Partner & Technology Ecosystem",
  description:
    "Noshtek is an SAP Gold Partner with a curated ecosystem of technology partners including Microsoft Azure, AWS, and specialized industry technology providers.",
};

const sapPartnership = [
  "SAP S/4HANA qualified partner",
  "SAP BRIM specialization",
  "SAP FPSL / Insurance qualified",
  "SAP IS-U Utilities certified",
  "SAP BTP implementation partner",
  "SAP PartnerEdge Gold member",
];

const technologyPartners = [
  {
    name: "Microsoft Azure",
    type: "Cloud Platform",
    description: "Azure cloud infrastructure for SAP deployments, including SAP on Azure optimized configurations and Azure Data Factory for SAP data integration.",
    logo: "☁️",
  },
  {
    name: "Amazon Web Services",
    type: "Cloud Platform",
    description: "AWS infrastructure for SAP workloads, including SAP HANA on AWS and Amazon S3 data lake integration with SAP Analytics.",
    logo: "🌩️",
  },
  {
    name: "Itron",
    type: "Smart Metering",
    description: "Preferred integration partner for connecting Itron AMI Head-End Systems to SAP IS-U for utility clients across North America and Europe.",
    logo: "⚡",
  },
  {
    name: "Moody's Analytics (Prophet)",
    type: "Actuarial Systems",
    description: "Integration expertise connecting Prophet actuarial models to SAP FPSL for IFRS 17 implementations — covering data extraction, transformation, and load.",
    logo: "📊",
  },
  {
    name: "GGY (Milliman)",
    type: "Actuarial Systems",
    description: "AXIS actuarial system integration with SAP FPSL for life insurance IFRS 17 measurement model implementations.",
    logo: "🛡️",
  },
  {
    name: "Salesforce",
    type: "CRM",
    description: "Bi-directional SAP-Salesforce integration for financial data synchronization, quote-to-cash, and customer account management.",
    logo: "🔗",
  },
];

export default function PartnersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/company/about" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Company</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">Partners</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              SAP Gold Partner.
              <br />
              <span className="gradient-text">Enterprise Ecosystem.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Noshtek&apos;s partner ecosystem is curated, not comprehensive. We maintain
              deep certifications with SAP and strategic relationships with the technology
              partners that matter most to our clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SAP Partnership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <span className="section-label">Primary Partnership</span>
              <h2 className="text-4xl font-black text-[#0A1929] mb-6">
                SAP Gold Partner.
                <br />Certified Across the Portfolio.
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Achieving SAP Gold Partner status requires demonstrating consistent
                project delivery quality, maintaining certified consultants across
                multiple SAP solution areas, and meeting rigorous customer satisfaction
                standards — standards that Noshtek has exceeded since 2019.
              </p>
              <ul className="space-y-3">
                {sapPartnership.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B8B8] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div
                className="p-10 rounded-3xl text-center"
                style={{background:'linear-gradient(135deg, #0A1929, #1A2F5C)',border:'1px solid rgba(255,255,255,0.08)'}}
              >
                {/* SAP Partner badge visual */}
                <div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-6 text-6xl"
                  style={{background:'rgba(0,184,184,0.15)',border:'3px solid rgba(0,184,184,0.3)'}}
                >
                  🏆
                </div>
                <h3 className="text-white font-black text-2xl mb-2">SAP Gold Partner</h3>
                <p className="text-[#00B8B8] font-semibold mb-4">PartnerEdge Program</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Noshtek has maintained SAP Gold Partner status since 2019, with
                  certified consultants across S/4HANA Finance, BRIM, FPSL, and IS-U.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 pt-6" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
                  {[
                    { v: "40+", l: "Certified consultants" },
                    { v: "6+", l: "Solution specializations" },
                    { v: "2019", l: "Gold since" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-xl font-black text-white">{s.v}</div>
                      <div className="text-xs text-gray-500">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <span className="section-label">Technology Partners</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              A Curated Partner Ecosystem.
            </h2>
            <p className="text-gray-500 text-lg">
              We partner with the technology providers our clients already use —
              not with the largest partner ecosystem, but the right one.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 80} animation="fade-up">
                <div className="card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{partner.logo}</span>
                    <div>
                      <h3 className="font-bold text-[#0A1929]">{partner.name}</h3>
                      <span className="tag-teal text-xs">{partner.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {partner.description}
                  </p>
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
            Interested in a Partnership?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We selectively partner with technology providers who complement our SAP practice. Reach out to discuss.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

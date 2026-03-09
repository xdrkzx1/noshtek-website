import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, GitBranch, Activity, Database } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Integration & Automation | SAP BTP, RPA & IoT Integration",
  description:
    "Noshtek connects SAP to the wider enterprise — from smart meters to CRM — through AI-powered automation and SAP BTP integration architecture.",
};

const capabilities = [
  {
    Icon: GitBranch,
    title: "SAP BTP Integration Architecture",
    description: "End-to-end integration patterns using SAP Integration Suite, connecting SAP to external systems via REST, SOAP, RFC, and event-driven messaging.",
    examples: ["SAP to Salesforce sync", "Bank connectivity (SWIFT, SEPA)", "Vendor portal integration"],
  },
  {
    Icon: Cpu,
    title: "Robotic Process Automation",
    description: "Intelligent automation that handles repetitive finance tasks — journal entry posting, bank statement processing, vendor invoice routing — at scale.",
    examples: ["GL journal automation", "Invoice exception handling", "Report distribution"],
  },
  {
    Icon: Activity,
    title: "IoT & Smart Device Integration",
    description: "Connecting advanced metering infrastructure (AMI), SCADA systems, and IoT devices to SAP IS-U and S/4HANA for real-time billing and asset management.",
    examples: ["AMI to SAP IS-U", "SCADA to PM integration", "Fleet telematics"],
  },
  {
    Icon: Database,
    title: "Real-Time Data Streaming",
    description: "Event-driven architectures using Kafka and SAP Event Mesh that enable sub-second data flows between operational systems and SAP finance modules.",
    examples: ["Usage event streaming", "Real-time cost allocation", "Fraud detection pipelines"],
  },
];

const integrationPatterns = [
  "REST API & GraphQL",
  "SOAP Web Services",
  "RFC & BAPI",
  "SAP IDoc & EDIFACT",
  "SAP Event Mesh",
  "Apache Kafka",
  "SAP CPI / Integration Suite",
  "SAP BTP Extension Suite",
  "Webhooks & Microservices",
  "SFTP / File-Based Exchange",
  "SWIFT & Bank Connectivity",
  "IoT MQTT / AMQP",
];

export default function IntegrationAutomationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/solutions" className="text-gray-500 text-sm hover:text-[#00B8B8] transition-colors">Solutions</Link>
              <span className="text-gray-600">/</span>
              <span className="text-[#00B8B8] text-sm font-medium">Integration & Automation</span>
            </div>
            <h1 className="text-5xl font-black text-white mb-6">
              Integration & Automation.
              <br />
              <span className="gradient-text">SAP Connected to Everything.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              SAP is only as valuable as the data flowing through it. Noshtek builds the
              integration fabric that connects your SAP core to smart meters, billing
              platforms, banking systems, and CRM — in real time, with AI where it matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary-lg">
                Discuss Your Integration Challenge <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="btn-outline">See Case Studies</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Integration Capabilities</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">
              From Smart Meters to SAP.
              <br />From RPA to Real-Time.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 100}>
                <div className="p-8 rounded-2xl h-full" style={{border:'1px solid #f3f4f6',boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{background:'rgba(0,184,184,0.1)'}}>
                    <cap.Icon className="w-6 h-6 text-[#00B8B8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1929] mb-3">{cap.title}</h3>
                  <p className="text-gray-500 mb-5 leading-relaxed">{cap.description}</p>
                  <div className="space-y-2">
                    {cap.examples.map((e) => (
                      <div key={e} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#00B8B8] flex-shrink-0" />
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Patterns */}
      <section className="py-24 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-12">
            <span className="section-label">Technical Capabilities</span>
            <h2 className="text-4xl font-black text-white mb-4">Integration Patterns We Master.</h2>
            <p className="text-gray-400 text-lg">From legacy EDIFACT to real-time event streaming — we speak every integration language.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrationPatterns.map((p, i) => (
              <AnimatedSection key={p} delay={i * 40}>
                <div className="p-4 rounded-xl text-sm font-medium text-white" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <span className="text-[#00B8B8] mr-2">⟡</span>{p}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Spotlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <span className="section-label">Featured Use Case</span>
            <h2 className="text-4xl font-black text-[#0A1929] mb-4">Smart Metering at Scale.</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-[#0A1929] p-10">
                  <span className="tag-teal mb-4 inline-block">Utilities</span>
                  <h3 className="text-white text-2xl font-black mb-4">
                    2 Million AMI Devices Connected to SAP IS-U
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    A European electricity distribution company needed to integrate 2M advanced
                    metering infrastructure (AMI) devices generating 15M daily reads into
                    SAP IS-U for automated billing and demand response programs.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Noshtek built an event-driven integration architecture connecting the
                    Itron Head-End System to SAP IS-U via real-time REST APIs, with ML-based
                    meter data validation and consumption estimation.
                  </p>
                </div>
                <div className="p-10 bg-white">
                  <p className="text-[#00B8B8] font-semibold text-sm uppercase tracking-widest mb-6">Results</p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { v: "2M", l: "AMI devices integrated" },
                      { v: "99.5%", l: "Read success rate" },
                      { v: "40%", l: "Fewer estimated bills" },
                      { v: "Zero", l: "Data loss incidents" },
                    ].map((r) => (
                      <div key={r.l}>
                        <div className="text-3xl font-black text-[#0A1929]">{r.v}</div>
                        <div className="text-sm text-gray-500 mt-1">{r.l}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/case-studies/utility-smart-metering-integration" className="flex items-center gap-2 text-[#00B8B8] font-semibold hover:gap-3 transition-all duration-200">
                    Read the full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00B8B8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">What System Do You Need to Connect to SAP?</h2>
          <p className="text-white/80 text-lg mb-8">Share your integration challenge and we&apos;ll outline an architecture within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg">
            Describe Your Challenge <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

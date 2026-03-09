"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { locations } from "@/lib/data";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Please describe your challenge";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (submitted) {
    return (
      <div className="min-h-screen hero-mesh grid-pattern flex items-center justify-center">
        <div className="text-center px-4">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{background:'rgba(0,184,184,0.15)',border:'3px solid rgba(0,184,184,0.3)'}}
          >
            <CheckCircle className="w-12 h-12 text-[#00B8B8]" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">Message Received!</h2>
          <p className="text-gray-300 text-xl mb-2">
            Thank you, <strong className="text-white">{form.name}</strong>. We&apos;ll be in touch shortly.
          </p>
          <p className="text-gray-400 mb-10">
            Our team typically responds within 2 business hours during working hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Return Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/insights" className="btn-outline">
              Read Our Insights
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero-mesh grid-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="section-label">Contact</span>
            <h1 className="text-5xl font-black text-white mb-6">
              Let&apos;s Talk About Your
              <br />
              <span className="gradient-text">SAP Challenge.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you have a specific project in mind or you&apos;re still scoping the
              problem — our specialists are available to discuss. No sales pitch.
              Just an honest conversation about whether we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="card p-8">
                  <h2 className="text-2xl font-black text-[#0A1929] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 mb-8">
                    We&apos;ll route your inquiry to the right specialist and respond within 2 business hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="input-field"
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => updateField("company", e.target.value)}
                          className="input-field"
                          placeholder="Company name"
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="input-field"
                          placeholder="you@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="input-field"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Industry</label>
                      <select
                        value={form.industry}
                        onChange={(e) => updateField("industry", e.target.value)}
                        className="input-field"
                      >
                        <option value="">Select your industry...</option>
                        <option>Utilities (Energy / Water)</option>
                        <option>Telecommunications</option>
                        <option>Insurance (Life / P&C / Reinsurance)</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Describe Your Challenge <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        className="input-field resize-none"
                        rows={5}
                        placeholder="Tell us about your SAP challenge, timeline, or what you'd like to discuss..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary-lg w-full justify-center"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending to our team...
                        </span>
                      ) : (
                        <>
                          Send to Our Team <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-[#00B8B8] hover:underline">Privacy Policy</Link>.
                      No spam — we&apos;ll only contact you about your inquiry.
                    </p>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection animation="slide-right">
                {/* Response time */}
                <div className="card p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(0,184,184,0.1)'}}>
                      <Clock className="w-5 h-5 text-[#00B8B8]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A1929]">Response Time</p>
                      <p className="text-[#00B8B8] font-semibold text-sm">Within 2 business hours</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    All inquiries are reviewed by a senior consultant — not a BDR or sales team.
                  </p>
                </div>

                {/* Direct email */}
                <div className="card p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(0,184,184,0.1)'}}>
                      <Mail className="w-5 h-5 text-[#00B8B8]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A1929]">Direct Email</p>
                      <a href="mailto:sales@noshtek.com" className="text-[#00B8B8] text-sm font-medium hover:underline">
                        sales@noshtek.com
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    For urgent matters, email directly. Reference your industry and SAP module for fastest routing.
                  </p>
                </div>

                {/* Global offices */}
                <div className="card p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(0,184,184,0.1)'}}>
                      <MapPin className="w-5 h-5 text-[#00B8B8]" />
                    </div>
                    <p className="font-bold text-[#0A1929]">Global Offices</p>
                  </div>
                  <div className="space-y-3">
                    {locations.map((loc) => (
                      <div key={loc.city} className="flex items-center gap-3 py-2" style={{borderBottom:'1px solid #f3f4f6'}}>
                        <span className="text-2xl">{loc.flag}</span>
                        <div>
                          <p className="font-semibold text-[#0A1929] text-sm">{loc.city}, {loc.country}</p>
                          <p className="text-gray-400 text-xs">{loc.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-20 bg-[#0A1929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📄", title: "Download a Whitepaper", desc: "Get our 25-page AI + SAP Financial Close guide — free, no call required.", href: "/insights/ai-sap-financial-transformation-whitepaper", cta: "Download Now" },
              { icon: "📊", title: "Read Case Studies", desc: "See detailed outcomes from our Utilities, Telecom, and Insurance engagements.", href: "/case-studies", cta: "View Case Studies" },
              { icon: "👥", title: "Meet Our Team", desc: "Learn about the senior SAP consultants who lead our engagements.", href: "/company/leadership", cta: "Meet the Team" },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="p-6 rounded-2xl text-center" style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.07)'}}>
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-5">{item.desc}</p>
                  <Link href={item.href} className="flex items-center justify-center gap-2 text-[#00B8B8] font-semibold text-sm hover:gap-3 transition-all duration-200">
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

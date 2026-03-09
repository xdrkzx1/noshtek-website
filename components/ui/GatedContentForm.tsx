"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import { type insights } from "@/lib/data";

interface Article {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  tags: string[];
}

interface GatedContentFormProps {
  article: Article;
  previewContent: string[];
}

export default function GatedContentForm({ article, previewContent }: GatedContentFormProps) {
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background:'rgba(0,184,184,0.1)'}}>
          <CheckCircle className="w-10 h-10 text-[#00B8B8]" />
        </div>
        <h3 className="text-2xl font-black text-[#0A1929] mb-3">Thank you, {form.name}!</h3>
        <p className="text-gray-500 text-lg mb-2">
          Your download link has been sent to <strong>{form.email}</strong>.
        </p>
        <p className="text-gray-400">You&apos;ll receive the whitepaper within a few minutes.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Preview */}
      <div className="mb-8 pb-8" style={{borderBottom:'1px solid #f3f4f6'}}>
        {previewContent.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed text-lg mb-6">{p}</p>
        ))}
        {/* Blur overlay */}
        <div className="relative h-24 overflow-hidden">
          <p className="text-gray-600 leading-relaxed text-lg blur-sm select-none">
            {article.excerpt}
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
      </div>

      {/* Gate */}
      <div className="p-8 rounded-2xl" style={{background:'rgba(0,184,184,0.04)',border:'1.5px solid rgba(0,184,184,0.2)'}}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(0,184,184,0.1)'}}>
            <Lock className="w-5 h-5 text-[#00B8B8]" />
          </div>
          <div>
            <p className="font-bold text-[#0A1929]">Download the full whitepaper</p>
            <p className="text-gray-500 text-sm">{article.readTime} · Free access</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company *</label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="input-field"
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Work Email *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="input-field"
              >
                <option value="">Select role...</option>
                <option>CFO / Finance Director</option>
                <option>CIO / CTO</option>
                <option>VP / Director IT</option>
                <option>SAP Consultant</option>
                <option>Program / Project Manager</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary-lg w-full justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>
                Download Whitepaper <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="text-xs text-gray-400 text-center">
            No spam. You&apos;ll receive the whitepaper and occasional SAP insights. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </div>
  );
}

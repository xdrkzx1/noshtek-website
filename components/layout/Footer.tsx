import Link from "next/link";
import { MapPin, Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Financial Transformation", href: "/solutions/financial-transformation" },
      { label: "SAP Implementation", href: "/solutions/sap-implementation" },
      { label: "Integration & Automation", href: "/solutions/integration-automation" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Utilities", href: "/industries/utilities" },
      { label: "Telecom", href: "/industries/telecom" },
      { label: "Insurance", href: "/industries/insurance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Leadership Team", href: "/company/leadership" },
      { label: "Partners", href: "/company/partners" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights & Articles", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Whitepapers", href: "/insights?type=whitepaper" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060F1A] text-white">
      {/* CTA Banner */}
      <div className="bg-[#00B8B8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Ready to transform your financial operations?
              </h3>
              <p className="text-white/80 mt-1">
                Speak with an SAP specialist about your specific challenges.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-3.5 bg-white text-[#007A7A] font-bold rounded-lg hover:bg-gray-50 transition-colors flex-shrink-0 text-lg"
            >
              Talk to a Specialist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00B8B8] flex items-center justify-center">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <span className="text-white font-bold text-2xl">
                nosh<span className="text-[#00B8B8]">tek</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Boutique SAP consulting firm specializing in AI-driven financial transformation
              for Utilities, Telecom, and Insurance enterprises globally.
            </p>
            {/* SAP Partner badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00B8B8]/30 rounded-lg bg-[#00B8B8]/5">
              <div className="w-2 h-2 rounded-full bg-[#00B8B8]" />
              <span className="text-[#00B8B8] text-xs font-semibold tracking-wide uppercase">
                SAP Gold Partner
              </span>
            </div>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@noshtek.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#00B8B8] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@noshtek.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                New York · Toronto · Singapore · Taipei · Bangalore
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00B8B8]/20 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#00B8B8]/20 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Noshtek LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

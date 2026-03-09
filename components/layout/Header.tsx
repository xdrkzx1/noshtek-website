"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0A1929]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-[#00B8B8] flex items-center justify-center">
                  <span className="text-white font-black text-lg leading-none">N</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  nosh<span className="text-[#00B8B8]">tek</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.mega ? handleMouseEnter(item.label) : undefined}
                  onMouseLeave={item.mega ? handleMouseLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      "text-gray-300 hover:text-white hover:bg-white/8",
                      activeMenu === item.label && "text-white bg-white/8"
                    )}
                  >
                    {item.label}
                    {item.mega && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega menu dropdown */}
                  {item.mega && item.items && activeMenu === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 mega-menu-enter"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-[#0D1E3F] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-4 min-w-[320px]">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/6 transition-all duration-200 group"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="text-2xl mt-0.5 flex-shrink-0">{subItem.icon}</span>
                            <div>
                              <div className="text-white font-semibold text-sm group-hover:text-[#00B8B8] transition-colors duration-200">
                                {subItem.label}
                              </div>
                              <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/6">
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 px-3 py-2 text-[#00B8B8] text-xs font-semibold hover:gap-3 transition-all duration-200"
                            onClick={() => setActiveMenu(null)}
                          >
                            View all {item.label}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#00B8B8] text-white text-sm font-semibold rounded-lg hover:bg-[#009999] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,184,184,0.3)]"
              >
                <Phone className="w-3.5 h-3.5" />
                Talk to a Specialist
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A1929] overflow-y-auto">
          <div className="px-4 pt-24 pb-8">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.mega ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-white font-semibold text-lg rounded-xl hover:bg-white/6 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            mobileExpanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileExpanded === item.label && item.items && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/6 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span>{subItem.icon}</span>
                              <span className="font-medium">{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white font-semibold text-lg rounded-xl hover:bg-white/6 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="btn-primary-lg w-full justify-center text-center"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

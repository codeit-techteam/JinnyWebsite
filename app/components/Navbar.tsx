"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position (only on home page)
  React.useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["services", "how-it-works", "safety", "partner", "about"];
    const handleScroll = () => {
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const navLinks = [
    { label: "Services", href: "/#services", id: "services" },
    { label: "How it works", href: "/#how-it-works", id: "how-it-works" },
    { label: "Safety", href: "/#safety", id: "safety" },
    { label: "Become a partner", href: "/partner-app", id: "partner" },
    { label: "About", href: "/about", id: "about" },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: isScrolled ? 'rgba(11, 1, 32, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(108,43,217,0.1)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: isScrolled ? '12px 0' : '24px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl animate-float-mini">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight text-white">Jinny</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-white ${
                  (isHome && activeSection === link.id) || (!isHome && pathname === link.href)
                    ? "text-[#6c2bd9]" 
                    : "text-white/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/waitlist"
              className="hidden sm:flex px-8 py-3.5 bg-[#6c2bd9] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#7c3aed] hover:scale-105 transition-all active:scale-95 shadow-[0_10px_20px_-10px_rgba(108,43,217,0.4)]"
            >
              Join Waitlist
            </Link>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[10000] lg:hidden transition-all duration-500 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0b0120]/95 backdrop-blur-2xl" 
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute inset-y-0 right-0 w-full max-w-sm bg-[#0b0120] border-l border-white/10 p-12 transition-transform duration-500 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🪔</span>
              <span className="text-2xl font-serif font-bold italic tracking-tight text-white">Jinny</span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-2xl font-bold hover:text-[#6c2bd9] transition-colors"
              >
                <div className="flex items-center justify-between group">
                  <span>{link.label}</span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6c2bd9]" />
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-12 left-12 right-12">
            <Link
              href="/#waitlist"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-6 bg-[#6c2bd9] text-white rounded-[2rem] font-bold text-lg hover:bg-[#7c3aed] transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;



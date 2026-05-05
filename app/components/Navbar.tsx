"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const goToWaitlist = React.useCallback(() => {
    if (isHome) {
      const waitlistSection = document.getElementById("waitlist");
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#waitlist");
        return;
      }
    }

    router.push("/#waitlist");
  }, [isHome, router]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
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
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.08)',
          boxShadow: '0 10px 32px rgba(35, 16, 74, 0.08)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: isScrolled ? '2px 0' : '14px 0',
          height: isScrolled ? '54px' : '76px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full transition-all duration-500">
          <Link href="/" className="flex items-center gap-2 group">
            <span className={`text-3xl transition-transform duration-500 ${isScrolled ? 'scale-75 translate-y-0.5' : 'scale-100'} group-hover:rotate-12`}></span>
            <span className={`font-serif font-bold italic tracking-tight text-[#140a24] transition-all duration-500 origin-left ${isScrolled ? 'text-lg' : 'text-2xl'}`}>Jinny</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative font-bold uppercase tracking-[0.2em] transition-all duration-500 py-2 group ${
                  isScrolled ? 'text-[9px]' : 'text-[11px]'
                } ${
                  (isHome && activeSection === link.id) || (!isHome && pathname === link.href)
                    ? "text-[#6c2bd9]" 
                    : "text-[#140a24]/55 hover:text-[#140a24]"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#6c2bd9] transition-all duration-300 group-hover:w-full ${
                  (isHome && activeSection === link.id) || (!isHome && pathname === link.href) ? "w-full" : ""
                }`} />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#6c2bd9] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px]" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={goToWaitlist}
              className={`hidden sm:flex items-center justify-center rounded-full border border-[#6c2bd9]/12 bg-[#f6f0ff] text-[#6c2bd9] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#efe7ff] hover:border-[#6c2bd9]/18 ${
                isScrolled ? "px-6 py-2.5 text-[9px]" : "px-8 py-3.5 text-[10px]"
              }`}
            >
              Launching Soon
            </button>
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-white border border-[#6c2bd9]/12 rounded-2xl text-[#140a24] hover:bg-[#f6f0ff] transition-colors"
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
          className="absolute inset-0 bg-[#faf7ff]/90 backdrop-blur-2xl" 
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute inset-y-0 right-0 w-full max-w-sm bg-[#fcfaff] border-l border-[#6c2bd9]/10 p-12 transition-transform duration-500 ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl"></span>
              <span className="text-2xl font-serif font-bold italic tracking-tight text-[#140a24]">Jinny</span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="w-12 h-12 flex items-center justify-center bg-white border border-[#6c2bd9]/12 rounded-2xl text-[#140a24] hover:bg-[#f6f0ff] transition-colors"
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
                className="block text-2xl font-bold text-[#140a24] hover:text-[#6c2bd9] transition-colors"
              >
                <div className="flex items-center justify-between group">
                  <span>{link.label}</span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6c2bd9]" />
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-12 left-12 right-12">
            <button
              type="button"
              onClick={() => {
                setIsMobileOpen(false);
                goToWaitlist();
              }}
              className="flex items-center justify-center w-full rounded-[2rem] border border-[#6c2bd9]/12 bg-[#f6f0ff] px-6 py-5 text-center text-sm font-semibold text-[#6c2bd9] transition-all hover:bg-[#efe7ff]"
            >
              Launching Soon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;



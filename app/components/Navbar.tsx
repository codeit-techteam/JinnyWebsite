"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft } from "lucide-react";

/* ─── Routes where the navbar uses a light (white) glass theme ─── */
const LIGHT_THEME_ROUTES = [
  "/bathroom-cleaning",
  "/car-cleaning",
  "/full-home-cleaning",
  "/kitchen-cleaning",
  "/laundry-ironing",
  "/occasion-bookings",
  "/service-bundles",
];

/* ─── Home-page section links (only shown on /) ─── */
const HOME_NAV_LINKS = [
  { label: "Services", href: "#services", id: "services" },
  { label: "How it works", href: "#how-it-works", id: "how-it-works" },
  { label: "Safety", href: "#safety", id: "safety" },
  { label: "Become a partner", href: "#partner", id: "partner" },
  { label: "About", href: "#about", id: "about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightTheme = LIGHT_THEME_ROUTES.includes(pathname);

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  /* ── Scroll shadow detection ── */
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Scroll to top + reset state on route change ── */
  React.useEffect(() => {
    // Use instant scroll — smooth scroll causes timing issues with navbar bg
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsMobileOpen(false);
    setActiveSection("");
    // Re-check actual scroll position after the instant scroll
    // Don't blindly set isScrolled to false — let the real position decide
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
    });
  }, [pathname]);

  /* ── Home-page section tracking ── */
  React.useEffect(() => {
    if (!isHome) return;
    const sectionIds = HOME_NAV_LINKS.map((l) => l.id);
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

  /* ── Lock body scroll when mobile drawer is open ── */
  React.useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  /* ── Theme-aware colours ── */
  const bgBase = isLightTheme
    ? "#ffffff"
    : "linear-gradient(135deg, #110225 0%, #1a0640 100%)";
  const borderColor = isLightTheme
    ? "rgba(0,0,0,0.08)"
    : "rgba(255,255,255,0.06)";
  const textColor = isLightTheme ? "#0b0120" : "#ffffff";
  const mutedText = isLightTheme ? "rgba(11,1,32,0.5)" : "rgba(255,255,255,0.6)";
  const backArrowMuted = isLightTheme
    ? "text-[#0b0120]/40 group-hover:text-[#0b0120]"
    : "text-white/40 group-hover:text-white";

  /* ── Solid background — always opaque, always matching ── */
  const navBackground = bgBase;

  const navBorder = `1px solid ${borderColor}`;

  const navShadow = isScrolled
    ? "0 8px 24px rgba(0,0,0,0.35)"
    : "0 2px 12px rgba(0,0,0,0.15)";

  return (
    <>
      <nav
        id="global-navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          background: navBackground,
          borderBottom: navBorder,
          boxShadow: navShadow,
          transition: "box-shadow 0.3s ease, padding 0.3s ease",
          padding: "12px 0",
          /* GPU layer promotion — prevents visibility bug on route change */
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* ── Left: Logo / Back ── */}
          {isHome ? (
            <div className="flex items-center gap-2 logo">
              <span className="text-3xl">🪔</span>
              <span
                className="text-2xl font-serif font-bold italic tracking-tight"
                style={{ color: textColor }}
              >
                Jinny
              </span>
            </div>
          ) : (
            <Link href="/" className="flex items-center gap-2 group logo">
              <ArrowLeft
                className={`w-4 h-4 group-hover:-translate-x-1 transition-all ${backArrowMuted}`}
              />
              <span className="text-3xl">🪔</span>
              <span
                className="text-2xl font-serif font-bold italic tracking-tight"
                style={{ color: textColor }}
              >
                Jinny
              </span>
            </Link>
          )}

          {/* ── Centre: Nav links (home only, desktop) ── */}
          {isHome && (
            <div className="hidden lg:flex items-center gap-10">
              {HOME_NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`navbar-link text-sm font-bold ${
                    activeSection === link.id
                      ? isScrolled
                        ? "text-[#c4b5fd] navbar-link-active-scrolled"
                        : "text-white navbar-link-active"
                      : ""
                  }`}
                  style={{
                    color:
                      activeSection === link.id
                        ? undefined
                        : mutedText,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* ── Right: CTA + burger ── */}
          <div className="flex items-center gap-4">
            {isHome ? (
              <button className="navbar-cta-btn px-7 py-3 bg-[#6c2bd9] text-white text-sm font-bold rounded-full active:scale-95 shadow-lg shadow-purple-950/20">
                Join waitlist
              </button>
            ) : (
              <Link
                href="/"
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  isLightTheme
                    ? "bg-[#6c2bd9] text-white shadow-lg shadow-purple-900/20"
                    : "bg-white/5 border border-white/10 hover:bg-white hover:text-[#0b0120]"
                }`}
              >
                Join Waitlist
              </Link>
            )}

            {/* Burger — only on homepage mobile */}
            {isHome && (
              <button
                className="lg:hidden p-2"
                style={{ color: textColor }}
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {isHome && (
        <>
          <div
            className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
              isMobileOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm transition-transform duration-400 ease-out lg:hidden ${
              isMobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              background:
                "linear-gradient(180deg, #150835 0%, #0b0120 100%)",
            }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2 logo">
                <span className="text-2xl">🪔</span>
                <span className="text-xl font-serif font-bold italic tracking-tight text-white">
                  Jinny
                </span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6 space-y-2">
              {HOME_NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileOpen(false);
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block px-4 py-4 rounded-2xl text-base font-bold transition-all duration-250 ${
                    activeSection === link.id
                      ? "text-white bg-[#6c2bd9]/20 border border-[#6c2bd9]/30"
                      : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="navbar-cta-btn w-full px-7 py-4 bg-[#6c2bd9] text-white text-sm font-bold rounded-full active:scale-95 shadow-lg shadow-purple-950/20"
              >
                Join waitlist
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

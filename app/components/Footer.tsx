"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  const services = [
    { name: "Bathroom cleaning", href: "/bathroom-cleaning" },
    { name: "Kitchen cleaning", href: "/kitchen-cleaning" },
    { name: "Full home cleaning", href: "/full-home-cleaning" },
    { name: "Laundry & ironing", href: "/laundry-ironing" },
    { name: "Car cleaning", href: "/car-cleaning" },
    { name: "Service bundles", href: "/service-bundles" },
    { name: "Occasion bookings", href: "/occasion-bookings" }
  ];

  const company = [
    { name: "About Jinny", href: "/about" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Safety & trust", href: "/#safety" },
    { name: "Jinny Score", href: "/jinny-score" },
    { name: "Loyalty programme", href: "/loyalty-programme" },
    { name: "Jinny for Business", href: "/business" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Press", href: "/press" }
  ];

  const partners = [
    { name: "Become a partner", href: "/#become-partner" },
    { name: "Partner app", href: "/partner-app" },
    { name: "Jinny Suraksha safety", href: "/#partner" },
    { name: "Certifications", href: "/certifications" },
    { name: "Early salary", href: "/early-salary" },
    { name: "Partner benefits", href: "/partner-benefits" },
    { name: "Support centre", href: "/support" },
    { name: "Privacy policy", href: "/privacy" }
  ];

  return (
    <footer className="pt-32 pb-16 px-6 md:px-12 lg:px-24 text-white border-t border-white/5" style={{ background: 'linear-gradient(180deg, #0b0120 0%, #0a0118 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-3xl"></span>
              <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
            </Link>
            <div className="space-y-4">
              <p className="text-white/40 leading-relaxed text-sm max-w-xs">
                Your home&apos;s personal Genie. AI-powered on-demand home services in Delhi NCR. <br />
                Operated by MTB ALPHA Private Limited.
              </p>
              <p className="text-[11px] text-white/20 font-medium">
                Launching in Delhi NCR · India · jinny.in
              </p>
            </div>
            {/* Social Icons only - no text links */}
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/jinny" },
                { Icon: FaXTwitter, label: "Twitter", href: "https://twitter.com/jinny" },
                { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/company/jinny" },
                { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/jinny" }
              ].map(({ Icon, label, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#6c2bd9] hover:text-white hover:border-[#6c2bd9] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">SERVICES</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {services.map((s, i) => (
                <li key={i}><Link href={s.href} className="hover:text-[#6c2bd9] transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">COMPANY</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {company.map((s, i) => (
                <li key={i}><Link href={s.href} className="hover:text-[#6c2bd9] transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">PARTNERS</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {partners.map((s, i) => (
                <li key={i}><Link href={s.href} className="hover:text-[#6c2bd9] transition-colors">{s.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-medium text-white/20 text-center lg:text-left">
            © 2026 MTB ALPHA Private Limited. All rights reserved. Jinny™ is a trademark of MTB ALPHA Private Limited.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/partner-terms" className="hover:text-white transition-colors">Partner Terms</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



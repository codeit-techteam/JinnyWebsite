"use client";

import React from "react";
import {
  Sparkles, ArrowRight, Star, Clock, CheckCircle2,
  MessageCircle, Wand2, PartyPopper, Home as HomeIcon, Plus,
  Mic, Heart, Lightbulb, Activity,
  ShieldCheck, ShieldAlert, Fingerprint, Lock, Trophy, AlertCircle, Navigation,
  Eye, MapPin, Send,
} from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaFacebookF, FaApple, FaGooglePlay } from "react-icons/fa6";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

// ... (previous components: Navbar, HeroSection, HighlightsBar, HowItWorks, ServicesGrid, SpecialPacks, FAQ)

import CustomSelect from "@/app/components/CustomSelect";

const Waitlist = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden relative" style={{ background: 'radial-gradient(ellipse at 50% 30%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#6c2bd9]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-xs"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">EARLY ACCESS</span>
          </div>
          <h2 className="heading-lg">
            Be first. <br />
            <span className="text-[#6c2bd9]">Get early access.</span>
          </h2>
          <p className="body-text-dark max-w-2xl mx-auto">
            Jinny is coming to Delhi NCR soon. Join our waitlist and be the first to know when we launch in your neighbourhood - plus get an exclusive early-access offer.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-[3rem] space-y-4 max-w-2xl mx-auto backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
            <input type="text" placeholder="Mobile number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelect
              placeholder="Select your city"
              className="waitlist-select"
              options={[
                { value: 'gurugram', label: 'Gurugram' },
                { value: 'south-delhi', label: 'South Delhi' },
                { value: 'noida', label: 'Noida' },
                { value: 'dwarka', label: 'Dwarka' },
                { value: 'east-delhi', label: 'East Delhi' },
                { value: 'west-delhi', label: 'West Delhi' },
                { value: 'north-delhi', label: 'North Delhi' },
                { value: 'faridabad', label: 'Faridabad' },
                { value: 'ghaziabad', label: 'Ghaziabad' },
                { value: 'other', label: 'Other' },
              ]}
            />
            <CustomSelect
              placeholder="I am joining as"
              className="waitlist-select"
              options={[
                { value: 'customer', label: 'Customer - I need home help' },
                { value: 'partner', label: 'Partner - I want to earn with Jinny' },
                { value: 'business', label: 'Business - I need regular services' },
              ]}
            />
          </div>
          <input type="text" placeholder="Email address (optional - for launch updates)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#6c2bd9] text-sm" />

          <button className="cta-gold-btn w-full py-6 font-bold rounded-[2rem] active:scale-95 text-lg flex items-center justify-center gap-2" style={{ background: '#f5b21c', color: 'black', fontWeight: 600 }}>
            <span></span>
            Join the waitlist - get early access
          </button>

          <p className="text-[10px] text-white/20 font-medium">No spam. No calls. Just a message when Jinny is ready for you.</p>
        </div>

        <div className="flex justify-center gap-12 md:gap-24 pt-8">
          <div className="space-y-1">
            <div className="heading-md text-[#f5b21c]">500+</div>
            <div className="section-label text-white/40">Already on waitlist</div>
          </div>
          <div className="space-y-1">
            <div className="heading-md text-[#f5b21c]">4</div>
            <div className="section-label text-white/40">Launch zones - NCR</div>
          </div>
          <div className="space-y-1">
            <div className="heading-md text-[#f5b21c]">Soon</div>
            <div className="section-label text-white/40">Going live</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 px-6 text-white text-center relative overflow-hidden border-t border-white/5" style={{ background: 'radial-gradient(ellipse at 50% 50%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-6xl md:text-8xl animate-float"></div>

        <div className="space-y-6">
          <h2 className="heading-xl">
            Your home&apos;s genie <br />
            <span className="text-[#6c2bd9]">is almost here</span>
          </h2>
          <p className="body-text-dark max-w-2xl mx-auto">
            Download the Jinny app when we launch and get an exclusive early-access offer. The magic is coming.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-72 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center px-8 gap-4 hover:bg-[#FAF9F6] hover:text-[#0b0120] transition-all group shadow-2xl">
            <FaGooglePlay className="w-8 h-8 text-[#6c2bd9] group-hover:text-[#0b0120]" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-white/40 group-hover:text-[#0b0120]/40">Coming to</p>
              <p className="text-xl font-bold">Google Play</p>
            </div>
          </button>
          <button className="w-72 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center px-8 gap-4 hover:bg-[#FAF9F6] hover:text-[#0b0120] transition-all group shadow-2xl">
            <FaApple className="w-10 h-10 text-[#6c2bd9] group-hover:text-[#0b0120]" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-white/40 group-hover:text-[#0b0120]/40">Coming to the</p>
              <p className="text-xl font-bold">App Store</p>
            </div>
          </button>
        </div>

        <p className="text-xs text-white/20 pt-8">
          Exclusive early-access offer · No subscription required · Cancel anytime
        </p>
      </div>
    </section>
  );
};




const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden" style={{ background: 'radial-gradient(ellipse at 30% 20%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative z-10">

        {/* Left Column: Text & CTA */}
        <div className="flex-1 space-y-10">
          <Link href="/waitlist" className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-gold hover:bg-white/10 transition-colors">
            <span className="section-label">🧞 COMING SOON TO DELHI NCR - JOIN THE WAITLIST</span>
          </Link>

          <h1 className="heading-xl text-white max-w-2xl" style={{ fontSize: 'clamp(48px, 6.5vw, 82px)', lineHeight: 1.05 }}>
            Your home&apos;s <br />
            <span className="hero-highlight-wrapper whitespace-nowrap" data-text="personal Genie.">
              <span className="hero-highlight">personal Genie.</span>
            </span> <br />
            In 15 minutes.
          </h1>

          <p className="hero-subtext max-w-lg">
            Tell Jinny what you need - in Hindi or English - and a trained, verified home professional arrives at your door. 
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="/waitlist" className="w-full sm:w-auto rounded-full shadow-2xl shadow-yellow-500/20 transition-all active:scale-95 flex items-center justify-center gap-3" style={{ background: '#f5b21c', color: '#000000', borderRadius: '999px', padding: '14px 24px', fontWeight: 600, fontSize: '16px' }}>
              🧞 Join the waitlist
            </Link>
            <Link href="/#how-it-works" className="w-full sm:w-auto rounded-full hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', background: 'transparent', borderRadius: '999px', padding: '14px 24px', fontWeight: 600, fontSize: '16px' }}>
              ✨ See how it works
            </Link>
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="pt-16 grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="hero-stat-value">15 min</p>
              <p className="section-label text-white/40">Average arrival time</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-7 h-7 text-[#FFB800]" />
              </div>
              <p className="section-label text-white/40 mt-1">Magical prices await</p>
            </div>
            <div className="space-y-2">
              <p className="hero-stat-value flex items-center gap-1">4.9 <Star className="w-6 h-6 fill-[#FFB800]" style={{ WebkitTextFillColor: 'initial' }} /></p>
              <p className="section-label text-white/40">Average partner rating</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual UI Cards */}
        <div className="flex-1 w-full max-w-xl">
          <div className="space-y-4">
            {/* Chat Assistant Card */}
            <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }} className="p-6 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#6c2bd9] rounded-full flex items-center justify-center text-[10px] font-bold text-white">AI</div>
                <div>
                  <h4 className="card-title !text-white text-sm">Jinny AI assistant</h4>
                  <p className="label-text text-white/60 text-[11px]">What do you need today?</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-[#2D2A5A] rounded-2xl rounded-tr-none text-[13px] text-white/90 border border-white/5 max-w-[85%] ml-auto italic">
                  &quot;bathroom aur kitchen dono saaf karna hai aaj 🪄&quot;
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3">
                  <div className="space-y-0.5">
                    <p className="text-[13px] text-white/90">That&apos;s a <span className="text-brand-gold font-bold">Weekend Deep Clean</span></p>
                    <p className="text-xl font-serif text-brand-gold">₹ XXX</p>
                  </div>
                  <Link href="/booking" className="px-5 py-1.5 bg-brand-gold text-brand-dark text-[10px] font-bold rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    Confirm booking ✓
                  </Link>
                </div>
              </div>
            </div>

            {/* Partner Info Card - Rebuilt with Layered Structure */}
            <div style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(16px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }} className="p-4 shadow-2xl flex items-center gap-4 group hover:bg-white/5 transition-all duration-500">
              {/* Inner Icon Box with Animation */}
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-inner relative animate-float-subtle shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6c2bd9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rekha" alt="Partner" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="card-title !text-white text-[13px] font-bold truncate">Rekha S. • <span className="text-brand-gold">8 min away</span></h4>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded-md border border-white/10 shrink-0">
                    <Star className="w-2.5 h-2.5 fill-brand-gold text-brand-gold" />
                    <span className="text-[9px] font-bold text-white/90">4.9</span>
                  </div>
                </div>
                <p className="label-text text-white/60 text-[11px] mt-0.5 truncate">Jinny Score: 91 • Advanced Cleaner Certified</p>
              </div>
            </div>

            {/* Home Health Score Card */}
            <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }} className="p-4 shadow-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-brand-gold">72</span>
              </div>
              <div>
                <p className="section-label text-white/60 text-[9px]">Your Home Health Score</p>
                <h4 className="card-title !text-white text-sm">Kitchen needs attention</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HighlightsBar = () => {
  const highlights = [
    { title: "Hindi, English, Hinglish", icon: <Sparkles className="w-4 h-4" /> },
    { title: "Certified & Trained", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "15 Min Fast Arrival", icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <div className="py-4 px-6 border-y border-white/5" style={{ background: 'linear-gradient(90deg, #150835, #1a0645, #150835)' }}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 text-white">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-white/60">
            <div className="text-brand-purple">{item.icon}</div>
            <span className="section-label">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Make your wish",
      desc: "Open Jinny and say what you need - type or speak in Hindi or English. 'Bathroom clean karna hai' is all it takes. Jinny AI understands everything.",
      badge: "Takes 30 seconds",
      icon: "🗣️",
    },
    {
      title: "Jinny appears",
      desc: "A trained, background-verified Jinny partner is matched to you instantly. Track them live on the map. You get an OTP to start the session safely.",
      badge: "Partner arrives in ~15 min",
      icon: "",
    },
    {
      title: "The reveal",
      desc: "Your home is transformed. View before-and-after photos. Rate your Jinny. Earn points toward free sessions. Your Home Health Score updates automatically.",
      badge: "Done. Like magic.",
      icon: "✨",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#6c2bd9]">
            <Sparkles className="w-3 h-3" />
            <span className="section-label">THE MAGIC</span>
          </div>
          <h2 className="heading-lg">
            Three steps to a <span className="text-[#6c2bd9]">spotless home</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            No forms. No waiting. Just tell Jinny what you wish for - in Hindi or English - and the magic begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-6">
              {/* Card Container */}
              <div className="hover-lift bg-[#F9F8FF] p-10 pt-16 rounded-[2.5rem] text-center space-y-6 h-full flex flex-col items-center shadow-sm border border-[#F3F0FF] hover:shadow-xl transition-all duration-500">
                {/* Number Bubble */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#6c2bd9] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-700/20">
                  {i + 1}
                </div>

                <div className="text-6xl pb-4 drop-shadow-md">
                  {step.icon}
                </div>

                <h3 className="heading-md text-[#0b0120]">{step.title}</h3>

                <p className="body-text flex-1">
                  {step.desc}
                </p>

                <div className="pt-4">
                  <div className="inline-block px-4 py-1.5 bg-[#FFFBEB] border border-[#FEF3C7] rounded-full text-[#D97706] section-label">
                    {step.badge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Bathroom cleaning",
      desc: "Deep scrub, sanitise, fixtures, tiles, mirrors - spotless every time.",
      price: "₹XXX",
      time: "30 min",
      icon: "🚿",
    },
    {
      title: "Kitchen cleaning",
      desc: "Slab, hob, chimney wipe, utensils - the heart of your home, immaculate.",
      price: "₹XXX",
      time: "45 min",
      icon: "🍳",
    },
    {
      title: "Full home cleaning",
      desc: "All rooms, mopping, dusting, fans, surfaces - a complete transformation.",
      price: "₹XXX",
      time: "90 min",
      icon: "🧹",
    },
    {
      title: "Laundry & ironing",
      desc: "Washing, ironing, folding, linen changes - always crisp and fresh.",
      price: "₹XXX",
      time: "60 min",
      icon: "👕",
    },
    {
      title: "Car cleaning",
      desc: "Exterior wash, interior vacuum and wipe - your car gleaming again.",
      price: "₹XXX",
      time: "45 min",
      icon: "🚗",
    },
    {
      title: "Window & glass",
      desc: "Streak-free windows inside and out - crystal clear every time.",
      price: "₹XXX",
      time: "45 min",
      icon: "🪟",
    },
    {
      title: "Kitchen help",
      desc: "Vegetable chopping, grocery unpacking, counter organisation.",
      price: "₹XXX",
      time: "30 min",
      icon: "🛒",
    },
    {
      title: "Balcony & outdoor",
      desc: "Balcony sweep, outdoor furniture wipe, garage floor clean.",
      price: "₹XXX",
      time: "30 min",
      icon: "🌿",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FAF9F6', paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full" style={{ backgroundColor: '#F0EBFF', border: '1px solid #DDD6FE' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#6c2bd9' }}>🏠 SERVICES</span>
          </div>
          <h2 className="heading-lg" style={{ color: '#0b0120' }}>
            Everything your home <span style={{ color: '#6c2bd9' }}>wishes for</span>
          </h2>
          <p className="body-text" style={{ maxWidth: '560px' }}>
            From a quick bathroom clean to a full pre-Diwali transformation - Jinny has it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="hover-card rounded-[16px]"
              style={{ padding: '24px' }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
                <div className="card-icon-circle w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#F3F0FF' }}>
                  {service.icon}
                </div>
                <span className="service-badge text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Save more ✨
                </span>
              </div>
              <h3 className="card-title" style={{ marginBottom: '8px' }}>{service.title}</h3>
              <p className="body-text" style={{ marginBottom: '12px' }}>
                {service.desc}
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: '#6c2bd9', fontWeight: 700, fontSize: '18px' }}>{service.price}</span>
                <span style={{ textDecoration: 'line-through', color: '#B0AFC0', fontSize: '14px' }}>₹XXX</span>
                <span style={{ color: '#999999', fontSize: '12px', fontWeight: 500 }}>• {service.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Service Packs */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '24px', marginTop: '40px' }}
        >
          {/* Weekend Deep Clean */}
          <div
            className="premium-pack-card"
            style={{
              background: 'linear-gradient(135deg, #1A0033 0%, #2D0B5C 100%)',
              borderRadius: '20px',
              padding: '28px',
              color: 'white',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,43,217,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="flex items-start justify-between" style={{ marginBottom: '14px' }}>
                <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2 }}>
                  ✨ Weekend Deep Clean
                </h3>
                <span style={{
                  background: 'rgba(245,177,0,0.15)',
                  color: '#F5B100',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Save more ✨
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>
                Bathroom + Kitchen + Full floor mopping. 2.5 hours.<br />
                Your weekend reset.
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: '#F5B100', fontWeight: 700, fontSize: '20px', fontFamily: 'var(--font-serif)' }}>₹ XXX</span>
                <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>₹ XXX</span>
              </div>
            </div>
          </div>

          {/* Pre-Party Pack */}
          <div
            className="premium-pack-card"
            style={{
              background: 'linear-gradient(135deg, #1A0033 0%, #2D0B5C 100%)',
              borderRadius: '20px',
              padding: '28px',
              color: 'white',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,43,217,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="flex items-start justify-between" style={{ marginBottom: '14px' }}>
                <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2 }}>
                  🎉 Pre-Party Pack
                </h3>
                <span style={{
                  background: 'rgba(245,177,0,0.15)',
                  color: '#F5B100',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Save more ✨
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>
                Living room + Kitchen + Bathroom. 2 hours. Guests arrive in 3 hours? Jinny&apos;s on it.
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: '#F5B100', fontWeight: 700, fontSize: '20px', fontFamily: 'var(--font-serif)' }}>₹ XXX</span>
                <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>₹ XXX</span>
              </div>
            </div>
          </div>

          {/* Full Home Clean */}
          <div
            className="premium-pack-card"
            style={{
              background: 'linear-gradient(135deg, #1A0033 0%, #2D0B5C 100%)',
              borderRadius: '20px',
              padding: '28px',
              color: 'white',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,43,217,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="flex items-start justify-between" style={{ marginBottom: '14px' }}>
                <h3 className="font-serif" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2 }}>
                  🏠 Full Home Clean
                </h3>
                <span style={{
                  background: 'rgba(245,177,0,0.15)',
                  color: '#F5B100',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Best value ✨
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>
                Every room + Kitchen + Bathroom + Laundry. 4 hours.<br />
                The complete reset.
              </p>
              <div className="flex items-center gap-3">
                <span style={{ color: '#F5B100', fontWeight: 700, fontSize: '20px', fontFamily: 'var(--font-serif)' }}>₹ XXX</span>
                <span style={{ textDecoration: 'line-through', color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>₹ XXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JinnyUnderstandsYou = () => {
  const features = [
    {
      title: "Hindi + English voice booking",
      desc: "Speak naturally. \"Bathroom aur kitchen dono chahiye aaj.\" Done.",
      icon: "🗣️"
    },
    {
      title: "Remembers your preferences",
      desc: "\"Same as last time?\" \"Shall I book Rekha again?\" Jinny learns you.",
      icon: "🧠"
    },
    {
      title: "Smart suggestions",
      desc: "Detects multiple tasks and suggests the right bundle to save you money.",
      icon: "💡"
    },
    {
      title: "Home Health Score",
      desc: "AI tracks every area of your home and tells you exactly what needs attention.",
      icon: "📈"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden" style={{ background: 'radial-gradient(ellipse at 20% 50%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left Column: Text & Features */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-600/10 border border-purple-700/20 rounded-full text-purple-300">
                <span className="text-[10px] font-bold uppercase tracking-widest">🤖 JINNY AI</span>
              </div>
              <h2 className="heading-lg">
                The only home <br />
                services app that <br />
                <span className="gradient-text-purple">understands you</span>
              </h2>
              <p className="body-text-dark max-w-lg">
                Just say what you need - in Hindi, English, or Hinglish. Jinny AI books it in under 60 seconds. No forms. No menus. No fuss.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="feature-list-item flex gap-6 border border-white/10 group"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '16px',
                    padding: '18px',
                  }}
                >
                  <div className="w-12 h-12 bg-purple-700/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-300 transition-colors">{f.title}</h4>
                    <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Chat UI Card */}
          <div className="flex-1 w-full max-w-2xl relative">
            <div
              className="chat-card shadow-2xl space-y-8"
              style={{
                background: 'linear-gradient(145deg, #1b0036, #2c0a5a)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Chat Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">🧞</div>
                <div>
                  <h4 className="font-bold text-white">Jinny AI</h4>
                  <p className="text-xs text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online - always ready
                  </p>
                </div>
              </div>

              {/* Chat History */}
              <div className="space-y-6">
                <div
                  className="p-5 rounded-2xl rounded-tl-none text-sm text-white/80 max-w-[85%] border border-white/5"
                  style={{ background: 'linear-gradient(90deg, #6c2bd9, #4c1d95)' }}
                >
                  Namaste Priya! 👋 Your home score is 68 today - kitchen needs attention. What can Jinny do for you?
                </div>

                <div
                  className="p-4 rounded-2xl rounded-tr-none text-sm text-white/90 max-w-[80%] ml-auto italic"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  bathroom aur kitchen dono saaf karna hai aaj
                </div>

                <div
                  className="p-6 rounded-2xl rounded-tl-none space-y-6 border border-white/5"
                  style={{ background: 'linear-gradient(90deg, #6c2bd9, #4c1d95)' }}
                >
                  <p className="text-sm text-white/90">That&apos;s our <span className="text-brand-gold font-bold">Weekend Deep Clean</span> - bathroom + kitchen + floor. 2.5 hours.</p>

                  {/* Booking Card */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                      <h5 className="font-bold text-brand-gold">Weekend Deep Clean</h5>
                    </div>
                    <p className="text-xs text-white/40">Today ~12 min away - Rekha S. available (★ 4.9)</p>
                    <Link
                      href="/booking"
                      className="cta-gold-btn w-full font-bold active:scale-95 flex items-center justify-center"
                      style={{
                        background: '#f5b21c',
                        color: 'black',
                        borderRadius: '999px',
                        padding: '12px 20px',
                        fontWeight: 600,
                      }}
                    >
                      Confirm booking - Save more ✓
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BuiltOnTrust = () => {
  return (
    <section id="safety" className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#6c2bd9]">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">TRUST & SAFETY</span>
          </div>
          <h2 className="heading-lg">
            Built on <span className="text-[#6c2bd9]">trust.</span> Powered by dignity.
          </h2>
          <p className="body-text max-w-3xl mx-auto">
            Jinny is India&apos;s first home services platform that protects both sides <br />
            of every booking - the customer and the partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Verified Partners */}
          <div className="p-10 rounded-[2.5rem] text-white space-y-8 flex flex-col h-full shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_-10px_rgba(108,43,217,0.3)] group" style={{ background: 'linear-gradient(135deg, #1a0033, #2d0b5f)' }}>
            <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="heading-md">Verified, trained partners</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Every Jinny partner goes through Aadhaar verification, PAN check, police clearance, and structured training before their first booking.
              </p>
              <ul className="space-y-3 pt-4">
                {["Government ID verified", "Police clearance check", "In-person training programme", "Background screening"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Jinny Score */}
          <div className="bg-[#FFFBEB] p-10 rounded-[2.5rem] text-[#0b0120] space-y-8 flex flex-col h-full border border-[#FEF3C7] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-brand-gold/30 group">
            <div className="w-12 h-12 flex items-center justify-center text-4xl">
              ⭐
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="heading-md">Jinny Score - quality you can see</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every partner has a public Jinny Score - a task-level quality rating for bathroom cleaning, kitchen work, laundry, and more. You always know who is coming to your home.
              </p>
              <ul className="space-y-3 pt-4">
                {["Per-task quality score", "Before & after photos", "AI quality verification", "Verified customer reviews"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Privacy */}
          <div className="bg-[#F0FDF4] p-10 rounded-[2.5rem] text-[#0b0120] space-y-8 flex flex-col h-full border border-[#DCFCE7] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-green-500/30 group">
            <div className="w-12 h-12 flex items-center justify-center text-4xl">
              🔐
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="heading-md">Your home, your privacy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                OTP session start. Masked calls and chat - your phone number is never shared. Real-time GPS tracking. Customer blocking. 24/7 safety monitoring.
              </p>
              <ul className="space-y-3 pt-4">
                {["OTP-verified session start", "Masked communication", "Block any partner anytime", "100% refund guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EveryBookingEarnsMagic = () => {
  const tiers = [
    {
      name: "Bronze",
      points: "0 – 499 points",
      perks: "Standard matching · Standard support",
      tag: "Free",
      color: "bg-[#A1824A]",
      icon: "🥉",
    },
    {
      name: "Silver",
      points: "500 – 1,999 points",
      perks: "Priority matching · 5% bonus points · 2x rescheduling",
      tag: "5% bonus",
      color: "bg-[#8E96A1]",
      icon: "🥈",
    },
    {
      name: "Gold",
      points: "2,000 – 4,999 points",
      perks: "Dedicated partner · Free 30-min extension · 10% bonus",
      tag: "Most popular",
      color: "bg-[#C5A028]",
      icon: "👑",
    },
    {
      name: "Platinum",
      points: "5,000+ points",
      perks: "10-min ETA · Free cancellation · Instant refunds · 15% bonus",
      tag: "Premium",
      color: "bg-[#5B31D0]",
      icon: "💎",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
      <div
        className="max-w-7xl mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 500px',
          alignItems: 'center',
          gap: '60px',
        }}
      >

        {/* Left Column: Loyalty Info */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#6c2bd9]">
              <span className="text-[10px] font-bold uppercase tracking-widest">👑 JINNY LOYALTY</span>
            </div>
            <h2 className="heading-lg">
              Every booking <br />
              <span className="text-[#6c2bd9]">earns magic</span>
            </h2>
            <p className="body-text max-w-lg">
              Earn Jinny Points on every booking. Unlock tiers. Get perks that make your home life even more effortless.
            </p>
          </div>

          <ul className="space-y-6">
            {[
              { bold: "1 Jinny Point", rest: "for every XXX spent. Points never expire." },
              { bold: "Book 4 weeks in a row", rest: "and earn a cashback reward automatically." },
              { bold: "Platinum members", rest: "get a dedicated partner and 10-minute ETA guarantee." },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-600">
                <div className="w-2 h-2 bg-[#6c2bd9] rounded-full flex-shrink-0" />
                <p>
                  <span className="font-bold text-[#0b0120]">{item.bold}</span> {item.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Tier Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: '500px', marginLeft: 'auto' }}>
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`${tier.color} text-white flex items-center justify-between group hover:scale-[1.02] transition-all duration-500`}
              style={{
                borderRadius: '18px',
                padding: '16px 20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
              }}
            >
              <div className="flex items-center gap-3" style={{ minWidth: 0, flex: 1 }}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {tier.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700 }}>{tier.name}</h4>
                  <p className="text-white/70 font-medium" style={{ fontSize: '12px' }}>{tier.points}</p>
                  <p className="text-white/50 mt-0.5" style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tier.perks}</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full flex-shrink-0" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {tier.tag}
              </div>
            </div>
          ))}

          {/* Booking Streaks Card */}
          <div
            className="text-white flex items-center justify-between group hover:scale-[1.02] transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, #1a0033, #2d0b5f)',
              borderRadius: '18px',
              padding: '16px 20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.18)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                🔥
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700 }}>Booking Streaks</h4>
                <p className="text-white/50" style={{ fontSize: '12px' }}>Book once a week for 4 weeks straight</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5 flex-shrink-0">
              <span className="text-xl">🎁</span>
              <span style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)' }}>reward unlocked</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile responsive handled via Tailwind */}
    </section>
  );
};

const JinnyProtectsThePeople = () => {
  const safetyFeatures = [
    {
      title: "Volume-button SOS",
      desc: "Triple-press the volume button - even on a locked phone - to instantly alert our ops team.",
      icon: "📱",
    },
    {
      title: "20-minute check-ins",
      desc: "Automatic safety check-ins every 20 minutes. No response triggers immediate escalation.",
      icon: "⏱️",
    },
    {
      title: "On-device AI safety",
      desc: "TensorFlow AI runs entirely on the partner's phone. No audio is ever recorded or sent to servers.",
      icon: "🤖",
    },
    {
      title: "5-minute response",
      desc: "Any SOS alert triggers field team dispatch within 5 minutes, anywhere in our service zones.",
      icon: "🚨",
    },
  ];

  return (
    <section id="partner" className="py-20 px-6 md:px-12 lg:px-24 text-white overflow-hidden" style={{ background: 'radial-gradient(ellipse at 70% 50%, #2a0a5e 0%, #150835 40%, #0b0120 100%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

        {/* Left Column: Grid */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">
              <ShieldAlert className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest">PARTNER SAFETY</span>
            </div>
            <h2 className="heading-lg">
              Jinny protects the <br />
              <span className="text-brand-gold italic">people who protect</span> <br />
              your home
            </h2>
            <p className="body-text-dark max-w-lg">
              Jinny is India&apos;s first home services platform with AI-powered proactive safety for every partner, every session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyFeatures.map((f, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-500 group hover:scale-[1.05] hover:shadow-[0_20px_40px_-15px_rgba(108,43,217,0.2)]">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="font-bold text-white mb-2">{f.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Suraksha Card */}
        <div className="flex-1 w-full max-w-xl relative">
          {/* Outer glow wrapper */}
          <div
            style={{
              padding: '1.5px',
              borderRadius: '28px',
              background: 'linear-gradient(135deg, rgba(255,80,80,0.5), rgba(255,120,80,0.2), transparent 60%)',
              boxShadow: '0 0 50px rgba(255,80,80,0.12), 0 0 100px rgba(255,120,80,0.06)',
            }}
          >
            {/* Inner card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1a0b2e 0%, #140826 100%)',
                borderRadius: '27px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Red radial glow overlay */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '-30%',
                  right: '-15%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255,90,90,0.16) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              {/* Purple subtle glow bottom-left */}
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: '-20%',
                  left: '-10%',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(108,43,217,0.1) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 text-center space-y-6">
                {/* Shield icon */}
                <div
                  className="mx-auto flex items-center justify-center"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.08), 0 10px 30px rgba(0,0,0,0.4)',
                    fontSize: '36px',
                  }}
                >
                  🛡️
                </div>

                <h3 className="heading-md" style={{ fontSize: '24px' }}>Jinny Suraksha</h3>
                <p className="text-sm text-white/40 max-w-xs mx-auto leading-relaxed">
                  Our AI-powered proactive safety system. Active on every session. Protecting every partner. Every time.
                </p>
              </div>

              {/* Bullet list */}
              <ul className="relative z-10 space-y-4 pt-8">
                {[
                  "Volume ×3 SOS on locked phone",
                  "Automated 20-min safety check-ins",
                  "On-device AI distress detection",
                  "Live GPS tracking during all sessions",
                  "5-minute field team response SLA",
                  "Partner can block any customer anytime",
                  "Health + accident insurance from Day 1",
                  "Safe exit - leave any session, no penalty",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 label-text font-medium text-white/80">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#ff7a3d', boxShadow: '0 0 6px rgba(255,122,61,0.4)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -z-10 -bottom-20 -right-20 w-[150%] h-[150%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

const WhereJinnyWorks = () => {
  const locations = [
    { name: "Gurugram", zones: "Sector 29, DLF, Sohna Road", icon: "🏙️" },
    { name: "South Delhi", zones: "GK, Hauz Khas, Saket", icon: "🏛️" },
    { name: "Noida", zones: "Sector 62, 137, 150", icon: "🏢" },
    { name: "Dwarka", zones: "Sector 10, 12, 21, 23", icon: "🌆" },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FAF9F6', paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full" style={{ backgroundColor: '#F0EBFF', border: '1px solid #DDD6FE' }}>
            <span className="section-label" style={{ color: '#6c2bd9' }}>📍 WHERE JINNY WORKS</span>
          </div>
          <h2 className="heading-lg" style={{ color: '#0b0120' }}>
            Launching in <span style={{ color: '#6c2bd9' }}>Delhi NCR</span>
          </h2>
          <p className="body-text mx-auto" style={{ maxWidth: '560px' }}>
            Be the first to experience the magic. Join our waitlist and get early access before we go live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
          {locations.map((loc, i) => (
            <div
              key={i}
              className="hover-card rounded-[16px] text-center"
              style={{ padding: '32px 24px' }}
            >
              <div className="card-icon-circle w-14 h-14 rounded-full flex items-center justify-center text-3xl mx-auto" style={{ backgroundColor: '#F3F0FF', marginBottom: '16px' }}>
                {loc.icon}
              </div>
              <h4 className="card-title" style={{ marginBottom: '6px', fontSize: '20px' }}>{loc.name}</h4>
              <p className="label-text" style={{ color: '#999999' }}>{loc.zones}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full label-text" style={{ backgroundColor: '#FFFBEB', border: '1px solid #FEF3C7', color: '#92400E' }}>
            <span>🧞</span>
            Delhi NCR launch coming soon - join the waitlist below
          </div>
        </div>
      </div>
    </section>
  );
};

const BecomePartner = () => {
  const stats = [
    { label: "Monthly earning potential", value: "₹45k+" },
    { label: "Early salary - anytime", value: "Free" },
    { label: "Health insurance from Day 1", value: "Free" },
    { label: "Tips go directly to you", value: "100%" },
  ];

  return (
    <section id="become-partner" className="py-12 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto rounded-[4rem] p-12 lg:p-24 text-white flex flex-col lg:flex-row gap-20 items-center overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #1a0033, #2d0b5f)' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-purple-600/5 blur-[120px] pointer-events-none" />

        <div className="hero-content">

          {/* Left Column */}
          <div className="hero-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>💼 WORK WITH JINNY</span>
            </div>

            <h2 className="partner-hero-title heading-lg">
              Become a <span>Jinny partner.</span> <br />
              Earn more. Work safely.
            </h2>

            <p className="body-text-dark max-w-lg">
              Join thousands of home service professionals earning a dignified, flexible income with Jinny&apos;s full welfare and safety system behind them.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-card space-y-1">
                  <div className="text-2xl font-serif font-bold text-[#facc15]">{s.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full relative z-10 lg:max-w-md">
            {/* External Yellow Glow */}
            <div className="absolute -inset-4 bg-[#f5b21c]/5 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="form-card relative z-10 border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6)]" style={{ background: '#251043', borderRadius: '32px' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl"></span>
                <h3 className="text-[20px] font-semibold text-white">Join as a Jinny partner</h3>
              </div>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full h-[60px] px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#6c2bd9] focus:bg-white/[0.06] transition-all"
                />
                <input
                  type="text"
                  placeholder="Mobile number"
                  className="w-full h-[60px] px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#6c2bd9] focus:bg-white/[0.06] transition-all"
                />

                <CustomSelect
                  placeholder="Select your city"
                  options={[
                    { value: 'gurugram', label: 'Gurugram' },
                    { value: 'south-delhi', label: 'South Delhi' },
                    { value: 'noida', label: 'Noida' },
                    { value: 'dwarka', label: 'Dwarka' },
                    { value: 'east-delhi', label: 'East Delhi' },
                    { value: 'west-delhi', label: 'West Delhi' },
                    { value: 'north-delhi', label: 'North Delhi' },
                    { value: 'faridabad', label: 'Faridabad' },
                    { value: 'ghaziabad', label: 'Ghaziabad' },
                    { value: 'other', label: 'Other' },
                  ]}
                />

                <CustomSelect
                  placeholder="Services you offer"
                  options={[
                    { value: 'cleaning', label: 'Home Cleaning' },
                    { value: 'deep-cleaning', label: 'Deep Cleaning' },
                    { value: 'kitchen', label: 'Kitchen & Bathroom' },
                    { value: 'pest', label: 'Pest Control' },
                    { value: 'sofa', label: 'Sofa & Carpet' },
                    { value: 'other', label: 'Other' },
                  ]}
                />

                <div className="pt-4">
                  <Link 
                    href="/waitlist" 
                    className="w-full h-[64px] flex items-center justify-center gap-2 bg-[#d1a242] text-black rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(209,162,66,0.3)]"
                  >
                    Apply now - it&apos;s free ✨
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Testimonials = () => {
  const reviews = [
    {
      text: "I said 'bathroom aur kitchen dono saaf karna hai' and it booked the whole thing in 30 seconds. Rekha arrived in 12 minutes. My home was spotless. Jinny ne kar diya!",
      user: "Priya Sharma",
      loc: "Gurugram, Sector 29",
      color: "bg-[#5B31D0]",
      initial: "P",
    },
    {
      text: "Jinny Score is brilliant. I can see Kiran's bathroom score is 94 and her kitchen score is 89 before I even book. I know exactly what I am getting. No other app does this.",
      user: "Rahul Gupta",
      loc: "South Delhi, GK-2",
      color: "bg-[#A1824A]",
      initial: "R",
    },
    {
      text: "The Home Health Score is addictive. My score went from 54 to 87 in three weeks. I open Jinny every morning just to check it. Guests are coming - time to book the Pre-Party Pack! 🪄",
      user: "Anjali Mehta",
      loc: "Noida, Sector 137",
      color: "bg-[#2D7A5F]",
      initial: "A",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FAF9F6] text-[#0b0120]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#6c2bd9]">
            <Sparkles className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">WHAT PEOPLE SAY</span>
          </div>
          <h2 className="heading-lg">
            Real homes. <span className="text-[#6c2bd9]">Real magic.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="body-text italic">
                  &quot;{r.text}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`${r.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`}>
                  {r.initial}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{r.user}</h4>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{r.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly does a Jinny partner arrive?",
      a: "Our average arrival time is 15 minutes in our active service zones. You can track your partner live on the map from the moment they are assigned. For scheduled bookings, your partner arrives within 5 minutes of your chosen time slot.",
    },
    {
      q: "How are Jinny partners verified and trained?",
      a: "Every Jinny partner undergoes Aadhaar OTP verification, PAN card check, police clearance certificate review, and a structured training programme covering our service standards, safety protocols, and code of conduct. Partners also go through regular quality assessments and can earn Jinny Certifications to unlock higher earnings.",
    },
    {
      q: "What is the Jinny Score?",
      a: "The Jinny Score is a task-level quality rating for every partner - broken down by bathroom cleaning, kitchen work, laundry, general cleaning, and punctuality. It is calculated from customer per-task feedback and AI photo quality verification after every session. You can see a partner's Jinny Score before booking them, so you always know who is coming to your home.",
    },
    {
      q: "What happens if I am not satisfied with the service?",
      a: "We offer a 100% satisfaction guarantee. If you are not happy with any aspect of the service, contact us within 24 hours and we will either send another Jinny partner to redo the work at no charge or issue a full refund to your Jinny Wallet. Our support team is available 24/7.",
    },
    {
      q: "Is the Jinny AI assistant available in Hindi?",
      a: "Yes - Jinny AI understands and responds in Hindi, English, and Hinglish naturally. You can type or speak (\"bathroom saaf karna hai\", \"kitchen clean karwa do\") and Jinny will understand exactly what you need, suggest the right service or bundle, and complete the booking in under 60 seconds without any form filling.",
    },
    {
      q: "How do Jinny Points and Loyalty Tiers work?",
      a: "You earn 1 Jinny Point for every ✕✕✕ spent on bookings. Points unlock tiers - Silver (500 pts), Gold (2,000 pts), and Platinum (5,000 pts) - each with better perks including priority matching, dedicated partners, free session extensions, and faster support. Book once a week for 4 consecutive weeks and earn a streak cashback reward automatically.",
    },
    {
      q: "How does Jinny protect partner safety?",
      a: "Jinny Suraksha is our AI-powered safety system active on every session. Features include: volume-button SOS (triple press even on a locked phone), automated 20-minute check-in prompts, on-device AI distress detection (audio never leaves the partner's phone), live GPS tracking, 5-minute field team response for any SOS, and the ability for partners to leave any session immediately with no penalty.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FAF9F6]">
      <div className="max-w-[900px] mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#6c2bd9]">
            <span className="text-[10px] font-bold uppercase tracking-widest">? QUESTIONS</span>
          </div>
          <h2 className="heading-lg" style={{ color: '#1a0b2e' }}>
            Everything you <span className="text-[#6c2bd9]">wish to know</span>
          </h2>
        </div>

        <div className="divide-y divide-black/[0.08] border-t border-black/[0.08]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group transition-all duration-300 hover:bg-black/[0.01]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-[22px] flex items-center justify-between text-left"
              >
                <h3 className={`text-[18px] font-semibold transition-colors duration-300 ${openIndex === i ? 'text-[#6c2bd9]' : 'text-[#1a0b2e]'}`}>
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i 
                    ? 'bg-[#6c2bd9] text-white rotate-45' 
                    : 'bg-[#7c3aed]/[0.08] text-[#7c3aed] group-hover:bg-[#7c3aed]/[0.15]'
                }`}>
                  <Plus className="w-4.5 h-4.5" />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="body-text max-w-3xl text-gray-500">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div className="border-b border-black/[0.08]" />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex-1">

      <HeroSection />
      <HowItWorks />
      <section id="services" style={{ backgroundColor: '#FAF9F6' }}>
        <ServicesGrid />
      </section>
      <JinnyUnderstandsYou />
      <BuiltOnTrust />
      <EveryBookingEarnsMagic />
      <JinnyProtectsThePeople />
      <WhereJinnyWorks />
      <BecomePartner />
      <Testimonials />
      <FAQ />
      <Waitlist />
      <FinalCTA />
      <Footer />

    </main>
  );
}




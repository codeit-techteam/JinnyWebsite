"use client";

import React from "react";
import { 
  Sparkles, Menu, ArrowRight, Star, Clock, CheckCircle2, 
  MessageCircle, Wand2, PartyPopper, Home as HomeIcon, Plus,
  Apple, PlayCircle, Globe, Mic, Heart, Lightbulb, Activity,
  ShieldCheck, ShieldAlert, Fingerprint, Lock, Trophy, AlertCircle, Navigation,
  Eye, MapPin, X, Camera, Send, Briefcase
} from "lucide-react";

// ... (previous components: Navbar, HeroSection, HighlightsBar, HowItWorks, ServicesGrid, SpecialPacks, FAQ)

const Waitlist = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0D0B21] text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7C3AED]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="text-xs">🪔</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FCD34D]">EARLY ACCESS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Be first. <br />
            <span className="text-[#7C3AED]">Get early access.</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Jinny is coming to Delhi NCR soon. Join our waitlist and be the first to know when we launch in your neighbourhood — plus get an exclusive early-access offer.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-4 md:p-8 rounded-[3rem] space-y-4 max-w-2xl mx-auto backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#7C3AED] text-sm" />
            <input type="text" placeholder="Mobile number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#7C3AED] text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#7C3AED] text-sm text-white/40 appearance-none">
              <option>Select your city</option>
            </select>
            <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#7C3AED] text-sm text-white/40 appearance-none">
              <option>I am joining as</option>
            </select>
          </div>
          <input type="text" placeholder="Email address (optional — for launch updates)" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#7C3AED] text-sm" />
          
          <button className="w-full py-6 bg-[#FCD34D] text-[#0D0B21] font-bold rounded-[2rem] shadow-[0_0_40px_rgba(252,211,77,0.2)] hover:scale-[1.02] transition-all active:scale-95 text-lg flex items-center justify-center gap-2">
            <span>🪔</span>
            Join the waitlist — get early access
          </button>
          
          <p className="text-[10px] text-white/20 font-medium">No spam. No calls. Just a message when Jinny is ready for you.</p>
        </div>

        <div className="flex justify-center gap-12 md:gap-24 pt-8">
          <div className="space-y-1">
            <div className="text-3xl font-serif font-bold text-[#FCD34D]">500+</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Already on waitlist</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-serif font-bold text-[#FCD34D]">4</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Launch zones — NCR</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-serif font-bold text-[#FCD34D]">Soon</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Going live</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-[#0D0B21] text-white text-center relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        <div className="text-6xl md:text-8xl animate-float">🪔</div>
        
        <div className="space-y-6">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">
            Your home&apos;s genie <br />
            <span className="text-[#7C3AED]">is almost here</span>
          </h2>
          <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
            Download the Jinny app when we launch and get an exclusive early-access offer. The magic is coming.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-72 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center px-8 gap-4 hover:bg-white hover:text-[#0D0B21] transition-all group shadow-2xl">
            <PlayCircle className="w-10 h-10" />
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-white/40 group-hover:text-[#0D0B21]/40">Coming to</p>
              <p className="text-xl font-bold">Google Play</p>
            </div>
          </button>
          <button className="w-72 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center px-8 gap-4 hover:bg-white hover:text-[#0D0B21] transition-all group shadow-2xl">
             <div className="w-10 h-10 flex items-center justify-center text-3xl">🍎</div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-white/40 group-hover:text-[#0D0B21]/40">Coming to the</p>
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

const Footer = () => {
  const services = [
    "Bathroom cleaning", "Kitchen cleaning", "Full home cleaning",
    "Laundry & ironing", "Car cleaning", "Service bundles", "Occasion bookings"
  ];
  
  const company = [
    "About Jinny", "How it works", "Safety & trust", "Jinny Score",
    "Loyalty programme", "Jinny for Business", "Careers", "Press"
  ];
  
  const partners = [
    "Become a partner", "Partner app", "Jinny Suraksha safety",
    "Certifications", "Early salary", "Partner benefits", "Support centre", "Privacy policy"
  ];

  return (
    <footer className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#0D0B21] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪔</span>
              <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
            </div>
            <div className="space-y-4">
              <p className="text-white/40 leading-relaxed text-sm max-w-xs">
                Your home&apos;s personal genie. AI-powered on-demand home services in Delhi NCR. <br />
                Operated by MTB ALPHA Private Limited.
              </p>
              <p className="text-[11px] text-white/20 font-medium">
                Launching in Delhi NCR · India · jinny.in
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Camera, label: "Instagram" },
                { Icon: Send, label: "Twitter" },
                { Icon: Briefcase, label: "LinkedIn" },
                { Icon: Globe, label: "Facebook" },
                { Icon: MessageCircle, label: "Support" }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] transition-all duration-300">
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
                <li key={i}><a href="#" className="hover:text-[#7C3AED] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">COMPANY</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {company.map((s, i) => (
                <li key={i}><a href="#" className="hover:text-[#7C3AED] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">PARTNERS</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {partners.map((s, i) => (
                <li key={i}><a href="#" className="hover:text-[#7C3AED] transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-medium text-white/20 text-center lg:text-left">
            © 2026 MTB ALPHA Private Limited. All rights reserved. Jinny™ is a trademark of MTB ALPHA Private Limited.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Partner Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🪔</span>
          <span className={`text-2xl font-serif font-bold italic tracking-tight ${isScrolled ? "text-[#0D0B21]" : "text-white"}`}>Jinny</span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#services" className={`text-sm font-bold transition-colors ${isScrolled ? "text-[#0D0B21]/60 hover:text-[#7C3AED]" : "text-white/60 hover:text-white"}`}>Services</a>
          <a href="#how-it-works" className={`text-sm font-bold transition-colors ${isScrolled ? "text-[#0D0B21]/60 hover:text-[#7C3AED]" : "text-white/60 hover:text-white"}`}>How it works</a>
          <a href="#safety" className={`text-sm font-bold transition-colors ${isScrolled ? "text-[#0D0B21]/60 hover:text-[#7C3AED]" : "text-white/60 hover:text-white"}`}>Safety</a>
          <a href="#partner" className={`text-sm font-bold transition-colors ${isScrolled ? "text-[#0D0B21]/60 hover:text-[#7C3AED]" : "text-white/60 hover:text-white"}`}>Become a partner</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-7 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-bold rounded-full transition-all active:scale-95 shadow-lg shadow-purple-900/20">
            Join waitlist
          </button>
          <button className={`lg:hidden p-2 ${isScrolled ? "text-[#0D0B21]" : "text-white"}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-44 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0D0B21]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-gold">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">🧞 COMING SOON TO DELHI NCR — JOIN THE WAITLIST</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-serif leading-[0.95] tracking-tight text-white max-w-2xl">
            Your home&apos;s <br />
            <span className="text-brand-gold">personal genie.</span> <br />
            In 15 minutes.
          </h1>
          
          <p className="text-lg text-white/60 max-w-lg leading-relaxed">
            Tell Jinny what you need — in Hindi or English — and a trained, verified home professional arrives at your door. As if by magic.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-gold text-brand-dark font-bold rounded-full shadow-2xl shadow-yellow-500/20 transition-all active:scale-95 flex items-center justify-center gap-3">
              🧞 Join the waitlist
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-3">
              ✨ See how it works
            </button>
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="pt-16 grid grid-cols-3 gap-8">
            <div className="space-y-1">
              <p className="text-3xl font-serif text-brand-gold">15 min</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Average arrival time</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mt-2">Magical prices await</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-serif text-brand-gold flex items-center gap-1">4.9 <Star className="w-5 h-5 fill-brand-gold" /></p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Average partner rating</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual UI Cards */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="space-y-6">
            {/* Chat Assistant Card */}
            <div className="bg-[#1A1835]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#7C3AED] rounded-full flex items-center justify-center text-xs font-bold text-white">AI</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Jinny AI assistant</h4>
                  <p className="text-xs text-white/40">What do you need today?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#2D2A5A] rounded-2xl rounded-tr-none text-sm text-white/90 border border-white/5 max-w-[90%] ml-auto italic">
                  &quot;bathroom aur kitchen dono saaf karna hai aaj 🪄&quot;
                </div>
                
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm text-white/90">That&apos;s a <span className="text-brand-gold font-bold">Weekend Deep Clean</span> — 2.5 hrs. Best value bundle.</p>
                    <p className="text-2xl font-serif text-brand-gold">₹ XXX</p>
                  </div>
                  <button className="px-6 py-2 bg-brand-gold text-brand-dark text-xs font-bold rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Confirm booking ✓
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Info Card */}
            <div className="bg-[#1A1835]/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden grayscale border border-white/10">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rekha" alt="Partner" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">Rekha S. • <span className="text-brand-gold">8 min away</span> • ★ 4.9</h4>
                  <div className="flex gap-1">
                    <div className="w-8 h-6 bg-blue-500/20 rounded flex items-center justify-center">🗺️</div>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-1">Jinny Score: 91 • Advanced Cleaner Certified</p>
              </div>
            </div>

            {/* Home Health Score Card */}
            <div className="bg-[#1A1835]/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] shadow-2xl flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border-2 border-brand-gold flex items-center justify-center">
                <span className="text-lg font-bold text-brand-gold">72</span>
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-widest">Your Home Health Score</p>
                <h4 className="text-lg font-bold text-white">Kitchen needs attention</h4>
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
    { title: "Hindi, English, Hinglish", icon: <MessageCircle className="w-4 h-4" /> },
    { title: "Certified & Trained", icon: <CheckCircle2 className="w-4 h-4" /> },
    { title: "15 Min Fast Arrival", icon: <Clock className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-[#1A1835] py-6 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 md:gap-4 text-white">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-white/60">
            <div className="text-brand-purple">{item.icon}</div>
            <span className="text-xs font-bold uppercase tracking-widest">{item.title}</span>
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
      desc: "Open Jinny and say what you need — type or speak in Hindi or English. 'Bathroom clean karna hai' is all it takes. Jinny AI understands everything.",
      badge: "Takes 30 seconds",
      icon: "🗣️",
    },
    {
      title: "Jinny appears",
      desc: "A trained, background-verified Jinny partner is matched to you instantly. Track them live on the map. You get an OTP to start the session safely.",
      badge: "Partner arrives in ~15 min",
      icon: "🪔",
    },
    {
      title: "The reveal",
      desc: "Your home is transformed. View before-and-after photos. Rate your Jinny. Earn points toward free sessions. Your Home Health Score updates automatically.",
      badge: "Done. Like magic.",
      icon: "✨",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 lg:px-24 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
            <Sparkles className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">THE MAGIC</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Three steps to a <span className="text-[#7C3AED]">spotless home</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            No forms. No waiting. Just tell Jinny what you wish for — in Hindi or English — and the magic begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-6">
              {/* Card Container */}
              <div className="bg-[#F9F8FF] p-10 pt-16 rounded-[2.5rem] text-center space-y-6 h-full flex flex-col items-center shadow-sm border border-[#F3F0FF] hover:shadow-xl transition-all duration-500">
                {/* Number Bubble */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                  {i + 1}
                </div>

                <div className="text-6xl pb-4 drop-shadow-md">
                  {step.icon}
                </div>

                <h3 className="text-3xl font-serif font-bold text-[#0D0B21]">{step.title}</h3>
                
                <p className="text-gray-500 leading-relaxed text-sm flex-1">
                  {step.desc}
                </p>

                <div className="pt-4">
                  <div className="inline-block px-4 py-1.5 bg-[#FFFBEB] border border-[#FEF3C7] rounded-full text-[#D97706] text-[10px] font-bold">
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
      desc: "Deep scrub, sanitise, fixtures, tiles, mirrors — spotless every time.",
      price: "₹XXX",
      time: "30 min",
      icon: "🚿",
    },
    {
      title: "Kitchen cleaning",
      desc: "Slab, hob, chimney wipe, utensils — the heart of your home, immaculate.",
      price: "₹XXX",
      time: "45 min",
      icon: "🍳",
    },
    {
      title: "Full home cleaning",
      desc: "All rooms, mopping, dusting, fans, surfaces — a complete transformation.",
      price: "₹XXX",
      time: "90 min",
      icon: "🧹",
    },
    {
      title: "Laundry & ironing",
      desc: "Washing, ironing, folding, linen changes — always crisp and fresh.",
      price: "₹XXX",
      time: "60 min",
      icon: "👕",
    },
    {
      title: "Car cleaning",
      desc: "Exterior wash, interior vacuum and wipe — your car gleaming again.",
      price: "₹XXX",
      time: "45 min",
      icon: "🚗",
    },
    {
      title: "Window & glass",
      desc: "Streak-free windows inside and out — crystal clear every time.",
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
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-[#FDFCFB] text-[#0D0B21]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
             <span className="text-[10px] font-bold uppercase tracking-widest">🏠 SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Everything your home <span className="text-[#7C3AED]">wishes for</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            From a quick bathroom clean to a full pre-Diwali transformation — <br />
            Jinny has it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-[#7C3AED]/10 hover:shadow-xl transition-all duration-500 space-y-4">
              <div className="text-4xl pb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0D0B21]">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-[#7C3AED] font-bold text-sm">Starting at {service.price}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400 text-xs">{service.time}</span>
              </div>
            </div>
          ))}
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
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0D0B21] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
                <span className="text-[10px] font-bold uppercase tracking-widest">🤖 JINNY AI</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                The only home <br />
                services app that <br />
                <span className="text-purple-400">understands you</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed max-w-lg">
                Just say what you need — in Hindi, English, or Hinglish. Jinny AI books it in under 60 seconds. No forms. No menus. No fuss.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">{f.title}</h4>
                    <p className="text-sm text-white/40 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Chat UI Card */}
          <div className="flex-1 w-full max-w-2xl relative">
            <div className="bg-[#1A1835]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-8">
              {/* Chat Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">🧞</div>
                <div>
                  <h4 className="font-bold text-white">Jinny AI</h4>
                  <p className="text-xs text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online — always ready
                  </p>
                </div>
              </div>

              {/* Chat History */}
              <div className="space-y-6">
                <div className="bg-[#2D2A5A] p-5 rounded-2xl rounded-tl-none text-sm text-white/80 max-w-[85%] border border-white/5">
                  Namaste Priya! 👋 Your home score is 68 today — kitchen needs attention. What can Jinny do for you?
                </div>
                
                <div className="bg-purple-600/20 p-4 rounded-2xl rounded-tr-none text-sm text-white/90 border border-purple-500/30 max-w-[80%] ml-auto italic">
                  bathroom aur kitchen dono saaf karna hai aaj
                </div>

                <div className="bg-[#2D2A5A] p-6 rounded-2xl rounded-tl-none space-y-6 border border-white/5">
                  <p className="text-sm text-white/80">That&apos;s our <span className="text-brand-gold font-bold">Weekend Deep Clean</span> — bathroom + kitchen + floor. 2.5 hours.</p>
                  
                  {/* Booking Card */}
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-brand-gold" />
                      <h5 className="font-bold text-brand-gold">Weekend Deep Clean</h5>
                    </div>
                    <p className="text-xs text-white/40">Today ~12 min away - Rekha S. available (★ 4.9)</p>
                    <button className="w-full py-3 bg-brand-gold text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity active:scale-95">
                      Confirm booking — Save more ✓
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BuiltOnTrust = () => {
  return (
    <section id="safety" className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0D0B21]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">TRUST & SAFETY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Built on <span className="text-[#7C3AED]">trust.</span> Powered by dignity.
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Jinny is India&apos;s first home services platform that protects both sides <br />
            of every booking — the customer and the partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Verified Partners */}
          <div className="bg-[#0D0B21] p-10 rounded-[2.5rem] text-white space-y-8 flex flex-col h-full shadow-2xl">
            <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400">
               <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-serif font-bold">Verified, trained partners</h3>
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
          <div className="bg-[#FFFBEB] p-10 rounded-[2.5rem] text-[#0D0B21] space-y-8 flex flex-col h-full border border-[#FEF3C7]">
            <div className="w-12 h-12 flex items-center justify-center text-4xl">
               ⭐
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-serif font-bold leading-tight">Jinny Score — quality you can see</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every partner has a public Jinny Score — a task-level quality rating for bathroom cleaning, kitchen work, laundry, and more. You always know who is coming to your home.
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
          <div className="bg-[#F0FDF4] p-10 rounded-[2.5rem] text-[#0D0B21] space-y-8 flex flex-col h-full border border-[#DCFCE7]">
            <div className="w-12 h-12 flex items-center justify-center text-4xl">
               🔐
            </div>
            <div className="space-y-4 flex-1">
              <h3 className="text-2xl font-serif font-bold">Your home, your privacy</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                OTP session start. Masked calls and chat — your phone number is never shared. Real-time GPS tracking. Customer blocking. 24/7 safety monitoring.
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
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FDFCFB] text-[#0D0B21]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left Column: Loyalty Info */}
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
              <span className="text-[10px] font-bold uppercase tracking-widest">👑 JINNY LOYALTY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Every booking <br />
              <span className="text-[#7C3AED]">earns magic</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
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
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full" />
                <p>
                  <span className="font-bold text-[#0D0B21]">{item.bold}</span> {item.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Tier Cards */}
        <div className="flex-1 w-full space-y-4">
          {tiers.map((tier, i) => (
            <div key={i} className={`${tier.color} p-8 rounded-[2.5rem] text-white flex items-center justify-between group hover:scale-[1.02] transition-all duration-500 shadow-xl`}>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  {tier.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{tier.name}</h4>
                  <p className="text-white/70 text-sm font-medium">{tier.points}</p>
                  <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wider">{tier.perks}</p>
                </div>
              </div>
              <div className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {tier.tag}
              </div>
            </div>
          ))}

          {/* Booking Streaks Card */}
          <div className="bg-[#0D0B21] p-8 rounded-[2.5rem] text-white flex items-center justify-between group hover:scale-[1.02] transition-all duration-500 shadow-xl border border-white/5">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center text-3xl">
                🔥
              </div>
              <div>
                <h4 className="text-2xl font-bold">Booking Streaks</h4>
                <p className="text-white/50 text-sm">Book once a week for 4 weeks straight</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-2xl">🎁</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">reward unlocked</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const JinnyProtectsThePeople = () => {
  const safetyFeatures = [
    {
      title: "Volume-button SOS",
      desc: "Triple-press the volume button — even on a locked phone — to instantly alert our ops team.",
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
    <section id="partner" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0D0B21] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        
        {/* Left Column: Grid */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400">
              <ShieldAlert className="w-3 h-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest">PARTNER SAFETY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Jinny protects the <br />
              <span className="text-brand-gold italic">people who protect</span> <br />
              your home
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-lg">
              Jinny is India&apos;s first home services platform with AI-powered proactive safety for every partner, every session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyFeatures.map((f, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="font-bold text-white mb-2">{f.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Suraksha Card */}
        <div className="flex-1 w-full max-w-xl relative">
          <div className="bg-gradient-to-br from-[#1A1835] to-[#0D0B21] p-12 rounded-[4rem] border border-white/10 shadow-2xl space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-purple-500/20 transition-colors" />
            
            <div className="text-center space-y-6 relative z-10">
              <div className="w-24 h-24 bg-blue-500/20 rounded-3xl mx-auto flex items-center justify-center text-5xl border border-blue-500/30">
                 🛡️
              </div>
              <h3 className="text-3xl font-serif font-bold tracking-tight">Jinny Suraksha</h3>
              <p className="text-sm text-white/40 max-w-xs mx-auto leading-relaxed">
                Our AI-powered proactive safety system. Active on every session. Protecting every partner. Every time.
              </p>
            </div>

            <ul className="space-y-4 relative z-10 pt-4">
              {[
                "Volume ×3 SOS on locked phone",
                "Automated 20-min safety check-ins",
                "On-device AI distress detection",
                "Live GPS tracking during all sessions",
                "5-minute field team response SLA",
                "Partner can block any customer anytime",
                "Health + accident insurance from Day 1",
                "Safe exit — leave any session, no penalty",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium text-white/80">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Background decoration */}
          <div className="absolute -z-10 -bottom-20 -right-20 w-[150%] h-[150%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
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
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0D0B21]">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
            <span className="text-[10px] font-bold uppercase tracking-widest">📍 WHERE JINNY WORKS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Launching in <span className="text-[#7C3AED]">Delhi NCR</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Be the first to experience the magic. Join our waitlist and get early <br />
            access before we go live.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, i) => (
            <div key={i} className="bg-[#F5F3FF]/50 p-10 rounded-[2.5rem] border border-[#DDD6FE]/30 hover:scale-105 transition-all duration-500 space-y-4">
              <div className="text-4xl pb-2">{loc.icon}</div>
              <h4 className="text-xl font-bold">{loc.name}</h4>
              <p className="text-xs text-gray-400 font-medium">{loc.zones}</p>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFFBEB] border border-[#FEF3C7] rounded-full text-[#92400E] text-sm font-medium">
             <span>🧞</span>
             Delhi NCR launch coming soon — join the waitlist below
          </div>
        </div>
      </div>
    </section>
  );
};

const BecomePartner = () => {
  const stats = [
    { label: "Monthly earning potential", value: "₹45k+" },
    { label: "Early salary — anytime", value: "Free" },
    { label: "Health insurance from Day 1", value: "Free" },
    { label: "Tips go directly to you", value: "100%" },
  ];

  return (
    <section id="become-partner" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-[1400px] mx-auto bg-[#0D0B21] rounded-[4rem] p-12 lg:p-24 text-white flex flex-col lg:flex-row gap-20 items-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 blur-[120px] pointer-events-none" />
        
        {/* Left Column */}
        <div className="flex-1 space-y-10 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">💼 WORK WITH JINNY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Become a <span className="text-purple-400">Jinny partner.</span> <br />
              Earn more. Work safely.
            </h2>
            <p className="text-lg text-white/40 leading-relaxed max-w-lg">
              Join thousands of home service professionals earning a dignified, flexible income with Jinny&apos;s full welfare and safety system behind them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-2xl font-serif font-bold text-brand-gold">{s.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 w-full max-w-xl relative z-10">
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧞</span>
              <h3 className="text-xl font-bold">Join as a Jinny partner</h3>
            </div>
            
            <div className="space-y-4">
              <input type="text" placeholder="Full name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 text-sm" />
              <input type="text" placeholder="Mobile number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 text-sm text-white/40 appearance-none">
                  <option>Select your city</option>
                </select>
                <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-400 text-sm text-white/40 appearance-none">
                  <option>Services you offer</option>
                </select>
              </div>
              <button className="w-full py-5 bg-brand-gold text-brand-dark font-bold rounded-[2rem] shadow-lg hover:opacity-90 transition-all active:scale-95 text-lg mt-4">
                Apply now — it&apos;s free ✨
              </button>
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
      text: "The Home Health Score is addictive. My score went from 54 to 87 in three weeks. I open Jinny every morning just to check it. Guests are coming — time to book the Pre-Party Pack! 🪄",
      user: "Anjali Mehta",
      loc: "Noida, Sector 137",
      color: "bg-[#2D7A5F]",
      initial: "A",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FDFCFB] text-[#0D0B21]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
            <MessageCircle className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">WHAT PEOPLE SAY</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Real homes. <span className="text-[#7C3AED]">Real magic.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
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
      a: "The Jinny Score is a task-level quality rating for every partner — broken down by bathroom cleaning, kitchen work, laundry, general cleaning, and punctuality. It is calculated from customer per-task feedback and AI photo quality verification after every session. You can see a partner's Jinny Score before booking them, so you always know who is coming to your home.",
    },
    {
      q: "What happens if I am not satisfied with the service?",
      a: "We offer a 100% satisfaction guarantee. If you are not happy with any aspect of the service, contact us within 24 hours and we will either send another Jinny partner to redo the work at no charge or issue a full refund to your Jinny Wallet. Our support team is available 24/7.",
    },
    {
      q: "Is the Jinny AI assistant available in Hindi?",
      a: "Yes — Jinny AI understands and responds in Hindi, English, and Hinglish naturally. You can type or speak (\"bathroom saaf karna hai\", \"kitchen clean karwa do\") and Jinny will understand exactly what you need, suggest the right service or bundle, and complete the booking in under 60 seconds without any form filling.",
    },
    {
      q: "How do Jinny Points and Loyalty Tiers work?",
      a: "You earn 1 Jinny Point for every ✕✕✕ spent on bookings. Points unlock tiers — Silver (500 pts), Gold (2,000 pts), and Platinum (5,000 pts) — each with better perks including priority matching, dedicated partners, free session extensions, and faster support. Book once a week for 4 consecutive weeks and earn a streak cashback reward automatically.",
    },
    {
      q: "How does Jinny protect partner safety?",
      a: "Jinny Suraksha is our AI-powered safety system active on every session. Features include: volume-button SOS (triple press even on a locked phone), automated 20-minute check-in prompts, on-device AI distress detection (audio never leaves the partner's phone), live GPS tracking, 5-minute field team response for any SOS, and the ability for partners to leave any session immediately with no penalty.",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#FDFCFB] text-[#0D0B21]">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#F5F3FF] border border-[#DDD6FE] rounded-full text-[#7C3AED]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-purple">? QUESTIONS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Everything you <span className="text-[#7C3AED]">wish to know</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-gray-100 last:border-0"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-[#7C3AED]' : 'text-[#0D0B21]'}`}>
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#7C3AED] border-[#7C3AED] text-white rotate-45' : 'border-[#F5F3FF] text-[#7C3AED]'}`}>
                   <Plus className="w-5 h-5" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 leading-relaxed text-lg max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <section id="services">
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
      
      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
      `}</style>
    </main>
  );
}


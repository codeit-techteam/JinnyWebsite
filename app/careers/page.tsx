import React from "react";
import { Sparkles, Briefcase, Zap, Globe, Coffee, GraduationCap, Heart } from "lucide-react";

export default function CareersPage() {
  const openings = [
    { title: "Senior Product Designer", team: "Design", location: "Remote / Delhi" },
    { title: "Fullstack Engineer (Next.js/TS)", team: "Engineering", location: "Delhi NCR" },
    { title: "Operations Manager", team: "Operations", location: "Gurgaon" },
    { title: "AI/ML Research Engineer", team: "Technology", location: "Remote" },
    { title: "Growth Marketing Lead", team: "Growth", location: "Delhi" },
  ];

  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <Zap className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Join the Magic</span>
            </div>
            <h1 className="heading-xl">
              Help us build the <br />
              <span className="text-[#6c2bd9]">Future of Living</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl">
              We&apos;re looking for dreamers, makers, and problem-solvers to help us build India&apos;s first truly AI-integrated home services platform.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0b0120]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Work Anywhere", desc: "Remote-first culture for tech and design roles." },
              { icon: Coffee, title: "Uncapped Time Off", desc: "We trust you to manage your time and output." },
              { icon: GraduationCap, title: "Learning Budget", desc: "Monthly stipend for books, courses, and conferences." },
              { icon: Heart, title: "Full Health Cover", desc: "Comprehensive insurance for you and your family." },
            ].map((benefit, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] flex items-center justify-center text-[#6c2bd9]">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-md">{benefit.title}</h3>
                <p className="body-text text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="py-32 px-6 md:px-12 lg:px-24 bg-[#0b0120]">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4">
            <h2 className="heading-lg">Current Openings</h2>
            <p className="body-text-dark">Don&apos;t see a perfect fit? Send us a magical application anyway.</p>
          </div>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#6c2bd9]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                <div className="space-y-2">
                  <h3 className="heading-md group-hover:text-[#6c2bd9] transition-colors">{job.title}</h3>
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/20">
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-[#6c2bd9] text-white rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Careers
        </p>
      </footer>
    </main>
  );
}

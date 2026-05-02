import React from "react";
import { Sparkles, GraduationCap, Trophy, CheckCircle2, Star } from "lucide-react";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#6c2bd9]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 rounded-full">
              <GraduationCap className="w-3 h-3 text-[#f5b21c]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5b21c]">Jinny Academy</span>
            </div>
            <h1 className="heading-xl">
              Unlock your <br />
              <span className="text-[#6c2bd9]">Full Potential</span>
            </h1>
            <p className="body-text-dark text-xl max-w-2xl mx-auto">
              Our structured certification programmes ensure that every Jinny partner is equipped with the skills and knowledge to deliver world-class service.
            </p>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#0b0120]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Bathroom Deep Clean Specialist", level: "Intermediate", perks: "Unlocks ₹499+ tasks", icon: Sparkles },
            { title: "Kitchen Degreasing Expert", level: "Advanced", perks: "Unlocks chimney services", icon: Star },
            { title: "Customer Interaction & Soft Skills", level: "Essential", perks: "Boosts Jinny Score", icon: CheckCircle2 },
            { title: "Eco-Chemical Safety", level: "Essential", perks: "Mandatory for all partners", icon: Trophy },
          ].map((course, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-[#F5F3FF] border border-[#DDD6FE] space-y-6 group hover:bg-[#6c2bd9] hover:text-white transition-all">
              <div className="flex justify-between items-start">
                 <course.icon className="w-10 h-10 text-[#6c2bd9] group-hover:text-white" />
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{course.level}</span>
              </div>
              <h3 className="heading-md">{course.title}</h3>
              <p className="text-sm font-medium opacity-60">{course.perks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8 bg-[#0b0120]">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl">🪔</span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Certifications
        </p>
      </footer>
    </main>
  );
}

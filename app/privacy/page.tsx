import React from "react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="heading-xl">Privacy Policy</h1>
            <p className="body-text-dark">Last updated: May 1, 2026</p>
            <div className="p-8 rounded-[2rem] bg-[#6c2bd9]/10 border border-[#6c2bd9]/20 flex items-start gap-6">
              <ShieldCheck className="w-8 h-8 text-[#6c2bd9] shrink-0" />
              <p className="body-text-dark text-sm leading-relaxed">
                At Jinny, we respect your privacy and are committed to protecting your personal data. This policy explains how we handle your information when you use our platform and services.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: Eye,
                title: "1. Information We Collect",
                content: "We collect information you provide directly to us (name, mobile number, address), information about your usage of our services, and location data to facilitate the arrival of our partners."
              },
              {
                icon: Lock,
                title: "2. How We Use Your Data",
                content: "Your data is used to provide, maintain, and improve our services, to communicate with you about bookings, and to ensure the safety and security of our platform and users."
              },
              {
                icon: FileText,
                title: "3. Data Sharing",
                content: "We share necessary information (like address and name) with our verified partners only during active bookings. We never sell your personal data to third parties."
              },
              {
                icon: ShieldCheck,
                title: "4. Your Rights",
                content: "You have the right to access, correct, or delete your personal data. You can manage your preferences directly through the Jinny app or by contacting our support team."
              }
            ].map((section, i) => (
              <div key={i} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6c2bd9]">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h2 className="heading-md">{section.title}</h2>
                </div>
                <p className="body-text-dark leading-relaxed pl-14">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5">
            <p className="body-text-dark text-sm">
              If you have any questions about this Privacy Policy, please contact us at <span className="text-[#6c2bd9] font-bold">privacy@jinny.in</span>
            </p>
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
          © 2026 MTB ALPHA Private Limited · Delhi NCR
        </p>
      </footer>
    </main>
  );
}

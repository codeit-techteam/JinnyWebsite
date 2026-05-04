import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="heading-xl">Terms of Service</h1>
            <p className="body-text-dark">Last updated: May 1, 2026</p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing or using the Jinny platform, you agree to be bound by these Terms of Service and all applicable laws and regulations."
              },
              {
                title: "2. Service Bookings",
                content: "Bookings are subject to partner availability. We reserve the right to cancel or reschedule services due to unforeseen circumstances, with full refunds provided where applicable."
              },
              {
                title: "3. User Conduct",
                content: "Users are expected to provide a safe working environment for our partners. Any form of harassment or unsafe conditions will lead to immediate service termination and potential account banning."
              },
              {
                title: "4. Payments & Refunds",
                content: "Payments are processed securely through our platform. Refund requests are evaluated on a case-by-step basis through the Jinny app support system."
              }
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <h2 className="heading-md text-[#6c2bd9]">{section.title}</h2>
                <p className="body-text-dark leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#f5b21c] shrink-0" />
            <p className="text-xs text-white/40 leading-relaxed">
              Important: These terms are subject to change. Continued use of the platform after updates constitutes acceptance of the new terms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl"></span>
          <span className="text-3xl font-serif font-bold italic tracking-tight">Jinny</span>
        </div>
        <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
          © 2026 MTB ALPHA Private Limited · Terms
        </p>
      </footer>
    </main>
  );
}



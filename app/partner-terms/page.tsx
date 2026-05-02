import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale, FileText } from "lucide-react";

export default function PartnerTermsPage() {
  return (
    <main className="min-h-screen bg-[#0b0120] text-white selection:bg-purple-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#0b0120]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-4 h-4 text-white/40 group-hover:text-white group-hover:-translate-x-1 transition-all" />
            <span className="text-3xl">🪔</span>
            <span className="text-2xl font-serif font-bold italic tracking-tight">Jinny</span>
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5b21c]">Partner Agreement</span>
        </div>
      </nav>

      <section className="pt-48 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="heading-xl">Partner Terms & Conditions</h1>
            <p className="body-text-dark">Last updated: May 1, 2026</p>
          </div>

          <div className="space-y-12">
            {[
              { title: "1. Professional Standards", content: "All partners must maintain a minimum Jinny Score of 4.5. Consistent failure to meet quality standards will result in mandatory re-training or platform suspension." },
              { title: "2. Payout Structure", content: "Earnings are calculated per task and settled weekly. Commission rates are transparent and visible within the Partner App." },
              { title: "3. Safety & Conduct", content: "Partners must follow all safety protocols, including background checks and on-site verification. Zero tolerance for any unprofessional conduct." },
              { title: "4. Equipment & Uniform", content: "Partners must use Jinny-approved cleaning kits and maintain a professional appearance at all times while representing the platform." }
            ].map((section, i) => (
              <div key={i} className="space-y-4">
                <h2 className="heading-md text-[#f5b21c]">{section.title}</h2>
                <p className="body-text-dark leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 text-center border-t border-white/5">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 MTB ALPHA Private Limited</p>
      </footer>
    </main>
  );
}

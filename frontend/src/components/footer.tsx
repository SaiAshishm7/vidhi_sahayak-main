import Link from "next/link";

const serviceLinks = [
  { href: "/documents/new", label: "Create Legal Document" },
  { href: "/consultation", label: "Talk to Lawyer" },
  { href: "/chat", label: "AI Legal Assistant" },
  { href: "/categories", label: "Legal Categories" },
  { href: "/templates", label: "Document Templates" },
  { href: "/search", label: "Search Services" },
];

const quickLinks = [
  { href: "/dashboard", label: "My Dashboard" },
  { href: "/categories/land", label: "Property & Land" },
  { href: "/categories/rental", label: "Rental Agreements" },
  { href: "/categories/affidavit", label: "Affidavits" },
  { href: "/categories/agreement", label: "Agreements & MOUs" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 border-t border-slate-800 text-xs">
      {/* Flag tricolor accent line */}
      <div className="tricolor-stripe" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Main Footer Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#1a237e] text-white font-bold text-lg shadow-sm">
                VS
              </div>
              <div>
                <span className="block text-lg font-black text-white tracking-tight">
                  Vidhi<span className="text-[#ff9933]">Sahayak</span>
                </span>
                <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Official Legal Copilot Portal
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 mb-4 max-w-xs">
              Providing instant AI legal assistance, automated ready-to-print documents, and verified advocate consultation scheduling across all Indian states.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-[#1a237e]/40 border border-[#1a237e] text-indigo-300 text-[10px] px-2.5 py-1 rounded-md font-semibold">
                🛡️ SSL Encrypted
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-[10px] px-2.5 py-1 rounded-md font-semibold">
                ✓ Bar Verified Advocates
              </span>
            </div>
          </div>

          {/* Column 2: Legal Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#e65100] pl-2">
              Legal Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-[#ff9933]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#e65100] pl-2">
              Popular Topics
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="text-[#ff9933]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Help */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#e65100] pl-2">
              Support &amp; Helpline
            </h3>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Official Email Support</p>
                <p className="text-xs font-semibold text-white mt-0.5">support@vidhisahayak.in</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">24/7 AI Legal Helpline</p>
                <Link href="/chat" className="inline-block text-xs font-bold text-[#ff9933] hover:underline mt-0.5">
                  Launch Virtual Legal Assistant →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ─── Bottom Copyright Bar ────────────────────────────────────── */}
        <div className="border-t border-slate-800 py-6 text-slate-500 text-[11px] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} VidhiSahayak Portal. All Rights Reserved.<br />
            <span className="text-slate-600">Disclaimer: VidhiSahayak provides AI-driven legal informational tools under Indian legislation. It is not a substitute for formal legal counsel.</span>
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <span>|</span>
            <Link href="/support" className="hover:text-slate-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

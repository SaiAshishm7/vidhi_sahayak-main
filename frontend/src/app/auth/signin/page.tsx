"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignInEntryPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const errorMessage = await signIn(email, password);
    setLoading(false);
    if (errorMessage) {
      alert(`Sign in failed: ${errorMessage}`);
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="min-h-[calc(100vh-140px)] flex bg-slate-50">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-5/12 bg-[#1a237e] text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#e65100]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white text-[#1a237e] font-bold text-lg">
              VS
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tight">
                Vidhi<span className="text-[#ff9933]">Sahayak</span>
              </span>
              <p className="text-[10px] text-indigo-200 tracking-widest uppercase">Official Legal Services Portal</p>
            </div>
          </Link>

          <h2 className="text-3xl font-bold leading-tight mb-4 text-white">
            Access Your Legal Dashboard &amp; Consultations
          </h2>
          <p className="text-indigo-100/90 text-sm leading-relaxed mb-8">
            Manage your document drafts, lawyer appointments, and AI query history securely in one portal.
          </p>

          <div className="space-y-4">
            {[
              { title: "Ready-to-Print Legal Documents", desc: "Rental agreements, affidavits, MOUs" },
              { title: "Verified Advocate Consultations", desc: "Connect via phone or video call" },
              { title: "Multilingual Legal Guidance", desc: "Support in 12+ Indian languages" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                <div className="w-6 h-6 rounded-full bg-[#e65100] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{item.title}</div>
                  <div className="text-[11px] text-indigo-200">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-indigo-200 border-t border-white/10 pt-6">
          Security standard: SSL 256-bit encrypted data protection.
        </div>
      </div>

      {/* Right Panel — Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          {/* Mobile Brand */}
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#1a237e] text-white font-bold text-sm">
              VS
            </div>
            <span className="text-lg font-bold text-[#1a237e]">VidhiSahayak</span>
          </div>

          <h1 className="text-2xl font-bold text-[#1a237e]">Sign In to Your Account</h1>
          <p className="mt-1 text-xs text-slate-500 mb-6">
            Enter your registered email and password to access services.
          </p>

          {/* Role Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Link
              href="/auth/signup?role=user"
              className="p-3 border border-slate-200 rounded-xl text-center hover:border-[#1a237e] hover:bg-slate-50 transition-all"
            >
              <p className="text-xs font-bold text-[#1a237e]">Citizen / User</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Legal guidance &amp; docs</p>
            </Link>
            <Link
              href="/auth/signup?role=lawyer"
              className="p-3 border border-slate-200 rounded-xl text-center hover:border-[#e65100] hover:bg-slate-50 transition-all"
            >
              <p className="text-xs font-bold text-[#e65100]">Advocate / Lawyer</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Provide consultations</p>
            </Link>
          </div>

          <form onSubmit={onSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                id="signin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs text-[#1a237e] hover:underline font-semibold">Forgot?</a>
              </div>
              <input
                id="signin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all"
              />
            </div>
            <button
              id="signin-submit"
              disabled={loading}
              className="w-full bg-[#1a237e] hover:bg-[#0d1757] text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            Don't have an account yet?{" "}
            <Link href="/auth/signup" className="text-[#e65100] font-bold hover:underline">
              Register Free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

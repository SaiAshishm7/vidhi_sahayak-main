"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const LANGS = [
  { code: "en-IN", label: "English" },
  { code: "hi-IN", label: "हिंदी (Hindi)" },
  { code: "te-IN", label: "తెలుగు (Telugu)" },
  { code: "ta-IN", label: "தமிழ் (Tamil)" },
  { code: "bn-IN", label: "বাংলা (Bengali)" },
  { code: "ml-IN", label: "മലയാളം (Malayalam)" },
  { code: "kn-IN", label: "ಕನ್ನಡ (Kannada)" },
  { code: "gu-IN", label: "ગુજરાતી (Gujarati)" },
  { code: "pa-IN", label: "ਪੰਜਾਬੀ (Punjabi)" },
];

type Role = "user" | "lawyer";

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#1a237e] focus:ring-2 focus:ring-[#1a237e]/10 transition-all";

export default function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { signUp } = useAuth();
  const initialRole = (searchParams.get("role") as Role) || "user";
  const [role, setRole] = useState<Role>(initialRole);
  const [loading, setLoading] = useState(false);

  const title = useMemo(() =>
    role === "lawyer" ? "Advocate & Lawyer Registration" : "Citizen & User Registration"
  , [role]);

  async function onSubmitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    const err = await signUp(String(fd.get("full_name")), String(fd.get("email")), String(fd.get("password")), "user");
    setLoading(false);
    if (err) { alert(`Registration failed: ${err}`); return; }
    router.push("/dashboard");
  }

  async function onSubmitLawyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    const err = await signUp(String(fd.get("full_name")), String(fd.get("email")), String(fd.get("password")), "lawyer");
    setLoading(false);
    if (err) { alert(`Registration failed: ${err}`); return; }
    router.push("/dashboard");
  }

  return (
    <div style={{ minHeight: "calc(100vh - 140px)", display: "flex", background: "#f8fafc" }}>

      {/* ── Left Panel ── */}
      <div style={{ background: "#1a237e", color: "white", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", width: "42%" }}
        className="hidden lg:flex">
        <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: 300, background: "rgba(255,255,255,0.05)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#1a237e", fontSize: 16 }}>VS</div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "white", letterSpacing: "-0.5px" }}>Vidhi<span style={{ color: "#ff9933" }}>Sahayak</span></div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Official Legal Services Portal</div>
            </div>
          </Link>

          <h2 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>
            {role === "lawyer" ? "Join India's Verified Advocate Network" : "Access AI Legal Assistance & Document Drafting"}
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 32 }}>
            {role === "lawyer"
              ? "Get listed, connect with clients, and manage your practice online."
              : "Generate court-ready documents in minutes and consult verified lawyers."}
          </p>

          {[
            { t: "256-Bit SSL Security", d: "Your data and consultations remain confidential" },
            { t: "Indian Legal Compliance", d: "Updated for IPC, CrPC, CPC & state stamp acts" },
            { t: "12+ Indian Languages", d: "English, Hindi, Telugu, Tamil, Bengali & more" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 14px", marginBottom: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e65100", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, flexShrink: 0, marginTop: 2 }}>✓</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "white" }}>{item.t}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: "relative", zIndex: 1, fontSize: 11, color: "rgba(255,255,255,0.4)", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
          © {new Date().getFullYear()} VidhiSahayak Technologies Pvt. Ltd.
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ width: "100%", maxWidth: 440, background: "white", borderRadius: 20, border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", padding: "2rem" }}>

          {/* Mobile brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }} className="lg:hidden">
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1a237e", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13 }}>VS</div>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#1a237e" }}>VidhiSahayak</span>
          </div>

          <h1 style={{ fontSize: 22, fontWeight: 800, color: "#1a237e", marginBottom: 4 }}>{title}</h1>
          <p style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>Select your account type to get started.</p>

          {/* Role Tab Switcher */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, background: "#f1f5f9", borderRadius: 12, padding: 4, marginBottom: 24 }}>
            <button type="button" onClick={() => setRole("user")}
              style={{ padding: "8px 0", borderRadius: 10, fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", transition: "all 0.2s",
                background: role === "user" ? "#1a237e" : "transparent",
                color: role === "user" ? "white" : "#64748b" }}>
              👤 Citizen / User
            </button>
            <button type="button" onClick={() => setRole("lawyer")}
              style={{ padding: "8px 0", borderRadius: 10, fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", transition: "all 0.2s",
                background: role === "lawyer" ? "#e65100" : "transparent",
                color: role === "lawyer" ? "white" : "#64748b" }}>
              ⚖️ Advocate / Lawyer
            </button>
          </div>

          {/* USER FORM */}
          {role === "user" && (
            <form onSubmit={onSubmitUser} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Full Name</label>
                <input id="signup-fullname" name="full_name" required placeholder="e.g. Ramesh Kumar" className={inputCls} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Email Address</label>
                <input id="signup-email" name="email" type="email" required placeholder="name@example.com" className={inputCls} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Password</label>
                <input id="signup-password" name="password" type="password" required minLength={6} placeholder="At least 6 characters" className={inputCls} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Preferred Language</label>
                <select name="preferred_language" className={inputCls}>
                  {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
                </select>
              </div>
              <button id="signup-user-submit" disabled={loading}
                style={{ width: "100%", background: loading ? "#6366f1" : "#1a237e", color: "white", fontWeight: 700, padding: "12px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 14, transition: "background 0.2s" }}>
                {loading ? "Creating Account..." : "Create Free Account →"}
              </button>
            </form>
          )}

          {/* LAWYER FORM */}
          {role === "lawyer" && (
            <form onSubmit={onSubmitLawyer} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Full Name (with Adv. prefix)</label>
                <input id="signup-lawyer-fullname" name="full_name" required placeholder="Adv. Priya Sharma" className={inputCls} style={{ borderColor: "#fdba74" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Professional Email</label>
                <input id="signup-lawyer-email" name="email" type="email" required placeholder="lawyer@example.com" className={inputCls} style={{ borderColor: "#fdba74" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 }}>Password</label>
                <input id="signup-lawyer-password" name="password" type="password" required minLength={6} placeholder="At least 6 characters" className={inputCls} style={{ borderColor: "#fdba74" }} />
              </div>
              <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 10, padding: "12px 14px", fontSize: 11, color: "#92400e", lineHeight: 1.6 }}>
                📌 <strong>Bar Verification:</strong> After signing up, enter your Bar Council license number from your dashboard. Profile is reviewed before going live.
              </div>
              <button id="signup-lawyer-submit" disabled={loading}
                style={{ width: "100%", background: loading ? "#fb923c" : "#e65100", color: "white", fontWeight: 700, padding: "12px", borderRadius: 10, border: "none", cursor: loading ? "not-allowed" : "pointer", fontSize: 14, transition: "background 0.2s" }}>
                {loading ? "Registering..." : "Register as Advocate →"}
              </button>
            </form>
          )}

          <p style={{ marginTop: 20, textAlign: "center", fontSize: 12, color: "#94a3b8" }}>
            Already have an account?{" "}
            <Link href="/auth/signin" style={{ color: "#1a237e", fontWeight: 700, textDecoration: "none" }}>Sign In Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

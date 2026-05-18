"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#f7f6f2", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .input-field:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        .btn-primary:hover { background: #155c32; }
        .btn-primary { transition: all 0.15s ease; }
        .tab-btn { transition: all 0.15s ease; cursor: pointer; }
      `}</style>

      <nav style={{ background: "white", padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px", borderBottom: "1px solid #ece9e0" }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "#1a6e3c", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px" }}>🏠</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#1a1a1a" }}>Hosta</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#d4a017" }}> Ghana</span>
          </div>
        </a>
        <p style={{ fontSize: "14px", color: "#888" }}>
          Don't have an account? <a href="/signup" style={{ color: "#1a6e3c", fontWeight: 600, textDecoration: "none" }}>Sign up free</a>
        </p>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{ background: "white", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "440px", border: "1.5px solid #ece9e0", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "8px" }}>Welcome back</h1>
            <p style={{ color: "#888", fontSize: "15px" }}>Log in to your Hosta Ghana account</p>
          </div>

          {error && (
            <div style={{ background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: "10px", padding: "12px", marginBottom: "16px", fontSize: "13px", color: "#cc0000" }}>
              ⚠️ {error}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Email address</label>
              <input className="input-field" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444" }}>Password</label>
                <a href="#" style={{ fontSize: "13px", color: "#1a6e3c", textDecoration: "none" }}>Forgot password?</a>
              </div>
              <input className="input-field" type="password" placeholder="Enter your password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
            </div>
            <button className="btn-primary" onClick={handleLogin} style={{ width: "100%", padding: "14px", background: "#1a6e3c", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginTop: "8px" }}>
              {loading ? "Logging in..." : "Log in →"}
            </button>
          </div>

          <p style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "24px" }}>
            Don't have an account? <a href="/signup" style={{ color: "#1a6e3c", fontWeight: 600, textDecoration: "none" }}>Sign up free</a>
          </p>
        </div>
      </div>
    </main>
  );
}
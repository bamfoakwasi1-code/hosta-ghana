"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function SignUp() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", university: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (!form.firstName || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: `${form.firstName} ${form.lastName}`,
          role: role,
          university: form.university,
        }
      }
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
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
        .role-card { transition: all 0.2s ease; cursor: pointer; }
        .role-card:hover { border-color: #1a6e3c; background: #f0f8f3; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .slide-up { animation: slideUp 0.4s ease forwards; }
      `}</style>

      {/* Navbar */}
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
          Already have an account? <a href="/login" style={{ color: "#1a6e3c", fontWeight: 600, textDecoration: "none" }}>Log in</a>
        </p>
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        {success ? (
          <div className="slide-up" style={{ background: "white", borderRadius: "20px", padding: "48px", maxWidth: "440px", width: "100%", textAlign: "center", border: "1.5px solid #ece9e0" }}>
            <div style={{ width: "70px", height: "70px", background: "#1a6e3c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "32px" }}>✓</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", color: "#1a1a1a", marginBottom: "12px" }}>Check your email! 📧</h2>
            <p style={{ color: "#888", fontSize: "15px", lineHeight: 1.7 }}>We sent a confirmation link to <strong>{form.email}</strong>. Click it to activate your account!</p>
            <a href="/login" style={{ display: "inline-block", marginTop: "24px", padding: "12px 28px", background: "#1a6e3c", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "15px" }}>Go to Login →</a>
          </div>
        ) : (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "480px", border: "1.5px solid #ece9e0", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "8px" }}>Create your account</h1>
              <p style={{ color: "#888", fontSize: "15px" }}>Join thousands of students on Hosta Ghana</p>
            </div>

            {/* Role Selection */}
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "12px" }}>I am a...</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
              <div className="role-card" onClick={() => setRole("student")} style={{ border: role === "student" ? "2px solid #1a6e3c" : "1.5px solid #e5e2d8", borderRadius: "12px", padding: "16px", textAlign: "center", background: role === "student" ? "#f0f8f3" : "white" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}>🎓</span>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>Student</p>
                <p style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>Looking for a hostel</p>
              </div>
              <div className="role-card" onClick={() => setRole("manager")} style={{ border: role === "manager" ? "2px solid #1a6e3c" : "1.5px solid #e5e2d8", borderRadius: "12px", padding: "16px", textAlign: "center", background: role === "manager" ? "#f0f8f3" : "white" }}>
                <span style={{ fontSize: "28px", display: "block", marginBottom: "8px" }}>🏢</span>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>Hostel Manager</p>
                <p style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>I want to list my hostel</p>
              </div>
            </div>

            {error && (
              <div style={{ background: "#fff0f0", border: "1px solid #ffcccc", borderRadius: "10px", padding: "12px", marginBottom: "16px", fontSize: "13px", color: "#cc0000" }}>
                ⚠️ {error}
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>First name *</label>
                  <input className="input-field" type="text" placeholder="Kwame" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Last name</label>
                  <input className="input-field" type="text" placeholder="Mensah" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Email address *</label>
                <input className="input-field" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>

              {role === "student" && (
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>University</label>
                  <select className="input-field" value={form.university} onChange={(e) => setForm({ ...form, university: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }}>
                    <option value="">Select your university</option>
                    <option>KNUST - Kumasi</option>
                    <option>UG - Legon, Accra</option>
                    <option>UCC - Cape Coast</option>
                    <option>GIMPA - Accra</option>
                    <option>Ashesi - Berekuso</option>
                    <option>UDS - Tamale</option>
                    <option>UENR - Sunyani</option>
                    <option>UMaT - Tarkwa</option>
                  </select>
                </div>
              )}

              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Password *</label>
                <input className="input-field" type="password" placeholder="At least 8 characters" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>

              <button className="btn-primary" onClick={handleSignUp} style={{ width: "100%", padding: "14px", background: "#1a6e3c", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginTop: "8px" }}>
                {loading ? "Creating account..." : "Create account →"}
              </button>
            </div>

            <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", marginTop: "20px", lineHeight: 1.6 }}>
              By signing up you agree to our <a href="#" style={{ color: "#1a6e3c", textDecoration: "none" }}>Terms</a> and <a href="#" style={{ color: "#1a6e3c", textDecoration: "none" }}>Privacy Policy</a>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
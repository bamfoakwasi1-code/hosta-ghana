export default function Login() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#f7f6f2", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .input-field:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        .btn-primary:hover { background: #155c32; }
        .btn-primary { transition: all 0.15s ease; }
        .tab-active { border-bottom: 2px solid #1a6e3c; color: #1a6e3c; font-weight: 600; }
        .tab-inactive { border-bottom: 2px solid transparent; color: #888; }
        .tab-inactive:hover { color: #1a6e3c; }
        .social-btn:hover { background: #f0f0f0; }
        .social-btn { transition: background 0.15s; }
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
          Don't have an account? <a href="/signup" style={{ color: "#1a6e3c", fontWeight: 600, textDecoration: "none" }}>Sign up free</a>
        </p>
      </nav>

      {/* Login Form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{ background: "white", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "440px", border: "1.5px solid #ece9e0", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>

          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "8px" }}>Welcome back</h1>
            <p style={{ color: "#888", fontSize: "15px" }}>Log in to your Hosta Ghana account</p>
          </div>

          {/* Role Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #ece9e0", marginBottom: "28px" }}>
            <button className="tab-active" style={{ flex: 1, padding: "12px", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>
              🎓 Student
            </button>
            <button className="tab-inactive" style={{ flex: 1, padding: "12px", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>
              🏢 Hostel Manager
            </button>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Email address</label>
              <input
                className="input-field"
                type="email"
                placeholder="you@example.com"
                style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444" }}>Password</label>
                <a href="#" style={{ fontSize: "13px", color: "#1a6e3c", textDecoration: "none", fontWeight: 500 }}>Forgot password?</a>
              </div>
              <input
                className="input-field"
                type="password"
                placeholder="Enter your password"
                style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }}
              />
            </div>

            <button className="btn-primary" style={{ width: "100%", padding: "14px", background: "#1a6e3c", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: "pointer", marginTop: "8px" }}>
              Log in
            </button>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "24px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "#ece9e0" }} />
            <span style={{ fontSize: "13px", color: "#aaa" }}>or continue with</span>
            <div style={{ flex: 1, height: "1px", background: "#ece9e0" }} />
          </div>

          {/* Google Login */}
          <button className="social-btn" style={{ width: "100%", padding: "12px", border: "1.5px solid #e5e2d8", borderRadius: "10px", background: "white", fontSize: "14px", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: "#333" }}>
            <span style={{ fontSize: "18px" }}>🌐</span> Continue with Google
          </button>

          <p style={{ textAlign: "center", fontSize: "13px", color: "#888", marginTop: "24px" }}>
            Don't have an account? <a href="/signup" style={{ color: "#1a6e3c", fontWeight: 600, textDecoration: "none" }}>Sign up free</a>
          </p>
        </div>
      </div>
    </main>
  );
}
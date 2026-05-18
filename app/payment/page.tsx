"use client";
import { useState } from "react";

export default function Payment() {
  const [plan, setPlan] = useState("monthly");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", hostel: "" });

  const plans = {
    monthly: { label: "Monthly", price: 50, period: "month", save: "" },
    annual: { label: "Annual", price: 400, period: "year", save: "Save GHS 200!" },
  };

  const selected = plans[plan as keyof typeof plans];

  const handlePay = () => {
    if (!form.name || !form.email || !form.phone || !form.hostel) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 2500);
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f7f6f2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .btn-primary:hover { background: #155c32; transform: translateY(-1px); }
        .btn-primary { transition: all 0.15s ease; }
        .plan-card:hover { border-color: #1a6e3c; }
        .plan-card { transition: all 0.2s ease; cursor: pointer; }
        .input-field:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; display: inline-block; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .slide-up { animation: slideUp 0.5s ease forwards; }
        @keyframes checkPop { 0% { transform: scale(0); } 70% { transform: scale(1.2); } 100% { transform: scale(1); } }
        .check-pop { animation: checkPop 0.5s ease forwards; }
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
        <p style={{ fontSize: "14px", color: "#888" }}>Secure Payment · 🔒 SSL Encrypted</p>
      </nav>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 5%" }}>

        {/* Progress Steps */}
        {!done && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "40px", gap: "8px" }}>
            {["Choose Plan", "Your Details", "Pay Securely"].map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: step > i + 1 ? "#1a6e3c" : step === i + 1 ? "#1a6e3c" : "#e5e2d8", color: step >= i + 1 ? "white" : "#aaa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700 }}>
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: step === i + 1 ? 600 : 400, color: step === i + 1 ? "#1a1a1a" : "#aaa" }}>{label}</span>
                </div>
                {i < 2 && <div style={{ width: "40px", height: "2px", background: step > i + 1 ? "#1a6e3c" : "#e5e2d8" }} />}
              </div>
            ))}
          </div>
        )}

        {/* SUCCESS STATE */}
        {done && (
          <div className="slide-up" style={{ textAlign: "center", padding: "60px 20px" }}>
            <div className="check-pop" style={{ width: "80px", height: "80px", background: "#1a6e3c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "36px" }}>✓</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "32px", color: "#1a1a1a", marginBottom: "12px" }}>Payment Successful! 🎉</h1>
            <p style={{ color: "#888", fontSize: "16px", marginBottom: "8px" }}>Your hostel listing has been activated on Hosta Ghana.</p>
            <p style={{ color: "#888", fontSize: "14px", marginBottom: "32px" }}>A confirmation has been sent to <strong>{form.email}</strong></p>
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0", maxWidth: "400px", margin: "0 auto 32px", textAlign: "left" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "16px" }}>📋 Order Summary</p>
              {[
                { label: "Hostel", value: form.hostel },
                { label: "Plan", value: `${selected.label} — GHS ${selected.price}/${selected.period}` },
                { label: "Manager", value: form.name },
                { label: "Status", value: "✅ Active" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f0f0f0", fontSize: "14px" }}>
                  <span style={{ color: "#888" }}>{row.label}</span>
                  <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/dashboard" style={{ padding: "12px 28px", borderRadius: "10px", background: "#1a6e3c", color: "white", textDecoration: "none", fontWeight: 700, fontSize: "15px" }}>Go to Dashboard →</a>
              <a href="/" style={{ padding: "12px 28px", borderRadius: "10px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>Back to Home</a>
            </div>
          </div>
        )}

        {/* STEP 1 — Choose Plan */}
        {!done && step === 1 && (
          <div className="slide-up">
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "32px", color: "#1a1a1a", marginBottom: "8px" }}>Choose Your Plan</h1>
              <p style={{ color: "#888", fontSize: "15px" }}>List your hostel and reach thousands of students across Ghana</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", maxWidth: "640px", margin: "0 auto 32px" }}>
              {/* Monthly */}
              <div className="plan-card" onClick={() => setPlan("monthly")} style={{ background: "white", borderRadius: "20px", padding: "28px", border: plan === "monthly" ? "2px solid #1a6e3c" : "1.5px solid #ece9e0", position: "relative" }}>
                {plan === "monthly" && <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#1a6e3c", color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600 }}>Selected</div>}
                <p style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>Monthly</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", fontWeight: 700, color: "#1a1a1a" }}>GHS 50</p>
                <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "20px" }}>per month</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["1 hostel listing", "Unlimited student views", "Inquiry notifications", "Edit anytime", "Cancel anytime"].map((f) => (
                    <li key={f} style={{ fontSize: "13px", color: "#555", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#1a6e3c", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Annual */}
              <div className="plan-card" onClick={() => setPlan("annual")} style={{ background: plan === "annual" ? "#f0f8f3" : "white", borderRadius: "20px", padding: "28px", border: plan === "annual" ? "2px solid #1a6e3c" : "1.5px solid #ece9e0", position: "relative" }}>
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#d4a017", color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {plan === "annual" ? "Selected ✓" : "Best Value 🔥"}
                </div>
                <p style={{ fontSize: "14px", color: "#888", marginBottom: "8px" }}>Annual</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", fontWeight: 700, color: "#1a1a1a" }}>GHS 400</p>
                <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "4px" }}>per year</p>
                <p style={{ fontSize: "12px", color: "#d4a017", fontWeight: 700, marginBottom: "16px" }}>Save GHS 200!</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {["Up to 3 hostel listings", "Unlimited student views", "Priority placement", "Inquiry notifications", "Featured badge", "Dedicated support"].map((f) => (
                    <li key={f} style={{ fontSize: "13px", color: "#555", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#1a6e3c", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button className="btn-primary" onClick={() => setStep(2)} style={{ padding: "14px 48px", borderRadius: "12px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}>
                Continue with {selected.label} Plan →
              </button>
              <p style={{ fontSize: "12px", color: "#aaa", marginTop: "12px" }}>🔒 Secure payment powered by Paystack</p>
            </div>
          </div>
        )}

        {/* STEP 2 — Details */}
        {!done && step === 2 && (
          <div className="slide-up" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "8px" }}>Your Details</h1>
              <p style={{ color: "#888", fontSize: "15px" }}>We'll use these to set up your listing account</p>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "32px", border: "1.5px solid #ece9e0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Full Name</label>
                <input className="input-field" type="text" placeholder="e.g. Kwame Mensah" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>
              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Email Address</label>
                <input className="input-field" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>
              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Phone Number</label>
                <input className="input-field" type="tel" placeholder="e.g. 0244 123 456" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>
              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Hostel Name</label>
                <input className="input-field" type="text" placeholder="e.g. Bright Students Hostel" value={form.hostel} onChange={(e) => setForm({ ...form, hostel: e.target.value })} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>

              {/* Order Summary */}
              <div style={{ background: "#f7f6f2", borderRadius: "12px", padding: "16px", border: "1px solid #ece9e0" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "10px" }}>Order Summary</p>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "6px" }}>
                  <span style={{ color: "#888" }}>{selected.label} Plan</span>
                  <span style={{ fontWeight: 700, color: "#1a1a1a" }}>GHS {selected.price}/{selected.period}</span>
                </div>
                {plan === "annual" && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span style={{ color: "#d4a017" }}>Annual discount</span>
                    <span style={{ color: "#d4a017", fontWeight: 600 }}>-GHS 200</span>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: "13px", borderRadius: "10px", border: "1.5px solid #e5e2d8", background: "white", color: "#555", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>← Back</button>
                <button className="btn-primary" onClick={() => setStep(3)} style={{ flex: 2, padding: "13px", borderRadius: "10px", background: form.name && form.email && form.phone && form.hostel ? "#1a6e3c" : "#ccc", color: "white", border: "none", fontWeight: 700, fontSize: "14px", cursor: form.name && form.email && form.phone && form.hostel ? "pointer" : "not-allowed" }}>
                  Continue to Payment →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 — Pay */}
        {!done && step === 3 && (
          <div className="slide-up" style={{ maxWidth: "560px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "8px" }}>Pay Securely</h1>
              <p style={{ color: "#888", fontSize: "15px" }}>Powered by Paystack — Ghana's trusted payment platform</p>
            </div>

            <div style={{ background: "white", borderRadius: "20px", padding: "32px", border: "1.5px solid #ece9e0", display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Paystack Logo Area */}
              <div style={{ background: "#f7f6f2", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "12px", border: "1px solid #ece9e0" }}>
                <div style={{ width: "40px", height: "40px", background: "#00c3f7", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: "18px" }}>P</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>Paystack Checkout</p>
                  <p style={{ fontSize: "12px", color: "#888" }}>Pay with Mobile Money, Card, or Bank Transfer</p>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "20px" }}>🔒</div>
              </div>

              {/* Payment Methods */}
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "12px" }}>Payment Method</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                  {[{ icon: "📱", label: "Mobile Money", sub: "MTN, Vodafone, AirtelTigo" }, { icon: "💳", label: "Card", sub: "Visa / Mastercard" }, { icon: "🏦", label: "Bank Transfer", sub: "Instant transfer" }].map((m, i) => (
                    <div key={m.label} style={{ border: i === 0 ? "2px solid #1a6e3c" : "1.5px solid #e5e2d8", borderRadius: "12px", padding: "14px", textAlign: "center", cursor: "pointer", background: i === 0 ? "#f0f8f3" : "white" }}>
                      <span style={{ fontSize: "24px", display: "block", marginBottom: "6px" }}>{m.icon}</span>
                      <p style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{m.label}</p>
                      <p style={{ fontSize: "10px", color: "#aaa", marginTop: "2px" }}>{m.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Money Field */}
              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Mobile Money Number</label>
                <input className="input-field" type="tel" placeholder="e.g. 0244 123 456" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
              </div>

              {/* Final Summary */}
              <div style={{ background: "linear-gradient(135deg, #0f4423, #1a6e3c)", borderRadius: "12px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>Total to pay</p>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "white", fontWeight: 700 }}>GHS {selected.price}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>{selected.label} Plan</p>
                  <p style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>{form.hostel || "Your Hostel"}</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, padding: "13px", borderRadius: "10px", border: "1.5px solid #e5e2d8", background: "white", color: "#555", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>← Back</button>
                <button className="btn-primary" onClick={handlePay} style={{ flex: 2, padding: "13px", borderRadius: "10px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 700, fontSize: "15px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  {loading ? <><span className="spinner">⟳</span> Processing...</> : <>Pay GHS {selected.price} →</>}
                </button>
              </div>

              <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", lineHeight: 1.6 }}>
                🔒 Your payment is secured by Paystack · SSL encrypted · No card details stored
              </p>
            </div>
          </div>
        )}

      </div>

      <footer style={{ background: "#0f1a13", color: "rgba(255,255,255,0.5)", padding: "24px 5%", textAlign: "center", marginTop: "40px" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "white" }}>Hosta</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "#d4a017" }}> Ghana</span>
        <p style={{ fontSize: "13px", marginTop: "8px" }}>© 2026 Hosta Ghana · Payments secured by Paystack 🔒</p>
      </footer>
    </main>
  );
}
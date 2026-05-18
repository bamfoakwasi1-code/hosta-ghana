export default function Home() {
  const universities = [
    { name: "KNUST", location: "Kumasi", count: "120+ hostels" },
    { name: "UG", location: "Accra", count: "95+ hostels" },
    { name: "UCC", location: "Cape Coast", count: "80+ hostels" },
    { name: "GIMPA", location: "Accra", count: "40+ hostels" },
    { name: "Ashesi", location: "Berekuso", count: "30+ hostels" },
    { name: "UDS", location: "Tamale", count: "50+ hostels" },
    { name: "UENR", location: "Sunyani", count: "25+ hostels" },
    { name: "UMaT", location: "Tarkwa", count: "35+ hostels" },
  ];

  const hostels = [
    { name: "Bright Students Hostel", school: "KNUST", area: "Ayeduase, Kumasi", price: "GHS 1,200", amenities: ["WiFi", "Security", "Water"], rating: "4.8", rooms: "Single & Double" },
    { name: "Royal Gate Hostel", school: "UG", area: "Legon, Accra", price: "GHS 1,500", amenities: ["WiFi", "AC", "Laundry"], rating: "4.6", rooms: "Single only" },
    { name: "Cape View Lodge", school: "UCC", area: "Tantri, Cape Coast", price: "GHS 900", amenities: ["Water", "Security", "Kitchen"], rating: "4.5", rooms: "Single & Double" },
  ];

  const amenityIcons: Record<string, string> = {
    WiFi: "📶", Security: "🔒", Water: "💧", AC: "❄️", Laundry: "🧺", Kitchen: "🍳",
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f7f6f2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:ital,wght@0,700;1,700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .nav-link:hover { color: #1a6e3c; }
        .uni-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); border-color: #1a6e3c; }
        .uni-card { transition: all 0.2s ease; }
        .hostel-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .hostel-card { transition: all 0.25s ease; }
        .btn-primary:hover { background: #155c32; transform: translateY(-1px); }
        .btn-primary { transition: all 0.15s ease; }
        .btn-outline:hover { background: #1a6e3c; color: white; }
        .btn-outline { transition: all 0.2s ease; }
        .search-input:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        .stat-card:hover { transform: translateY(-2px); }
        .stat-card { transition: transform 0.2s ease; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-content { animation: fadeUp 0.7s ease forwards; }
        .tag { background: rgba(26,110,60,0.1); color: #1a6e3c; font-size: 12px; padding: 4px 10px; border-radius: 20px; font-weight: 500; }
      `}</style>

      {/* Navbar */}
      <nav style={{ background: "white", padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #ece9e0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "#1a6e3c", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px" }}>🏠</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#1a1a1a" }}>Hosta</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#d4a017" }}> Ghana</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a href="#" className="nav-link" style={{ color: "#555", fontSize: "15px", textDecoration: "none", fontWeight: 500 }}>Find Hostels</a>
          <a href="#" className="nav-link" style={{ color: "#555", fontSize: "15px", textDecoration: "none", fontWeight: 500 }}>Universities</a>
          <a href="#" className="nav-link" style={{ color: "#555", fontSize: "15px", textDecoration: "none", fontWeight: 500 }}>List Hostel</a>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button className="btn-outline" style={{ padding: "8px 20px", borderRadius: "8px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", background: "transparent", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Log in</a>
          <button className="btn-primary" style={{ padding: "8px 20px", borderRadius: "8px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 600, fontSize: "14px", cursor: "pointer" textDecoration: "none" }}>Sign up free</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f4423 0%, #1a6e3c 60%, #2d8f55 100%)", padding: "90px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "10%", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(212,160,23,0.12)" }} />
        <div className="hero-content" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "rgba(212,160,23,0.2)", color: "#f0c040", padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 600, marginBottom: "24px", border: "1px solid rgba(212,160,23,0.3)" }}>
            🇬🇭 Ghana's #1 Student Hostel Platform
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(36px, 5vw, 58px)", color: "white", lineHeight: 1.15, marginBottom: "20px", fontWeight: 700 }}>
            Find Your Perfect<br />
            <span style={{ color: "#f0c040", fontStyle: "italic" }}>Student Hostel</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>
            Search thousands of verified hostels near your university.<br />Compare amenities, prices, and book your perfect room.
          </p>
          <div style={{ background: "white", borderRadius: "16px", padding: "16px", display: "flex", gap: "12px", flexWrap: "wrap", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <div style={{ flex: 1, minWidth: "180px", position: "relative" }}>
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>🎓</span>
              <input className="search-input" type="text" placeholder="University e.g. KNUST, UG, UCC..." style={{ width: "100%", padding: "12px 12px 12px 38px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }} />
            </div>
            <div style={{ flex: 1, minWidth: "160px", position: "relative" }}>
              <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "16px" }}>📍</span>
              <input className="search-input" type="text" placeholder="Area e.g. Ayeduase, Legon..." style={{ width: "100%", padding: "12px 12px 12px 38px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }} />
            </div>
            <button className="btn-primary" style={{ padding: "12px 28px", borderRadius: "10px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>🔍 Search</button>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "16px" }}>Popular: KNUST · UG Legon · UCC · GIMPA</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "white", borderBottom: "1px solid #ece9e0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "28px 5%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "16px" }}>
          {[{ num: "2,400+", label: "Verified Hostels" }, { num: "8", label: "Universities Covered" }, { num: "12,000+", label: "Students Helped" }, { num: "4.8★", label: "Average Rating" }].map((s) => (
            <div key={s.label} className="stat-card" style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fontWeight: 700, color: "#1a6e3c" }}>{s.num}</p>
              <p style={{ fontSize: "13px", color: "#888", fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universities */}
      <section style={{ padding: "72px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#1a6e3c", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>Browse by University</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", color: "#1a1a1a", fontWeight: 700 }}>Find hostels near your school</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {universities.map((uni) => (
            <div key={uni.name} className="uni-card" style={{ background: "white", borderRadius: "14px", padding: "24px", border: "1.5px solid #ece9e0", cursor: "pointer" }}>
              <div style={{ width: "48px", height: "48px", background: "#f0f8f3", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                <span style={{ fontSize: "22px" }}>🏛️</span>
              </div>
              <p style={{ fontWeight: 700, fontSize: "20px", color: "#1a1a1a", marginBottom: "4px" }}>{uni.name}</p>
              <p style={{ fontSize: "13px", color: "#888", marginBottom: "12px" }}>{uni.location}</p>
              <p style={{ fontSize: "12px", color: "#1a6e3c", fontWeight: 600, background: "#f0f8f3", padding: "4px 10px", borderRadius: "20px", display: "inline-block" }}>{uni.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Hostels */}
      <section style={{ background: "white", padding: "72px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "#1a6e3c", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>Featured</p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", color: "#1a1a1a", fontWeight: 700 }}>Top-rated hostels</h2>
            </div>
            <a href="/listings" style={{ color: "#1a6e3c", fontWeight: 600, fontSize: "15px", textDecoration: "none", border: "1.5px solid #1a6e3c", padding: "10px 20px", borderRadius: "8px" }}>View all hostels →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {hostels.map((hostel) => (
              <div key={hostel.name} className="hostel-card" style={{ background: "#fafaf8", border: "1.5px solid #ece9e0", borderRadius: "18px", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #c8e6d4, #a8d5b8)", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: "48px" }}>🏠</span>
                  <div style={{ position: "absolute", top: "14px", right: "14px", background: "white", padding: "4px 10px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>⭐ {hostel.rating}</div>
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "#1a6e3c", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, color: "white" }}>Near {hostel.school}</div>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{hostel.name}</h3>
                  <p style={{ fontSize: "13px", color: "#888", marginBottom: "14px" }}>📍 {hostel.area}</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                    {hostel.amenities.map((a) => (
                      <span key={a} className="tag">{amenityIcons[a]} {a}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "16px" }}>🛏️ {hostel.rooms}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 700, color: "#1a6e3c" }}>{hostel.price}</span>
                      <span style={{ fontSize: "12px", color: "#aaa" }}>/semester</span>
                    </div>
                    <button className="btn-primary" style={{ padding: "10px 20px", borderRadius: "10px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section style={{ padding: "72px 5%", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ color: "#1a6e3c", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>What to expect</p>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", color: "#1a1a1a", fontWeight: 700 }}>Filter by amenities that matter</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px" }}>
          {[{ icon: "📶", label: "WiFi" }, { icon: "🔒", label: "24/7 Security" }, { icon: "💧", label: "Running Water" }, { icon: "❄️", label: "Air Conditioning" }, { icon: "🧺", label: "Laundry" }, { icon: "🍳", label: "Kitchen" }, { icon: "🚗", label: "Parking" }, { icon: "📚", label: "Study Room" }].map((a) => (
            <div key={a.label} className="uni-card" style={{ background: "white", border: "1.5px solid #ece9e0", borderRadius: "14px", padding: "20px", textAlign: "center", cursor: "pointer" }}>
              <span style={{ fontSize: "28px", display: "block", marginBottom: "10px" }}>{a.icon}</span>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#444" }}>{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manager CTA */}
      <section style={{ margin: "0 5% 72px", background: "linear-gradient(135deg, #0f4423, #1a6e3c)", borderRadius: "24px", padding: "60px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
        <div>
          <div style={{ background: "rgba(212,160,23,0.2)", color: "#f0c040", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, display: "inline-block", marginBottom: "16px" }}>For Hostel Managers</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "32px", color: "white", fontWeight: 700, marginBottom: "12px" }}>Reach thousands of<br />students today</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6 }}>List your hostel on Hosta Ghana and get verified.<br />One-time fee or monthly subscription available.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button className="btn-primary" style={{ padding: "14px 32px", borderRadius: "12px", background: "#d4a017", color: "white", border: "none", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}>List Your Hostel →</button>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", textAlign: "center" }}>Starting from GHS 50/month</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0f1a13", color: "rgba(255,255,255,0.5)", padding: "40px 5%", textAlign: "center" }}>
        <div style={{ marginBottom: "12px" }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "18px", color: "white" }}>Hosta</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "18px", color: "#d4a017" }}> Ghana</span>
        </div>
        <p style={{ fontSize: "13px" }}>© 2026 Hosta Ghana. All rights reserved. · Built for Ghanaian students 🇬🇭</p>
      </footer>
    </main>
  );
}
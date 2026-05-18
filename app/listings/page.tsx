export default function Listings() {
  const hostels = [
    { id: 1, name: "Bright Students Hostel", school: "KNUST", area: "Ayeduase, Kumasi", price: "GHS 1,200", amenities: ["WiFi", "Security", "Water"], rating: "4.8", type: "Single & Double" },
    { id: 2, name: "Royal Gate Hostel", school: "UG", area: "Legon, Accra", price: "GHS 1,500", amenities: ["WiFi", "AC", "Laundry"], rating: "4.6", type: "Single only" },
    { id: 3, name: "Cape View Lodge", school: "UCC", area: "Tantri, Cape Coast", price: "GHS 900", amenities: ["Water", "Security", "Kitchen"], rating: "4.5", type: "Single & Double" },
    { id: 4, name: "Akosombo House", school: "KNUST", area: "Kotei, Kumasi", price: "GHS 1,100", amenities: ["WiFi", "Water", "Kitchen"], rating: "4.3", type: "Single only" },
    { id: 5, name: "Legon Heights", school: "UG", area: "Madina, Accra", price: "GHS 1,350", amenities: ["WiFi", "AC", "Security"], rating: "4.7", type: "Single & Double" },
    { id: 6, name: "Sunrise Hostel", school: "GIMPA", area: "Greenhill, Accra", price: "GHS 1,000", amenities: ["Water", "Security", "Laundry"], rating: "4.2", type: "Double only" },
  ];

  const amenityIcons: Record<string, string> = {
    WiFi: "📶", Security: "🔒", Water: "💧", AC: "❄️", Laundry: "🧺", Kitchen: "🍳",
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f7f6f2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .hostel-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.10); }
        .hostel-card { transition: all 0.25s ease; }
        .filter-btn:hover { border-color: #1a6e3c; color: #1a6e3c; background: #f0f8f3; }
        .filter-btn { transition: all 0.15s ease; }
        .filter-active { border-color: #1a6e3c !important; color: #1a6e3c !important; background: #f0f8f3 !important; font-weight: 600; }
        .search-input:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        .btn-primary:hover { background: #155c32; }
        .btn-primary { transition: all 0.15s ease; }
        .tag { background: rgba(26,110,60,0.1); color: #1a6e3c; font-size: 12px; padding: 4px 10px; border-radius: 20px; font-weight: 500; }
        .nav-link:hover { color: #1a6e3c; }
      `}</style>

      {/* Navbar */}
      <nav style={{ background: "white", padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px", position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #ece9e0" }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "#1a6e3c", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px" }}>🏠</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#1a1a1a" }}>Hosta</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#d4a017" }}> Ghana</span>
          </div>
        </a>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="/login" className="nav-link" style={{ padding: "8px 20px", borderRadius: "8px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Log in</a>
          <a href="/signup" style={{ padding: "8px 20px", borderRadius: "8px", background: "#1a6e3c", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Sign up</a>
        </div>
      </nav>

      {/* Search Header */}
      <section style={{ background: "#1a6e3c", padding: "32px 5%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", color: "white", fontSize: "28px", marginBottom: "16px" }}>Find your hostel</h1>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <input className="search-input" type="text" placeholder="🎓 Search by university..." style={{ flex: 1, minWidth: "200px", padding: "12px 16px", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "10px", fontSize: "14px", background: "rgba(255,255,255,0.1)", color: "white" }} />
            <input className="search-input" type="text" placeholder="📍 Area or location..." style={{ flex: 1, minWidth: "180px", padding: "12px 16px", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: "10px", fontSize: "14px", background: "rgba(255,255,255,0.1)", color: "white" }} />
            <button className="btn-primary" style={{ padding: "12px 28px", borderRadius: "10px", background: "#d4a017", color: "white", border: "none", fontWeight: 700, fontSize: "15px", cursor: "pointer" }}>🔍 Search</button>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 5%", display: "flex", gap: "28px" }}>

        {/* Sidebar */}
        <aside style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0", position: "sticky", top: "88px" }}>
            <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "16px" }}>University</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {["All", "KNUST", "UG", "UCC", "GIMPA", "Ashesi"].map((u) => (
                <button key={u} className={`filter-btn ${u === "All" ? "filter-active" : ""}`} style={{ padding: "8px 12px", border: "1.5px solid #e5e2d8", borderRadius: "8px", background: "white", fontSize: "13px", cursor: "pointer", textAlign: "left", color: "#555" }}>{u}</button>
              ))}
            </div>

            <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "16px" }}>Price Range</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {["Any price", "Under GHS 800", "GHS 800–1,200", "GHS 1,200–1,600", "Over GHS 1,600"].map((p) => (
                <button key={p} className="filter-btn" style={{ padding: "8px 12px", border: "1.5px solid #e5e2d8", borderRadius: "8px", background: "white", fontSize: "13px", cursor: "pointer", textAlign: "left", color: "#555" }}>{p}</button>
              ))}
            </div>

            <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "16px" }}>Amenities</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {["📶 WiFi", "🔒 Security", "💧 Water", "❄️ AC", "🧺 Laundry", "🍳 Kitchen"].map((a) => (
                <label key={a} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555", cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#1a6e3c" }} /> {a}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Hostel Grid */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ color: "#888", fontSize: "14px" }}><strong style={{ color: "#1a1a1a" }}>{hostels.length} hostels</strong> found</p>
            <select style={{ padding: "8px 14px", border: "1.5px solid #e5e2d8", borderRadius: "8px", fontSize: "13px", color: "#555", background: "white" }}>
              <option>Sort: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {hostels.map((hostel) => (
              <div key={hostel.id} className="hostel-card" style={{ background: "white", border: "1.5px solid #ece9e0", borderRadius: "18px", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, #c8e6d4, #a8d5b8)", height: "160px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: "40px" }}>🏠</span>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "white", padding: "3px 8px", borderRadius: "20px", fontSize: "12px", fontWeight: 700 }}>⭐ {hostel.rating}</div>
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "#1a6e3c", padding: "3px 8px", borderRadius: "20px", fontSize: "11px", fontWeight: 600, color: "white" }}>Near {hostel.school}</div>
                </div>
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>{hostel.name}</h3>
                  <p style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>📍 {hostel.area}</p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                    {hostel.amenities.map((a) => (
                      <span key={a} className="tag">{amenityIcons[a]} {a}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: "11px", color: "#aaa", marginBottom: "14px" }}>🛏️ {hostel.type}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", fontWeight: 700, color: "#1a6e3c" }}>{hostel.price}</span>
                      <span style={{ fontSize: "11px", color: "#aaa" }}>/sem</span>
                    </div>
                    <button className="btn-primary" style={{ padding: "8px 16px", borderRadius: "8px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ background: "#0f1a13", color: "rgba(255,255,255,0.5)", padding: "32px 5%", textAlign: "center", marginTop: "40px" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "white" }}>Hosta</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "#d4a017" }}> Ghana</span>
        <p style={{ fontSize: "13px", marginTop: "8px" }}>© 2026 Hosta Ghana. All rights reserved. 🇬🇭</p>
      </footer>
    </main>
  );
}
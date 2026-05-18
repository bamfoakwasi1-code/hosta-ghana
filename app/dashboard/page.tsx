export default function Dashboard() {
  const hostels = [
    { id: 1, name: "Bright Students Hostel", area: "Ayeduase, Kumasi", school: "KNUST", price: "GHS 1,200", status: "Active", views: 248, inquiries: 12 },
    { id: 2, name: "Kotei Royal Hostel", area: "Kotei, Kumasi", school: "KNUST", price: "GHS 1,000", status: "Pending", views: 54, inquiries: 3 },
  ];

  const amenityIcons: Record<string, string> = {
    WiFi: "📶", Security: "🔒", Water: "💧", AC: "❄️", Laundry: "🧺", Kitchen: "🍳",
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f7f6f2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .btn-primary:hover { background: #155c32; }
        .btn-primary { transition: all 0.15s ease; }
        .btn-danger:hover { background: #c0392b; }
        .btn-danger { transition: all 0.15s ease; }
        .nav-link:hover { color: #1a6e3c; }
        .hostel-row:hover { background: #fafaf8; }
        .hostel-row { transition: background 0.15s; }
        .stat-card:hover { transform: translateY(-2px); }
        .stat-card { transition: transform 0.2s ease; }
        .sidebar-link:hover { background: #f0f8f3; color: #1a6e3c; }
        .sidebar-link { transition: all 0.15s ease; }
        .input-field:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}      `}</style>

      {/* Top Navbar */}
      <nav style={{ background: "white", padding: "0 5%", display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px", borderBottom: "1px solid #ece9e0", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "#1a6e3c", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "18px" }}>🏠</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#1a1a1a" }}>Hosta</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "20px", color: "#d4a017" }}> Ghana</span>
          </div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "13px", color: "#888" }}>Manager Dashboard</span>
          <div style={{ width: "36px", height: "36px", background: "#1a6e3c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "14px" }}>KM</div>
        </div>
      </nav>

      <div style={{ display: "flex", maxWidth: "1300px", margin: "0 auto", padding: "32px 5%", gap: "28px" }}>

        {/* Sidebar */}
        <aside style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ background: "white", borderRadius: "16px", border: "1.5px solid #ece9e0", overflow: "hidden", position: "sticky", top: "88px" }}>
            <div style={{ padding: "20px", borderBottom: "1px solid #ece9e0" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a" }}>Kwame Mensah</p>
              <p style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>Hostel Manager</p>
            </div>
            {[
              { icon: "📊", label: "Overview", active: true },
              { icon: "🏠", label: "My Listings", active: false },
              { icon: "➕", label: "Add Hostel", active: false },
              { icon: "💬", label: "Inquiries", active: false },
              { icon: "💳", label: "Payments", active: false },
              { icon: "⚙️", label: "Settings", active: false },
            ].map((item) => (
              <button key={item.label} className="sidebar-link" style={{ width: "100%", padding: "14px 20px", border: "none", background: item.active ? "#f0f8f3" : "white", color: item.active ? "#1a6e3c" : "#555", fontSize: "14px", fontWeight: item.active ? 600 : 400, cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "10px", borderLeft: item.active ? "3px solid #1a6e3c" : "3px solid transparent" }}>
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
            <div style={{ padding: "16px 20px", borderTop: "1px solid #ece9e0" }}>
              <button style={{ width: "100%", padding: "10px", border: "1.5px solid #e5e2d8", borderRadius: "8px", background: "white", color: "#888", fontSize: "13px", cursor: "pointer" }}>🚪 Log out</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div style={{ flex: 1 }}>

          {/* Welcome */}
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "6px" }}>Welcome back, Kwame 👋</h1>
            <p style={{ color: "#888", fontSize: "15px" }}>Here's how your hostels are performing</p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              { icon: "🏠", label: "Total Listings", value: "2", color: "#1a6e3c" },
              { icon: "👁️", label: "Total Views", value: "302", color: "#d4a017" },
              { icon: "💬", label: "Inquiries", value: "15", color: "#2980b9" },
              { icon: "✅", label: "Active Listings", value: "1", color: "#27ae60" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card" style={{ background: "white", borderRadius: "14px", padding: "20px", border: "1.5px solid #ece9e0" }}>
                <span style={{ fontSize: "24px" }}>{stat.icon}</span>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fontWeight: 700, color: stat.color, margin: "8px 0 4px" }}>{stat.value}</p>
                <p style={{ fontSize: "12px", color: "#888" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscription Status */}
          <div style={{ background: "linear-gradient(135deg, #0f4423, #1a6e3c, #2d8f55, #0f4423)", backgroundSize: "300% 300%", animation: "gradientShift 4s ease infinite", borderRadius: "16px", padding: "20px 24px", marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", marginBottom: "4px" }}>Current Plan</p>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "white", fontWeight: 700 }}>Monthly Subscription</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px" }}>Renews on June 18, 2026 · GHS 50/month</p>
            </div>
            <button className="btn-primary" style={{ padding: "10px 20px", borderRadius: "10px", background: "#d4a017", color: "white", border: "none", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
              Upgrade to Annual →
            </button>
          </div>

          {/* My Listings */}
          <div style={{ background: "white", borderRadius: "16px", border: "1.5px solid #ece9e0", overflow: "hidden", marginBottom: "28px" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #ece9e0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a" }}>My Listings</h2>
              <button className="btn-primary" style={{ padding: "10px 18px", borderRadius: "10px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
                ➕ Add New Hostel
              </button>
            </div>

            {hostels.map((hostel) => (
              <div key={hostel.id} className="hostel-row" style={{ padding: "20px 24px", borderBottom: "1px solid #ece9e0", display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, #c8e6d4, #a8d5b8)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>🏠</div>
                <div style={{ flex: 1, minWidth: "180px" }}>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a1a", marginBottom: "4px" }}>{hostel.name}</p>
                  <p style={{ fontSize: "12px", color: "#888" }}>📍 {hostel.area} · Near {hostel.school}</p>
                </div>
                <div style={{ textAlign: "center", minWidth: "80px" }}>
                  <p style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fontWeight: 700, color: "#1a6e3c" }}>{hostel.price}</p>
                  <p style={{ fontSize: "11px", color: "#aaa" }}>per semester</p>
                </div>
                <div style={{ textAlign: "center", minWidth: "60px" }}>
                  <p style={{ fontWeight: 700, color: "#333", fontSize: "16px" }}>{hostel.views}</p>
                  <p style={{ fontSize: "11px", color: "#aaa" }}>views</p>
                </div>
                <div style={{ textAlign: "center", minWidth: "60px" }}>
                  <p style={{ fontWeight: 700, color: "#333", fontSize: "16px" }}>{hostel.inquiries}</p>
                  <p style={{ fontSize: "11px", color: "#aaa" }}>inquiries</p>
                </div>
                <div>
                  <span style={{ padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: 600, background: hostel.status === "Active" ? "#f0f8f3" : "#fff8e6", color: hostel.status === "Active" ? "#1a6e3c" : "#d4a017" }}>
                    {hostel.status === "Active" ? "✅" : "⏳"} {hostel.status}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button className="btn-primary" style={{ padding: "8px 14px", borderRadius: "8px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 600, fontSize: "12px", cursor: "pointer" }}>Edit</button>
                  <button className="btn-danger" style={{ padding: "8px 14px", borderRadius: "8px", background: "#e74c3c", color: "white", border: "none", fontWeight: 600, fontSize: "12px", cursor: "pointer" }}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Hostel Form */}
          <div style={{ background: "white", borderRadius: "16px", border: "1.5px solid #ece9e0", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #ece9e0" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a" }}>➕ Add New Hostel</h2>
              <p style={{ color: "#888", fontSize: "13px", marginTop: "4px" }}>Fill in the details to list your hostel</p>
            </div>
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Hostel Name</label>
                  <input className="input-field" type="text" placeholder="e.g. Bright Students Hostel" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Nearest University</label>
                  <select className="input-field" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }}>
                    <option value="">Select university</option>
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
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Area / Location</label>
                  <input className="input-field" type="text" placeholder="e.g. Ayeduase, Kumasi" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Price per Semester (GHS)</label>
                  <input className="input-field" type="number" placeholder="e.g. 1200" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Room Type</label>
                  <select className="input-field" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }}>
                    <option>Single & Double</option>
                    <option>Single only</option>
                    <option>Double only</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Contact Phone</label>
                  <input className="input-field" type="tel" placeholder="e.g. 0244 123 456" style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Description</label>
                <textarea className="input-field" placeholder="Describe your hostel — security, environment, distance to campus..." style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8", minHeight: "100px", resize: "vertical" }} />
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "12px" }}>Amenities</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {Object.entries(amenityIcons).map(([name, icon]) => (
                    <label key={name} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", border: "1.5px solid #e5e2d8", borderRadius: "8px", cursor: "pointer", fontSize: "13px", color: "#555", background: "#fafaf8" }}>
                      <input type="checkbox" style={{ accentColor: "#1a6e3c" }} /> {icon} {name}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Upload Photos</label>
                <div style={{ border: "2px dashed #e5e2d8", borderRadius: "10px", padding: "32px", textAlign: "center", background: "#fafaf8", cursor: "pointer" }}>
                  <span style={{ fontSize: "32px", display: "block", marginBottom: "8px" }}>📷</span>
                  <p style={{ color: "#888", fontSize: "14px" }}>Click to upload hostel photos</p>
                  <p style={{ color: "#aaa", fontSize: "12px", marginTop: "4px" }}>PNG, JPG up to 5MB each</p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", paddingTop: "8px" }}>
                <button style={{ padding: "12px 24px", borderRadius: "10px", border: "1.5px solid #e5e2d8", background: "white", color: "#555", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>Save Draft</button>
                <button className="btn-primary" style={{ padding: "12px 28px", borderRadius: "10px", background: "#1a6e3c", color: "white", border: "none", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>
                  Submit Listing →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <footer style={{ background: "#0f1a13", color: "rgba(255,255,255,0.5)", padding: "24px 5%", textAlign: "center", marginTop: "40px" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "white" }}>Hosta</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "#d4a017" }}> Ghana</span>
        <p style={{ fontSize: "13px", marginTop: "8px" }}>© 2026 Hosta Ghana. All rights reserved. 🇬🇭</p>
      </footer>
    </main>
  );
}
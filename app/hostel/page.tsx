"use client";
import { useState } from "react";

export default function HostelDetail() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Ama K.", school: "KNUST", rating: 5, comment: "Very clean and secure. The WiFi is fast and the caretaker is friendly. Highly recommend!", date: "March 2026" },
    { name: "Kofi A.", school: "KNUST", rating: 4, comment: "Good hostel overall. Water supply is consistent. A bit far from the main gate but worth it.", date: "February 2026" },
    { name: "Abena M.", school: "KNUST", rating: 5, comment: "Best hostel I've stayed in near KNUST. Very affordable for what you get!", date: "January 2026" },
  ]);

  const amenities = [
    { icon: "📶", name: "WiFi", available: true },
    { icon: "🔒", name: "24/7 Security", available: true },
    { icon: "💧", name: "Running Water", available: true },
    { icon: "❄️", name: "Air Conditioning", available: false },
    { icon: "🧺", name: "Laundry", available: true },
    { icon: "🍳", name: "Kitchen", available: false },
    { icon: "🚗", name: "Parking", available: true },
    { icon: "📚", name: "Study Room", available: true },
  ];

  const topHostels = [
    { rank: 1, name: "Bright Students Hostel", school: "KNUST", rating: 4.8, reviews: 47, badge: "🥇" },
    { rank: 2, name: "Royal Gate Hostel", school: "UG", rating: 4.6, reviews: 38, badge: "🥈" },
    { rank: 3, name: "Cape View Lodge", school: "UCC", rating: 4.5, reviews: 29, badge: "🥉" },
    { rank: 4, name: "Legon Heights", school: "UG", rating: 4.3, reviews: 22, badge: "4️⃣" },
    { rank: 5, name: "Sunrise Hostel", school: "GIMPA", rating: 4.2, reviews: 18, badge: "5️⃣" },
  ];

  const avgRating = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;

  const handleReviewSubmit = () => {
    if (!rating || !reviewText || !reviewName) return;
    setReviews([{ name: reviewName, school: "KNUST", rating, comment: reviewText, date: "May 2026" }, ...reviews]);
    setSubmitted(true);
    setRating(0);
    setReviewText("");
    setReviewName("");
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f7f6f2", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Fraunces:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .btn-primary:hover { background: #155c32; transform: translateY(-1px); }
        .btn-primary { transition: all 0.15s ease; }
        .btn-outline:hover { background: #1a6e3c; color: white; }
        .btn-outline { transition: all 0.2s ease; }
        .tag { background: rgba(26,110,60,0.1); color: #1a6e3c; font-size: 12px; padding: 4px 10px; border-radius: 20px; font-weight: 500; }
        .amenity-row:hover { background: #f0f8f3; }
        .amenity-row { transition: background 0.15s; }
        .star { cursor: pointer; transition: transform 0.1s ease; font-size: 32px; }
        .star:hover { transform: scale(1.2); }
        .rank-row:hover { background: #f0f8f3; }
        .rank-row { transition: background 0.15s; }
        .input-field:focus { border-color: #1a6e3c; outline: none; box-shadow: 0 0 0 3px rgba(26,110,60,0.12); }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .slide-in { animation: slideIn 0.4s ease forwards; }
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
          <a href="/login" style={{ padding: "8px 20px", borderRadius: "8px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Log in</a>
          <a href="/signup" style={{ padding: "8px 20px", borderRadius: "8px", background: "#1a6e3c", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>Sign up</a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 5%", fontSize: "13px", color: "#888" }}>
        <a href="/" style={{ color: "#1a6e3c", textDecoration: "none" }}>Home</a> → <a href="/listings" style={{ color: "#1a6e3c", textDecoration: "none" }}>Listings</a> → Bright Students Hostel
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5% 60px" }}>

        {/* Photo Gallery */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px", marginBottom: "32px", borderRadius: "20px", overflow: "hidden", height: "360px" }}>
          <div style={{ background: "linear-gradient(135deg, #c8e6d4, #7fc9a0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px" }}>🏠</div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "12px" }}>
            <div style={{ background: "linear-gradient(135deg, #a8d5b8, #5ca87a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", borderRadius: "8px" }}>🛏️</div>
            <div style={{ background: "linear-gradient(135deg, #d4e8da, #8dc4a3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px", borderRadius: "8px", position: "relative" }}>
              🚿
              <div style={{ position: "absolute", bottom: "10px", right: "10px", background: "rgba(0,0,0,0.6)", color: "white", padding: "4px 10px", borderRadius: "20px", fontSize: "12px" }}>+4 photos</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "32px", alignItems: "start" }}>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Title */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <span className="tag">Near KNUST</span>
                <span className="tag">Ayeduase, Kumasi</span>
                <span style={{ background: "#f0f8f3", color: "#1a6e3c", fontSize: "12px", padding: "4px 10px", borderRadius: "20px", fontWeight: 600 }}>✅ Verified</span>
              </div>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "32px", color: "#1a1a1a", marginBottom: "8px" }}>Bright Students Hostel</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "14px", color: "#888" }}>📍 Ayeduase — 5 min walk to KNUST main gate</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>⭐ {avgRating.toFixed(1)} <span style={{ color: "#888", fontWeight: 400 }}>({reviews.length} reviews)</span></span>
              </div>
            </div>

            {/* Key Info */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {[{ icon: "🛏️", label: "Room Type", value: "Single & Double" }, { icon: "👥", label: "Occupancy", value: "1–2 persons" }, { icon: "📐", label: "Room Size", value: "~18 sqm" }].map((info) => (
                <div key={info.label} style={{ background: "white", borderRadius: "12px", padding: "16px", border: "1.5px solid #ece9e0", textAlign: "center" }}>
                  <span style={{ fontSize: "24px", display: "block", marginBottom: "8px" }}>{info.icon}</span>
                  <p style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>{info.label}</p>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{info.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a", marginBottom: "16px" }}>About this hostel</h2>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8 }}>Bright Students Hostel is a well-maintained student accommodation located just 5 minutes walk from the KNUST main gate. The hostel offers clean, spacious rooms with consistent water supply and fast WiFi. Our on-site security team operates 24/7 to ensure your safety.</p>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8, marginTop: "12px" }}>Each room comes furnished with a bed, study desk, wardrobe, and ceiling fan. Shared bathrooms are cleaned twice daily.</p>
            </div>

            {/* Amenities */}
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a", marginBottom: "16px" }}>Amenities</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {amenities.map((a) => (
                  <div key={a.name} className="amenity-row" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px" }}>
                    <span style={{ fontSize: "20px" }}>{a.icon}</span>
                    <span style={{ fontSize: "14px", color: a.available ? "#1a1a1a" : "#bbb", textDecoration: a.available ? "none" : "line-through" }}>{a.name}</span>
                    <span style={{ marginLeft: "auto", color: a.available ? "#1a6e3c" : "#ddd", fontSize: "16px" }}>{a.available ? "✓" : "✗"}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a" }}>Student Reviews</h2>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fontWeight: 700 }}>{avgRating.toFixed(1)}</span>
                  <div>
                    <p style={{ color: "#d4a017" }}>{"⭐".repeat(Math.round(avgRating))}</p>
                    <p style={{ fontSize: "12px", color: "#888" }}>{reviews.length} reviews</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {reviews.map((review, i) => (
                  <div key={i} className="slide-in" style={{ padding: "16px", border: "1.5px solid #ece9e0", borderRadius: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "38px", height: "38px", background: "#1a6e3c", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "14px" }}>{review.name[0]}</div>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>{review.name}</p>
                          <p style={{ fontSize: "12px", color: "#888" }}>{review.school} · {review.date}</p>
                        </div>
                      </div>
                      <span style={{ color: "#d4a017", fontSize: "14px" }}>{"⭐".repeat(review.rating)}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ⭐ Rate This Hostel */}
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a", marginBottom: "6px" }}>⭐ Rate This Hostel</h2>
              <p style={{ fontSize: "14px", color: "#888", marginBottom: "20px" }}>Have you stayed here? Share your experience to help other students!</p>

              {submitted ? (
                <div className="slide-in" style={{ background: "#f0f8f3", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
                  <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>🎉</span>
                  <p style={{ fontWeight: 700, color: "#1a6e3c", fontSize: "16px" }}>Thank you for your review!</p>
                  <p style={{ color: "#888", fontSize: "14px", marginTop: "6px" }}>Your rating helps other students find great hostels.</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: "14px", padding: "8px 20px", borderRadius: "8px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", background: "white", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>Write another review</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#444", marginBottom: "10px" }}>Your Rating</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="star" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} style={{ color: star <= (hoverRating || rating) ? "#d4a017" : "#ddd" }}>★</span>
                      ))}
                    </div>
                    {rating > 0 && <p style={{ fontSize: "12px", color: "#1a6e3c", marginTop: "6px", fontWeight: 600 }}>{["", "Poor", "Fair", "Good", "Very Good", "Excellent!"][rating]}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Your Name</label>
                    <input className="input-field" type="text" placeholder="e.g. Kwame A." value={reviewName} onChange={(e) => setReviewName(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Your Review</label>
                    <textarea className="input-field" placeholder="Share your experience — cleanliness, security, water supply, WiFi, value for money..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8", minHeight: "100px", resize: "vertical" }} />
                  </div>
                  <button className="btn-primary" onClick={handleReviewSubmit} style={{ padding: "13px", background: rating && reviewText && reviewName ? "#1a6e3c" : "#ccc", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: rating && reviewText && reviewName ? "pointer" : "not-allowed" }}>
                    Submit Review ⭐
                  </button>
                </div>
              )}
            </div>

            {/* 🏆 Hostel Leaderboard */}
            <div style={{ background: "white", borderRadius: "16px", border: "1.5px solid #ece9e0", overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(135deg, #d4a017, #f0c040)", padding: "20px 24px" }}>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", color: "white", marginBottom: "4px" }}>🏆 Top Rated Hostels</h2>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>Ranked by student ratings across Ghana</p>
              </div>
              <div>
                {topHostels.map((h) => (
                  <div key={h.rank} className="rank-row" style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px", borderBottom: "1px solid #ece9e0" }}>
                    <span style={{ fontSize: "24px", minWidth: "32px" }}>{h.badge}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a1a1a" }}>{h.name}</p>
                      <p style={{ fontSize: "12px", color: "#888" }}>Near {h.school} · {h.reviews} reviews</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", fontWeight: 700, color: h.rank === 1 ? "#d4a017" : "#1a6e3c" }}>{h.rating}</p>
                      <p style={{ fontSize: "11px", color: "#d4a017" }}>{"⭐".repeat(Math.round(h.rating))}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px 24px", background: "#fafaf8", textAlign: "center" }}>
                <p style={{ fontSize: "13px", color: "#888" }}>Rankings update daily based on student reviews 🇬🇭</p>
              </div>
            </div>

            {/* 💬 Platform Feedback */}
            <div style={{ background: "white", borderRadius: "16px", padding: "24px", border: "1.5px solid #ece9e0" }}>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", color: "#1a1a1a", marginBottom: "6px" }}>💬 Give Us Feedback</h2>
              <p style={{ fontSize: "14px", color: "#888", marginBottom: "20px" }}>Help us improve Hosta Ghana! Share your thoughts, suggestions or report an issue.</p>

              {feedbackSubmitted ? (
                <div className="slide-in" style={{ background: "#f0f8f3", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
                  <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>🙏</span>
                  <p style={{ fontWeight: 700, color: "#1a6e3c", fontSize: "16px" }}>Thank you for your feedback!</p>
                  <p style={{ color: "#888", fontSize: "14px", marginTop: "6px" }}>We read every message and use it to improve the platform.</p>
                  <button onClick={() => setFeedbackSubmitted(false)} style={{ marginTop: "14px", padding: "8px 20px", borderRadius: "8px", border: "1.5px solid #1a6e3c", color: "#1a6e3c", background: "white", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>Send another</button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {["💡 Suggestion", "🐛 Report a bug", "🙏 General feedback", "❤️ I love Hosta!"].map((tag) => (
                      <button key={tag} style={{ padding: "6px 14px", borderRadius: "20px", border: "1.5px solid #e5e2d8", background: "#fafaf8", fontSize: "13px", color: "#555", cursor: "pointer", fontWeight: 500 }}>{tag}</button>
                    ))}
                  </div>
                  <textarea className="input-field" placeholder="Write your feedback here... We'd love to hear from you!" value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", background: "#fafaf8", minHeight: "100px", resize: "vertical" }} />
                  <button className="btn-primary" onClick={() => { if (feedbackText) setFeedbackSubmitted(true); }} style={{ padding: "13px", background: feedbackText ? "#1a6e3c" : "#ccc", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: feedbackText ? "pointer" : "not-allowed" }}>
                    Send Feedback 💬
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right Column — Booking Card */}
          <div style={{ position: "sticky", top: "88px" }}>
            <div style={{ background: "white", borderRadius: "20px", border: "1.5px solid #ece9e0", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
              <div style={{ background: "linear-gradient(135deg, #0f4423, #1a6e3c)", padding: "20px 24px" }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", marginBottom: "4px" }}>Price per semester</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "36px", color: "white", fontWeight: 700 }}>GHS 1,200</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", marginTop: "4px" }}>Single room · per semester</p>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Room Type</label>
                  <select style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }}>
                    <option>Single Room — GHS 1,200</option>
                    <option>Double Room — GHS 800/person</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 600, color: "#444", display: "block", marginBottom: "6px" }}>Semester</label>
                  <select style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e5e2d8", borderRadius: "10px", fontSize: "14px", color: "#333", background: "#fafaf8" }}>
                    <option>First Semester 2026</option>
                    <option>Second Semester 2026</option>
                  </select>
                </div>
                <button className="btn-primary" style={{ width: "100%", padding: "14px", background: "#1a6e3c", color: "white", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>📩 Send Enquiry</button>
                <button className="btn-outline" style={{ width: "100%", padding: "12px", background: "white", color: "#1a6e3c", border: "1.5px solid #1a6e3c", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>📞 Call Manager</button>
                <div style={{ borderTop: "1px solid #ece9e0", paddingTop: "16px" }}>
                  <p style={{ fontSize: "13px", color: "#888", marginBottom: "10px", fontWeight: 600 }}>Manager Info</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "40px", height: "40px", background: "#f0f8f3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>👤</div>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>Kwame Mensah</p>
                      <p style={{ fontSize: "12px", color: "#1a6e3c" }}>✅ Verified Manager</p>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#f0f8f3", borderRadius: "10px", padding: "12px", fontSize: "12px", color: "#555", lineHeight: 1.6 }}>
                  🛡️ Your enquiry is safe. We never share your contact details without your permission.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer style={{ background: "#0f1a13", color: "rgba(255,255,255,0.5)", padding: "32px 5%", textAlign: "center" }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "white" }}>Hosta</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "16px", color: "#d4a017" }}> Ghana</span>
        <p style={{ fontSize: "13px", marginTop: "8px" }}>© 2026 Hosta Ghana. All rights reserved. 🇬🇭</p>
      </footer>
    </main>
  );
}
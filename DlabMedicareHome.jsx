import { useState } from "react";
import { Phone, MapPin, Mail, FlaskConical, TestTube, Microscope, Droplet, Activity, Beaker } from "lucide-react";

const services = [
  { name: "Haematology", desc: "Full blood count and related blood work.", Icon: TestTube },
  { name: "Clinical chemistry", desc: "Blood sugar, lipid profile, liver and kidney function.", Icon: Beaker },
  { name: "Microbiology", desc: "Bacterial, fungal and other microbial analyses.", Icon: Microscope },
  { name: "Immunology", desc: "Hormone assays, immunoglobulins and more.", Icon: Activity },
  { name: "Serology", desc: "Infectious disease screening and antibody testing.", Icon: FlaskConical },
  { name: "Urinalysis", desc: "Routine and specialist urine analysis.", Icon: Droplet },
];

export default function DlabMedicareHome() {
  const [testName, setTestName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [sent, setSent] = useState(false);

  const whatsappNumber = "2348087055229";
  const waMessage = encodeURIComponent(
    `Hi DLAB Medicare, I'd like to book a test.\nName: ${testName}\nPhone: ${phone}\nTest needed: ${service || "not specified"}`
  );

  function handleBook(e) {
    e.preventDefault();
    if (!testName.trim() || !phone.trim()) return;
    setSent(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${waMessage}`, "_blank");
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#233229", background: "#FBFAF6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');
        .display { font-family: 'Fraunces', serif; }
      `}</style>

      {/* Nav */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px", borderBottom: "1px solid #E4E0D4" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg,#0B2E5C,#1F7A3D)" }} />
          <div>
            <div className="display" style={{ fontSize: 18, fontWeight: 600, color: "#0B2E5C", lineHeight: 1 }}>DLAB Medicare</div>
            <div style={{ fontSize: 11, color: "#6B7A70" }}>Services Limited</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 28, fontSize: 14, color: "#3F4A44" }}>
          <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>Services</a>
          <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>About</a>
          <a href="#book" style={{ textDecoration: "none", color: "inherit" }}>Book a test</a>
          <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</a>
        </nav>
        <a href="#book" style={{ background: "#0B2E5C", color: "#fff", padding: "9px 18px", borderRadius: 6, fontSize: 14, textDecoration: "none" }}>Book a test</a>
      </header>

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, padding: "72px 32px 56px", maxWidth: 1180, margin: "0 auto", alignItems: "center" }}>
        <div>
          <p style={{ color: "#1F7A3D", fontSize: 14, marginBottom: 14, fontWeight: 500 }}>Ibadan, Oyo State</p>
          <h1 className="display" style={{ fontSize: 46, lineHeight: 1.12, color: "#0B2E5C", fontWeight: 500, margin: 0, maxWidth: 480 }}>
            Lab results people can actually trust.
          </h1>
          <p style={{ fontSize: 17, color: "#4A554F", marginTop: 20, maxWidth: 440, lineHeight: 1.6 }}>
            DLAB Medicare runs accurate, timely diagnostic testing across haematology, chemistry, microbiology and more &mdash; read by clinicians, delivered to you.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
            <a href="#book" style={{ background: "#1F7A3D", color: "#fff", padding: "13px 24px", borderRadius: 6, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Book a test</a>
            <a href="tel:08087055229" style={{ border: "1px solid #C9D2CB", color: "#0B2E5C", padding: "13px 24px", borderRadius: 6, textDecoration: "none", fontSize: 15 }}>Call 0808 705 5229</a>
          </div>
        </div>
        <svg viewBox="0 0 380 340" style={{ width: "100%", height: "auto" }}>
          <rect x="20" y="200" width="340" height="120" rx="16" fill="#0B2E5C" opacity="0.06" />
          {[0, 1, 2, 3, 4].map((i) => {
            const colors = ["#0B2E5C", "#1F7A3D", "#8B2E3F", "#0B2E5C", "#1F7A3D"];
            const x = 55 + i * 56;
            const h = 90 + (i % 3) * 30;
            return (
              <g key={i}>
                <rect x={x} y={260 - h} width="30" height={h} rx="8" fill="#fff" stroke="#D7DCD3" strokeWidth="1.5" />
                <rect x={x} y={260 - h * 0.4} width="30" height={h * 0.4} rx="8" fill={colors[i]} opacity="0.85" />
                <rect x={x - 4} y={260 - h - 14} width="38" height="16" rx="4" fill="#233229" opacity="0.85" />
              </g>
            );
          })}
        </svg>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "40px 32px 72px", maxWidth: 1180, margin: "0 auto" }}>
        <h2 className="display" style={{ fontSize: 28, color: "#0B2E5C", fontWeight: 500, marginBottom: 8 }}>Our laboratory services</h2>
        <p style={{ color: "#6B7A70", marginBottom: 36, fontSize: 15 }}>Six core areas of diagnostic testing, run in-house.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map(({ name, desc, Icon }) => (
            <div key={name} style={{ border: "1px solid #E4E0D4", borderRadius: 10, padding: 22, background: "#fff" }}>
              <Icon size={22} color="#1F7A3D" strokeWidth={1.75} />
              <div style={{ fontSize: 16, fontWeight: 600, color: "#0B2E5C", marginTop: 14 }}>{name}</div>
              <div style={{ fontSize: 14, color: "#5B6B60", marginTop: 6, lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Book a test */}
      <section id="book" style={{ background: "#0B2E5C", padding: "56px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 className="display" style={{ fontSize: 26, color: "#fff", fontWeight: 500, marginBottom: 8 }}>Book a test</h2>
          <p style={{ color: "#B9C6D6", fontSize: 14, marginBottom: 28 }}>
            Send us your details and we'll confirm your appointment or home sample pickup over WhatsApp.
          </p>
          {sent ? (
            <div style={{ background: "#12406E", borderRadius: 10, padding: 24, color: "#fff" }}>
              Opening WhatsApp with your request &mdash; if it didn't open, message us directly at 0808 705 5229.
            </div>
          ) : (
            <form onSubmit={handleBook} style={{ display: "grid", gap: 14, background: "#12406E", padding: 24, borderRadius: 10 }}>
              <div>
                <label style={{ fontSize: 13, color: "#B9C6D6" }}>Full name</label>
                <input value={testName} onChange={(e) => setTestName(e.target.value)} placeholder="Your name"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #2B5686", marginTop: 4, background: "#0E3560", color: "#fff", fontSize: 14 }} />
              </div>
              <div>
                <label style={{ fontSize: 13, color: "#B9C6D6" }}>Phone number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0803..."
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #2B5686", marginTop: 4, background: "#0E3560", color: "#fff", fontSize: 14 }} />
              </div>
              <div>
                <label style={{ fontSize: 13, color: "#B9C6D6" }}>Test needed (optional)</label>
                <select value={service} onChange={(e) => setService(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: 6, border: "1px solid #2B5686", marginTop: 4, background: "#0E3560", color: "#fff", fontSize: 14 }}>
                  <option value="">Not sure yet</option>
                  {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <button type="submit" style={{ background: "#1F7A3D", color: "#fff", border: "none", padding: "12px 20px", borderRadius: 6, fontSize: 15, fontWeight: 500, cursor: "pointer", marginTop: 6 }}>
                Send booking request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact / footer */}
      <footer id="contact" style={{ padding: "44px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, maxWidth: 1180, margin: "0 auto", fontSize: 14 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Phone size={18} color="#1F7A3D" style={{ marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 600, color: "#0B2E5C" }}>Call or WhatsApp</div>
            <div style={{ color: "#5B6B60" }}>0808 705 5229</div>
            <div style={{ color: "#5B6B60" }}>0803 994 0001</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Mail size={18} color="#1F7A3D" style={{ marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 600, color: "#0B2E5C" }}>Email</div>
            <div style={{ color: "#5B6B60" }}>info@dlabmedicare.com</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <MapPin size={18} color="#1F7A3D" style={{ marginTop: 2 }} />
          <div>
            <div style={{ fontWeight: 600, color: "#0B2E5C" }}>Visit us</div>
            <div style={{ color: "#5B6B60" }}>SW9/4343 Alhaji Ibrahim Layout,<br />Opposite New Garage, Owode Apata,<br />Ibadan, Oyo State</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

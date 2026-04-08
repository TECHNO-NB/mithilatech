import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Server,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Code2,
  Zap,
  Shield,
  Star,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
  Clock,
  User,
  CheckCircle,
  TrendingUp,
  Layers,
  Monitor,
} from "lucide-react";
import "../App.css";
import About from "./About";

const NAV_LINKS = ["Home", "About", "Services", "Products", "Blogs", "Contact"];

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, high-performance websites built with modern frameworks. From landing pages to complex web applications.",
    color: "#00D4FF",
    tag: "Web",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android that users love.",
    color: "#FF6B35",
    tag: "Mobile",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that put you on top of search results and keep you there.",
    color: "#00FF88",
    tag: "Growth",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Full-funnel digital marketing campaigns that convert visitors into loyal customers.",
    color: "#FFD700",
    tag: "Marketing",
  },
  {
    icon: Server,
    title: "Web Hosting",
    desc: "Reliable, fast, and secure hosting solutions with 99.9% uptime guarantee.",
    color: "#C084FC",
    tag: "Infrastructure",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed with user psychology and conversion in mind.",
    color: "#F472B6",
    tag: "Design",
  },
];

const BLOGS = [
  {
    title: "Why Every Nepali Business Needs a Website in 2024",
    date: "Dec 15, 2024",
    read: "5 min read",
    tag: "Web Dev",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    title: "SEO Strategies That Actually Work for Local Businesses",
    date: "Nov 28, 2024",
    read: "7 min read",
    tag: "SEO",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80",
  },
  {
    title: "Mobile-First: Why Your App Strategy Matters More Than Ever",
    date: "Nov 10, 2024",
    read: "4 min read",
    tag: "Mobile",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
  },
];

const STATS = [
  { val: "150+", label: "Projects Delivered" },
  { val: "98%", label: "Client Satisfaction" },
  { val: "5+", label: "Years Experience" },
  { val: "50+", label: "Happy Clients" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Syne', sans-serif",
        background: "#050A14",
        color: "#E8EDF5",
        overflowX: "hidden",
      }}
    >
      <style>{`
     
      `}</style>

      {/* Hero */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 800,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(255,107,53,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Grid lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <motion.div
          style={{
            y: heroY,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "100px 40px 60px",
            position: "relative",
            zIndex: 2,
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00D4FF",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 13,
                color: "#00D4FF",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              NOW SERVING BHAKTAPUR & BEYOND
            </span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              maxWidth: 900,
              marginBottom: 28,
            }}
          >
            Digital Solutions
            <br />
            <span className="glow-text">Built for Nepal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#7A8499",
              maxWidth: 560,
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            Mithilatech & IT Solutions crafts powerful websites, mobile apps,
            and digital marketing strategies that help your business grow in
            today's competitive market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollTo("services")}
              style={{
                padding: "16px 36px",
                borderRadius: 10,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Explore Services <ArrowRight size={18} />
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollTo("contact")}
              style={{ padding: "16px 36px", borderRadius: 10, fontSize: 16 }}
            >
              Talk to Us
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: "flex",
              gap: 48,
              marginTop: 80,
              flexWrap: "wrap",
            }}
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    className: "glow-text",
                    background: "linear-gradient(135deg, #00D4FF, #C084FC)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#5A6478",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            opacity: 0.4,
          }}
          onClick={() => scrollTo("about")}
        >
          <ChevronDown size={28} color="#00D4FF" />
        </motion.div>
      </section>

      {/* About */}
         <About/>

      {/* Services */}
      <section
        id="services"
        style={{ padding: "120px 40px", background: "rgba(255,255,255,0.015)" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 72 }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#00D4FF",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              What We Do
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 20,
              }}
            >
              Services That <span className="glow-text">Drive Growth</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#7A8499",
                fontSize: 17,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              From digital strategy to execution — we cover every touchpoint of
              your online presence.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, borderColor: s.color + "44" }}
                style={{
                  padding: 36,
                  borderRadius: 20,
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${s.color}12 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <s.icon size={24} color={s.color} />
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      color: s.color,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: `${s.color}12`,
                      padding: "4px 10px",
                      borderRadius: 100,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#6A7385",
                    fontSize: 15,
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
                <motion.div
                  whileHover={{ x: 4 }}
                  style={{
                    marginTop: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: s.color,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={() => scrollTo("contact")}
                >
                  Learn more <ArrowRight size={14} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products / Why Us banner */}
      <section id="products" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 72 }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#C084FC",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Our Products
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Why Choose{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C084FC, #FF6B35)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mithilatech?
              </span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 2,
            }}
          >
            {[
              {
                num: "01",
                title: "Custom Solutions",
                desc: "No templates, no shortcuts. Every solution is architected specifically for your business goals.",
              },
              {
                num: "02",
                title: "Local Expertise",
                desc: "We understand Nepal's market, culture, and digital landscape better than anyone.",
              },
              {
                num: "03",
                title: "Post-Launch Support",
                desc: "We're with you long after launch — monitoring, optimizing, and scaling your digital assets.",
              },
              {
                num: "04",
                title: "Affordable Excellence",
                desc: "World-class quality at prices that make sense for Nepali businesses of all sizes.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ background: "rgba(255,255,255,0.06)" }}
                style={{
                  padding: "48px 36px",
                  borderRadius: 0,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    fontSize: 56,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {item.num}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#5A6478",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section
        id="blogs"
        style={{ padding: "120px 40px", background: "rgba(255,255,255,0.015)" }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 64,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "#00FF88",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Insights
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Latest from
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #00FF88, #00D4FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  our blog
                </span>
              </h2>
            </div>
            <button
              className="btn-outline"
              style={{
                padding: "12px 28px",
                borderRadius: 8,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View All <ExternalLink size={14} />
            </button>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {BLOGS.map((b, i) => (
              <motion.div
                key={i}
                className="glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s",
                }}
              >
                <div
                  style={{
                    height: 200,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={b.img}
                    alt={b.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "rgba(0,255,136,0.15)",
                      border: "1px solid rgba(0,255,136,0.3)",
                      borderRadius: 100,
                      padding: "4px 12px",
                      fontSize: 11,
                      color: "#00FF88",
                      fontWeight: 700,
                    }}
                  >
                    {b.tag}
                  </div>
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      marginBottom: 16,
                    }}
                  >
                    {b.title}
                  </h3>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "#5A6478",
                      }}
                    >
                      <Clock size={13} /> {b.date}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: "#5A6478",
                      }}
                    >
                      <User size={13} /> {b.read}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 72 }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#FF6B35",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Get In Touch
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}
            >
              Ready to Build
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B35, #FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Something Great?
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#7A8499",
                fontSize: 17,
              }}
            >
              Reach out and let's discuss your project.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  val: "Suryabinayak, Bhaktapur, Nepal",
                  color: "#FF6B35",
                },
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  val: "+977 9829705977",
                  color: "#00D4FF",
                  href: "https://wa.me/9779829705977",
                },
                {
                  icon: Mail,
                  label: "Email",
                  val: "info@mithilatech.com.np",
                  color: "#C084FC",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass"
                  whileHover={{ x: 6, borderColor: item.color + "44" }}
                  style={{
                    padding: "24px 28px",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    transition: "all 0.3s",
                    cursor: item.href ? "pointer" : "default",
                  }}
                  onClick={() => item.href && window.open(item.href, "_blank")}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={20} color={item.color} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#5A6478",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 16,
                        color: "#C8D0DC",
                        fontWeight: 500,
                      }}
                    >
                      {item.val}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="glass"
                whileHover={{ borderColor: "rgba(0,212,255,0.3)" }}
                style={{
                  padding: "24px 28px",
                  borderRadius: 16,
                  transition: "all 0.3s",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    color: "#5A6478",
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  FOLLOW US
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, background: "rgba(0,212,255,0.15)" }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    >
                      <Icon size={18} color="#7A8499" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="glass"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ padding: "44px 44px", borderRadius: 24 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "0 40px 80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(192,132,252,0.12) 50%, rgba(255,107,53,0.08) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            padding: "72px 60px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16,
              position: "relative",
            }}
          >
            Start Your Digital Journey <span className="glow-text">Today</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A8499",
              fontSize: 17,
              marginBottom: 40,
              position: "relative",
            }}
          >
            Let's build something that makes your competitors wish they called
            us first.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <motion.a
              href="https://wa.me/9779829705977"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "16px 40px",
                borderRadius: 10,
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              WhatsApp Us Now <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "48px 40px 32px",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "linear-gradient(135deg, #00D4FF, #C084FC)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={17} color="#050A14" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800 }}>
                  Mithilatech & IT Solutions
                </div>
                <div style={{ fontSize: 10, color: "#5A6478" }}>
                  Suryabinayak, Bhaktapur, Nepal
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l.toLowerCase())}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#5A6478",
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: "'Syne', sans-serif",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#E8EDF5")}
                  onMouseLeave={(e) => (e.target.style.color = "#5A6478")}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#3A4258",
              }}
            >
              © 2024 Mithilatech & IT Solutions. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#3A4258",
              }}
            >
              Made with ♥ in Bhaktapur, Nepal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  if (sent)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: "center", padding: "40px 0" }}
      >
        <CheckCircle
          size={56}
          color="#00FF88"
          style={{ margin: "0 auto 20px" }}
        />
        <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>
          Message Sent!
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#7A8499" }}>
          We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", phone: "", message: "" });
          }}
          style={{
            marginTop: 24,
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#E8EDF5",
            padding: "10px 24px",
            borderRadius: 8,
            cursor: "pointer",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Send Another
        </button>
      </motion.div>
    );

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "14px 18px",
    color: "#E8EDF5",
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
        Send us a message
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <input
          style={inputStyle}
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
        <input
          style={inputStyle}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>
      <input
        style={inputStyle}
        placeholder="Phone / WhatsApp"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      <select style={{ ...inputStyle, cursor: "pointer" }}>
        {[
          "Select a Service",
          "Website Development",
          "App Development",
          "SEO Optimization",
          "Digital Marketing",
          "Web Hosting",
          "UI/UX Design",
        ].map((o) => (
          <option key={o} value={o} style={{ background: "#0D1421" }}>
            {o}
          </option>
        ))}
      </select>
      <textarea
        style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        onFocus={(e) => (e.target.style.borderColor = "#00D4FF")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
      />
      <motion.button
        className="btn-primary"
        onClick={handleSubmit}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          padding: "16px 32px",
          borderRadius: 10,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          width: "100%",
        }}
      >
        Send Message <ArrowRight size={18} />
      </motion.button>
    </div>
  );
}

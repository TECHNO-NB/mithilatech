// @ts-nocheck
"use client"

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

  ExternalLink,
  Clock,
  User,
  CheckCircle,
  TrendingUp,
  Layers,
  Monitor,
  StarHalf,
} from "lucide-react";
import "./App.css";
import About from "./about/page";
import Services from "./services/page";
import Products from "./products/page";
import BlogsShort from "./blogshort/page";
import Contact from "./contact/page";
import LandingPage from "@/components/LandingPage";


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

  const scrollTo = (id:string) => {
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
       <LandingPage/>

      {/* About */}
         <About/>

      {/* Services */}
        <Services/>

      {/* Products / Why Us banner */}
       <Products/>

      {/* Blogs */}
       <BlogsShort/>

      {/* Contact */}
       <Contact/>

      {/* CTA Banner */}
      <section style={{ padding: "0 25px 80px" }}>
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
            padding: "72px 25px",
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
    </div>
  );
}



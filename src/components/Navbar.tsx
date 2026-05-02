//@ts-nocheck
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/mithilatechlogo.jpeg";
import Image from "next/image";

// ── NAV ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const NAV_LINKS = [
    "Home",
    "About",
    "Services",
    "Products",
    "Blogs",
    "Contact",
  ];

  const handleNavigate = (link: string) => {
    const path = link.toLocaleLowerCase();
    if (path === "home") {
      navigate.push("/");
      setMenuOpen(false)
    } else {
      navigate.push(`/${path}`);
      setMenuOpen(false)
    }
  };

  const [activeSection, setActiveSection] = useState("/");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 25px" : "20px 25px",
          transition: "all 0.4s",
        }}
        className={scrolled ? "glass" : ""}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => navigate.push("/")}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: "linear-gradient(135deg, #00D4FF, #C084FC)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={logo} alt="Logo" className=" rounded-md" />
            </div>
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Mithila Tech
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#00D4FF",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                IT Solutions
              </div>
            </div>
          </motion.div>

          <div className="hide-mobile" style={{ display: "flex", gap: 8 }}>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavigate(link)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#A0A8B8",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "'Syne', sans-serif",
                  cursor: "pointer",
                  padding: "8px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s",
                }}
                whileHover={{
                  color: "#E8EDF5",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                {link}
              </motion.button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <motion.button
              className="btn-primary hide-mobile"
              onClick={() => handleNavigate("contact")}
              style={{ padding: "10px 24px", borderRadius: 8, fontSize: 14 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
            </motion.button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#E8EDF5",
                cursor: "pointer",
                padding: 8,
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              background: "#050A14",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavigate(link)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#E8EDF5",
                  fontSize: 28,
                  fontWeight: 800,
                  fontFamily: "'Syne', sans-serif",
                  cursor: "pointer",
                }}
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              className="btn-primary"
              onClick={() => handleNavigate("contact")}
              style={{
                padding: "14px 40px",
                borderRadius: 10,
                fontSize: 16,
                marginTop: 16,
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

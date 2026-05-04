// @ts-nocheck
"use client";
import React from "react";

import logo from "../../public/mithilatechlogo.jpeg";
import Image from "next/image";
import whatsapp from "../../public/whatsapp.png";
import { useRouter } from "next/navigation";

const NAV_LINKS = ["Home", "About", "Services", "Products", "Blogs", "Contact"];



const Footer = () => {
  const navigate =useRouter()
  const handleNavigate = (link: string) => {
    const path = link.toLocaleLowerCase();
    if (path === "home") {
      navigate.push("/");
    
    } else {
      navigate.push(`/${path}`);
    }
  };
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 25px 32px",
        background: "rgba(0,0,0,0.3)",
      }}
    >
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/9779849307841"
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          <Image
            src={whatsapp}
            alt="WhatsApp Support"
            className="w-10 h-10 drop-shadow-lg relative z-10"
          />
        </a>
      </div>

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
              <Image src={logo} alt="Logo" className=" rounded-md" />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800 }}>
                Mithila Tech & IT Solutions
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
                onClick={() => handleNavigate(l)}
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
            © 2026 Mithila Tech & IT Solutions. All rights reserved.
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
  );
};

export default Footer;

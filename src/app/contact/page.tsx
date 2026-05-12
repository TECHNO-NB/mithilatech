// @ts-nocheck
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  StarHalf,
} from "lucide-react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.service || !form.message) return;

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/contacts`,
      {
        ...form,
      },
    );

    if (res.data) {
      setSent(true);
    }
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
            setForm({
              fullName: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <input
          style={inputStyle}
          placeholder="Your Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
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
      <select
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        style={{ ...inputStyle, cursor: "pointer" }}
      >
        {[
          "Select a Service",
          "Website Development",
          "App Development",
          "SEO Optimization",
          "Digital Marketing",
          "Web Hosting",
          "Custom Software",
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

const page = () => {
  const [svgIcons, setSvgIcons] = useState([
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path></svg>',
  ]);
  return (
    <section id="contact" style={{ padding: "70px 25px" }}>
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
                color: "#00D4FF",
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
          className=" grid md:grid-cols-2"
          style={{
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
                val: "info@mithilatechsolutions.com",
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
                {svgIcons?.map((Icon, i) => (
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
                    <div
                      className="flex justify-center items-center"
                      dangerouslySetInnerHTML={{ __html: Icon }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="glass md:px-11 py-11"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ padding: "44px 25px", borderRadius: 24 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default page;

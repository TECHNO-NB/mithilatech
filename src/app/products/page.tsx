// @ts-nocheck
"use client"
import {
  motion
} from "framer-motion";

const page = () => {
  return (
      <section id="products" style={{ padding: "70px 25px" }}>
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
                Mithila tech?
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
  )
}

export default page
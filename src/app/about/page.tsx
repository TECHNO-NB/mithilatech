// @ts-nocheck
'use client'
import { motion } from "framer-motion";
import {
  CheckCircle,
  Globe,
  Layers,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" style={{ padding: "70px 25px", position: "relative" }}>
      <div
        className=" grid  md:grid-cols-2"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          gap: 80,
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            Who We Are
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            Your Trusted Tech
            <br />
            <span className="glow-text">Partner in Nepal</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A8499",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Mithila Tech And I.T. Solutions is a tech company focused on helping
            businesses grow through smart technology and effective strategy. We
            combine modern innovation with a deep understanding of business
            needs to deliver solutions that are practical, scalable, and
            result-driven.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A8499",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
           
          </p>
          {[
            {
              icon: CheckCircle,
              text: "Transparent communication & pricing",
            },
            { icon: TrendingUp, text: "Results-driven approach" },
            { icon: Shield, text: "End-to-end project support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <item.icon size={18} color="#00D4FF" />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#A0A8B8",
                  fontSize: 15,
                }}
              >
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
        >
          {[
            {
              icon: Zap,
              label: "Fast Delivery",
              val: "On-time",
              color: "#00D4FF",
            },
            {
              icon: Star,
              label: "Client Rating",
              val: "4.9/5",
              color: "#FFD700",
            },
            {
              icon: Globe,
              label: "Global Standards",
              val: "ISO Ready",
              color: "#00FF88",
            },
            {
              icon: Layers,
              label: "Tech Stack",
              val: "Modern",
              color: "#C084FC",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="glass"
              whileHover={{ y: -6, borderColor: card.color }}
              style={{
                padding: 28,
                borderRadius: 16,
                transition: "all 0.3s",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${card.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <card.icon size={22} color={card.color} />
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>
                {card.val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "#5A6478",
                }}
              >
                {card.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

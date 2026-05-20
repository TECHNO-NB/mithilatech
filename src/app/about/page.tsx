// @ts-nocheck
"use client";

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
  const features = [
    {
      icon: CheckCircle,
      text: "Transparent communication & pricing",
    },
    {
      icon: TrendingUp,
      text: "Results-driven approach",
    },
    {
      icon: Shield,
      text: "End-to-end project support",
    },
  ];

  const cards = [
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
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      style={{
        padding: "90px 25px",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="grid md:grid-cols-2"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <motion.div variants={fadeUp}>
          <motion.div
            variants={fadeUp}
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
          </motion.div>

          <motion.h2
            variants={fadeUp}
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

            <span className="glow-text">
              Partner in Nepal
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A8499",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 20,
            }}
          >
            Mithila Tech And I.T. Solutions is a tech company
            focused on helping businesses grow through smart
            technology and effective strategy. We combine
            modern innovation with a deep understanding of
            business needs to deliver solutions that are
            practical, scalable, and result-driven.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7A8499",
              fontSize: 17,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          />

          {/* FEATURES */}
          <motion.div
            variants={containerVariants}
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  x: 6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <item.icon
                    size={18}
                    color="#00D4FF"
                  />
                </motion.div>

                <span
                  style={{
                    fontFamily:
                      "'DM Sans', sans-serif",
                    color: "#A0A8B8",
                    fontSize: 15,
                  }}
                >
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass"
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: card.color,
                boxShadow: `0 10px 30px ${card.color}20`,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              style={{
                padding: 28,
                borderRadius: 16,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.35, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `${card.color}15`,
                  filter: "blur(40px)",
                }}
              />

              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${card.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <card.icon
                  size={22}
                  color={card.color}
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  marginBottom: 4,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {card.val}
              </motion.div>

              <div
                style={{
                  fontFamily:
                    "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "#5A6478",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {card.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
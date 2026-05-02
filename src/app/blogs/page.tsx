// @ts-nocheck
'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Clock, ExternalLink, User } from 'lucide-react';

const page = () => {
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
  return (
     <section
            id="blogs"
            style={{ padding: "70px 25px", background: "rgba(255,255,255,0.015)" }}
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
  )
}

export default page
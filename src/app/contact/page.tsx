// @ts-nocheck
"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

const MAP_LAT = 27.6737;
const MAP_LNG = 85.4114;
const MAP_DELTA = 0.006;

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  MAP_LNG - MAP_DELTA
}%2C${MAP_LAT - MAP_DELTA}%2C${MAP_LNG + MAP_DELTA}%2C${
  MAP_LAT + MAP_DELTA
}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LNG}`;

const mapLink = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LNG}#map=16/${MAP_LAT}/${MAP_LNG}`;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post("/api/contact", data);

      setStatus(
        response.data?.message || "Your message has been sent successfully!"
      );
      setStatusType("success");

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error?.response?.data?.error ||
          "Failed to send your message. Please try again."
      );
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Modern decorative elements */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl">
        {/* Header with modern flair */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
            <Sparkles className="h-3.5 w-3.5" />
            Get in touch
          </div>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-black sm:text-5xl">
            Let's Create Something
            <br />
            <span className="text-red-600">Amazing Together</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black/60 sm:text-base">
            Reach out and our team will get back to you within one business
            day.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left: Contact Info + Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
              {/* Subtle red overlay */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-red-100/60 blur-2xl" />

              <div className="relative">
                {/* Contact details with modern cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: MapPin,
                      text: "Sallaghari, Bhaktapur, Nepal",
                    },
                    {
                      icon: Phone,
                      text: "982-9705977",
                      href: "tel:+9779829705977",
                    },
                    {
                      icon: Mail,
                      text: "info@mithilatechsolutions.com",
                      href: "mailto:info@mithilatechsolutions.com",
                    },
                    {
                      icon: Globe,
                      text: "mithilatechsolutions.com",
                      href: "https://www.mithilatechsolutions.com",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm transition-all hover:border-red-600/30 hover:bg-red-50/40"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-red-600" />

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.icon === Globe ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-sm text-black/80 transition-colors hover:text-red-600"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-sm text-black/80">
                          {item.text}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Modern Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-4 border-t border-black/10 pt-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="group relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        disabled={loading}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black placeholder:text-black/40 transition-all focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-red-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                    </div>

                    <div className="group relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        disabled={loading}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black placeholder:text-black/40 transition-all focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-red-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                    </div>
                  </div>

                  <div className="group relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      disabled={loading}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black placeholder:text-black/40 transition-all focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-red-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                  </div>

                  <div className="group relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      disabled={loading}
                      className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black placeholder:text-black/40 transition-all focus:border-red-600/50 focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-red-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                  </div>

                  {/* Status Message */}
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        statusType === "success"
                          ? "border-green-500/20 bg-green-50 text-green-700"
                          : "border-red-500/20 bg-red-50 text-red-700"
                      }`}
                    >
                      {status}
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-700 hover:shadow-red-600/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right: Map with modern styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm lg:min-h-[500px]">
              {/* Map with subtle overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <iframe
                title="Mithila Tech & IT Solutions location map"
                src={mapSrc}
                className="h-full w-full grayscale-[10%] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map overlay with location pin */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 animate-ping rounded-full bg-red-500/30" />
                  <div className="absolute -inset-2 rounded-full bg-red-500/20" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-xl shadow-red-600/30">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Action button */}
              <motion.a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-2xl bg-white/90 px-5 py-2.5 text-xs font-semibold text-black shadow-lg backdrop-blur-xl transition-all hover:bg-white"
              >
                <MapPin className="h-3.5 w-3.5 text-red-600" />
                View Larger Map
              </motion.a>

              {/* Decorative badge */}
              <div className="absolute left-4 top-4 z-20 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-black/70 shadow-sm backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Open now
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
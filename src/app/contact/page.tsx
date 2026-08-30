// @ts-nocheck
"use client";

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
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      {/* Modern decorative elements */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl">
        {/* Header with modern flair */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-purple-400 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Get in touch
          </div>
          <h2 className="mt-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
            Reach out and our team will get back to you within one business day.
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
              {/* Subtle gradient overlay */}
              <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-500/10 blur-2xl" />

              <div className="relative">
                {/* Contact details with modern cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: MapPin, text: "Sallaghari, Bhaktapur, Nepal" },
                    { icon: Phone, text: "982-9705977", href: "tel:+9779829705977" },
                    { icon: Phone, text: "986-3007234", href: "tel:+9779863007234" },
                    { icon: Mail, text: "info@mithilatech.com", href: "mailto:info@mithilatech.com" },
                    { icon: Globe, text: "www.mithilatech.com", href: "https://www.mithilatech.com" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10"
                    >
                      <item.icon className="h-4 w-4 shrink-0 text-purple-400" />
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.icon === Globe ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-white/80 transition-colors hover:text-purple-400"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-sm text-white/80">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Modern Form */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 space-y-4 border-t border-white/10 pt-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="group relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-purple-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                    </div>
                    <div className="group relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-purple-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                    </div>
                  </div>
                  <div className="group relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-purple-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                  </div>
                  <div className="group relative">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-purple-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    />
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100" />
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
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:min-h-[500px]">
              {/* Map with subtle overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

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
                  <div className="absolute -inset-4 animate-ping rounded-full bg-purple-500/30" />
                  <div className="absolute -inset-2 rounded-full bg-purple-500/20" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-xl shadow-purple-500/30">
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
                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-2xl bg-black/60 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition-all hover:bg-black/80"
              >
                <MapPin className="h-3.5 w-3.5 text-purple-400" />
                View Larger Map
              </motion.a>

              {/* Decorative badge */}
              <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/60 backdrop-blur-md">
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
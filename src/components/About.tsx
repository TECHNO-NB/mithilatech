"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import { whyChooseUs } from "@/data/site";

const highlights = [
  "Creative & Innovative Solutions",
  "On-Time Project Delivery",
  "Affordable Pricing",
  "Client Satisfaction is Our Priority",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-px grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left: about text + video card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            We Are Mithila Tech &amp; IT Solutions
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Mithila Tech &amp; IT Solutions Pvt. Ltd. is a leading IT company
            based in Suryabinayak, Bhaktapur. We provide innovative solutions
            in Web &amp; App Development, Digital Marketing, Graphic Design
            and IT Training.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-neutral-200">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Know More About Us
          </a>
        </motion.div>

        {/* Video preview card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-surface-2 to-black"
        >
          <div className="dot-grid absolute inset-0 opacity-20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-background">
              <span className="text-lg font-extrabold">M</span>
            </span>
            <p className="text-lg font-extrabold tracking-wide text-white">MITHILA</p>
            <button
              aria-label="Play video"
              className="group flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent text-accent transition-colors hover:bg-accent hover:text-background"
            >
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Why choose us */}
      <div className="container-px mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              We Help You Grow Your Business Online
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <item.icon className="h-7 w-7 text-accent" />
                <h4 className="mt-3 text-sm font-bold text-white sm:text-base">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

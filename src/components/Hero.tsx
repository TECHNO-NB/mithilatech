"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const avatarColors = ["bg-rose-400", "bg-sky-400", "bg-amber-400"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-14 lg:pb-28 lg:pt-20">
      {/* ambient glow */}
      <div className="glow pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="container-px relative grid items-center gap-14 lg:grid-cols-2">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            We Build Digital Solutions
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Transforming Ideas
            <br />
            Into <span className="text-accent">Digital Success</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We help businesses grow online with innovative IT solutions,
            creative design and result-driven digital marketing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatarColors.map((c, i) => (
                <span
                  key={i}
                  className={`h-11 w-11 rounded-full border-2 border-background ${c}`}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">100+ Happy Clients</p>
              <div className="flex items-center gap-1.5">
                <div className="flex text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs text-muted">4.9 (120+ Reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column – device mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto h-[360px] w-full max-w-xl sm:h-[420px] lg:h-[460px]"
        >
          {/* Laptop */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-4 w-[82%] rounded-t-xl border border-white/10 bg-surface p-2.5 shadow-2xl sm:top-6"
          >
            <div className="mb-2 flex items-center gap-1.5 px-1">
              <span className="h-2 w-2 rounded-full bg-rose-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
            </div>
            <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-neutral-900 via-black to-neutral-900 p-5">
              <p className="text-sm font-bold leading-snug text-white sm:text-lg">
                We Build Solutions
                <br />
                That Drive <span className="text-accent">Growth</span>
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[10px] font-semibold text-background sm:text-xs">
                Discover More <ArrowRight className="h-3 w-3" />
              </span>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {["100+", "4.9", "24/7"].map((v) => (
                  <div key={v} className="rounded-md border border-white/10 bg-white/5 p-2 text-center">
                    <p className="text-xs font-bold text-accent sm:text-sm">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* laptop base */}
            <div className="absolute -bottom-2.5 left-1/2 h-2.5 w-[104%] -translate-x-1/2 rounded-b-xl bg-neutral-300" />
          </motion.div>

          {/* Phone */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-0 right-2 w-[34%] rounded-[1.4rem] border-[3px] border-neutral-800 bg-black p-1.5 shadow-2xl sm:right-6"
          >
            <div className="aspect-[9/18.5] rounded-[1rem] bg-gradient-to-b from-neutral-950 to-black p-3">
              <p className="text-[10px] font-bold leading-tight text-white sm:text-xs">
                Digital Solutions for Your Business
              </p>
              <div className="mt-4 space-y-1.5">
                <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
              <span className="mt-4 inline-flex rounded-full bg-accent px-2.5 py-1 text-[8px] font-semibold text-background">
                Learn More
              </span>
            </div>
          </motion.div>

          {/* Decorative plant blob */}
          <div className="absolute -right-4 top-0 hidden h-24 w-24 rounded-full bg-emerald-900/30 blur-xl lg:block" />
        </motion.div>
      </div>
    </section>
  );
}

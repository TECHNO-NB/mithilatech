// @ts-nocheck
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

const avatarColors = ["bg-sky-400", "bg-rose-400", "bg-amber-400"];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white hover:border-accent hover:text-accent sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative min-h-55 flex-1 overflow-hidden rounded-2xl border border-white/8 bg-surface px-8 py-10 text-center sm:px-12">
            <Quote className="mx-auto h-8 w-8 text-accent" fill="currentColor" strokeWidth={0} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-4 text-base leading-relaxed text-neutral-200 sm:text-lg">
                  {current.quote}
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className={`h-10 w-10 rounded-full ${avatarColors[index % avatarColors.length]}`} />
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">{current.name}</p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white hover:border-accent hover:text-accent sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

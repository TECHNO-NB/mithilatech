// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Solutions We Provide
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-red-500" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/8 bg-surface p-7 transition-colors hover:border-red-500"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/25 bg-red-500/10 text-red-500 transition-colors group-hover:bg-red-500 group-hover:text-background">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-500"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

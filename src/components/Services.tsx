// @ts-nocheck
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-black sm:text-4xl">
            Solutions We Provide
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-red-600" />
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
              className="group rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all hover:border-red-600 hover:shadow-lg hover:shadow-red-600/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-black">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600"
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
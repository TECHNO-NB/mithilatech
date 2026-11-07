// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { navLinks } from "@/data/site";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-sm">
      <div className="container-px flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-0">
          <Image src={logo} width={200} height={200} alt="logo" />
          {/* <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-red-600">
              MITHILA
            </span>
            <span className="block text-[10px] font-medium tracking-[0.2em] text-black">
              TECH &amp; IT SOLUTIONS
            </span>
          </span> */}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-black transition-colors hover:text-red-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 lg:inline-flex"
        >
          Get A Quote
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-black/10 bg-white lg:hidden"
        >
          <nav className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-black hover:bg-red-50 hover:text-red-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get A Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
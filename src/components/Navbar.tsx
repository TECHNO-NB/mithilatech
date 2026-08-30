// @ts-nocheck
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { navLinks } from "@/data/site";
import logo from "../../public/mithilatechlogo.jpeg"
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container-px flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-background">
            <Image src={logo} width={100} height={100} alt="logo" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-wide text-white">
              MITHILA
            </span>
            <span className="block text-[10px] font-medium tracking-[0.2em] text-muted">
              TECH &amp; IT SOLUTIONS
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105 lg:inline-flex"
        >
          Get A Quote
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
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
          className="border-t border-white/5 bg-background lg:hidden"
        >
          <nav className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background"
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

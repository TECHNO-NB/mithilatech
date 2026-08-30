// @ts-nocheck
import { ArrowRight, MessageCircle, Send } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="container-px pb-4">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-surface via-surface to-surface-2 px-6 py-8 sm:flex-row sm:justify-between sm:px-10">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-background">
            <Send className="h-5 w-5 -rotate-45" fill="currentColor" strokeWidth={0} />
          </span>
          <div>
            <h3 className="text-lg font-extrabold text-white sm:text-xl">
              Ready to <span className="text-accent">Grow</span> Your Business?
            </h3>
            <p className="text-sm text-muted">
              Let&apos;s work together and take your business to the next level.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:border-accent hover:text-accent"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

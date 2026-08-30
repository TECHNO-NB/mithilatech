// @ts-nocheck
import { MapPin, Phone, Mail, Globe, ArrowUp, Zap } from "lucide-react";
import { footerLinks } from "@/data/site";
import { SocialFacebook, SocialInstagram, SocialLinkedIn, SocialYoutube } from "@/components/SocialIcons";

const socials = [
  { icon: SocialFacebook, label: "Facebook" },
  { icon: SocialInstagram, label: "Instagram" },
  { icon: SocialLinkedIn, label: "LinkedIn" },
  { icon: SocialYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-white/5 bg-surface/60">
      <div className="container-px grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-background">
              <Zap className="h-5 w-5" fill="currentColor" strokeWidth={0} />
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
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            We provide innovative IT solutions to help businesses grow online
            and achieve long-term success.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-muted hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Our Services</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.services.map((label) => (
              <li key={label}>
                <a href="#services" className="text-sm text-muted hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact Info</h4>
          <ul className="mt-4 space-y-3.5">
            <li className="flex items-start gap-3 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Sallaghari, Bhaktapur, Bagmati, Nepal
            </li>
            <li className="flex items-center gap-3 text-sm text-muted">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
               9829705977
            </li>
            <li className="flex items-center gap-3 text-sm text-muted">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              info@mithilatechsolutions.com
            </li>
            <li className="flex items-center gap-3 text-sm text-muted">
              <Globe className="h-4 w-4 shrink-0 text-accent" />
              mithilatechsolutions.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            © 2026 Mithila Tech &amp; IT Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-accent"
          >
            Back to Top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// @ts-nocheck
import { MapPin, Phone, Mail, Globe, ArrowUp, Zap } from "lucide-react";
import { footerLinks } from "@/data/site";
import { SocialFacebook, SocialInstagram, SocialLinkedIn, SocialYoutube ,SocialTikTok,SocialWhatsApp} from "@/components/SocialIcons";
import logo from "../../public/mithilatechlogo.png";
import Image from "next/image";

const socials = [
  { icon: SocialFacebook, label: "Facebook",'href':'https://www.facebook.com/profile.php?id=61585387076986' },
  { icon: SocialInstagram, label: "Instagram",'href':'https://www.instagram.com/mithilatechsolutions?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==' },
  { icon: SocialLinkedIn, label: "LinkedIn",'href':'https://www.linkedin.com/company/114704003/admin/dashboard/' },
  { icon: SocialTikTok, label: "Tiktok",'href':'https://www.tiktok.com/@mithilatechsolutions?is_from_webapp=1&sender_device=pc' },
  { icon: SocialWhatsApp, label: "Whatsapp","href": "https://wa.me/9779829705977?text=Hi%20Mithila%20Tech%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services." }


];



export default function Footer() {
  return (
    <footer id="contact" className=" border-t  bg-white">
      <div className="container-px grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-2.5">
            <Image src={logo} width={100} height={100} alt="Logo" />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-wide text-red-600">
                MITHILA
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] text-black">
                TECH &amp; IT SOLUTIONS
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-black/60">
            We provide innovative IT solutions to help businesses grow online
            and achieve long-term success.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/60 transition-colors hover:border-red-600 hover:text-red-600"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-black">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-black/60 hover:text-red-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-black">Our Services</h4>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.services.map((label) => (
              <li key={label}>
                <a href="#services" className="text-sm text-black/60 hover:text-red-600">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-black">Contact Info</h4>
          <ul className="mt-4 space-y-3.5">
            <li className="flex items-start gap-3 text-sm text-black/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              Sallaghari, Bhaktapur, Bagmati, Nepal
            </li>
            <li className="flex items-center gap-3 text-sm text-black/60">
              <Phone className="h-4 w-4 shrink-0 text-red-600" />
              9829705977
            </li>
            <li className="flex items-center gap-3 text-sm text-black/60">
              <Mail className="h-4 w-4 shrink-0 text-red-600" />
              info@mithilatechsolutions.com
            </li>
            <li className="flex items-center gap-3 text-sm text-black/60">
              <Globe className="h-4 w-4 shrink-0 text-red-600" />
              mithilatechsolutions.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-black/60">
            © 2026 Mithila Tech &amp; IT Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-black/70 hover:text-red-600"
          >
            Back to Top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
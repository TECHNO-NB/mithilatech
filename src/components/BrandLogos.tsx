// @ts-nocheck
import { useEffect, useRef } from "react";

const brands = [
  { name: "Mega Motors", logo: "/logos/mega-motors.png" },
  { name: "Malla Book keeping Services", logo: "/logos/malla-bookkeeping.png" },
  { name: "GVAEC", logo: "/logos/gvaec.png" },
  { name: "SUBBA CLEANING SERVICES", logo: "/logos/subba-cleaning.png" },
  { name: "POOJALAYA", logo: "/logos/poojalaya.png" },
  { name: "Dermaglow RN", logo: "/logos/dermaglow-rn.png" },
  { name: "HERO MOTORS", logo: "/logos/hero-motors.png" },

  // New brands
  {
    name: "Kasthamandap College of Management",
    logo: "/logos/kasthamandap-college-management.png",
  },
  {
    name: "Nepal Kasthamandap College",
    logo: "/logos/nepal-kasthamandap-college.png",
  },
  {
    name: "Royal Bali Resort",
    logo: "/logos/royal-bali-resort.png",
  },
  {
    name: "Dragon Academy",
    logo: "/logos/dragon-academy.png",
  },
  {
    name: "TARA Ayurvedic",
    logo: "/logos/tara-ayurvedic.png",
  },
  {
    name: "Arbachin Bhumi",
    logo: "/logos/arbachin-bhumi.png",
  },
  {
    name: "Hotel Mid Point",
    logo: "/logos/hotel-mid-point.png",
  },
];


export default function BrandLogos() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5; // Speed of marquee
      if (marquee.scrollWidth / 2 + position <= 0) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="border-y border-white/5 bg-surface/60 py-10 overflow-hidden">
      <div className="container-px">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Trusted by <span className="text-accent">Brands</span>
        </p>
        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center gap-x-12 gap-y-6 whitespace-nowrap"
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const span = document.createElement("span");
                      span.className =
                        "text-lg font-bold tracking-tight text-neutral-500 hover:text-white sm:text-xl";
                      span.textContent = brand.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
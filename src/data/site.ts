import {
  Code2,
  Smartphone,
  TrendingUp,
  Search,
  PenTool,
  GraduationCap,
  Users,
  Award,
  Tag,
  Clock,
  Headphones,
  Heart,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  // { label: "Training", href: "/services" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Custom websites that are fast, responsive & SEO friendly.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build powerful mobile apps for Android & iOS platforms.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Grow your brand online with result-oriented marketing strategies.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search rankings and drive organic traffic.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Creative designs that represent your brand perfectly.",
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    description: "Practical training to upgrade your skills & build your career.",
  },
];

export type ChoiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: ChoiceItem[] = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled & certified professionals.",
  },
  {
    icon: Award,
    title: "Quality Work",
    description: "We deliver high quality work on time.",
  },
  {
    icon: Tag,
    title: "Affordable Price",
    description: "Best solutions at competitive prices.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect time and deliver on time.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We are always here to support you.",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Your satisfaction is our success.",
  },
];

export const portfolioFilters = ["All", "Websites", "Mobile Apps", "Branding", "Digital Marketing"];

export type PortfolioItem = {
  title: string;
  category: string;
  gradient: string;
};

export const portfolioItems: PortfolioItem[] = [
  { title: "Corporate Website", category: "Web Development", gradient: "from-neutral-200 to-neutral-400" },
  { title: "E-commerce Website", category: "Web Development", gradient: "from-neutral-800 to-neutral-950" },
  { title: "Social Media Campaign", category: "Digital Marketing", gradient: "from-lime-800 to-neutral-900" },
  { title: "Brand Identity Design", category: "Branding", gradient: "from-neutral-100 to-neutral-300" },
  { title: "Mobile App UI/UX", category: "Mobile App", gradient: "from-neutral-900 to-black" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mithila Tech & IT Solutions helped us grow our business online. Their team is professional, creative and always delivers beyond our expectations.",
    name: "Ramesh Acharya",
    role: "CEO, Fashion Hub",
  },
  {
    quote:
      "From our first call to launch day, the process felt effortless. Our new site brought in more leads in one month than the old one did all year.",
    name: "Sunita Koirala",
    role: "Founder, Himal Crafts",
  },
  {
    quote:
      "Their SEO and digital marketing team turned our organic traffic around in under a quarter. Responsive, honest and genuinely invested in our growth.",
    name: "Bikash Thapa",
    role: "Marketing Head, Everest Foods",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Training", href: "#services" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Services",
    "Graphic Design",
    "IT Training",
  ],
  training: [
    "Digital Marketing Training",
    "SEO Training",
    "Graphic Design Training",
    "Internship Program",
    "Corporate Training",
  ],
};

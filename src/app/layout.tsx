import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mithila Tech & IT Solutions | Transforming Ideas Into Digital Success",
  description:
    "Mithila Tech & IT Solutions helps businesses grow online with innovative IT solutions, creative design and result-driven digital marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

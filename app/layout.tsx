import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// ✅ Primary font (clean, corporate)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// ✅ SEO + Brand Metadata
export const metadata: Metadata = {
  title: {
    default: "Onwa-na Aku",
    template: "%s | Maritime Trade & Logistics",
  },
  description:
    "We provide expert maritime consulting, transport logistics solutions, and data-driven supply chain strategies for global trade operations.",
  keywords: [
    "maritime consulting",
    "logistics solutions",
    "global trade",
    "freight services",
    "supply chain optimization",
  ],
  openGraph: {
    title: "Onwa-na Aku",
    description:
      "Reliable, data-driven maritime and logistics solutions for global businesses.",
    url: "https://yourdomain.com",
    siteName: "Onwa-na Aku",
    locale: "en_US",
    type: "website",
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col bg-white text-neutral-700 font-sans antialiased">
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
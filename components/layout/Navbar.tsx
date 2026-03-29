"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home",         href: "/"            },
  { name: "About",        href: "/about"        },
  { name: "Services",     href: "/services"     },
  { name: "Industries",   href: "/industries"   },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact",      href: "/contact"      },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#1A1814]/10">

      <div className="container-custom flex items-center justify-between h-[72px]">

        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            width={38}
            height={38}
            alt="Onwa-na Aku logo"
            className="object-contain"
          />

          {/* Vertical divider */}
          <span className="w-px h-5 bg-[#1A1814]/15" />

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[15px] tracking-[-0.01em] text-[#1A1814] group-hover:text-[#1A1814] transition-colors duration-200"
            >
              Onwa-na Aku
            </span>
            <span className="text-[9px] font-medium tracking-[0.12em] uppercase text-[#C4873A] mt-0.5">
              Maritime · Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] tracking-[0.02em] transition-colors duration-200 ${
                isActive(link.href)
                  ? "text-[#1A1814] font-medium"
                  : "text-[#6B6860] font-normal hover:text-[#1A1814]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact#contact"><Button>Get a Quote</Button></Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-[2px] border border-[#1A1814]/10 text-[#1A1814] bg-transparent hover:bg-[#1A1814]/5 transition-colors duration-200"
          aria-label={open ? "Close menu" : "Open menu"}
          type="button"
        >
          {open ? <HiX size={18} /> : <HiMenu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F7F5F0] border-t border-[#1A1814]/10"
          >
            <div className="container-custom py-8 flex flex-col">

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center py-4 border-b border-[#1A1814]/8 text-[15px] tracking-[0.01em] transition-colors duration-150 ${
                      isActive(link.href)
                        ? "text-[#1A1814] font-medium"
                        : "text-[#6B6860] hover:text-[#1A1814]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Link href="/contact#contact" onClick={() => setOpen(false)}>
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.04 }}
                className="mt-8"
              >
                <Button className="w-full">Get a Quote</Button>
              </motion.div>
              </Link>
             

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
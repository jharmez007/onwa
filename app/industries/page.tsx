"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

function CountUp({
  value,
  suffix = "",
  duration = 1.4,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${Math.round(v * 10) / 10}${suffix}`);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      animate(motionVal, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, duration, delay, motionVal]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const industries = [
  {
    number: "01",
    title: "Maritime & Shipping",
    description:
      "End-to-end logistics support for shipping companies, vessel operators, and port authorities navigating complex international waters.",
    details: [
      "Vessel charter & management",
      "Port agency services",
      "Cargo documentation & compliance",
      "Freight rate negotiation",
    ],
    stat: "150+ ports",
    image: "https://images.pexels.com/photos/12903694/pexels-photo-12903694.jpeg",
  },
  {
    number: "02",
    title: "Energy & Commodities",
    description:
      "Specialized logistics for oil, gas, and commodity traders requiring precision handling, safety compliance, and global reach.",
    details: [
      "Offshore logistics support",
      "Bulk cargo handling",
      "HAZMAT certified operations",
      "Pipeline & terminal advisory",
    ],
    stat: "ISO certified",
    image: "https://images.pexels.com/photos/35105445/pexels-photo-35105445.jpeg",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Reliable supply chain solutions that keep production lines running — from raw material sourcing to finished goods distribution.",
    details: [
      "Just-in-time delivery planning",
      "Inbound & outbound logistics",
      "Supplier consolidation",
      "Inventory management",
    ],
    stat: "30% cost reduction",
    image: "https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg",
  },
  {
    number: "04",
    title: "Retail & E-commerce",
    description:
      "Fast, scalable distribution networks that meet consumer demand and support growing brands across multiple sales channels.",
    details: [
      "Last-mile delivery strategies",
      "Returns management",
      "Multi-channel fulfillment",
      "Cross-border e-commerce",
    ],
    stat: "99.2% on-time",
    image: "https://images.pexels.com/photos/8311885/pexels-photo-8311885.jpeg",
  },
  {
    number: "05",
    title: "Pharmaceuticals",
    description:
      "Temperature-controlled, fully compliant logistics for pharmaceutical companies where precision and regulatory adherence are non-negotiable.",
    details: [
      "Cold chain management",
      "GDP & WHO compliant handling",
      "Track & trace capabilities",
      "Customs & import licensing",
    ],
    stat: "100% compliant",
    image: "https://images.pexels.com/photos/9742765/pexels-photo-9742765.jpeg",
  },
  {
    number: "06",
    title: "Automotive",
    description:
      "Specialist transport and supply chain solutions for automotive manufacturers, parts suppliers, and dealership networks.",
    details: [
      "RoRo & breakbulk shipping",
      "Parts & components logistics",
      "Assembly line supply chains",
      "Dealer network distribution",
    ],
    stat: "75 countries",
    image: "https://images.pexels.com/photos/33887723/pexels-photo-33887723.jpeg",
  },
];

const stats = [
  { num: 6,   suffix: "",  label: "Industries Served",   duration: 0.8, delay: 0.7  },
  { num: 75,  suffix: "+", label: "Countries Connected", duration: 1.3, delay: 0.85 },
  { num: 500, suffix: "+", label: "Global Partners",     duration: 1.5, delay: 0.95 },
  { num: 20,  suffix: "+", label: "Years Experience",    duration: 1.1, delay: 1.05 },
];

export default function IndustriesPage() {
  return (
    <div
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="min-h-screen bg-[#F7F5F0]"
    >

      {/* ── HERO ── */}
      <section className="bg-[#F7F5F0] border-b border-[#1A1814]/8">
        <div className="container-custom pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-7 h-px bg-[#C4873A]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Industries
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814]"
            >
              Logistics Expertise Across{" "}
              <em className="text-[#C4873A]">Every</em> Sector
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-lg"
            >
              From offshore energy platforms to last-mile e-commerce delivery,
              we bring deep sector knowledge and global infrastructure to every
              industry we serve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <Link href="/contact">
                <Button>Discuss Your Industry</Button>
              </Link>
              <Link
                href="#industries"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                Explore Sectors →
              </Link>
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-px bg-[#1A1814]/8 border border-[#1A1814]/8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#F7F5F0] p-10 flex flex-col gap-2">
                <div
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[36px] leading-none tracking-[-0.02em] text-[#1A1814]"
                >
                  <CountUp value={stat.num} suffix={stat.suffix} duration={stat.duration} delay={stat.delay} />
                </div>
                <div className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section id="industries" className="bg-[#F7F5F0]">
        <div className="container-custom py-24">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  Our Sectors
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
              >
                Six Sectors,{" "}
                <em className="text-[#C4873A]">One</em> Partner
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
              Tailored solutions built around the unique demands and regulations
              of your industry.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white border border-[#1A1814]/8 rounded-[4px] overflow-hidden hover:border-[#1A1814]/20 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-[#1A1814] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/60 to-transparent pointer-events-none" />

                  {/* Number — bottom left */}
                  <span
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="absolute bottom-4 left-5 text-[11px] text-[#F7F5F0]/50 tracking-[0.06em]"
                  >
                    {industry.number}
                  </span>

                  {/* Stat — bottom right */}
                  <span className="absolute bottom-4 right-5 text-[10px] font-medium tracking-[0.08em] uppercase text-[#C4873A] bg-[#1A1814]/60 px-2.5 py-1 rounded-[2px]">
                    {industry.stat}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7 gap-4">

                  {/* Title */}
                  <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-[#1A1814]">
                    {industry.title}
                  </h3>

                  {/* Animated divider */}
                  <span className="w-8 h-px bg-[#1A1814]/10 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

                  {/* Description */}
                  <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                    {industry.description}
                  </p>

                  {/* Details */}
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {industry.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-[12px] text-[#6B6860]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#C4873A] mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Hover CTA */}
                  <Link
                    href="/contact"
                    className="mt-auto pt-4 flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[#1A1814]/0 group-hover:text-[#1A1814] transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                  >
                    Work with us →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK BAND ── */}
      <section className="bg-[#1A1814]">
        <div className="container-custom py-24 grid md:grid-cols-2 gap-px bg-[#F7F5F0]/8">
          {[
            {
              label: "Our Approach",
              heading: "Sector Knowledge, Global Scale",
              body: "We don't apply generic logistics templates. Every industry has its own regulations, timelines, and risk profiles — we learn them, then build solutions around them.",
            },
            {
              label: "Our Commitment",
              heading: "A Partner, Not Just a Provider",
              body: "We embed ourselves in your operations, learning your supply chain from the inside out. The result is a logistics partner that anticipates your needs before they arise.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1814] p-12 flex flex-col gap-6"
            >
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                {item.label}
              </span>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[26px] leading-[1.15] tracking-[-0.02em] text-[#F7F5F0]"
              >
                {item.heading}
              </h2>
              <span className="w-8 h-px bg-[#F7F5F0]/15" />
              <p className="text-[14px] font-light leading-[1.85] text-[#F7F5F0]/65">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F7F5F0] border-t border-[#1A1814]/8">
        <div className="container-custom py-24">

          <div className="flex items-center gap-4 mb-16">
            <span className="flex-1 h-px bg-[#1A1814]/8" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
              Let's Talk
            </span>
            <span className="flex-1 h-px bg-[#1A1814]/8" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(30px,3.5vw,50px)] leading-[1.06] tracking-[-0.02em] text-[#1A1814]"
            >
              Don't See Your{" "}
              <em className="text-[#C4873A]">Industry?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-lg mx-auto"
            >
              We work across many more sectors than listed here. If you have a
              unique logistics challenge, let's talk — we've likely solved it
              before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-5"
            >
              <Link href="/contact">
                <Button>Discuss Your Needs</Button>
              </Link>
              <Link
                href="/services"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                View Services →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
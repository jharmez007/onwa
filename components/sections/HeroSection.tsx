"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

// ── Animated counter ──────────────────────────────────────────────────────────
function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.4,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${prefix}${Math.round(v)}${suffix}`);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      animate(motionVal, value, {
        duration,
        ease: [0.16, 1, 0.3, 1], // expo out — fast spin up, smooth settle
      });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, duration, delay, motionVal]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ── Static label for non-numeric values like "24/7" ──────────────────────────
function FlipIn({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.span>
  );
}

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)] overflow-hidden bg-[#F7F5F0]">

      {/* LEFT */}
      <div className="relative flex flex-col justify-center px-10 py-20 lg:px-16 lg:pr-20">

        {/* Vertical divider */}
        <div className="hidden lg:block absolute right-0 top-[15%] bottom-[15%] w-px bg-[#1A1814]/10" />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-7 h-px bg-[#C4873A]" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
            Global Trade Experts
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          className="text-[clamp(38px,4vw,58px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814] max-w-[540px]"
        >
          Navigating Global Trade with{" "}
          <em className="text-[#C4873A]">Precision</em>{" "}
          &amp; Confidence
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-[420px]"
        >
          At Onwa-Na Aku Mega Vision Nigeria Limited, we provide expert
          maritime consulting, efficient transport logistics, and data-driven
          supply chain solutions to help businesses move goods across borders
          seamlessly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <Link href="/contact#contact">
            <Button>Get a Quote</Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </motion.div>

        {/* Trust Indicators — animated numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-0 mt-12 pt-10 border-t border-[#1A1814]/10"
        >
          {/* 120+ */}
          <div className="flex-1 pr-6">
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[26px] leading-none tracking-[-0.02em] text-[#1A1814]"
            >
              <CountUp value={120} suffix="+" duration={1.4} delay={0.7} />
            </div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.06em] text-[#B0ADA8]">
              Countries served
            </div>
          </div>

          {/* 98% */}
          <div className="flex-1 px-6 border-l border-[#1A1814]/10">
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[26px] leading-none tracking-[-0.02em] text-[#1A1814]"
            >
              <CountUp value={98} suffix="%" duration={1.2} delay={0.85} />
            </div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.06em] text-[#B0ADA8]">
              On-time delivery
            </div>
          </div>

          {/* 24/7 — not a number, use flip-in */}
          <div className="flex-1 pl-6 border-l border-[#1A1814]/10">
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[26px] leading-none tracking-[-0.02em] text-[#1A1814]"
            >
              <FlipIn text="24/7" delay={1} />
            </div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.06em] text-[#B0ADA8]">
              Live operations
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — Image Panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="relative hidden lg:block overflow-hidden bg-[#1A1814]"
      >
        <img
          src="https://picsum.photos/seed/maritime1/900/800"
          alt="Maritime shipping"
          className="w-full h-full object-cover opacity-60"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1814]/40 to-transparent pointer-events-none" />

        {/* Corner tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute top-8 right-8 bg-[#C4873A] text-white text-[10px] font-medium tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-[2px]"
        >
          Est. 2015
        </motion.div>

        {/* Floating status card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-10 left-8 right-8 flex items-center justify-between px-6 py-5 rounded-[4px]"
          style={{
            background: "rgba(247,245,240,0.07)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(247,245,240,0.14)",
          }}
        >
          {/* Active Shipments */}
          <div>
            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[rgba(247,245,240,0.45)] mb-1.5">
              Active Shipments
            </div>
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[20px] text-[#F7F5F0] tracking-[-0.01em]"
            >
              <CountUp value={2840} suffix="" duration={1.6} delay={1.1} />
            </div>
          </div>

          {/* Ports Connected */}
          <div>
            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[rgba(247,245,240,0.45)] mb-1.5">
              Ports Connected
            </div>
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[20px] text-[#F7F5F0] tracking-[-0.01em]"
            >
              <CountUp value={340} suffix="+" duration={1.3} delay={1.2} />
            </div>
          </div>

          <div className="w-px h-9 bg-[rgba(247,245,240,0.12)]" />

          {/* Status */}
          <div>
            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[rgba(247,245,240,0.45)] mb-1.5">
              System Status
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[rgba(247,245,240,0.65)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] animate-pulse" />
              All operational
            </div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
"use client";

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
        ease: [0.16, 1, 0.3, 1],
      });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, duration, delay, motionVal]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 120, suffix: "+", label: "Countries Served",    duration: 1.4, delay: 0.0 },
  { value: 98,  suffix: "%", label: "On-Time Delivery",    duration: 1.2, delay: 0.1 },
  { value: 500, suffix: "+", label: "Clients Worldwide",   duration: 1.5, delay: 0.2 },
  { value: 20,  suffix: "+", label: "Years of Experience", duration: 1.1, delay: 0.3 },
];

export default function CTASection() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="bg-[#1A1814] relative overflow-hidden"
    >

      {/* Amber glow — top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,135,58,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Amber glow — bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(196,135,58,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom section-padding relative z-10">

        {/* Top rule */}
        <div className="flex items-center gap-4 mb-16">
          <span className="flex-1 h-px bg-[#F7F5F0]/8" />
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
            Let's Work Together
          </span>
          <span className="flex-1 h-px bg-[#F7F5F0]/8" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-[clamp(32px,4vw,56px)] leading-[1.06] tracking-[-0.02em] text-[#F7F5F0]"
          >
            Ready to Optimize Your{" "}
            <em className="text-[#C4873A]">Logistics</em>{" "}
            Operations?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-[15px] font-light leading-[1.8] text-[#F7F5F0]/65 max-w-xl mx-auto"
          >
            Partner with us to streamline your supply chain, reduce costs,
            and improve efficiency across your global operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <Button>Get Started</Button>
            <button className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#F7F5F0]/50 hover:text-[#F7F5F0] transition-colors duration-200 px-2 py-[15px]">
              Contact Us →
            </button>
          </motion.div>
        </div>

        {/* Bottom stats row — animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-[#F7F5F0]/8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[32px] leading-none tracking-[-0.02em] text-[#F7F5F0]"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  delay={stat.delay}
                />
              </div>
              <div className="mt-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[#F7F5F0]/35">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
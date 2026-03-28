"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Ocean Freight",
    desc: "Cost-effective LCL and FCL shipping solutions across global trade routes.",
    features: [
      "Weekly departures to 150+ ports",
      "Real-time tracking with satellite integration",
      "Full door-to-door service",
      "Customs clearance support",
    ],
  },
  {
    number: "02",
    title: "Air Freight",
    desc: "Express time-sensitive cargo with guaranteed aircraft availability.",
    features: [
      "Express delivery to 200+ airports",
      "Co-load optimization for cost savings",
      "Perishable commodity handling",
      "Emergency transport capability",
    ],
  },
  {
    number: "03",
    title: "Ground Transportation",
    desc: "Reliable domestic and cross-border land logistics.",
    features: [
      "Dedicated or consolidated services",
      "Fleet of modern refrigerated trucks",
      "GPS tracking on all shipments",
      "Flexible scheduling options",
    ],
  },
  {
    number: "04",
    title: "Warehousing & Storage",
    desc: "Secure facilities with climate control and inventory management.",
    features: [
      "Bonded warehouses at key ports",
      "WMS integration with your systems",
      "Flexible storage durations",
      "24/7 monitored facilities",
    ],
  },
  {
    number: "05",
    title: "Supply Chain Consulting",
    desc: "Strategic optimization of your entire logistics network.",
    features: [
      "End-to-end network design",
      "Cost reduction analysis",
      "Vendor consolidation services",
      "Risk mitigation strategies",
    ],
  },
  {
    number: "06",
    title: "Digital Logistics Platform",
    desc: "AI-powered platform for shipment visibility and optimization.",
    features: [
      "Real-time cargo tracking",
      "Automated quote generation",
      "Mobile app for on-the-go access",
      "Predictive delay alerts",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We understand your unique logistics challenges and requirements.",
  },
  {
    number: "02",
    title: "Custom Solution Design",
    desc: "We create a tailored strategy optimized for cost and speed.",
  },
  {
    number: "03",
    title: "Implementation",
    desc: "We execute with precision, integrating with your existing systems.",
  },
  {
    number: "04",
    title: "Ongoing Optimization",
    desc: "We continuously monitor and improve your logistics performance.",
  },
];

const whyUs = [
  {
    number: "01",
    title: "Industry Expertise",
    desc: "20+ years of experience across all major trade routes and industries.",
    stat: "20+ yrs",
  },
  {
    number: "02",
    title: "Cost Optimization",
    desc: "Strategic consolidation and rate negotiation save our clients 15–30%.",
    stat: "30% saved",
  },
  {
    number: "03",
    title: "Speed & Reliability",
    desc: "99.2% on-time delivery rate backed by real-time tracking and alerts.",
    stat: "99.2%",
  },
  {
    number: "04",
    title: "Global Network",
    desc: "Partnerships with 500+ carriers and agents across 75 countries.",
    stat: "75 countries",
  },
  {
    number: "05",
    title: "Security & Compliance",
    desc: "ISO certified operations with full customs and regulatory compliance.",
    stat: "ISO certified",
  },
  {
    number: "06",
    title: "Dedicated Support",
    desc: "24/7 customer support team with average response time under 30 minutes.",
    stat: "24/7",
  },
];

export default function ServicesPage() {
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
                What We Offer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814]"
            >
              Comprehensive Maritime &amp;{" "}
              <em className="text-[#C4873A]">Logistics</em> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-lg"
            >
              From ocean freight to supply chain consulting, we offer integrated
              services designed to streamline your global trade operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <Link href="/contact">
                <Button>Get a Custom Quote</Button>
              </Link>
              <Link
                href="#services"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                Explore Services →
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
            {[
              { num: "150+",  label: "Ports Connected"  },
              { num: "99.2%", label: "On-Time Delivery" },
              { num: "75",    label: "Countries Served" },
              { num: "24/7",  label: "Live Support"     },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F7F5F0] p-10 flex flex-col gap-2">
                <div
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[36px] leading-none tracking-[-0.02em] text-[#1A1814]"
                >
                  {stat.num}
                </div>
                <div className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services" className="bg-[#F7F5F0]">
        <div className="container-custom py-24">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  Our Services
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
              >
                Six Ways We{" "}
                <em className="text-[#C4873A]">Move</em> Your Business
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
              Every service is tailored to your specific needs — no one-size-fits-all solutions.
            </p>
          </div>

          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-[#1A1814]/8 border border-[#1A1814]/8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group bg-[#F7F5F0] hover:bg-white transition-colors duration-300 p-8 flex flex-col gap-5"
              >
                {/* Number */}
                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[13px] text-[#C4873A] tracking-[0.06em]"
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-[#1A1814]">
                  {service.title}
                </h3>

                {/* Animated divider */}
                <span className="w-8 h-px bg-[#1A1814]/12 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

                {/* Desc */}
                <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mt-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[12px] text-[#6B6860]">
                      <span className="w-1 h-1 rounded-full bg-[#C4873A] mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hover CTA */}
                <Link
                  href="/contact"
                  className="mt-auto pt-4 flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[#1A1814]/0 group-hover:text-[#1A1814] transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                >
                  Get a quote →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#1A1814]">
        <div className="container-custom py-24">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  How It Works
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#F7F5F0]"
              >
                Our Service <em className="text-[#C4873A]">Process</em>
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#F7F5F0]/60 max-w-sm md:text-right">
              A clear, structured approach that delivers results every time.
            </p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-0">
            <div className="hidden md:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-[#F7F5F0]/8" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start md:items-center text-left md:text-center px-6 py-8 md:pt-0"
              >
                <div className="w-11 h-11 rounded-[2px] bg-[#1A1814] border border-[#F7F5F0]/12 flex items-center justify-center mb-8 z-10 relative">
                  <div className="w-2 h-2 rounded-full bg-[#C4873A]" />
                </div>

                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[28px] leading-none tracking-[-0.02em] text-[#F7F5F0] mb-3"
                >
                  {step.number}
                </span>
                <h3 className="text-[14px] font-medium tracking-[-0.01em] text-[#F7F5F0] mb-2">
                  {step.title}
                </h3>
                <p className="text-[12px] font-light leading-[1.7] text-[#F7F5F0]/55 max-w-[160px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-[#F7F5F0]">
        <div className="container-custom py-24">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  Why Choose Us
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
              >
                Why Partner With{" "}
                <em className="text-[#C4873A]">Onwa-na Aku?</em>
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
              Six reasons our clients stay with us for the long run.
            </p>
          </div>

          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-[#1A1814]/8 border border-[#1A1814]/8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group bg-[#F7F5F0] hover:bg-white transition-colors duration-300 p-8 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <span
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="text-[13px] text-[#C4873A] tracking-[0.06em]"
                  >
                    {item.number}
                  </span>
                  <span
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="text-[13px] text-[#1A1814]/25 tracking-[-0.01em]"
                  >
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#1A1814]">
                  {item.title}
                </h3>

                <span className="w-8 h-px bg-[#1A1814]/12 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

                <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F7F5F0] border-t border-[#1A1814]/8">
        <div className="container-custom py-24">

          <div className="flex items-center gap-4 mb-16">
            <span className="flex-1 h-px bg-[#1A1814]/8" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
              Get Started
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
              Ready to Optimize Your{" "}
              <em className="text-[#C4873A]">Logistics?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-lg mx-auto"
            >
              Let's discuss how our services can reduce costs and improve
              efficiency for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-5"
            >
              <Link href="/contact">
                <Button>Get a Custom Quote</Button>
              </Link>
              <Link
                href="/contact"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                Contact Us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
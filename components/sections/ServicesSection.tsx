"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Maritime Trade Consulting",
    description:
      "Expert advisory services to help businesses navigate global trade regulations, compliance, and maritime operations.",
  },
  {
    number: "02",
    title: "Freight & Transport Solutions",
    description:
      "Efficient and reliable cargo movement across international routes with optimized logistics planning.",
  },
  {
    number: "03",
    title: "Supply Chain Optimization",
    description:
      "Data-driven strategies to streamline your supply chain, reduce costs, and improve operational efficiency.",
  },
  {
    number: "04",
    title: "Port & Terminal Advisory",
    description:
      "Specialized consulting for port operations, infrastructure, and terminal efficiency improvements.",
  },
  {
    number: "05",
    title: "Customs & Compliance Support",
    description:
      "Ensure smooth cross-border operations with expert guidance on customs regulations and documentation.",
  },
  {
    number: "06",
    title: "Logistics Strategy & Planning",
    description:
      "Comprehensive logistics planning tailored to your business needs and global trade goals.",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="bg-[#F7F5F0]"
    >
      <div className="container-custom section-padding">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#C4873A]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                What We Do
              </span>
            </div>

            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(30px,3.5vw,46px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
            >
              Comprehensive Maritime &amp;{" "}
              <em className="text-[#C4873A]">Logistics</em> Solutions
            </h2>
          </div>

          <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
            A full range of consulting and logistics services designed to help
            businesses operate efficiently across global markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-[#1A1814]/8 border border-[#1A1814]/8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-[#F7F5F0] p-8 flex flex-col gap-5 hover:bg-white transition-colors duration-300 cursor-default"
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

              {/* Divider */}
              <span className="w-8 h-px bg-[#1A1814]/15 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

              {/* Description */}
              <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-auto pt-2 flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[#1A1814]/0 group-hover:text-[#1A1814] transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-6">
          <Button>Explore All Services</Button>
          <span className="text-[12px] text-[#B0ADA8] tracking-[0.02em]">
            6 services available
          </span>
        </div>

      </div>
    </section>
  );
}
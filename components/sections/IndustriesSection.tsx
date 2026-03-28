"use client";

import { motion } from "framer-motion";

const industries = [
  {
    number: "01",
    title: "Import & Export Businesses",
    description:
      "Helping businesses streamline cross-border trade and manage global shipping operations efficiently.",
  },
  {
    number: "02",
    title: "Manufacturing",
    description:
      "Optimizing supply chains and logistics strategies to ensure timely delivery of raw materials and goods.",
  },
  {
    number: "03",
    title: "Oil & Gas",
    description:
      "Specialized logistics and maritime support for complex offshore and energy sector operations.",
  },
  {
    number: "04",
    title: "Retail & E-commerce",
    description:
      "Ensuring efficient distribution networks and last-mile delivery strategies for growing brands.",
  },
  {
    number: "05",
    title: "Agriculture",
    description:
      "Supporting the transportation of agricultural products with reliable logistics and export solutions.",
  },
  {
    number: "06",
    title: "Government & Agencies",
    description:
      "Providing advisory and logistics support for regulatory compliance and infrastructure planning.",
  },
];

export default function IndustriesSection() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="bg-[#1A1814]"
    >
      <div className="container-custom section-padding">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#C4873A]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Industries
              </span>
            </div>

            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#F7F5F0]"
            >
              Industries We{" "}
              <em className="text-[#C4873A]">Serve</em>
            </h2>
          </div>

          <p className="text-[14px] font-light leading-[1.8] text-[#F7F5F0]/70 max-w-sm md:text-right">
            Our expertise spans multiple industries, enabling us to deliver
            tailored logistics and maritime solutions across diverse sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-[#F7F5F0]/10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group bg-[#1A1814] p-8 flex flex-col gap-5 hover:bg-[#252219] transition-colors duration-300 cursor-default"
            >
              {/* Number */}
              <span
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[13px] text-[#C4873A] tracking-[0.06em]"
              >
                {industry.number}
              </span>

              {/* Title */}
              <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-[#F7F5F0]">
                {industry.title}
              </h3>

              {/* Animated divider */}
              <span className="w-8 h-px bg-[#F7F5F0]/25 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

              {/* Description */}
              <p className="text-[13px] font-light leading-[1.75] text-[#F7F5F0]/70">
                {industry.description}
              </p>

              {/* Arrow — reveals on hover */}
              <div className="mt-auto pt-2 flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-transparent group-hover:text-[#F7F5F0]/80 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
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

      </div>
    </section>
  );
}
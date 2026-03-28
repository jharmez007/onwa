"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    title: "Optimizing Port Operations",
    result: "Reduced cargo processing time by 35%",
    description:
      "We helped a major port streamline its operations, improving turnaround times and operational efficiency.",
    tag: "Port Operations",
  },
  {
    number: "02",
    title: "Global Supply Chain Transformation",
    result: "Saved $1.2M annually in logistics costs",
    description:
      "Our strategy restructured a client's global supply chain, reducing costs and improving delivery timelines.",
    tag: "Supply Chain",
  },
  {
    number: "03",
    title: "Customs Compliance Overhaul",
    result: "100% compliance with zero delays",
    description:
      "We implemented a compliance framework that eliminated customs delays and improved documentation accuracy.",
    tag: "Compliance",
  },
];

export default function CaseStudies() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="bg-[#F7F5F0]"
    >
      <div className="container-custom section-padding">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-[#C4873A]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Case Studies
              </span>
            </div>

            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
            >
              Results That{" "}
              <em className="text-[#C4873A]">Speak</em> for Themselves
            </h2>
          </div>

          <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
            See how we've helped businesses improve efficiency, reduce costs,
            and navigate complex logistics challenges.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-[#1A1814]/8 rounded-[4px] overflow-hidden hover:border-[#1A1814]/20 transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-[#1A1814] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/case${index + 1}/600/400`}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-[#F7F5F0] text-[#1A1814] text-[10px] font-medium tracking-[0.08em] uppercase px-3 py-1.5 rounded-[2px]">
                  {study.tag}
                </span>
                {/* Number */}
                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="absolute bottom-4 right-4 text-[11px] text-[#F7F5F0]/50 tracking-[0.06em]"
                >
                  {study.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7 gap-4">

                {/* Result pill */}
                <div className="inline-flex items-center gap-2 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4873A]" />
                  <span className="text-[12px] font-medium text-[#C4873A] tracking-[0.02em]">
                    {study.result}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em] text-[#1A1814]">
                  {study.title}
                </h3>

                {/* Divider */}
                <span className="w-8 h-px bg-[#1A1814]/10 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />

                {/* Description */}
                <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                  {study.description}
                </p>

                {/* Read more */}
                <Link href="/case-studies#studies">
                  <div className="mt-auto pt-2 flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[#1A1814]/0 group-hover:text-[#1A1814] transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                    Read case study
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
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-6">
          <Link href="/case-studies#studies">
            <Button>View All Case Studies</Button>
          </Link>
          <span className="text-[12px] text-[#B0ADA8] tracking-[0.02em]">
            3 featured studies
          </span>
        </div>

      </div>
    </section>
  );
}
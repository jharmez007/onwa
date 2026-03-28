"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Industry Expertise",
    description:
      "Years of experience in maritime trade and logistics, delivering proven solutions across global markets.",
  },
  {
    number: "02",
    title: "Global Network",
    description:
      "Strong partnerships with international stakeholders to ensure seamless operations worldwide.",
  },
  {
    number: "03",
    title: "Client-Centric Approach",
    description:
      "We tailor every solution to your specific business needs for maximum efficiency and results.",
  },
  {
    number: "04",
    title: "Reliable & Transparent",
    description:
      "Clear communication and dependable execution at every stage of your logistics journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="bg-[#F7F5F0]"
    >
      <div className="container-custom section-padding grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* LEFT — Content */}
        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-7 h-px bg-[#C4873A]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
              Why Choose Us
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
          >
            Why Businesses <em className="text-[#C4873A]">Trust</em> Us
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-5 text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-md"
          >
            We combine industry knowledge, global reach, and a commitment to
            excellence to deliver reliable maritime and logistics solutions
            tailored to your needs.
          </motion.p>

          {/* Features */}
          <div className="mt-12 flex flex-col">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex gap-6 py-6 border-t border-[#1A1814]/8 last:border-b last:border-[#1A1814]/8"
              >
                {/* Number */}
                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[13px] text-[#C4873A] tracking-[0.06em] shrink-0 mt-0.5"
                >
                  {feature.number}
                </span>

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#1A1814]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13px] font-light leading-[1.75] text-[#6B6860]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main image */}
          <div className="relative overflow-hidden rounded-[4px] aspect-[4/5]">
            <img
              src="https://picsum.photos/seed/maritime2/700/900"
              alt="Maritime operations"
              className="w-full h-full object-cover"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-[#1A1814]/10 pointer-events-none" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 bg-[#F7F5F0] border border-[#1A1814]/10 rounded-[4px] p-6 shadow-none"
          >
            <div
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[36px] leading-none tracking-[-0.02em] text-[#1A1814]"
            >
              20+
            </div>
            <div className="mt-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
              Years of Experience
            </div>
          </motion.div>

          {/* Accent corner block */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C4873A]/10 rounded-[4px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
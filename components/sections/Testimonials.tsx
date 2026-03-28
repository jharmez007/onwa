"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Adeyemi",
    role: "Operations Manager, Lagos Port",
    initials: "JA",
    quote:
      "Their expertise transformed our logistics operations. We saw immediate improvements in efficiency and cost savings.",
  },
  {
    name: "Sarah Johnson",
    role: "Supply Chain Director",
    initials: "SJ",
    quote:
      "Professional, reliable, and highly knowledgeable. They helped us navigate complex international trade challenges.",
  },
  {
    name: "Michael Chen",
    role: "CEO, Global Imports Ltd",
    initials: "MC",
    quote:
      "A trusted partner in our logistics strategy. Their solutions have been instrumental to our growth.",
  },
];

export default function Testimonials() {
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
                Testimonials
              </span>
            </div>

            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
            >
              What Our{" "}
              <em className="text-[#C4873A]">Clients</em> Say
            </h2>
          </div>

          <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
            We take pride in delivering exceptional service and building
            long-term partnerships with our clients.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-[#1A1814]/8 rounded-[4px] p-8 hover:border-[#1A1814]/20 transition-colors duration-300"
            >

              {/* Large opening quote mark */}
              <span
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[64px] leading-none text-[#C4873A]/20 -mt-3 -ml-1 mb-2 select-none"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[16px] leading-[1.65] tracking-[-0.01em] text-[#1A1814] flex-1"
              >
                {testimonial.quote}
              </p>

              {/* Divider */}
              <span className="w-8 h-px bg-[#1A1814]/10 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300 mt-7 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">

                {/* Initials avatar */}
                <div className="w-10 h-10 rounded-[2px] bg-[#C4873A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-medium tracking-[0.06em] text-[#C4873A]">
                    {testimonial.initials}
                  </span>
                </div>

                <div>
                  <p className="text-[14px] font-medium tracking-[-0.01em] text-[#1A1814]">
                    {testimonial.name}
                  </p>
                  <p className="text-[12px] font-light text-[#B0ADA8] mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const caseStudies = [
  {
    number: "01",
    tag: "Supply Chain",
    title: "Global Manufacturing Supply Chain Optimization",
    subtitle: "Reduced shipping costs by 18% and improved on-time delivery to 98%.",
    challenge: "Unpredictable freight rates, inefficient route planning, and inventory blocks across multiple regions.",
    solution: "Realigned multimodal transport routes, implemented predictive ETA tracking, and consolidated fragmented shipments.",
    outcome: "Yearly savings of $4.2M with a 30% faster order-to-delivery cycle.",
    stat: "$4.2M saved",
    image: "https://images.pexels.com/photos/18329018/pexels-photo-18329018.jpeg",
  },
  {
    number: "02",
    tag: "Perishable Cargo",
    title: "Perishable Cargo over Sea-Air Lane",
    subtitle: "Decreased spoilage risk by 70% while improving transit speed for perishables.",
    challenge: "High perishability mixed with complex customs clearance and inconsistent last-mile delivery windows.",
    solution: "Deployed a temperature-controlled lane with dynamic transfer optimization and real-time cold chain monitoring.",
    outcome: "Customer retention jumped by 45% and product loss dropped to under 1%.",
    stat: "70% less spoilage",
    image: "https://images.pexels.com/photos/27773577/pexels-photo-27773577.jpeg",
  },
  {
    number: "03",
    tag: "Port Operations",
    title: "Bulk Raw Material Port Consolidation",
    subtitle: "Leading steel producer gained 24/7 port handling efficiency and 14% cost reduction.",
    challenge: "Fragmented vendors and inconsistent berth allocations led to mounting demurrage fees and delays.",
    solution: "Centralized vendor partnerships and introduced real-time berth slot negotiation through our logistics platform.",
    outcome: "Annual demurrage savings exceeded $2.7M with improved throughput capacity.",
    stat: "$2.7M in savings",
    image: "https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg",
  },
];

export default function CaseStudiesPage() {
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
                Case Studies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814]"
            >
              Results That{" "}
              <em className="text-[#C4873A]">Prove</em>{" "}
              Our Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-lg"
            >
              Deep-dive stories from clients who transformed their logistics
              operations with our solutions — with real numbers to back them up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <Link href="/contact">
                <Button>Start Your Project</Button>
              </Link>
              <Link
                href="#studies"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                Read Studies →
              </Link>
            </motion.div>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-px bg-[#1A1814]/8 border border-[#1A1814]/8"
          >
            {[
              { num: "$4.2M",  label: "Saved for one client"   },
              { num: "70%",    label: "Spoilage reduction"      },
              { num: "$2.7M",  label: "Demurrage savings"       },
              { num: "98%",    label: "On-time delivery rate"   },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F7F5F0] p-10 flex flex-col gap-2">
                <div
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[32px] leading-none tracking-[-0.02em] text-[#1A1814]"
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

      {/* ── CASE STUDIES ── */}
      <section id="studies" className="bg-[#F7F5F0]">
        <div className="container-custom py-24">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  Featured Work
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
              >
                Three Stories,{" "}
                <em className="text-[#C4873A]">Real</em> Impact
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
              Each engagement is unique — here's how we approached three very
              different logistics challenges.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {caseStudies.map((study, i) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group grid lg:grid-cols-[360px_1fr] bg-white border border-[#1A1814]/8 rounded-[4px] overflow-hidden hover:border-[#1A1814]/20 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative bg-[#1A1814] overflow-hidden h-56 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1814]/20 pointer-events-none" />

                  {/* Tag */}
                  <span className="absolute top-5 left-5 bg-[#F7F5F0] text-[#1A1814] text-[10px] font-medium tracking-[0.08em] uppercase px-3 py-1.5 rounded-[2px]">
                    {study.tag}
                  </span>

                  {/* Number */}
                  <span
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="absolute bottom-5 left-5 text-[11px] text-[#F7F5F0]/45 tracking-[0.06em]"
                  >
                    {study.number}
                  </span>

                  {/* Stat pill */}
                  <span className="absolute bottom-5 right-5 text-[10px] font-medium tracking-[0.08em] uppercase text-[#C4873A] bg-[#1A1814]/70 px-2.5 py-1 rounded-[2px]">
                    {study.stat}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col gap-6">

                  {/* Title + subtitle */}
                  <div>
                    <h2 className="text-[18px] font-medium leading-[1.3] tracking-[-0.01em] text-[#1A1814]">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-[13px] font-medium text-[#C4873A]">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <span className="w-8 h-px bg-[#1A1814]/10 group-hover:w-16 group-hover:bg-[#C4873A] transition-all duration-300" />

                  {/* Challenge / Solution / Outcome */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { label: "The Challenge", body: study.challenge },
                      { label: "Our Solution",  body: study.solution  },
                      { label: "Outcome",        body: study.outcome   },
                    ].map((block) => (
                      <div key={block.label}>
                        <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#B0ADA8] mb-2">
                          {block.label}
                        </p>
                        <p className="text-[13px] font-light leading-[1.7] text-[#6B6860]">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.04em] uppercase text-[#1A1814]/0 group-hover:text-[#1A1814] transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    >
                      Discuss a similar project →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1814]">
        <div className="container-custom py-24">

          <div className="flex items-center gap-4 mb-16">
            <span className="flex-1 h-px bg-[#F7F5F0]/8" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
              Work With Us
            </span>
            <span className="flex-1 h-px bg-[#F7F5F0]/8" />
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(30px,3.5vw,50px)] leading-[1.06] tracking-[-0.02em] text-[#F7F5F0]"
            >
              Want to Be Our Next{" "}
              <em className="text-[#C4873A]">Success Story?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 text-[14px] font-light leading-[1.8] text-[#F7F5F0]/60 max-w-lg mx-auto"
            >
              Schedule a strategy session and we'll map out exactly how we can
              reduce costs and improve efficiency for your operations — within
              24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-5"
            >
              <Link href="/contact#contact">
                <Button>Request a Free Strategy Call</Button>
              </Link>
              <Link
                href="/services"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#F7F5F0]/45 hover:text-[#F7F5F0] transition-colors duration-200"
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
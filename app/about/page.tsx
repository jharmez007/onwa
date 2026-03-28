"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

const teamMembers = [
  {
    name: "Captain James Okonkwo",
    role: "Chief Executive Officer",
    bio: "20+ years in maritime logistics with a track record of scaling global operations.",
    initials: "JO",
  },
  {
    name: "Victoria Adeyemi",
    role: "Head of Operations",
    bio: "Expert in supply chain optimization and carrier partnerships across 50+ ports.",
    initials: "VA",
  },
  {
    name: "Dr. Kwame Mensah",
    role: "Director of Technology",
    bio: "Built custom logistics platforms serving 100+ enterprises worldwide.",
    initials: "KM",
  },
  {
    name: "Amara Nwosu",
    role: "Head of Client Relations",
    bio: "Dedicated to ensuring every client receives exceptional, personalized service.",
    initials: "AN",
  },
];

const milestones = [
  { year: "2015", title: "Founded",                desc: "Started with a vision to simplify maritime trade."        },
  { year: "2017", title: "First Major Partnership", desc: "Expanded operations across West African ports."           },
  { year: "2020", title: "Technology Launch",       desc: "Introduced an AI-powered cargo tracking platform."       },
  { year: "2024", title: "Global Leader",           desc: "Serving 200+ companies across 75 countries worldwide."   },
];

const values = [
  { number: "01", title: "Global Reach",       desc: "Connected to ports and partners worldwide for seamless operations."              },
  { number: "02", title: "Trust & Reliability", desc: "Our reputation is built on delivering on promises, every single time."          },
  { number: "03", title: "Innovation",          desc: "Continuously improving through technology and forward-thinking solutions."      },
  { number: "04", title: "Data-Driven",         desc: "Every decision backed by analytics and real-time market intelligence."         },
];

export default function AboutPage() {
  return (
    <div
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      className="min-h-screen bg-[#F7F5F0]"
    >

      {/* ── HERO ── */}
      <section className="bg-[#F7F5F0] border-b border-[#1A1814]/8">
        <div className="container-custom pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="w-7 h-px bg-[#C4873A]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814]"
            >
              Transforming{" "}
              <em className="text-[#C4873A]">Global</em>{" "}
              Trade Since 2015
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-lg"
            >
              Since 2015, we've been on a mission to make maritime logistics
              seamless, transparent, and efficient for businesses of all sizes
              across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <Link href="/contact">
                <Button>Work With Us</Button>
              </Link>
              <Link
                href="/services"
                className="text-[13px] font-medium tracking-[0.04em] uppercase text-[#6B6860] hover:text-[#1A1814] transition-colors duration-200"
              >
                Our Services →
              </Link>
            </motion.div>
          </div>

          {/* Right — image + stat card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[4px] aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/about-hero/800/600"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A1814]/15 pointer-events-none" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-[#F7F5F0] border border-[#1A1814]/10 rounded-[4px] p-6">
              <div
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[36px] leading-none tracking-[-0.02em] text-[#1A1814]"
              >
                75+
              </div>
              <div className="mt-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                Countries Served
              </div>
            </div>

            {/* Accent block */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C4873A]/10 rounded-[4px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#1A1814]">
        <div className="container-custom py-24 grid md:grid-cols-2 gap-px bg-[#F7F5F0]/8">

          {[
            {
              label: "Mission",
              heading: "Why We Exist",
              body: "To revolutionize maritime trade by providing expert logistics solutions that empower businesses to move goods across borders with confidence, speed, and transparency. We believe that efficient trade creates economic growth and opportunities for everyone.",
            },
            {
              label: "Vision",
              heading: "Where We're Going",
              body: "To be the most trusted and innovative maritime logistics partner, recognized globally for delivering exceptional results while championing sustainable and ethical trade practices that benefit communities and the environment.",
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
                className="text-[28px] leading-[1.1] tracking-[-0.02em] text-[#F7F5F0]"
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

      {/* ── VALUES ── */}
      <section className="bg-[#F7F5F0]">
        <div className="container-custom py-24">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  What Drives Us
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#1A1814]"
              >
                Our Core <em className="text-[#C4873A]">Values</em>
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-sm md:text-right">
              The principles that guide every decision, partnership, and
              solution we deliver.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-[#1A1814]/8 border border-[#1A1814]/8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-[#F7F5F0] p-8 flex flex-col gap-5 hover:bg-white transition-colors duration-300"
              >
                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[13px] text-[#C4873A] tracking-[0.06em]"
                >
                  {value.number}
                </span>
                <h3 className="text-[16px] font-medium tracking-[-0.01em] text-[#1A1814]">
                  {value.title}
                </h3>
                <span className="w-8 h-px bg-[#1A1814]/15 group-hover:w-12 group-hover:bg-[#C4873A] transition-all duration-300" />
                <p className="text-[13px] font-light leading-[1.75] text-[#6B6860]">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#F7F5F0] border-t border-[#1A1814]/8">
        <div className="container-custom py-24">

          {/* Header */}
          <div className="flex items-center gap-3 mb-16">
            <span className="w-7 h-px bg-[#C4873A]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
              Our Journey
            </span>
          </div>

          {/* Timeline row */}
          <div className="relative grid md:grid-cols-4 gap-0">

            {/* Horizontal connector line */}
            <div className="hidden md:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-[#1A1814]/10" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-start md:items-center text-left md:text-center px-6 py-8 md:py-0"
              >
                {/* Dot */}
                <div className="relative mb-8">
                  <div className="w-11 h-11 rounded-[2px] bg-[#F7F5F0] border border-[#1A1814]/12 flex items-center justify-center z-10 relative">
                    <div className="w-2 h-2 rounded-full bg-[#C4873A]" />
                  </div>
                </div>

                {/* Year */}
                <span
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                  className="text-[28px] leading-none tracking-[-0.02em] text-[#1A1814] mb-3"
                >
                  {m.year}
                </span>

                {/* Title */}
                <h3 className="text-[14px] font-medium tracking-[-0.01em] text-[#1A1814] mb-2">
                  {m.title}
                </h3>

                {/* Desc */}
                <p className="text-[12px] font-light leading-[1.7] text-[#6B6860] max-w-[160px]">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-[#1A1814]">
        <div className="container-custom py-24">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  The Team
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(28px,3vw,44px)] leading-[1.08] tracking-[-0.02em] text-[#F7F5F0]"
              >
                Meet Our <em className="text-[#C4873A]">Leadership</em>
              </h2>
            </div>
            <p className="text-[14px] font-light leading-[1.8] text-[#F7F5F0]/60 max-w-sm md:text-right">
              Experienced leaders united by a passion for transforming global
              trade.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4 bg-[#F7F5F0]/8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group bg-[#1A1814] hover:bg-[#252219] transition-colors duration-300 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 bg-[#252219] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/team${i + 1}/400/300`}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Initials fallback overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-9 h-9 rounded-[2px] bg-[#C4873A]/20 border border-[#C4873A]/30 flex items-center justify-center">
                      <span className="text-[11px] font-medium tracking-[0.06em] text-[#C4873A]">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-3 flex-1">
                  <h3 className="text-[15px] font-medium tracking-[-0.01em] text-[#F7F5F0]">
                    {member.name}
                  </h3>
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#C4873A]">
                    {member.role}
                  </span>
                  <span className="w-6 h-px bg-[#F7F5F0]/15 group-hover:w-10 group-hover:bg-[#C4873A] transition-all duration-300" />
                  <p className="text-[13px] font-light leading-[1.7] text-[#F7F5F0]/60">
                    {member.bio}
                  </p>
                </div>
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
              Let's Work Together
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
              Ready to Work <em className="text-[#C4873A]">With Us?</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-5 text-[14px] font-light leading-[1.8] text-[#6B6860] max-w-lg mx-auto"
            >
              Join hundreds of companies that trust Onwa-na Aku for their
              maritime and logistics needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-5"
            >
              <Link href="/contact">
                <Button>Get In Touch</Button>
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
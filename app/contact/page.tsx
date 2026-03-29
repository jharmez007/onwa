"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "general",
  });

  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
        const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
        });

        const data = await res.json();

        if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
        }

        // ✅ Success
        setSubmitted(true);
        setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
        type: "general",
        });

    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

  const inputClass = `
    mt-2 w-full bg-[#F7F5F0] border border-[#1A1814]/10 rounded-[2px]
    px-4 py-3 text-[13px] text-[#1A1814] placeholder:text-[#B0ADA8]
    outline-none focus:border-[#C4873A] focus:bg-white
    transition-all duration-200
  `;

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
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-[clamp(36px,4.5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#1A1814]"
            >
              Let's Talk{" "}
              <em className="text-[#C4873A]">Logistics</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-[15px] font-light leading-[1.8] text-[#6B6860] max-w-lg"
            >
              Start your project with a free consultation. We'll match you with
              the right experts and strategy within one business day.
            </motion.p>

            {/* Promise list */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col gap-0"
            >
              {[
                "Customized route optimization",
                "Transparent rate comparison",
                "Real-time shipment visibility",
                "Dedicated account management",
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4 border-b border-[#1A1814]/8 first:border-t first:border-[#1A1814]/8"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C4873A] shrink-0" />
                  <span className="text-[13px] font-light text-[#6B6860]">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-[4px] aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/contact-maritime/800/600"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1A1814]/20 pointer-events-none" />
            </div>

            {/* Floating response card */}
            <div className="absolute -bottom-6 -left-6 bg-[#F7F5F0] border border-[#1A1814]/10 rounded-[4px] p-6">
              <div
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[32px] leading-none tracking-[-0.02em] text-[#1A1814]"
              >
                &lt; 24h
              </div>
              <div className="mt-2 text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                Response time
              </div>
            </div>

            {/* Accent block */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C4873A]/10 rounded-[4px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="bg-[#F7F5F0]" id="#contact">
        <div className="container-custom py-24 grid lg:grid-cols-[1fr_400px] gap-12 items-start">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-[#C4873A]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                  Send a Message
                </span>
              </div>
              <h2
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-[clamp(24px,2.5vw,36px)] leading-[1.1] tracking-[-0.02em] text-[#1A1814]"
              >
                How Can We <em className="text-[#C4873A]">Help?</em>
              </h2>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 bg-white border border-[#1A1814]/10 rounded-[4px] p-5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] mt-1.5 shrink-0" />
                  <div>
                    <p className="text-[13px] font-medium text-[#1A1814]">
                      Message received
                    </p>
                    <p className="text-[12px] font-light text-[#6B6860] mt-0.5">
                      One of our advisors will be in touch within one business day.
                    </p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-white border border-red-200 rounded-[4px] p-5"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <div>
                    <p className="text-[13px] font-medium text-red-600">
                        Failed to send message
                    </p>
                    <p className="text-[12px] text-red-500 mt-0.5">
                        {error}
                    </p>
                    </div>
                </motion.div>
               )}

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                    Full Name
                  </span>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={onChange}
                    required
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onChange}
                    required
                    className={inputClass}
                    placeholder="jane@company.com"
                  />
                </label>
              </div>

              {/* Company + Type row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                    Company
                  </span>
                  <input
                    name="company"
                    value={formState.company}
                    onChange={onChange}
                    className={inputClass}
                    placeholder="Atlantic Logistics Ltd."
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                    Inquiry Type
                  </span>
                  <select
                    name="type"
                    value={formState.type}
                    onChange={onChange}
                    className={inputClass}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="quote">Quote Request</option>
                    <option value="support">Existing Client Support</option>
                  </select>
                </label>
              </div>

              {/* Message */}
              <label className="block">
                <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8]">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={onChange}
                  rows={6}
                  required
                  className={inputClass}
                  placeholder="Tell us about your challenge and timeline..."
                />
              </label>

              <div className="flex items-center gap-5 pt-2">
                <Button>{loading ? "Sending..." : "Send Message"}</Button>
                <span className="text-[12px] font-light text-[#B0ADA8]">
                  We respond within 24 hours
                </span>
              </div>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-px bg-[#1A1814]/8 border border-[#1A1814]/8"
          >
            {/* Contact info */}
            <div className="bg-[#F7F5F0] p-8 flex flex-col gap-5">
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Contact Information
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Email",  value: "cajetanemeka@yahoo.com" },
                  { label: "Phone",  value: "+234 806 087 3957"      },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium tracking-[0.08em] uppercase text-[#B0ADA8] mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-[#1A1814]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#F7F5F0] p-8 flex flex-col gap-5">
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Offices
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { city: "Lagos",     address: "21 Road, 2nd Avenue, Festac Town, Lagos, Nigeria" },
                  { city: "Abuja",     address: "Bitmore, Lugbe, Abuja, Nigeria"     },
                  { city: "Manchester", address: "Harbourside Tower, Manchester, UK"    },
                ].map((office) => (
                  <div key={office.city}>
                    <p className="text-[11px] font-medium text-[#1A1814]">
                      {office.city}
                    </p>
                    <p className="text-[12px] font-light text-[#B0ADA8]">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Live support */}
            <div className="bg-[#1A1814] p-8 flex flex-col gap-5">
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#C4873A]">
                Need Help Now?
              </span>
              <div>
                <p className="text-[13px] font-light leading-[1.7] text-[#F7F5F0]/65">
                  Live chat and phone support available around the clock for
                  urgent shipment and operations queries.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF7D] animate-pulse" />
                <span className="text-[12px] text-[#F7F5F0]/60">
                  Support agents online now
                </span>
              </div>
              <Link href="https://wa.me/message/H64N6ZOI6ZEMB1" target="_blank" rel="noopener noreferrer">
                <button className="self-start text-[12px] font-medium tracking-[0.06em] uppercase text-[#F7F5F0] border border-[#F7F5F0]/15 px-5 py-3 rounded-[2px] hover:bg-[#F7F5F0]/8 transition-colors duration-200">
                  Start Live Chat
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
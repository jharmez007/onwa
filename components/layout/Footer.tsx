import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }} className="bg-[#1A1814] text-[#F7F5F0]">

      {/* Main Footer Grid */}
      <div className="container-custom py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Company Info */}
        <div className="lg:col-span-1">
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            className="text-[22px] tracking-[-0.01em] text-[#F7F5F0]"
          >
            Onwa-na Aku
          </h2>
          <p className="mt-5 text-[13px] font-light leading-[1.8] text-[#F7F5F0]/55 max-w-[220px]">
            Expert maritime consulting, logistics solutions, and supply chain
            optimization for global trade operations.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#F7F5F0]/35 mb-5">
            Company
          </h4>
          <ul className="space-y-3.5">
            {[
              { name: "About",        href: "/about"        },
              { name: "Services",     href: "/services"     },
              { name: "Industries",   href: "/industries"   },
              { name: "Case Studies", href: "/case-studies" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13px] text-[#F7F5F0]/55 hover:text-[#F7F5F0] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#F7F5F0]/35 mb-5">
            Services
          </h4>
          <ul className="space-y-3.5">
            {[
              "Maritime Consulting",
              "Freight & Transport",
              "Supply Chain Optimization",
              "Port Advisory",
            ].map((service) => (
              <li key={service} className="text-[13px] text-[#F7F5F0]/55">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#F7F5F0]/35 mb-5">
            Contact
          </h4>
          <ul className="space-y-3.5">
            {[
              { label: "Email",    value: "cajetanemeka@yahoo.com" },
              { label: "Phone",    value: "+234 806 087 3957"   },
              { label: "Location", value: "Lagos, Nigeria"      },
            ].map((item) => (
              <li key={item.label} className="text-[13px]">
                <span className="text-[#F7F5F0]/30">{item.label} · </span>
                <span className="text-[#F7F5F0]/55">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F7F5F0]/8">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#F7F5F0]/30">
            © {new Date().getFullYear()} Onwa-na Aku. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] text-[#F7F5F0]/30 hover:text-[#F7F5F0]/65 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
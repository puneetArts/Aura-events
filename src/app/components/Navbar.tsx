"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F1F3D] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#C9A84C] text-2xl font-bold tracking-widest uppercase">Aura</span>
          <span className="text-white text-2xl font-light tracking-widest uppercase">Events</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === l.href
                    ? "text-[#C9A84C] border-b border-[#C9A84C] pb-0.5"
                    : "text-gray-300 hover:text-[#C9A84C]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#0F1F3D] text-sm font-bold tracking-widest uppercase px-5 py-2 hover:bg-[#e2c47a] transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0F1F3D] border-t border-[#1a3260] px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm tracking-widest uppercase border-b border-[#1a3260] ${
                pathname === l.href ? "text-[#C9A84C]" : "text-gray-300"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-[#C9A84C] text-[#0F1F3D] text-sm font-bold tracking-widest uppercase px-5 py-2 text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

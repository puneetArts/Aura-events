import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F3D] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#C9A84C] text-xl font-bold tracking-widest uppercase">Aura</span>
            <span className="text-white text-xl font-light tracking-widest uppercase">Events</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Crafting extraordinary experiences for corporates, NGOs, and beyond. Based in Gurugram, Haryana.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[#C9A84C] transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Gurugram, Haryana, India</li>
            <li>👤 Prakriti Saxena — Founder</li>
            <li>✉️ contact@auraevents.in</li>
          </ul>
          <div className="flex gap-4 mt-5">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/auraevents-india/" },
              { label: "Instagram", href: "#" },
              { label: "Facebook", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#C9A84C] transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a3260] text-center py-5 text-xs text-gray-500 tracking-widest uppercase">
        © {new Date().getFullYear()} Aura Events. All Rights Reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import StatCounter from "./components/StatCounter";

const services = [
  {
    title: "Corporate Events",
    desc: "Annual meets, product launches, leadership summits, and brand activations executed with precision.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    title: "NGO & CSR Events",
    desc: "Meaningful gatherings that amplify social impact — awareness drives, fundraisers, and community outreach.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
  },
  {
    title: "Conferences & Summits",
    desc: "End-to-end management of large-scale conferences, panel discussions, and industry summits.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
  },
];

const stats = [
  { value: "25+", label: "Events Delivered" },
  { value: "10+", label: "Corporate Clients" },
  { value: "06+", label: "NGO Partners" },
  { value: "05+", label: "Years of Excellence" },
];

const testimonials = [
  {
    name: "Yuvraj Singh",
    role: "President, Synexus Enterprises",
    quote:
      "Aura Events transformed our annual summit into an unforgettable experience. Flawless execution from start to finish.",
  },
  {
    name: "Ved Prakash",
    role: "VP, Eagle Security Services",
    quote:
      "Their understanding of NGO sensibilities is remarkable. Our fundraiser exceeded all expectations thanks to the Aura team.",
  },
  {
    name: "Arvind Verma",
    role: "MD, RK Services",
    quote:
      "Professional, creative, and deeply committed. Aura Events is our go-to partner for every CSR initiative.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=85"
          alt="Aura Events Hero"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-[#0F1F3D]/87" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Gurugram, Haryana
          </p>
          <h1
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Events That Leave
            <br />
            <span className="text-[#C9A84C]">An Aura</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium event management for corporates, NGOs, CSR initiatives, and beyond.
            We craft experiences that resonate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#C9A84C] text-[#0F1F3D] font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#F8F5EF] transition-colors duration-200"
            >
              Explore Services
            </Link>
            <Link
              href="/contact#contact-form"
              className="border border-white text-white font-light tracking-widest uppercase px-8 py-4 hover:bg-[#F8F5EF] hover:text-[#0F1F3D] transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-[#0F1F3D] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed tracking-wide">
            <span className="text-[#C9A84C] font-semibold">Aura Events</span> is a Gurugram-based
            full-service event management company trusted by leading corporates, NGOs, and government
            bodies across India to deliver impactful, seamless, and memorable events.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F8F5EF] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-[#C9A84C] text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <StatCounter value={s.value} />
              </p>
              <p className="text-[#0F1F3D] text-sm tracking-widest uppercase font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">What We Do</p>
            <h2
              className="text-[#0F1F3D] text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0F1F3D]/30 group-hover:bg-[#0F1F3D]/10 transition-colors duration-300" />
                </div>
                <div className="bg-white p-6 border-b-2 border-[#C9A84C]">
                  <h3
                    className="text-[#0F1F3D] text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="border-2 border-[#0F1F3D] text-[#0F1F3D] font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#0F1F3D] hover:text-white transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Aura */}
      <section className="bg-[#F8F5EF] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative h-96 overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
              alt="Why Aura Events"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0F1F3D]/20" />
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2
              className="text-[#0F1F3D] text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Where Vision Meets
              <br />Flawless Execution
            </h2>
            <ul className="space-y-4">
              {[
                "End-to-end event planning and on-ground management",
                "Dedicated team with 8+ years of industry experience",
                "Tailored concepts aligned with your brand identity",
                "Transparent budgeting with zero hidden costs",
                "Pan-India execution with Gurugram as our home base",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                  <span className="text-[#C9A84C] mt-1 text-lg leading-none">✦</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-[#0F1F3D] text-white font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#1a3260] transition-colors duration-200"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0F1F3D] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Client Stories</p>
            <h2
              className="text-white text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#1a3260] p-8 border-t-2 border-[#C9A84C]">
                <p className="text-[#C9A84C] text-3xl mb-4">"</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[#C9A84C] text-xs tracking-wide mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1F3D]/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Create Something
            <span className="text-[#C9A84C]"> Extraordinary?</span>
          </h2>
          <p className="text-gray-300 text-lg font-light mb-10">
            Let's talk about your next event. Our team is ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="bg-[#C9A84C] text-[#0F1F3D] font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#F8F5EF] transition-colors duration-200 text-sm"
          >
            Start Planning Today
          </Link>
        </div>
      </section>
    </>
  );
}

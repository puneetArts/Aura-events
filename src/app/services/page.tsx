import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Corporate Events",
    desc: "From annual general meetings and product launches to leadership conclaves and brand activations — we handle every detail with boardroom-level precision. Our team ensures your corporate event reflects your brand's stature.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Annual Meets", "Product Launches", "Brand Activations", "Award Ceremonies"],
  },
  {
    title: "NGO Events",
    desc: "We understand the heart behind every NGO initiative. Our team crafts events that amplify your message, engage your audience, and drive meaningful action — all within your budget.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    tags: ["Awareness Campaigns", "Fundraisers", "Community Outreach", "Charity Galas"],
  },
  {
    title: "CSR Events",
    desc: "Corporate Social Responsibility done right. We design CSR events that genuinely connect your brand with communities, creating lasting impact and authentic storytelling opportunities.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    tags: ["Tree Plantation Drives", "Skill Development", "Health Camps", "CSR Summits"],
  },
  {
    title: "Conferences & Summits",
    desc: "Large-scale conferences, industry summits, and panel discussions managed end-to-end — from venue selection and AV setup to speaker coordination and delegate management.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
    tags: ["Industry Conferences", "Panel Discussions", "TEDx-style Events", "Workshops"],
  },
  {
    title: "Government & Institutional Events",
    desc: "Protocol-sensitive events for government bodies, public sector undertakings, and educational institutions. We bring structure, dignity, and scale to every official occasion.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    tags: ["Republic Day Events", "Institutional Ceremonies", "PSU Events", "Felicitation Programs"],
  },
  {
    title: "Exhibition & Expo Management",
    desc: "Stall design, logistics, visitor management, and on-ground coordination for trade shows, expos, and exhibitions. We make your brand stand out on the floor.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    tags: ["Trade Shows", "Product Expos", "Stall Design", "B2B Networking Events"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F1F3D]/75" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F8F5EF] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <span className="text-[#0F1F3D] font-semibold">Aura Events</span>, we offer a full spectrum
            of event management services tailored to your goals. Whether it's a high-stakes corporate summit
            or a grassroots NGO drive, we bring the same level of dedication and craft to every event.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#F8F5EF] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0F1F3D]/25" />
              </div>
              <div className="p-6 flex flex-col flex-1 border-b-2 border-[#C9A84C]">
                <h3
                  className="text-[#0F1F3D] text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#0F1F3D] text-[#C9A84C] px-3 py-1 tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#0F1F3D] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">How We Work</p>
            <h2
              className="text-white text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Discover", desc: "We understand your goals, audience, and vision." },
              { step: "02", title: "Design", desc: "We craft a tailored concept and detailed plan." },
              { step: "03", title: "Execute", desc: "Our team manages every detail on the ground." },
              { step: "04", title: "Deliver", desc: "A flawless event and post-event report." },
            ].map((p) => (
              <div key={p.step} className="flex flex-col items-center">
                <span
                  className="text-[#C9A84C] text-5xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.step}
                </span>
                <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F5EF] py-16 px-6 text-center">
        <h2
          className="text-[#0F1F3D] text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Have an Event in Mind?
        </h2>
        <p className="text-gray-500 mb-8 text-sm">Let's discuss how we can make it exceptional.</p>
        <Link
          href="/contact"
          className="bg-[#C9A84C] text-[#0F1F3D] font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#e2c47a] transition-colors duration-200 text-sm"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}

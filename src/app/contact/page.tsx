import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F1F3D]/75" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Body */}
      <section className="bg-[#F8F5EF] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Form */}
          <div id="contact-form" className="bg-white p-10 shadow-md border-t-4 border-[#C9A84C]">
            <h2
              className="text-[#0F1F3D] text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let's Plan Together
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the details below and our team will get back to you within 24 hours.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                    Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Company / NGO Name"
                    className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                  Event Type
                </label>
                <select className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors">
                  <option value="">Select an event type</option>
                  <option>Corporate Event</option>
                  <option>NGO Event</option>
                  <option>CSR Event</option>
                  <option>Conference / Summit</option>
                  <option>Government / Institutional</option>
                  <option>Exhibition / Expo</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#0F1F3D] mb-2 font-medium">
                  Tell Us About Your Event
                </label>
                <textarea
                  rows={4}
                  placeholder="Brief description of your event, expected date, location, and number of attendees..."
                  className="w-full border border-gray-200 bg-[#F8F5EF] px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0F1F3D] text-white font-bold tracking-widest uppercase py-4 hover:bg-[#1a3260] transition-colors duration-200 text-sm"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Our Office</p>
              <h2
                className="text-[#0F1F3D] text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Find Us in Gurugram
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "Ardee The Residency, Sector 52, Gurugram, Haryana 122003",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 9116660157",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "planwithaura@gmail.com",
                  },
                  
                  {
                    icon: "🕐",
                    label: "Working Hours",
                    value: "Mon – Sat: 9:00 AM – 7:00 PM",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-gray-600 text-sm">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Gurugram Location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0F1F3D]/40 flex items-center justify-center">
                <a
                  href="https://maps.google.com/?q=Ardee+The+Residency+Apartments,+The+Residency,+C403,+Ardee+City+Gate+Number+2+Rd,+Ardee+City,+Sector+52,+Gurugram,+Haryana+122003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A84C] text-[#0F1F3D] font-bold tracking-widest uppercase px-6 py-3 text-xs hover:bg-[#e2c47a] transition-colors duration-200"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#0F1F3D] font-semibold mb-4">
                Follow Us
              </p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/auraevents-india/" },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/auraevents.official?igsh=MTB3YWNpdTBvamN6Zg==",
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/share/14ZJCQ8UJCQ/",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest uppercase border border-[#0F1F3D] text-[#0F1F3D] px-4 py-2 hover:bg-[#0F1F3D] hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Diary */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[520px] overflow-hidden shadow-lg">
            <Image
              src="/images/Owner.png"
              alt="Founder of Aura Events"
              fill
              className="object-cover object-[35%_0%] md:object-center"
            />
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Owner Diary</p>
            <h2
              className="text-[#0F1F3D] text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Founder, Prakriti Saxena
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I'm Prakriti Saxena, the founder of Aura Events — Making Moments Grand. For me, events have always
              been more than just planning and execution — they are about creating experiences that people remember
              and feel. The idea behind Aura Events came from a simple belief: that every event, whether corporate or
              community-driven, should be handled with clarity, care, and attention to detail. I naturally focus on
              structure, organization, and responsibility, and I bring that into every event I work on. I believe in
              keeping things transparent, managing every detail with precision, and ensuring that clients feel
              confident and stress-free throughout the process. As I build Aura Events, my goal is to create a brand
              that people can trust — not just for delivering events, but for delivering them with consistency and
              sincerity. This is just the beginning of my journey, and I'm committed to learning, growing, and making
              every moment truly grand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

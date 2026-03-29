import Image from "next/image";

export default function OwnerDiaryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden bg-[#0F1F3D]">
        <div className="absolute inset-0 bg-[#0F1F3D]" />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Behind The Brand</p>
          <h1
            className="text-white text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Owner's Diary
          </h1>
        </div>
      </section>

      {/* Owner Diary */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[520px] overflow-hidden">
            <Image
              src="/images/OwnerPic.jpg"
              alt="Founder of Aura Events"
              fill
              className="object-cover object-[35%_0%] md:object-center"
            />
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">Owner's Diary</p>
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

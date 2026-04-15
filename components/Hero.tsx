"use client";

const stats = [
  { value: "$3M", label: "Q1 2026 Revenue" },
  { value: "1,800+", label: "Entrepreneurs" },
  { value: "9", label: "Business Units" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-[1100px] mx-auto w-full animate-fade-in">
        <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Modern Amenities Holding Company
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#111827]">
          The Entrepreneurial
          <br />
          <span className="text-[#6D5DD3]">Disneyland</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6B7280] max-w-[720px] leading-relaxed mb-12">
          Most companies are funnels. Customers enter at the top, money comes
          out the bottom, and you start over tomorrow. We&rsquo;re building
          something different &mdash; a system where every business unit feeds
          every other business unit, where acquiring one customer unlocks five
          revenue streams, and where the things we build today are worth more in
          five years than they are today.
        </p>

        <div className="flex flex-wrap gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#E5E7EB] bg-white rounded-lg px-8 py-5 min-w-[180px] shadow-sm"
            >
              <div className="text-3xl font-bold text-[#111827] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#6B7280]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1000">
        <span className="text-xs text-[#6B7280] tracking-widest uppercase">
          Scroll to explore
        </span>
        <div className="w-5 h-8 border border-[#D1D5DB] rounded-full flex justify-center pt-1.5 animate-bounce-slow">
          <div className="w-1 h-2 bg-[#9CA3AF] rounded-full" />
        </div>
      </div>
    </section>
  );
}

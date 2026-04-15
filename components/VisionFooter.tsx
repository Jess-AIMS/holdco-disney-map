"use client";

const milestones = [
  { label: "Q2 2026", value: "$3.7M", sub: "Revenue / $933K profit" },
  { label: "1-Year", value: "$14.9M", sub: "Revenue / $3.7M profit" },
  { label: "Future State", value: "$50M", sub: "Revenue / $12.5M profit" },
  { label: "10-Year", value: "$500M", sub: "25+ journeys / 10K entrepreneurs" },
];

export default function VisionFooter() {
  return (
    <section className="py-24 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          The Destination
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-8 text-[#111827]">
          The 10-year target
        </h2>
        <blockquote className="text-lg md:text-xl text-[#6B7280] max-w-[800px] leading-relaxed mb-12 border-l-2 border-[#6D5DD3] pl-6">
          100+ business vehicles. $500M in annual revenue. 10,000
          entrepreneurs launched. Not by building one giant company &mdash; by
          building an ecosystem where every piece makes every other piece
          stronger. That&rsquo;s the Disney model. That&rsquo;s what
          we&rsquo;re building.
        </blockquote>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {milestones.map((m) => (
            <div
              key={m.label}
              className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm"
            >
              <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
                {m.label}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-[#111827] mb-1">
                {m.value}
              </p>
              <p className="text-xs text-[#6B7280]">{m.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-[#6B7280] pt-8 border-t border-[#E5E7EB]">
          <p>Modern Amenities Holding Company &mdash; Internal SLT Strategy Document</p>
          <p className="mt-1 text-xs text-[#9CA3AF]">
            Confidential. April 2026.
          </p>
        </div>
      </div>
    </section>
  );
}

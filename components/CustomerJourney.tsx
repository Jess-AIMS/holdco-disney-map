"use client";

import SectionWrapper from "./SectionWrapper";

const stages = [
  {
    time: "Month 0",
    title: "Enrollment",
    description:
      "Customer pays $6\u201312K for VP coaching. BTC earns its commission. AM\u2019s marketing cost is recovered.",
    entities: ["VP", "BTC", "AM"],
    revenue: "$6\u201312K",
    revenueNum: 9000,
    color: "#059669",
  },
  {
    time: "Month 1\u20133",
    title: "Launch",
    description:
      "Customer subscribes to VendHub ($1,200/yr). Buys first vending machine and initial product inventory through VH marketplace.",
    entities: ["VH"],
    revenue: "+$2,500",
    revenueNum: 11500,
    color: "#D97706",
  },
  {
    time: "Month 3\u20136",
    title: "Growth",
    description:
      "Customer places machines at MA national locations. MA earns 3% rev share on every sale. Customer buys more inventory and equipment through VH.",
    entities: ["MA", "VH"],
    revenue: "+$3,200",
    revenueNum: 14700,
    color: "#2563EB",
  },
  {
    time: "Month 6\u201312",
    title: "Success Loop",
    description:
      "Customer\u2019s success becomes a case study. AM uses the story for content and lead gen. Content generates new leads. BTC closes new members. The loop restarts.",
    entities: ["AM", "BTC"],
    revenue: "+$2,400",
    revenueNum: 17100,
    color: "#DB2777",
  },
  {
    time: "Year 2+",
    title: "Compound",
    description:
      "Customer refers others organically. Becomes a power user on VH (higher spend). Purchases AI tools from the VH marketplace. Revenue compounds without re-acquisition.",
    entities: ["VP", "VH", "AW"],
    revenue: "+$4,000+",
    revenueNum: 21100,
    color: "#6D5DD3",
  },
];

export default function CustomerJourney() {
  return (
    <SectionWrapper id="customer-journey">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        Compound Customer Value
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        One customer, six revenue streams
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        This is what compound customer value looks like. A single entrepreneur
        who joins VendingPreneurs doesn&rsquo;t just pay us once &mdash; they
        enter an ecosystem where every success creates more revenue.
      </p>

      <div className="relative">
        <div className="absolute left-[28px] md:left-[32px] top-0 bottom-0 w-px bg-[#E5E7EB]" />

        <div className="space-y-2">
          {stages.map((stage) => (
            <div key={stage.title} className="relative flex gap-6 pl-2">
              <div className="relative z-10 shrink-0 mt-6">
                <div
                  className="w-3.5 h-3.5 rounded-full border-2 border-[#FAFAFA]"
                  style={{ backgroundColor: stage.color }}
                />
              </div>

              <div className="flex-1 border border-[#E5E7EB] bg-white rounded-lg p-5 md:p-6 mb-2 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs text-[#9CA3AF] font-mono">
                      {stage.time}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold mt-1 text-[#111827]">
                      {stage.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: stage.color }}>
                      {stage.revenue}
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Running total:{" "}
                      <span className="text-[#111827] font-medium">
                        ${stage.revenueNum.toLocaleString()}+
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
                  {stage.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.entities.map((entity) => (
                    <span
                      key={entity}
                      className="text-[10px] px-2 py-0.5 rounded border border-[#E5E7EB] text-[#6B7280] bg-[#F9FAFB]"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#6D5DD3]/20 bg-[#6D5DD3]/5 rounded-lg p-6 ml-12 md:ml-14">
          <p className="text-lg font-[family-name:var(--font-playfair)] font-bold mb-2 text-[#111827]">
            $21,000+ lifetime value from one $9K acquisition
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            That&rsquo;s a 2.3x+ return &mdash; and it keeps growing. The
            $6&ndash;12K enrollment is just the entry point. The real value is
            in the 5+ recurring streams that follow. This is why the complexity
            exists. This is what compound customer value means.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

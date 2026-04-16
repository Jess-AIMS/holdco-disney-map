"use client";

import SectionWrapper from "./SectionWrapper";

const coreValues = [
  {
    name: "Relentlessly Curious",
    description: "We can\u2019t innovate if at first we don\u2019t listen",
  },
  {
    name: "Create Better Ways",
    description: "We innovate to make things simpler and smarter",
  },
  {
    name: "Do What You Say",
    description: "We follow through, every time. Deadlines matter.",
  },
  {
    name: "Family First (Team Always)",
    description: "We care like family and win like a team",
  },
];

const targets = [
  { label: "1-Year (2027)", value: "$14.9M", sub: "Revenue / $3.7M profit" },
  { label: "Future State", value: "$50M", sub: "Revenue / $12.5M profit" },
  { label: "10-Year (2035)", value: "$500M", sub: "100+ vehicles / 10K entrepreneurs" },
];

const oneYearGoals = [
  "CAC reduced 40%",
  "New vending machine brand launched inside VP",
  "1,000 new national properties installed",
  "VendingPreneurs app rolled out in rinse-and-repeat way",
  "4 new Entrepreneur Journeys with BTC doing sales closing",
];

export default function CompanyVision() {
  return (
    <SectionWrapper id="company-vision">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        Company Vision
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        The V/TO &mdash; Where we&rsquo;re going and why
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        Everything we build ladders up to a single vision. This is the
        foundation that every rock, every hire, and every new offer should
        connect back to.
      </p>

      {/* Purpose + Niche + Target Market */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-6 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Purpose</p>
          <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#111827]">
            Helping people become entrepreneurs
          </p>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-6 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Niche</p>
          <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#111827]">
            Entrepreneurship coaching &amp; business management services
          </p>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-6 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Target Market</p>
          <p className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#111827]">
            Freedom-seeking entrepreneurs ready to build generational impact
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-[#111827]">
        Core Values
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {coreValues.map((v, i) => (
          <div
            key={v.name}
            className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm"
          >
            <span className="text-xs font-mono text-[#6D5DD3] font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-semibold text-sm text-[#111827] mt-1 mb-1">
              {v.name}
            </h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {v.description}
            </p>
          </div>
        ))}
      </div>

      {/* Three Uniques + Guarantee */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-[#111827]">
        What makes us different
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Unique #1</p>
          <p className="font-semibold text-[#111827]">Built to Innovate</p>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Unique #2</p>
          <p className="font-semibold text-[#111827]">Proven Process</p>
          <p className="text-xs text-[#6B7280] mt-1">The Entrepreneur&rsquo;s Journey&trade;</p>
        </div>
        <div className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm">
          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">Our Guarantee</p>
          <p className="font-semibold text-[#111827]">&ldquo;We walk with you until you win&rdquo;</p>
        </div>
      </div>

      {/* Financial Targets */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-[#111827]">
        Where we&rsquo;re headed
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {targets.map((t) => (
          <div
            key={t.label}
            className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm"
          >
            <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">
              {t.label}
            </p>
            <p className="text-3xl font-bold text-[#111827] mb-1">{t.value}</p>
            <p className="text-xs text-[#6B7280]">{t.sub}</p>
          </div>
        ))}
      </div>

      {/* 1-Year Goals */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-4 text-[#111827]">
        1-year goals
      </h3>
      <div className="border border-[#E5E7EB] bg-white rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {oneYearGoals.map((goal) => (
            <div key={goal} className="flex items-start gap-2">
              <span className="text-[#059669] mt-0.5 shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5.5 8l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-sm text-[#374151]">{goal}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

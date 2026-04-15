"use client";

import SectionWrapper from "./SectionWrapper";

const priorities = [
  {
    number: "01",
    title: "VendHub Adoption",
    tagline: "This is free money",
    color: "#059669",
    math: "100 \u2192 500 subscribers at $1,200/yr = $480K new ARR with zero customer acquisition cost",
    question:
      "Why are only 5.5% of VP members subscribing? Is it awareness, value perception, onboarding friction, or product gaps?",
    action:
      "Diagnose the adoption blocker, fix it, and push attach rate to 40%+",
    timeline: "90 days",
  },
  {
    number: "02",
    title: "Close the Content Loop",
    tagline: "Turn 1,800 success stories into leads",
    color: "#6D5DD3",
    math: "1,800 operators generating real results that should automatically feed our content engine",
    question:
      "The operator success \u2192 content \u2192 lead gen \u2192 BTC close \u2192 new member pipeline isn\u2019t automated. It\u2019s manual and inconsistent.",
    action:
      "Build the automated pipeline: operator reports result \u2192 AM content drafted \u2192 published across channels",
    timeline: "90 days",
  },
  {
    number: "03",
    title: "Land First External AIMS Sale",
    tagline: "Turn a cost center into a business",
    color: "#D97706",
    math: "Even $5K validates the model. The difference between \u201Cwe built these for ourselves\u201D and \u201Can external company paid us\u201D changes the AIMS narrative.",
    question:
      "AIMS has proven internal systems (marketing engines, AI tools, automation). One external sale validates the entire Rule 6 thesis.",
    action:
      "Identify one YPO contact, scope a paid pilot, close it, document the case study",
    timeline: "90 days",
  },
];

export default function Priorities() {
  return (
    <SectionWrapper id="priorities">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        90-Day Priorities
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        Three moves that matter most right now
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        If we execute these three things in the next 90 days, we unlock more
        compound value than anything else on our roadmap.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {priorities.map((p) => (
          <div
            key={p.number}
            className="border border-[#E5E7EB] bg-white rounded-lg p-6 flex flex-col shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                style={{
                  color: p.color,
                  backgroundColor: p.color + "10",
                }}
              >
                {p.number}
              </span>
              <span className="text-xs text-[#9CA3AF] uppercase tracking-wider">
                {p.timeline}
              </span>
            </div>

            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-1 text-[#111827]">
              {p.title}
            </h3>
            <p className="text-sm text-[#6B7280] mb-5 italic">{p.tagline}</p>

            <div
              className="rounded-md px-4 py-3 mb-4 text-sm leading-relaxed text-[#374151]"
              style={{
                backgroundColor: p.color + "08",
                borderLeft: `3px solid ${p.color}`,
              }}
            >
              {p.math}
            </div>

            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
              {p.question}
            </p>

            <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#374151]">
                <span className="font-semibold">Action: </span>
                {p.action}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

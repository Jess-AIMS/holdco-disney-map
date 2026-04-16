"use client";

import SectionWrapper from "./SectionWrapper";
import Governance from "./Governance";

interface Entity {
  id: string;
  name: string;
  role: string;
  status: "revenue" | "building" | "issue";
  statusLabel: string;
  model: string;
  keyMetric: string;
  linksTo: string[];
  gap?: string;
}

const entities: Entity[] = [
  {
    id: "vp",
    name: "VendingPreneurs",
    role: "Business coaching",
    status: "revenue",
    statusLabel: "Revenue-generating",
    model: "$6\u201312K enrollment",
    keyMetric: "1,800 members",
    linksTo: [
      "\u2192 Operators become MA subcontractors",
      "\u2192 Members feed VH marketplace",
      "\u2192 Commissions to BTC",
      "\u2192 Success stories to AM",
      "\u2190 Leads from AM, deals from BTC, locations from MA",
    ],
  },
  {
    id: "ma",
    name: "Modern Amenities",
    role: "National deal machine",
    status: "revenue",
    statusLabel: "Revenue-generating",
    model: "3% rev share per location",
    keyMetric: "1,000+ locations",
    linksTo: [
      "\u2192 Location deals make VP offer irresistible",
      "\u2190 Trained operators from VP",
      "\u2190 Leads from AM",
    ],
  },
  {
    id: "vh",
    name: "VendHub",
    role: "Marketplace & software",
    status: "building",
    statusLabel: "Building",
    model: "$1,200/yr subscription",
    keyMetric: "100 active subscribers",
    linksTo: [
      "\u2192 Products/equipment retain VP members",
      "\u2192 Distribution channel for AW products",
      "\u2190 Captive audience from VP",
    ],
    gap: "5.5% attach rate. 100 of 1,800 VP members. $960K ARR on the table.",
  },
  {
    id: "btc",
    name: "Breakthrough Closing",
    role: "Sales engine",
    status: "building",
    statusLabel: "Transitioning",
    model: "20% of closed deals",
    keyMetric: "2 new external offers launching",
    linksTo: [
      "\u2192 Closes deals for VP (and future offers)",
      "\u2192 Routes non-VP leads to AOC",
      "\u2190 New offers from Incubator",
      "\u2190 Leads from AM",
    ],
  },
  {
    id: "am",
    name: "AIMS Marketing",
    role: "Lead factory",
    status: "building",
    statusLabel: "Pre-revenue shared service",
    model: "Future: productized marketing systems",
    keyMetric: "Generates leads for VP, MA, MedPro",
    linksTo: [
      "\u2192 Leads to VP (YouTube, SEO, paid, organic)",
      "\u2192 Leads to MA (LinkedIn, cold email, outbound)",
      "\u2190 AI systems from AW",
      "\u2190 Success stories from VP",
    ],
  },
  {
    id: "aw",
    name: "AIMS WildDucks",
    role: "AI Innovation & R&D",
    status: "building",
    statusLabel: "Pre-revenue build mode",
    model: "Future: $20K+ engagements, MRR products",
    keyMetric: "Internal clients only (building)",
    linksTo: [
      "\u2192 AI products to VH marketplace",
      "\u2192 Marketing automation to AM",
      "\u2192 Products for AOC operators to resell",
      "\u2190 Testing ground from VP (1,800 operators)",
      "\u2190 Consulting revenue from MedPro",
    ],
  },
  {
    id: "inc",
    name: "AIMS Incubator",
    role: "New offer factory",
    status: "building",
    statusLabel: "Active \u2014 building AOC",
    model: "Cost center \u2192 graduates become P&Ls",
    keyMetric: "First offer: AI Operator Collective",
    linksTo: [
      "\u2192 New offers to BTC to close",
      "\u2192 Designed AOC (first non-VP journey)",
      "\u2190 Market signal from BTC",
      "\u2190 Tech capabilities from AW",
    ],
  },
  {
    id: "aoc",
    name: "AI Operator Collective",
    role: "The next VP",
    status: "building",
    statusLabel: "In build",
    model: "Coaching enrollment + product resales",
    keyMetric: "Validates the VP\u2192MA replication thesis",
    linksTo: [
      "\u2192 Product revenue back to AW",
      "\u2190 Enrolled members from BTC",
      "\u2190 AI products to resell from AW",
    ],
  },
  {
    id: "mp",
    name: "MedPro",
    role: "Medical waste (consulting client)",
    status: "issue",
    statusLabel: "One-directional",
    model: "Consulting fees to AIMS",
    keyMetric: "Board member\u2019s company",
    linksTo: [
      "\u2192 Consulting revenue to AW",
      "\u2190 Marketing services from AM",
      "\u2190 AI innovation from AW",
    ],
    gap: "Doesn\u2019t feed customers, content, or IP back. Evolution path: case study factory for AIMS external sales.",
  },
];

const statusColors = {
  revenue: { color: "#059669", bg: "#D1FAE5", label: "Revenue" },
  building: { color: "#D97706", bg: "#FEF3C7", label: "Building" },
  issue: { color: "#DC2626", bg: "#FEE2E2", label: "Needs Attention" },
};

export default function WhereWeAre() {
  return (
    <>
      <SectionWrapper id="where-we-are">
        <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Where We&rsquo;re At
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
          The 9 entities and their current status
        </h2>
        <p className="text-[#6B7280] text-lg max-w-[720px] mb-8">
          Each entity has a role in the flywheel. Here&rsquo;s where every piece
          stands today &mdash; what&rsquo;s generating revenue, what&rsquo;s
          building, and where the gaps are.
        </p>

        {/* Status legend */}
        <div className="flex gap-4 mb-8 text-xs">
          {Object.values(statusColors).map((s) => (
            <span key={s.label} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-[#6B7280]">{s.label}</span>
            </span>
          ))}
        </div>

        {/* Entity cards */}
        <div className="space-y-4">
          {entities.map((entity) => {
            const sc = statusColors[entity.status];
            return (
              <div
                key={entity.id}
                className="border border-[#E5E7EB] bg-white rounded-xl p-5 md:p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: sc.color }}
                    />
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#111827]">
                        {entity.name}
                      </h3>
                      <p className="text-xs text-[#6B7280]">{entity.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{ color: sc.color, backgroundColor: sc.bg }}
                    >
                      {entity.statusLabel}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">Revenue model</p>
                    <p className="text-sm text-[#374151]">{entity.model}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">Key metric</p>
                    <p className="text-sm text-[#374151]">{entity.keyMetric}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-0.5">Synergy links</p>
                    <div className="space-y-0.5">
                      {entity.linksTo.map((link, i) => (
                        <p key={i} className="text-xs text-[#6B7280]">{link}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {entity.gap && (
                  <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-md px-4 py-2.5 mt-2">
                    <p className="text-xs text-[#92400E]">
                      <span className="font-semibold">Gap: </span>
                      {entity.gap}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Governance sits under "Where We're At" */}
      <Governance />
    </>
  );
}

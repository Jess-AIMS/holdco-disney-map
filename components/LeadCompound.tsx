"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    id: 1,
    label: "Lead Enters",
    entity: "AM",
    entityFull: "AIMS Marketing",
    color: "#2563EB",
    description: "YouTube, SEO, LinkedIn, paid media, or organic social brings a prospective entrepreneur into the funnel.",
    revenue: null,
    cumulative: null,
  },
  {
    id: 2,
    label: "BTC Closes",
    entity: "BTC",
    entityFull: "Breakthrough Closing",
    color: "#6D5DD3",
    description: "BTC qualifies the lead and routes them to the best-fit offer. VP is the primary, but AOC or future Incubator offers catch leads that don\u2019t fit vending.",
    revenue: null,
    cumulative: null,
  },
  {
    id: 3,
    label: "VP Enrollment",
    entity: "VP",
    entityFull: "VendingPreneurs",
    color: "#059669",
    description: "The lead becomes a VP member. $6\u201312K one-time coaching enrollment. BTC earns its 20% commission. The entrepreneur begins their journey.",
    revenue: "$6\u201312K",
    cumulative: "$9K",
  },
  {
    id: 4,
    label: "VendHub Subscribe",
    entity: "VH",
    entityFull: "VendHub",
    color: "#D97706",
    description: "The new member subscribes to VendHub ($1,200/yr) to buy machines, products, routes, and AI tools. This is recurring revenue from day one.",
    revenue: "$1,200/yr",
    cumulative: "$10.2K",
  },
  {
    id: 5,
    label: "MA Placement",
    entity: "MA",
    entityFull: "Modern Amenities",
    color: "#059669",
    description: "The VP member becomes an MA subcontractor, placing machines at national MSA locations. MA earns 3% rev share on every location\u2019s sales \u2014 ongoing, compounding.",
    revenue: "3% rev share (ongoing)",
    cumulative: "$12K+",
  },
  {
    id: 6,
    label: "Success Story",
    entity: "AM",
    entityFull: "AIMS Marketing",
    color: "#DB2777",
    description: "The operator\u2019s results become content for AM. Case studies, testimonials, and social proof feed the content engine \u2014 generating the next lead. The loop closes.",
    revenue: "Next lead generated",
    cumulative: "Loop restarts",
  },
  {
    id: 7,
    label: "AI Products",
    entity: "AW",
    entityFull: "AIMS WildDucks",
    color: "#6D5DD3",
    description: "Over time, the member purchases AI tools from the VH marketplace (built by Wild Ducks), refers other entrepreneurs, and may even become a subcontractor on AIMS engagements.",
    revenue: "Product MRR",
    cumulative: "$21K+ LTV",
  },
];

export default function LeadCompound() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SectionWrapper id="lead-flow">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        The Compound Engine
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        How one lead becomes $21K+ in lifetime value
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-10">
        This is why the holdco exists. A single lead doesn&rsquo;t just convert once
        &mdash; it enters a system where every entity adds value, every success
        creates the next lead, and revenue compounds across the entire ecosystem.
      </p>

      {/* Flow visualization */}
      <div className="relative">
        {/* Step pills / horizontal flow */}
        <div className="flex items-center gap-1 overflow-x-auto pb-4 mb-6">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center shrink-0">
              <button
                onClick={() => setActiveStep(i)}
                className={`
                  relative flex flex-col items-center px-4 py-3 rounded-lg border transition-all cursor-pointer min-w-[120px]
                  ${activeStep === i
                    ? "border-[#6D5DD3]/40 bg-[#6D5DD3]/5 shadow-sm"
                    : "border-[#E5E7EB] bg-white hover:border-[#D1D5DB] hover:shadow-sm"
                  }
                `}
              >
                {/* Step number */}
                <span
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded mb-1.5"
                  style={{
                    color: step.color,
                    backgroundColor: step.color + "12",
                  }}
                >
                  {step.entity}
                </span>
                <span className={`text-xs font-medium text-center leading-tight ${activeStep === i ? "text-[#111827]" : "text-[#6B7280]"}`}>
                  {step.label}
                </span>
                {step.revenue && (
                  <span className="text-[10px] font-semibold mt-1" style={{ color: step.color }}>
                    {step.revenue}
                  </span>
                )}
              </button>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center px-1 shrink-0">
                  <div className="w-6 h-px bg-[#D1D5DB]" />
                  <div className="w-0 h-0 border-l-[5px] border-l-[#D1D5DB] border-y-[3px] border-y-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail card for active step */}
        <div
          className="border rounded-xl p-6 transition-all shadow-sm"
          style={{
            borderColor: steps[activeStep].color + "30",
            backgroundColor: steps[activeStep].color + "04",
          }}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                  style={{
                    color: steps[activeStep].color,
                    backgroundColor: steps[activeStep].color + "15",
                  }}
                >
                  Step {steps[activeStep].id}
                </span>
                <span className="text-sm font-medium text-[#6B7280]">
                  {steps[activeStep].entityFull}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#111827]">
                {steps[activeStep].label}
              </h3>
            </div>
            {steps[activeStep].cumulative && (
              <div className="text-right shrink-0">
                <div className="text-xs text-[#6B7280]">Cumulative value</div>
                <div className="text-xl font-bold" style={{ color: steps[activeStep].color }}>
                  {steps[activeStep].cumulative}
                </div>
              </div>
            )}
          </div>
          <p className="text-sm text-[#374151] leading-relaxed">
            {steps[activeStep].description}
          </p>

          {/* Loop indicator on last visible step */}
          {activeStep === 5 && (
            <div className="mt-4 flex items-center gap-2 text-xs text-[#DB2777] font-medium">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M2 8a6 6 0 0 1 10.89-3.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 8a6 6 0 0 1-10.89 3.48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 2l1.5 2.5L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14l-1.5-2.5L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              This is the loop. Success stories generate the next lead \u2014 the cycle restarts without new acquisition cost.
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mt-4">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="h-1 flex-1 rounded-full transition-all cursor-pointer"
              style={{
                backgroundColor: i <= activeStep ? step.color : "#E5E7EB",
              }}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

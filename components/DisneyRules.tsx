"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { rules, SCORE_CONFIG } from "@/data/rules";

export default function DisneyRules() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="rules">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        The Disney Playbook
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        The 8 rules that turn a collection of businesses
        <br className="hidden md:block" /> into a compound growth engine
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        These aren&rsquo;t theories &mdash; they&rsquo;re the structural
        principles behind every decision we make about what to build, what to
        buy, and how to connect them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rules.map((rule, i) => {
          const config = SCORE_CONFIG[rule.score];
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={rule.number}
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="border border-[#E5E7EB] bg-white rounded-lg p-6 cursor-pointer hover:border-[#D1D5DB] hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#9CA3AF] text-sm font-mono">
                    {String(rule.number).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#111827]">
                    {rule.name}
                  </h3>
                </div>
                <span
                  className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{
                    color: config.color,
                    borderColor: config.color + "40",
                    backgroundColor: config.color + "10",
                  }}
                >
                  {rule.scoreLabel}
                </span>
              </div>

              <p className="text-[#6B7280] text-sm leading-relaxed">
                {rule.principle}
              </p>

              {isExpanded && (
                <div className="pt-4 mt-4 border-t border-[#E5E7EB] animate-fade-in">
                  <p className="text-sm text-[#374151] leading-relaxed mb-4">
                    {rule.application}
                  </p>
                  {rule.gap && (
                    <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-md px-4 py-3 mb-3">
                      <p className="text-sm text-[#92400E]">
                        <span className="font-semibold">Gap: </span>
                        {rule.gap}
                      </p>
                    </div>
                  )}
                  {rule.opportunity && (
                    <div className="bg-[#D1FAE5] border border-[#059669]/30 rounded-md px-4 py-3 mb-3">
                      <p className="text-sm text-[#065F46]">
                        <span className="font-semibold">Opportunity: </span>
                        {rule.opportunity}
                      </p>
                    </div>
                  )}
                  {rule.example && (
                    <p className="text-xs text-[#9CA3AF] mt-3 italic">
                      Example: {rule.example}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

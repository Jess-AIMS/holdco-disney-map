"use client";

import SectionWrapper from "./SectionWrapper";
import { rules, SCORE_CONFIG } from "@/data/rules";

export default function Scorecard() {
  return (
    <SectionWrapper id="scorecard">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        Diagnostic
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        Where we stand today
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        Honest assessment against the 8 rules. Green means we&rsquo;re
        executing well. Amber means the strategy is right but execution is in
        progress.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rules.map((rule) => {
          const config = SCORE_CONFIG[rule.score];
          return (
            <div
              key={rule.number}
              className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-xs text-[#9CA3AF] font-mono">
                  Rule {rule.number}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold mb-2 text-[#111827]">
                {rule.name}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mb-3 font-medium">
                {rule.scoreLabel}
              </p>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {rule.gap || rule.opportunity || rule.example || "Executing well."}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

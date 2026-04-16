"use client";

import SectionWrapper from "./SectionWrapper";
import DisneyRules from "./DisneyRules";
import LeadCompound from "./LeadCompound";
import SynergyMap from "./SynergyMap/SynergyMap";

export default function DisneyMapSection() {
  return (
    <>
      {/* Why Disney — intro */}
      <SectionWrapper id="disney-map">
        <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
          The Disney Map
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6 text-[#111827]">
          Why we&rsquo;re structured like Disney
        </h2>

        <div className="max-w-[800px] space-y-4 text-[#374151] leading-relaxed mb-8">
          <p>
            Disney turned a cartoon mouse into a $200B empire not by building one
            giant company, but by building an ecosystem where every business unit
            feeds every other business unit. The theme parks drive merchandise
            sales. The movies drive theme park attendance. The TV channel drives
            movie awareness. Every piece makes every other piece stronger.
          </p>
          <p>
            We&rsquo;re applying the same structural principles. Our
            &ldquo;mouse&rdquo; is{" "}
            <strong>The Entrepreneur&rsquo;s Journey&trade;</strong> &mdash; the
            methodology for helping people launch and scale their own businesses.
            Every entity in the holdco either creates a journey, sells a journey,
            fulfills a journey, or builds tools for journeys.
          </p>
          <p className="text-[#6B7280]">
            Most people inside our organization see their department. They
            don&rsquo;t see the machine. When you only see your piece, every
            other department looks like overhead. The truth is the opposite
            &mdash; every entity exists because it makes the others more
            valuable. Remove any piece and the others get measurably weaker.
          </p>
        </div>

        {/* The flywheel — one sentence */}
        <div className="border border-[#6D5DD3]/20 bg-[#6D5DD3]/5 rounded-lg p-5 max-w-[800px]">
          <p className="text-sm font-medium text-[#111827] mb-1">The core flywheel</p>
          <p className="text-sm text-[#374151] leading-relaxed">
            <strong>AM</strong> generates a lead &rarr;{" "}
            <strong>BTC</strong> closes the sale &rarr;{" "}
            <strong>VP</strong> creates an entrepreneur &rarr;{" "}
            entrepreneur becomes an <strong>MA</strong> subcontractor &rarr;{" "}
            entrepreneur buys through <strong>VH</strong> &rarr;{" "}
            success becomes content for <strong>AM</strong> &rarr;{" "}
            generates the next lead &rarr; <em>cycle repeats</em>
          </p>
        </div>
      </SectionWrapper>

      {/* How a lead compounds */}
      <LeadCompound />

      {/* The 8 rules */}
      <DisneyRules />

      {/* The interactive synergy map */}
      <SynergyMap />
    </>
  );
}

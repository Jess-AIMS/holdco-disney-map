export type RuleScore = "strong" | "needs-work" | "in-progress";

export interface DisneyRule {
  number: number;
  name: string;
  principle: string;
  application: string;
  score: RuleScore;
  scoreLabel: string;
  gap?: string;
  opportunity?: string;
  example?: string;
}

export const SCORE_CONFIG: Record<RuleScore, { color: string; label: string; dot: string }> = {
  strong: { color: "#059669", label: "Strong", dot: "\u2705" },
  "needs-work": { color: "#D97706", label: "Needs Work", dot: "\u26A0\uFE0F" },
  "in-progress": { color: "#D97706", label: "In Progress", dot: "\u26A0\uFE0F" },
};

export const rules: DisneyRule[] = [
  {
    number: 1,
    name: "Asset Factory",
    principle:
      "The center of your ecosystem must produce reusable assets, not just deliver services.",
    application:
      "The Entrepreneur\u2019s Journey\u2122 is our asset factory. It\u2019s not a single product \u2014 it\u2019s a template the Incubator stamps into new business vehicles. VendingPreneurs was journey #1. AI Operator Collective is journey #2. Every journey produces reusable IP: curriculum, case studies, operator playbooks, AI tools. The goal is 100+ journeys by 2035 \u2014 each one a standalone P&L that feeds the others.",
    score: "strong",
    scoreLabel: "Strong",
    example:
      "VP\u2019s coaching curriculum \u2192 extracted frameworks \u2192 Incubator uses as template \u2192 AI Operator Collective launched with same structural DNA",
  },
  {
    number: 2,
    name: "Every Unit Serves Two Masters",
    principle:
      "Every business unit must have arrows pointing IN and arrows pointing OUT. If a unit only takes or only gives, it\u2019s not a synergy partner.",
    application:
      "VP sends trained operators to MA and receives national location deals back. VH sells products to VP members and receives a captive audience. BTC closes deals for VP and receives new offers from the Incubator. The two-way flows are what make removing any piece weaken the whole.",
    score: "needs-work",
    scoreLabel: "One Major Break",
    gap: "MedPro currently pulls from AIMS but doesn\u2019t feed back into the ecosystem. It\u2019s a consulting client, not a synergy partner. The Disney test: \u2018If I remove it, does anything else get weaker?\u2019 For MedPro, the answer is currently no.",
  },
  {
    number: 3,
    name: "Build Loops, Not Lines",
    principle:
      "A line has an endpoint. A loop compounds. Every customer journey should circle back to create more customers.",
    application:
      "The core loop: BTC closes a VP member \u2192 VP member becomes an MA subcontractor \u2192 MA revenue funds more marketing \u2192 AM generates more leads \u2192 BTC closes more members. That\u2019s a loop. But our content engine is still a line \u2014 success stories from 1,800 operators aren\u2019t systematically feeding back into lead generation yet.",
    score: "needs-work",
    scoreLabel: "Content Loop Broken",
    gap: "The success story \u2192 content \u2192 lead \u2192 customer \u2192 success story loop isn\u2019t automated yet. It\u2019s the biggest missing loop in the system.",
  },
  {
    number: 4,
    name: "Physical + Digital Synergy",
    principle:
      "Pure digital is fragile. Pure physical doesn\u2019t scale. The combination compounds.",
    application:
      "Vending is physical. Coaching, VendHub, and AIMS products are digital. A VP member physically places machines, digitally manages inventory through VendHub, and physically fulfills locations while digitally reporting results that feed our content engine.",
    score: "strong",
    scoreLabel: "Natural Advantage",
    opportunity:
      "Live events, regional meetups, and an annual VP summit would deepen community retention, create content moments, and become their own revenue stream.",
  },
  {
    number: 5,
    name: "Compound Customer Value",
    principle:
      "One customer should be able to pay you in 5+ different ways. If they can only pay once, you don\u2019t have synergy \u2014 you have a funnel.",
    application:
      "A single VP member can pay us through: coaching enrollment ($6\u201312K), VendHub subscription ($1,200/yr), machine purchases via VH, product purchases via VH, merchant fees via VH, and MA rev share (3% on every location\u2019s sales). That\u2019s 6+ revenue paths from one customer.",
    score: "needs-work",
    scoreLabel: "Poor Attach Rates",
    gap: "Only 100 out of 1,800 VP members subscribe to VendHub. That\u2019s a 5.5% attach rate on recurring revenue. Going to 40%+ is the single biggest dollar amount sitting on the table.",
  },
  {
    number: 6,
    name: "Turn Capabilities Into Products",
    principle:
      "If you\u2019re good at something internally, someone will pay you to do it for them. Don\u2019t just use your skills \u2014 sell them.",
    application:
      "AIMS exists because of this rule. Every marketing system, AI tool, and automation we build internally becomes a product we sell externally. The LinkedIn engine \u2192 productized for B2B. The EOS agent \u2192 productized for EOS-run companies. Steel Trap \u2192 productized as sales enablement.",
    score: "in-progress",
    scoreLabel: "Clear Strategy, Pre-Revenue",
    gap: "AIMS is pre-revenue. The systems are being built and tested internally. External sales begin next quarter.",
  },
  {
    number: 7,
    name: "Build Immortal Assets",
    principle:
      "Some things depreciate (your time, a one-off service). Some things appreciate (IP, audience, systems, relationships). Build more of the second kind.",
    application:
      "The VP community (1,800 members and growing) is an appreciating asset \u2014 every new member makes the network more valuable. MA\u2019s national MSA relationships are immortal. Our AI products get better with more data. Our brand knowledge bases compound. The Entrepreneur\u2019s Journey\u2122 methodology gets refined with every cohort.",
    score: "strong",
    scoreLabel: "Strong",
    gap: "Most IP isn\u2019t formally documented yet. Until Steel Trap and the brand knowledge bases are live, institutional knowledge is still in people\u2019s heads.",
  },
  {
    number: 8,
    name: "Control Your Dependencies",
    principle:
      "If your business depends on something you don\u2019t own, you\u2019re one policy change from disaster.",
    application:
      "YouTube is VP\u2019s primary acquisition channel \u2014 a platform we don\u2019t control. If YouTube changes its algorithm, our top-of-funnel shrinks overnight. We\u2019re diversifying: LinkedIn engine for MA, VendHub as owned distribution to 1,800 members, email/community channels.",
    score: "needs-work",
    scoreLabel: "Platform Risk",
    gap: "YouTube concentration is a real risk. LinkedIn AI engine and VendHub adoption push are the active mitigation strategies.",
  },
];

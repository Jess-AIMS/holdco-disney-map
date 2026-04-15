"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

// Hub-and-spoke layers
const layers = [
  {
    name: "The Hub",
    subtitle: "Shared Services",
    color: "#6D5DD3",
    description:
      "SLT sits at the center with Finance, HR, and Tech/Ops as centrally governed infrastructure. These services are allocated as a fixed monthly cost to each entity. Every spoke draws from the hub rather than building duplicate functions.",
    entities: ["Finance", "HR", "Tech/Ops", "SLT"],
  },
  {
    name: "Business Units",
    subtitle: "Revenue engines",
    color: "#059669",
    description:
      "VendingPreneurs is the established BU with a full P&L, owning community delivery, VendHub, and customer success. The Incubator is where new offers are built, tested, and scaled before graduating to standalone BU status.",
    entities: ["VendingPreneurs", "Incubator", "Future BUs"],
  },
  {
    name: "BTC",
    subtitle: "Sales engine",
    color: "#2563EB",
    description:
      "BTC is the cross-cutting revenue acquisition layer for the entire platform. It sells all offers, earns a commission, and hands the customer back to the owning BU for fulfillment. The 40K+ lead database routes to whichever offer fits best.",
    entities: ["Sales ops", "Lead routing", "CRM"],
  },
  {
    name: "Functional Capabilities",
    subtitle: "Internal agencies",
    color: "#D97706",
    description:
      "Marketing/AIMS and Automations/Wild Ducks serve all BUs and BTC as internal service providers. They also generate external revenue. Time allocation across entities is made visible via the consolidated scorecard.",
    entities: ["AIMS Marketing", "Wild Ducks", "Automations"],
  },
];

// Governance matrix (simplified for display)
type Role = "O" | "A" | "S" | "I";
interface GovRow {
  area: string;
  slt: Role;
  shared: Role;
  vp: Role;
  btc: Role;
  incubator: Role;
  aims: Role;
}

const roleLabels: Record<Role, { label: string; color: string; bg: string }> = {
  O: { label: "Own", color: "#059669", bg: "#D1FAE5" },
  A: { label: "Approve", color: "#6D5DD3", bg: "#EDE9FE" },
  S: { label: "Support", color: "#2563EB", bg: "#DBEAFE" },
  I: { label: "Informed", color: "#9CA3AF", bg: "#F3F4F6" },
};

const govRows: GovRow[] = [
  { area: "Business strategy & direction", slt: "O", shared: "I", vp: "S", btc: "S", incubator: "S", aims: "S" },
  { area: "P&L ownership", slt: "A", shared: "S", vp: "O", btc: "O", incubator: "O", aims: "O" },
  { area: "Quarterly rocks", slt: "A", shared: "I", vp: "O", btc: "O", incubator: "O", aims: "O" },
  { area: "Headcount decisions", slt: "A", shared: "S", vp: "O", btc: "O", incubator: "O", aims: "O" },
  { area: "Lead database & routing", slt: "I", shared: "I", vp: "I", btc: "O", incubator: "I", aims: "S" },
  { area: "New offer development", slt: "A", shared: "I", vp: "I", btc: "S", incubator: "O", aims: "S" },
  { area: "Offer graduation to BU", slt: "O", shared: "S", vp: "I", btc: "I", incubator: "S", aims: "I" },
  { area: "Tech stack decisions", slt: "A", shared: "O", vp: "I", btc: "I", incubator: "I", aims: "S" },
  { area: "Capacity allocation", slt: "A", shared: "I", vp: "S", btc: "S", incubator: "S", aims: "O" },
  { area: "Shared services allocation", slt: "A", shared: "O", vp: "I", btc: "I", incubator: "I", aims: "I" },
];

const columns = [
  { key: "slt" as const, label: "SLT" },
  { key: "shared" as const, label: "Shared Svcs" },
  { key: "vp" as const, label: "VP" },
  { key: "btc" as const, label: "BTC" },
  { key: "incubator" as const, label: "Incubator" },
  { key: "aims" as const, label: "AIMS" },
];

const principles = [
  {
    title: "SLT approves but rarely owns",
    description:
      "The SLT\u2019s role is approval and strategic direction \u2014 not execution. They own business strategy and the decision to graduate an Incubator offer. Everything else, they set the guardrails and sign off.",
  },
  {
    title: "Shared services owns the \u201Chow,\u201D BUs own the \u201Cwhat\u201D",
    description:
      "Shared services owns recruiting process, comp plan administration, and tech standards. But BU heads decide who to hire, what their rocks are, and how to spend their budget. Shared services appears as a fixed line item on each BU\u2019s P&L.",
  },
  {
    title: "BTC owns the revenue pipeline end-to-end",
    description:
      "Lead routing, CRM, sales tooling \u2014 that\u2019s all BTC. The BUs don\u2019t build their own sales motion. They hand BTC an offer and get customers back for fulfillment. Every lead in the 40K+ database gets routed to the best-fit offer.",
  },
  {
    title: "AIMS owns capacity allocation",
    description:
      "Marketing/AIMS and Wild Ducks decide how their people\u2019s time gets split across BUs. The SLT approves it, and the BUs provide input, but the functional lead makes the call \u2014 making utilization visible and accountable.",
  },
  {
    title: "The Incubator protects focus",
    description:
      "New offers start in the Incubator with a lightweight budget and small team. They run under a dedicated L10 and are shielded from full shared services overhead until they\u2019ve proven themselves. Graduation happens at a defined threshold.",
  },
];

function RoleCell({ role }: { role: Role }) {
  const config = roleLabels[role];
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded text-[10px] font-bold"
      style={{ color: config.color, backgroundColor: config.bg }}
      title={config.label}
    >
      {role}
    </span>
  );
}

export default function Governance() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <SectionWrapper id="governance">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        How We Run It
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        Organizational structure &amp; governance
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        The holdco operates as a hub-and-spoke model with three distinct layers.
        Each layer has clear decision rights so those closest to the market have
        the autonomy to move, while the SLT maintains the bird&rsquo;s-eye view.
      </p>

      {/* Hub-and-spoke visualization */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-6 text-[#111827]">
        Hub-and-spoke model
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        {layers.map((layer, i) => (
          <button
            key={layer.name}
            onClick={() => setActiveLayer(i)}
            className={`text-left border rounded-lg p-5 transition-all cursor-pointer ${
              activeLayer === i
                ? "shadow-md"
                : "border-[#E5E7EB] bg-white hover:shadow-sm"
            }`}
            style={{
              borderColor: activeLayer === i ? layer.color + "40" : undefined,
              backgroundColor: activeLayer === i ? layer.color + "05" : undefined,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: layer.color }}
              />
              <span className="text-xs font-medium text-[#6B7280]">
                {layer.subtitle}
              </span>
            </div>
            <h4 className="font-[family-name:var(--font-playfair)] font-bold text-[#111827] mb-2">
              {layer.name}
            </h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {layer.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {layer.entities.map((e) => (
                <span
                  key={e}
                  className="text-[10px] px-2 py-0.5 rounded border border-[#E5E7EB] text-[#6B7280] bg-[#F9FAFB]"
                >
                  {e}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Governance matrix */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2 text-[#111827]">
        Governance matrix
      </h3>
      <p className="text-sm text-[#6B7280] mb-6">
        Who owns, approves, supports, and is informed for each governance area.
      </p>

      {/* Legend */}
      <div className="flex gap-4 mb-4 text-xs">
        {(Object.entries(roleLabels) as [Role, typeof roleLabels[Role]][]).map(([key, config]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span
              className="w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center"
              style={{ color: config.color, backgroundColor: config.bg }}
            >
              {key}
            </span>
            <span className="text-[#6B7280]">{config.label}</span>
          </span>
        ))}
      </div>

      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden mb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="text-left px-4 py-3 text-xs font-medium text-[#6B7280] uppercase tracking-wider min-w-[200px]">
                  Governance Area
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="text-center px-3 py-3 text-xs font-medium text-[#6B7280] uppercase tracking-wider"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {govRows.map((row, i) => (
                <tr
                  key={row.area}
                  className={`border-b border-[#E5E7EB] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
                >
                  <td className="px-4 py-3 text-[#374151] font-medium text-sm">
                    {row.area}
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="text-center px-3 py-3">
                      <RoleCell role={row[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key governance principles */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-6 text-[#111827]">
        Key principles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((p) => (
          <div
            key={p.title}
            className="border border-[#E5E7EB] bg-white rounded-lg p-5 shadow-sm"
          >
            <h4 className="font-semibold text-sm text-[#111827] mb-2">
              {p.title}
            </h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

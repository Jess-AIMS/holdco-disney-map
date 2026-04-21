"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

// ── Clickable nodes for the diagram ──
interface OrgNode {
  id: string;
  name: string;
  subtitle: string;
  people?: string[];
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
}

const orgNodes: Record<string, OrgNode> = {
  ceo: {
    id: "ceo",
    name: "CEO",
    subtitle: "Hub \u2014 HR & Finance",
    description:
      "The CEO sits at the center with HR and Finance as centrally governed infrastructure. These services are allocated as a fixed monthly cost to each entity. Every spoke draws from the hub rather than building duplicate functions.",
    color: "#374151",
    borderColor: "#374151",
    bgColor: "#F3F4F6",
  },
  ma: {
    id: "ma",
    name: "MA",
    subtitle: "Revenue & Operations",
    people: ["Anthony \u2014 Revenue", "Jeff \u2014 P&L, Ops"],
    description:
      "MA is the established BU with a full P&L, owning community delivery, VendHub, and customer success. Anthony drives revenue, Jeff owns the P&L and operations. Reports directly to CEO.",
    color: "#2563EB",
    borderColor: "#2563EB",
    bgColor: "#DBEAFE",
  },
  btc: {
    id: "btc",
    name: "BTC Sales",
    subtitle: "Sales engine",
    people: ["Miller"],
    description:
      "BTC is the cross-cutting revenue acquisition layer. It sells all offers \u2014 the original MA offer, external offers that expand the lead pool, and new initiative offers as they mature. The 40K+ lead database routes to whichever offer fits best. BUs don\u2019t build their own sales motion.",
    color: "#374151",
    borderColor: "#374151",
    bgColor: "#F3F4F6",
  },
  aims: {
    id: "aims",
    name: "AIMS",
    subtitle: "Wild Ducks & Production",
    people: ["Wild Ducks \u2014 Jess", "Production Team \u2014 Kody"],
    description:
      "AIMS (Wild Ducks & Production Team) serves all BUs and BTC as an internal service provider, covering marketing, automation, and content production. AIMS also generates external revenue. Time allocation across entities is made visible via the consolidated scorecard.",
    color: "#6D5DD3",
    borderColor: "#6D5DD3",
    bgColor: "#EDE9FE",
  },
  initiatives: {
    id: "initiatives",
    name: "New Initiatives",
    subtitle: "Build, test, scale",
    description:
      "New offers and ventures start here with a lightweight budget and small team, shielded from full shared services overhead. When an initiative hits a graduation threshold (revenue target, customer count, or CEO decision), it moves to standalone BU status with its own P&L.",
    color: "#374151",
    borderColor: "#374151",
    bgColor: "#F3F4F6",
  },
};

// ── Governance matrix ──
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
  { key: "vp" as const, label: "MA" },
  { key: "btc" as const, label: "BTC" },
  { key: "incubator" as const, label: "New Init." },
  { key: "aims" as const, label: "AIMS" },
];

const principles = [
  {
    title: "CEO approves but rarely owns execution",
    description:
      "The CEO\u2019s role is approval and strategic direction \u2014 not execution. They own business strategy and the decision to graduate a new initiative. Everything else, they set the guardrails and sign off.",
  },
  {
    title: "Shared services owns the \u201Chow,\u201D BUs own the \u201Cwhat\u201D",
    description:
      "HR and Finance own recruiting process, comp plan administration, and financial standards. But BU heads decide who to hire, what their rocks are, and how to spend their budget. Shared services appears as a fixed line item on each BU\u2019s P&L.",
  },
  {
    title: "BTC owns the revenue pipeline end-to-end",
    description:
      "Lead routing, CRM, sales tooling \u2014 that\u2019s all BTC. The BUs don\u2019t build their own sales motion. They hand BTC an offer and get customers back for fulfillment. Every lead in the 40K+ database gets routed to the best-fit offer.",
  },
  {
    title: "AIMS owns capacity allocation",
    description:
      "Wild Ducks and the Production Team decide how their people\u2019s time gets split across BUs. The CEO approves it, and the BUs provide input, but the functional lead makes the call \u2014 making utilization visible and accountable.",
  },
  {
    title: "New Initiatives are protected",
    description:
      "New offers start with a lightweight budget and small team. They run under a dedicated L10 and are shielded from full shared services overhead until they\u2019ve proven themselves. Graduation happens at a defined threshold.",
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

function SpokeNode({
  node,
  isSelected,
  onClick,
}: {
  node: OrgNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`border-2 rounded-lg px-5 py-3 text-center transition-all cursor-pointer min-w-[160px] ${
        isSelected ? "shadow-lg" : "hover:shadow-md"
      }`}
      style={{
        borderColor: node.borderColor,
        backgroundColor: isSelected ? node.bgColor : "white",
        boxShadow: isSelected ? `0 0 0 2px white, 0 0 0 4px ${node.borderColor}` : undefined,
      }}
    >
      <p className="text-sm font-bold" style={{ color: node.color }}>
        {node.name}
      </p>
      {node.people ? (
        <div className="mt-1 space-y-0.5">
          {node.people.map((p) => (
            <p key={p} className="text-[10px] text-[#6B7280]">{p}</p>
          ))}
        </div>
      ) : (
        <p className="text-[10px] text-[#6B7280] mt-0.5">{node.subtitle}</p>
      )}
    </button>
  );
}

export default function Governance() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const active = selectedNode ? orgNodes[selectedNode] : null;

  function toggleNode(id: string) {
    setSelectedNode((prev) => (prev === id ? null : id));
  }

  return (
    <SectionWrapper id="governance">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        How We Run It
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        Hub and Spoke Organizational Map
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        The CEO and shared services sit at the center. Business units and
        functional capabilities radiate outward. BTC sells across everything.
      </p>

      {/* ══ HUB-AND-SPOKE DIAGRAM ══ */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
        <div className="flex-1 min-w-0">

          {/* ── Top spoke: MA ── */}
          <div className="flex justify-center mb-2">
            <SpokeNode
              node={orgNodes.ma}
              isSelected={selectedNode === "ma"}
              onClick={() => toggleNode("ma")}
            />
          </div>

          {/* Vertical connector top */}
          <div className="flex justify-center mb-2">
            <div className="w-0.5 h-8 bg-[#374151]" />
          </div>

          {/* ── Middle row: BTC — CEO Hub — AIMS ── */}
          <div className="flex items-center justify-center gap-0 mb-2">
            {/* Left spoke: BTC */}
            <SpokeNode
              node={orgNodes.btc}
              isSelected={selectedNode === "btc"}
              onClick={() => toggleNode("btc")}
            />

            {/* Horizontal connector left */}
            <div className="w-6 md:w-10 h-0.5 bg-[#374151] shrink-0" />

            {/* Center: CEO Hub */}
            <button
              onClick={() => toggleNode("ceo")}
              className={`relative border-2 rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center transition-all cursor-pointer shrink-0 ${
                selectedNode === "ceo" ? "shadow-xl ring-2 ring-offset-2 ring-[#374151]" : "hover:shadow-lg"
              }`}
              style={{
                borderColor: "#374151",
                backgroundColor: selectedNode === "ceo" ? "#F3F4F6" : "white",
              }}
            >
              <p className="text-2xl md:text-3xl font-bold text-[#111827]">CEO</p>
              <div className="flex items-center gap-2 mt-2 text-[#6B7280]">
                <span className="text-xs">HR</span>
                <span className="text-[10px] text-[#D1D5DB]">&bull;</span>
                <span className="text-xs">Finance</span>
              </div>
            </button>

            {/* Horizontal connector right */}
            <div className="w-6 md:w-10 h-0.5 bg-[#374151] shrink-0" />

            {/* Right spoke: AIMS */}
            <SpokeNode
              node={orgNodes.aims}
              isSelected={selectedNode === "aims"}
              onClick={() => toggleNode("aims")}
            />
          </div>

          {/* Vertical connector bottom */}
          <div className="flex justify-center mt-2 mb-2">
            <div className="w-0.5 h-8 bg-[#374151]" />
          </div>

          {/* ── Bottom spoke: New Initiatives ── */}
          <div className="flex justify-center mt-2">
            <SpokeNode
              node={orgNodes.initiatives}
              isSelected={selectedNode === "initiatives"}
              onClick={() => toggleNode("initiatives")}
            />
          </div>
        </div>

        {/* ── Detail panel ── */}
        <div className="lg:w-[340px] shrink-0">
          {active ? (
            <div
              className="border-2 rounded-xl p-5 shadow-sm transition-all animate-fade-in"
              style={{
                borderColor: active.borderColor + "40",
                backgroundColor: active.bgColor,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: active.color }}
                />
                <span className="text-xs font-medium text-[#6B7280]">
                  {active.subtitle}
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#111827] mb-3">
                {active.name}
              </h4>
              <p className="text-sm text-[#374151] leading-relaxed">
                {active.description}
              </p>
              {active.people && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {active.people.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-2.5 py-1 rounded-full border border-[#E5E7EB] text-[#374151] bg-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="border border-[#E5E7EB] rounded-xl p-5 bg-[#F9FAFB]">
              <p className="text-sm text-[#9CA3AF] italic">
                Click any node to see who owns it and how it connects to the
                rest of the organization.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ══ GOVERNANCE MATRIX ══ */}
      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-2 text-[#111827]">
        Governance matrix
      </h3>
      <p className="text-sm text-[#6B7280] mb-6">
        Who owns, approves, supports, and is informed for each governance area.
      </p>

      <div className="flex gap-4 mb-4 text-xs">
        {(Object.entries(roleLabels) as [Role, (typeof roleLabels)[Role]][]).map(
          ([key, config]) => (
            <span key={key} className="flex items-center gap-1.5">
              <span
                className="w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center"
                style={{ color: config.color, backgroundColor: config.bg }}
              >
                {key}
              </span>
              <span className="text-[#6B7280]">{config.label}</span>
            </span>
          )
        )}
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
                  className={`border-b border-[#E5E7EB] ${
                    i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                  }`}
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

      {/* ══ KEY PRINCIPLES ══ */}
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

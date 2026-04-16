"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

// ── Clickable nodes for the diagram ──
interface OrgNode {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
}

const orgNodes: Record<string, OrgNode> = {
  slt: {
    id: "slt",
    name: "SLT",
    subtitle: "Strategic direction & approval",
    description:
      "The Senior Leadership Team sits at the center. They own business strategy and the V/TO, approve major decisions, but rarely own execution. They set the guardrails and sign off.",
    color: "#6B7280",
    borderColor: "#D1D5DB",
    bgColor: "#F9FAFB",
  },
  shared: {
    id: "shared",
    name: "Shared Services Hub",
    subtitle: "Finance, HR, Tech/Ops",
    description:
      "Centrally governed infrastructure allocated as a fixed monthly cost to each entity. Every spoke draws from the hub rather than building duplicate functions. Shared services owns the \u201Chow\u201D \u2014 recruiting process, comp plans, tech standards.",
    color: "#6D5DD3",
    borderColor: "#6D5DD3",
    bgColor: "#EDE9FE",
  },
  vp: {
    id: "vp",
    name: "VendingPreneurs",
    subtitle: "Community + VendHub",
    description:
      "The established BU with a full P&L. Owns community delivery, VendHub marketplace, and customer success. 1,800 members. Reports to SLT, draws from shared services, hands fulfillment work to operators.",
    color: "#2563EB",
    borderColor: "#2563EB",
    bgColor: "#DBEAFE",
  },
  aims: {
    id: "aims",
    name: "Marketing / AIMS",
    subtitle: "Lead generation for all entities",
    description:
      "Shared marketing service generating leads for VP (YouTube, SEO, paid, organic), MA (LinkedIn, cold email, outbound), and MedPro. The AI marketing systems built here become products AIMS sells externally.",
    color: "#059669",
    borderColor: "#059669",
    bgColor: "#D1FAE5",
  },
  wd: {
    id: "wd",
    name: "Automations / Wild Ducks",
    subtitle: "AI R&D + product development",
    description:
      "Builds AI products and automation for internal companies as a testing ground, then productizes and sells externally. Serves all BUs and BTC as an internal service provider. Time allocation across entities is visible on the consolidated scorecard.",
    color: "#D97706",
    borderColor: "#D97706",
    bgColor: "#FEF3C7",
  },
  btc: {
    id: "btc",
    name: "Sales Engine \u2014 BTC",
    subtitle: "Sells all offers, earns commission, hands off fulfillment",
    description:
      "The cross-cutting revenue acquisition layer. BTC sells all offers \u2014 the original VP offer, external offers that expand the lead pool, and Incubator offers as they mature. The 40K+ lead database routes to whichever offer fits best. BUs don\u2019t build their own sales motion.",
    color: "#DC2626",
    borderColor: "#DC2626",
    bgColor: "#FEE2E2",
  },
  inc: {
    id: "inc",
    name: "Incubator",
    subtitle: "Build, test, scale",
    description:
      "New offers start here with a lightweight budget and small team, shielded from full shared services overhead. They run under a dedicated L10. When an offer hits a graduation threshold (revenue target, customer count, or SLT decision), it moves to standalone BU status with its own P&L.",
    color: "#D97706",
    borderColor: "#D97706",
    bgColor: "#FEF3C7",
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
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const active = selectedNode ? orgNodes[selectedNode] : null;

  return (
    <SectionWrapper id="governance">
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        How We Run It
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        Organizational structure &amp; governance
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-12">
        The holdco operates as a hub-and-spoke model. The SLT and shared
        services sit at the center. Business units and functional capabilities
        radiate outward. BTC sells across everything.
      </p>

      {/* ══ HUB-AND-SPOKE DIAGRAM ══ */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
        <div className="flex-1 min-w-0">
          {/* ── Top spoke: VendingPreneurs ── */}
          <div className="flex justify-center mb-3">
            <button
              onClick={() => setSelectedNode(selectedNode === "vp" ? null : "vp")}
              className={`border-2 rounded-lg px-5 py-3 text-center transition-all cursor-pointer ${
                selectedNode === "vp" ? "shadow-md" : "hover:shadow-sm"
              }`}
              style={{
                borderColor: selectedNode === "vp" ? orgNodes.vp.borderColor : "#93C5FD",
                backgroundColor: selectedNode === "vp" ? orgNodes.vp.bgColor : "#EFF6FF",
              }}
            >
              <p className="text-sm font-bold text-[#1E40AF]">VendingPreneurs</p>
              <p className="text-[10px] text-[#6B7280]">community + VendHub</p>
            </button>
          </div>

          {/* Vertical connector */}
          <div className="flex justify-center mb-1">
            <div className="w-px h-6 bg-[#D1D5DB]" />
          </div>

          {/* ── Middle row: AIMS — Hub — Wild Ducks ── */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-1">
            {/* Left spoke: Marketing/AIMS */}
            <button
              onClick={() => setSelectedNode(selectedNode === "aims" ? null : "aims")}
              className={`border-2 rounded-lg px-4 py-3 text-center transition-all cursor-pointer shrink-0 ${
                selectedNode === "aims" ? "shadow-md" : "hover:shadow-sm"
              }`}
              style={{
                borderColor: selectedNode === "aims" ? orgNodes.aims.borderColor : "#6EE7B7",
                backgroundColor: selectedNode === "aims" ? orgNodes.aims.bgColor : "#ECFDF5",
              }}
            >
              <p className="text-xs font-bold text-[#065F46]">Marketing</p>
              <p className="text-[10px] text-[#6B7280]">AIMS</p>
            </button>

            {/* Horizontal connector left */}
            <div className="h-px w-4 md:w-8 border-t-2 border-dashed border-[#D1D5DB]" />

            {/* Center: SLT Hub */}
            <button
              onClick={() => setSelectedNode(selectedNode === "shared" ? null : "shared")}
              className={`relative border-2 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center transition-all cursor-pointer shrink-0 ${
                selectedNode === "shared" || selectedNode === "slt" ? "shadow-lg" : "hover:shadow-md"
              }`}
              style={{
                borderColor: "#D1D5DB",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* SLT label */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNode(selectedNode === "slt" ? null : "slt");
                }}
                className="text-sm md:text-base font-bold text-[#374151] hover:text-[#6D5DD3] transition-colors cursor-pointer"
              >
                SLT
              </button>
              {/* Shared services chips */}
              <div className="flex gap-1 mt-2">
                {["Finance", "HR", "Tech"].map((s) => (
                  <span
                    key={s}
                    className="text-[8px] md:text-[9px] px-1.5 py-0.5 rounded bg-[#EDE9FE] text-[#6D5DD3] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-[8px] md:text-[9px] text-[#9CA3AF] mt-1.5">Shared services hub</p>
            </button>

            {/* Horizontal connector right */}
            <div className="h-px w-4 md:w-8 border-t-2 border-dashed border-[#D1D5DB]" />

            {/* Right spoke: Automations/Wild Ducks */}
            <button
              onClick={() => setSelectedNode(selectedNode === "wd" ? null : "wd")}
              className={`border-2 rounded-lg px-4 py-3 text-center transition-all cursor-pointer shrink-0 ${
                selectedNode === "wd" ? "shadow-md" : "hover:shadow-sm"
              }`}
              style={{
                borderColor: selectedNode === "wd" ? orgNodes.wd.borderColor : "#FCD34D",
                backgroundColor: selectedNode === "wd" ? orgNodes.wd.bgColor : "#FFFBEB",
              }}
            >
              <p className="text-xs font-bold text-[#92400E]">Automations</p>
              <p className="text-[10px] text-[#6B7280]">Wild Ducks</p>
            </button>
          </div>

          {/* Vertical connector down */}
          <div className="flex justify-center mt-1 mb-3">
            <div className="w-px h-8 bg-[#D1D5DB]" />
          </div>

          {/* ── BTC bar + Incubator ── */}
          <div className="flex gap-3 justify-center mb-3">
            <button
              onClick={() => setSelectedNode(selectedNode === "btc" ? null : "btc")}
              className={`flex-1 max-w-[400px] border-2 rounded-lg px-5 py-4 text-center transition-all cursor-pointer ${
                selectedNode === "btc" ? "shadow-md" : "hover:shadow-sm"
              }`}
              style={{
                borderColor: selectedNode === "btc" ? orgNodes.btc.borderColor : "#FCA5A5",
                backgroundColor: selectedNode === "btc" ? orgNodes.btc.bgColor : "#FEF2F2",
              }}
            >
              <p className="text-sm font-bold text-[#991B1B]">Sales Engine &mdash; BTC</p>
              <p className="text-[10px] text-[#6B7280]">
                Sells all offers, earns commission, hands off fulfillment
              </p>
            </button>

            <button
              onClick={() => setSelectedNode(selectedNode === "inc" ? null : "inc")}
              className={`border-2 rounded-lg px-4 py-4 text-center transition-all cursor-pointer ${
                selectedNode === "inc" ? "shadow-md" : "hover:shadow-sm"
              }`}
              style={{
                borderColor: selectedNode === "inc" ? orgNodes.inc.borderColor : "#FCD34D",
                backgroundColor: selectedNode === "inc" ? orgNodes.inc.bgColor : "#FFFBEB",
              }}
            >
              <p className="text-xs font-bold text-[#92400E]">Incubator</p>
              <p className="text-[10px] text-[#6B7280]">Build, test, scale</p>
            </button>
          </div>

          {/* ── Offer cards feeding into BTC ── */}
          <div className="flex justify-center gap-2 mb-2">
            <div className="flex justify-center">
              <svg width="200" height="16" viewBox="0 0 200 16" className="text-[#FCA5A5]">
                <path d="M30 14 L100 2 L170 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
              </svg>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            {[
              { name: "VP offer", sub: "Original core offer" },
              { name: "External offers", sub: "Revenue + lead pool" },
              { name: "Incubator offers", sub: "As they mature" },
            ].map((offer) => (
              <div
                key={offer.name}
                className="border border-[#E5E7EB] bg-white rounded-lg px-3 py-2 text-center shadow-sm"
              >
                <p className="text-[10px] font-semibold text-[#374151]">{offer.name}</p>
                <p className="text-[9px] text-[#9CA3AF]">{offer.sub}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-[#9CA3AF] mt-3 italic">
            BTC sells across all three offer types &mdash; 40K+ lead database routes to best fit
          </p>

          {/* Legend */}
          <div className="flex justify-center gap-5 mt-6 text-[10px] text-[#9CA3AF]">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-px bg-[#D1D5DB] inline-block" /> Reporting
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-px border-t border-dashed border-[#D1D5DB] inline-block" /> Service
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-px bg-[#FCA5A5] inline-block" /> Offers feed into BTC
            </span>
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
            </div>
          ) : (
            <div className="border border-[#E5E7EB] rounded-xl p-5 bg-[#F9FAFB]">
              <p className="text-sm text-[#9CA3AF] italic">
                Click any node in the diagram to see details about its role and
                how it connects to the rest of the organization.
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

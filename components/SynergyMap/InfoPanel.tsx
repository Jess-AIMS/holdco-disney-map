"use client";

import { EntityNode, FLOW_COLORS, STATUS_COLORS, nodes } from "@/data/nodes";

interface InfoPanelProps {
  node: EntityNode;
}

export default function InfoPanel({ node }: InfoPanelProps) {
  const statusColor = STATUS_COLORS[node.status];

  return (
    <div className="mt-6 border border-[#E5E7EB] bg-white rounded-xl p-6 md:p-8 shadow-sm animate-fade-in">
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-3 h-3 rounded-full mt-2 shrink-0"
          style={{ backgroundColor: statusColor }}
        />
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold text-[#111827]">
            {node.name}
          </h3>
          <p className="text-sm text-[#6B7280]">{node.subtitle}</p>
        </div>
        {node.metrics && (
          <div className="ml-auto flex flex-wrap gap-3">
            {Object.entries(node.metrics).map(([key, val]) => (
              <div
                key={key}
                className="text-right border border-[#E5E7EB] rounded px-3 py-1.5 bg-[#F9FAFB]"
              >
                <div className="text-xs text-[#6B7280] capitalize">{key}</div>
                <div className="text-sm font-semibold text-[#111827]">{val}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
        {node.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-3">
            Gives to the ecosystem
          </h4>
          <div className="space-y-2">
            {node.gives.map((flow, i) => {
              const targetNode = nodes[flow.to];
              return (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: FLOW_COLORS[flow.type] }}
                  />
                  <span>
                    <span className="font-medium text-[#111827]">
                      {targetNode?.name || flow.to}
                    </span>
                    <span className="text-[#6B7280]">
                      {" "}&mdash; {flow.description}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-3">
            Receives from the ecosystem
          </h4>
          <div className="space-y-2">
            {node.receives.map((flow, i) => {
              const sourceNode = nodes[flow.to];
              return (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: FLOW_COLORS[flow.type] }}
                  />
                  <span>
                    <span className="font-medium text-[#111827]">
                      {sourceNode?.name || flow.to}
                    </span>
                    <span className="text-[#6B7280]">
                      {" "}&mdash; {flow.description}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E7EB] pt-4">
        <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-2">
          Strategic Note
        </h4>
        <p className="text-sm text-[#374151] leading-relaxed">
          {node.diagnostic}
        </p>
      </div>
    </div>
  );
}

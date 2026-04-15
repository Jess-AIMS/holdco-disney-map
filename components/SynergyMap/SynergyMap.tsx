"use client";

import { useState, useCallback } from "react";
import SectionWrapper from "../SectionWrapper";
import MapNode from "./MapNode";
import MapArrows from "./MapArrows";
import InfoPanel from "./InfoPanel";
import { nodes, getConnectedNodeIds, FLOW_LABELS, FLOW_COLORS } from "@/data/nodes";

export const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  center: { x: 50, y: 50 },
  vp: { x: 50, y: 15 },
  ma: { x: 28, y: 22 },
  vh: { x: 72, y: 22 },
  am: { x: 15, y: 48 },
  aw: { x: 18, y: 72 },
  btc: { x: 82, y: 48 },
  inc: { x: 85, y: 72 },
  aoc: { x: 58, y: 85 },
  mp: { x: 30, y: 88 },
};

export default function SynergyMap() {
  const [selected, setSelected] = useState<string | null>(null);

  const connectedIds = selected ? getConnectedNodeIds(selected) : new Set<string>();

  const handleNodeClick = useCallback(
    (id: string) => {
      setSelected((prev) => (prev === id ? null : id));
    },
    []
  );

  const handleReset = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <SectionWrapper id="synergy-map" wide>
      <p className="text-[#6D5DD3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
        The Ecosystem
      </p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
        The synergy map
      </h2>
      <p className="text-[#6B7280] text-lg max-w-[720px] mb-4">
        Click any node to see what it gives to and receives from the ecosystem.
        Green nodes generate revenue. Amber nodes are building toward revenue.
      </p>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs text-[#6B7280]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" /> Revenue
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" /> Building
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" /> Needs Attention
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6D5DD3]" /> Core IP
        </span>
        <span className="border-l border-[#D1D5DB] pl-4 ml-2 flex items-center gap-3">
          {Object.entries(FLOW_COLORS).map(([type, color]) => (
            <span key={type} className="flex items-center gap-1.5">
              <span
                className="w-4 h-0.5 rounded"
                style={{ backgroundColor: color }}
              />
              {FLOW_LABELS[type as keyof typeof FLOW_LABELS]}
            </span>
          ))}
        </span>
      </div>

      {/* Map container */}
      <div
        className="relative w-full bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleReset();
        }}
      >
        <MapArrows selected={selected} connectedIds={connectedIds} />

        {Object.values(nodes).map((node) => {
          const pos = NODE_POSITIONS[node.id];
          if (!pos) return null;

          const isSelected = selected === node.id;
          const isConnected = connectedIds.has(node.id);
          const isDimmed = selected !== null && !isSelected && !isConnected;

          return (
            <MapNode
              key={node.id}
              node={node}
              position={pos}
              isSelected={isSelected}
              isDimmed={isDimmed}
              onClick={() => handleNodeClick(node.id)}
            />
          );
        })}

        {selected && (
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 text-xs text-[#6B7280] hover:text-[#111827] border border-[#E5E7EB] rounded px-3 py-1.5 bg-white hover:bg-[#F9FAFB] transition-colors cursor-pointer shadow-sm"
          >
            Reset view
          </button>
        )}
      </div>

      {selected && nodes[selected] && (
        <InfoPanel node={nodes[selected]} key={selected} />
      )}
    </SectionWrapper>
  );
}

"use client";

import { EntityNode, STATUS_COLORS } from "@/data/nodes";

interface MapNodeProps {
  node: EntityNode;
  position: { x: number; y: number };
  isSelected: boolean;
  isDimmed: boolean;
  onClick: () => void;
}

export default function MapNode({
  node,
  position,
  isSelected,
  isDimmed,
  onClick,
}: MapNodeProps) {
  const statusColor = STATUS_COLORS[node.status];
  const isCenter = node.id === "center";

  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10 transition-all duration-300"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: isDimmed ? 0.2 : 1,
        transform: `translate(-50%, -50%) scale(${isSelected ? 1.08 : 1})`,
      }}
    >
      {isSelected && (
        <div
          className="absolute inset-0 rounded-xl -m-1"
          style={{
            boxShadow: `0 0 20px ${statusColor}25, 0 0 40px ${statusColor}10`,
          }}
        />
      )}

      <div
        className={`
          relative rounded-xl border px-4 py-3 transition-all
          ${isCenter ? "px-5 py-4" : ""}
          ${isSelected ? "border-[#6D5DD3]/40 bg-white shadow-md" : "border-[#E5E7EB] bg-white shadow-sm"}
          group-hover:shadow-md group-hover:border-[#D1D5DB]
        `}
      >
        <div
          className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full border-2 border-[#F3F4F6]"
          style={{ backgroundColor: statusColor }}
        />

        <div
          className={`font-[family-name:var(--font-playfair)] font-bold leading-tight text-[#111827] ${
            isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"
          }`}
        >
          {node.name}
        </div>

        <div className="text-[10px] md:text-xs text-[#6B7280] mt-0.5">
          {node.subtitle}
        </div>

        {!isCenter && (
          <div
            className="text-[9px] md:text-[10px] font-medium mt-1.5 px-1.5 py-0.5 rounded inline-block"
            style={{
              color: statusColor,
              backgroundColor: statusColor + "12",
            }}
          >
            {node.tag}
          </div>
        )}
      </div>
    </button>
  );
}

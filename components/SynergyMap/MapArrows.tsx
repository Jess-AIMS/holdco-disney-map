"use client";

import { useMemo } from "react";
import { nodes, FLOW_COLORS, FlowType } from "@/data/nodes";
import { NODE_POSITIONS } from "./SynergyMap";

interface MapArrowsProps {
  selected: string | null;
  connectedIds: Set<string>;
}

interface Arrow {
  from: string;
  to: string;
  type: FlowType;
}

function getAllArrows(): Arrow[] {
  const arrows: Arrow[] = [];
  Object.values(nodes).forEach((node) => {
    node.gives.forEach((flow) => {
      arrows.push({ from: node.id, to: flow.to, type: flow.type });
    });
  });
  return arrows;
}

function getControlPoint(
  x1: number, y1: number, x2: number, y2: number, offset: number
): { cx: number; cy: number } {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  if (len === 0) return { cx: mx, cy: my };
  return { cx: mx + (-dy / len) * offset, cy: my + (dx / len) * offset };
}

export default function MapArrows({ selected }: MapArrowsProps) {
  const arrows = useMemo(() => getAllArrows(), []);

  const pairCounts = useMemo(() => {
    const counts = new Map<string, number>();
    arrows.forEach((a) => {
      const key = [a.from, a.to].sort().join("-");
      counts.set(key, (counts.get(key) || 0) + 1);
    });
    return counts;
  }, [arrows]);

  const pairIndexTracker = new Map<string, number>();
  function getOffset(from: string, to: string): number {
    const key = [from, to].sort().join("-");
    const current = pairIndexTracker.get(key) || 0;
    pairIndexTracker.set(key, current + 1);
    const total = pairCounts.get(key) || 1;
    return total > 1 ? (current % 2 === 0 ? 20 : -20) : 12;
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 625"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {Object.entries(FLOW_COLORS).map(([type, color]) => (
          <marker
            key={type}
            id={`arrow-${type}`}
            viewBox="0 0 10 8"
            refX="8"
            refY="4"
            markerWidth="6"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 4 L 0 8 z" fill={color} />
          </marker>
        ))}
        <marker
          id="arrow-dimmed"
          viewBox="0 0 10 8"
          refX="8"
          refY="4"
          markerWidth="6"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 4 L 0 8 z" fill="#D1D5DB" />
        </marker>
      </defs>

      {arrows.map((arrow, i) => {
        const fromPos = NODE_POSITIONS[arrow.from];
        const toPos = NODE_POSITIONS[arrow.to];
        if (!fromPos || !toPos) return null;

        const x1 = fromPos.x * 10;
        const y1 = fromPos.y * 6.25;
        const x2 = toPos.x * 10;
        const y2 = toPos.y * 6.25;

        const offset = getOffset(arrow.from, arrow.to);
        const { cx, cy } = getControlPoint(x1, y1, x2, y2, offset);

        const isHighlighted =
          selected !== null && (arrow.from === selected || arrow.to === selected);
        const isDimmed = selected !== null && !isHighlighted;

        const color = isDimmed ? "#D1D5DB" : FLOW_COLORS[arrow.type];
        const opacity = selected === null ? 0.35 : isDimmed ? 0.1 : 0.85;

        return (
          <path
            key={`${arrow.from}-${arrow.to}-${arrow.type}-${i}`}
            d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
            fill="none"
            stroke={color}
            strokeWidth={isHighlighted ? 2 : 1}
            opacity={opacity}
            markerEnd={isDimmed ? "url(#arrow-dimmed)" : `url(#arrow-${arrow.type})`}
            className="transition-all duration-300"
          />
        );
      })}
    </svg>
  );
}

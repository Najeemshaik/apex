"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ArchitectureNodeData } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SPEED = 0.00012;
const TILT_DEG = -25;
const TILT_RAD = (TILT_DEG * Math.PI) / 180;

function ellipsePoint(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  angle: number
) {
  const ex = rx * Math.cos(angle);
  const ey = ry * Math.sin(angle);
  return {
    x: cx + ex * Math.cos(TILT_RAD) - ey * Math.sin(TILT_RAD),
    y: cy + ex * Math.sin(TILT_RAD) + ey * Math.cos(TILT_RAD),
    depth: Math.sin(angle),
  };
}

function svgPath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  steps = 120
) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const p = ellipsePoint(cx, cy, rx, ry, a);
    pts.push(`${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  return pts.join(" ") + "Z";
}

interface NodeState {
  data: ArchitectureNodeData;
  angle: number;
}

export function Orbit({
  nodes,
  centerNode,
}: {
  nodes: ArchitectureNodeData[];
  centerNode: ArchitectureNodeData;
}) {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [items, setItems] = useState<NodeState[]>(() =>
    nodes.map((data, i) => ({
      data,
      angle: (i * 2 * Math.PI) / nodes.length,
    }))
  );
  const pauseRef = useRef(false);
  const lastRef = useRef(0);
  const rafRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 800, h: 800 });

  useEffect(() => {
    setMounted(true);
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tick = useCallback((now: number) => {
    if (!lastRef.current) lastRef.current = now;
    const dt = now - lastRef.current;
    lastRef.current = now;
    if (!pauseRef.current) {
      setItems((prev) =>
        prev.map((n) => ({ ...n, angle: n.angle + SPEED * dt }))
      );
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const CIcon = centerNode.icon;

  const cx = size.w * 0.5;
  const cy = size.h * 0.46;
  const rx = size.w * 0.42;
  const ry = size.h * 0.28;

  const sorted = [...items].sort(
    (a, b) =>
      ellipsePoint(cx, cy, rx, ry, a.angle).depth -
      ellipsePoint(cx, cy, rx, ry, b.angle).depth
  );

  const mainPath = svgPath(cx, cy, rx, ry);
  const outerPath = svgPath(cx, cy, rx * 1.13, ry * 1.13);
  const innerPath = svgPath(cx, cy, rx * 0.42, ry * 0.42);

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {!mounted ? null : (
        <>
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: rx * 2.2,
              height: ry * 2.2,
              background:
                "radial-gradient(ellipse at center, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.04) 50%, transparent 75%)",
            }}
          />

          {/* SVG rings */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${size.w} ${size.h}`}
            fill="none"
          >
            <defs>
              <linearGradient
                id="ringG"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.7" />
                <stop offset="30%" stopColor="#7C3AED" stopOpacity="0.12" />
                <stop offset="60%" stopColor="#C084FC" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.7" />
              </linearGradient>
              <filter
                id="rGlow"
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
              >
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={outerPath}
              stroke="#7C3AED"
              strokeWidth="0.8"
              strokeDasharray="3 12"
              opacity="0.25"
            />
            <path
              d={mainPath}
              stroke="url(#ringG)"
              strokeWidth="1.5"
              filter="url(#rGlow)"
            />
            <path
              d={innerPath}
              stroke="#A855F7"
              strokeWidth="0.5"
              opacity="0.15"
              strokeDasharray="2 8"
            />
          </svg>

          {/* Static dots on ring */}
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 20;
            const p = ellipsePoint(cx, cy, rx, ry, a);
            const d01 = (p.depth + 1) / 2;
            return (
              <div
                key={`d${i}`}
                className="absolute rounded-full bg-apex-bright"
                style={{
                  left: p.x,
                  top: p.y,
                  width: 3 + d01 * 4,
                  height: 3 + d01 * 4,
                  opacity: 0.2 + d01 * 0.5,
                  transform: "translate(-50%,-50%)",
                  zIndex: 1,
                }}
              />
            );
          })}

          {/* Center brain — pointer-events-none so nodes behind it are hoverable */}
          <div
            className="pointer-events-none absolute"
            style={{
              left: cx,
              top: cy,
              transform: "translate(-50%,-50%)",
              zIndex: 15,
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: Math.min(size.w, size.h) * 0.35,
                height: Math.min(size.w, size.h) * 0.35,
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)",
              }}
            />
            <div
              className="animate-glow-pulse relative flex flex-col items-center justify-center rounded-full border border-white/[0.12] backdrop-blur-2xl"
              style={{
                width: Math.min(size.w, size.h) * 0.18,
                height: Math.min(size.w, size.h) * 0.18,
                background:
                  "radial-gradient(circle at 35% 30%, rgba(168,85,247,0.15) 0%, rgba(124,58,237,0.06) 40%, rgba(10,10,20,0.7) 100%)",
                boxShadow:
                  "0 0 60px rgba(124,58,237,0.35), 0 0 120px rgba(124,58,237,0.1), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 30px rgba(124,58,237,0.08)",
              }}
            >
              <CIcon
                className="text-apex-bright"
                style={{
                  width: Math.min(size.w, size.h) * 0.065,
                  height: Math.min(size.w, size.h) * 0.065,
                }}
              />
              <span className="mt-2 text-sm font-bold tracking-wider text-white">
                {centerNode.label}
              </span>
            </div>
          </div>

          {/* All nodes — single pass, hovered node always on top */}
          {sorted.map((n) => (
            <OrbitNode
              key={n.data.id}
              node={n}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              hovered={hoveredId === n.data.id}
              onHover={(id) => {
                setHoveredId(id);
                pauseRef.current = true;
              }}
              onLeave={() => {
                setHoveredId(null);
                pauseRef.current = false;
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

/*
  OrbitNode: big icon + label beneath it.
  On hover: card expands below with description.
*/
function OrbitNode({
  node,
  cx,
  cy,
  rx,
  ry,
  hovered,
  onHover,
  onLeave,
}: {
  node: NodeState;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  hovered: boolean;
  onHover: (id: string) => void;
  onLeave: () => void;
}) {
  const pt = ellipsePoint(cx, cy, rx, ry, node.angle);
  const d01 = (pt.depth + 1) / 2;
  const z = Math.round(d01 * 18);
  const opacity = 0.5 + d01 * 0.5;
  const Icon = node.data.icon;
  const iconSize = 28;

  return (
    <div
      className="absolute cursor-pointer select-none"
      style={{
        left: pt.x,
        top: pt.y,
        transform: "translate(-50%,-50%)",
        opacity: hovered ? 1 : opacity,
        zIndex: hovered ? 50 : z + 20,
        transition: "opacity 0.3s ease",
      }}
      onMouseEnter={() => onHover(node.data.id)}
      onMouseLeave={onLeave}
    >
      {/* Icon circle + label */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-300",
            hovered
              ? "border-apex-accent/50 bg-apex-accent/20"
              : "border-white/[0.1] bg-white/[0.04]"
          )}
          style={{
            width: iconSize * 2.2,
            height: iconSize * 2.2,
            boxShadow: hovered
              ? "0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.15)"
              : "0 0 15px rgba(0,0,0,0.4)",
          }}
        >
          <Icon
            className={cn(
              "transition-colors duration-300",
              hovered ? "text-apex-bright" : "text-[#b0b0c8]"
            )}
            style={{ width: iconSize, height: iconSize }}
          />
        </div>
        <span
          className={cn(
            "mt-2 whitespace-nowrap text-xs font-semibold tracking-wide transition-colors duration-300",
            hovered ? "text-white" : "text-[#a0a0b8]"
          )}
        >
          {node.data.label}
        </span>

        {/* Expanded info on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div
                className="mt-2 rounded-xl border border-apex-accent/25 px-4 py-3 backdrop-blur-2xl"
                style={{
                  background: "rgba(8,8,18,0.95)",
                  boxShadow:
                    "0 0 30px rgba(124,58,237,0.25), 0 0 60px rgba(124,58,237,0.08)",
                  maxWidth: 200,
                }}
              >
                <p className="text-[11px] leading-relaxed text-[#a0a0b8]">
                  {node.data.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

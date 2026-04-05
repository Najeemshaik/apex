"use client";

import { useRef, useState, useEffect, useCallback } from "react";

/* ── Card components — each shows the app icon prominently + preview content ── */

function SlackCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-[#4A154B]/30">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
            <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
            <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312z" fill="#2EB67D"/>
            <path d="M15.165 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521zm0-1.27a2.527 2.527 0 0 1-2.521-2.522 2.528 2.528 0 0 1 2.521-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="#ECB22E"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Slack</p>
          <p className="text-[11px] text-white/40">#general</p>
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2">
        <div className="mt-0.5 size-5 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600" />
        <p className="text-[11px] leading-relaxed text-white/50">
          <span className="font-medium text-white/70">Sarah K.</span> Can someone review the Q3 deck?
        </p>
      </div>
    </div>
  );
}

function GmailCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-red-500/15">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Gmail</p>
          <p className="text-[11px] text-white/40">2 min ago</p>
        </div>
        <div className="ml-auto size-2 rounded-full bg-apex-bright" />
      </div>
      <p className="mt-2.5 text-xs font-semibold text-white/80">Re: Partnership proposal</p>
      <p className="mt-1 text-[11px] leading-relaxed text-white/40">Following up on our call...</p>
    </div>
  );
}

function CalendarCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/15">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M18 4h-4V2h-2v2H8V2H6v2H2C.9 4 0 4.9 0 6v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H2V10h16v10z" fill="#4285F4"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Calendar</p>
          <p className="text-[11px] text-white/40">Today</p>
        </div>
      </div>
      <div className="mt-3 rounded-lg border-l-2 border-apex-bright/60 bg-apex-accent/10 px-3 py-2">
        <p className="text-xs font-semibold text-white/80">Team Sync</p>
        <p className="mt-0.5 text-[10px] text-white/40">2:00 — 2:30 PM</p>
      </div>
    </div>
  );
}

function NotionCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-white/[0.08]">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.287 2.18c-.42-.326-.98-.7-2.055-.607L3.387 2.648c-.467.047-.56.28-.374.466l1.446 1.094zm.793 3.313v13.894c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.934-.56.934-1.166V6.567c0-.607-.233-.934-.747-.887l-15.177.887c-.56.047-.747.327-.747.887zm14.337.745c.093.42 0 .84-.42.887l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.494-.934l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.187c-.093-.187 0-.653.327-.746l.84-.233V9.854L7.474 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.513.28-.886.747-.933l3.222-.187z" fill="#FFFFFF"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Notion</p>
          <p className="text-[11px] text-white/40">Notes</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-white/[0.06]" />
        <div className="h-1.5 w-3/4 rounded-full bg-white/[0.06]" />
        <div className="h-1.5 w-5/6 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

function TasksCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-purple-500/15">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#A855F7"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">HubSpot</p>
          <p className="text-[11px] text-white/40">CRM</p>
        </div>
      </div>
      <p className="mt-2.5 text-2xl font-bold text-white">24<span className="ml-1 text-xs text-emerald-400">↗</span></p>
      <div className="mt-1 flex gap-0.5">
        {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-apex-accent/30" style={{ height: h * 0.28 }} />
        ))}
      </div>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div className="hub-card p-4">
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-green-500/15">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="#25D366"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">WhatsApp</p>
          <p className="text-[11px] text-white/40">Dan M.</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="rounded-xl rounded-tl-sm bg-white/[0.06] px-3 py-1.5">
          <p className="text-[11px] text-white/50">Sent the invoice ✓</p>
        </div>
        <div className="rounded-xl rounded-br-sm bg-apex-accent/15 px-3 py-1.5">
          <p className="text-[11px] text-white/60">Got it, thanks!</p>
        </div>
      </div>
    </div>
  );
}

/* ── SVG path with rounded corners ── */

const R = 14;

function roundedPath(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  const parts: string[] = [`M ${pts[0][0]} ${pts[0][1]}`];

  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const next = pts[i + 1];

    if (!next) {
      parts.push(`L ${cx} ${cy}`);
    } else {
      const [nx, ny] = next;
      const dxIn = cx - px, dyIn = cy - py;
      const dxOut = nx - cx, dyOut = ny - cy;
      const lenIn = Math.sqrt(dxIn * dxIn + dyIn * dyIn);
      const lenOut = Math.sqrt(dxOut * dxOut + dyOut * dyOut);
      const r = Math.min(R, lenIn / 2, lenOut / 2);

      const sx = cx - (dxIn / lenIn) * r;
      const sy = cy - (dyIn / lenIn) * r;
      const ex = cx + (dxOut / lenOut) * r;
      const ey = cy + (dyOut / lenOut) * r;

      parts.push(`L ${sx} ${sy}`);
      parts.push(`Q ${cx} ${cy} ${ex} ${ey}`);
    }
  }
  return parts.join(" ");
}

/* ── Edge anchor helper ── */

type Edge = "top" | "bottom" | "left" | "right";

function getEdgeAnchor(rect: DOMRect, edge: Edge, cr: DOMRect): [number, number] {
  const l = rect.left - cr.left;
  const t = rect.top - cr.top;
  switch (edge) {
    case "top": return [l + rect.width / 2, t];
    case "bottom": return [l + rect.width / 2, t + rect.height];
    case "left": return [l, t + rect.height / 2];
    case "right": return [l + rect.width, t + rect.height / 2];
  }
}

/** Get a unique anchor point on the center node for each card.
 *  offset: 0-1 position along that edge (0.5 = center) */
function getCenterAnchor(
  rect: DOMRect, edge: Edge, offset: number, cr: DOMRect
): [number, number] {
  const l = rect.left - cr.left;
  const t = rect.top - cr.top;
  switch (edge) {
    case "top": return [l + rect.width * offset, t];
    case "bottom": return [l + rect.width * offset, t + rect.height];
    case "left": return [l, t + rect.height * offset];
    case "right": return [l + rect.width, t + rect.height * offset];
  }
}

/* ── Card definitions ── */

interface CardDef {
  id: string;
  cardEdge: Edge;
  centerEdge: Edge;
  centerOffset: number; // 0-1 position along the center edge
}

// Top row: Slack→left, Gmail→top, HubSpot→right
// Bottom row: WhatsApp→left, Notion→bottom, Calendar→right
const CARDS: CardDef[] = [
  { id: "slack",    cardEdge: "bottom", centerEdge: "left",   centerOffset: 0.2 },
  { id: "gmail",    cardEdge: "bottom", centerEdge: "left",   centerOffset: 0.5 },
  { id: "tasks",    cardEdge: "bottom", centerEdge: "right",  centerOffset: 0.2 },
  { id: "whatsapp", cardEdge: "top",    centerEdge: "left",   centerOffset: 0.8 },
  { id: "notion",   cardEdge: "top",    centerEdge: "right",  centerOffset: 0.5 },
  { id: "calendar", cardEdge: "top",    centerEdge: "right",  centerOffset: 0.8 },
];

function buildConnection(
  cx: number, cy: number,
  tx: number, ty: number,
  cardEdge: Edge, centerEdge: Edge
): [number, number][] {
  const pts: [number, number][] = [[cx, cy]];

  // Vertical card edge → horizontal center edge (L-shape: go down/up then across)
  if (
    (cardEdge === "bottom" || cardEdge === "top") &&
    (centerEdge === "left" || centerEdge === "right")
  ) {
    pts.push([cx, ty], [tx, ty]);
  }
  // Fallback: Z-shape through midpoint
  else {
    const midY = (cy + ty) / 2;
    pts.push([cx, midY], [tx, midY], [tx, ty]);
  }

  return pts;
}

export function IntegrationHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [paths, setPaths] = useState<string[]>([]);

  const compute = useCallback(() => {
    const container = containerRef.current;
    const center = centerRef.current;
    if (!container || !center) return;

    const cr = container.getBoundingClientRect();
    const cc = center.getBoundingClientRect();
    const newPaths: string[] = [];

    CARDS.forEach((def) => {
      const el = cardRefs.current[def.id];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const [cx, cy] = getEdgeAnchor(rect, def.cardEdge, cr);
      const [tx, ty] = getCenterAnchor(cc, def.centerEdge, def.centerOffset, cr);
      const pts = buildConnection(cx, cy, tx, ty, def.cardEdge, def.centerEdge);
      newPaths.push(roundedPath(pts));
    });

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    compute();
    const t1 = setTimeout(compute, 100);
    const t2 = setTimeout(compute, 500);
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => { clearTimeout(t1); clearTimeout(t2); ro.disconnect(); window.removeEventListener("resize", compute); };
  }, [compute]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* SVG lines layer */}
      <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible" fill="none">
        <defs>
          <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((d, i) => (
          <path key={i} d={d} stroke="#7C3AED" strokeWidth="1.5" opacity="0.35" filter="url(#line-glow)" />
        ))}
      </svg>

      {/* Staggered layout with center Apex node */}
      <div className="relative z-10">
        {/* Top row — staggered via padding-top (no transforms) */}
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="pt-6">
            <div ref={(el) => { cardRefs.current["slack"] = el; }}>
              <SlackCard />
            </div>
          </div>
          <div>
            <div ref={(el) => { cardRefs.current["gmail"] = el; }}>
              <GmailCard />
            </div>
          </div>
          <div className="pt-10">
            <div ref={(el) => { cardRefs.current["tasks"] = el; }}>
              <TasksCard />
            </div>
          </div>
        </div>

        {/* Center Apex node */}
        <div className="flex justify-center py-6">
          <div ref={centerRef} className="relative">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 200,
                height: 200,
                background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(124,58,237,0.03) 50%, transparent 70%)",
              }}
            />
            <div
              className="relative flex items-center justify-center backdrop-blur-2xl"
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: "linear-gradient(160deg, rgba(100,50,200,0.25) 0%, rgba(40,20,80,0.6) 40%, rgba(10,5,25,0.9) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 30px rgba(124,58,237,0.08), 0 12px 40px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="size-9">
                <path d="M16 6L7 26h4.5l1.8-4h5.4l1.8 4H25L16 6zm0 7.5L19 22h-6l3-8.5z" fill="#C084FC" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom row — staggered via padding-top (no transforms) */}
        <div className="grid grid-cols-3 items-start gap-4">
          <div>
            <div ref={(el) => { cardRefs.current["whatsapp"] = el; }}>
              <WhatsAppCard />
            </div>
          </div>
          <div className="pt-8">
            <div ref={(el) => { cardRefs.current["notion"] = el; }}>
              <NotionCard />
            </div>
          </div>
          <div className="pt-3">
            <div ref={(el) => { cardRefs.current["calendar"] = el; }}>
              <CalendarCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Point3D = [number, number, number];
type Pts = Point3D[][];

// ── Projection helpers ──────────────────────────────────────────────────────

function project(
  x: number,
  y: number,
  z: number,
  cosA: number,
  sinA: number,
  cosB: number,
  sinB: number,
): [number, number] {
  const x1 = x * cosA - z * sinA;
  const z1 = x * sinA + z * cosA;
  const y1 = y * cosB - z1 * sinB;
  return [x1, y1];
}

function drawWireframe(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  pts: Pts,
  angleA: number,
  color: string,
) {
  const cosA = Math.cos(angleA);
  const sinA = Math.sin(angleA);
  const cosB = Math.cos(0.28);
  const sinB = Math.sin(0.28);

  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const row of pts) {
    for (const p of row) {
      const [px, py] = project(p[0], p[1], p[2], cosA, sinA, cosB, sinB);
      if (px < minX) minX = px;
      if (px > maxX) maxX = px;
      if (py < minY) minY = py;
      if (py > maxY) maxY = py;
    }
  }

  const pad = 0.12;
  const scaleX = (W * (1 - pad * 2)) / (maxX - minX || 1);
  const scaleY = (H * (1 - pad * 2)) / (maxY - minY || 1);
  const scale = Math.min(scaleX, scaleY);

  function toScreen(x: number, y: number, z: number): [number, number] {
    const [px, py] = project(x, y, z, cosA, sinA, cosB, sinB);
    return [
      (px - minX) * scale + W * pad,
      (py - minY) * scale + H * pad,
    ];
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = 0.7;
  ctx.globalAlpha = 0.72;

  const iStep = Math.max(1, Math.floor(pts.length / 18));
  for (let i = 0; i < pts.length; i += iStep) {
    ctx.beginPath();
    for (let j = 0; j < pts[i].length; j++) {
      const [sx, sy] = toScreen(...pts[i][j]);
      j === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }

  const jStep = Math.max(1, Math.floor(pts[0].length / 18));
  for (let j = 0; j < pts[0].length; j += jStep) {
    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) {
      const [sx, sy] = toScreen(...pts[i][j]);
      i === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.stroke();
  }
}

// ── Pasta generators ─────────────────────────────────────────────────────────

function genCappelletti(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  for (let i = 0; i <= 40; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 120; j += 2) {
      const x =
        (0.1 + Math.sin((3 * i) / 160 * pi)) * Math.cos((2.3 * j) / 120 * pi);
      const y =
        (0.1 + Math.sin((3 * i) / 160 * pi)) * Math.sin((2.3 * j) / 120 * pi);
      const z =
        0.1 + j / 400 + (0.3 - 0.231 * (i / 40)) * Math.cos((i / 20) * pi);
      row.push([x, y, z]);
    }
    pts.push(row);
  }
  return pts;
}

function genCavatappi(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  for (let i = 0; i <= 70; i += 2) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 150; j += 3) {
      const x =
        (3 + 2 * Math.cos((i / 35) * pi) + 0.1 * Math.cos((2 * i) / 7 * pi)) *
        Math.cos((j / 30) * pi);
      const y =
        (3 + 2 * Math.cos((i / 35) * pi) + 0.1 * Math.cos((2 * i) / 7 * pi)) *
        Math.sin((j / 30) * pi);
      const z =
        3 +
        2 * Math.sin((i / 35) * pi) +
        0.1 * Math.sin((2 * i) / 7 * pi) +
        j / 6;
      row.push([x, y, z]);
    }
    pts.push(row);
  }
  return pts;
}

function genSpaghetti(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  const r = 0.07;
  for (let i = 0; i <= 12; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 24; j++) {
      const theta = (i / 12) * 2 * pi;
      row.push([r * Math.cos(theta), r * Math.sin(theta), j / 4 - 3]);
    }
    pts.push(row);
  }
  return pts;
}

function genFusilli(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  for (let i = 0; i <= 28; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 80; j++) {
      const t = (j / 80) * 3 * pi;
      const phi = (i / 28) * 2 * pi;
      const R = 0.5,
        r = 0.18;
      const x = (R + r * Math.cos(phi)) * Math.cos(t * 0.5);
      const y = (R + r * Math.cos(phi)) * Math.sin(t * 0.5);
      const z = r * Math.sin(phi) * 0.6 + (t / (3 * pi)) * 3 - 1.5;
      row.push([x, y, z]);
    }
    pts.push(row);
  }
  return pts;
}

function genPenne(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  const nRidges = 8;
  for (let i = 0; i <= 24; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 20; j++) {
      const theta = (i / 24) * 2 * pi;
      const ridgeAmp = 0.07 * Math.cos(nRidges * theta);
      const r = 0.6 + ridgeAmp;
      const topAngle = 0.2 * Math.cos(theta + pi / 4);
      const z = (j / 20) * 2.5 - 1.25 + (j / 20 - 0.5) * topAngle;
      row.push([r * Math.cos(theta), r * Math.sin(theta), z]);
    }
    pts.push(row);
  }
  return pts;
}

function genTortellini(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  const R = 1.1,
    r = 0.32;
  for (let i = 0; i <= 28; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 36; j++) {
      const phi = (i / 28) * 2 * pi;
      const theta = (j / 36) * 2 * pi;
      const x = (R + r * Math.cos(phi)) * Math.cos(theta);
      const y = (R + r * Math.cos(phi)) * Math.sin(theta);
      const z = r * Math.sin(phi) * 0.45;
      row.push([x, y, z]);
    }
    pts.push(row);
  }
  return pts;
}

function genFarfalle(): Pts {
  const pts: Pts = [];
  const pi = Math.PI;
  for (let i = 0; i <= 28; i++) {
    const row: Point3D[] = [];
    for (let j = 0; j <= 28; j++) {
      const u = (i / 28 - 0.5) * 3.2;
      const v = (j / 28 - 0.5) * 2.2;
      const pinch = 0.22 + 0.78 * (Math.abs(u) / 1.6);
      const x = u;
      const y = v * pinch;
      const z = 0.28 * Math.sin((u / 1.6) * pi) * Math.cos(v * pi);
      row.push([x, y, z]);
    }
    pts.push(row);
  }
  return pts;
}

// ── PastaMiniCanvas ────────────────────────────────────────────────────────

interface PastaMiniCanvasProps {
  generator: () => Pts;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function PastaMiniCanvas({
  generator,
  color = "#c8922a",
  width = 200,
  height = 160,
  className,
}: PastaMiniCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const pts = generator();
    ctx.clearRect(0, 0, width, height);
    drawWireframe(ctx, width, height, pts, 0.42, color);
  }, [generator, color, width, height]);

  return (
    <canvas
      ref={ref}
      width={width}
      height={height}
      className={className}
      aria-hidden
    />
  );
}

// ── PastaVisualizer ───────────────────────────────────────────────────────

type PastaKey = "spaghetti" | "fusilli" | "penne" | "tortellini" | "farfalle";

const PASTA_DATA: Record<
  PastaKey,
  { name: string; desc: string; gen: () => Pts }
> = {
  spaghetti: {
    name: "Spaghetti",
    desc: "Π = r·cos(t)  |  Θ = r·sin(t)  |  K = s  ·  Cook: 8–10 min.",
    gen: genSpaghetti,
  },
  fusilli: {
    name: "Fusilli",
    desc: "Helical parametric surface  |  sin & cos combination  ·  Cook: 10–12 min.",
    gen: genFusilli,
  },
  penne: {
    name: "Penne",
    desc: "Ridged cylindrical tube, angled cuts  ·  Cook: 11 min.",
    gen: genPenne,
  },
  tortellini: {
    name: "Tortellini",
    desc: "Toric (doughnut) surface  |  Legend of Venus's navel  ·  Cook: 3–4 min.",
    gen: genTortellini,
  },
  farfalle: {
    name: "Farfalle",
    desc: "Folded plane + ruffled edge  |  \"Butterflies\"  ·  Cook: 10 min.",
    gen: genFarfalle,
  },
};

export function PastaVisualizer() {
  const [current, setCurrent] = useState<PastaKey>("spaghetti");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const pts = PASTA_DATA[current].gen();

    cancelAnimationFrame(rafRef.current);

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      angleRef.current += 0.009;
      drawWireframe(ctx!, W, H, pts, angleRef.current, "#c8922a");
      rafRef.current = requestAnimationFrame(frame);
    }
    frame();

    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  const data = PASTA_DATA[current];

  return (
    <div className="rounded-2xl bg-[#1a1410] px-6 py-8 text-center">
      <p className="font-serif text-xl italic text-[#f5f0e8]">
        Parametric Pasta Visualizer
      </p>
      <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#7a7060]">
        Select a pasta — wireframe generated from equations
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {(Object.keys(PASTA_DATA) as PastaKey[]).map((key) => (
          <button
            key={key}
            onClick={() => {
              angleRef.current = 0;
              setCurrent(key);
            }}
            className={`rounded-sm border px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] transition-all duration-200 ${
              key === current
                ? "border-[#c8922a] bg-[#c8922a] text-[#1a1410]"
                : "border-[#3a3028] text-[#9a9080] hover:border-[#c8922a] hover:text-[#c8922a]"
            }`}
          >
            {PASTA_DATA[key].name}
          </button>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={480}
        height={280}
        className="mx-auto mt-6 block max-w-full"
        aria-label={`Wireframe visualization of ${data.name}`}
      />

      <div className="mt-4">
        <p className="font-serif text-base italic text-[#c8922a]">
          {data.name}
        </p>
        <p className="mt-1 font-mono text-[0.68rem] text-[#7a7060]">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

// ── Named generator exports for equation cards ────────────────────────────
export { genCappelletti, genCavatappi };

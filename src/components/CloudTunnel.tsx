"use client";

import { useEffect, useRef } from "react";

type Cloud = {
  x: number;
  y: number;
  z: number;
  drift: number;
  seed: number;
};

// Recreates the reference site's "flying through clouds" background video as a
// self-contained canvas animation: soft cloud sprites fly out of a vanishing
// point toward the viewer over a blue-sky gradient.
export default function CloudTunnel({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let rafId = 0;
    let running = true;
    let inView = true;
    let lastTime = 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Pre-render a fuzzy cloud puff sprite for cheap per-frame drawing
    const sprite = document.createElement("canvas");
    const S = 320;
    sprite.width = S;
    sprite.height = Math.round(S * 0.62);
    {
      const g = sprite.getContext("2d");
      if (g) {
        const puffs: Array<[number, number, number]> = [
          [0.5, 0.6, 0.3],
          [0.3, 0.66, 0.22],
          [0.7, 0.64, 0.24],
          [0.4, 0.48, 0.2],
          [0.62, 0.46, 0.18],
          [0.52, 0.38, 0.14],
        ];
        for (const [px, py, pr] of puffs) {
          const r = pr * S;
          const cx = px * S;
          const cy = py * sprite.height;
          const grad = g.createRadialGradient(cx, cy, 0, cx, cy, r);
          grad.addColorStop(0, "rgba(255,255,255,0.85)");
          grad.addColorStop(0.55, "rgba(255,255,255,0.45)");
          grad.addColorStop(1, "rgba(255,255,255,0)");
          g.fillStyle = grad;
          g.beginPath();
          g.arc(cx, cy, r, 0, Math.PI * 2);
          g.fill();
        }
      }
    }

    const Z_FAR = 4;
    const Z_NEAR = 0.18;
    const SPEED = 0.5;
    const COUNT = 34;

    const clouds: Cloud[] = [];

    const spawn = (initial: boolean): Cloud => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.35 + Math.random() * 0.85;
      return {
        x: Math.cos(angle) * radius * 1.2,
        // Bias downward so the upper sky stays clearer, like the reference
        y: Math.sin(angle) * radius * 0.7 + 0.22,
        z: initial ? Z_NEAR + Math.random() * (Z_FAR - Z_NEAR) : 3.4 + Math.random() * 0.6,
        drift: (Math.random() - 0.5) * 0.05,
        seed: 0.8 + Math.random() * 0.5,
      };
    };

    for (let i = 0; i < COUNT; i++) clouds.push(spawn(true));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawSky = () => {
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#7c90c0");
      grad.addColorStop(0.45, "#afbdde");
      grad.addColorStop(0.8, "#dee4f2");
      grad.addColorStop(1, "#F3F5FA");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Bright glow around the vanishing point
      const rg = ctx.createRadialGradient(
        w / 2,
        h * 0.62,
        0,
        w / 2,
        h * 0.62,
        Math.max(w, h) * 0.6
      );
      rg.addColorStop(0, "rgba(255,255,255,0.55)");
      rg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);
    };

    const drawFrame = (dt: number) => {
      drawSky();

      for (const c of clouds) {
        c.z -= dt * SPEED * c.seed;
        c.x += c.drift * dt;
        if (c.z <= Z_NEAR) {
          Object.assign(c, spawn(false));
        }
      }

      // Far clouds first so near ones paint on top
      const sorted = [...clouds].sort((a, b) => b.z - a.z);
      const cx = w / 2;
      const cy = h * 0.58;

      for (const c of sorted) {
        const px = cx + (c.x * w * 0.55) / c.z;
        const py = cy + (c.y * h * 0.55) / c.z;
        const size = (w * 0.34) / c.z;

        const fadeIn = Math.min(1, Math.max(0, (Z_FAR - c.z) / 1));
        const fadeOut = Math.min(1, Math.max(0, (c.z - Z_NEAR) / 0.4));
        const alpha = fadeIn * fadeOut * 0.9;
        if (alpha <= 0.01) continue;

        ctx.globalAlpha = alpha;
        ctx.drawImage(
          sprite,
          px - size / 2,
          py - size * 0.31,
          size,
          size * 0.62
        );
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      if (!running || !inView) return;
      const dt = Math.min(0.05, lastTime ? (time - lastTime) / 1000 : 0.016);
      lastTime = time;
      drawFrame(dt);
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      lastTime = 0;
      if (running && inView && !reduceMotion) {
        rafId = requestAnimationFrame(loop);
      }
    };

    resize();

    if (reduceMotion) {
      // Render a single static frame
      drawFrame(0);
    } else {
      start();
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduceMotion) drawFrame(0);
    });
    ro.observe(canvas);

    // Mirrors the reference's "pause video when scrolled away" behavior
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        start();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}

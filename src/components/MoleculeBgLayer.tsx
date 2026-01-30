'use client';

import { useRef, useEffect, useState } from 'react';

const INITIAL_POSITIONS = [
  { left: 5, top: 8 }, { left: 18, top: 15 }, { left: 32, top: 6 }, { left: 48, top: 12 },
  { left: 62, top: 8 }, { left: 78, top: 14 }, { left: 92, top: 10 }, { left: 8, top: 28 },
  { left: 22, top: 35 }, { left: 38, top: 30 }, { left: 52, top: 38 }, { left: 68, top: 32 },
  { left: 82, top: 36 }, { left: 95, top: 28 }, { left: 12, top: 52 }, { left: 28, top: 58 },
  { left: 45, top: 52 }, { left: 58, top: 58 }, { left: 72, top: 54 }, { left: 88, top: 50 },
  { left: 5, top: 72 }, { left: 20, top: 78 }, { left: 35, top: 72 }, { left: 50, top: 78 },
  { left: 65, top: 74 }, { left: 80, top: 80 }, { left: 94, top: 75 }, { left: 15, top: 92 },
  { left: 42, top: 88 }, { left: 70, top: 90 }, { left: 90, top: 92 },
];

/** Fewer molecules on mobile, evenly spread top-to-bottom (not clustered at top) */
const MOBILE_POSITIONS = [
  { left: 12, top: 15 }, { left: 50, top: 10 }, { left: 88, top: 18 },
  { left: 22, top: 48 }, { left: 78, top: 52 },
  { left: 10, top: 82 }, { left: 50, top: 88 }, { left: 90, top: 85 },
];
const MOBILE_BREAKPOINT = 1024;

const VELOCITY_MIN = 0.25;
const VELOCITY_MAX = 1;
const COLLISION_RADIUS = 6;
const WALL_MARGIN = 4;
const COLLISION_SOFTEN = 0.35;
const BASE_OMEGA = 0.8;
const SPIN_KICK = 12;
const OMEGA_DAMP = 0.998;

type Dot = { x: number; y: number; vx: number; vy: number; rotation: number; omega: number };

function initDots(positions: { left: number; top: number }[] = INITIAL_POSITIONS): Dot[] {
  return positions.map(({ left, top }) => ({
    x: left,
    y: top,
    vx: (Math.random() - 0.5) * 2 * (VELOCITY_MIN + Math.random() * (VELOCITY_MAX - VELOCITY_MIN)),
    vy: (Math.random() - 0.5) * 2 * (VELOCITY_MIN + Math.random() * (VELOCITY_MAX - VELOCITY_MIN)),
    rotation: Math.random() * 360,
    omega: (Math.random() - 0.5) * 2 * BASE_OMEGA,
  }));
}

export default function MoleculeBgLayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const positions = isMobile ? MOBILE_POSITIONS : INITIAL_POSITIONS;
  const dotsRef = useRef<Dot[]>(initDots());
  const lastRef = useRef<number>(0);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => {
      const mobile = mql.matches;
      setIsMobile(mobile);
      dotsRef.current = initDots(mobile ? MOBILE_POSITIONS : INITIAL_POSITIONS);
    };
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number;

    const tick = (now: number) => {
      const dt = Math.min((now - lastRef.current) / 1000, 0.1);
      lastRef.current = now;
      const dots = dotsRef.current;
      const n = dots.length;

      for (let i = 0; i < n; i++) {
        dots[i].x += dots[i].vx * dt;
        dots[i].y += dots[i].vy * dt;
        dots[i].rotation += dots[i].omega * dt;
        dots[i].omega *= OMEGA_DAMP;
      }

      for (let i = 0; i < n; i++) {
        if (dots[i].x < WALL_MARGIN) {
          dots[i].x = WALL_MARGIN;
          dots[i].vx = Math.abs(dots[i].vx);
        }
        if (dots[i].x > 100 - WALL_MARGIN) {
          dots[i].x = 100 - WALL_MARGIN;
          dots[i].vx = -Math.abs(dots[i].vx);
        }
        if (dots[i].y < WALL_MARGIN) {
          dots[i].y = WALL_MARGIN;
          dots[i].vy = Math.abs(dots[i].vy);
        }
        if (dots[i].y > 100 - WALL_MARGIN) {
          dots[i].y = 100 - WALL_MARGIN;
          dots[i].vy = -Math.abs(dots[i].vy);
        }
      }

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = dots[j].x - dots[i].x;
          const dy = dots[j].y - dots[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < COLLISION_RADIUS * 2 && dist > 0.001) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = COLLISION_RADIUS * 2 - dist;
            dots[i].x -= (nx * overlap) / 2;
            dots[i].y -= (ny * overlap) / 2;
            dots[j].x += (nx * overlap) / 2;
            dots[j].y += (ny * overlap) / 2;
            const v1n = dots[i].vx * nx + dots[i].vy * ny;
            const v2n = dots[j].vx * nx + dots[j].vy * ny;
            const swap = (v2n - v1n) * COLLISION_SOFTEN;
            dots[i].vx += swap * nx;
            dots[i].vy += swap * ny;
            dots[j].vx -= swap * nx;
            dots[j].vy -= swap * ny;
            const kick = SPIN_KICK * (Math.random() - 0.5);
            dots[i].omega += kick;
            dots[j].omega -= kick;
          }
        }
      }

      for (let i = 0; i < n; i++) {
        const el = container.children[i] as HTMLElement;
        if (el) {
          el.style.left = `${dots[i].x}%`;
          el.style.top = `${dots[i].y}%`;
          const inner = el.firstElementChild as HTMLElement;
          if (inner) inner.style.transform = `rotate(${dots[i].rotation}deg)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    lastRef.current = performance.now();
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="molecule-bg" aria-hidden="true" ref={containerRef}>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="molecule-bg__dot molecule-bg__dot--physics"
          style={{
            left: `${dotsRef.current[i]?.x ?? pos.left}%`,
            top: `${dotsRef.current[i]?.y ?? pos.top}%`,
          }}
        >
          <div className="molecule-bg__dot-inner" />
        </div>
      ))}
    </div>
  );
}

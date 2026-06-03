 "use client";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Chinonso Xavier - Fullstack Developer",
// //   description:
// //     "Portfolio showcasing the work and projects of Chinonso Xavier, a passionate frontend engineer. Explore innovative web solutions, creative designs, and a commitment to crafting exceptional digital experiences.",
// // };

// // components/layout/layout.tsx

// export default function Layout({
//   children,
//   className,
// }: Readonly<{
//   className?: string;
//   children: React.ReactNode;
// }>) {
//   return (
//     <div
//       className={`${className} bg-secondary-foreground text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden`}
//     >
//       <div className="w-full" >
//         <div className="relative flex h-auto w-full flex-col group/design-root"></div>
//         <div className="w-full" >
//           <div
//             className="absolute inset-0 z-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
//             data-alt="Anime style lo-fi city skyline at night with neon lights"
//           ></div>
//           <div className="absolute inset-0 z-0 h-full w-full bg-linear-to-b from-background-dark/90 via-background-dark/80 to-background-dark"></div>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }


// components/layout/layout.tsx
import { ReactNode, useCallback, useEffect, useRef } from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}
// ─── Particle Canvas ───────────────────────────────────────────────────────────
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
};

function useParticleCanvas(
  containerRef: React.RefObject<HTMLDivElement | null>,
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const isHoveredRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  const COLORS = [
    "#7c3aed",
    "#a78bfa",
    "#06b6d4",
    "#34d399",
    "#f472b6",
    "#fbbf24",
  ];

  const spawnBurst = useCallback((x: number, y: number, count = 12) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 1.5 + Math.random() * 3.5;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }, []);

  const spawnTrail = useCallback((x: number, y: number) => {
    if (Math.random() > 0.4) return;
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.4 + Math.random() * 1.2;
    particlesRef.current.push({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      life: 1,
      maxLife: 1,
      size: 1.5 + Math.random() * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create canvas overlay
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:20;border-radius:1rem;";
    container.style.position = "relative";
    container.appendChild(canvas);
    canvasRef.current = canvas;

    const resize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Mouse events
    const onEnter = (e: MouseEvent) => {
      isHoveredRef.current = true;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnBurst(x, y, 20);
    };
    const onLeave = (e: MouseEvent) => {
      isHoveredRef.current = false;
      const rect = container.getBoundingClientRect();
      spawnBurst(e.clientX - rect.left, e.clientY - rect.top, 10);
    };
    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (isHoveredRef.current)
        spawnTrail(mouseRef.current.x, mouseRef.current.y);
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    container.addEventListener("mousemove", onMove);

    // Animation loop
    const tick = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // gentle gravity
        p.vx *= 0.97;
        p.life -= 0.022;

        const alpha = Math.max(0, p.life);
        ctx.save();
        ctx.globalAlpha = alpha;
        // glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      ro.disconnect();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("mousemove", onMove);
      canvas.remove();
    };
  }, [containerRef, spawnBurst, spawnTrail]);
}
const Layout = ({ children, className }: LayoutProps) => {
    const mainRef = useRef<HTMLDivElement>(null);
    useParticleCanvas(mainRef);
  return (
    <main ref={mainRef}
      className={`flex flex-col items-center w-full min-h-screen  bg-secondary-foreground ${className}`}
    >
      <Navbar/>
      <Sidemenu/>
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;
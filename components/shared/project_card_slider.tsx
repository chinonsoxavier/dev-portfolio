"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { projects } from "@/lib/project-data";
import evara from "@/public/assets/evara.png";
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

function ProjectCardSlider({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useParticleCanvas(cardRef);

  // project.images should be string[] — fallback to single image if not present
  const images: StaticImageData[] = (
    project as unknown as { image: StaticImageData[] }
  ).image ?? [project.image];

  const startSlider = useCallback(() => {
    if (images.length < 2) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % images.length);
    }, 2900);
  }, [images.length]);

  const stopSlider = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIdx(0);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
      className="group bg-[#1e1a32] border border-border-dark rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative h-52 overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === activeIdx ? 1 : 0 }}
          >
            <Image src={src} alt={project.name} fill className="object-cover" />
          </div>
        ))}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === activeIdx ? "#a78bfa" : "rgba(255,255,255,0.35)",
                  transform: i === activeIdx ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
          </div>
        )}

        {/* Slide counter badge */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2 py-0.5 text-xs font-semibold bg-black/50 text-white rounded-full backdrop-blur-sm">
              {activeIdx + 1} / {images.length}
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/90 text-white rounded-full backdrop-blur-sm">
            {project.duration}
          </span>
        </div>
      </div>

      {/* Content — same as before */}
      <div className="p-6">
        <h3 className="text-2xl font-display font-semibold text-white mb-3 group-hover:text-primary-light transition-colors">
          {project.name}
        </h3>
        <p className="text-muted text-[15px] leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.slice(0, 5).map((tool, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 bg-[#25203f] text-slate-400 rounded-lg border border-border-dark hover:border-primary/30 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          target="_blank"
          className="inline-flex bg-primary-foreground px-4 py-1 rounded-md items-center gap-2 text-primary hover:text-primary-light font-medium text-sm transition-colors group/link"
        >
          Visit Live Website
          <Globe className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCardSlider;
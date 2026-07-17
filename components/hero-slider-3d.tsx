"use client";

import { useEffect, useRef, useState, useCallback, useLayoutEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// Prevents Next.js SSR hydration warning for useLayoutEffect
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// ═══════════════════════════════════════════════════════════
// SHADERS (Unchanged)
// ═══════════════════════════════════════════════════════════

const VERTEX_SHADER = /* glsl */ `
  attribute vec2 aAnimation;
  attribute vec3 aStartPosition;
  attribute vec3 aControl0;
  attribute vec3 aControl1;
  attribute vec3 aEndPosition;
  uniform float uTime;
  uniform float uPhase;
  varying vec2 vUv;
  varying float vScale;

  float easeInOutCubic(float t) {
    return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t + 2.0, 3.0) / 2.0;
  }

  vec3 cubicBezier(vec3 p0, vec3 p1, vec3 p2, vec3 p3, float t) {
    float mt = 1.0 - t;
    return mt*mt*mt*p0 + 3.0*mt*mt*t*p1 + 3.0*mt*t*t*p2 + t*t*t*p3;
  }

  void main() {
    vUv = uv;
    float tDelay    = aAnimation.x;
    float tDuration = aAnimation.y;
    float tTime     = clamp(uTime - tDelay, 0.0, tDuration);
    float tProgress = easeInOutCubic(tTime / tDuration);
    float scale     = mix(1.0 - tProgress, tProgress, uPhase);
    vec3 pos = position * scale;
    pos += cubicBezier(aStartPosition, aControl0, aControl1, aEndPosition, tProgress);
    vScale = scale;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  uniform sampler2D uMap;
  varying vec2 vUv;
  varying float vScale;
  void main() {
    vec4 tex = texture2D(uMap, vUv);
    float alpha = smoothstep(0.0, 0.25, vScale);
    gl_FragColor = vec4(tex.rgb, tex.a * alpha);
  }
`;

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

export interface SlideData {
  image: string;
  title: string;
  subtitle: string;
}

interface DecayMesh {
  mesh: THREE.Mesh;
  totalDuration: number;
  material: THREE.ShaderMaterial;
}

// ═══════════════════════════════════════════════════════════
// 3D MESH FACTORY (Unchanged)
// ═══════════════════════════════════════════════════════════

function createDecayMesh(
  meshWidth: number,
  meshHeight: number,
  segX: number,
  segY: number,
  phase: "in" | "out"
): DecayMesh {
  const base = new THREE.PlaneGeometry(meshWidth, meshHeight, segX, segY);
  const geo = base.toNonIndexed() as THREE.BufferGeometry;
  base.dispose();

  const posAttr = geo.attributes.position as THREE.BufferAttribute;
  const vertCount = posAttr.count;
  const faceCount = vertCount / 3;

  const centroids: THREE.Vector3[] = [];
  for (let i = 0; i < faceCount; i++) {
    const cx = (posAttr.getX(i * 3) + posAttr.getX(i * 3 + 1) + posAttr.getX(i * 3 + 2)) / 3;
    const cy = (posAttr.getY(i * 3) + posAttr.getY(i * 3 + 1) + posAttr.getY(i * 3 + 2)) / 3;
    const cz = (posAttr.getZ(i * 3) + posAttr.getZ(i * 3 + 1) + posAttr.getZ(i * 3 + 2)) / 3;
    centroids.push(new THREE.Vector3(cx, cy, cz));
  }

  for (let i = 0; i < faceCount; i++) {
    const c = centroids[i];
    for (let v = 0; v < 3; v++) {
      const idx = i * 3 + v;
      posAttr.setXYZ(idx, posAttr.getX(idx) - c.x, posAttr.getY(idx) - c.y, posAttr.getZ(idx) - c.z);
    }
  }
  posAttr.needsUpdate = true;

  const minDuration = 0.8, maxDuration = 1.2, maxDelayX = 0.9, maxDelayY = 0.125, stretch = 0.11;
  const totalDuration = maxDuration + maxDelayX + maxDelayY + stretch;

  const aAnim = new Float32Array(vertCount * 2);
  const aStart = new Float32Array(vertCount * 3);
  const aC0 = new Float32Array(vertCount * 3);
  const aC1 = new Float32Array(vertCount * 3);
  const aEnd = new Float32Array(vertCount * 3);

  for (let i = 0; i < faceCount; i++) {
    const c = centroids[i];
    const signY = Math.sign(c.y) || 1;
    const duration = minDuration + Math.random() * (maxDuration - minDuration);
    const delayX = ((c.x + meshWidth * 0.5) / meshWidth) * maxDelayX;
    const delayY = phase === "in" ? (Math.abs(c.y) / (meshHeight * 0.5)) * maxDelayY : (1 - Math.abs(c.y) / (meshHeight * 0.5)) * maxDelayY;
    const delay = delayX + delayY + Math.random() * stretch * duration;

    const c0x = (0.1 + Math.random() * 0.2) * 50; const c0y = signY * (0.1 + Math.random() * 0.2) * 70; const c0z = (Math.random() - 0.5) * 40;
    const c1x = (0.3 + Math.random() * 0.3) * 50; const c1y = -signY * (0.3 + Math.random() * 0.3) * 70; const c1z = (Math.random() - 0.5) * 40;

    for (let v = 0; v < 3; v++) {
      const vi = i * 3 + v;
      const b2 = vi * 2; const b3 = vi * 3;
      aAnim[b2] = delay; aAnim[b2 + 1] = duration;
      aStart[b3] = c.x; aStart[b3 + 1] = c.y; aStart[b3 + 2] = c.z;
      if (phase === "in") {
        aC0[b3] = c.x - c0x; aC0[b3 + 1] = c.y - c0y; aC0[b3 + 2] = c.z - c0z;
        aC1[b3] = c.x - c1x; aC1[b3 + 1] = c.y - c1y; aC1[b3 + 2] = c.z - c1z;
      } else {
        aC0[b3] = c.x + c0x; aC0[b3 + 1] = c.y + c0y; aC0[b3 + 2] = c.z + c0z;
        aC1[b3] = c.x + c1x; aC1[b3 + 1] = c.y + c1y; aC1[b3 + 2] = c.z + c1z;
      }
      aEnd[b3] = c.x; aEnd[b3 + 1] = c.y; aEnd[b3 + 2] = c.z;
    }
  }

  geo.setAttribute("aAnimation", new THREE.BufferAttribute(aAnim, 2));
  geo.setAttribute("aStartPosition", new THREE.BufferAttribute(aStart, 3));
  geo.setAttribute("aControl0", new THREE.BufferAttribute(aC0, 3));
  geo.setAttribute("aControl1", new THREE.BufferAttribute(aC1, 3));
  geo.setAttribute("aEndPosition", new THREE.BufferAttribute(aEnd, 3));

  const material = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: phase === "in" ? 0 : totalDuration }, uPhase: { value: phase === "in" ? 1.0 : 0.0 }, uMap: { value: new THREE.Texture() } },
    vertexShader: VERTEX_SHADER, fragmentShader: FRAGMENT_SHADER,
    side: THREE.DoubleSide, transparent: true, depthWrite: false,
  });

  return { mesh: new THREE.Mesh(geo, material), totalDuration, material };
}

// ═══════════════════════════════════════════════════════════
// SLIDE CONTENT — Pure GSAP Bouncing Text (FULLY FIXED)
// ═══════════════════════════════════════════════════════════

function SlideContent({ slide }: { slide: SlideData }) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. BLOCK PAINT: Hide instantly before the browser paints the new text
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;
    
    // Scoping to ref ensures we only hide elements inside THIS specific slide
    const ctx = gsap.context(() => {
      gsap.set(ref.current, { opacity: 0, y: 30 });
      gsap.set(".slide-badge", { opacity: 0, y: 20, scale: 0.8 });
      gsap.set(".slide-char", { opacity: 0, y: 80, scale: 0.3, rotate: -15 });
      gsap.set(".slide-word", { opacity: 0, y: 40 });
      gsap.set(".slide-cta", { opacity: 0, y: 30, scale: 0.5 });
    }, ref);

    return () => ctx.revert();
  }, [slide]);

  // 2. ANIMATE: Trigger the bounce-in safely
  useEffect(() => {
    if (!ref.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // CRITICAL FIX: Animate the wrapper back to visible first!
      tl.to(ref.current, { opacity: 1, y: 0, duration: 0.1 });

      tl.to(".slide-badge", {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6, ease: "back.out(1.7)"
      }, "-=0.05");

      tl.to(".slide-char", {
        opacity: 1, y: 0, scale: 1, rotate: 0,
        stagger: 0.025, duration: 0.7, ease: "back.out(1.7)"
      }, "-=0.3");

      tl.to(".slide-word", {
        opacity: 1, y: 0,
        stagger: 0.04, duration: 0.6
      }, "-=0.3");

      tl.to(".slide-cta", {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.15, duration: 0.8, ease: "elastic.out(1, 0.5)"
      }, "-=0.2");

    }, ref);

    return () => ctx.revert();
  }, [slide]);

  const titleChars = slide.title.split("");
  const subtitleWords = slide.subtitle.split(" ");

  return (
    <div ref={ref} className="flex flex-col items-center text-center will-change-transform">
      <div className="slide-badge mb-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        <span className="text-emerald-400 text-sm">●</span>
        <span className="text-sm font-medium tracking-widest uppercase text-white/90">
          Premium Digital Craftsmanship
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter text-white mb-6" style={{ perspective: "1000px" }}>
        {titleChars.map((char, i) => (
          <span
            key={i}
            className={`slide-char inline-block will-change-transform ${char === " " ? "w-[0.3em]" : ""}`}
            aria-hidden={char === " "}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
        {subtitleWords.map((word, i) => (
          <span key={i} className="slide-word inline-block will-change-transform mr-[0.3em]">
            {word}
          </span>
        ))}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="slide-cta pointer-events-auto">
          <Link href="/projects" className="group flex items-center justify-center gap-3 h-14 px-10 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02]">
            View My Work
            <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="slide-cta pointer-events-auto">
          <Link href="/contact-me" className="group flex items-center justify-center gap-3 h-14 px-10 border-2 border-white/70 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all">
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

interface HeroSlider3DProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  transitionDuration?: number;
  segmentsX?: number;
  segmentsY?: number;
}

export default function HeroSlider3D({ slides, autoPlayInterval = 6500, transitionDuration = 2.5, segmentsX = 80, segmentsY = 45 }: HeroSlider3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);

  const [displaySlide, setDisplaySlide] = useState(0);
  const [ready, setReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [flash, setFlash] = useState(false);

  const ctx = useRef<{ renderer: THREE.WebGLRenderer; scene: THREE.Scene; camera: THREE.PerspectiveCamera; textures: (THREE.Texture | null)[]; activeMesh: THREE.Mesh | null; raf: number; w: number; h: number; } | null>(null);
  const loadedCount = useRef(0);
  const currentSlideRef = useRef(0);
  const transitioningRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { currentSlideRef.current = displaySlide; }, [displaySlide]);
  useEffect(() => { transitioningRef.current = isTransitioning; }, [isTransitioning]);

  // ── init Three.js ────────────────────────────
  useEffect(() => {
    const container = containerRef.current!; const canvas = canvasRef.current!;
    let w = container.clientWidth; let h = container.clientHeight;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: w * h < 1_200_000, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); renderer.setSize(w, h); renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(80, w / h, 0.1, 1000); camera.position.set(0, 0, 60);
    const loader = new THREE.TextureLoader(); const textures: (THREE.Texture | null)[] = new Array(slides.length).fill(null);

    slides.forEach((slide, i) => {
      loader.load(slide.image, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace; tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter;
        textures[i] = tex; loadedCount.current++; if (loadedCount.current === slides.length) setReady(true);
      }, undefined, () => { textures[i] = new THREE.Texture(); loadedCount.current++; if (loadedCount.current === slides.length) setReady(true); });
    });

    ctx.current = { renderer, scene, camera, textures, activeMesh: null, raf: 0, w, h };
    function frame() { ctx.current!.renderer.render(ctx.current!.scene, ctx.current!.camera); ctx.current!.raf = requestAnimationFrame(frame); }
    frame();
    function onResize() { w = container.clientWidth; h = container.clientHeight; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h); ctx.current!.w = w; ctx.current!.h = h; }
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); cancelAnimationFrame(ctx.current!.raf); renderer.dispose(); textures.forEach((t) => t?.dispose()); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeshSize = useCallback(() => { const c = ctx.current!; const aspect = c.w / c.h; const visibleH = 2 * 60 * Math.tan(40 * (Math.PI / 180)); return { w: visibleH * aspect * 1.2, h: visibleH * 1.2 }; }, []);

  // ── initial assemble ─────────────────────────
  useEffect(() => {
    if (!ready || !ctx.current) return;
    const { scene, textures } = ctx.current; const { w: mw, h: mh } = getMeshSize();
    const { mesh, totalDuration, material } = createDecayMesh(mw, mh, segmentsX, segmentsY, "in");
    material.uniforms.uMap.value = textures[0]; scene.add(mesh); ctx.current.activeMesh = mesh;
    gsap.fromTo(material.uniforms.uTime, { value: 0 }, { value: totalDuration, duration: transitionDuration, ease: "power2.inOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // ── mesh transition ──────────────────────────
  const startMeshTransition = useCallback((prev: number, next: number) => {
    if (!ctx.current) return;
    const { scene, textures, activeMesh } = ctx.current; if (!activeMesh) return;
    const { w: mw, h: mh } = getMeshSize(); const isMobile = ctx.current.w < 768;
    const sx = isMobile ? Math.round(segmentsX * 0.5) : segmentsX; const sy = isMobile ? Math.round(segmentsY * 0.5) : segmentsY;
    const out = createDecayMesh(mw, mh, sx, sy, "out"); out.material.uniforms.uMap.value = textures[prev]; out.material.uniforms.uTime.value = 0; scene.add(out.mesh);
    scene.remove(activeMesh); (activeMesh.material as THREE.ShaderMaterial).dispose(); activeMesh.geometry.dispose();
    const inn = createDecayMesh(mw, mh, sx, sy, "in"); inn.material.uniforms.uMap.value = textures[next]; inn.material.uniforms.uTime.value = 0; scene.add(inn.mesh); ctx.current.activeMesh = inn.mesh;
    const tl = gsap.timeline({ onComplete: () => { scene.remove(out.mesh); out.material.dispose(); out.mesh.geometry.dispose(); } });
    tl.to(out.material.uniforms.uTime, { value: out.totalDuration, duration: transitionDuration, ease: "power2.inOut" }, 0);
    tl.to(inn.material.uniforms.uTime, { value: inn.totalDuration, duration: transitionDuration, ease: "power2.inOut" }, 0);
  }, [getMeshSize, segmentsX, segmentsY, transitionDuration]);

  // ── go to slide ──────────────────────────────
  const goToSlide = useCallback((next: number) => {
    if (transitioningRef.current || !ctx.current || !ready) return;
    transitioningRef.current = true; setIsTransitioning(true); setFlash(true);
    const prev = currentSlideRef.current;
    startMeshTransition(prev, next);

    if (textLayerRef.current) {
      gsap.to(textLayerRef.current, {
        opacity: 0, y: -30, scale: 0.95, duration: 0.4, ease: "power2.in",
        onComplete: () => {
          currentSlideRef.current = next;
          setDisplaySlide(next); 
          
          // Reset parent wrapper visibility instantly so the child can take over
          gsap.set(textLayerRef.current, { opacity: 1, y: 0, scale: 1 });

          setTimeout(() => { setIsTransitioning(false); transitioningRef.current = false; }, 1500);
        }
      });
    }

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => { goToSlide((currentSlideRef.current + 1) % slides.length); }, autoPlayInterval);
  }, [ready, startMeshTransition, autoPlayInterval, slides.length]);

  // ── auto-play ────────────────────────────────
  useEffect(() => {
    if (!ready) return;
    timerRef.current = setInterval(() => { goToSlide((currentSlideRef.current + 1) % slides.length); }, autoPlayInterval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // ── drag scrub ───────────────────────────────
  useEffect(() => {
    if (!ready || !ctx.current?.activeMesh) return;
    let dragging = false, startX = 0, tl: gsap.core.Timeline | null = null;
    function scrubStart(x: number) { if (transitioningRef.current) return; dragging = true; startX = x; const mat = ctx.current!.activeMesh!.material as THREE.ShaderMaterial; tl = gsap.timeline(); tl.to(mat.uniforms.uTime, { value: mat.uniforms.uTime.value > 1 ? 0 : 2.5, duration: 3, ease: "none" }); tl.timeScale(0); }
    function scrubMove(x: number) { if (!dragging || !tl) return; const dx = x - startX; startX = x; tl.progress(tl.progress() + dx * 0.001); }
    function scrubEnd() { if (!dragging || !tl) return; dragging = false; gsap.to(tl, { timeScale: 1, duration: 0.5 }); }
    const onMD = (e: MouseEvent) => scrubStart(e.clientX); const onMM = (e: MouseEvent) => scrubMove(e.clientX); const onMU = () => scrubEnd();
    const onTS = (e: TouchEvent) => { e.preventDefault(); scrubStart(e.touches[0].clientX); }; const onTM = (e: TouchEvent) => { e.preventDefault(); scrubMove(e.touches[0].clientX); }; const onTE = (e: TouchEvent) => { e.preventDefault(); scrubEnd(); };
    window.addEventListener("mousedown", onMD); window.addEventListener("mousemove", onMM); window.addEventListener("mouseup", onMU);
    window.addEventListener("touchstart", onTS, { passive: false }); window.addEventListener("touchmove", onTM, { passive: false }); window.addEventListener("touchend", onTE, { passive: false });
    return () => { window.removeEventListener("mousedown", onMD); window.removeEventListener("mousemove", onMM); window.removeEventListener("mouseup", onMU); window.removeEventListener("touchstart", onTS); window.removeEventListener("touchmove", onTM); window.removeEventListener("touchend", onTE); tl?.kill(); };
  }, [ready]);

  useEffect(() => { if (flash) { const t = setTimeout(() => setFlash(false), 400); return () => clearTimeout(t); } }, [flash]);

  return (
    <section ref={containerRef} className="relative w-full h-full min-h-[680px] flex items-center justify-center overflow-hidden select-none" style={{ cursor: ready ? "pointer" : "default" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/85 z-[1] pointer-events-none" />

      <AnimatePresence>
        {flash && (<motion.div key="flash" className="absolute inset-0 z-[3] bg-white pointer-events-none" initial={{ opacity: 0.2 }} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} />)}
      </AnimatePresence>
      <AnimatePresence>
        {isTransitioning && (<motion.div key="scan" className="absolute left-0 w-full h-[2px] z-[3] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.5) 50%, transparent 95%)", boxShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.15)" }} initial={{ top: "-2px" }} animate={{ top: "100%" }} exit={{ opacity: 0 }} transition={{ duration: 1.0, ease: "linear" }} />)}
      </AnimatePresence>
      <AnimatePresence>
        {isTransitioning && (<motion.div key="glitch-bands" className="absolute inset-0 z-[2] pointer-events-none overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0.3, 0.7, 0] }} transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}><div className="absolute w-full bg-white/10" style={{ top: "30%", height: "2px" }} /><div className="absolute w-full bg-white/5" style={{ top: "55%", height: "1px" }} /><div className="absolute w-full bg-white/8" style={{ top: "72%", height: "3px" }} /></motion.div>)}
      </AnimatePresence>

      {/* Text Layer controlled by GSAP */}
      <div ref={textLayerRef} className="relative z-10 max-w-5xl mx-auto px-6 pointer-events-none">
        {ready && <SlideContent key={displaySlide} slide={slides[displaySlide]} />}
      </div>

      <div className="absolute hidden bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20 pointer-events-auto">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => goToSlide(idx)} className={`relative w-12 h-1 rounded-full overflow-hidden transition-all hover:bg-white/50 ${idx === displaySlide ? "bg-white/30 scale-110" : "bg-white/15"}`} aria-label={`Go to slide ${idx + 1}`}>
            <motion.div className="absolute top-0 left-0 h-full bg-white rounded-full" initial={{ width: "0%" }} animate={{ width: idx === displaySlide ? "100%" : "0%" }} transition={{ duration: autoPlayInterval / 1000, ease: "linear" }} />
          </button>
        ))}
      </div>
    </section>
  );
}
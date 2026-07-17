"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { BiShield } from "react-icons/bi";
import { LuSwords } from "react-icons/lu";
import {
  MdAssignment,
  MdAutoStories,
  MdBugReport,
  MdCoffee,
  MdDownload,
  MdGroup,
  MdLightbulb,
  MdPsychology,
} from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Left Column: Slide in from left ---
      gsap.fromTo(".about-left-col", 
        { x: -60, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // --- Right Column: Slide in from right ---
      gsap.fromTo(".about-right-col", 
        { x: 60, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      // --- Bio Text: Fade up ---
      gsap.fromTo(".about-bio-text", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );

      // --- Skill Bars: Scale X from 0 to 1 (creates a filling effect) ---
      gsap.fromTo(".skill-bar-fill", 
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1.2, 
          ease: "power3.out",
          stagger: 0.1,
          transformOrigin: "left center",
          scrollTrigger: { trigger: ".skills-grid", start: "top 85%" }
        }
      );

      // --- Competency Cards: Staggered bounce ---
      gsap.fromTo(".comp-card", 
        { y: 40, opacity: 0, scale: 0.9 }, 
        {
          y: 0, opacity: 1, scale: 1, 
          stagger: 0.1, duration: 0.6, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".comp-grid", start: "top 85%" }
        }
      );

      // --- Radar Chart: Elastic pop-in ---
      gsap.fromTo(".radar-wrapper", 
        { scale: 0.5, opacity: 0 }, 
        {
          scale: 1, opacity: 1, 
          duration: 1, ease: "elastic.out(1, 0.5)",
          scrollTrigger: { trigger: ".radar-wrapper", start: "top 85%" }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <div ref={mainRef} className="w-full p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* ═══ LEFT COLUMN ═══ */}
        <div className="about-left-col w-full flex flex-col gap-6 will-change-transform">
          <div className="relative overflow-hidden rounded-2xl border border-surface-border bg-surface-dark p-1 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-linear(circle_at_50%_50%,rgba(59,25,230,0.4),transparent_70%)]"></div>
            <div className="relative z-10 aspect-3/4 w-full overflow-hidden rounded-xl bg-linear-to-b from-slate-800 to-slate-900">
              <Image
                width={100}
                height={100}
                alt="Professional developer headshot"
                className="h-full w-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-500"
                data-alt="Professional developer portrait"
                src="/assets/profile.png"
              />

              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/10">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>AVAILABLE</span>
              </div>

              <div className="absolute bottom-4 right-4 h-16 w-16 flex items-center justify-center rounded-full bg-primary border-4 border-surface-dark shadow-lg">
                <div className="text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">EXP</div>
                  <div className="text-2xl font-black leading-none text-white">5+</div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h1 className="text-2xl font-bold text-white mb-1">Chinonso Xavier</h1>
              <p className="text-primary font-medium text-sm mb-4">Full Stack Developer / System Architect</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Role</span>
                  <span className="text-slate-200 font-semibold">Senior Developer</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Status</span>
                  <span className="text-slate-200 font-semibold">Freelance</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Projects</span>
                  <span className="text-slate-200 font-semibold">84 / 100</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-black/40">
                  <div className="skill-bar-fill h-full w-[84%] bg-linear-to-r from-primary to-purple-500 will-change-transform"></div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link className="flex-1 text-center z-0 rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/2 cursor-pointer hover:bg-primary/90 transition-all active:scale-95" href='/contact'>
                  Contact (Hire)
                </Link>
                <button className="flex z-0 items-center justify-center rounded-lg border border-surface-border bg-surface-dark px-3 text-white hover:bg-white/5 transition-colors">
                  <MdDownload />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-dark p-5">
            <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
              <MdAssignment className="text-yellow-500" />
              Current Projects
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-2 w-2 flex-none rounded-full bg-blue-400"></div>
                <div>
                  <p className="text-sm font-medium text-slate-200">System Architecture Redesign</p>
                  <p className="text-xs text-slate-500">In Progress - 65% Complete</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-2 w-2 flex-none rounded-full bg-green-400"></div>
                <div>
                  <p className="text-sm font-medium text-slate-200">E-Commerce Platform</p>
                  <p className="text-xs text-slate-500">Completed - Awaiting Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT COLUMN ═══ */}
        <div className="about-right-col w-full flex flex-col gap-6 will-change-transform">
          <div className="rounded-2xl border border-surface-border bg-surface-dark p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary hidden sm:block">
                <MdAutoStories className="text-3xl" />
              </div>
              <div className="about-bio-text will-change-transform">
                <h2 className="text-2xl font-bold text-white mb-3">Professional Bio</h2>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Results-driven developer with over 5 years of experience delivering high-quality digital solutions. I specialize in building scalable frontend architectures and robust backend systems. Like any dedicated professional, I`m continuously expanding my expertise and mastering new technologies. Currently focused on advanced WebGL implementations and serverless infrastructure optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-surface-border bg-surface-dark p-6">
              <div className="mb-6 flex items-center justify-between border-b border-surface-border pb-4">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <LuSwords className="text-red-500" />
                  Core Skills
                </h3>
                <span className="text-xs font-mono text-slate-500">PRIMARY</span>
              </div>
              <div className="space-y-5">
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">React / Next.js</span>
                    <span className="text-primary font-mono">95%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[95%] rounded-full bg-linear-to-r from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">TypeScript</span>
                    <span className="text-primary font-mono">88%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[88%] rounded-full bg-linear-to-r from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">Node.js</span>
                    <span className="text-primary font-mono">82%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[82%] rounded-full bg-linear-to-r from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">Tailwind CSS</span>
                    <span className="text-primary font-mono">98%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[98%] rounded-full bg-linear-to-r from-red-500 to-orange-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] will-change-transform"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface-dark p-6">
              <div className="mb-6 flex items-center justify-between border-b border-surface-border pb-4">
                <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                  <BiShield className="text-blue-400" />
                  Tools &amp; Infrastructure
                </h3>
                <span className="text-xs font-mono text-slate-500">SUPPORTING</span>
              </div>
              <div className="space-y-5">
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">Docker / K8s</span>
                    <span className="text-primary font-mono">75%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[75%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">PostgreSQL</span>
                    <span className="text-primary font-mono">80%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[80%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">Git / CI/CD</span>
                    <span className="text-primary font-mono">90%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[90%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] will-change-transform"></div>
                  </div>
                </div>
                <div className="group">
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-bold text-slate-200">Figma</span>
                    <span className="text-primary font-mono">65%</span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-black/40">
                    <div className="skill-bar-fill absolute top-0 left-0 h-full w-[65%] rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] will-change-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="comp-grid md:col-span-2 rounded-2xl border border-surface-border bg-surface-dark p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MdPsychology className="text-purple-400" />
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="comp-card rounded-lg bg-surface-border/30 p-4 hover:bg-surface-border/50 transition-colors cursor-default will-change-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded bg-yellow-500/20 text-yellow-500"><MdLightbulb className="text-xl" /></div>
                    <h4 className="font-bold text-slate-100">Quick Adaptation</h4>
                  </div>
                  <p className="text-xs text-slate-400">Rapidly master new frameworks and technologies.</p>
                </div>
                <div className="comp-card rounded-lg bg-surface-border/30 p-4 hover:bg-surface-border/50 transition-colors cursor-default will-change-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded bg-green-500/20 text-green-500"><MdBugReport className="text-xl" /></div>
                    <h4 className="font-bold text-slate-100">Problem Solver</h4>
                  </div>
                  <p className="text-xs text-slate-400">Efficient debugging in production environments.</p>
                </div>
                <div className="comp-card rounded-lg bg-surface-border/30 p-4 hover:bg-surface-border/50 transition-colors cursor-default will-change-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded bg-blue-500/20 text-blue-500"><MdGroup className="text-xl" /></div>
                    <h4 className="font-bold text-slate-100">Team Leadership</h4>
                  </div>
                  <p className="text-xs text-slate-400">Foster collaboration during project planning.</p>
                </div>
                <div className="comp-card rounded-lg bg-surface-border/30 p-4 hover:bg-surface-border/50 transition-colors cursor-default will-change-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded bg-red-500/20 text-red-500"><MdCoffee className="text-xl" /></div>
                    <h4 className="font-bold text-slate-100">High Performance</h4>
                  </div>
                  <p className="text-xs text-slate-400">Consistent delivery under tight deadlines.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface-dark p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-white mb-2 w-full text-left">Skills Assessment</h3>
              <div className="radar-wrapper relative w-48 h-48 flex items-center justify-center will-change-transform">
                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                  <polygon fill="none" points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#64748b" strokeWidth="0.5"></polygon>
                  <polygon fill="none" points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="#64748b" strokeWidth="0.5"></polygon>
                  <polygon fill="none" points="50,35 65,42.5 65,57.5 50,65 35,57.5 35,42.5" stroke="#64748b" strokeWidth="0.5"></polygon>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="5"></line>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="95" y1="50" y2="27.5"></line>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="95" y1="50" y2="72.5"></line>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="50" y1="50" y2="95"></line>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="5" y1="50" y2="72.5"></line>
                  <line stroke="#64748b" strokeWidth="0.5" x1="50" x2="5" y1="50" y2="27.5"></line>
                </svg>

                <svg className="absolute w-full h-full drop-shadow-[0_0_10px_rgba(59,25,230,0.5)]" viewBox="0 0 100 100">
                  <polygon className="animate-[pulse_3s_infinite]" fill="rgba(59, 25, 230, 0.4)" points="50,10 90,30 85,70 50,85 15,65 20,30" stroke="#3b19e6" strokeWidth="2"></polygon>
                </svg>

                <div className="absolute top-0 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">TECH</div>
                <div className="absolute bottom-0 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">LEAD</div>
                <div className="absolute top-12 left-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">ARCH</div>
                <div className="absolute top-12 right-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">PERF</div>
                <div className="absolute top-[80%] left-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">COMM</div>
                <div className="absolute top-[80%] right-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-surface-dark px-1">INNOV</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </Layout>
  );
};

export default Page;
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import {
  BsArrowRight,
  BsCheckCircle,
  BsGraphUp,
  BsTrophy,
} from "react-icons/bs";
import { allProjects, categories } from "@/lib/project-data";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const mainRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  // ── Initial Scroll Animations ─────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Header Section ---
      gsap.fromTo(".proj-header-el", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      );

      // --- Impact Stats (Heavy Bounce) ---
      gsap.fromTo(".proj-stat", 
        { y: 60, opacity: 0, scale: 0.7 }, 
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".proj-stats-grid", start: "top 85%" }
        }
      );

      // --- Testimonial (Slide in from left) ---
      gsap.fromTo(".proj-testimonial", 
        { x: -50, opacity: 0 }, 
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".proj-testimonial", start: "top 85%" }
        }
      );

      // --- Bottom CTA (Elastic Pop) ---
      gsap.fromTo(".proj-bottom-cta", 
        { y: 40, opacity: 0, scale: 0.9 }, 
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ".proj-bottom-cta", start: "top 90%" }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  // ── Filter Change Animation ──────────────────
  // This triggers every time a user clicks a filter, re-animating the new cards smoothly
  useEffect(() => {
    if (!mainRef.current) return;
    
    const cards = mainRef.current.querySelectorAll('.proj-card');
    if (cards.length > 0) {
      gsap.fromTo(cards, 
        { y: 30, opacity: 0, scale: 0.95 }, 
        { 
          y: 0, opacity: 1, scale: 1, 
          stagger: 0.05, duration: 0.5, ease: "power3.out" 
        }
      );
    } else {
      // Animate empty state if no projects match
      const emptyState = mainRef.current.querySelector('.proj-empty');
      if (emptyState) {
        gsap.fromTo(emptyState, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      }
    }
  }, [activeFilter]);

  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div ref={mainRef} className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border-dark pb-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="proj-header-el flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-white">business_center</span>
              <span className="text-white font-display font-bold text-sm tracking-widest uppercase">
                Client Success Stories
              </span>
            </div>
            <h1 className="proj-header-el text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
              Delivering Business
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light via-white to-anime-pink">
                Solutions That Drive Growth
              </span>
            </h1>
            <p className="proj-header-el text-muted text-lg mt-2 max-w-lg">
              Partnering with businesses to transform their digital presence and
              achieve measurable results. Every project is an opportunity to
              create lasting business value.
            </p>
          </div>
          <div className="proj-header-el flex gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 h-10 px-4 rounded-lg border border-border-dark bg-[#1e1a32] hover:bg-[#25213d] text-white text-sm font-medium transition-colors"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Business Impact Stats */}
        <div className="proj-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="proj-stat bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors will-change-transform">
            <BsGraphUp className="text-3xl text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">234%</div>
            <div className="text-sm text-muted">Average ROI</div>
          </div>
          <div className="proj-stat bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors will-change-transform">
            <BsTrophy className="text-3xl text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">16+</div>
            <div className="text-sm text-muted">Successful Projects</div>
          </div>
          <div className="proj-stat bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors will-change-transform">
            <BsCheckCircle className="text-3xl text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-muted">Client Satisfaction</div>
          </div>
          <div className="proj-stat bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors will-change-transform">
            <span className="material-symbols-outlined text-3xl text-purple-400 mx-auto mb-2">schedule</span>
            <div className="text-2xl font-bold text-white">30%</div>
            <div className="text-sm text-muted">Faster Delivery</div>
          </div>
        </div>

        {/* Functional Category Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-muted text-sm font-medium mr-2">Industry Focus:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group flex items-center gap-2 h-9 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(59,25,230,0.4)]"
                  : "bg-[#1e1a32] border border-border-dark text-slate-400 hover:text-white hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="proj-card group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 cursor-pointer will-change-transform"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-[#1e1a32] via-[#1e1a32]/40 to-transparent opacity-80 z-10"></div>
                <div className="h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Image
                    className="w-full object-cover h-full"
                    alt={project.name}
                    src={project.image[0]}
                    width={600}
                    height={400}
                  />
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-2 py-1 rounded text-xs font-bold bg-primary text-white border border-primary/30 backdrop-blur-sm shadow-[0_0_10px_rgba(59,25,230,0.3)]">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative flex flex-col grow p-5 gap-3 z-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.link && project.link !== "#" && (
                    <a
                      className="text-muted hover:text-white transition-colors"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-500">{project.role}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {project.duration}
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-[10px] font-medium bg-[#25203f] text-slate-400 border border-border-dark group-hover:border-primary/20 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-2 py-1 rounded text-[10px] font-medium bg-[#25203f] text-slate-500 border border-border-dark">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Empty State for Filters */}
          {filteredProjects.length === 0 && (
            <div className="proj-empty col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center will-change-transform">
              <span className="material-symbols-outlined text-5xl text-slate-700 mb-4 block">folder_off</span>
              <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-muted">There are no projects in this category yet.</p>
            </div>
          )}
        </div>

        {/* Client Testimonial Section */}
        <div className="proj-testimonial will-change-transform">
          <div className="bg-linear-to-r from-[#1e1a32] to-[#25213d] rounded-xl p-8 border border-border-dark mt-8 hover:border-primary/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-anime-pink flex items-center justify-center shadow-[0_0_20px_rgba(59,25,230,0.3)]">
                  <span className="text-2xl font-bold text-white">MK</span>
                </div>
              </div>
              <div className="grow">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-white font-bold">Maxwell Kelechi</h4>
                  <span className="text-xs text-muted bg-primary/20 px-2 py-1 rounded">CEO, RetailCorp</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted italic">
                  Working with this him transformed our business. Our online
                  revenue tripled within 6 months, and the ROI exceeded our
                  expectations. He dosent`t just build websites; he build
                  business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-bottom-cta flex justify-center mt-8 will-change-transform">
          <Link
            href="/contact"
            className="flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary bg-transparent hover:bg-primary/10 text-primary hover:text-primary-light text-base font-bold font-display tracking-wider transition-all uppercase"
          >
            Start Your Project
            <BsArrowRight className="text-xl" />
          </Link>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
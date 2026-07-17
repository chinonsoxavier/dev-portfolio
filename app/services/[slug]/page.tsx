"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { servicesData } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const mainRef = useRef<HTMLDivElement>(null);

  if (!service) {
    notFound();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Hero Animations ---
      gsap.fromTo(".slug-hero-el", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
      );

      // --- Feature Rows (Slide in from left) ---
      gsap.fromTo(".feat-row", 
        { x: -50, opacity: 0 }, 
        {
          x: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".features-grid", start: "top 80%" }
        }
      );

      // --- Process Steps (Slide up with bounce) ---
      gsap.fromTo(".proc-step", 
        { y: 40, opacity: 0, scale: 0.95 }, 
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: "back.out(1.2)",
          scrollTrigger: { trigger: ".process-grid", start: "top 80%" }
        }
      );

      // --- Sidebar Cards (Slide in from right) ---
      gsap.fromTo(".sidebar-card", 
        { x: 60, opacity: 0 }, 
        {
          x: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".sidebar-wrapper", start: "top 80%" }
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, [slug]); // Re-run if slug changes

  if (!service) return null; // Fallback for initial render if needed

  return (
    <Layout className="flex-1 bg-[#0a0a12] flex flex-col items-center w-full">
      <div ref={mainRef} className="w-full flex flex-col">
        {/* Focused Hero */}
        <section className="relative flex flex-col items-center text-center py-20 md:py-24 overflow-hidden border-b border-border-dark">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent-cyan/5"></div>
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="slug-hero-el inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10 mb-6">
              <span className="text-sm">{service.stats[0]?.icon}</span>
              <span className="text-accent-cyan font-semibold text-sm tracking-wide uppercase">{service.badge}</span>
            </div>
            <h1 className="slug-hero-el text-4xl md:text-6xl font-display font-black leading-tight text-white mb-6">{service.heroHeadline}</h1>
            <p className="slug-hero-el text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto mb-8">{service.heroSubtext}</p>
            <div className="slug-hero-el">
              <Link href="/contact-me" className="group relative inline-flex items-center gap-3 h-14 px-8 rounded-xl bg-primary text-white text-base font-bold hover:shadow-[0_0_30px_rgba(59,25,230,0.6)] transition-all duration-300">
                Get a Free Quote <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content: Sidebar Layout */}
        <section className="max-w-7xl mx-auto w-full px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Deep Dive Content */}
            <div className="w-full lg:w-2/3">
              {/* Features Deep Dive */}
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-white mb-8 pb-4 border-b border-border-dark">Core Capabilities</h2>
                <div className="features-grid flex flex-col gap-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feat-row flex gap-5 group will-change-transform">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-border-dark flex items-center justify-center text-2xl group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400 mb-4 leading-relaxed">{feature.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 bg-white/[0.02] rounded-lg px-3 py-2">
                              <BsCheckCircle className="text-green-400 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Deep Dive */}
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-8 pb-4 border-b border-border-dark">The Process</h2>
                <div className="process-grid flex flex-col gap-6 relative">
                  <div className="absolute left-6 top-5 bottom-5 w-px bg-border-dark hidden sm:block"></div>
                  {service.process.map((step, index) => (
                    <div key={index} className="proc-step flex gap-5 relative will-change-transform">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1e1a32] border-2 border-border-dark flex items-center justify-center text-primary font-bold z-10">
                        {step.step}
                      </div>
                      <div className="bg-[#1e1a32] rounded-xl p-5 border border-border-dark flex-1 hover:border-primary/30 transition-colors">
                        <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar */}
            <div className="sidebar-wrapper w-full lg:w-1/3">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                {/* Quick Stats Card */}
                <div className="sidebar-card bg-[#1e1a32] rounded-2xl p-6 border border-border-dark will-change-transform">
                  <h3 className="text-lg font-bold text-white mb-4">Impact Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.stats.map((stat, index) => (
                      <div key={index} className="bg-black/20 rounded-xl p-4 text-center border border-white/5">
                        <div className="text-xl mb-1">{stat.icon}</div>
                        <div className="text-xl font-bold text-white">{stat.metric}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="sidebar-card bg-linear-to-br from-primary/20 to-transparent rounded-2xl p-6 border border-primary/30 will-change-transform">
                  <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
                  <p className="text-slate-400 text-sm mb-6">Let&apos;s discuss how {service.title.toLowerCase()} can transform your business.</p>
                  <Link href="/contact-me" className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,25,230,0.3)]">
                    Schedule Call <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
}
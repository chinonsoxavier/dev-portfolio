"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { allProjects } from "@/lib/project-data";
import ProjectCardSlider from "@/components/shared/project_card_slider";
import HeroSlider3D, { type SlideData } from "@/components/hero-slider-3d";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const heroSlides: SlideData[] = [
  { image: "/assets/hero-slider/peterweideman-bedroom-5664223_1920.jpg", title: "Quiet and Deep Stillness", subtitle: "We craft premium digital experiences that bring harmony, elegance, and clarity to your brand." },
  { image: "/assets/hero-slider/thanh_nguyen_slq-house-exterior-7193745_1920.jpg", title: "Real Estate & Hospitality", subtitle: "Stunning websites, booking systems, and digital platforms for luxury villas, hotels, and property developers." },
  { image: "/assets/hero-slider/geralt-businessman-3213659_1920.jpg", title: "Premium Digital Solutions", subtitle: "From custom business systems to immersive brand websites — built with precision and sophistication." },
];

const clientResults = [
  { metric: "234%", label: "Average ROI", icon: "📈" },
  { metric: "50+", label: "Projects Delivered", icon: "🎯" },
  { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
  { metric: "30%", label: "Faster Delivery", icon: "⚡" },
];

const services = [
  { title: "Digital Strategy", description: "Comprehensive roadmaps for digital transformation that align technology with business goals.", icon: "🚀", benefits: ["Revenue Growth", "Market Expansion", "Competitive Advantage"] },
  { title: "E-Commerce Solutions", description: "End-to-end online retail platforms that drive sales and enhance customer experience.", icon: "🛒", benefits: ["180% Revenue Increase", "50K+ Users", "Global Reach"] },
  { title: "Business Intelligence", description: "Data-driven insights and analytics that empower informed decision-making.", icon: "📊", benefits: ["60% Faster Decisions", "Real-time Analytics", "Predictive Insights"] },
  { title: "Process Automation", description: "Streamline operations and reduce costs through intelligent workflow automation.", icon: "⚙️", benefits: ["40% Cost Reduction", "60% Time Savings", "Error Elimination"] },
];

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- Section Headers Animation ---
      gsap.utils.toArray<HTMLElement>('.animate-section-header').forEach((header) => {
        gsap.fromTo(header.children, 
          { y: 50, opacity: 0 }, 
          {
            y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: header, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // --- Results Cards (Heavy Bounce) ---
      gsap.fromTo('.animate-result-card', 
        { y: 80, opacity: 0, scale: 0.7 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.15, duration: 0.8, ease: "back.out(1.7)",
          scrollTrigger: { trigger: '.results-grid', start: "top 85%" }
        }
      );

      // --- Service Cards (Lift up effect) ---
      gsap.fromTo('.animate-service-card', 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.15, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: '.services-grid', start: "top 85%" }
        }
      );

      // --- Projects Section (Subtle scale bounce) ---
      gsap.fromTo('.animate-project-card', 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.2, duration: 0.8, ease: "back.out(1.4)",
          scrollTrigger: { trigger: '.projects-grid', start: "top 85%" }
        }
      );

      // --- CTA Section (Elastic pop) ---
      gsap.fromTo('.animate-cta-inner', 
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 1.2, ease: "elastic.out(1, 0.5)",
          scrollTrigger: { trigger: '.animate-cta', start: "top 85%" }
        }
      );

    }, mainRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div ref={mainRef} className="w-full flex flex-col gap-10">
        
        <HeroSlider3D slides={heroSlides} autoPlayInterval={6500} transitionDuration={2.5} segmentsX={80} segmentsY={45} />

        {/* ═══ Results ═══ */}
        <section className="md:py-16 py-10 max-width">
          <div className="animate-section-header text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Proven Business Results</h2>
            <p className="text-muted text-lg">We don&apos;t just build solutions; we deliver measurable business value</p>
          </div>
          <div className="results-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clientResults.map((result, index) => (
              <div key={index} className="animate-result-card bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark">
                <div className="text-4xl mb-3">{result.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-sm text-muted">{result.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Services ═══ */}
        <section className="md:py-16 py-10 max-width">
          <div className="animate-section-header text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Business Solutions</h2>
            <p className="text-muted text-lg">Comprehensive services designed to drive your business forward</p>
          </div>
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-service-card bg-[#1e1a32] rounded-xl p-8 border border-border-dark hover:border-primary/50 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <BsCheckCircle className="text-green-400" />
                      <span className="text-white text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Recent Projects ═══ */}
        <section className="md:py-20 py-12 max-w-7xl mx-auto px-6">
          <div className="animate-section-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">Recent Success Stories</h2>
              <p className="text-muted text-lg max-w-md">Real projects. Real results. See how we&apos;ve helped businesses grow.</p>
            </div>
            <Link href="/projects" className="flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group">
              View All Projects
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProjects.slice(0, 3).map((project) => (
              <div key={project.name} className="animate-project-card">
                <ProjectCardSlider project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="animate-cta md:py-16 py-10 max-width">
          <div className="animate-cta-inner bg-linear-to-r from-primary/20 to-cyan-500/20 rounded-xl p-12 text-center border border-primary/30">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">Join 20+ businesses that have transformed their operations and achieved remarkable growth with our strategic solutions.</p>
            <Link href="/contact-me" className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(59,25,230,0.4)]">
              Start Your Transformation
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}
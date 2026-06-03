// app/projects/page.tsx (or wherever your projects page lives)
"use client";

import {useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import {
  BsArrowRight,
  BsCheckCircle,
  BsGraphUp,
  BsTrophy,
} from "react-icons/bs";
import { allProjects, categories } from "@/lib/project-data";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  // const [slide, setSlide] = useState(1);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlide((prev) => (prev === 3 ? 1 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border-dark pb-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-white">
                business_center
              </span>
              <span className="text-white font-display font-bold text-sm tracking-widest uppercase">
                Client Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
              Delivering Business
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light via-white to-anime-pink">
                Solutions That Drive Growth
              </span>
            </h1>
            <p className="text-muted text-lg mt-2 max-w-lg">
              Partnering with businesses to transform their digital presence and
              achieve measurable results. Every project is an opportunity to
              create lasting business value.
            </p>
          </div>
          <div className="flex gap-3">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors">
            <BsGraphUp className="text-3xl text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">234%</div>
            <div className="text-sm text-muted">Average ROI</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors">
            <BsTrophy className="text-3xl text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">16+</div>
            <div className="text-sm text-muted">Successful Projects</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors">
            <BsCheckCircle className="text-3xl text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-muted">Client Satisfaction</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark hover:border-primary/30 transition-colors">
            <span className="material-symbols-outlined text-3xl text-purple-400 mx-auto mb-2">
              schedule
            </span>
            <div className="text-2xl font-bold text-white">30%</div>
            <div className="text-sm text-muted">Faster Delivery</div>
          </div>
        </div>

        {/* Functional Category Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-muted text-sm font-medium mr-2">
            Industry Focus:
          </span>
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
              className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 cursor-pointer"
            >
              {/* Scanning Beam Effect */}
              {/* <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-primary/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
              </div> */}

              {/* Top Edge Glow */}
              {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" /> */}

              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-[#1e1a32] via-[#1e1a32]/40 to-transparent opacity-80 z-10"></div>

                {/* Image Container - Zooms on hover */}
                <div className="h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out">
                  <Image
                    className="w-full object-cover h-full"
                    alt={project.name}
                    src={project.image[0]} // Uses the first image in the array
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
                      onClick={(e) => e.stopPropagation()} // Prevent card click if needed later
                    >
                      <span className="material-symbols-outlined">
                        open_in_new
                      </span>
                    </a>
                  )}
                </div>

                {/* Category & Role Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {project.role}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    {project.duration}
                  </span>
                </div>

                {/* Tech Stack */}
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
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center">
              <span className="material-symbols-outlined text-5xl text-slate-700 mb-4 block">
                folder_off
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-muted">
                There are no projects in this category yet.
              </p>
            </div>
          )}
        </div>

        {/* Client Testimonial Section */}

        <div>
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
                  <span className="text-xs text-muted bg-primary/20 px-2 py-1 rounded">
                    CEO, RetailCorp
                  </span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
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

        <div className="flex justify-center mt-8">
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

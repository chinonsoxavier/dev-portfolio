"use client";
import { projects } from "@/lib/project-data";
import Image from "next/image";

function ProjectCardSlider({ project }: { project: (typeof projects)[0] }) {
  return (
    <article
      key={project.name}
      className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/40 cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#1e1a32] via-[#1e1a32]/40 to-transparent opacity-80 z-10"></div>

        {/* Image Container - Zooms on hover */}
        <div className="h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out">
          <Image
            className="w-full object-cover h-full"
            alt={'project image' + project.name}
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
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          )}
        </div>

        {/* Category & Role Badge */}
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
  );
}

export default ProjectCardSlider;

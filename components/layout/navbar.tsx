// components/layout/navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  BsList,
  BsChevronDown,
  BsGlobe2,
  BsCart3,
  BsGearWideConnected,
  BsRobot,
  BsBuilding,
  BsTruck,
} from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "@/app/store";

const services = [
  {
    href: "/services/web-development",
    icon: BsGlobe2,
    title: "Business Websites",
    description: "Modern websites designed to grow your brand online",
  },
  {
    href: "/services/ecommerce",
    icon: BsCart3,
    title: "E-Commerce Solutions",
    description: "Custom online stores built for sales and scalability",
  },
  {
    href: "/services/custom-systems",
    icon: BsGearWideConnected,
    title: "Custom Business Systems",
    description: "Dashboards, admin panels, and workflow automation",
  },
  {
    href: "/services/ai-automation",
    icon: BsRobot,
    title: "AI Automation",
    description: "Intelligent tools that automate business operations",
  },
  {
    href: "/services/real-estate-solutions",
    icon: BsBuilding,
    title: "Real Estate Digital Solutions",
    description: "Web platforms and lead systems for property businesses",
  },
  {
    href: "/services/admin-systems",
    icon: BsTruck,
    title: "Logistics & Tracking",
    description: "Smart systems for delivery and fleet operations",
  },
];

export default function Navbar() {
  const { toggleSideMenuOpen } = useStore();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPath, setDropdownPath] = useState(pathname);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDropdown = dropdownOpen && dropdownPath === pathname;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownPath(pathname);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
      setHoveredIndex(null);
    }, 150);
  };

  const isActive = (path: string) => {
    if (typeof window === "undefined") return false;
    return pathname === path;
  };

  const isServiceActive = services.some((s) => pathname === s.href);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-dark/95 backdrop-blur-md shadow-lg border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      <div className="max-width h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-anime-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">CN</span>
            </div>
            <span className="text-xl font-display font-bold text-white">
              Chinonso Xavier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isServiceActive
                    ? "text-primary"
                    : "text-muted hover:text-white"
                }`}
              >
                Services
                <BsChevronDown
                  className={`text-[10px] transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                ref={dropdownRef}
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  showDropdown
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Pointer arrow */}
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-[#141428] border-l border-t border-border-dark rotate-45 -mb-1.5 z-10" />
                </div>

                {/* Dropdown panel */}
                <div className="w-105 bg-[#141428] border border-border-dark rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Header */}
                  <div className="px-5 pt-5 pb-3 border-b border-border-dark/50">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                      What I Build
                    </p>
                    <p className="text-xs text-muted mt-1">
                      End-to-end solutions tailored to your business goals
                    </p>
                  </div>

                  {/* Service items */}
                  <div className="py-2">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isHovered = hoveredIndex === index;
                      const isActiveService = pathname === service.href;

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`relative flex items-start gap-4 px-5 py-3.5 transition-colors duration-150 group ${
                            isActiveService
                              ? "bg-primary/10"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          {/* Left accent bar on hover */}
                          <div
                            className={`absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full transition-all duration-200 ${
                              isHovered || isActiveService
                                ? "bg-primary opacity-100"
                                : "bg-transparent opacity-0"
                            }`}
                          />

                          {/* Icon */}
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                              isHovered || isActiveService
                                ? "bg-primary/15 text-primary"
                                : "bg-white/[0.04] text-muted"
                            }`}
                          >
                            <Icon className="text-lg" />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-sm font-semibold transition-colors duration-150 ${
                                isHovered || isActiveService
                                  ? "text-white"
                                  : "text-white/80"
                              } flex items-center gap-2`}
                            >
                              {service.title}
                              <HiOutlineArrowRight
                                className={`text-xs transition-all duration-200 ${
                                  isHovered
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-1"
                                }`}
                              />
                            </div>
                            <div className="text-xs text-muted mt-0.5 leading-relaxed">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3.5 border-t border-border-dark/50 bg-white/[0.01]">
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/footer"
                    >
                      View All Services
                      <HiOutlineArrowRight className="text-sm group-hover/footer:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projects")
                  ? "text-primary"
                  : "text-muted hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about-me"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-muted hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-muted hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={toggleSideMenuOpen}
              className="md:hidden p-2 rounded-lg hover:bg-surface-darker transition-colors group"
              aria-label="Open menu"
            >
              <BsList className="text-xl text-muted group-hover:text-white transition-colors" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 h-10 px-6 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,25,230,0.3)]"
            >
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

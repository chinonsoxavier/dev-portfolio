"use client";
// components/layout/sidemenu.tsx
import { useEffect } from "react";
// import useStore from "@/app/store";
import Link from "next/link";
import {
  BsHouse,
  BsBriefcase,
  BsGrid3X3Gap,
  BsEnvelope,
  BsFileText,
  BsXLg,
  BsChevronRight,
} from "react-icons/bs";
import useStore from "@/app/store";

interface MenuItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
    icon: BsHouse,
    description: "Dashboard overview",
  },
  {
    title: "Services",
    href: "/services",
    icon: BsGrid3X3Gap,
    description: "Business solutions",
    badge: "New",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: BsBriefcase,
    description: "Success stories",
  },
  {
    title: "About",
    href: "/about",
    icon: BsBriefcase,
    description: "Our company",
  },
  {
    title: "Contact",
    href: "/contact",
    icon: BsEnvelope,
    description: "Get in touch",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: BsFileText,
    description: "Latest insights",
  },
];

export default function Sidemenu() {
  const { sideMenuOpen, closeSideMenu } = useStore();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (sideMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sideMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sideMenuOpen) {
        closeSideMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [sideMenuOpen, closeSideMenu]);

  if (!sideMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={closeSideMenu}
        style={{
          animation: sideMenuOpen
            ? "fadeIn 0.3s ease-out"
            : "fadeOut 0.3s ease-out",
        }}
      />

      {/* Sidemenu */}
      <div
        className="fixed top-0 left-0 h-full w-80 bg-surface-dark z-50 shadow-2xl border-r border-border-dark"
        style={{
          animation: sideMenuOpen
            ? "slideIn 0.4s ease-out"
            : "slideOut 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-dark">
          <div>
            <h2 className="text-2xl font-display font-bold text-white">Menu</h2>
            <p className="text-sm text-muted mt-1">Navigate your business</p>
          </div>
          <button
            onClick={closeSideMenu}
            className="p-2 rounded-lg hover:bg-surface-darker transition-colors group"
            aria-label="Close menu"
          >
            <BsXLg className="text-xl text-muted group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2 overflow-y-auto h-full pb-24">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSideMenu}
                className="group relative flex items-center gap-4 p-4 rounded-xl hover:bg-surface-darker transition-all duration-300 overflow-hidden"
                style={{
                  animation: `unstack 0.5s ease-out ${index * 0.1}s both`,
                  transform: "translateX(-100%)",
                  opacity: 0,
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative z-10">
                  <Icon className="text-xl text-primary-light group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-medium group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-primary text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-0.5">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <BsChevronRight className="text-lg text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border-dark bg-surface-dark/95 backdrop-blur-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted">Available for consultation</span>
            </div>
            <Link
              href="/contact"
              onClick={closeSideMenu}
              className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-anime-cyan text-white text-center font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        @keyframes unstack {
          0% {
            transform: translateX(-100%) translateY(-20px);
            opacity: 0;
          }
          60% {
            transform: translateX(10px) translateY(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

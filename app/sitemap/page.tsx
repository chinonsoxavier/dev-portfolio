// app/sitemap/page.tsx
import { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import Link from "next/link";
import {
  BsHouse,
  BsBriefcase,
  BsEnvelope,
  BsFileText,
  BsGrid3X3Gap,
} from "react-icons/bs";

export const metadata: Metadata = {
  title: "Sitemap | Chinonso Business Solutions",
  description:
    "Complete sitemap of our business consulting website including all pages and sections.",
};

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      items: [
        {
          title: "Home",
          href: "/",
          icon: BsHouse,
          description: "Business consulting overview",
        },
        {
          title: "About",
          href: "/about",
          icon: BsBriefcase,
          description: "Our company and team",
        },
        {
          title: "Services",
          href: "/services",
          icon: BsGrid3X3Gap,
          description: "Business solutions",
        },
        {
          title: "Projects",
          href: "/projects",
          icon: BsBriefcase,
          description: "Success stories",
        },
        {
          title: "Contact",
          href: "/contact",
          icon: BsEnvelope,
          description: "Get in touch",
        },
      ],
    },
    {
      title: "Legal Pages",
      items: [
        {
          title: "Privacy Policy",
          href: "/privacy",
          icon: BsFileText,
          description: "Data protection policy",
        },
        {
          title: "Terms of Service",
          href: "/terms",
          icon: BsFileText,
          description: "Service terms and conditions",
        },
      ],
    },
    {
      title: "Services",
      items: [
        {
          title: "Digital Strategy",
          href: "/services/digital-strategy",
          icon: BsGrid3X3Gap,
          description: "Strategic digital planning",
        },
        {
          title: "E-Commerce Solutions",
          href: "/services/ecommerce",
          icon: BsGrid3X3Gap,
          description: "Online retail platforms",
        },
        {
          title: "Business Intelligence",
          href: "/services/business-intelligence",
          icon: BsGrid3X3Gap,
          description: "Data analytics and insights",
        },
        {
          title: "Process Automation",
          href: "/services/automation",
          icon: BsGrid3X3Gap,
          description: "Workflow optimization",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "/blog",
          icon: BsFileText,
          description: "Business insights and articles",
        },
        {
          title: "Case Studies",
          href: "/case-studies",
          icon: BsBriefcase,
          description: "Detailed project analyses",
        },
        {
          title: "FAQ",
          href: "/faq",
          icon: BsFileText,
          description: "Frequently asked questions",
        },
      ],
    },
  ];

  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Sitemap
            </h1>
            <p className="text-muted text-lg">
              Navigate through all pages of our business consulting website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-[#1e1a32] rounded-xl p-6 border border-border-dark"
              >
                <h2 className="text-xl font-display font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-surface-dark transition-colors"
                      >
                        <Icon className="text-primary-light mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-white font-medium group-hover:text-primary-light transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-linear-to-r from-primary/20 to-anime-cyan/20 rounded-xl p-8 border border-primary/30">
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Can`t Find What You`re Looking For?
            </h2>
            <p className="text-muted mb-6">
              Our team is here to help you find the information you need or
              connect you with the right business consulting expert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all"
              >
                <span>Contact Support</span>
                <BsEnvelope className="text-xl" />
              </Link>
              <Link
                href="/"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-border-dark bg-transparent text-white text-base font-bold hover:border-primary hover:bg-primary/10 transition-all"
              >
                <span>Return to Home</span>
                <BsHouse className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark">
              <div className="text-3xl font-bold text-primary-light mb-2">
                20+
              </div>
              <div className="text-sm text-muted">Total Pages</div>
            </div>
            <div className="bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark">
              <div className="text-3xl font-bold text-anime-cyan mb-2">4</div>
              <div className="text-sm text-muted">Main Services</div>
            </div>
            <div className="bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark">
              <div className="text-3xl font-bold text-anime-pink mb-2">50+</div>
              <div className="text-sm text-muted">Success Stories</div>
            </div>
            <div className="bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-muted">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

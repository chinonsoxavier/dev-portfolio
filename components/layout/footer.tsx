// const Footer = () => {
//   return (
//     <footer className="border-t border-surface-border bg-background-dark py-8 mt-auto">
//       <div className="mx-auto max-w-7xl px-4 text-center text-slate-500">
//         <p className="text-sm">© 2023 DevPortfolio. All attributes maxed out.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer

// components/layout/footer.tsx
import Link from "next/link";
import React from "react";
import { BiMapPin } from "react-icons/bi";
import {
  BsLinkedin,
  BsTwitter,
  BsEnvelope,
  BsPhone,
  BsWhatsapp,
  // BsMapPin,
} from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const services = [
    {
      href: "/services/web-development",
      title: "Business Websites",
    },
    {
      href: "/services/ecommerce",
      title: "E-Commerce Solutions",
    },
    {
      href: "/services/custom-systems",
      title: "Custom Business Systems",
    },
    {
      href: "/services/ai-automation",
      title: "AI Automation",
    },
    {
      href: "/services/real-estate-solutions",
      title: "Real Estate Digital Solutions",
    },
    {
      href: "/services/admin-systems",
      title: "Logistics & Tracking",
    },
  ];
  return (
    <footer className="bg-linear-to-b from-surface-dark to-surface-darker border-t border-border-dark mt-auto">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              {/* Bytenux Studio */}
               Chinonso Xavier
            </h3>
            <p className="text-muted mb-6 max-w-md">
              Your strategic partner in digital transformation. We deliver
              innovative solutions that drive business growth and create lasting
              competitive advantages.
            </p>
            <div className="flex gap-4">
              <a
                href=""
                className="w-10 h-10 rounded-lg bg-[#1e1a32] border border-border-dark flex items-center justify-center text-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
              >
                <BsLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1a32] border border-border-dark flex items-center justify-center text-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
              >
                <BsTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1e1a32] border border-border-dark flex items-center justify-center text-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
              >
                <BsEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Business Solutions</h4>
            <div className="space-y-3">
              {services.map((data, index) => (
                <Link href={data.href} key={index} >
                  <p className="text-muted my-1 hover:text-white text-sm transition-colors">
                    {data.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <BsPhone className="text-muted" />
                {/* <span className="text-muted text-sm">+234 705-177-1183</span> */}
                <span className="text-muted text-sm">+234 707-577-1115</span>
              </div>

              <div className="flex items-center gap-3">
                <BsEnvelope className="text-muted" />
                <span className="text-muted text-sm">
                  chinonsoxavier26@gmail.com
                </span>
                {/* <span className="text-muted text-sm">bytenuxstudio@gmail.com</span> */}
              </div>
              <div className="flex items-center gap-3">
                <BsWhatsapp className="text-muted" />
                <span className="text-muted text-sm">+234 705-177-1183</span>
                {/* <span className="text-muted text-sm">+234 705-177-1183</span> */}
              </div>
            </div>
            <button className="mt-4 w-full h-10 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className="border-t border-border-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear} Chinonso Xavier All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policies"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-services"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-muted hover:text-white text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

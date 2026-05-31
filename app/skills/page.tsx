// skills/page.tsx
"use client";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import {
  //   BsTrendingUp,
  BsShieldCheck,
  BsLightning,
  BsGraphUp,
  BsPeople,
  BsClock,
} from "react-icons/bs";

const Page = () => {
  const capabilities = [
    {
      icon: <BiTrendingUp className="text-3xl" />,
      title: "Business Growth Strategy",
      description:
        "Develop comprehensive digital strategies that align with your business objectives and drive measurable growth.",
      metrics: [
        "Average ROI: 234%",
        "Revenue Growth: 45-180%",
        "Market Expansion: 3x",
      ],
      color: "text-green-400",
    },
    {
      icon: <BsShieldCheck className="text-3xl" />,
      title: "Risk Management & Compliance",
      description:
        "Ensure your digital assets meet industry standards and regulatory requirements with robust security frameworks.",
      metrics: [
        "99.9% Uptime",
        "Zero Breaches",
        "Compliance: HIPAA, PCI, GDPR",
      ],
      color: "text-blue-400",
    },
    {
      icon: <BsLightning className="text-3xl" />,
      title: "Process Optimization",
      description:
        "Streamline operations and eliminate inefficiencies through intelligent automation and workflow redesign.",
      metrics: [
        "Time Savings: 30-60%",
        "Cost Reduction: 25-40%",
        "Efficiency Gain: 45%",
      ],
      color: "text-yellow-400",
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Data-Driven Insights",
      description:
        "Transform raw data into actionable business intelligence that informs strategic decision-making.",
      metrics: [
        "Decision Speed: 60% Faster",
        "Accuracy: 95%+",
        "Real-time Analytics",
      ],
      color: "text-purple-400",
    },
    {
      icon: <BsPeople className="text-3xl" />,
      title: "Customer Experience Design",
      description:
        "Create exceptional customer journeys that increase satisfaction, loyalty, and lifetime value.",
      metrics: ["CSAT: 92%+", "Retention: 85%+", "NPS: 70+"],
      color: "text-pink-400",
    },
    {
      icon: <BsClock className="text-3xl" />,
      title: "Rapid Deployment",
      description:
        "Execute projects with agility and precision, delivering value faster without compromising quality.",
      metrics: ["30% Faster Delivery", "On-Time: 98%", "Budget Adherence: 95%"],
      color: "text-cyan-400",
    },
  ];

  const industries = [
    { name: "Retail & E-Commerce", growth: "+180%" },
    { name: "Healthcare", growth: "+125%" },
    { name: "Financial Services", growth: "+165%" },
    { name: "Education", growth: "+145%" },
    { name: "Manufacturing", growth: "+110%" },
    { name: "Professional Services", growth: "+95%" },
  ];

  // Precompute random widths for each industry bar (only once on mount)
//   const [industryWidths] = React.useState(() =>
//     industries.map(() => Math.random() * 30 + 70),
//   );

  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b pb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary-light">
              business_center
            </span>
            <span className="text-primary-light font-display font-bold text-sm tracking-widest uppercase">
              Core Capabilities
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
            Strategic Business
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light via-white to-anime-pink">
              Solutions & Expertise
            </span>
          </h1>
          <p className="text-muted text-lg max-w-3xl">
            We combine deep industry knowledge with cutting-edge technology to
            deliver solutions that solve real business challenges. Our expertise
            spans multiple domains, ensuring comprehensive support for your
            digital transformation journey.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-[#1e1a32] rounded-xl p-6 border border-border-dark hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mb-4 ${capability.color}`}>
                {capability.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                {capability.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {capability.description}
              </p>
              <div className="space-y-2">
                {capability.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-xs text-muted">
                      {metric.split(":")[0]}:
                    </span>
                    <span className="text-xs font-bold text-white">
                      {metric.split(":")[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Expertise */}
        <div className="bg-linear-to-r from-[#1e1a32] to-[#25213d] rounded-xl p-8 border border-border-dark">
          <h2 className="text-2xl font-display font-bold text-white mb-6">
            Industry-Specific Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-[#2a2441] rounded-lg p-4 border border-border-dark"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">
                    {industry.name}
                  </span>
                  <span className="text-green-400 font-bold">
                    {industry.growth}
                  </span>
                </div>
                <div className="mt-2 h-1 bg-border-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-primary to-anime-cyan rounded-full"
                    // style={{ width: `${industryWidths[index]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              The Business Advantage
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">Proven ROI</span>
                  <span className="text-muted text-sm ml-2">
                    Average return of 234% within first year
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">
                    Strategic Partnership
                  </span>
                  <span className="text-muted text-sm ml-2">
                    We`re invested in your long-term success
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">
                    Risk-Free Guarantee
                  </span>
                  <span className="text-muted text-sm ml-2">
                    100% satisfaction or we make it right
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Client-Centric Approach
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">
                    Dedicated Support
                  </span>
                  <span className="text-muted text-sm ml-2">
                    24/7 priority support for all clients
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">
                    Transparent Reporting
                  </span>
                  <span className="text-muted text-sm ml-2">
                    Real-time dashboards and monthly reviews
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-light mt-1">
                  check_circle
                </span>
                <div>
                  <span className="text-white font-medium">
                    Flexible Engagement
                  </span>
                  <span className="text-muted text-sm ml-2">
                    Models tailored to your business needs
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted mb-6">
            Schedule a free consultation to discuss how we can help achieve your
            business objectives
          </p>
          <button className="h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(59,25,230,0.3)]">
            Get Started Today
          </button>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Page;

// app/services/page.tsx
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { servicesData } from "@/lib/services-data";

export default function ServicesHubPage() {
  const servicesArray = Object.values(servicesData);

  return (
    <Layout className="flex-1 bg-[#0a0a12] flex flex-col items-center w-full">
      <div className="w-full flex flex-col">
        {/* Hero Section - Minimal & Direct */}
        <section className="relative flex flex-col items-center justify-center text-center py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent-cyan/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              <span className="text-accent-cyan font-semibold text-sm tracking-wide uppercase">
                Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black leading-tight text-white mb-6">
              Solutions Built for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light to-accent-cyan">
                Growth
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
              I don&apos;t just build software. I engineer strategic advantages.
              Choose a specialty below to see how I can transform your
              operations.
            </p>
          </div>
        </section>

        {/* Alternating Services List */}
        <section className="max-w-7xl mx-auto w-full px-4 pb-20">
          <div className="flex flex-col gap-24 md:gap-32">
            {servicesArray.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.slug}
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}
                >
                  {/* Visual / Graphic Side */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-square max-w-md mx-auto">
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 blur-3xl opacity-20 ${isReversed ? "bg-accent-pink" : "bg-primary"}`}
                      ></div>

                      {/* Main Card Graphic */}
                      <div className="relative h-full w-full rounded-3xl bg-[#1e1a32] border border-border-dark overflow-hidden p-8 flex flex-col justify-end group hover:border-primary/30 transition-colors">
                        {/* Abstract graphic elements */}
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                        <div className="absolute top-6 right-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                          {service.stats[0]?.icon || "🚀"}
                        </div>

                        {/* Stats overlay inside graphic */}
                        <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                          {service.stats.slice(0, 2).map((stat, i) => (
                            <div
                              key={i}
                              className="bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/5"
                            >
                              <div className="text-2xl font-bold text-white">
                                {stat.metric}
                              </div>
                              <div className="text-xs text-slate-400 uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content Side */}
                  <div className="w-full md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                      <span className="text-sm">{service.stats[0]?.icon}</span>
                      <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                      {service.heroHeadline}
                    </h2>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      {service.heroSubtext}
                    </p>

                    {/* Quick Feature Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-lg text-sm text-slate-300"
                        >
                          {feat.title}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-3 h-12 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-primary/10 hover:border-primary/50 transition-all"
                    >
                      Explore Solution
                      <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 pb-20">
          <div className="max-w-7xl mx-auto bg-linear-to-r from-primary/20 to-anime-cyan/20 rounded-2xl p-12 text-center border border-primary/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a12]/50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Need Something Custom?
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Every business is unique. Let&apos;s architect a bespoke solution
                tailored precisely to your operational challenges.
              </p>
              <Link
                href="/contact"
                className="inline-block h-14 px-10 rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(59,25,230,0.4)]"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}

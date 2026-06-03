// // home/page.tsx
// import Layout from "@/components/layout/layout";
// import Navbar from "@/components/layout/navbar";
// import { ChevronRight, Mail } from "lucide-react";
// import Image from "next/image";

// const Page = () => {
//   return (
//     <Layout>
//       {/* navbar */}
//       <div>
//         <Navbar />

//         {/* hero */}
//         <div className="flex flex-1 flex-col items-center justify-center px-6 lg:px-40 py-10 relative">
//           {/* // <!-- Decorative Elements --> */}
//           <div className="absolute top-1/4 left-10 lg:left-20 w-32 h-32 bg-anime-purple/20 rounded-full blur-[80px]"></div>
//           <div className="absolute bottom-1/4 right-10 lg:right-20 w-40 h-40 bg-anime-cyan/20 rounded-full blur-[80px]"></div>
//           <div className="layout-content-container flex flex-col max-w-249 w-full items-center text-center gap-8 relative z-10">
//             {/* // <!-- Avatar/Profile Image with Anime Glow --> */}
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-linear-to-r from-anime-cyan via-primary to-anime-pink rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
//               <div className="relative size-32 lg:size-40 rounded-full overflow-hidden border-2 border-white/10 bg-background-dark">
//                 <Image
//                   alt="Profile avatar of a developer in a hoodie"
//                   className="w-full h-full object-cover"
//                   data-alt="Stylized portrait of a young developer"
//                   src="/assets/profile.png"
//                   width={100}
//                   height={100}
//                 />
//               </div>
//               <div className="absolute bottom-1 right-1 bg-green-500 size-4 rounded-full border-2 border-background-dark shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
//             </div>
//             {/* <!-- Greeting & Title --> */}
//             <div className="flex flex-col gap-4 animate-fade-in-up">
//               <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto backdrop-blur-md">
//                 <span className="w-2 h-2 rounded-full bg-anime-cyan animate-pulse"></span>
//                 <span className="text-xs font-medium text-anime-cyan tracking-wider uppercase">
//                   Open to work
//                 </span>
//               </div>
//               <h1 className="text-white  text-5xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
//                 Hi, I`m{" "}
//                 <span className="text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink">
//                   Chinonso
//                 </span>
//               </h1>
//               {/* <!-- Terminal-style Role Display --> */}
//               <div className="flex items-center justify-center gap-2 text-lg lg:text-2xl font-medium text-slate-400 font-mono bg-black/40 px-6 py-3 rounded-lg border-l-4 border-anime-pink w-fit mx-auto backdrop-blur-sm">
//                 <span className="text-anime-pink">&gt;</span>
//                 <span className="typing-text text-slate-200">
//                   Frontend Engineer
//                 </span>
//                 <span className="text-slate-600 px-2">|</span>
//                 <span className="text-slate-400">UI/UX Designer</span>
//                 <span className="w-2.5 h-5 bg-anime-cyan/80 ml-1 animate-pulse"></span>
//               </div>
//             </div>
//             <p className="text-slate-400 text-base lg:text-lg max-w-2xl leading-relaxed">
//               Crafting immersive web experiences with a touch of modern
//               aesthetics. Specialized in building scalable applications with
//               React, Tailwind, and Node.js. Let`s build something{" "}
//               <span className="text-anime-cyan">extraordinary</span> together.
//             </p>
//             {/* <!-- CTA Buttons --> */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
//               <button className="group relative flex items-center justify-center gap-3 h-12 px-8 bg-primary text-white text-base font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(59,25,230,0.6)] hover:-translate-y-1">
//                 <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
//                 <span>View My Work</span>
//                 <ChevronRight className=" animate-pulse" />
//                 {/* <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
//                   arrow_forward
//                 </span> */}
//               </button>
//               <button className="flex items-center justify-center gap-3 h-12 px-8 bg-white/5 border border-white/10 text-white text-base font-bold rounded-lg hover:bg-white/10 hover:border-anime-cyan/50 hover:text-anime-cyan transition-all hover:-translate-y-1 backdrop-blur-sm">
//                 <span>Contact Me</span>
//                 <Mail className="w-5" />
//                 {/* <span className="material-symbols-outlined text-sm">mail</span> */}
//               </button>
//             </div>
//             {/* <!-- Tech Stack Marquee (Static Representation) --> */}
//             <div className="mt-12 pt-8 border-t border-white/5 w-full">
//               <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">
//                 Powering my builds
//               </p>
//               <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
//                 {/* <!-- Icons represented by text/symbols for simplicity, in a real scenario these would be SVG logos --> */}
//                 <div className="flex items-center gap-2 text-slate-300 hover:text-[#61DAFB] transition-colors cursor-default">
//                   <span className="material-symbols-outlined">code_blocks</span>
//                   <span className="font-bold">React</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-300 hover:text-[#3178C6] transition-colors cursor-default">
//                   <span className="material-symbols-outlined">dataset</span>
//                   <span className="font-bold">TypeScript</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-300 hover:text-[#38B2AC] transition-colors cursor-default">
//                   <span className="material-symbols-outlined">css</span>
//                   <span className="font-bold">Tailwind</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-default">
//                   <span className="material-symbols-outlined">javascript</span>

//                   <span className="font-bold">Next.js</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background-dark to-transparent pointer-events-none z-0"></div>
//     </Layout>
//   );
// };

// export default Page;

// app/page.tsx
import Link from "next/link";
import { BsArrowRight, BsCheckCircle, BsTrophy } from "react-icons/bs";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { allProjects } from "@/lib/project-data";
import ProjectCardSlider from "@/components/shared/project_card_slider";


export default function Home() {
  const clientResults = [
    { metric: "234%", label: "Average ROI", icon: "📈" },
    { metric: "50+", label: "Projects Delivered", icon: "🎯" },
    { metric: "98%", label: "Client Satisfaction", icon: "⭐" },
    { metric: "30%", label: "Faster Delivery", icon: "⚡" },
  ];

  const services = [
    {
      title: "Digital Strategy",
      description:
        "Comprehensive roadmaps for digital transformation that align technology with business goals.",
      icon: "🚀",
      benefits: ["Revenue Growth", "Market Expansion", "Competitive Advantage"],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "End-to-end online retail platforms that drive sales and enhance customer experience.",
      icon: "🛒",
      benefits: ["180% Revenue Increase", "50K+ Users", "Global Reach"],
    },
    {
      title: "Business Intelligence",
      description:
        "Data-driven insights and analytics that empower informed decision-making.",
      icon: "📊",
      benefits: [
        "60% Faster Decisions",
        "Real-time Analytics",
        "Predictive Insights",
      ],
    },
    {
      title: "Process Automation",
      description:
        "Streamline operations and reduce costs through intelligent workflow automation.",
      icon: "⚙️",
      benefits: ["40% Cost Reduction", "60% Time Savings", "Error Elimination"],
    },
  ];

  return (
    <Layout className="flex-1 bg-[red] flex flex-col items-center w-full">
      <div className="w-full flex flex-col gap-10">
        {/* Hero Section */}
        <section className="relative bg-[re] flex flex-col items-center justify-center text-center py-16 md:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent-cyan/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in">
              <div className="flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10">
                <span className="material-symbols-outlined text-accent-cyan text-sm">
                  verified
                </span>
                <span className="text-accent-cyan font-display font-semibold text-sm tracking-wide uppercase">
                  Trusted by 500+ Businesses
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight text-white mb-4">
                Transform Your
                <br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light via-white to-accent-pink">
                    Business Today
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary-light to-accent-pink rounded-full opacity-50"></span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto mb-10">
              {/* <p className="text-lg md:text-xl text-slate-300 leading-7.5 md:leading-relaxed font-light">
                Strategic digital solutions that deliver
                <span className="text-accent-cyan font-semibold">
                  {" "}
                  measurable results
                </span>
                . Partner with industry leaders to unlock your business
                potential and achieve
                <span className="text-anime-pink font-semibold">
                  {" "}
                  sustainable growth
                </span>
                .
              </p> */}

              <p className="text-lg md:text-xl text-slate-300 leading-7.5 md:leading-relaxed font-light">
                Crafting immersive web experiences with a touch of modern
                aesthetics. Specialized in building scalable applications with
                React, Tailwind, and Node.js. Let`s build something
                <span className="text-primary"> extraordinary</span> together.
              </p>
            </div>

            {/* Social Proof Stats */}
            <div className="hidden grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-muted mb-1 group-hover:scale-110 transition-transform">
                  500+
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  Clients
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-anime-purple mb-1 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  Success Rate
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-anime-pink mb-1 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  Support
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/contact-me"
                className="group relative flex items-center gap-3 h-16 px-8 rounded-2xl bg-linear-to-r from-primary to-primary-light text-white text-base font-bold hover:shadow-[0_0_40px_rgba(59,25,230,0.6)] transition-all duration-300 overflow-hidden"
              >
                {/* <button className="group relative flex items-center gap-3 h-16 px-8 rounded-2xl bg-linear-to-r from-primary to-primary-light text-white text-base font-bold hover:shadow-[0_0_40px_rgba(59,25,230,0.6)] transition-all duration-300 overflow-hidden"> */}
                <span className="absolute inset-0 bg-linear-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-3">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  Schedule Free Consultation
                  <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
                </span>
                {/* </button> */}
              </Link>
              <Link
                href="/projects"
                className="group relative flex items-center gap-3 h-16 px-8 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white text-base font-bold hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <span className="material-symbols-outlined">
                    auto_stories
                  </span>
                  View Success Stories
                  <BsTrophy className="text-xl group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Additional Trust Elements */}
            <div className="hidden items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">
                  lock
                </span>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">
                  schedule
                </span>
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-slate-500 text-2xl">
              keyboard_arrow_down
            </span>
          </div>
        </section>
        {/* Results Section */}
        <section className="md:py-16 py-10 max-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Proven Business Results
            </h2>
            <p className="text-muted text-lg">
              We don`t just build solutions; we deliver measurable business
              value
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clientResults.map((result, index) => (
              <div
                key={index}
                className="bg-[#1e1a32] rounded-xl p-6 text-center border border-border-dark"
              >
                <div className="text-4xl mb-3">{result.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-muted">{result.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="md:py-16 py-10 max-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Business Solutions
            </h2>
            <p className="text-muted text-lg">
              Comprehensive services designed to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1e1a32] rounded-xl p-8 border border-border-dark hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
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
        {/* Recent Projects */}
        <section className="md:py-20 py-12 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                Recent Success Stories
              </h2>
              <p className="text-muted text-lg max-w-md">
                Real projects. Real results. See how we’ve helped businesses
                grow.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors group"
            >
              View All Projects
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProjects.slice(0,3).map((project) => (
              <ProjectCardSlider key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="md:py-16 py-10 max-width">
          <div className="bg-linear-to-r from-primary/20 to-anime-cyan/20 rounded-xl p-12 text-center border border-primary/30">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Join 20+ businesses that have transformed their operations and
              achieved remarkable growth with our strategic solutions.
            </p>
            <button className="h-14 px-10 cursor-pointer rounded-full bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(59,25,230,0.4)]">
            <Link href="/contact-me" className="flex items-center gap-2">
              Start Your Transformation
              </Link>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
}

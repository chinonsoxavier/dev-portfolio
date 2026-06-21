"use client";
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
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { allProjects } from "@/lib/project-data";
import ProjectCardSlider from "@/components/shared/project_card_slider";
import Image from "next/image";
import { useEffect,useState } from "react";
import slide1 from "@/public/assets/hero-slider/peterweideman-bedroom-5664223_1920.jpg";
import slide2 from "@/public/assets/hero-slider/thanh_nguyen_slq-house-exterior-7193745_1920.jpg";
import slide3 from "@/public/assets/hero-slider/geralt-businessman-3213659_1920.jpg";

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);

const heroSlides = [
  {
    image: slide1,
    title: "Quiet and Deep Stillness",
    subtitle:
      "We craft premium digital experiences that bring harmony, elegance, and clarity to your brand.",
  },
  {
    image: slide2,
    title: "Real Estate & Hospitality",
    subtitle:
      "Stunning websites, booking systems, and digital platforms for luxury villas, hotels, and property developers.",
  },
  {
    image: slide3,
    title: "Premium Digital Solutions",
    subtitle:
      "From custom business systems to immersive brand websites — built with precision and sophistication.",
  },
];

// Auto-slide
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 6500);
  return () => clearInterval(timer);
}, []);

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
        <section className="relative h-full min-h-170 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {heroSlides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {/* Background Image with Elegant Zoom */}
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>

                    {/* Deep Luxury Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90" />
                  </motion.div>
                ),
            )}
          </AnimatePresence>

          {/* Animated Content Layer */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mb-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <span className="text-emerald-400">●</span>
              <span className="text-sm font-medium tracking-widest uppercase">
                Premium Digital Craftsmanship
              </span>
            </motion.div>

            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter text-white mb-6"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="group flex items-center justify-center gap-3 h-14 px-10 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition-all hover:scale-[1.02]"
              >
                View My Work
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact-me"
                className="group flex items-center justify-center gap-3 h-14 px-10 border-2 border-white/70 text-white font-semibold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>

          {/* Premium Progress Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-12 h-1 bg-white/30 rounded-full overflow-hidden transition-all hover:bg-white/50 ${
                  index === currentSlide ? "scale-110" : ""
                }`}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: index === currentSlide ? "100%" : "0%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                />
              </button>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute hidden bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
          >
            Scroll to explore
            <BsArrowRight className="rotate-90 text-xl" />
          </motion.div>
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
            {allProjects.slice(0, 3).map((project) => (
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

// // contact-me/page.tsx
// "use client";
// import Layout from "@/components/layout/layout";
// import Navbar from "@/components/layout/navbar";
// import { useState } from "react";
// import {
//   MdAdsClick,
//   MdAlternateEmail,
//   MdAssignmentLate,
//   MdCode,
//   MdDataObject,
//   MdGroupAdd,
//   MdLocalCafe,
//   MdMilitaryTech,
//   MdPerson,
// } from "react-icons/md";
// import Success from "./success";

// const Page = () => {
//   const [sent, setSent] = useState(false);

//   return (
//     <Layout>
//       {/* navbar */}
//       <div>
//         <Navbar />

//         {/* hero */}
//         {sent ? (
//           <Success />
//         ) : (
//           <main className="flex flex-1 flex-col items-center justify-center px-4 lg:px-20 py-8 relative">
//             <div className="absolute top-20 right-10 w-64 h-64 border border-anime-purple/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
//             <div className="absolute bottom-20 left-10 w-48 h-48 border border-anime-cyan/10 rounded-full border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
//             <div className="w-full max-w-6xl relative z-10">
//               <div className="mb-8 flex items-end gap-4 border-b border-white/10 pb-4">
//                 <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink uppercase tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
//                   Contact
//                 </h1>
//                 <span className="text-anime-cyan font-mono text-sm mb-2 opacity-80 animate-pulse">
//                   SYSTEM_READY // AWAITING_INPUT...
//                 </span>
//               </div>
//               <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
//                 <div className="lg:col-span-5 flex flex-col gap-6">
//                   <div className="bg-black/40 backdrop-blur-md border border-anime-purple/30 rounded-lg p-6 relative overflow-hidden group hover:border-anime-purple/60 transition-colors">
//                     <div className="absolute top-0 right-0 p-2 opacity-50">
//                       <MdAssignmentLate className="text-4xl text-anime-purple" />
//                     </div>
//                     <h3 className="text-anime-cyan text-sm font-mono tracking-widest uppercase mb-2">
//                       Current Focus
//                     </h3>
//                     <p className="text-2xl font-bold text-white mb-4">
//                       Let&apos; s Connect
//                     </p>
//                     <div className="text-slate-400 text-sm leading-relaxed space-y-2">
//                       <p>
//                         I am currently available for new projects and
//                         partnerships. Reach out to discuss how we can work
//                         together on your next venture.
//                       </p>
//                       <div className="flex items-center gap-2 mt-4 text-xs font-mono text-anime-purple">
//                         <span className="w-2 h-2 bg-anime-purple rounded-full animate-pulse"></span>
//                         STATUS: AVAILABLE
//                       </div>
//                     </div>
//                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-anime-purple/50 rounded-br-lg"></div>
//                   </div>
//                   <div className="bg-black/40 backdrop-blur-md border border-anime-cyan/30 rounded-lg p-6 relative overflow-hidden group hover:border-anime-cyan/60 transition-colors">
//                     <div className="absolute top-0 right-0 p-2 opacity-50">
//                       <MdMilitaryTech className="text-4xl text-anime-cyan" />
//                     </div>
//                     <h3 className="text-anime-pink text-sm font-mono tracking-widest uppercase mb-2">
//                       Services
//                     </h3>
//                     <ul className="space-y-4 mt-4">
//                       <li className="flex items-start gap-3">
//                         <div className="bg-anime-cyan/10 p-1 rounded text-anime-cyan">
//                           <MdCode className="text-sm" />
//                         </div>
//                         <div>
//                           <p className="text-white font-bold text-sm">
//                             High-Quality Code
//                           </p>
//                           <p className="text-slate-500 text-xs">
//                             Clean, scalable, and performant solutions.
//                           </p>
//                         </div>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <div className="bg-anime-pink/10 p-1 rounded text-anime-pink">
//                           <MdGroupAdd className="text-sm" />
//                         </div>
//                         <div>
//                           <p className="text-white font-bold text-sm">
//                             Partnership
//                           </p>
//                           <p className="text-slate-500 text-xs">
//                             A dedicated collaborator for your team.
//                           </p>
//                         </div>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <div className="bg-primary/10 p-1 rounded text-primary">
//                           <MdLocalCafe className="text-sm" />
//                         </div>
//                         <div>
//                           <p className="text-white font-bold text-sm">
//                             Consultation
//                           </p>
//                           <p className="text-slate-500 text-xs">
//                             Virtual or in-person discussion about your project.
//                           </p>
//                         </div>
//                       </li>
//                     </ul>
//                     <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-anime-cyan/50 rounded-bl-lg"></div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-black/20 border border-white/5 rounded p-3 text-center">
//                       <div className="text-xs text-slate-500 font-mono uppercase">
//                         Response Time
//                       </div>
//                       <div className="text-xl font-bold text-white">
//                         &lt; 24h
//                       </div>
//                     </div>
//                     <div className="bg-black/20 border border-white/5 rounded p-3 text-center">
//                       <div className="text-xs text-slate-500 font-mono uppercase">
//                         Availability
//                       </div>
//                       <div className="text-xl font-bold text-green-400">
//                         Open
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="lg:col-span-7">
//                   <div className="h-full bg-background-dark/80 backdrop-blur-xl border border-primary/30 rounded-xl p-1 shadow-[0_0_50px_rgba(59,25,230,0.1)] relative">
//                     <div className="bg-black/60 rounded-t-lg px-4 py-2 flex items-center justify-between border-b border-primary/20">
//                       <div className="flex items-center gap-2">
//                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                       </div>
//                       <div className="text-primary/70 font-mono text-xs tracking-wider">
//                         CONTACT_FORM_V2.0
//                       </div>
//                     </div>
//                     <div className="p-6 md:p-8 relative">
//                       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,25,230,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,25,230,0.03)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
//                       <form className="space-y-6 relative z-10">
//                         <div className="space-y-2 group">
//                           <label className="flex items-center gap-2 text-sm font-mono text-anime-cyan uppercase tracking-wider group-focus-within:text-white transition-colors">
//                             <MdPerson className="text-base" />
//                             Your Name
//                           </label>
//                           <div className="relative">
//                             <input
//                               className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan focus:outline-none transition-all font-mono"
//                               placeholder="Enter your name..."
//                               type="text"
//                             />
//                             <div className="absolute right-0 top-0 h-full w-1 bg-anime-cyan scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom"></div>
//                           </div>
//                         </div>
//                         <div className="space-y-2 group">
//                           <label className="flex items-center gap-2 text-sm font-mono text-anime-cyan uppercase tracking-wider group-focus-within:text-white transition-colors">
//                             <MdAlternateEmail className="text-base" />
//                             Email
//                           </label>
//                           <div className="relative">
//                             <input
//                               className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan focus:outline-none transition-all font-mono"
//                               placeholder="your@email.com"
//                               type="email"
//                             />
//                             <div className="absolute right-0 top-0 h-full w-1 bg-anime-cyan scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom"></div>
//                           </div>
//                         </div>
//                         <div className="space-y-2 group">
//                           <label className="flex items-center gap-2 text-sm font-mono text-anime-cyan uppercase tracking-wider group-focus-within:text-white transition-colors">
//                             <MdDataObject className="text-base" />
//                             Project Details
//                           </label>
//                           <div className="relative">
//                             <textarea
//                               className="w-full bg-black/40 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:border-anime-cyan focus:ring-1 focus:ring-anime-cyan focus:outline-none transition-all font-mono resize-none"
//                               placeholder="Describe your project requirements..."
//                               rows={5}
//                             ></textarea>
//                             <div className="absolute right-0 top-0 h-full w-1 bg-anime-cyan scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom"></div>
//                           </div>
//                         </div>
//                         <button
//                           onClick={() => setSent(true)}
//                           className="group relative w-full h-16 mt-4 bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-white uppercase font-bold tracking-[0.2em] transition-all duration-300 overflow-hidden flex items-center justify-center"
//                           type="button"
//                         >
//                           <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
//                           <span className="relative z-10 flex items-center gap-3">
//                             <MdAdsClick className="text-2xl group-hover:animate-bounce" />
//                             Send Message
//                           </span>
//                           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(59,25,230,0.8)] transition-opacity duration-300"></div>
//                         </button>
//                         <div className="text-center">
//                           <span className="text-[10px] text-slate-600 font-mono">
//                             By submitting this form, you agree to our Terms of
//                             Service and Privacy Policy.
//                           </span>
//                         </div>
//                       </form>
//                     </div>
//                     <div className="absolute bottom-4 left-4 text-[10px] text-primary/40 font-mono hidden md:block">
//                       FORM.ID: 847-22-X
//                     </div>
//                     <div className="absolute bottom-4 right-4 text-[10px] text-primary/40 font-mono hidden md:block">
//                       SECURE_CONNECTION
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         )}
//       </div>
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background-dark to-transparent pointer-events-none z-0"></div>
//     </Layout>
//   );
// };

// export default Page;


// contact-me/page.tsx
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import React from "react";
import { BsSend, BsClock, BsCheckCircle } from "react-icons/bs";

const Page = () => {
  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-10">
        {/* Header */}
        <div className="flex pt-10 flex-col gap-6 border-b pb-8">
          <div className="hidden items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white">
              contact_mail
            </span>
            <span className="text-white font-display font-bold text-sm tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
            Let`s Build Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-anime-pink">
              Success Story Together
            </span>
          </h1>
          <p className="text-muted text-lg max-w-3xl">
            Ready to take your business to the next level? Our team is here to
            help you navigate your digital transformation journey. Reach out
            today for a complimentary business consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1e1a32] rounded-xl p-8 border border-border-dark">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Schedule Your Consultation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Type *
                  </label>
                  <select className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white focus:border-primary focus:outline-none transition-colors">
                    <option value="">Select a service</option>
                    <option value="strategy">Digital Strategy</option>
                    <option value="ecommerce">E-Commerce Solution</option>
                    <option value="analytics">Business Intelligence</option>
                    <option value="automation">Process Automation</option>
                    <option value="consulting">General Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Budget
                  </label>
                  <select className="w-full h-10 px-4 rounded-lg bg-surface-dark border border-border-dark text-white focus:border-primary focus:outline-none transition-colors">
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-surface-dark border border-border-dark text-white placeholder:text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Describe your business objectives and challenges..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 rounded border-border-dark bg-surface-dark text-primary focus:ring-primary focus:ring-offset-0"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted">
                    I`d like to receive business insights and updates
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Schedule Consultation</span>
                  <BsSend className="text-xl group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#1e1a32] rounded-xl p-6 border border-border-dark">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted mb-1">Business Inquiries</p>
                  <p className="text-white font-medium">contact@chinonso.dev</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Phone</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r from-primary/20 to-anime-cyan/20 rounded-xl p-6 border border-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <BsClock className="text-2xl text-white" />
                <h3 className="text-xl font-display font-bold text-white">
                  Quick Response
                </h3>
              </div>
              <p className="text-muted text-sm mb-4">
                We understand that in business, timing is everything. That`s why
                we guarantee a response within one business day.
              </p>
              <div className="flex items-center gap-2">
                <BsCheckCircle className="text-green-400" />
                <span className="text-white text-sm">98% response rate</span>
              </div>
            </div>

            <div className="bg-[#1e1a32] hidden rounded-xl p-6 border border-border-dark">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Office Locations
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium">North America</p>
                  <p className="text-sm text-muted">New York, Toronto</p>
                </div>
                <div>
                  <p className="text-white font-medium">Europe</p>
                  <p className="text-sm text-muted">London, Amsterdam</p>
                </div>
                <div>
                  <p className="text-white font-medium">Asia Pacific</p>
                  <p className="text-sm text-muted">Singapore, Sydney</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1e1a32] rounded-lg p-6 border border-border-dark">
              <h3 className="text-white font-bold mb-2">
                What is your typical project timeline?
              </h3>
              <p className="text-muted text-sm">
                Project timelines vary based on scope and complexity. Most
                engagements range from 3-6 months, with initial strategy phases
                delivered within 2-4 weeks.
              </p>
            </div>
            <div className="bg-[#1e1a32] rounded-lg p-6 border border-border-dark">
              <h3 className="text-white font-bold mb-2">
                Do you offer ongoing support?
              </h3>
              <p className="text-muted text-sm">
                Yes, we provide comprehensive support packages including 24/7
                monitoring, regular updates, and strategic consulting to ensure
                continued success.
              </p>
            </div>
            <div className="bg-[#1e1a32] rounded-lg p-6 border border-border-dark">
              <h3 className="text-white font-bold mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-muted text-sm">
                We have extensive experience across retail, healthcare, finance,
                education, and professional services, delivering tailored
                solutions for each sector.
              </p>
            </div>
            <div className="bg-[#1e1a32] rounded-lg p-6 border border-border-dark">
              <h3 className="text-white font-bold mb-2">
                How do you measure success?
              </h3>
              <p className="text-muted text-sm">
                Success is measured through predefined KPIs including ROI,
                revenue growth, cost savings, customer satisfaction, and
                operational efficiency improvements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Page;
// import Link from "next/link";
// import React from "react";

// const Success = () => {
//   return (
//     <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden selection:bg-anime-cyan/30">
//       <div className="relative min-h-screen w-full flex flex-col">
//         {/* Enhanced Background Effects */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
//           <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse delay-1000" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-anime-purple/5 rounded-full blur-[150px]" />

//           {/* Grid Pattern Overlay */}
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `linear-linear(rgba(59, 25, 230, 0.3) 1px, transparent 1px),
//                                linear-linear(90deg, rgba(59, 25, 230, 0.3) 1px, transparent 1px)`,
//               backgroundSize: "50px 50px",
//             }}
//           />
//         </div>

//         <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
//           {/* Success Animation Header */}
//           <div className="text-center mb-16 relative">
//             {/* Animated Checkmark Circle */}
//             <div className="relative mb-8 inline-block">
//               <div className="absolute inset-0 bg-anime-cyan/20 rounded-full blur-xl animate-pulse" />
//               <div className="relative w-24 h-24 mx-auto rounded-full bg-linear-to-br from-anime-cyan/20 to-anime-purple/20 border border-anime-cyan/30 flex items-center justify-center backdrop-blur-sm">
//                 <svg
//                   className="w-12 h-12 text-anime-cyan animate-[bounce_1s_ease-in-out]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                     className="animate-[draw_0.5s_ease-out_forwards]"
//                     style={{
//                       strokeDasharray: 100,
//                       strokeDashoffset: 100,
//                       animation: "draw 0.8s ease-out 0.3s forwards",
//                     }}
//                   />
//                 </svg>
//               </div>
//               {/* Orbiting dots */}
//               <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
//                 <div className="absolute top-0 left-1/2 w-2 h-2 bg-anime-cyan rounded-full -translate-x-1/2 -translate-y-1" />
//               </div>
//               <div className="absolute inset-0 animate-[spin_6s_linear_infinite_reverse]">
//                 <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-anime-purple rounded-full -translate-x-1/2 translate-y-1" />
//               </div>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
//               Message Sent
//             </h1>
//             <div className="flex items-center justify-center gap-4">
//               <span className="h-px w-16 bg-linear-to-r from-transparent to-anime-cyan" />
//               <p className="text-anime-cyan text-sm md:text-base font-bold tracking-[0.3em] uppercase">
//                 Thank You For Your Inquiry
//               </p>
//               <span className="h-px w-16 bg-linear-to-l from-transparent to-anime-cyan" />
//             </div>
//           </div>

//           {/* Main Content Grid */}
//           <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Confirmation Details Card */}
//             <div className="group relative">
//               <div className="absolute -inset-0.5 bg-linear-to-r from-anime-purple to-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
//               <div className="relative bg-black/40 backdrop-blur-xl border border-anime-purple/30 rounded-2xl p-8 h-full hover:border-anime-purple/50 transition-all duration-300">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-2 rounded-lg bg-anime-purple/10 border border-anime-purple/20">
//                     <svg
//                       className="w-6 h-6 text-anime-purple"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold uppercase tracking-widest text-white">
//                     Confirmation Details
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {[
//                     {
//                       icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
//                       title: "Status",
//                       desc: "Message Successfully Delivered",
//                       status: "Delivered",
//                       color: "anime-cyan",
//                     },
//                     {
//                       icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
//                       title: "Response Time",
//                       desc: "Within 24 Business Hours",
//                       status: "24H",
//                       color: "anime-purple",
//                     },
//                     {
//                       icon: "M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76",
//                       title: "Follow-up",
//                       desc: "Check Your Email For Updates",
//                       status: "Pending",
//                       color: "slate-500",
//                     },
//                   ].map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl group/item hover:bg-white/10 hover:border-anime-cyan/30 transition-all duration-300 cursor-pointer"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div
//                           className={`size-12 rounded-xl bg-background-dark border border-${item.color}/30 flex items-center justify-center text-${item.color} group-hover/item:scale-110 transition-transform duration-300`}
//                         >
//                           <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={1.5}
//                               d={item.icon}
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="text-white font-bold text-sm uppercase tracking-wide">
//                             {item.title}
//                           </p>
//                           <p className="text-slate-400 text-xs mt-0.5">
//                             {item.desc}
//                           </p>
//                         </div>
//                       </div>
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}/10 text-${item.color} border border-${item.color}/20`}
//                       >
//                         {item.status}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Ticket Card */}
//             <div className="group relative">
//               <div className="absolute -inset-0.5 bg-linear-to-r from-anime-cyan to-anime-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
//               <div className="relative bg-black/40 backdrop-blur-xl border border-anime-cyan/30 rounded-2xl p-8 h-full hover:border-anime-cyan/50 transition-all duration-300">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-2 rounded-lg bg-anime-cyan/10 border border-anime-cyan/20">
//                     <svg
//                       className="w-6 h-6 text-anime-cyan"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold uppercase tracking-widest text-white">
//                     Support Ticket
//                   </h3>
//                 </div>

//                 <div className="bg-black/60 rounded-xl p-6 border border-white/5 relative overflow-hidden">
//                   {/* Ticket Pattern */}
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-anime-cyan/5 rounded-full blur-3xl" />

//                   <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
//                     <div className="flex items-center gap-2">
//                       <span className="px-3 py-1 rounded-md bg-anime-purple/20 border border-anime-purple/30 text-anime-purple text-xs font-mono font-bold">
//                         TICKET #CN772
//                       </span>
//                     </div>
//                     <span className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">
//                       {new Date().toLocaleTimeString("en-US", {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </span>
//                   </div>

//                   <div className="space-y-5">
//                     <div className="group/field">
//                       <label className="text-[10px] text-anime-cyan uppercase font-bold tracking-widest block mb-2 flex items-center gap-2">
//                         <span className="w-1 h-1 bg-anime-cyan rounded-full" />
//                         From
//                       </label>
//                       <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 group-hover/field:border-anime-cyan/20 transition-colors">
//                         <div className="w-8 h-8 rounded-full bg-linear-to-br from-anime-purple to-primary flex items-center justify-center text-xs font-bold">
//                           JD
//                         </div>
//                         <p className="text-sm text-slate-200 font-medium">
//                           contact@yourdomain.com
//                         </p>
//                       </div>
//                     </div>

//                     <div className="group/field">
//                       <label className="text-[10px] text-anime-cyan uppercase font-bold tracking-widest block mb-2 flex items-center gap-2">
//                         <span className="w-1 h-1 bg-anime-cyan rounded-full" />
//                         Subject
//                       </label>
//                       <p className="text-sm text-slate-200 font-medium p-3 rounded-lg bg-white/5 border border-white/5 group-hover/field:border-anime-cyan/20 transition-colors">
//                         Project Inquiry - Follow-up Required
//                       </p>
//                     </div>

//                     <div className="group/field">
//                       <label className="text-[10px] text-anime-cyan uppercase font-bold tracking-widest block mb-2 flex items-center gap-2">
//                         <span className="w-1 h-1 bg-anime-cyan rounded-full" />
//                         Message Preview
//                       </label>
//                       <div className="p-4 rounded-lg bg-white/5 border border-white/5 group-hover/field:border-anime-cyan/20 transition-colors">
//                         <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
//                           Thank you for reaching out. Your message has been
//                           received and is currently being reviewed by our team.
//                           We will get back to you as soon as possible with
//                           detailed information regarding your inquiry...
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
//                     <div className="p-3 rounded-lg bg-white/5">
//                       <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
//                         Priority
//                       </span>
//                       <span className="text-lg font-bold text-anime-purple flex items-center gap-2">
//                         <span className="w-2 h-2 rounded-full bg-anime-purple animate-pulse" />
//                         STANDARD
//                       </span>
//                     </div>
//                     <div className="p-3 rounded-lg bg-white/5 text-right">
//                       <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">
//                         Est. Response
//                       </span>
//                       <span className="text-lg font-bold text-anime-cyan">
//                         &lt; 24H
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
//             <Link
//               href="/"
//               className="flex-1 group relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl text-center uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(59,25,230,0.3)] hover:shadow-[0_0_40px_rgba(59,25,230,0.5)] flex items-center justify-center gap-3"
//             >
//               <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//               <svg
//                 className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                 />
//               </svg>
//               Return Home
//             </Link>

//             <Link
//               href="/contact-me"
//               className="flex-1 group relative overflow-hidden bg-transparent border-2 border-anime-cyan/30 hover:border-anime-cyan text-anime-cyan font-bold py-4 px-8 rounded-xl text-center uppercase tracking-widest transition-all hover:bg-anime-cyan/10 flex items-center justify-center gap-3"
//             >
//               <span className="absolute inset-0 bg-anime-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//               <span className="relative">Send Another Message</span>
//               <svg
//                 className="w-5 h-5 relative group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//           </div>

//           {/* Trust Indicators */}
//           <div className="mt-16 flex items-center gap-8 text-slate-500 text-xs uppercase tracking-widest">
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-4 h-4 text-anime-cyan"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                 />
//               </svg>
//               <span>256-bit SSL</span>
//             </div>
//             <div className="w-px h-4 bg-slate-700" />
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-4 h-4 text-anime-purple"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                 />
//               </svg>
//               <span>Encrypted</span>
//             </div>
//             <div className="w-px h-4 bg-slate-700" />
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-4 h-4 text-anime-pink"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span>Verified</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes draw {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Success;







// contact-me/success.tsx
import Link from "next/link";
import React from "react";

interface ISuccessProps {
  email?: string;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Success = ({ email,setSubmitted }: ISuccessProps) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden w-max">
      <div className="relative min-h-screen w-full flex flex-col">
        {/* Background glows - kept but made subtler */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-8 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-8 md:right-24 w-64 md:w-96 h-64 md:h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-5 sm:p-8 md:p-12 relative z-10">
          {/* Hero heading */}
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-purple tracking-tight leading-none">
              Message Sent
            </h1>

            <div className="mt-5 flex items-center justify-center gap-4 sm:gap-6">
              <div className="h-px w-16 sm:w-20 bg-linear-to-r from-transparent via-anime-cyan to-transparent" />
              <p className="text-anime-cyan text-base sm:text-lg font-semibold tracking-wider uppercase">
                Thank you for your inquiry
              </p>
              <div className="h-px w-16 sm:w-20 bg-linear-to-r from-transparent via-anime-cyan to-transparent" />
            </div>
          </div>

          {/* Main content grid */}
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left card - Confirmation */}
            <div className="bg-black/35 backdrop-blur-xl border border-anime-purple/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-anime-purple text-3xl">
                  check_circle
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                  Confirmation
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "mark_email_read",
                    label: "Status",
                    value: "Message Successfully Delivered",
                    color: "anime-cyan",
                  },
                  {
                    icon: "schedule",
                    label: "Response Time",
                    value: "Within 24 Business Hours",
                    color: "anime-cyan",
                  },
                  {
                    icon: "alternate_email",
                    label: "Follow-up",
                    value: "Check your inbox (and spam folder)",
                    color: "slate-400",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-black/30 border border-primary/20 rounded-xl transition-all hover:border-anime-cyan/60 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`size-11 sm:size-12 rounded-lg bg-background-dark border border-primary/30 flex items-center justify-center text-primary group-hover:text-${item.color} transition-colors`}
                      >
                        <span className="material-symbols-outlined text-2xl sm:text-3xl">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-white/90 font-semibold text-sm uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`material-symbols-outlined text-${item.color}`}
                    >
                      check_circle
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card - Ticket preview */}
            <div className="bg-black/35 backdrop-blur-xl border border-anime-cyan/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-anime-cyan text-3xl">
                  info
                </span>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
                  Ticket Details
                </h3>
              </div>

              <div className="bg-black/40 rounded-xl p-5 md:p-6 border border-primary/15 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-primary/20 text-xs">
                  <span className="font-mono text-primary font-bold tracking-tight">
                    TICKET #CN-772
                  </span>
                  <span className="text-slate-500 font-mono">
                    {new Date().toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="space-y-5 flex-1">
                  {[
                    { label: "From", value: email || ""},
                    {
                      label: "Subject",
                      value: "Project Inquiry - Follow-up Required",
                    },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="text-[11px] sm:text-xs text-anime-cyan uppercase font-bold tracking-widest block mb-1.5">
                        {field.label}
                      </label>
                      <p className="text-sm sm:text-base text-slate-200 font-medium">
                        {field.value}
                      </p>
                    </div>
                  ))}

                  <div>
                    <label className="text-[11px] sm:text-xs text-anime-cyan uppercase font-bold tracking-widest block mb-1.5">
                      Message Preview
                    </label>
                    <p className="text-sm text-slate-400 leading-relaxed italic line-clamp-4">
                      Thank you for reaching out. Your message has been received
                      and is currently being reviewed by our team. We will get
                      back to you as soon as possible with detailed
                      information...
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-primary/20 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Priority
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-anime-purple">
                      Standard
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mb-1">
                      Est. Response
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-anime-cyan">
                      &lt; 24h
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md lg:max-w-lg">
            <Link
              href="/"
              className="flex-1 bg-linear-to-r from-primary to-anime-purple hover:from-primary/90 hover:to-anime-purple/90 text-white font-bold py-2 px-8 rounded-xl text-center uppercase tracking-widest transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-2.5 group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">
                home
              </span>
              Return Home
            </Link>

            <Link
            onClick={handleClick}
              href="/contact-me"
              className="flex-1 border-2 border-anime-cyan/60 hover:border-anime-cyan text-anime-cyan font-bold py-2 px-8 rounded-xl text-center uppercase tracking-widest transition-all flex items-center justify-center gap-2 group hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
            >
              Send Another Message
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

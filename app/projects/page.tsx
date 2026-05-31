// // projects/page.tsx
// import Footer from "@/components/layout/footer";
// import Layout from "@/components/layout/layout";
// import Navbar from "@/components/layout/navbar";
// import React from "react";
// import { BsGithub } from "react-icons/bs";

// const Page = () => {
//   return (
//     <Layout className="flex-1 flex flex-col items-center w-full">
//       <Navbar />
//       <div className="w-full max-width flex flex-col gap-10">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8">
//           <div className="flex flex-col gap-2 max-w-2xl">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="material-symbols-outlined text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink">
//                 work
//               </span>
//               <span className="text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink font-display font-bold text-sm tracking-widest uppercase">
//                 Portfolio
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
//               My Projects &amp;
//               <br />
//               <span className="text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pink">
//                 Professional Work
//               </span>
//             </h1>
//             <p className="text-muted text-lg mt-2 max-w-lg">
//               A curated collection of web applications, experiments, and
//               open-source contributions. Building innovative solutions one
//               commit at a time.
//             </p>
//           </div>
//           <div className="flex gap-3">
//             <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-border-dark bg-[#1e1a32] hover:bg- text-white [#25213d0] text-sm font-medium transition-colors">
//               <BsGithub className="text-[20px]" />
//               View Github
//             </button>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-3 items-center">
//           <span className="text-muted text-sm font-medium mr-2">
//             Filter by Tech:
//           </span>
//           <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-primary text-white text-sm font-medium shadow-[0_0_8px_rgba(59,25,230,0.3)] transition-all">
//             <span className="material-symbols-outlined text-[18px]">apps</span>
//             All
//           </button>
//           <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
//             <span className="material-symbols-outlined text-[18px]">
//               code_blocks
//             </span>
//             React
//           </button>
//           <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
//             <span className="material-symbols-outlined text-[18px]">
//               javascript
//             </span>
//             TypeScript
//           </button>
//           <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
//             <span className="material-symbols-outlined text-[18px]">dns</span>
//             Node.js
//           </button>
//           <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
//             <span className="material-symbols-outlined text-[18px]">
//               palette
//             </span>
//             UI/UX
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="Modern analytics dashboard interface"
//                 style={{
//                   backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxHUjlhX0Pruf9_FguHF66EnlHq1u5atxK-ME-I9VS_kYEeGKlVb9W9n3OtfUC1ifPmoYmswltGjmdfRbOk0VJfEVJlH88KYDa2CApDOMC5v8i4dCM-z-aVdGzhBXklyOJV0aRMLa7lPLquzfk44IWtHk1bKiF88uLHXw_g3B9QH5Ok6CwykUFdcp5-G5avScl2EWWMEyXRjb7-LfrId-bSy_yZM7ZcM-VAmQg34ApFq7Na8wmGdz3kErA1Sb638UNG83RQvvkxX4z')`,
//                 }}
//               ></div>
//               <div className="absolute top-3 right-3 z-20">
//                 <span className="px-2 py-1 rounded text-xs font-bold bg-black/50text-transparent bg-clip-text bg-linear-to-r from-anime-cyan via-white to-anime-pinker border-primary/30 backdrop-blur-sm">
//                   v2.0
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   Analytics Dashboard
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 A comprehensive dashboard for managing business metrics with
//                 real-time data visualization and analytics.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-anime-pink tracking-wide uppercase">
//                   React
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-blue-300 tracking-wide uppercase">
//                   Redux
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-purple-300 tracking-wide uppercase">
//                   D3.js
//                 </span>
//               </div>
//             </div>
//           </article>
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="Modern ecommerce platform interface"
//                 style={{
//                   backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWx2OYmwT1tK09KeS6zoZu4p78_lSaaqYR10V-vtUR-DtXt8jX2hzTIDT4j_ZDU4ZFiuEGRmDl2dh_Ctk0Nxc1c2x3FnIyFnLSiH0vDJfPfudTUBbb2ihuBoNszGWYCyFsmcpPeQDCav2rAX0VVt_DUhBsYPvrSmNHUcuJS2qnHn0mtkobcjJoH8pPFHVBBE95p55PMofIX-0K8W8YLe6Tn4KF2IBhDOYTahj-wqoLNt0we5xoZDJ6X9lNCJeaBAFzkz3IV5nXvaPl')`,
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   E-Commerce Platform
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 A full-featured online shopping platform with smooth animations,
//                 secure payments, and inventory management.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-primary-light tracking-wide uppercase">
//                   Next.js
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-teal-300 tracking-wide uppercase">
//                   Tailwind
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-indigo-300 tracking-wide uppercase">
//                   Stripe
//                 </span>
//               </div>
//             </div>
//           </article>
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="Data analytics dashboard with graphs"
//                 style={{
//                   backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC306bWD_70sHAHzqwzFVi2NMsDM47c5s8F1L8NVzZmroAVesqipl3Jrffk_JtmW4jbARuNlW3LYXz-QVypD0OF_wJaJRaGy_XteyzdtA6FcgtR6LAbPi0dF6j3lNHdjZXSmwWCUtghXImWmZRBk-j_5Vx3WdYErbrFp_RR8K1WeufQq4lF3MLr75weuF-qnzHQeqBMptJ_vrGKE0hzwTkbbxKqdk5d6q8FYT4ZfbMkjF4aH6A5IHfIz8wgxYxdt0oflx7A6uIkU2RL')`,
//                 }}
//               ></div>
//               <div className="absolute top-3 right-3 z-20">
//                 <span className="px-2 py-1 rounded text-xs font-bold bg-primary text-white border border-primary-light shadow-[0_0_8px_rgba(59,25,230,0.6)]">
//                   FEATURED
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   Data Analytics Platform
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 High-performance analytics platform processing millions of data
//                 points with WebGL rendering.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-orange-300 tracking-wide uppercase">
//                   Rust
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-blue-300 tracking-wide uppercase">
//                   WASM
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-anime-pink tracking-wide uppercase">
//                   React
//                 </span>
//               </div>
//             </div>
//           </article>
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="Task management application interface"
//                 style={{
//                   backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTr1yUG22KcV-3eVkIgJ3fRpymJ2XP6Rp-10C-j88HtifNjvqdSnYB3wBfDeOGIZCS5lPVA1-zDeXGUPnBtu51iBX7m6_uwa52LwQy5UeXOTzseR0dqqsHjlGLWm03Tm0gDRuGA-3TUMpbhIxJA7h-UPqidwY6ZVk41iVAjX_4QrggSZJezQRT3k5jDY8CdmQS75D9l60LoF-WJBBb92EwGT1faiw7vp5KJk2Qrtu5GfNo5_3YwTclzNWR-MJttZxnRChYXTUATyPE')`,
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col linear-grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   Task Manager Pro
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 A productivity application with advanced task management,
//                 collaboration features, and progress tracking.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-green-300 tracking-wide uppercase">
//                   Vue
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-yellow-300 tracking-wide uppercase">
//                   Firebase
//                 </span>
//               </div>
//             </div>
//           </article>
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="Secure digital wallet interface"
//                 style={{
//                   backgroundImage:
//                     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp4E9zCmuXRz4ACEsQBx16ia4jrG2b_9rHjaZT0JKkIYlv62ncBpcXsbWiFjkwHgT6g2rcNq4veIszRgSQmvN6WP0JrWwBayURQlGmGMBv8mvL4EbwWPmqCsiBsl7HGN7SBXFosStKoeZ30on8rsNe40-YfVQr_DMQGOpIozu2FMNrLWGDmGpgZCpxFRdVKfh-gg0spJMSPCs3oEZ6fBs-oAUGqDcxY2MyUFvekvpaxhNxxVdbSvB1OwRloWDNyEPuyZpoXCmCze4P')",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   Digital Wallet
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 A secure, non-custodial wallet for managing digital assets
//                 across multiple blockchain networks.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-primary-light tracking-wide uppercase">
//                   Solidity
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-blue-300 tracking-wide uppercase">
//                   Web3.js
//                 </span>
//               </div>
//             </div>
//           </article>
//           <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 anime-glow hover:-translate-y-1">
//             <div className="relative h-48 w-full overflow-hidden">
//               <div className="absolute inset-0 bg-linear-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
//               <div
//                 className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                 data-alt="AI chat interface with conversation"
//                 style={{
//                   backgroundImage:
//                     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbWt8ke0kS-jzODar92ynpcDSr_nTQIC4SBiyL4DyFJe2t55pUnEm-mvH9KimuEn3oB5c8AnNZg7SuvoZ2_fMtsHg777q_1oc3zVMNgHhQwBEY5VZWrelUDyxFAoDvDnfe71yL-8m6Jv00qi_-t7fHU67OVADQyVAeCB0CSFxTUBpfTkC5aIsk8M4QYFfA8S0K7qSX7L-CuP_WiU3yBothxIwLFBZfc34mZlKdF-9X00sSaUB3_jwYzLf2VwS-vVIwon4UwfsLYmNX')",
//                 }}
//               ></div>
//             </div>
//             <div className="flex flex-col grow p-5 gap-3">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
//                   AI Assistant
//                 </h3>
//                 <a
//                   className="text-muted hover:text-white transition-colors"
//                   href="#"
//                 >
//                   <span className="material-symbols-outlined">open_in_new</span>
//                 </a>
//               </div>
//               <p className="text-muted text-sm leading-relaxed mb-2 line-clamp-2">
//                 An advanced conversational AI interface powered by LLMs with
//                 intelligent context management.
//               </p>
//               <div className="mt-auto flex flex-wrap gap-2">
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-pink-300 tracking-wide uppercase">
//                   Python
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-primary-light tracking-wide uppercase">
//                   FastAPI
//                 </span>
//                 <span className="rpg-tag px-2 py-1 rounded text-[10px] font-bold text-blue-300 tracking-wide uppercase">
//                   OpenAI
//                 </span>
//               </div>
//             </div>
//           </article>
//         </div>
//         <div className="flex justify-center mt-8">
//           <button className="flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary bg-transparent hover:bg-primary/10 text-primary hover:text-primary-light text-base font-bold font-display tracking-wider transition-all uppercase">
//             Load More Projects
//             <span className="material-symbols-outlined">expand_more</span>
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </Layout>
//   );
// };

// export default Page;


// projects/page.tsx
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";
import { BsArrowRight, BsCheckCircle, BsGraphUp, BsTrophy } from "react-icons/bs";

const Page = () => {
  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary-light">
                business_center
              </span>
              <span className="text-primary-light font-display font-bold text-sm tracking-widest uppercase">
                Client Success Stories
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight text-white">
              Delivering Business
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-light via-white to-anime-pink">
                Solutions That Drive Growth
              </span>
            </h1>
            <p className="text-muted text-lg mt-2 max-w-lg">
              Partnering with businesses to transform their digital presence and achieve measurable results. 
              Every project is an opportunity to create lasting business value.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-border-dark bg-[#1e1a32] hover:bg-[#25213d] text-white text-sm font-medium transition-colors">
              <span className="material-symbols-outlined">calendar_month</span>
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Business Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark">
            <BsGraphUp className="text-3xl text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">234%</div>
            <div className="text-sm text-muted">Average ROI</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark">
            <BsTrophy className="text-3xl text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-muted">Successful Projects</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark">
            <BsCheckCircle className="text-3xl text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-sm text-muted">Client Satisfaction</div>
          </div>
          <div className="bg-[#1e1a32] rounded-lg p-4 text-center border border-border-dark">
            <span className="material-symbols-outlined text-3xl text-purple-400 mx-auto mb-2">schedule</span>
            <div className="text-2xl font-bold text-white">30%</div>
            <div className="text-sm text-muted">Faster Delivery</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-muted text-sm font-medium mr-2">
            Industry Focus:
          </span>
          <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-primary text-white text-sm font-medium shadow-[0_0_8px_rgba(59,25,230,0.3)] transition-all">
            <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
            All Industries
          </button>
          <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
            <span className="material-symbols-outlined text-[18px]">store</span>
            Retail
          </button>
          <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
            <span className="material-symbols-outlined text-[18px]">medical_services</span>
            Healthcare
          </button>
          <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            Finance
          </button>
          <button className="group flex items-center gap-2 h-9 px-4 rounded-full bg-[#1e1a32] border border-border-dark hover:border-primary/50 text-muted hover:text-white text-sm font-medium transition-all">
            <span className="material-symbols-outlined text-[18px]">school</span>
            Education
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 - E-Commerce */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070')`,
                }}
              ></div>
              <div className="absolute top-3 right-3 z-20">
                <span className="px-2 py-1 rounded text-xs font-bold bg-green-600 text-white backdrop-blur-sm">
                  +180% Revenue
                </span>
              </div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Premium E-Commerce Platform
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Transformed a local retailer`s business with a complete digital storefront, 
                resulting in 3x increase in online sales and expanded customer reach.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  3 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">groups</span>
                  50K+ users
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50">
                  Sales Growth
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-green-900/30 text-green-300 border border-green-800/50">
                  ROI: 280%
                </span>
              </div>
            </div>
          </article>

          {/* Project 2 - Analytics Dashboard */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')`,
                }}
              ></div>
              <div className="absolute top-3 right-3 z-20">
                <span className="px-2 py-1 rounded text-xs font-bold bg-primary text-white border border-primary/30 backdrop-blur-sm">
                  FEATURED
                </span>
              </div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Business Intelligence Dashboard
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Empowered leadership with real-time insights and automated reporting, 
                reducing decision-making time by 60% and improving operational efficiency.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  2 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  45% efficiency
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-purple-900/30 text-purple-300 border border-purple-800/50">
                  Data Insights
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-orange-900/30 text-orange-300 border border-orange-800/50">
                  Time Saved: 20hrs/wk
                </span>
              </div>
            </div>
          </article>

          {/* Project 3 - Healthcare Portal */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')`,
                }}
              ></div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Patient Management System
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Streamlined healthcare operations with a comprehensive patient portal, 
                improving patient satisfaction by 85% and reducing administrative costs.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  4 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">health_and_safety</span>
                  HIPAA Compliant
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-teal-900/30 text-teal-300 border border-teal-800/50">
                  Healthcare
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-red-900/30 text-red-300 border border-red-800/50">
                  Cost Reduction: 35%
                </span>
              </div>
            </div>
          </article>

          {/* Project 4 - Financial Platform */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070')`,
                }}
              ></div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Digital Banking Solution
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Launched a secure digital banking platform serving 10,000+ customers, 
                with 99.9% uptime and industry-leading security standards.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  6 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">security</span>
                  Bank-Level Security
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-indigo-900/30 text-indigo-300 border border-indigo-800/50">
                  FinTech
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-green-900/30 text-green-300 border border-green-800/50">
                  Zero Breaches
                </span>
              </div>
            </div>
          </article>

          {/* Project 5 - Education Platform */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')`,
                }}
              ></div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Online Learning Platform
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Created an engaging e-learning ecosystem with 500+ courses, 
                achieving 92% course completion rate and 4.8/5 student satisfaction.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  5 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                  25K+ Students
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-yellow-900/30 text-yellow-300 border border-yellow-800/50">
                  EdTech
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-blue-900/30 text-blue-300 border border-blue-800/50">
                  92% Completion
                </span>
              </div>
            </div>
          </article>

          {/* Project 6 - Marketing Automation */}
          <article className="group relative flex flex-col bg-[#1e1a32] rounded-xl overflow-hidden border border-border-dark transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070')`,
                }}
              ></div>
            </div>
            <div className="flex flex-col grow p-5 gap-3">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-light transition-colors">
                  Marketing Automation Suite
                </h3>
                <a className="text-muted hover:text-white transition-colors" href="#">
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-2">
                Implemented comprehensive marketing automation increasing lead conversion 
                by 165% and reducing customer acquisition cost by 40%.
              </p>
              <div className="flex items-center gap-4 text-xs text-muted mb-3">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  3 months
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">campaign</span>
                  5M+ Emails
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-pink-900/30 text-pink-300 border border-pink-800/50">
                  Marketing
                </span>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-green-900/30 text-green-300 border border-green-800/50">
                  CAC: -40%
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Client Testimonial Section */}
        <div className="bg-gradient-to-r from-[#1e1a32] to-[#25213d] rounded-xl p-8 border border-border-dark mt-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-anime-pink flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JD</span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-white font-bold">Jennifer Davis</h4>
                <span className="text-xs text-muted bg-primary/20 px-2 py-1 rounded">CEO, RetailCorp</span>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-muted italic">
                Working with this team transformed our business. Our online revenue tripled within 6 months, 
                and the ROI exceeded our expectations. They don`t just build websites; they build business solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-primary bg-transparent hover:bg-primary/10 text-primary hover:text-primary-light text-base font-bold font-display tracking-wider transition-all uppercase">
            View More Success Stories
            <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Page;
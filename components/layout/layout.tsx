// // "use client";
// // import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Chinonso Xavier - Fullstack Developer",
// //   description:
// //     "Portfolio showcasing the work and projects of Chinonso Xavier, a passionate frontend engineer. Explore innovative web solutions, creative designs, and a commitment to crafting exceptional digital experiences.",
// // };

// // components/layout/layout.tsx

// export default function Layout({
//   children,
//   className,
// }: Readonly<{
//   className?: string;
//   children: React.ReactNode;
// }>) {
//   return (
//     <div
//       className={`${className} bg-secondary-foreground text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden`}
//     >
//       <div className="w-full" >
//         <div className="relative flex h-auto w-full flex-col group/design-root"></div>
//         <div className="w-full" >
//           <div
//             className="absolute inset-0 z-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
//             data-alt="Anime style lo-fi city skyline at night with neon lights"
//           ></div>
//           <div className="absolute inset-0 z-0 h-full w-full bg-linear-to-b from-background-dark/90 via-background-dark/80 to-background-dark"></div>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }


// components/layout/layout.tsx
import { ReactNode } from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main
      className={`flex flex-col items-center w-full min-h-screen  bg-secondary-foreground ${className}`}
    >
      <Navbar/>
      <Sidemenu/>
      <div className="w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;
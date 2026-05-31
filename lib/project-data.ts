import cristalpoint from "../public/assets/cristalpoint.png";
import semailer from "../public/assets/semailer.png";
import evara from "../public/assets/evara.png";
import evara2 from "../public/assets/evara-2.png";
import evara3 from "../public/assets/evara-3.png";
import evara4 from "../public/assets/evara-4.png";
import { StaticImageData } from "next/image";

interface IProject {
    name:string,
    description:string,
    tools:string[],
    duration:string,
    link:string,
    image:StaticImageData[]
}

export const projects:IProject[] = [
  {
    name: "CristalPoint",
    description:
      "Designed and developed a high-converting corporate website that strengthened brand credibility, improved user engagement, and enhanced online visibility. Delivered a modern, fast, and fully responsive digital experience with strong SEO foundations.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "SEO Optimization",
    ],
    duration: "3 Weeks",
    link: "https://cristalpoint.co/",
    image: [cristalpoint],
  },

  {
    name: "Semailer",
    description:
      "Built a scalable SaaS email marketing platform that empowers businesses to automate campaigns, segment audiences, and drive higher engagement. Features include intuitive workflow builders, analytics dashboard, and enterprise-grade performance.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Email Automation",
      "API Integration",
      "Authentication",
      "Dashboard Development",
    ],
    duration: "2 Months",
    link: "http://semailer.app/",
    image: [semailer],
  },

  {
    name: "Evara",
    description:
      "Created a sleek and professional business platform that effectively showcases services, communicates value, and generates quality leads. Focused on delivering an exceptional user experience with smooth animations and optimal performance.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Performance Optimization",
      "SEO Optimization",
    ],
    duration: "4 Weeks",
    link: "https://evara-kappa.vercel.app/",
    image: [evara,evara2,evara3,evara4],
  },
];

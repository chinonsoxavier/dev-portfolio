import cristalpoint from "../public/assets/cristalpoint.png";
import semailer from "../public/assets/semailer.png";
import evara from "../public/assets/evara.png";
import evara2 from "../public/assets/evara-2.png";
import evara3 from "../public/assets/evara-3.png";
import evara4 from "../public/assets/evara-4.png";
import Netflix from "../public/assets/netflixClone.png";
import lamaEcommerce from "../public/assets/lamaEcommerce.png";
import envie from "../public/assets/envie.png";
import Karbox from "../public/assets/Karbox.png";
// import aai from '../assests/projects/aai.png';
import aai from "../public/assets/aai.png";
import airbnb from "../public/assets/airbnb.png";
import Project3 from "../public/assets/Project3.png";
import roboFriends from "../public/assets/roboFriends.png";
import socialMedia from "../public/assets/socialMedia.png";
import pdfplug from "../public/assets/pdfplug.png";
import correctbitng from "../public/assets/correctbitng.png";
import noja from "../public/assets/noja360.png";
import tesla from "../public/assets/tesla.png";
import { StaticImageData } from "next/image";

interface IProject {
  name: string;
  description: string;
  tools: string[];
  duration: string;
  link: string;
  image: StaticImageData[];
  category?: string;
  role?: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "SaaS",
  "E-Commerce",
  "Fintech",
  "Marketplace",
  "Business",
  "Corporate",
  "Creative",
  "Social",
  "Utility",
];

export const projects: IProject[] = [
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
    image: [evara, evara2, evara3, evara4],
  },
];

export const allProjects = [
  {
    name: "CristalPoint",
    category: "Corporate", // Changed from "Corporate Website"
    role: "Full Stack Developer",
    duration: "3 Weeks",
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
    link: "https://cristalpoint.co/",
    image: [cristalpoint],
    featured: true,
  },
  {
    name: "Semailer",
    category: "SaaS", // Changed from "SaaS / Marketing Technology"
    role: "Full Stack Developer",
    duration: "2 Months",
    description:
      "Built a scalable email marketing platform that enables businesses to automate campaigns, segment audiences, and track engagement through an intuitive dashboard and workflow automation system.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Email Automation",
      "Authentication",
      "Dashboard Development",
      "API Integration",
    ],
    link: "http://semailer.app/",
    image: [semailer],
    featured: true,
  },
  {
    name: "Pdf Plug",
    category: "SaaS", // Changed from "Productivity SaaS"
    role: "Frontend Developer",
    duration: "6 Weeks",
    description:
      "Built an online document management and PDF utility platform that allows users to process, manage, and interact with PDF documents through a streamlined web interface.",
    tools: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "API Integration",
      "Responsive Design",
    ],
    link: "https://pdfplug.com",
    image: [pdfplug],
  },

  {
    name: "Noja360",
    category: "SaaS", // Changed from "Business Management SaaS"
    role: "Full Stack Developer",
    duration: "3 Months",
    description:
      "Developed an all-in-one business management platform that helps SMEs manage customers, invoices, inventory, expenses, sales, and business performance through a centralized dashboard and analytics system.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Dashboard Development",
      "Business Analytics",
      "Customer Management",
      "Authentication",
      "Responsive Design",
    ],
    link: "https://noja360.com/",
    image: [noja],
    featured: true,
  },

  {
    name: "Evara",
    category: "Business", // Changed from "Business Platform"
    role: "Frontend Developer",
    duration: "4 Weeks",
    description:
      "Developed a modern business platform focused on lead generation, brand positioning, and service presentation, with emphasis on performance, accessibility, and user experience.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Performance Optimization",
      "SEO Optimization",
    ],
    link: "https://evara-kappa.vercel.app/",
    image: [evara, evara2, evara3, evara4],
    featured: true,
  },

  {
    name: "CorrectBitNG",
    category: "Fintech",
    role: "Frontend Developer",
    duration: "5 Weeks",
    description:
      "Developed a modern fintech platform focused on delivering secure digital financial services through an intuitive and mobile-friendly user experience.",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Responsive Design",
      "Authentication",
    ],
    link: "https://correctbitng.vercel.app/",
    image: [correctbitng],
  },
  {
    name: "AAI",
    category: "Creative", // Changed from "Creative Landing Page"
    role: "Frontend Developer",
    duration: "2 Weeks",
    description:
      "Designed and built an animation-focused web experience showcasing advanced scroll interactions, smooth transitions, and immersive user engagement techniques.",
    tools: ["React", "Framer Motion", "CSS Animations", "Responsive Design"],
    link: "https://aai-gold.vercel.app/",
    image: [aai],
  },
  {
    name: "Karbox",
    category: "Marketplace", // Changed from "Automotive Marketplace"
    role: "Frontend Developer",
    duration: "5 Weeks",
    description:
      "Built a vehicle marketplace platform that enables users to buy, sell, and rent vehicles while providing dealers with dedicated dashboards for inventory management, communication, and transaction tracking.",
    tools: [
      "React",
      "Redux",
      "Styled Components",
      "JavaScript",
      "Responsive Design",
    ],
    link: "",
    image: [Karbox],
  },
  {
    name: "Envie Auctions",
    category: "Marketplace", // Changed from "Auction Marketplace"
    role: "Frontend Developer",
    duration: "6 Weeks",
    description:
      "Created a live auction platform where users can place bids on products in real time, offering a responsive bidding experience and dynamic auction workflows.",
    tools: ["React", "JavaScript", "API Integration", "Responsive Design"],
    link: "",
    image: [envie],
  },
  {
    name: "Lama Ecommerce",
    category: "E-Commerce",
    role: "Frontend Developer",
    duration: "4 Weeks",
    description:
      "Developed a modern fashion-focused e-commerce experience featuring product discovery, category browsing, shopping workflows, and responsive design.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "JavaScript",
      "Responsive Design",
    ],
    link: "",
    image: [lamaEcommerce],
  },
  {
    name: "Netflix Clone",
    category: "Creative", // Changed from "Streaming Platform"
    role: "Frontend Developer",
    duration: "4 Weeks",
    description:
      "Built a movie streaming platform inspired by Netflix, featuring genre-based browsing, movie discovery, responsive layouts, and API-powered content delivery.",
    tools: [
      "React",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "REST API",
    ],
    link: "",
    image: [Netflix],
  },
  {
    name: "London Airbnb",
    category: "Marketplace", // Changed from "Travel & Hospitality"
    role: "Frontend Developer",
    duration: "3 Weeks",
    description:
      "Developed a vacation rental booking interface inspired by Airbnb, featuring modern layouts, property discovery, and responsive user experiences.",
    tools: ["React", "Styled Components", "JavaScript", "Responsive Design"],
    link: "",
    image: [airbnb],
  },

  {
    name: "Social Media UI",
    category: "Social", // Changed from "Social Networking"
    role: "Frontend Developer",
    duration: "2 Weeks",
    description:
      "Created a modern social networking interface featuring profile management, feeds, and interactive UI components inspired by contemporary social platforms.",
    tools: ["React", "Redux", "JavaScript", "Responsive Design"],
    link: "",
    image: [socialMedia],
  },
  {
    name: "Tesla Clone",
    category: "Corporate", // Changed from "Corporate Website"
    role: "Frontend Developer",
    duration: "2 Weeks",
    description:
      "Recreated Tesla's modern web experience with responsive navigation, state management, smooth interactions, and attention to detail in UI implementation.",
    tools: ["React", "Redux", "JavaScript", "Responsive Design"],
    link: "",
    image: [tesla],
  },
  {
    name: "Weather App",
    category: "Utility", // Changed from "Utility Application"
    role: "Frontend Developer",
    duration: "1 Week",
    description:
      "Built a weather forecasting application powered by real-time weather APIs, providing users with current conditions and location-based forecasts.",
    tools: ["JavaScript", "REST API", "Weather API", "Responsive Design"],
    link: "",
    image: [Project3],
  },
  {
    name: "Robo Friends",
    category: "Utility", // Changed from "Directory Application"
    role: "Frontend Developer",
    duration: "1 Week",
    description:
      "Created an interactive contact directory with dynamic search and filtering capabilities, focusing on component architecture and state management fundamentals.",
    tools: ["React", "JavaScript", "API Integration", "Responsive Design"],
    link: "",
    image: [roboFriends],
  },
];

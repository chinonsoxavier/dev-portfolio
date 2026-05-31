// lib/services-data.ts
export interface ServiceData {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubtext: string;
  badge: string;
  stats: { metric: string; label: string; icon: string }[];
  features: {
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  }[];
  process: { step: string; title: string; description: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "web-development": {
    slug: "web-development",
    title: "Business Websites",
    heroHeadline: "Modern Websites Designed to Grow Your Brand",
    heroSubtext:
      "Stand out in a crowded market with a lightning-fast, SEO-optimized web presence that converts visitors into loyal customers. Built with Next.js & Tailwind for peak performance.",
    badge: "Web Development",
    stats: [
      { metric: "99%", label: "Page Speed Score", icon: "⚡" },
      { metric: "3x", label: "More Leads", icon: "📈" },
      { metric: "100%", label: "Mobile Responsive", icon: "📱" },
      { metric: "SEO", label: "Optimized", icon: "🔍" },
    ],
    features: [
      {
        title: "Custom UI/UX Design",
        description:
          "Pixel-perfect, brand-aligned designs that captivate your audience from the first click.",
        icon: "🎨",
        benefits: [
          "Brand Alignment",
          "User Research",
          "Interactive Prototypes",
        ],
      },
      {
        title: "Speed & Performance",
        description:
          "Server-side rendered Next.js applications that load in milliseconds.",
        icon: "🚀",
        benefits: ["Core Web Vitals", "Lazy Loading", "CDN Distribution"],
      },
      {
        title: "SEO Dominance",
        description:
          "Technical SEO built into the foundation so you rank higher on Google.",
        icon: "🏆",
        benefits: ["Semantic HTML", "Meta Optimization", "Sitemap Generation"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Understanding your brand, goals, and target audience.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        description: "Crafting the visual layout and user journey.",
      },
      {
        step: "03",
        title: "Development",
        description: "Building the site with cutting-edge technology.",
      },
      {
        step: "04",
        title: "Launch & Scale",
        description: "Deploying securely and monitoring performance.",
      },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    heroHeadline: "Online Stores Built for Sales & Scalability",
    heroSubtext:
      "Transform browsers into buyers with custom e-commerce platforms designed for high conversion, seamless checkout, and massive product catalogs.",
    badge: "E-Commerce",
    stats: [
      { metric: "180%", label: "Revenue Increase", icon: "💰" },
      { metric: "< 2s", label: "Checkout Time", icon: "⏱️" },
      { metric: "50k+", label: "Products Supported", icon: "📦" },
      { metric: "99.9%", label: "Uptime", icon: "🛡️" },
    ],
    features: [
      {
        title: "High-Converting Checkout",
        description:
          "Streamlined payment flows that reduce cart abandonment and maximize completed sales.",
        icon: "🛒",
        benefits: [
          "One-Click Upsells",
          "Multiple Gateways",
          "Abandoned Cart Recovery",
        ],
      },
      {
        title: "Inventory Management",
        description:
          "Robust backend systems to track stock, variants, and fulfillment effortlessly.",
        icon: "📊",
        benefits: [
          "Real-time Tracking",
          "Auto-Restock Alerts",
          "Multi-warehouse",
        ],
      },
      {
        title: "Scalable Architecture",
        description:
          "Headless commerce solutions that handle flash sales and traffic spikes without crashing.",
        icon: "☁️",
        benefits: ["Serverless Backend", "Edge Caching", "Microservices"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Store Strategy",
        description: "Mapping the customer journey and sales funnels.",
      },
      {
        step: "02",
        title: "Platform Design",
        description: "Creating immersive product showcases.",
      },
      {
        step: "03",
        title: "Payment & Logistics",
        description: "Integrating gateways, shipping, and inventory.",
      },
      {
        step: "04",
        title: "Launch & Marketing",
        description: "Going live with analytics and promotional tools.",
      },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    heroHeadline: "Intelligent Tools That Automate Operations",
    heroSubtext:
      "Stop wasting human hours on repetitive tasks. Leverage custom AI agents and LLM integrations to automate your workflows, customer support, and data processing.",
    badge: "AI & Automation",
    stats: [
      { metric: "60%", label: "Time Saved", icon: "⏳" },
      { metric: "24/7", label: "AI Support", icon: "🤖" },
      { metric: "90%", label: "Query Resolution", icon: "✅" },
      { metric: "Zero", label: "Human Error", icon: "🎯" },
    ],
    features: [
      {
        title: "Custom AI Chatbots",
        description:
          "Train intelligent assistants on your specific business data to handle client queries instantly.",
        icon: "💬",
        benefits: ["Lead Qualification", "24/7 Support", "Multi-language"],
      },
      {
        title: "Workflow Automation",
        description:
          "Connect your apps and automate multi-step processes without writing complex code.",
        icon: "⚙️",
        benefits: ["API Integration", "Data Syncing", "Trigger-Based Actions"],
      },
      {
        title: "Data Extraction & Analysis",
        description:
          "Use AI to parse documents, extract key insights, and generate actionable reports.",
        icon: "🧠",
        benefits: ["OCR Parsing", "Sentiment Analysis", "Auto-Reporting"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Process Audit",
        description: "Identifying bottlenecks and automatable tasks.",
      },
      {
        step: "02",
        title: "AI Model Selection",
        description: "Choosing the right LLMs and tools for your needs.",
      },
      {
        step: "03",
        title: "Integration",
        description: "Building and connecting the AI into your current stack.",
      },
      {
        step: "04",
        title: "Training & Iteration",
        description: "Refining prompts and monitoring AI performance.",
      },
    ],
  },
  "custom-systems": {
    slug: "custom-systems",
    title: "Custom Business Systems",
    heroHeadline: "Dashboards, Admin Panels & Workflow Systems",
    heroSubtext:
      "Off-the-shelf software holding you back? Build custom internal tools that match your exact business logic and scale with your team.",
    badge: "Custom Systems",
    stats: [
      { metric: "40%", label: "OpEx Reduction", icon: "📉" },
      { metric: "Real-time", label: "Dashboards", icon: "📊" },
      { metric: "Role-based", label: "Access Control", icon: "🔐" },
      { metric: "100%", label: "Custom Logic", icon: "🧩" },
    ],
    features: [
      {
        title: "Admin Dashboards",
        description:
          "Centralized command centers to monitor KPIs, manage users, and oversee operations.",
        icon: "🖥️",
        benefits: ["Data Visualization", "Real-time Updates", "Custom Widgets"],
      },
      {
        title: "CRM & ERP Systems",
        description:
          "Tailored relationship and resource management systems that fit your pipeline perfectly.",
        icon: "👥",
        benefits: ["Pipeline Tracking", "Invoicing", "Resource Allocation"],
      },
      {
        title: "API Development",
        description:
          "Robust REST and GraphQL APIs to connect your internal tools and third-party services.",
        icon: "🔗",
        benefits: ["Microservices", "Webhooks", "High Security"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements Mapping",
        description: "Documenting exact business logic and user roles.",
      },
      {
        step: "02",
        title: "Database Architecture",
        description: "Designing secure, scalable data structures.",
      },
      {
        step: "03",
        title: "UI/UX & Development",
        description: "Building responsive interfaces and robust backends.",
      },
      {
        step: "04",
        title: "Deployment & Training",
        description: "Rolling out securely and training your team.",
      },
    ],
  },
  "real-estate-solutions": {
    slug: "real-estate-solutions",
    title: "Real Estate Digital Solutions",
    heroHeadline: "Web Platforms & Lead Systems for Property Businesses",
    heroSubtext:
      "From property listing portals to automated lead generation, build digital infrastructure that sells properties faster.",
    badge: "Real Estate",
    stats: [
      { metric: "3x", label: "Lead Generation", icon: "🏠" },
      { metric: "VR", label: "Virtual Tours", icon: "🥽" },
      { metric: "Auto", label: "Lead Qualification", icon: "🤖" },
      { metric: "CRM", label: "Integration", icon: "🔗" },
    ],
    features: [
      {
        title: "Property Listing Portals",
        description:
          "Beautiful, searchable directories with advanced filtering and map integrations.",
        icon: "🗺️",
        benefits: ["Interactive Maps", "Advanced Search", "Image Galleries"],
      },
      {
        title: "Lead Capture Systems",
        description:
          "Automated funnels that capture, qualify, and distribute buyer/tenant leads.",
        icon: "🧲",
        benefits: ["Instant Notifications", "CRM Sync", "Drip Campaigns"],
      },
      {
        title: "Virtual Tour Integration",
        description:
          "Embed 360-degree tours and video walkthroughs directly into your listings.",
        icon: "📹",
        benefits: ["3D Mapping", "High Engagement", "Remote Viewing"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Market Analysis",
        description: "Understanding your specific property niche and buyers.",
      },
      {
        step: "02",
        title: "Platform Design",
        description: "Designing immersive property showcases.",
      },
      {
        step: "03",
        title: "Lead System Build",
        description: "Implementing capture forms and CRM automations.",
      },
      {
        step: "04",
        title: "Launch & Marketing",
        description: "Going live and driving traffic to the listings.",
      },
    ],
  },
  "admin-systems": {
    slug: "admin-systems",
    title: "Logistics & Tracking Platforms",
    heroHeadline: "Smart Systems for Delivery & Fleet Operations",
    heroSubtext:
      "Take control of your supply chain with custom logistics platforms that offer real-time tracking, route optimization, and fleet management.",
    badge: "Logistics & Admin",
    stats: [
      { metric: "30%", label: "Faster Delivery", icon: "🚚" },
      { metric: "Live", label: "GPS Tracking", icon: "📍" },
      { metric: "Auto", label: "Dispatching", icon: "⚙️" },
      { metric: "Zero", label: "Lost Shipments", icon: "📦" },
    ],
    features: [
      {
        title: "Real-Time Tracking",
        description:
          "Live GPS tracking dashboards for fleet vehicles and individual package delivery.",
        icon: "🗺️",
        benefits: ["Geofencing", "ETA Prediction", "Status Updates"],
      },
      {
        title: "Fleet Management",
        description:
          "Oversee vehicle maintenance, driver assignments, and fuel tracking in one place.",
        icon: "🚛",
        benefits: ["Maintenance Alerts", "Driver Performance", "Route History"],
      },
      {
        title: "Automated Dispatching",
        description:
          "Smart order routing that assigns deliveries based on location, capacity, and priority.",
        icon: "📡",
        benefits: ["Rule-Based Routing", "Bulk Import", "Proof of Delivery"],
      },
    ],
    process: [
      {
        step: "01",
        title: "Operations Audit",
        description: "Mapping current logistical bottlenecks.",
      },
      {
        step: "02",
        title: "Hardware & API Setup",
        description: "Integrating GPS devices and mapping APIs.",
      },
      {
        step: "03",
        title: "Dashboard Development",
        description: "Building the control center for dispatchers.",
      },
      {
        step: "04",
        title: "Driver Onboarding",
        description: "Rolling out driver apps and training staff.",
      },
    ],
  },
};

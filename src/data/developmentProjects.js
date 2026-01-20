export const developmentProjects = [
  // =========================
  // FEATURED / STRONGEST FIRST
  // =========================

{
  id: 4,
  title: "School Management System",
  description:
    "Multi-tenant school platform for student records, attendance, fees, exams/results, and automated reporting.",
  thumbnail: "/images/systems/attendance-modal.png",
  fullImage: "/images/systems/exam-modal.png",
  url: "", // keep empty until real live link (prevents fake demo button)
  stack: ["React", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
  features: [
    "Multi-tenant (school isolation)",
    "Student & class management",
    "Attendance sessions & tracking",
    "Fees workflow + printable receipts",
    "Exams & results processing",
    "Role-based access (Admin/Teacher/Bursar)",
    "Reports & exports",
  ],
  category: "system",
  year: "2025",
  type: "School Management System",
  status: "in-progress",
  featured: true,
},

  {
    id: 1,
    title: "GlimmerInk Creations",
    description:
      "My portfolio platform showcasing real case studies, services, and contact flow for client acquisition.",
    thumbnail: "/images/GlimmerInklogo1.webp",
    fullImage: "/images/GlimmerInklogo1.webp",
    url: "https://glimmerink.netlify.app",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive UI", "Service pages", "Case study layout", "SEO-ready structure"],
    category: "web",
    year: "2023",
    type: "Portfolio Website",
  },

  {
    id: 2,
    title: "Vittorios Trades",
    description:
      "E-commerce website for cereals and grains with a product catalog and inquiry/contact flows.",
    thumbnail: "/images/websites/vittorios.webp",
    fullImage: "/images/websites/vittorios1.jpeg",
    url: "https://vittoriostrades.com/",
    stack: ["React", "Tailwind"],
    features: ["Product catalog", "Filters", "Contact/inquiry form", "Mobile-first layout"],
    category: "web",
    year: "2024",
    type: "Business Website",
  },

  {
    id: 3,
    title: "Adit Investments",
    description:
      "Computer shop & repair business site with an admin dashboard and product management features.",
    thumbnail: "/images/websites/adit-admin.png",
    fullImage: "/images/websites/adit-products.png",
    url: "https://adit-investment.netlify.app/",
    stack: ["React", "Express.js", "MongoDB", "Payment APIs"],
    features: ["Admin dashboard", "Inventory tracking", "Sales analytics", "Product CRUD"],
    category: "web",
    year: "2024",
    type: "E-commerce Website",
  },

  // =========================
  // SYSTEMS
  // =========================


  {
    id: 5,
    title: "GlimmerHope Hospital",
    description:
      "Healthcare management concept with patient records and appointment scheduling workflows.",
    thumbnail: "/images/websites/glimmerhope1.webp",
    fullImage: "/images/websites/glimmerhope1.webp",
    url: "https://glimmerhope.netlify.app/",
    stack: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    features: ["Patient records", "Appointments", "Role-based access", "Secure data flows"],
    category: "system",
    year: "2024",
    type: "Healthcare System",
    status: "demo", // removes legal risk
  },

  {
    id: 6,
    title: "Sunshine Schools",
    description:
      "School dashboard UI for performance and staff/student views (frontend build).",
    thumbnail: "/images/websites/sunshine.webp",
    fullImage: "/images/websites/sunshine.webp",
    url: "https://sunshineshools.netlify.app/",
    stack: ["React", "Tailwind CSS", "Vite"],
    features: ["Performance overview", "Teacher views", "Responsive layout"],
    category: "web",
    year: "2025",
    type: "Education Dashboard",
    status: "demo",
  },

  {
    id: 7,
    title: "Njoroge and Partners Advocates",
    description:
      "Legal practice management system concept with case tracking and client workflows.",
    thumbnail: "/images/websites/njoro.webp",
    fullImage: "/images/websites/njoro.webp",
    url: "https://njorolawfirm.netlify.app/",
    stack: ["React", "Redux", "Express", "MySQL"],
    features: ["Case management", "Document workflows", "Time tracking", "Client portal"],
    category: "system",
    year: "2025",
    type: "Legal Practice System",
    status: "demo",
  },

  // =========================
  // OPTIONAL / IF YOU KEEP IT
  // =========================
  {
    id: 8,
    title: "Premium Cars KE",
    description: "Car dealership website showcasing vehicle listings and contact inquiries.",
    thumbnail: "/images/placeholder-project.webp", // TODO: replace with real image
    fullImage: "/images/placeholder-project.webp", // TODO: replace with real image
    url: "https://premiumcarske.netlify.app/",
    stack: ["React", "Tailwind"],
    features: ["Vehicle listings", "Responsive layout", "Inquiry/contact CTA"],
    category: "web",
    year: "2025",
    type: "Business Website",
    status: "in-progress",
  },
];

export const workCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "system", label: "Business Systems" },
  // Keep app only when you actually add mobile projects
  // { id: "app", label: "Mobile Apps" },
];

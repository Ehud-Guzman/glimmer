import { useState } from "react";
import { motion } from "framer-motion";
import ServicesHero from "../components/Services/ServicesHero";
import ServiceCard from "../components/Services/ServiceCard";
import ServiceSelector from "../components/Services/ServiceSelector";
import TechStackVisualizer from "../components/Services/TechStackVisualizer";
import ProcessTimeline from "../components/Services/ProcessTimeline";
import PricingModels from "../components/Services/PricingModels";
import ServiceFAQs from "../components/Services/ServiceFAQs";
import ServicesCTASection from "../components/Services/ServicesCTASection";
import {
  Code2,
  Palette,
  Smartphone,
  ShoppingCart,
  Cloud,
  Database,
  Shield,
  Zap,
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    {
      icon: Code2,
      title: "Web Application Development",
      category: "web",
      description: "Custom web applications and SaaS platforms built with modern frameworks.",
      features: [
        "React & Next.js applications",
        "Full-stack development",
        "API integrations",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      category: "design",
      description: "User-centered designs that improve engagement and conversion.",
      features: [
        "Wireframing & prototyping",
        "Design systems",
        "User research & testing",
        "Brand integration",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      category: "web",
      description: "Scalable online stores with secure payment processing.",
      features: [
        "Custom storefronts",
        "Payment gateway integration",
        "Inventory management",
        "Analytics dashboard",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      category: "mobile",
      description: "Native and cross-platform mobile applications.",
      features: [
        "iOS & Android apps",
        "React Native & Flutter",
        "App Store deployment",
        "Push notifications",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      category: "infrastructure",
      description: "Deployment, scaling, and maintenance solutions.",
      features: [
        "AWS/Azure/GCP setup",
        "CI/CD pipelines",
        "Docker & Kubernetes",
        "Performance monitoring",
      ],
    },
    {
      icon: Database,
      title: "Backend & API Development",
      category: "web",
      description: "Robust server-side architecture and APIs.",
      features: [
        "Node.js & Python APIs",
        "Database design",
        "Microservices",
        "Authentication systems",
      ],
    },
    {
      icon: Shield,
      title: "Security & Performance",
      category: "infrastructure",
      description: "Secure and optimized applications with best practices.",
      features: [
        "Security audits",
        "Performance optimization",
        "Load testing",
        "Compliance checks",
      ],
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      category: "support",
      description: "Ongoing support and updates for your applications.",
      features: [
        "24/7 monitoring",
        "Regular updates",
        "Bug fixes",
        "Scalability planning",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "support", label: "Support" },
  ];

  const filteredServices = services.filter(
    (service) => activeTab === "all" || service.category === activeTab
  );

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (window.gtag) {
      window.gtag("event", "service_tab_click", { tab: id });
    }
  };

  const handleServiceCardClick = (title) => {
    if (window.gtag) {
      window.gtag("event", "service_card_click", { service_title: title });
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <ServicesHero />

      <ServiceSelector />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Development Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.title}
              onClick={() => handleServiceCardClick(service.title)}
            >
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              No services found in this category.
            </p>
          </motion.div>
        )}
      </section>

      <TechStackVisualizer />
      <ProcessTimeline />
      <PricingModels />
      <ServiceFAQs />
      <ServicesCTASection />
    </div>
  );
};

export default Services;

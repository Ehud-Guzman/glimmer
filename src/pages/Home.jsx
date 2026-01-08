// pages/HomePage.jsx or app/page.jsx
import { Suspense } from "react";
import HeroSection from "@/components/Home/HeroSection";
import ServicesGallery from "@/components/Home/ServicesGallery";
import ProcessSection from "@/components/Home/ProcessSection";
import CTASection from "@/components/Home/CTASection";
import ChatBotBubble from "@/components/Home/ChatBotBubble";

// Sample data for ServicesGallery (move this to a data file if preferred)
const servicesData = [
  {
    category: "Web Development",
    items: [
      {
        title: "E-commerce Platform",
        description: "Full-featured online store with payment integration",
        images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
        tags: ["React", "Node.js", "Stripe", "MongoDB"]
      },
      {
        title: "Portfolio Website",
        description: "Minimalist portfolio with CMS integration",
        images: ["/projects/portfolio-1.jpg"],
        tags: ["Next.js", "Tailwind", "Sanity CMS"]
      },
      {
        title: "SaaS Dashboard",
        description: "Analytics dashboard with real-time data",
        images: ["/projects/saas-1.jpg", "/projects/saas-2.jpg"],
        tags: ["React", "D3.js", "Firebase"]
      }
    ]
  },
  {
    category: "UI/UX Design",
    items: [
      {
        title: "Mobile Banking App",
        description: "User-friendly banking interface with dark mode",
        images: ["/projects/banking-1.jpg", "/projects/banking-2.jpg"],
        tags: ["Figma", "UI Design", "Prototyping"]
      },
      {
        title: "Travel Booking Platform",
        description: "Intuitive booking flow with map integration",
        images: ["/projects/travel-1.jpg"],
        tags: ["UX Research", "Wireframing", "UI Design"]
      }
    ]
  },
  {
    category: "Branding",
    items: [
      {
        title: "Tech Startup Identity",
        description: "Complete brand system for AI startup",
        images: ["/projects/brand-1.jpg", "/projects/brand-2.jpg"],
        tags: ["Logo", "Brand Guidelines", "Typography"]
      },
      {
        title: "Coffee Shop Branding",
        description: "Warm, inviting brand for local coffee shop",
        images: ["/projects/coffee-1.jpg"],
        tags: ["Packaging", "Merchandise", "Print Design"]
      }
    ]
  }
];

const HomePage = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors min-h-screen overflow-hidden">
      {/* Hero Section - First thing visitors see */}
      <section id="hero">
        <Suspense fallback={<div className="h-screen" />}>
          <HeroSection />
        </Suspense>
      </section>

      {/* Services Gallery - Showcase your work */}
      <section id="work" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGallery services={servicesData} />
        </div>
      </section>

      {/* Process Section - How you work */}
      <section id="process" className="bg-white dark:bg-background-dark/50">
        <ProcessSection />
      </section>

      {/* CTA Section - Final call to action */}
      <section id="contact">
        <CTASection />
      </section>

    

    
    </main>
  );
};

export default HomePage;
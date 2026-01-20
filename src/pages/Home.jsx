// pages/HomePage.jsx
import { Suspense } from "react";
import HeroSection from "@/components/Home/HeroSection";
import ServicesGallery from "@/components/Home/ServicesGallery";
import ProcessSection from "@/components/Home/ProcessSection";
import CTASection from "@/components/Home/CTASection";

const HomePage = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors min-h-screen overflow-hidden">
      {/* Hero */}
      <section id="hero">
        <Suspense fallback={<div className="h-screen" />}>
          <HeroSection />
        </Suspense>
      </section>

      {/* Featured Work (only showOnHome:true) */}
      <section id="work" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesGallery mode="home" />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-white dark:bg-background-dark/50">
        <ProcessSection />
      </section>

      {/* Contact CTA */}
      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
};

export default HomePage;

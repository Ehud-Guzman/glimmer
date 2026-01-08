import AboutHero from "../components/About/AboutHero";
import FounderSection from "../components/About/FounderSection";
import MissionValues from "../components/About/MissionValues";
import HistoryTimeline from "../components/About/HistoryTimeline";

import AboutCTASection from "../components/About/AboutCTASection";

const About = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Founder Section */}
      <FounderSection />
      
      {/* Mission & Values */}
      <MissionValues />
      
      {/* History Timeline */}
      <HistoryTimeline />
      
     
      
      {/* CTA Section */}
      <AboutCTASection />
      
      {/* Closing Statement */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 
                      border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Our Commitment to You
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            At GlimmerInk, we're more than just developers—we're problem solvers, 
            innovators, and partners in your success. We combine technical expertise 
            with creative thinking to deliver solutions that not only meet your 
            requirements but exceed your expectations.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 
                        rounded-full text-sm font-medium text-primary dark:text-primary-light">
            Let's build something amazing together
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
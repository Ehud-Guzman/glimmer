import { useState } from "react";
import { motion } from "framer-motion";
import WorkHero from "./WorkHero";
import ProjectShowcase from "./ProjectShowcase";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import FeaturedProject from "./FeaturedProject";
import ServicesOverview from "./ServicesOverview";
import DevelopmentProcess from "./DevelopmentProcess";
import TechStackSection from "./TechStackSection";
import ContactOptions from "./ContactOptions";
import CTASection from "./CTASection";
import ProjectModal from "./ProjectModal";

const WorkPage = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects
  const filteredProjects = projects
    .filter((item) => activeFilter === "all" || item.category === activeFilter)
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.stack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )
    .slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      {/* Hero Section */}
      <WorkHero />

      {/* Featured Projects Showcase */}
      <ProjectShowcase 
        projects={projects.slice(0, 3)} 
        onProjectSelect={handleProjectSelect} 
      />

      {/* All Projects Section */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Explore Our Projects
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Browse through our collection of web applications, mobile apps, and business systems
          </p>
        </div>

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ProjectGrid 
          projects={filteredProjects}
          onProjectSelect={handleProjectSelect}
        />

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={loadMore}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </section>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Development Process */}
      <DevelopmentProcess />

      {/* Tech Stack */}
      <TechStackSection />

      {/* Featured Case Study */}
      <FeaturedProject 
        project={projects[0]} 
        onViewDetails={() => handleProjectSelect(projects[0])} 
      />

      {/* Contact CTA */}
      <ContactOptions />

      {/* Final CTA */}
      <CTASection />

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default WorkPage;
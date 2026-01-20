import { useEffect, useMemo, useState } from "react";
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

const norm = (v) => String(v || "").toLowerCase();
const safeArr = (v) => (Array.isArray(v) ? v : []);

const WorkPage = ({ projects = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset pagination whenever the user changes filter or search
  useEffect(() => {
    setVisibleProjects(6);
  }, [activeFilter, searchQuery]);

  const featured = useMemo(() => {
    const explicit = projects.find((p) => p?.featured);
    return explicit || projects[0] || null;
  }, [projects]);

  const showcaseProjects = useMemo(() => {
    // Put featured first (if any), then fill the remaining slots
    const rest = projects.filter((p) => p && p !== featured);
    return [featured, ...rest].filter(Boolean).slice(0, 3);
  }, [projects, featured]);

  const filteredProjects = useMemo(() => {
    const q = norm(searchQuery);

    return projects
      .filter((p) => (activeFilter === "all" ? true : p?.category === activeFilter))
      .filter((p) => {
        if (!q) return true;

        const title = norm(p?.title);
        const desc = norm(p?.description);
        const stackHit = safeArr(p?.stack).some((t) => norm(t).includes(q));

        return title.includes(q) || desc.includes(q) || stackHit;
      })
      .slice(0, visibleProjects);
  }, [projects, activeFilter, searchQuery, visibleProjects]);

  const loadMore = () => setVisibleProjects((prev) => prev + 6);

  const handleProjectSelect = (project) => {
    if (!project) return;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <WorkHero />

      {/* Featured Projects Showcase */}
      <ProjectShowcase projects={showcaseProjects} onProjectSelect={handleProjectSelect} />

      {/* All Projects Section */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Explore Our Projects
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Browse through our collection of web applications and business systems
          </p>
        </div>

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ProjectGrid projects={filteredProjects} onProjectSelect={handleProjectSelect} />

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={loadMore}
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </section>

      <ServicesOverview />
      <DevelopmentProcess />
      <TechStackSection />

      {/* Featured Case Study */}
      {featured && (
        <FeaturedProject project={featured} onViewDetails={() => handleProjectSelect(featured)} />
      )}

      <ContactOptions />
      <CTASection />

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default WorkPage;

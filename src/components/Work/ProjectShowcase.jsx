import { motion } from "framer-motion";
import { developmentProjects } from "@/data/developmentProjects";
import SafeImage from "@/components/ui/SafeImage";

const ProjectShowcase = ({ onProjectSelect }) => {
  const featuredProjects = (developmentProjects || []).slice(0, 3);

  return (
    <section className="py-16 px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Featured Projects
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing our latest and most impactful development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-card border border-border-light dark:border-gray-700 hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-primary/5 dark:bg-primary/10">
                <SafeImage
                  src={project.thumbnail}
                  alt={project.title || "Project thumbnail"}
                  className="w-full h-full object-contain p-4"
                />
                {!!project.type && (
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                    {project.type}
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="text-xl font-semibold">{project.title || "Untitled Project"}</h3>
                  {!!project.year && (
                    <span className="text-sm text-text-muted dark:text-gray-400 whitespace-nowrap">
                      {project.year}
                    </span>
                  )}
                </div>

                {!!project.description && (
                  <p className="text-text-muted dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                )}

                {!!project.stack?.length && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={`${tech}-${idx}`}
                        className="px-3 py-1 bg-background-light dark:bg-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => onProjectSelect?.(project)}
                  className="w-full py-2.5 border border-primary text-primary dark:text-primary-light rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-sm font-medium"
                >
                  View Project Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

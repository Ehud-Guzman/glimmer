import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const FeaturedProject = ({ project, onViewDetails }) => {
  if (!project) return null;

  return (
    <section className="py-16 px-4 md:px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Featured Case Study
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            An in-depth look at one of our most impactful projects
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-border-light dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-medium">
                  {project.type}
                </span>
                <span className="text-sm text-text-muted dark:text-gray-400">{project.year}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
              
              <p className="text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-background-light dark:bg-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  onClick={onViewDetails}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Case Study
                </motion.button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border-light dark:border-gray-600 rounded-lg hover:bg-background-light dark:hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
                >
                  Live Demo <FiExternalLink />
                </a>
              </div>
            </div>
            
            <div className="bg-primary/5 dark:bg-primary/10 flex items-center justify-center p-8 lg:p-10">
              <img
                src={project.fullImage || project.thumbnail}
                alt={project.title}
                className="max-w-full max-h-[400px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectGrid = ({ projects, onProjectSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-card border border-border-light dark:border-gray-700 hover:shadow-xl transition-shadow group"
        >
          <div className="relative h-48 overflow-hidden bg-primary/5 dark:bg-primary/10">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow">
              {project.type}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-text-muted dark:text-gray-400">{project.year}</span>
            </div>
            <p className="text-text-muted dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-background-light dark:bg-gray-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="px-3 py-1 bg-background-light dark:bg-gray-700 text-xs rounded-full">
                  +{project.stack.length - 3} more
                </span>
              )}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => onProjectSelect(project)}
                className="flex-1 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
              >
                View Details
              </button>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2.5 border border-border-light dark:border-gray-700 rounded-lg hover:bg-background-light dark:hover:bg-gray-700 transition-colors"
              >
                <FiExternalLink className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
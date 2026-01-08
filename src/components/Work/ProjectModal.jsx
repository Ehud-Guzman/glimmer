import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiChevronRight } from "react-icons/fi";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-20 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-background-light dark:hover:bg-gray-600 transition-colors"
            onClick={onClose}
          >
            <FiX className="text-xl" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="bg-primary/5 dark:bg-primary/10 flex items-center justify-center p-8">
              <img
                src={project.fullImage}
                alt={project.title}
                className="max-w-full max-h-[400px] object-contain"
              />
            </div>

            <div className="p-8 overflow-y-auto">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-medium mb-3">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-muted dark:text-gray-300 mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-background-light dark:bg-gray-700 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiChevronRight className="text-primary dark:text-primary-light mt-0.5 mr-2 flex-shrink-0" />
                      <span className="dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Visit Live Project
                <FiExternalLink className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
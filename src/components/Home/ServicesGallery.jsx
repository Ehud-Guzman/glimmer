// components/Home/ServicesGallery.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiGrid, FiGithub, FiExternalLink, FiSmartphone } from "react-icons/fi";
import websiteData from "@/data/website/websitedata";

const ServicesGallery = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMasonryView, setIsMasonryView] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  const lightboxRef = useRef(null);

  const developmentData = websiteData.development;

  // Filter categories based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredCategories(developmentData.categories);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = developmentData.categories.filter(category => {
      const categoryMatch = category.name.toLowerCase().includes(query) || 
                           category.description.toLowerCase().includes(query);
      const projectMatch = category.projects.some(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
      return categoryMatch || projectMatch;
    });
    
    setFilteredCategories(filtered);
  }, [searchQuery, developmentData]);

  const openLightbox = (project, imgIndex = 0) => {
    setLightboxProject(project);
    setCurrentImageIndex(imgIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      (prevIndex + 1) % lightboxProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => 
      (prevIndex - 1 + lightboxProject.images.length) % lightboxProject.images.length
    );
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxProject) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProject]);

  // Handle swipe gestures for mobile
  const handleSwipe = (swipeDirection) => {
    if (swipeDirection === "left") nextImage();
    if (swipeDirection === "right") prevImage();
  };

  // Handle click outside lightbox to close
  const handleLightboxClick = (e) => {
    if (e.target === lightboxRef.current) {
      closeLightbox();
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {developmentData.title}
          </motion.h2>
          <motion.p
            className="text-lg text-text-light dark:text-text-dark opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {developmentData.description}
          </motion.p>
          
          {/* Search and View Controls */}
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search technologies, projects, or categories..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-text-light dark:text-text-dark placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FiX size={20} />
                </button>
              )}
            </div>
            
            {activeCategory && (
              <button 
                onClick={() => setIsMasonryView(!isMasonryView)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-colors ${
                  isMasonryView 
                    ? 'bg-primary hover:bg-primary-dark text-white' 
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-text-light dark:text-text-dark'
                }`}
              >
                <FiGrid size={18} />
                <span>{isMasonryView ? 'Grid View' : 'Masonry View'}</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Category Grid */}
        {!activeCategory && (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {filteredCategories.map((category, i) => (
              <motion.div
                key={category.id}
                className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl cursor-pointer bg-white dark:bg-gray-800"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                onClick={() => setActiveCategory(category)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.projects[0]?.images[0] || "/placeholder.webp"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg truncate">{category.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{category.projects.length} projects</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  {category.projects.length}
                </div>
                
                <div className="p-3 bg-gray-900/80 backdrop-blur-sm text-center text-gray-200 font-medium">
                  {category.name}
                </div>
              </motion.div>
            ))}
            
            {filteredCategories.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 text-xl">No results found for "{searchQuery}"</div>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-6 py-3 bg-primary hover:bg-primary-dark rounded-xl text-white font-medium transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* Expanded Category Gallery */}
        {activeCategory && (
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group"
              >
                <FiChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>All Categories</span>
              </button>

              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light text-transparent bg-clip-text">
                  {activeCategory.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{activeCategory.description}</p>
              </div>
              
              <div className="text-gray-500 dark:text-gray-400">
                {activeCategory.projects.length} projects
              </div>
            </div>

            {isMasonryView ? (
              // Masonry Layout
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                {activeCategory.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                        onClick={() => openLightbox(project)}
                      />
                      {project.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          <FiZoomIn size={14} className="mr-1" />
                          {project.images.length}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-text-light dark:text-text-dark">{project.title}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-primary dark:text-primary-light">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiGithub size={16} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.appStoreUrl && (
                          <a 
                            href={project.appStoreUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiSmartphone size={16} />
                            <span>App Store</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Grid Layout
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                        onClick={() => openLightbox(project)}
                      />
                      {project.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                          <FiZoomIn size={14} className="mr-1" />
                          {project.images.length}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-text-light dark:text-text-dark">{project.title}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-primary dark:text-primary-light">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3 mt-4">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiGithub size={16} />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.appStoreUrl && (
                          <a 
                            href={project.appStoreUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
                          >
                            <FiSmartphone size={16} />
                            <span>App Store</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleLightboxClick}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 p-2 bg-gray-800/50 rounded-full backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <FiX size={32} />
            </button>

            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-sm disabled:opacity-30"
              onClick={prevImage}
              disabled={lightboxProject.images.length <= 1}
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-sm disabled:opacity-30"
              onClick={nextImage}
              disabled={lightboxProject.images.length <= 1}
            >
              <FiChevronRight size={32} />
            </button>

            <div className="max-w-6xl w-full h-full flex flex-col">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white">{lightboxProject.title}</h3>
                <p className="text-gray-300">{currentImageIndex + 1} of {lightboxProject.images.length}</p>
              </div>
              
              <motion.div
                className="flex-1 flex items-center justify-center"
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={lightboxProject.images[currentImageIndex]}
                  alt={lightboxProject.title}
                  className="max-h-[75vh] max-w-full object-contain"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100) handleSwipe("right");
                    if (offset.x < -100) handleSwipe("left");
                  }}
                />
              </motion.div>
              
              <div className="mt-4 flex justify-center gap-2">
                {lightboxProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
                {lightboxProject.description}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesGallery;
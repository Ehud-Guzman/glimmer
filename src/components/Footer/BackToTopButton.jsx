// components/Footer/BackToTopButton.jsx
import { motion } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";

const BackToTopButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all backdrop-blur-sm z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      whileHover={{ scale: 1.1, backgroundColor: "#1D4ED8" }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <FiChevronUp size={20} />
    </motion.button>
  );
};

export default BackToTopButton;
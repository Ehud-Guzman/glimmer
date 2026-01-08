// components/Footer/LinkHoverEffect.jsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const LinkHoverEffect = ({ effect, children }) => {
  switch (effect) {
    case "scale":
      return (
        <motion.span whileHover={{ scale: 1.05 }} className="block">
          {children}
        </motion.span>
      );
    case "underline":
      return (
        <span className="relative group">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
        </span>
      );
    case "arrow":
      return (
        <span className="flex items-center gap-1 group">
          {children}
          <FiArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300" size={14} />
        </span>
      );
    case "highlight":
      return (
        <span className="relative group">
          {children}
          <span className="absolute inset-0 h-full w-0 bg-primary/10 group-hover:w-full transition-all duration-300 rounded-md"></span>
        </span>
      );
    default:
      return children;
  }
};

export default LinkHoverEffect;
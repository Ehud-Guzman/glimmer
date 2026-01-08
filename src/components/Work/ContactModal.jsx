import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "../Contact/ContactForm";
import { useEffect } from "react";

const ContactModal = ({ option, onClose }) => {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl p-6 relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X />
          </button>

          <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
          <p className="text-text-muted mb-6">{option.description}</p>

          <ContactForm type={option.id} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;

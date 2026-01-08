import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu({ isOpen, toggleMenu, theme, toggleTheme }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Full-screen overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />

          {/* Full-screen menu panel */}
          <motion.div
            className="absolute inset-0 bg-white dark:bg-gray-900 flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header with close button and theme toggle */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Navigation
              </span>
              
              <div className="flex items-center gap-4">
                {/* Theme Toggle in mobile menu */}
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                
                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100
                             dark:text-gray-400 dark:hover:bg-gray-800"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Navigation items */}
            <nav className="flex-1 flex flex-col p-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `group relative px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light"></span>
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Footer area (optional) */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                GlimmerInk Creations © {new Date().getFullYear()}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
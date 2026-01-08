import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { createPortal } from "react-dom";
import {
  loadHome,
  loadWork,
  loadServices,
  loadAbout,
  loadContact,
} from "@/utils/routePreloaders";

const navItems = [
  { name: "Home", path: "/", preload: loadHome },
  { name: "Work", path: "/work", preload: loadWork },
  { name: "Services", path: "/services", preload: loadServices },
  { name: "About", path: "/about", preload: loadAbout },
  { name: "Contact", path: "/contact", preload: loadContact },
];

export default function MobileMenu({ isOpen, toggleMenu, theme, toggleTheme }) {
  if (typeof window === "undefined") return null;

  const ui = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          aria-modal="true"
          role="dialog"
        >
          {/* FULL COVER BACKDROP (nothing beneath visible) */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.92 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={toggleMenu}
          />

          {/* Menu panel (still full screen, clean) */}
          <motion.div
            className="absolute inset-0 bg-white dark:bg-gray-900 flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Navigation
              </span>

              <div className="flex items-center gap-4">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                <button
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100
                             dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <nav className="flex-1 flex flex-col p-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onTouchStart={item.preload}
                  onMouseEnter={item.preload}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `group relative px-4 py-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary dark:text-primary-light bg-primary/10"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light" />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>

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

  // Portal = escapes Header stacking context completely
  return createPortal(ui, document.body);
}

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Light by default, respect saved preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const location = useLocation();

  /* ------------------------------
     Theme handling
  ------------------------------ */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  /* ------------------------------
     Close mobile menu on navigation
  ------------------------------ */
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  /* ------------------------------
     Scroll detection
  ------------------------------ */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const open = !isMenuOpen;
    setIsMenuOpen(open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 py-3"
          : "bg-white/95 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-800/50 py-5"
      }`}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl hidden sm:block" />
        <div className="absolute -top-10 -right-8 w-28 h-28 rounded-lg bg-primary/3 dark:bg-primary/8 blur-3xl rotate-45 hidden sm:block" />
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-44 h-20 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop navigation */}
        <DesktopNav theme={theme} toggleTheme={toggleTheme} />

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg transition-colors duration-200
                     text-gray-600 hover:text-gray-900 hover:bg-gray-100
                     dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </header>
  );
}

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
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

export default function DesktopNav({ theme, toggleTheme }) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onMouseEnter={item.preload}
          className={({ isActive }) =>
            `group relative text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-primary dark:text-primary-light font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className="relative z-10 px-2 py-1 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-gray-800/50 transition-colors duration-200">
                {item.name}
              </span>

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              ></span>

              {isActive && (
                <span className="absolute -inset-1 rounded-md bg-primary/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
            </>
          )}
        </NavLink>
      ))}

      <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-2"></div>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
}

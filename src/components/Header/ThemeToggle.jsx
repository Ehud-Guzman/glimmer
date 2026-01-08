import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative z-10 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        )}
      </div>
      
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      
      {/* Theme indicator dot */}
      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-colors duration-300 ${
        theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-400'
      }`}>
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"></div>
      </div>
      
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
    </button>
  );
}
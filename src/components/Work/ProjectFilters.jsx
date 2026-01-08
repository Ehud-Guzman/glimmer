import { FiSearch, FiX } from "react-icons/fi";
import { workCategories } from "@/data/developmentProjects";

const ProjectFilters = ({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div className="w-full md:w-auto">
        <div className="flex flex-wrap gap-2">
          {workCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === category.id
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 text-text-light dark:text-gray-300 border border-border-light dark:border-gray-700 hover:bg-background-light dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full md:w-64">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search projects or technologies..."
          className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary dark:text-gray-300 dark:placeholder-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted dark:text-gray-400"
          >
            <FiX />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
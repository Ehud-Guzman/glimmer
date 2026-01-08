import { useState } from "react";
import { motion } from "framer-motion";

// Simple Icons (safe exports)
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiPython,
} from "react-icons/si";

// AWS from Font Awesome (stable)
import { FaAws } from "react-icons/fa";

// Category icons
import { Zap, Cpu, Database, Server, Globe } from "lucide-react";

const TechStackVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: Globe },
    { id: "frontend", label: "Frontend", icon: Zap },
    { id: "backend", label: "Backend", icon: Server },
    { id: "database", label: "Database", icon: Database },
    { id: "devops", label: "DevOps", icon: Cpu },
  ];

  const technologies = [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      category: "frontend",
      description: "Component-based UI library",
      level: 95,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      category: "frontend",
      description: "React framework with SSR",
      level: 90,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      category: "frontend",
      description: "Typed JavaScript superset",
      level: 85,
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      category: "backend",
      description: "JavaScript runtime",
      level: 92,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "frontend",
      description: "Utility-first CSS framework",
      level: 88,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      category: "database",
      description: "NoSQL database",
      level: 80,
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      category: "backend",
      description: "Backend-as-a-service",
      level: 75,
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
      category: "devops",
      description: "Cloud computing platform",
      level: 82,
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      color: "#E10098",
      category: "backend",
      description: "API query language",
      level: 78,
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      category: "devops",
      description: "Container platform",
      level: 85,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      color: "#326CE5",
      category: "devops",
      description: "Container orchestration",
      level: 70,
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
      category: "backend",
      description: "Versatile programming language",
      level: 80,
    },
  ];

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We use modern, proven technologies to build scalable and maintainable
          applications.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredTech.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border
                         border-gray-200 dark:border-gray-700
                         hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: tech.color }} />
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {tech.description}
              </p>

              {/* Proficiency */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: index * 0.04 + 0.2, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackVisualizer;

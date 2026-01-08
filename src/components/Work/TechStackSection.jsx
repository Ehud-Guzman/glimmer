const TechStackSection = () => {
  const technologies = [
    { name: "React", category: "Frontend", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "Next.js", category: "Frontend", color: "bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300" },
    { name: "TypeScript", category: "Frontend", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "Node.js", category: "Backend", color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
    { name: "Express", category: "Backend", color: "bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300" },
    { name: "MongoDB", category: "Database", color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
    { name: "PostgreSQL", category: "Database", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "React Native", category: "Mobile", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "Flutter", category: "Mobile", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "AWS", category: "Cloud", color: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300" },
    { name: "Docker", category: "DevOps", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { name: "GraphQL", category: "API", color: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300" },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Technology Stack
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            Modern technologies we use to build robust and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`${tech.color} rounded-lg p-4 text-center border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/40 transition-colors`}
            >
              <div className="font-medium">{tech.name}</div>
              <div className="text-xs mt-1 opacity-75 dark:opacity-90">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
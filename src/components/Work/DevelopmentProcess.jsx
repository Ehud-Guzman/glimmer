const DevelopmentProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and defining project scope",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular progress updates",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300"
    },
    {
      number: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing and seamless deployment",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300"
    },
    {
      number: "05",
      title: "Maintenance & Support",
      description: "Ongoing support and updates",
      color: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Our Development Process
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
            A structured approach to delivering high-quality software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
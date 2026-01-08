import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube2, Rocket, Settings } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Requirements gathering and planning",
      duration: "1-2 weeks",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Wireframes, prototypes, and UI/UX design",
      duration: "2-3 weeks",
    },
    {
      icon: Code,
      title: "Development",
      description: "Agile sprints with regular updates",
      duration: "4-12 weeks",
    },
    {
      icon: TestTube2,
      title: "Testing",
      description: "QA, user testing, and optimization",
      duration: "1-2 weeks",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deployment, training, and handover",
      duration: "1 week",
    },
    {
      icon: Settings,
      title: "Support",
      description: "Maintenance, updates, and scaling",
      duration: "Ongoing",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Development Process
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A transparent, step-by-step approach to ensure project success
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 
                      bg-gradient-to-b from-primary/20 via-primary to-primary/20 
                      transform -translate-x-1/2" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 left-1/2 w-4 h-4 
                            bg-primary rounded-full transform -translate-x-1/2 
                            border-4 border-white dark:border-gray-900" />

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 
                            border border-gray-200 dark:border-gray-700 
                            h-full relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20">
                    <step.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="text-sm text-primary dark:text-primary-light font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Step {index + 1} of {steps.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
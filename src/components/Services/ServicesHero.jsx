import { motion } from "framer-motion";
import { Sparkles, Code2, Palette, Smartphone, Cloud, Zap } from "lucide-react";

const ServicesHero = () => {
  const serviceIcons = [
    { icon: Code2, label: "Web Apps" },
    { icon: Palette, label: "UI/UX" },
    { icon: Smartphone, label: "Mobile" },
    { icon: Cloud, label: "Cloud" },
    { icon: Zap, label: "DevOps" },
  ];

  return (
    <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl" />
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">
              What We Offer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
            Development Services That
            <span className="block text-primary dark:text-primary-light mt-2">
              Scale With You
            </span>
          </h1>
          
          <p className="text-lg text-text-muted dark:text-gray-300 mb-10 leading-relaxed">
            From initial concept to production deployment, we provide end-to-end 
            solutions built with modern technologies and scalable architecture.
          </p>

          {/* Animated service icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {serviceIcons.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 
                              border border-gray-200 dark:border-gray-700 
                              group-hover:border-primary/50 dark:group-hover:border-primary-light/50
                              transition-all duration-300">
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 
                                      group-hover:text-primary dark:group-hover:text-primary-light 
                                      transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg 
                       hover:bg-primary-dark dark:bg-primary-light dark:text-gray-900 
                       dark:hover:bg-primary transition-all duration-300 
                       shadow-sm hover:shadow-md"
            >
              View Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                       font-semibold rounded-lg border border-gray-300 dark:border-gray-700 
                       hover:border-primary dark:hover:border-primary-light 
                       hover:text-primary dark:hover:text-primary-light 
                       transition-all duration-300 shadow-sm"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
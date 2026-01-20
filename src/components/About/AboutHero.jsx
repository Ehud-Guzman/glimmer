import { motion } from "framer-motion";
import { Sparkles, Target, Users, Award } from "lucide-react";

const AboutHero = () => {
  const stats = [
    { icon: Target, value: "10+", label: "Projects Completed" },
   
    { icon: Award, value: "24/7", label: "Support" },
    { icon: Sparkles, value: "2025", label: "Founded" },
  ];

  return (
    <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/3 dark:bg-primary/5 blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">
              Our Story
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
            Building Digital
            <span className="block text-primary dark:text-primary-light mt-2">
              Excellence Since 2025
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            GlimmerInk was born from a vision to create seamless, intelligent, 
            and high-performing digital solutions that make a real impact. 
            We bridge the gap between robust engineering and meaningful user experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                           rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary dark:text-primary-light" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column - Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main visual */}
          <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5 
                        rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700">
              {/* Placeholder for team/office image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary-light 
                                mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">GM</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    GlimmerInk Team
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Development studio crafting exceptional digital experiences
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 p-4 bg-white dark:bg-gray-800 rounded-xl 
                        border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary-light">15+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 p-4 bg-white dark:bg-gray-800 rounded-xl 
                        border border-gray-200 dark:border-gray-700 shadow-lg"
            >
           
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
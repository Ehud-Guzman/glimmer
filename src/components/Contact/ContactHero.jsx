import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/images/background.png"
            alt="Background"
            className="w-full h-full object-cover opacity-20 dark:opacity-20"
          />
          {/* Gradient overlay */}
        
        </div>

        {/* Blur elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        {/* Animated badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light"
          />
          <span className="text-sm font-medium text-primary dark:text-primary-light">
            Let's Connect
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
          Let's Create
          <span className="block text-primary dark:text-primary-light mt-2">
            Together
          </span>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          From concept to deployment, we transform your ideas into exceptional 
          digital experiences. Share your vision and let's build something amazing.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 mb-8">
          {[
            { value: "24h", label: "Response Time" },
            { value: "50+", label: "Projects" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-xl font-bold text-primary dark:text-primary-light">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-12 h-12 opacity-20 dark:opacity-30 hidden md:block"
      >
        <div className="text-3xl font-mono text-primary dark:text-primary-light">{'</>'}</div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-10 w-12 h-12 opacity-20 dark:opacity-30 hidden md:block"
      >
        <div className="text-3xl font-mono text-primary dark:text-primary-light">{'{}'}</div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
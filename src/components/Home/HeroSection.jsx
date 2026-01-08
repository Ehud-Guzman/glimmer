// components/Home/HeroSection.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const fullText =
    "I'm a web developer turning complex problems into seamless digital experiences.";
  const typingSpeed = 40;

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTyped((prev) => prev + fullText.charAt(i));
      i++;
      if (i >= fullText.length) clearInterval(typingInterval);
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden px-4 md:px-16 lg:px-32 bg-gradient-to-br from-background-light to-white dark:from-background-dark dark:to-gray-900">
      
      {/* Left: Hero Text */}
      <motion.div
        className="w-full md:w-1/2 relative z-20 text-center md:text-left mb-8 md:mb-0 px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block text-text-light dark:text-text-dark">
            Building the future—
          </span>
          <span className="block bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-light dark:via-primary dark:to-primary-dark bg-clip-text text-transparent">
            one pixel at a time
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 text-text-light/80 dark:text-text-dark/80 max-w-2xl leading-relaxed font-mono min-h-[60px] border-l-4 border-primary pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {typed}
          <span className="animate-pulse text-primary">|</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/portfolio"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            View My Work →
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary dark:text-primary-light rounded-lg font-semibold hover:bg-primary/10 transition-all text-lg"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: "Projects", value: "15+" },
            { label: "Clients", value: "20+" },
            { label: "Experience", value: "2 years" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: Illustration/Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 px-4 md:px-8 lg:px-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-full md:max-w-md lg:max-w-lg">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary-light dark:from-primary-dark dark:to-primary rounded-2xl blur-xl opacity-20" />
          <img
            src="/images/illustration.png"
            alt="Web development illustration"
            className="relative w-full rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

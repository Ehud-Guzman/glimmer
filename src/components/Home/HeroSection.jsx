// components/Home/HeroSection.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const fullText =
    "Weeb developer building fast websites and practical web apps for businesses and schools — clean UI, solid code, mobile-first.";
  const typingSpeed = 28;

  // 🔒 Lock the first character so it never disappears
  const firstChar = fullText.charAt(0);
  const restText = fullText.slice(1);

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    setTyped("");

    const typingInterval = setInterval(() => {
      setTyped((prev) => prev + restText.charAt(i));
      i++;
      if (i >= restText.length) clearInterval(typingInterval);
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const chips = ["React", "Node.js", "Tailwind", "UI/UX", "Mobile-first"];

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center md:justify-start gap-12 md:gap-16 overflow-hidden px-4 md:px-16 lg:px-32 pt-8 md:pt-12">
      {/* Left: Hero Text */}
      <motion.div
        className="flex-1 max-w-xl md:max-w-2xl relative z-20 text-center md:text-left mb-8 md:mb-0 px-2 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block text-text-light dark:text-text-dark">
            Web & System Developer
          </span>
          <span className="block bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-light dark:via-primary dark:to-primary-dark bg-clip-text text-transparent">
            building fast websites that convert.
          </span>
        </motion.h1>

        {/* Typed description (safe, unclippable) */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 text-text-light/80 dark:text-text-dark/80 leading-relaxed min-h-[64px] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Accent bar */}
          <span className="absolute left-0 top-1 bottom-1 w-1 bg-primary rounded-full" />

          <span className="pl-4 block">
            <span className="select-none">{firstChar}</span>
            {typed}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.p>

        {/* Trust chips */}
        <motion.div
          className="mb-8 flex flex-wrap gap-2 justify-center md:justify-start"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {chips.map((chip) => (
            <span
              key={chip}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text-light/80 dark:text-text-dark/80"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/work"
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
          >
            View Work →
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary dark:text-primary-light rounded-lg font-semibold hover:bg-primary/10 transition-all text-lg"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Subtle credibility line */}
        <motion.div
          className="mt-6 text-sm text-text-light/60 dark:text-text-dark/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Available for websites, system dashboards, and clean UI upgrades.
        </motion.div>
      </motion.div>

      {/* Right: Illustration */}
      <motion.div
        className="w-full md:w-auto flex justify-center md:justify-end mb-8 md:mb-0 px-4 md:px-0"
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
            loading="eager"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

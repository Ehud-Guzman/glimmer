import { motion } from "framer-motion";
import { useState } from "react";

// ✅ Move CodeBackground outside the CTA component
const CodeBackground = () => {
  const grid = [
    {
      id: 1,
      content: `function createWebsite() {\n  return {\n    design: "modern",\n    performance: "optimized",\n    quality: "production-ready"\n  }\n}`,
      position: { top: "10%", left: "5%" },
      delay: 0.2,
    },
    {
      id: 2,
      content: `const project = {\n  name: "Your Project",\n  stack: ["React", "TypeScript", "Tailwind"],\n  status: "ready"\n}`,
      position: { top: "25%", left: "30%" },
      delay: 0.4,
    },
    {
      id: 3,
      content: `// UI Component\n<ModernCard \n  gradient="bg-gradient-to-r"\n  className="p-8"\n/>`,
      position: { top: "40%", left: "55%" },
      delay: 0.6,
    },
    {
      id: 4,
      content: `@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}`,
      position: { top: "55%", left: "80%" },
      delay: 0.8,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {grid.map((item) => (
        <motion.div
          key={item.id}
          className="absolute font-mono text-xs"
          style={{ ...item.position, color: "#71717A" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.05, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.content.split("\n").map((line, i) => (
            <div key={i} className="whitespace-pre">{line}</div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

const CTASection = () => {
  const [hovered, setHovered] = useState(false);

  const handleCTAClick = (ctaName) => {
    if (window.gtag) {
      window.gtag("event", "cta_click", { cta: ctaName });
    }
  };

  const handleHover = (ctaName) => {
    if (window.gtag) {
      window.gtag("event", "cta_hover", { cta: ctaName });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5 dark:from-primary/10 dark:via-transparent dark:to-primary-light/10" />
      
      {/* ✅ Background code effect */}
      <CodeBackground />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block text-text-light dark:text-text-dark">Ready to Build</span>
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-light dark:via-primary dark:to-primary-dark bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto text-center text-text-light/80 dark:text-text-dark/80 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's transform your vision into a{" "}
            <span className="text-primary dark:text-primary-light font-semibold">
              high-performance digital experience
            </span>{" "}
            that stands out and delivers results.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.a
              href="/contact"
              className="relative px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              onMouseEnter={() => handleHover("start_project")}
              onMouseLeave={() => setHovered(false)}
              onClick={() => handleCTAClick("start_project")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>

            <motion.a
              href="/work"
              className="px-8 py-4 border-2 border-primary text-primary dark:text-primary-light rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all"
              onMouseEnter={() => handleHover("see_examples")}
              onClick={() => handleCTAClick("see_examples")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Examples
            </motion.a>
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {["React", "NextJS", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map((tech, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-lg text-sm border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2563EB",
                  color: "white",
                  borderColor: "#2563EB",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center text-sm text-text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Response time: Within 24 hours • Free initial consultation</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

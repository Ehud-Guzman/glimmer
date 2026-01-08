import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-primary dark:bg-primary-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
          Let's discuss your project requirements and create a tailored solution
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/contact"
            className="px-8 py-3 bg-white text-primary dark:text-primary-dark rounded-lg font-medium hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
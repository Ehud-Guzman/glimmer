// components/Footer/FooterBrand.jsx
import { motion } from "framer-motion";

const hoverItem = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

const FooterBrand = ({ brand }) => {
  return (
    <motion.div className="md:col-span-4 space-y-6">
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ x: 5 }}
        transition={{ type: "spring" }}
      >
        <a href="/" className="text-3xl font-bold flex items-end">
          <motion.span
            className="text-primary"
            whileHover={{ y: -3 }}
          >
            {brand.logo.primary}
          </motion.span>
          <motion.span
            className="text-text-light dark:text-text-dark"
            whileHover={{ y: 3 }}
          >
            {brand.logo.secondary}
          </motion.span>
        </a>
        <span className="text-xs uppercase tracking-widest text-text-muted">
          {brand.logo.tagline}
        </span>
      </motion.div>

      <p className="text-lg text-text-light/80 dark:text-text-dark/80 leading-relaxed">
        {brand.description}
      </p>

      <motion.div
        className="relative group"
        initial="rest"
        whileHover="hover"
        variants={hoverItem}
      >
        <motion.a
          href={brand.cta.url}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-lg font-medium transition-all duration-300 overflow-hidden hover:bg-primary-dark"
        >
          <span className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center gap-2">
            <span className="block group-hover:hidden">{brand.cta.text}</span>
            <span className="hidden group-hover:block">{brand.cta.hoverText}</span>
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default FooterBrand;
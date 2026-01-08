// components/Footer/FooterNav.jsx
import { motion, AnimatePresence } from "framer-motion";
import LinkHoverEffect from "./LinkHoverEffect";

const FooterNav = ({ navigation, setActiveHover, activeHover }) => {
  return (
    <motion.div className="md:col-span-4 grid grid-cols-2 gap-8">
      {navigation.map((section, i) => (
        <div key={i} className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link, j) => (
              <motion.li
                key={j}
                className="relative"
                onHoverStart={() => setActiveHover(`${i}-${j}`)}
                onHoverEnd={() => setActiveHover(null)}
              >
                <a
                  href={link.url}
                  className="flex items-center text-text-light dark:text-text-dark opacity-80 hover:opacity-100 transition-all py-1"
                >
                  <LinkHoverEffect effect={link.hoverEffect}>
                    {link.name}
                  </LinkHoverEffect>
                </a>
                <AnimatePresence>
                  {activeHover === `${i}-${j}` && (
                    <motion.div
                      className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-md -z-10"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default FooterNav;
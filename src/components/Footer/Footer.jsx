// components/Footer/Footer.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import BackToTopButton from "./BackToTopButton";
import footerStructure from "@/data/footerData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Footer = () => {
  const [activeHover, setActiveHover] = useState(null);

  return (
    <motion.footer
      className="bg-white dark:bg-background-dark border-t border-border-light dark:border-border-dark relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-10]">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Grid Layout - Credits now included */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        <FooterBrand brand={footerStructure.brand} />
        <FooterNav
          navigation={footerStructure.navigation}
          activeHover={activeHover}
          setActiveHover={setActiveHover}
        />
        <FooterContact contact={footerStructure.contact} />
        
        {/* Credits - Now inside grid with full width */}
        <motion.div
          className="col-span-1 md:col-span-12 mt-8 md:mt-12 pt-8 border-t border-border-light dark:border-border-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-text-light/60 dark:text-text-dark/60">
              {footerStructure.credits.text}
            </div>
            
            <div className="flex items-center gap-4">
              {footerStructure.credits.phone && (
                <a 
                  href={`tel:${footerStructure.credits.phone.replace(/\s/g, '')}`}
                  className="text-sm text-primary dark:text-primary-light hover:opacity-80 transition-opacity"
                >
                  📞 {footerStructure.credits.phone}
                </a>
              )}
              
              {footerStructure.credits.url && (
                <a 
                  href={footerStructure.credits.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-primary-light transition-colors flex items-center gap-1"
                >
                  Visit Site
                  <span className="text-xs">↗</span>
                </a>
              )}
            </div>
          </div>
          
          <FooterLegal legal={footerStructure.legal} />
        </motion.div>
      </div>

      <BackToTopButton />
    </motion.footer>
  );
};

export default Footer;
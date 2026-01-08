import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, description, features } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 
                border border-gray-200 dark:border-gray-700 
                hover:border-primary/50 dark:hover:border-primary-light/50
                transition-all duration-300 h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
          <Icon className="w-6 h-6 text-primary dark:text-primary-light" />
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary 
                             dark:group-hover:text-primary-light transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>

      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
        <button className="text-primary dark:text-primary-light font-medium text-sm 
                          hover:underline flex items-center gap-2">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
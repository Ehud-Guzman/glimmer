import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const ContactOptions = () => {
  const [activeOption, setActiveOption] = useState(null);

  const options = [
    {
      id: "consultation",
      title: "Technical Consultation",
      description: "Free 30-minute technical consultation for your project",
      action: "Schedule Call",
      icon: "💬",
    },
    {
      id: "proposal",
      title: "Project Proposal",
      description: "Detailed project proposal with timeline and cost estimate",
      action: "Request Proposal",
      icon: "📋",
    },
    {
      id: "sprint",
      title: "Development Sprint",
      description: "Start with a 2-week development sprint",
      action: "Start Sprint",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Choose how you'd like to begin our collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border shadow-card"
            >
              <div className="text-3xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
              <p className="text-text-muted mb-6">{option.description}</p>

              <button
                onClick={() => setActiveOption(option)}
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
              >
                {option.action}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {activeOption && (
        <ContactModal
          option={activeOption}
          onClose={() => setActiveOption(null)}
        />
      )}
    </section>
  );
};

export default ContactOptions;

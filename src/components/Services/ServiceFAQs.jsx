import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const ServiceFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Timelines vary based on project complexity. A small website takes 2-4 weeks, medium web applications 6-12 weeks, and large-scale projects 3-6 months. We provide detailed timelines after the discovery phase.",
    },
    {
      question: "How do you handle project management and communication?",
      answer: "We use agile methodologies with tools like Jira and Trello. You'll get weekly updates, access to a project dashboard, and regular check-in calls. We're available via email, Slack, or scheduled meetings.",
    },
    {
      question: "What's included in post-launch support?",
      answer: "Our support packages include bug fixes, security updates, performance monitoring, and minor feature enhancements. We offer 30 days of free support after launch, with optional monthly retainers for ongoing maintenance.",
    },
    {
      question: "Do you provide hosting and maintenance services?",
      answer: "Yes, we offer managed hosting on AWS, DigitalOcean, or your preferred provider. Our maintenance plans include server management, security updates, backups, and 24/7 monitoring.",
    },
    {
      question: "Can you work with existing codebases or systems?",
      answer: "Absolutely. We can audit, refactor, or extend existing applications. We work with legacy systems and integrate new features while maintaining compatibility.",
    },
    {
      question: "What's your payment structure?",
      answer: "We offer flexible options: fixed-price for defined scopes, time & materials for evolving projects, or monthly retainers for ongoing work. Typically, we require 30% upfront, 40% at milestone, and 30% upon completion.",
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "We follow best practices: code reviews, automated testing, security audits, and CI/CD pipelines. All code is documented and we use industry-standard security measures including SSL, encryption, and regular vulnerability scans.",
    },
    {
      question: "What if I need to make changes during development?",
      answer: "We handle changes through our agile process. Minor adjustments are included, while significant scope changes are discussed and estimated separately to ensure transparency and avoid timeline disruptions.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full">
          <HelpCircle className="w-4 h-4 text-primary dark:text-primary-light" />
          <span className="text-sm font-medium text-primary dark:text-primary-light">
            Common Questions
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Get answers to common questions about our development process and services
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={false}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 ml-4"
              >
                <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Didn't find what you're looking for?
        </p>
        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300">
          Ask a Question
        </button>
      </div>
    </section>
  );
};

export default ServiceFAQs;
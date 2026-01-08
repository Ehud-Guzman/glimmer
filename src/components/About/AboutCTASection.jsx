import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, FileText } from "lucide-react";

const AboutCTASection = () => {
  const actions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "30-minute free consultation with our team",
      button: "Book Now",
      href: "#",
      primary: true,
    },
    {
      icon: MessageSquare,
      title: "Chat with Us",
      description: "Get quick answers to your questions",
      button: "Start Chat",
      href: "#",
    },
    {
      icon: FileText,
      title: "View Our Work",
      description: "See examples of our development projects",
      button: "Portfolio",
      href: "/work",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 
                    rounded-3xl p-8 md:p-12 border border-primary/20 dark:border-primary/30">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss how GlimmerInk can help bring your vision to life with 
            precision engineering and exceptional design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  action.primary
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className={`p-3 rounded-xl w-fit mb-4 ${
                  action.primary
                    ? "bg-white/20"
                    : "bg-primary/10 dark:bg-primary/20"
                }`}>
                  <Icon className={`w-6 h-6 ${
                    action.primary
                      ? "text-white"
                      : "text-primary dark:text-primary-light"
                  }`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  action.primary ? "text-white" : "text-gray-900 dark:text-white"
                }`}>
                  {action.title}
                </h3>
                
                <p className={`mb-6 text-sm ${
                  action.primary ? "text-white/80" : "text-gray-600 dark:text-gray-300"
                }`}>
                  {action.description}
                </p>
                
                <a
                  href={action.href}
                  className={`inline-flex items-center gap-2 font-medium ${
                    action.primary
                      ? "text-white hover:text-white/90"
                      : "text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary-light/90"
                  }`}
                >
                  {action.button}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-primary/20 dark:border-primary/30">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Email
              </div>
              <a href="nyamuehud@gmail.com" className="text-gray-900 dark:text-white 
                                                               hover:text-primary dark:hover:text-primary-light">
                nyamuehud@gmail.com
              </a>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Location
              </div>
              <div className="text-gray-900 dark:text-white">
                Remote · Worldwide
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                Response Time
              </div>
              <div className="text-gray-900 dark:text-white">
                Within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Note */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 italic">
          "We believe in building partnerships, not just projects. Every client relationship 
          is an opportunity to create something exceptional together."
        </p>
        <p className="mt-4 font-medium text-gray-900 dark:text-white">
          — The GlimmerInk Team
        </p>
      </div>
    </section>
  );
};

export default AboutCTASection;
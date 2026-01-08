import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare, Phone, ArrowRight } from "lucide-react";

const ServicesCTASection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      action: "Send Message",
      href: "mailto:nyamuehud@gmail.com",
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "30-minute free consultation",
      action: "Schedule Now",
      href: "#",
      primary: true,
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Talk to us instantly",
      action: "Start Chat",
      href: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri, 9AM-6PM EST",
      action: "(555) 123-4567",
      href: "tel:+15551234567",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build Something
            <span className="block text-primary dark:text-primary-light mt-2">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            Whether you have a clear vision or just an idea, we'll help you bring it to life. 
            Share your project details and get a personalized plan.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">24h</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Confidential</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">Free</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Consultation</div>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3">
            {[
              "No-pressure consultation",
              "Detailed project estimate",
              "Transparent pricing",
              "Flexible engagement models",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary dark:bg-primary-light" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  method.primary
                    ? "bg-primary text-white border-primary"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary/50"
                }`}
              >
                <div className={`p-3 rounded-xl w-fit mb-4 ${
                  method.primary
                    ? "bg-white/20"
                    : "bg-primary/10 dark:bg-primary/20"
                }`}>
                  <Icon className={`w-6 h-6 ${
                    method.primary
                      ? "text-white"
                      : "text-primary dark:text-primary-light"
                  }`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  method.primary ? "text-white" : "text-gray-900 dark:text-white"
                }`}>
                  {method.title}
                </h3>
                
                <p className={`mb-4 text-sm ${
                  method.primary ? "text-white/80" : "text-gray-600 dark:text-gray-300"
                }`}>
                  {method.description}
                </p>
                
                <div className={`flex items-center gap-2 text-sm font-medium ${
                  method.primary ? "text-white" : "text-primary dark:text-primary-light"
                }`}>
                  {method.action}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Prefer to share details about your project first?
        </p>
        <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                         font-semibold rounded-lg border border-gray-300 dark:border-gray-700 
                         hover:border-primary dark:hover:border-primary-light 
                         hover:text-primary dark:hover:text-primary-light 
                         transition-all duration-300 flex items-center gap-2 mx-auto">
          <Mail className="w-4 h-4" />
          Send Project Brief
        </button>
      </div>
    </section>
  );
};

export default ServicesCTASection;
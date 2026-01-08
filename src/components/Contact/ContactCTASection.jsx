import { motion } from "framer-motion";
import { Calendar, MessageSquare, Phone } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-2xl p-8 border border-primary/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose how you'd like to connect with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <motion.a
            href="#"
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
              <Calendar className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Schedule a Call
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              30-minute free consultation
            </p>
          </motion.a>

          <motion.a
            href="mailto:nyamuehud@gmail.com"
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
              <MessageSquare className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Send Email
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Detailed project inquiry
            </p>
          </motion.a>

          <motion.a
            href="tel:+254746527253"
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
              <Phone className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Call Directly
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Quick questions & support
            </p>
          </motion.a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>100+ Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Star component for rating
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default ContactCTASection;
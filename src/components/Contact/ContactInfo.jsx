import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Freelance", "Nairobi, Kenya"],
      color: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 746 527 253", "Mon-Fri, 8am-5pm EAT"],
      color: "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400",
      action: { label: "Call Now", href: "tel:+254746527253" },
    },
    {
      icon: Mail,
      title: "Email",
      details: ["nyamuehud@gmail.com", "Response within 24h"],
      color: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400",
      action: { label: "Send Email", href: "mailto:nyamuehud@gmail.com" },
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday", "8:00 AM - 5:00 PM EAT"],
      color: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "bg-blue-600/10 dark:bg-blue-600/20 hover:bg-blue-600/20 dark:hover:bg-blue-600/30 text-blue-600 dark:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Glimmerink_",
      color: "bg-sky-500/10 dark:bg-sky-500/20 hover:bg-sky-500/20 dark:hover:bg-sky-500/30 text-sky-600 dark:text-sky-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ehud_guzman/profilecard/?igsh=ZGx0Znk2aWRjMzVh",
      color: "bg-pink-500/10 dark:bg-pink-500/20 hover:bg-pink-500/20 dark:hover:bg-pink-500/30 text-pink-600 dark:text-pink-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Get in touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${detail.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {detail.title}
                    </h3>
                    {detail.details.map((line, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-300">
                        {line}
                      </p>
                    ))}
                    {detail.action && (
                      <a
                        href={detail.action.href}
                        className="inline-block mt-3 text-sm font-medium text-primary dark:text-primary-light hover:underline"
                      >
                        {detail.action.label}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
          Connect with us
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 ${social.color}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-xl p-5 border border-primary/20">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
          Need immediate assistance?
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          For urgent inquiries, call us directly or send a WhatsApp message.
        </p>
        <a
          href="https://wa.me/254746527253"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          WhatsApp Chat
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
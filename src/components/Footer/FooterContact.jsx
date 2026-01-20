// components/Footer/FooterContact.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FooterContact = ({ contact }) => {
  const [copied, setCopied] = useState(false);

  const title = contact?.title || "Get in touch";
  const methods = Array.isArray(contact?.methods) ? contact.methods : [];
  const social = Array.isArray(contact?.social) ? contact.social : [];

  const handleCopy = (text, label) => {
    try {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no crash if clipboard fails
    }
  };

  return (
    <motion.div className="md:col-span-4 space-y-8">
      {/* Contact Methods */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
          {title}
        </h3>

        <ul className="space-y-3">
          {methods.map((method, i) => {
            const Icon = method?.icon;

            return (
              <motion.li
                key={`${method?.text || "method"}-${i}`}
                className="flex items-center text-text-light dark:text-text-dark opacity-80 hover:opacity-100 transition-opacity group cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() =>
                  method?.copyable
                    ? handleCopy(method?.text || "", (method?.text || "").split("@")[0] || "Copied")
                    : method?.action?.()
                }
              >
                <span className={`mr-3 text-text-muted ${method?.hoverColor || ""} transition-colors`}>
                  {Icon ? <Icon className="text-lg" /> : null}
                </span>

                <span className="hover:text-primary transition-colors flex items-center gap-2">
                  {method?.text || ""}
                  <span className="text-xs opacity-0 group-hover:opacity-70 transition-opacity">
                    {method?.copyable ? "⎘" : "→"}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>

        {/* Copy Feedback */}
        <AnimatePresence>
          {copied && (
            <motion.div
              className="text-sm text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {copied} copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
          Follow Us
        </h3>

        <div className="flex flex-wrap gap-3">
          {social
            .filter((s) => s?.url && s.url !== "#")
            .map((s, i) => {
              const SocialIcon = s?.icon;

              return (
                <motion.a
                  key={`${s?.label || "social"}-${i}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s?.label || "Social"}
                  className={`p-2.5 rounded-lg text-white transition-all relative overflow-hidden ${s?.bgHover || "bg-primary"}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {SocialIcon ? <SocialIcon className="text-base" /> : null}
                  </span>
                  <span className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default FooterContact;

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader, User, Mail, Phone, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = ({ preset = null }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS config from env (Vite)
  const emailJsConfig = useMemo(() => {
    return {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    };
  }, []);

  /* =========================
     Apply CTA preset (if any)
  ========================== */
  useEffect(() => {
    if (!preset) return;

    setFormData((prev) => ({
      ...prev,
      service: preset.service || "",
      subject: preset.subject || "",
    }));

    if (window.gtag && preset?.service) {
      window.gtag("event", "contact_intent", {
        intent: preset.service,
        source: "cta_button",
      });
    }
  }, [preset]);

  /* =========================
     Auto-clear alerts
  ========================== */
  useEffect(() => {
    if (!submitStatus) return;
    const timer = setTimeout(() => setSubmitStatus(null), 7000);
    return () => clearTimeout(timer);
  }, [submitStatus]);

  /* =========================
     Handlers
  ========================== */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const name = formData.from_name.trim();
    const email = formData.from_email.trim();
    const msg = formData.message.trim();

    if (!name) newErrors.from_name = "Name is required";
    if (!email) newErrors.from_email = "Email is required";
    else if (!EMAIL_RE.test(email)) newErrors.from_email = "Enter a valid email";
    if (!msg) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const trackSubmit = (status) => {
    if (!window.gtag) return;
    window.gtag("event", "form_submit", {
      form_name: "ContactForm",
      status,
      service: formData.service || "none",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const { serviceId, templateId, publicKey } = emailJsConfig;

    // Hard fail with a helpful message if env vars are missing
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS env vars. Check .env configuration.");
      setSubmitStatus({
        type: "error",
        message: "Form is not configured yet. Please contact via email/WhatsApp.",
      });
      trackSubmit("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send using the controlled values (no need for sendForm)
      const payload = {
        from_name: formData.from_name.trim(),
        from_email: formData.from_email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        service: formData.service,
        message: formData.message.trim(),
      };

      await emailjs.send(serviceId, templateId, payload, { publicKey });

      setSubmitStatus({
        type: "success",
        message: "Thank you! We’ll respond within 24 hours.",
      });

      trackSubmit("success");

      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);

      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });

      trackSubmit("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================
     Styles
  ========================== */
  const inputClass =
    "w-full pl-10 pr-4 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary-light/20";

  const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Let’s talk about your project
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Share a few details and we’ll take it from there.
        </p>
      </div>

      {/* Status */}
      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg border ${
            submitStatus.type === "success"
              ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
          }`}
          role="status"
          aria-live="polite"
        >
          {submitStatus.message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name + Email */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="from_name">
              Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="from_name"
                name="from_name"
                type="text"
                value={formData.from_name}
                onChange={handleChange}
                className={`${inputClass} ${errors.from_name ? errorClass : ""}`}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            {errors.from_name && (
              <p className="text-sm text-red-500 mt-1">{errors.from_name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="from_email">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="from_email"
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                className={`${inputClass} ${errors.from_email ? errorClass : ""}`}
                placeholder="you@email.com"
                autoComplete="email"
                inputMode="email"
                required
              />
            </div>
            {errors.from_email && (
              <p className="text-sm text-red-500 mt-1">{errors.from_email}</p>
            )}
          </div>
        </div>

        {/* Phone + Service */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
                placeholder="+254 700 000 000"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="service">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              disabled={!!preset}
              onChange={handleChange}
              className={`${inputClass} ${preset ? "opacity-80 cursor-not-allowed" : ""}`}
            >
              <option value="">Select a service</option>
              <option value="consulting">Consulting</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="ui-ux">UI / UX Design</option>
              <option value="development-sprint">Development Sprint</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="Project inquiry"
            autoComplete="off"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none ${errors.message ? errorClass : ""}`}
              placeholder="Tell us about your project…"
              required
            />
          </div>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;

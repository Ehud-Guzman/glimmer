import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactTestimonials from "../components/Contact/ContactTestimonials";
import ContactCTASection from "../components/Contact/ContactCTASection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Main Contact Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <ContactTestimonials />
      
      {/* CTA Section */}
      <ContactCTASection />
      
      {/* Quick Response Note */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Response Guarantee
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            We typically respond to all inquiries within 24 hours.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            For urgent matters, call us directly at{" "}
            <a href="tel:+254746527253" className="text-primary dark:text-primary-light font-medium">
              +254 746 527 253
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
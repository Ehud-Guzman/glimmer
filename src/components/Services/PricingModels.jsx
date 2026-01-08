import { motion } from "framer-motion";
import { Check, X, Zap, TrendingUp, Target } from "lucide-react";

const PricingModels = () => {
  const models = [
    {
      name: "Project-Based",
      icon: Target,
      description: "Fixed scope & clear delivery",
      price: "From KES 20,000",
      features: [
        "Clearly defined project scope",
        "Agreed delivery timeline",
        "Milestone-based payments",
        "Quality assurance testing",
        "One round of revisions",
        "30 days post-launch support",
      ],
      notIncluded: [
        "Major scope changes",
        "Ongoing maintenance",
        "New feature additions",
      ],
      bestFor: "Websites & systems with clear requirements",
    },
    {
      name: "Retainer",
      icon: TrendingUp,
      description: "Ongoing development & support",
      price: "From KES 30,000 / month",
      features: [
        "Monthly development hours",
        "Priority support",
        "Bug fixes & improvements",
        "Security & performance updates",
        "Flexible feature adjustments",
        "Monthly strategy check-ins",
      ],
      notIncluded: [
        "Large system builds",
        "Complete redesigns",
        "24/7 support",
      ],
      bestFor: "Growing businesses & platforms",
      popular: true,
    },
    {
      name: "Hourly",
      icon: Zap,
      description: "Flexible, pay-as-you-go",
      price: "KES 2,000 – 4,000 / hour",
      features: [
        "No long-term commitment",
        "Transparent time tracking",
        "Quick fixes & consultations",
        "Audits & debugging",
        "Weekly summaries",
      ],
      notIncluded: [
        "Guaranteed availability",
        "Project management",
        "Long-term planning",
      ],
      bestFor: "Small tasks & consultations",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Pricing Models
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Simple, transparent pricing tailored for Kenyan businesses
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {models.map((model, index) => {
          const Icon = model.icon;

          return (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 bg-white dark:bg-gray-800 border-2 ${
                model.popular
                  ? "border-primary shadow-xl"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {model.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold bg-primary text-white rounded-full">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {model.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {model.price}
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-3">
                    <Check className="w-4 h-4 text-green-500" /> Included
                  </h4>
                  <ul className="space-y-2">
                    {model.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-semibold mb-3">
                    <X className="w-4 h-4 text-gray-400" /> Not Included
                  </h4>
                  <ul className="space-y-2">
                    {model.notIncluded.map((n, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-500">
                        <X className="w-4 h-4 mt-0.5" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">Best for:</span> {model.bestFor}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingModels;

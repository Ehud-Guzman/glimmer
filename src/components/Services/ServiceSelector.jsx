import { useState } from "react";
import { Check, ArrowRight, Calculator } from "lucide-react";

const ServiceSelector = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [budget, setBudget] = useState("starter");

  const services = [
    {
      id: "static",
      label: "Website (Frontend Only)",
      description: "Static business or portfolio website",
      basePrice: 20000,
      timeline: 2,
    },
    {
      id: "fullstack",
      label: "Website (Frontend + Backend)",
      description: "Dynamic site with forms, CMS or admin panel",
      basePrice: 30000,
      timeline: 3,
    },
    {
      id: "saas",
      label: "SaaS MVP",
      description: "Core features to validate your idea",
      basePrice: 50000,
      timeline: 5,
    },
    {
      id: "saas-pro",
      label: "SaaS Pro",
      description: "Advanced SaaS with scaling in mind",
      basePrice: 80000,
      timeline: 7,
    },
    {
      id: "mobile",
      label: "Mobile App",
      description: "Android / cross-platform mobile app",
      basePrice: 50000,
      timeline: 6,
    },
    {
      id: "system",
      label: "Custom System",
      description: "School, business or internal management system",
      basePrice: 50000,
      timeline: 6,
    },
  ];

  const features = [
    { id: "auth", label: "User Authentication", price: 5000 },
    { id: "payment", label: "Payments (M-Pesa / Cards)", price: 7000 },
    { id: "admin", label: "Admin Dashboard", price: 6000 },
    { id: "api", label: "Third-party API Integration", price: 5000 },
    { id: "realtime", label: "Real-time Features", price: 7000 },
    { id: "analytics", label: "Analytics Dashboard", price: 4000 },
    { id: "multilang", label: "Multi-language Support", price: 3000 },
    { id: "responsive", label: "Advanced Responsiveness", price: 3000 },
  ];

  const budgetRanges = [
    { id: "starter", label: "KES 20K – 50K", description: "Starter / MVP" },
    { id: "growth", label: "KES 50K – 100K", description: "Growing product" },
    { id: "pro", label: "KES 100K+", description: "Advanced system" },
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const estimateCost = () => {
    if (!selectedService) return 0;

    const base = selectedService.basePrice;
    const extras = selectedFeatures.reduce((sum, id) => {
      const feature = features.find((f) => f.id === id);
      return sum + (feature?.price || 0);
    }, 0);

    return base + extras;
  };

  const estimateTimeline = () => {
    if (!selectedService) return 0;
    return selectedService.timeline + Math.ceil(selectedFeatures.length * 0.5);
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
          <Calculator className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Project Cost Estimator
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Estimate Your Project
        </h2>
        <p className="text-gray-600">
          Straightforward pricing. No agency games.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Type</h3>
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-xl border transition ${
                  selectedService?.id === service.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{service.label}</span>
                  {selectedService?.id === service.id && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
                <p className="text-sm font-semibold mt-1">
                  From KES {service.basePrice.toLocaleString()}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* FEATURES + BUDGET */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Optional Features</h3>
          <div className="space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => toggleFeature(feature.id)}
                className={`w-full text-left p-3 rounded-lg border transition ${
                  selectedFeatures.includes(feature.id)
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{feature.label}</span>
                  <span className="text-sm text-gray-500">
                    +KES {feature.price.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Your Budget</h3>
            <div className="space-y-2">
              {budgetRanges.map((range) => (
                <label
                  key={range.id}
                  className="flex items-center p-3 border rounded-lg cursor-pointer"
                >
                  <input
                    type="radio"
                    name="budget"
                    checked={budget === range.id}
                    onChange={() => setBudget(range.id)}
                    className="mr-3"
                  />
                  <div>
                    <div className="font-medium">{range.label}</div>
                    <div className="text-sm text-gray-600">
                      {range.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ESTIMATE */}
        <div>
          <div className="sticky top-8 bg-white rounded-2xl p-6 border shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Estimated Cost</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-primary">
                  {estimateTimeline()}
                </div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-xl font-bold text-primary">
                  KES {estimateCost().toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Estimated</div>
              </div>
            </div>

            <button className="w-full py-3 bg-primary text-white font-semibold rounded-lg flex items-center justify-center gap-2">
              Get Detailed Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Prices are indicative and may adjust with scope and complexity.
      </p>
    </section>
  );
};

export default ServiceSelector;

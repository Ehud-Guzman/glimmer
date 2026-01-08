import { motion } from "framer-motion";
import { Calendar, Code, Rocket, Users, Star, TrendingUp } from "lucide-react";

const HistoryTimeline = () => {
  const milestones = [
    {
      year: "2025",
      quarter: "Q1",
      title: "Foundation",
      description: "GlimmerInk founded by Ehud Mwai with a focus on premium web development.",
      icon: Calendar,
      highlight: true,
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "First Major Project",
      description: "Successfully delivered a complex SaaS platform for a fintech startup.",
      icon: Code,
    },
    {
      year: "2025",
      quarter: "Q4",
      title: "Team Expansion",
      description: "Expanded to a full-stack development team with specialized expertise.",
      icon: Users,
    },
    {
      year: "2026",
      quarter: "Q1",
      title: "Mobile Division",
      description: "Launched mobile app development services with React Native expertise.",
      icon: Rocket,
    },
    {
      year: "2026",
      quarter: "Q3",
      title: "Quality Recognition",
      description: "Achieved 100% client satisfaction rating across all projects.",
      icon: Star,
      highlight: true,
    },
    {
      year: "Present",
      quarter: "Now",
      title: "Growth Phase",
      description: "Helping 30+ businesses build, optimize, and scale their digital presence.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Journey
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From a single developer to a trusted development studio
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 
                      bg-gradient-to-b from-primary/20 via-primary to-primary/20 
                      transform -translate-x-1/2" />

        <div className="space-y-8 lg:space-y-0">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={`${milestone.year}-${milestone.quarter}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  isLeft ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 w-4 h-4 bg-primary rounded-full 
                              border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 
                                border border-gray-200 dark:border-gray-700 
                                ${milestone.highlight ? 'border-primary/50 dark:border-primary-light/50' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          milestone.highlight 
                            ? 'bg-primary/10 dark:bg-primary/20' 
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            milestone.highlight 
                              ? 'text-primary dark:text-primary-light' 
                              : 'text-gray-600 dark:text-gray-300'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {milestone.year}
                            </span>
                            {milestone.highlight && (
                              <span className="px-2 py-0.5 bg-primary/10 dark:bg-primary/20 
                                             text-primary dark:text-primary-light text-xs rounded-full">
                                Milestone
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {milestone.quarter}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Where We Are Today
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Today, GlimmerInk has evolved into a development-first studio specializing in 
            web applications, mobile apps, automation, and interactive systems. We continue 
            to bridge the gap between robust engineering and meaningful user experiences, 
            ensuring that every solution we deliver doesn't just look good—it works brilliantly.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HistoryTimeline;
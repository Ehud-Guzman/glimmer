import { motion } from "framer-motion";
import { Target, Zap, Users, Heart, Shield, Rocket } from "lucide-react";

const MissionValues = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code is written with attention to detail and purpose.",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "We build fast, scalable systems that handle growth effortlessly.",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work with you, not just for you, building lasting relationships.",
      color: "text-purple-500",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Everything we build is designed with the end-user in mind.",
      color: "text-pink-500",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent quality and dependable support for every project.",
      color: "text-amber-500",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Staying ahead with modern technologies and creative solutions.",
      color: "text-red-500",
    },
  ];

  const mission = "To develop seamless, intelligent, and high-performing digital solutions that make an impact.";
  const vision = "To be the go-to development studio for businesses seeking exceptional digital experiences that drive growth.";

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Mission & Values
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The principles that guide everything we build
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 
                    rounded-2xl p-8 border border-primary/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
              <Target className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {mission}
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 
                    rounded-2xl p-8 border border-primary/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20">
              <Rocket className="w-6 h-6 text-primary dark:text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {vision}
          </p>
        </motion.div>
      </div>

      {/* Values Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 
                        border border-gray-200 dark:border-gray-700 
                        hover:border-primary/50 dark:hover:border-primary-light/50
                        transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${value.color.replace('text-', 'bg-')}/10`}>
                  <Icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Our Development Philosophy
        </h3>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            At GlimmerInk, we believe that great software isn't just about features—it's about 
            creating experiences that feel intuitive, perform flawlessly, and grow with your business. 
            We combine technical excellence with creative problem-solving to deliver solutions 
            that don't just meet requirements, but exceed expectations.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionValues;
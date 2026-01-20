import { motion } from "framer-motion";
import { Code2, Sparkles, Cpu, Globe, Database, Smartphone } from 'lucide-react';

const WorkHero = () => {
  const technologies = [
    "React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
    "Firebase", "MongoDB", "AWS", "GraphQL", "Python"
  ];

  return (
    <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 dark:bg-secondary/10 blur-3xl" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                             linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">
              Web Development Studio
            </span>
          </div>

       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
  We Build Digital
  <span className="block text-primary mt-2">
    Experiences That Convert
  </span>
</h1>

 

          <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
            From concept to deployment, we create scalable web applications, 
            high-performance mobile apps, and robust business systems using 
            modern technologies and clean architecture principles.
          </p>

       {/* Stats */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
    <div className="text-2xl font-bold text-primary">Client-first</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Build Approach</div>
  </div>
  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
    <div className="text-2xl font-bold text-primary">Fast</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Delivery Cycles</div>
  </div>
  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
    <div className="text-2xl font-bold text-primary">Clean</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">UI & UX</div>
  </div>
  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
    <div className="text-2xl font-bold text-primary">Scalable</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">Systems</div>
  </div>
</div>


          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="px-3 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                         border border-gray-200 dark:border-gray-700 rounded-full text-sm
                         hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Code Editor Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Code Editor Window */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl 
                        border border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
            
            {/* Editor Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 font-mono text-sm ml-3">portfolio.jsx</span>
              </div>
              <div className="flex items-center gap-4">
                <Code2 className="w-4 h-4 text-gray-500" />
                <Cpu className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-gray-500 mb-4">
                <span className="text-purple-400">import</span> 
                <span className="text-gray-300"> {`{ Portfolio, Project, TechStack }`} </span>
                <span className="text-purple-400">from</span> 
                <span className="text-yellow-300"> 'glimmerink'</span>
              </div>
              
              <div className="text-gray-500 mb-4">
                <span className="text-purple-400">export default function</span>
                <span className="text-blue-400"> OurWork</span>
                <span className="text-gray-300">() {`{`}</span>
              </div>
              
              <div className="ml-4 space-y-3">
                <div>
                  <span className="text-blue-400">return</span>
                  <span className="text-gray-300"> (</span>
                </div>
                
                <div className="ml-4">
                  <span className="text-gray-300">{`<`}</span>
                  <span className="text-green-400">Portfolio</span>
                  <span className="text-gray-400"> className=</span>
                  <span className="text-yellow-300">"max-w-7xl"</span>
                  <span className="text-gray-300">{`>`}</span>
                </div>
                
                <div className="ml-8 space-y-2">
                  <div>
                    <span className="text-gray-300">{`<`}</span>
                    <span className="text-green-400">Project</span>
                    <span className="text-gray-400"> title=</span>
                    <span className="text-yellow-300">"E-Commerce Platform"</span>
                    <span className="text-gray-400"> tech=</span>
                    <span className="text-yellow-300">"[Next.js, Stripe]"</span>
                    <span className="text-gray-300"> /{`>`}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-300">{`<`}</span>
                    <span className="text-green-400">Project</span>
                    <span className="text-gray-400"> title=</span>
                    <span className="text-yellow-300">"SaaS Dashboard"</span>
                    <span className="text-gray-400"> tech=</span>
                    <span className="text-yellow-300">"[React, GraphQL]"</span>
                    <span className="text-gray-300"> /{`>`}</span>
                  </div>
                  
                  <div>
                    <span className="text-gray-300">{`<`}</span>
                    <span className="text-green-400">TechStack</span>
                    <span className="text-gray-400"> items=</span>
                    <span className="text-yellow-300">"[React, Node, AWS]"</span>
                    <span className="text-gray-300"> /{`>`}</span>
                  </div>
                </div>
                
                <div className="ml-4">
                  <span className="text-gray-300">{`</`}</span>
                  <span className="text-green-400">Portfolio</span>
                  <span className="text-gray-300">{`>`}</span>
                </div>
              </div>
              
              <div className="text-gray-300">{`}`}</div>
            </div>

            {/* Editor Status Bar */}
            <div className="px-6 py-3 bg-gray-950 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Database className="w-3 h-3" />
                  <span>Connected</span>
                </span>
                <span>•</span>
                <span>UTF-8</span>
                <span>•</span>
                <span>JavaScript React</span>
              </div>
              <div>
                <span className="text-green-400">✓ All checks passed</span>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <Globe className="w-6 h-6 text-primary" />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 -left-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <Smartphone className="w-6 h-6 text-secondary" />
          </motion.div>
        </motion.div>
      </div>

  
    </section>
  );
};

export default WorkHero;
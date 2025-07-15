import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', icon: '⚙️', category: 'DevOps' },
    { name: 'GraphQL', icon: '📊', category: 'API' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Next.js', icon: '▲', category: 'Framework' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'Flutter', icon: '🦋', category: 'Mobile' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Firebase', icon: '🔥', category: 'Backend' },
    { name: 'Tailwind', icon: '🎨', category: 'Styling' },
    { name: 'Figma', icon: '🎯', category: 'Design' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your business needs and requirements',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating detailed project roadmap and architecture',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Crafting beautiful and intuitive user experiences',
      icon: '🎨'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Building robust and scalable solutions',
      icon: '⚡'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Ensuring quality through comprehensive testing',
      icon: '🧪'
    },
    {
      step: '06',
      title: 'Deployment',
      description: 'Launching your solution to production',
      icon: '🚀'
    }
  ];

  useEffect(() => {
    if (scrollRef.current && isInView) {
      const scrollContainer = scrollRef.current;
      
      gsap.to(scrollContainer, {
        x: -(scrollContainer.scrollWidth - scrollContainer.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, [isInView]);

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-navy-900 to-navy-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We use cutting-edge technologies to build scalable and performant solutions
          </p>
        </motion.div>

        {/* Horizontal Scrolling Tech Stack */}
        <div className="mb-20">
          <div
            ref={scrollRef}
            className="flex gap-8 w-max"
            style={{ width: 'max-content' }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="glass-card min-w-[200px] p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                  {tech.name}
                </h3>
                <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-orbitron font-bold text-center gradient-text mb-12">
            Our Development Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 relative group hover:scale-105 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-navy-950 font-orbitron font-bold">
                  {step.step}
                </div>
                
                <div className="text-4xl mb-4 group-hover:animate-pulse">
                  {step.icon}
                </div>
                
                <h4 className="text-xl font-orbitron font-bold text-white mb-3">
                  {step.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card max-w-4xl mx-auto p-8">
            <h3 className="text-3xl font-orbitron font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and see how our expertise can help you achieve your goals
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-navy-950 px-8 py-4 rounded-full font-semibold btn-glow hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
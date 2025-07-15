import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Companies that can help you in{' '}
            <button className="inline-flex items-center gap-2 text-white/60 border border-white/20 px-4 py-2 rounded-full text-lg hover:bg-white/5 transition-all duration-200">
              Show More
              <ArrowRight size={16} />
            </button>
            <br />
            <span className="text-white/60">developing your company for the future</span>
          </h2>
          
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Help you to build amazing company that can develop your company for the future
            with great UX and Clean design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-light mb-8">
            Let's work together
            <br />
            <span className="text-white/60">with our us</span>
          </h3>
          
          <p className="text-white/70 mb-8 max-w-xl">
            Help you to build amazing company that can develop your company for the future
            with great UX and Clean design
          </p>
          
          <button className="btn-primary">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
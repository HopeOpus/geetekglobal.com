import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  const ref = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (marqueeRef.current && isInView) {
      const marqueeText = marqueeRef.current;
      
      gsap.to(marqueeText, {
        x: '-100%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }
  }, [isInView]);

  const marqueeItems = [
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'UI/UX Design',
    'Corporate Branding',
    'Software Development',
    'E-commerce Solutions',
    'Cloud Services'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-[length:200%_200%]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-primary to-accent animate-gradient bg-[length:200%_200%]"></div>
      </div>

      {/* Marquee Text */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 whitespace-nowrap opacity-5 pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex items-center gap-8 text-6xl font-orbitron font-bold text-white"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="flex items-center gap-8">
              {item}
              <Zap className="w-12 h-12" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Lottie-style animated icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-pulse-glow">
              <Zap className="w-12 h-12 text-navy-950 animate-bounce" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-orbitron font-bold mb-6"
          >
            <span className="gradient-text">Ready to Transform</span>
            <br />
            <span className="text-white">Your Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Join hundreds of satisfied clients who have transformed their businesses 
            with our innovative technology solutions. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-primary to-accent text-navy-950 px-10 py-5 rounded-full font-bold text-lg btn-glow hover:scale-110 transition-all duration-300 flex items-center"
            >
              Start Your Project Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-navy-900"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium">Join 50+ happy clients</div>
                <div className="text-xs text-gray-400">⭐⭐⭐⭐⭐ 4.9/5 rating</div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                500+
              </div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                98%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                5+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
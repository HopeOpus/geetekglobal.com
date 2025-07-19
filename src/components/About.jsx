import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { ArrowRight } from 'lucide-react';
import TiltedCard from './annimations/TiledCard';

const About = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });

  // Animated counters
  const yearsSpring = useSpring({
    number: isAboutInView ? 5 : 0,
    config: { duration: 2000 }
  });

  const projectsSpring = useSpring({
    number: isAboutInView ? 500 : 0,
    config: { duration: 2000 }
  });

  const clientsSpring = useSpring({
    number: isAboutInView ? 150 : 0,
    config: { duration: 2000 }
  });

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
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

          {/* Animated Counters */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <animated.div className="text-4xl font-orbitron font-bold gradient-text mb-2">
                {yearsSpring.number.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <animated.div className="text-4xl font-orbitron font-bold gradient-text mb-2">
                {projectsSpring.number.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <animated.div className="text-4xl font-orbitron font-bold gradient-text mb-2">
                {clientsSpring.number.to(n => `${Math.floor(n)}+`)}
              </animated.div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
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
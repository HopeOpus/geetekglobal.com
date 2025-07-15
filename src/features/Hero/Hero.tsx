import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-200"
            >
              <span className="text-sm">📱</span>
            </a>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
        >
          Amazing website creation
          <br />
          <span className="text-white/60">with Geetek agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Help you to build amazing company that can develop your company for the future
          with great UX and Clean design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            to="/contact"
            className="btn-primary flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>

          <button className="btn-outline flex items-center gap-2">
            <Play size={16} />
            Watch Demo
          </button>
        </motion.div>

        {/* Loading Circle Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 w-24 h-24 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-light text-white">0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
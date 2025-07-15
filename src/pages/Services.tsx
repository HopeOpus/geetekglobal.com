import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Geetek Global</title>
        <meta name="description" content="Explore our comprehensive range of technology services including software development, digital marketing, and corporate branding." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Detailed services page content will be implemented here with comprehensive 
              service descriptions, pricing, and case studies.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Geetek Global</title>
        <meta name="description" content="View our portfolio of successful projects and case studies showcasing our expertise in technology solutions." />
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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Portfolio page with project galleries, case studies, and client testimonials 
              will be implemented here.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
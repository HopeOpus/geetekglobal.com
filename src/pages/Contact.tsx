import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Geetek Global</title>
        <meta name="description" content="Get in touch with Geetek Global for your technology needs. Contact us for quotes, consultations, and project discussions." />
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact page with multi-step form, office locations, and contact 
              information will be implemented here.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
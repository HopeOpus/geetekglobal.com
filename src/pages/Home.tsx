import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Components
import Hero from '../features/Hero/Hero';
import About from '../features/About/About';
import Services from '../features/Services/Services';
import Portfolio from '../features/Portfolio/Portfolio';
import Testimonials from '../features/Testimonials/Testimonials';
import ContactForm from '../features/Contact/ContactForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Geetek Global - Amazing Website Creation Agency</title>
        <meta 
          name="description" 
          content="Amazing website creation with Geetek agency. Help you to build amazing company that can develop your company for the future with great UX and Clean design." 
        />
        <meta name="keywords" content="website development, UI/UX design, digital marketing, branding, web agency" />
        <meta property="og:title" content="Geetek Global - Amazing Website Creation Agency" />
        <meta property="og:description" content="Amazing website creation with Geetek agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geetekglobal.com" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </motion.div>
    </>
  );
};

export default Home;
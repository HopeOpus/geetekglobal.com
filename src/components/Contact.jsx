import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's work with Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            We are here to help you build amazing company that can develop your company for the future with great UX and Clean Development.
          </p>
          <a
            href="https://wa.me/qr/Z7CRMVWRGRYRJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Us Today
          </a>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 opacity-60"
        >
          {['Microsoft', 'Geetek Global', 'Whatsapp', 'Google', 'Mailchimp', 'Google', 'Geetek Global'].map((company, index) => (
            <div key={index} className="text-white/40 font-medium">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
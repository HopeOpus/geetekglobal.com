import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Angeline',
      role: 'UI/UX Designer',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Alex Janny',
      role: 'CEO',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Christa Jany',
      role: 'Product Manager',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Samuel Ainy',
      role: 'Developer',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Priska Ika Tangkudung',
      role: 'Designer',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Robert Saminggi',
      role: 'Manager',
      company: 'Mangcoding',
      content: 'Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section ref={ref} className="py-20 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            What they say about us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here is list of best includes Web Design, User Experience, Branding
            and Shopify Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-white/70 text-sm leading-relaxed">
                {testimonial.content}
              </p>

              <Quote className="w-6 h-6 text-white/20 mt-4 ml-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
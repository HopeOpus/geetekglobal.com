import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { ArrowRight, Play, Menu, X, Star, Quote } from 'lucide-react';
import './index.css';

// Particle Background Component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 255, ${particle.opacity})`;
        ctx.fill();

        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 176, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-bg"
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
    />
  );
};

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  // In-view hooks
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: '-100px' });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: '-100px' });
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' });

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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Services data
  const services = [
    {
      title: 'Website Dev',
      description: 'Help you to build amazing company that can develop your company for the future with great UX and Clean design',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20',
      number: '01'
    },
    {
      title: 'UI/UX Design',
      description: 'Help you to build amazing company that can develop your company for the future with great UX and Clean design',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-400/20 to-pink-500/20',
      number: '02'
    },
    {
      title: 'Branding',
      description: 'Help you to build amazing company that can develop your company for the future with great UX and Clean design',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-br from-gray-400/20 to-gray-600/20',
      number: '03'
    },
    {
      title: 'Digital Marketing',
      description: 'Help you to build amazing company that can develop your company for the future with great UX and Clean design',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20',
      number: '04'
    }
  ];

  // Portfolio projects
  const projects = [
    {
      title: 'MStore',
      description: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      category: 'E-commerce'
    },
    {
      title: 'Beauty',
      description: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      category: 'Beauty & Wellness'
    },
    {
      title: 'Jual',
      description: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      category: 'Marketplace'
    },
    {
      title: 'MangStore',
      description: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      category: 'E-commerce'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Angeline',
      role: 'UI/UX Designer',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Alex Janny',
      role: 'CEO',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Christa Jany',
      role: 'Product Manager',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Samuel Ainy',
      role: 'Developer',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Priska Ika Tangkudung',
      role: 'Designer',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      name: 'Robert Saminggi',
      role: 'Manager',
      company: 'Geetek Global',
      content: 'Geetek Global is a biggest company in Indonesia, who provides the services in Development Website, Shopify and App Development',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
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
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-white">Geetek</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href="#contact"
                className="btn-primary"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass backdrop-blur-md"
          >
            <div className="px-6 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center btn-primary mt-4"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
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
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={16} />
            </a>

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

      {/* About Section */}
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

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300`}
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xs font-medium">{service.number}</span>
                </div>
                
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <div className={`w-6 h-6 rounded bg-gradient-to-r ${service.color}`}></div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <button className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200">
                  Start project
                  <ArrowRight size={14} />
                </button>

                {/* Mock UI Preview */}
                <div className="mt-8 relative">
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                      <div className="h-2 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light">
              Our Product
            </h2>
            <button className="btn-outline">
              View More
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 mb-16 max-w-2xl"
          >
            Help you to build amazing company that can develop your company for the future
            with great UX and Clean design
          </motion.p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isPortfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                {/* Project Preview */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-32 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white/80">{project.title}</span>
                  </div>
                  
                  <div className="text-xs text-white/60 mb-2">{project.category}</div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
                    Start project
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
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
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Contact Section */}
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
              Geetek Global is a biggest company in Indonesia, who provides the services in
              Development Website, Shopify and App Development
            </p>
            <button className="btn-primary">
              Work Now
            </button>
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

      {/* Footer */}
      <footer className="bg-[#0A0A0F] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-bold text-white">Geetek</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Geetek Global are you developing your
                business for the future with great UX
                and Clean design
              </p>
              <div className="text-xs text-white/40">
                © 2024 Geetek Global. All rights reserved.
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Branding</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              </ul>
            </div>

            {/* Business Features */}
            <div>
              <h4 className="text-white font-semibold mb-6">Business Features</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Dual-Speed Carbon Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multi-File Saving</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automated Reporting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sales & Customer Service Smart Agents</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <div className="space-y-3 text-sm text-white/60 mb-8">
                <div><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Terms of Service</a></div>
                <div><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/20 transition-all duration-200"
                  >
                    <span className="text-xs">📱</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
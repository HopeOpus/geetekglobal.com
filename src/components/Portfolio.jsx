import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Olaike Cooperative Management App',
      description: 'Geetek Global built a comprehensive cooperative management app for Olaike, enhancing their operational efficiency and member engagement.',
      category: 'Finance',
      image: './assets/olaike.png',
      link: 'https://olaikecoop.com.ng/' 
    },
    {
      title: 'GroceX (UK)',
      description: 'Geetek Global developed GroceX, a cutting-edge e-commerce platform that revolutionizes grocery shopping with its user-friendly interface and seamless online experience.',
      category: 'Beauty & Wellness',
      image: './assets/groce.jpg',
      link: 'https://grocex.co.uk/' 
    },
    {
      title: 'Project Clothe A Child (USA)',
      description: 'Geetek Global created a charitable platform for Clothe A Child, enabling them to efficiently manage donations and support underprivileged children.',
      category: 'Marketplace',
      image: './assets/cac.png',
      link: 'https://clothe-a-child.kinibeenergy.com/' 
    },
    {
      title: 'BrandForgeX',
      description: 'Geetek Global built a powerful brand management platform for BrandForgeX, streamlining their branding efforts and enhancing customer engagement.',
      category: 'E-commerce',
      image: './assets/bx.png',
      link: 'https://www.brandforgex.com/' 
    },
     {
      title: 'Eidinburg Wellness Management (EWM)',
      description: 'Geetek Global built a comprehensive wellness management platform for EWM, enhancing their operational efficiency and member engagement.',
      category: 'Beauty & Wellness',
      image: './assets/ewm.png',
      link: 'https://olaike.example.com' 
    },
    {
      title: 'Torwood',
      description: 'Geetek Global built a comprehensive platform for Torwood, enhancing their operational efficiency and member engagement.',
      category: 'Marketplace',
      image: './assets/torwood.png',
      link: 'https://olaike.example.com' 
    },
    {
      title: 'EasyCoop Cooperative Management App',
      description: 'Geetek Global built a comprehensive cooperative management app for EasyCoop, enhancing their operational efficiency and member engagement.',
      category: 'Finance',
      image: './assets/easycoop.png',
      link: 'http://easycoopng.com/' 
    },
    {
      title: 'PouchApp',
      description: 'Geetek Global built a comprehensive e-commerce platform for PouchApp, enhancing their operational efficiency and member engagement.',
      category: 'E-commerce',
      image: './assets/pouch.png',
      link: 'https://getpouch.africa/' 
    }
  ];

  return (
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
            Our Portfolio
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
                
                <div className="rounded-lg h-[202px] flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                    />
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
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                    >
                      See project
                      <ArrowRight size={14} />
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
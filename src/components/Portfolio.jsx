import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: '-100px' });

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
  );
};

export default Portfolio;
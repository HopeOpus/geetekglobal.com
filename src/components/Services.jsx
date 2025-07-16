import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });

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

  return (
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
  );
};

export default Services;
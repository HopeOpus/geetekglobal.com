import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import RotatingText from './annimations/rotatingText.jsx';
import Aurora from './annimations/Aurora.jsx';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E]">
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none z-0">
        <Aurora 
          colorStops={["#00B0FF", "#F7FF00", "#001E3C"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
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
          className="flex justify-center space-x-3 mt-8 sm:mt-0 mb-12"
        >
          <a
            href="https://facebook.com/geetekglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition-all duration-200"
            aria-label="Facebook"
          >
            <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z"/></svg>
          </a>
          <a
            href="https://instagram.com/geetekglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition-all duration-200"
            aria-label="Instagram"
          >
            <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.385 3.678 1.366c-.981.981-1.235 2.093-1.294 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.313 2.393 1.294 3.374.981.981 2.093 1.235 3.374 1.294C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.313 3.374-1.294.981-.981 1.235-2.093 1.294-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.313-2.393-1.294-3.374-.981-.981-2.093-1.235-3.374-1.294C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/company/100009367/admin/page-posts/published/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.143.926-2.07 2.07-2.07s2.07.927 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.272V1.723C24 .771 23.2 0 22.225 0z"/></svg>
          </a>
          <a
            href="https://youtube.com/@geetekglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition-all duration-200"
            aria-label="YouTube"
          >
            <svg width="18" height="18" className="sm:w-[20px] sm:h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.36 3.5 12 3.5 12 3.5s-7.36 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.213 0 12 0 12s0 3.787.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.64 20.5 12 20.5 12 20.5s7.36 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.787 24 12 24 12s0-3.787-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
        >
          Get the best
          <br />
          <RotatingText
            texts={['Mobile App', 'Digital Marketing', 'Branding', 'Web Development']}
            mainClassName=" TXT px-2 sm:px-2 md:px-3  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
          <span className="text-white/60">with Geetek Global</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Here at Geetek Global, we specialize in creating stunning websites and mobile applications that elevate your brand and engage your audience. 
          Our team of experts is dedicated to delivering innovative solutions tailored to your unique needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="https://wa.me/qr/Z7CRMVWRGRYRJ1"
            className="btn-primary flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={16} />
          </a>

          <button
            className="btn-outline flex items-center gap-2"
            onClick={() => setShowVideo(true)}
          >
            <Play size={16} />
            Watch Demo
          </button>
        </motion.div>
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative bg-black rounded-lg shadow-lg p-4 max-w-2xl w-full">
              <button
                className="absolute top-2 right-2 text-white text-xl"
                onClick={() => setShowVideo(false)}
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-16">
                <iframe
                  width="100%"
                  height="900px"
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100089356900969%2Fvideos%2F764689685113094%2F&show_text=false&width=560&t=0"
                  title="Facebook video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Loading Circle Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
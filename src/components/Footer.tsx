import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
              © 2024 Mangcoding. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Business Features */}
          <div>
            <h4 className="text-white font-semibold mb-6">Business Features</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="#" className="hover:text-white transition-colors">Dual-Speed Carbon Tracking</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Multi-File Saving</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Automated Reporting</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sales & Customer Service Smart Agents</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="space-y-3 text-sm text-white/60 mb-8">
              <div><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></div>
              <div><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></div>
              <div><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></div>
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
  );
};

export default Footer;
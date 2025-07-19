const Footer = () => {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="./assets/logo.png" alt="Logo" className="w-7 h-15" />
              <span className="text-white text-lg font-semibold">Geetek Global</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Geetek Global your trusted partner for innovative digital solutions.
              We specialize in web development, mobile app development, and digital marketing to help your business thrive
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
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400">Get updates on new products, authentic recipes, and special offers.</p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md flex relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-gray-800 text-white px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-primary border border-gray-700 transition-all placeholder-gray-500"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark text-white p-2 px-6 rounded-full transition-colors flex items-center justify-center shadow-lg">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 bg-white p-3 rounded-2xl border border-white">
              <img src="/assets/images/logo.png" alt="Radhavansh Logo" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Experience the authentic taste of Indian heritage. We cultivate, process, and deliver premium quality authentic spices directly from our farms to your table.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:-translate-y-1 transition-all shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-secondary rounded-full"></span> Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Our Story</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Shop Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-primary rounded-full"></span> Categories
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shop?category=spices" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Premium Spices</Link></li>
              <li><Link to="/shop?category=grains" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Healthy Grains</Link></li>
              <li><Link to="/shop?category=oils" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Cold Pressed Oils</Link></li>
              <li><Link to="/shop?category=pulses" className="text-gray-400 hover:text-secondary flex items-center gap-2 hover:translate-x-2 transition-transform duration-300"><span className="text-xs text-gray-600">❯</span> Organic Pulses</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-secondary rounded-full"></span> Contact Info
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-primary flex items-center justify-center shrink-0 text-gray-400 group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-200 transition-colors">123 Agro Park, Industrial Area, City, India</p>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-primary flex items-center justify-center shrink-0 text-gray-400 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <p className="text-gray-400 text-sm mt-2.5 group-hover:text-gray-200 transition-colors">+91 98765 43210</p>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-primary flex items-center justify-center shrink-0 text-gray-400 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <p className="text-gray-400 text-sm mt-2.5 group-hover:text-gray-200 transition-colors">info@radhavansh.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-gray-950 py-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Radhavansh Masale (Shree Radha Food Agro). All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

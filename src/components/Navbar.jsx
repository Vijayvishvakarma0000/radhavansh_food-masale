import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Leaf, User, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
            <img src="/assets/images/logo.png" alt="Radhavansh Logo" className="h-10 md:h-14 w-auto object-contain" />
          </Link>
          
          <nav className="hidden lg:flex gap-10 items-center">
            <Link to="/" className={`font-semibold transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Home</Link>
            <Link to="/shop" className={`font-semibold transition-colors ${location.pathname === '/shop' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Shop</Link>
            <Link to="/about" className={`font-semibold transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Our Story</Link>
            <Link to="/contact" className={`font-semibold transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Contact</Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button className="p-2 md:p-2.5 text-gray-700 hover:text-primary hover:bg-primary-light rounded-full transition-colors" aria-label="Search">
              <Search size={20} className="md:w-[22px] md:h-[22px]" />
            </button>
            <button className="hidden sm:block p-2 md:p-2.5 text-gray-700 hover:text-primary hover:bg-primary-light rounded-full transition-colors" aria-label="Account">
              <User size={20} className="md:w-[22px] md:h-[22px]" />
            </button>
            <button className="hidden md:flex items-center gap-1.5 md:gap-2 bg-primary text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" aria-label="Cart">
              <ShoppingCart size={18} className="md:w-[20px] md:h-[20px]" />
              <span className="font-bold text-sm md:text-base border-l border-white/30 pl-1.5 md:pl-2">0</span>
            </button>
            
            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary hover:bg-primary-light rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img src="/assets/images/logo.png" alt="Radhavansh Logo" className="h-10 w-auto object-contain" />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 flex flex-col gap-1.5">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold transition-all ${
                location.pathname === '/' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <span>Home</span>
              <ChevronRight size={18} className={location.pathname === '/' ? 'text-primary' : 'text-gray-400'} />
            </Link>

            <Link 
              to="/shop" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold transition-all ${
                location.pathname === '/shop' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <span>Shop Products</span>
              <ChevronRight size={18} className={location.pathname === '/shop' ? 'text-primary' : 'text-gray-400'} />
            </Link>

            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold transition-all ${
                location.pathname === '/about' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <span>Our Story</span>
              <ChevronRight size={18} className={location.pathname === '/about' ? 'text-primary' : 'text-gray-400'} />
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold transition-all ${
                location.pathname === '/contact' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight size={18} className={location.pathname === '/contact' ? 'text-primary' : 'text-gray-400'} />
            </Link>
          </div>
        </div>

        {/* Drawer Footer Info */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-2.5 mb-2">
            <Leaf className="text-primary shrink-0" size={18} />
            <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">100% Pure & Authentic</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Shree Radha Food Agro — Shuddh Masale, Swasth Jeevan.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

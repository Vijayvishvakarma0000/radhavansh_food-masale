import { Home, ShoppingBag, ShoppingCart, BookOpen, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 flex justify-around items-center py-1.5 z-40 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <Link to="/" className={`flex flex-col items-center p-1.5 transition-colors ${path === '/' ? 'text-primary font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
        <Home size={22} className={path === '/' ? 'fill-primary/20' : ''} />
        <span className="text-[10px] mt-0.5">Home</span>
      </Link>
      <Link to="/shop" className={`flex flex-col items-center p-1.5 transition-colors ${path === '/shop' ? 'text-primary font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
        <ShoppingBag size={22} className={path === '/shop' ? 'fill-primary/20' : ''} />
        <span className="text-[10px] mt-0.5">Shop</span>
      </Link>
      <Link to="/about" className={`flex flex-col items-center p-1.5 transition-colors ${path === '/about' ? 'text-primary font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
        <BookOpen size={22} className={path === '/about' ? 'fill-primary/20' : ''} />
        <span className="text-[10px] mt-0.5">Our Story</span>
      </Link>
      <Link to="/contact" className={`flex flex-col items-center p-1.5 transition-colors ${path === '/contact' ? 'text-primary font-bold' : 'text-gray-400 hover:text-gray-600'}`}>
        <Phone size={22} className={path === '/contact' ? 'fill-primary/20' : ''} />
        <span className="text-[10px] mt-0.5">Contact</span>
      </Link>
      <button className="flex flex-col items-center p-1.5 text-gray-400 hover:text-gray-600 relative" aria-label="Shopping Cart">
        <ShoppingCart size={22} />
        <span className="absolute top-0.5 right-1 bg-secondary text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white">0</span>
        <span className="text-[10px] mt-0.5">Cart</span>
      </button>
    </div>
  );
};

export default MobileNav;

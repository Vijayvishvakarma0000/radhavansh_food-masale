import React, { useState } from 'react';
import { Star, ShoppingCart, Check } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1.5 group flex flex-col h-full">
      {/* Product Image Area */}
      <div className={`relative h-64 sm:h-72 overflow-hidden ${product.bgColor || 'bg-[#fdfaf7]'} flex items-center justify-center p-3`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105" 
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3.5 left-3.5 ${product.badgeColor || 'bg-primary'} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm`}>
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Product Information Area */}
      <div className="p-5 flex flex-col flex-1 relative bg-white">
        {/* Floating Cart Button */}
        <button 
          onClick={handleAddToCart}
          className={`absolute -top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md z-20 cursor-pointer ${
            added 
              ? 'bg-emerald-600 text-white scale-105' 
              : 'bg-primary text-white hover:bg-primary-dark hover:scale-110 shadow-[0_4px_12px_rgba(138,28,28,0.25)]'
          }`}
          title={added ? "Added to Cart" : "Add to Cart"}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? <Check size={18} className="animate-bounce" /> : <ShoppingCart size={17} />}
        </button>

        {/* Category */}
        <span className="text-secondary text-[11px] font-bold uppercase tracking-wider mb-1 block">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-2.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={13} 
              className={i < product.rating ? "text-secondary fill-secondary" : "text-gray-200 fill-gray-200"} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1.5 font-medium">({product.reviews})</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-end justify-between">
          <div className="flex flex-col">
            <div className="text-xl font-black text-gray-900 flex items-baseline gap-2">
              ₹{product.price.toFixed(2)}
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-xs font-semibold">
                  ₹{product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
            In Stock
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

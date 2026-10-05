import { useState } from 'react';
import { Search } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const CATEGORIES = ['All', 'Dehydrated Powders', 'Pure Spices', 'Spices & Herbs', 'Superfoods'];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-primary-dark py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 font-serif">Our Natural & Pure Products</h1>
          <p className="text-primary-light text-lg md:text-xl max-w-2xl mx-auto">
            100% natural, farm-fresh spices and vegetable powders carefully processed to preserve original aroma, taste, and nutrition.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 flex flex-col gap-8 w-full">
        {/* Search and Category Filter Bar */}
        <div className="flex flex-col gap-5 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl w-full sm:w-96 border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Search size={20} className="text-gray-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Search by name, spice, powder..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-gray-900 placeholder:text-gray-400 font-medium text-sm"
              />
            </div>
            <div className="text-gray-500 font-semibold text-sm sm:text-right">
              Showing <span className="text-primary font-bold">{filteredProducts.length}</span> authentic products
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-red-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
                We couldn't find any products matching your search "{searchQuery}". Try searching for ginger, onion, garlic, or clear your filters.
              </p>
              <button 
                className="btn-primary text-sm px-6 py-2.5"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;


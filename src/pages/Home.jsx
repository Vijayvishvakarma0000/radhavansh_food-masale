import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, Leaf, Truck, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const heroSlides = [
  {
    id: 1,
    title: "From Our Farms",
    highlight: "To Your Table",
    description: "Experience the authentic taste of Indian heritage with Shree Radha Food Agro. We cultivate, process, and deliver premium quality authentic spices directly to you.",
    image: "/assets/images/slider1.png",
  },
  {
    id: 2,
    title: "Pure & Organic",
    highlight: "Grains & Pulses",
    description: "Nourish your family with our unadulterated, protein-rich grains and pulses sourced straight from the heart of rural India.",
    image: "/assets/images/slider2.png",
  },
  {
    id: 3,
    title: "Cold Pressed",
    highlight: "Healthy Oils",
    description: "Retain the natural goodness and authentic aroma with our traditional cold-pressed oils. Perfect for everyday healthy cooking.",
    image: "/assets/images/slider3.png",
  },
  {
    id: 4,
    title: "Natural & Fresh",
    highlight: "Farm to Fork",
    description: "Directly sourced from trusted farmers, our products bring you the finest quality with zero adulteration and 100% purity guaranteed.",
    image: "/assets/images/slider4.png",
  }
];

const featureCards = [
  {
    id: 1,
    title: "100% Organic",
    description: "Grown without harmful chemicals",
    image: "/assets/images/card1.png",
    icon: Leaf,
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Handpicked and carefully processed",
    image: "/assets/images/card2.png",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Fresh from farm to your doorstep",
    image: "/assets/images/card3.png",
    icon: Truck,
  },
  {
    id: 4,
    title: "Top Rated",
    description: "Loved by thousands of families",
    image: "/assets/images/card4.png",
    icon: Star,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="flex flex-col">
      {/* Full Banner Hero Section Slider */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-gray-50">
        {/* Invisible spacer to set the container's height to the exact natural aspect ratio of the images */}
        <img 
            src={heroSlides[0].image} 
            className="w-full h-auto opacity-0 pointer-events-none" 
            alt="spacer" 
            aria-hidden="true" 
        />
        
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Slider Controls - Left Arrow */}
        <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-md md:shadow-lg hover:scale-105"
            aria-label="Previous slide"
        >
            <ChevronLeft size={18} className="md:w-6 md:h-6" />
        </button>

        {/* Slider Controls - Right Arrow */}
        <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-md md:shadow-lg hover:scale-105"
            aria-label="Next slide"
        >
            <ChevronRight size={18} className="md:w-6 md:h-6" />
        </button>

        {/* Slider Controls - Dots */}
        <div className="absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1.5 md:gap-3">
            {heroSlides.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 md:h-2.5 rounded-full transition-all shadow-sm ${currentSlide === idx ? 'bg-primary w-6 md:w-10' : 'bg-white/80 w-1.5 md:w-2.5 hover:bg-white'}`}
                    aria-label={`Slide ${idx + 1}`}
                />
            ))}
        </div>
      </section>

      {/* Features Section - 4 Distinct Cards with Background Images */}
      <section className="bg-gray-50/70 py-12 md:py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div 
                  key={card.id}
                  className="group relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[240px] sm:min-h-[270px] p-6 flex flex-col justify-between border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />

                  {/* Subtle Gradient Overlay - Keeps image clear & bright, soft shadow at bottom for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent transition-opacity duration-300" />

                  {/* Top Floating Glass Icon Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/85 backdrop-blur-md border border-white/80 text-primary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="transition-transform duration-300 group-hover:rotate-12" />
                  </div>

                  {/* Bottom Text Content with Crisp Drop Shadow */}
                  <div className="relative z-10 mt-auto pt-6">
                    <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                      {card.title}
                    </h3>
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Featured Products */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Signature Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Discover our best-selling, pure, unadulterated food products crafted for your daily health.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/shop" className="btn-secondary text-lg px-10 py-4 shadow-xl">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Home;

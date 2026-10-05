import { Leaf, ShieldCheck, Heart, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-primary-dark py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white mb-6 font-serif">Our Story</h1>
          <p className="text-primary-light text-lg md:text-xl leading-relaxed">
            From the fertile soils of our local farms to your family's dining table, discover the passion and purity behind Radhavansh.
          </p>
        </div>
      </div>

      {/* Story Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
               <img src="https://images.unsplash.com/photo-1595858102377-1c3fa361fb52?auto=format&fit=crop&q=80&w=800" alt="Farming" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-3xl shadow-xl z-20 hidden md:block">
               <div className="text-4xl font-black mb-1">100%</div>
               <div className="font-bold text-sm uppercase tracking-wider">Natural<br/>Ingredients</div>
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Rooted in Tradition</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">A Journey of Purity and Authenticity</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Radhavansh was born out of a simple, profound desire: to reconnect people with the true taste of authentic, unadulterated food and spices. In a world of mass production and artificial additives, we chose a different path.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We partner directly with passionate local farmers who employ sustainable and ethical farming practices. Every grain, every spice, and every drop of oil that carries our name has been carefully cultivated, harvested, and processed to retain its natural goodness and essential nutrients.
            </p>
            <div className="flex gap-4 items-center p-4 bg-primary-light rounded-2xl border border-primary/20">
                <Heart size={32} className="text-primary shrink-0" />
                <p className="text-primary-dark font-medium">Our promise is simple: If we wouldn't serve it to our own family, we won't sell it to yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The principles that guide everything we do, from farm to table.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-8 glass-panel rounded-3xl group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-600">We prioritize farming methods that protect the earth, ensuring the land remains fertile for generations to come.</p>
             </div>
             <div className="text-center p-8 glass-panel rounded-3xl group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
                <p className="text-gray-600">Rigorous quality checks at every stage ensure that only the finest, purest products reach your kitchen.</p>
             </div>
             <div className="text-center p-8 glass-panel rounded-3xl group hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Truck className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Direct to You</h3>
                <p className="text-gray-600">By eliminating middlemen, we ensure farmers get a fair price and you get the freshest products delivered fast.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

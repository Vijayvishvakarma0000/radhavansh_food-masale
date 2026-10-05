import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20 md:pb-0">
      {/* Hero Section */}
      <div className="bg-primary-dark py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-serif">Get in Touch</h1>
          <p className="text-primary-light text-lg md:text-xl">We'd love to hear from you. Reach out with any questions or inquiries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 w-full flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-2/3 glass-panel p-8 md:p-10 rounded-3xl">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">Send us a Message</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
              <textarea id="message" rows="5" placeholder="Write your message here..." className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="btn-primary self-start px-8 py-4 mt-2 gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-8">
            <h3 className="text-2xl font-serif text-gray-900 border-b border-gray-100 pb-4">Contact Information</h3>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <MapPin size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                <p className="text-gray-600">123 Agro Park, Industrial Area<br/>City Name, State, 123456</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Phone size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                <p className="text-gray-600">+91 98765 43210<br/>+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Mail size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                <p className="text-gray-600">info@radhavansh.com<br/>support@radhavansh.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                <Clock size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

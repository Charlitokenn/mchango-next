import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-2xl font-bold mb-6">MchangoApp</div>
            <p className="text-gray-400 mb-6">
              Simplifying pledge collection for wedding and sendoff committees through personalized SMS and efficient tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Features", url: "#features" },
                { label: "Pricing", url: "#pricing" },
                { label: "Testimonials", url: "#testimonials" },
                { label: "How It Works", url: "#how-it-works" },
                { label: "FAQ", url: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: "Terms of Service", url: "#" },
                { label: "Privacy Policy", url: "#" },
                { label: "Cookie Policy", url: "#" },
                { label: "Data Processing", url: "#" },
                { label: "SMS Compliance", url: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">hello@mchango.app</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+255 689 255 545</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Jamaica Street, Mikocheni<br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MchangoApp. All rights reserved.
          </div>
          <div className="text-gray-500">
            Designed with care for wedding and sendoff committees.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

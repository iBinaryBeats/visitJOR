import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VISIT JORDAN</h3>
            <p className="mb-4 text-gray-300">
              Explore the hidden jewel of the Middle East, where ancient history meets 
              breathtaking landscapes and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Destinations', 'Experiences', 'Plan Your Trip', 'About Jordan', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              {['Petra', 'Wadi Rum', 'Dead Sea', 'Jerash', 'Amman Citadel', 'Aqaba', 'Mount Nebo', 'Dana Biosphere Reserve'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Jordan Tourism Board<br />
                  5th Circle, Jabal Amman<br />
                  Amman, Jordan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+962 6 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@visitjordan.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Visit Jordan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-maja-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Maja Takies</h3>
            <p className="mb-4">
              Creating magical celebration experiences in private theater spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-maja-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-maja-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-maja-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-maja-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-maja-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-maja-primary transition-colors">Our Spaces</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-maja-primary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#promotions" className="hover:text-maja-primary transition-colors">Promotions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-maja-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Celebration Types</h4>
            <ul className="space-y-2">
              <li>Birthday Celebrations</li>
              <li>Anniversaries</li>
              <li>Baby Showers</li>
              <li>Bridal Showers</li>
              <li>Promotion Parties</li>
              <li>Date Nights</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              123 Celebration Avenue, Film City, Mumbai 400001
            </p>
            <p className="mb-2">
              majatakies25@gmail.com
            </p>
            <p>
              +91 8884447957
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Maja Takies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

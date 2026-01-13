import React from 'react';
import { motion } from 'framer-motion';

const FloatingNavigation: React.FC = () => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'text-parallax', label: 'Features' },
    { id: 'horizontal-scroll', label: 'Gallery' },
    { id: 'map', label: 'Location' },
    { id: 'footer', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="https://res.cloudinary.com/dhxi75eld/image/upload/v1767893068/Untitled_500_x_500_px_1_pf4sin.png" alt="Audio Craft Logo" />
          </div>
          <span className="text-white font-bold text-lg">Audio Craft</span>
        </motion.div>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default FloatingNavigation;
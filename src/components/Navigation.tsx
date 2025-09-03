import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max"
    >
      <div className="glass-card px-6 py-3 rounded-full">
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
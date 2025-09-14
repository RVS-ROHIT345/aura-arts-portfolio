import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className={`transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : ''
      }`}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
                <div className="w-full h-full bg-muted flex items-center justify-center text-lg font-semibold">
                  JD
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Contact Button */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2 rounded-full font-medium"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
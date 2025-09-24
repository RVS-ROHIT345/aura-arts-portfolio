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
      className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-4"
    >
      <div className={`transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : ''
      }`}>
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center justify-between sm:justify-center gap-2 sm:gap-8">
            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden border-2 border-background shadow-lg">
                <div className="w-full h-full bg-muted flex items-center justify-center text-sm sm:text-lg font-semibold">
                  JD
                </div>
              </div>
            </div>

            {/* Navigation Items - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
              className="bg-foreground text-background hover:bg-foreground/90 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-medium text-sm"
            >
              <span className="hidden sm:inline">Contact</span>
              <span className="sm:hidden">📧</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
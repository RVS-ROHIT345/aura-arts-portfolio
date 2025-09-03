import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 37, 49, 0.8), rgba(34, 37, 49, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">John Doe</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with modern technologies. 
            Passionate about creating scalable, user-friendly applications 
            that solve real-world problems.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="hero-gradient text-white px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300 glow-effect"
          >
            View My Work
          </Button>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="glass-card border-primary/30 hover:border-primary transition-colors">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card border-primary/30 hover:border-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="glass-card border-primary/30 hover:border-primary transition-colors">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
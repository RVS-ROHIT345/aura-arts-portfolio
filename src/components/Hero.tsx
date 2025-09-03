import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h2 
                className="text-sm md:text-base font-medium text-muted-foreground tracking-[0.2em] uppercase"
                variants={itemVariants}
              >
                John Doe
              </motion.h2>
              
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
                variants={itemVariants}
              >
                <span className="block text-foreground">FULL STACK</span>
                <span className="block gradient-text">DEVELOPER</span>
              </motion.h1>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate developer creating modern web applications with 
              cutting-edge technologies and beautiful user experiences.
            </motion.p>

            <motion.div 
              className="flex items-center gap-6 pt-4"
              variants={itemVariants}
            >
              <Button
                onClick={scrollToProjects}
                className="hero-gradient text-white px-8 py-6 text-lg font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View My Work
              </Button>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-12 h-12 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-12 h-12 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-12 h-12 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-card shadow-2xl">
                {/* Placeholder for professional photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-accent-secondary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-40">👨‍💻</div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-accent rounded-full"></div>
              </div>

              {/* Floating Icon */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Hand className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Background Accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent/30 to-accent-secondary/30 rounded-full blur-xl -z-10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
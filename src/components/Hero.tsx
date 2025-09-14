import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

const Hero = () => {
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

  const leftTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const rightTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const centerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-32 left-20 w-16 h-16 bg-primary/20 rounded-full blur-sm"></div>
      <div className="absolute top-80 right-32 w-8 h-8 bg-accent/30 rounded-full"></div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="relative flex items-center justify-center min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Center Image Container */}
          <motion.div 
            className="relative z-10"
            variants={centerVariants}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background flex items-center justify-center">
                  <div className="text-8xl opacity-60">👨‍💻</div>
                </div>
              </div>

              {/* Floating Wave Icon */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Hand className="w-10 h-10 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text - "FULL STACK DEVELOPER" */}
          <motion.div 
            className="absolute right-0 top-1/2 -translate-y-1/2"
            variants={rightTextVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-none tracking-tight">
              FULL STACK
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-none tracking-tight mt-2">
              DEVELOPER
            </h1>
          </motion.div>

          {/* Bottom Description Text */}
          <motion.div 
            className="absolute bottom-0 right-0 max-w-md"
            variants={rightTextVariants}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a US-based digital designer and<br />
              Framer developer
            </p>
          </motion.div>

          {/* Name Badge - Bottom of FULL STACK */}
          <motion.div 
            className="absolute right-0 top-1/2 translate-y-8"
            variants={rightTextVariants}
          >
            <h2 className="text-lg font-medium text-muted-foreground tracking-[0.15em] uppercase">
              JOHN DOE
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
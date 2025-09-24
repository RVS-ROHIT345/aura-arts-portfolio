import { motion } from 'framer-motion';
import { Code2, Download, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      ></motion.div>
      
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name Tag */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide">JOHN DOE</span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                FULL STACK
              </span>
              <br />
              <span className="text-foreground">DEVELOPER</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <motion.div 
                className="h-[2px] w-16 bg-gradient-to-r from-transparent to-primary"
                variants={scaleIn}
              ></motion.div>
              <Code2 className="w-6 h-6 text-primary" />
              <motion.div 
                className="h-[2px] w-16 bg-gradient-to-l from-transparent to-primary"
                variants={scaleIn}
              ></motion.div>
            </div>
          </motion.div>

          {/* Profile Image with Enhanced Styling */}
          <motion.div variants={scaleIn} className="relative inline-block">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gradient-to-br from-muted to-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                  <div className="text-6xl md:text-7xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Creating digital experiences that blend
              <span className="text-primary font-semibold"> innovative design </span>
              with
              <span className="text-accent font-semibold"> robust development</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-semibold text-lg">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 pt-12">
            {['React', 'Node.js', 'TypeScript', 'Next.js', 'Python', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
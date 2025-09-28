import { motion } from 'framer-motion';
import { Code2, Download, ArrowRight, Sparkles, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {

  const techStackData = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
  ];

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
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 relative overflow-hidden"
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
          <motion.div variants={fadeInUp} className="space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-none">
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
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-gradient-to-br from-muted to-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto space-y-4 px-4 sm:px-0">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-center">
              Creating digital experiences that blend
              <span className="text-primary font-semibold"> innovative design </span>
              with
              <span className="text-accent font-semibold"> robust development</span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 pt-4">
            <motion.a
              href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="https://github.com/your-username" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* CTA Links */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0">
            <a
              href="#experience"
              className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download="John_Doe_Resume.pdf"
              className="group inline-flex items-center justify-center border border-primary/30 hover:border-primary hover:bg-primary/10 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto transition-all duration-300"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </a>
          </motion.div>

          {/* Enhanced Tech Stack */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8 sm:pt-12 px-4 sm:px-0">
            {techStackData.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm rounded-full border border-border/50 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px -8px hsl(var(--primary) / 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <span className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {tech.icon}
                </span>
                
                {/* Tech name */}
                <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
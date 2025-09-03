import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'Frontend Development', icon: Code2, description: 'React, TypeScript, Next.js' },
    { name: 'Backend Development', icon: Server, description: 'Node.js, Python, Java' },
    { name: 'Database Design', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter' },
    { name: 'Web Technologies', icon: Globe, description: 'HTML5, CSS3, JavaScript ES6+' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Design Systems' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            innovative digital solutions. I love turning complex problems into simple, 
            beautiful, and intuitive designs.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started as a curious student exploring code, now I'm building scalable 
                applications that impact thousands of users. My expertise spans from 
                crafting pixel-perfect user interfaces to architecting robust backend systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with 
                the latest industry trends. Always eager to learn new technologies and 
                take on challenging projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="glass-card p-6 rounded-3xl">
              <div className="w-64 h-64 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <div className="text-white text-6xl font-bold">JD</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
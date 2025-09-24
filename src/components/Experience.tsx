import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams on product strategy"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      location: "Austin, TX", 
      duration: "2020 - 2022",
      description: [
        "Built responsive web applications with modern JavaScript frameworks",
        "Developed RESTful APIs and integrated third-party services",
        "Optimized database queries improving performance by 40%",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Remote",
      duration: "2019 - 2020",
      description: [
        "Created interactive user interfaces using React and CSS animations",
        "Worked closely with designers to implement pixel-perfect designs",
        "Contributed to open-source projects and internal tools",
        "Gained experience in version control and collaborative development"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-accent-secondary"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background glow-effect"></div>
              
              {/* Experience card */}
              <div className="ml-8 sm:ml-16 lg:ml-20">
                <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
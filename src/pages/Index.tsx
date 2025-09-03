import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
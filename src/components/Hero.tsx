
import { ArrowDown, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen grid-pattern relative flex items-center justify-center pt-16">
      <div className="absolute top-0 left-0 w-48 h-48 bg-neonblue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neonpink/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 text-center z-10">
        <div className="inline-block mb-4">
          <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
            <Terminal size={16} className="text-neonblue mr-2" />
            <span className="text-sm text-white/80">Full Stack Web Developer</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Building <span className="neon-text-blue">Digital</span> Experience with{" "}
          <span className="neon-text-purple">Modern</span> Technology
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8">
          I craft responsive web applications using React, Next.js, Node.js, 
          and Tailwind CSS to bring creative ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-neonblue to-neonpurple hover:from-neonpurple hover:to-neonblue text-white px-8 py-6"
            size="lg"
          >
            Explore My Work
          </Button>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            className="border-white/20 hover:bg-white/10 text-white px-8 py-6"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-colors flex flex-col items-center"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

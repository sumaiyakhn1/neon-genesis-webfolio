
import { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-darkbg/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="text-neonblue" size={24} />
          <span className="font-bold text-xl">Dev<span className="neon-text-blue">Portfolio</span></span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-neonblue transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-white hover:text-neonpurple transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-white hover:text-neonpink transition-colors"
          >
            Experience
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-neonblue to-neonpink hover:from-neonpink hover:to-neonblue text-white"
          >
            Contact Me <Zap className="ml-2" size={16} />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card m-3 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-neonblue transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-neonpurple transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-neonpink transition-colors py-2"
            >
              Experience
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-neonblue to-neonpink hover:from-neonpink hover:to-neonblue text-white w-full"
            >
              Contact Me <Zap className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

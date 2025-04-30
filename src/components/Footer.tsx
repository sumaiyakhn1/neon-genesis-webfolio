
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkcard border-t border-white/5 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Sumaiya Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/sumaiyakhn1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neonblue transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sumaiya-khan-27bbb029b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-neonpurple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="mailto:sumaiyakn28@gmail.com" 
              className="text-white/60 hover:text-neonblue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

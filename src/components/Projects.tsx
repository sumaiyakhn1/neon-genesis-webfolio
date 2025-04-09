
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, user authentication, and an admin dashboard.",
    image: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=600&auto=format",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing copy, blog posts, and social media content.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, commenting, and file sharing.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=600&auto=format",
    tags: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker Dashboard",
    description: "A comprehensive fitness tracking application with data visualization and progress tracking.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format",
    tags: ["React", "Chart.js", "Node.js", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="neon-text-purple">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonpurple to-neonpink rounded-full mx-auto"></div>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Explore my recent projects that showcase my skills and expertise in web development.
          Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-darkbg/90 opacity-100`}></div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>
              
              <p className="text-white/70">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-between pt-4">
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-neonblue hover:text-neonpurple transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                
                <a 
                  href={project.githubLink} 
                  className="flex items-center text-white/70 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="mr-1" /> Source Code
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;

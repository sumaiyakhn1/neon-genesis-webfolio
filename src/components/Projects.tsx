
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: "Oncoshala-3",
    description: "Developed a professional website Oncoshala-3 during my internship for AMD GlobalNet, focused on cancer awareness and event outreach.",
    image: "/oncoshala.jpg",
    tags: ["Internship","React", "Node.js", "TypeScript", "TailwindCSS"],
    demoLink: "https://oncoshala-3.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
  },
  {
    id: 2,
    title: "Kumaon Cancer Conclave",
    description: "Designed an interactive platform for a cancer awareness event, allowing doctors to register, explore event information, and navigate the venue with Google Maps integration.",
    image: "/kumaon.jpg",
    tags: ["Freelance","React", "TypeScript", "GoogleMap API", "Tailwind CSS", "Lovable.dev"],
    demoLink: "https://www.kumaoncancerconclave.com/",
    githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
  },
  {
    id: 3,
    title: "Jounalist Portfolio",
    description: " Built a clean, responsive portfolio website for a journalist to showcase articles, media features, and achievements, ensuring easy navigation and professional presentation.",
    image: "/asif.jpg",
    tags: ["Freelance","React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://mohd-asif-khan-portfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/story-weaver-portfolio",
  },
  {
    id: 4,
    title: "Carpet Portfolio",
    description: " Currently developing a visually rich portfolio website for DreamKnot Carpet Company to showcase handcrafted rugs, weaves, and thread artistry with a focus on aesthetics and user engagement.",
    image: "/carpet.jpg",
    tags: ["Freelance-ongoing","React", "Chart.js", "Node.js", "PostgreSQL"],
    demoLink: "https://racportfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/carpetopia-showcase",
  },
  {
    id: 5,
    title: "NoteShala",
    description: "Crafting an innovative digital library that empowers teachers to upload valuable study materials, while giving students instant access to download and enrich their academic journey.",
    image: "/noteshala.jpg",
    tags: ["Project-ongoing","TailwindCSS", "Node.js", "PostgreSQL"],
    demoLink: "https://noteshala.vercel.app/",
    githubLink: "https://github.com/rajputsundram/noteshala",
  },
  {
    id: 6,
    title: "KBC-Technical questionare game",
    description: "Created an interactive quiz game for a college competition, inspired by Kaun Banega Crorepati, featuring dynamic questions and a 50:50 lifeline to enhance the competitive learning experience.",
    image: "/kbc.jpg",
    tags: ["Project","React", "PostgreSQL", "Node.js", "Express.js"],
    demoLink: "https://questionnaire-game-alpha.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/questionnaire_game",
  },
  {
    id: 7,
    title: "Graphic Designs",
    description: "Created a website with all the Graphic-Design work that I did.",
    image: "/graphic-design.jpg",
    tags: ["Project","React", "Tailwind CSS"],
    demoLink: "https://graphic-designs.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/graphic-designs",
  },
  {
    id: 8,
    title: "Fake or Safe Game",
    description: "Created a website where u can play a game and check your AI-created images detection skills.",
    image: "/fakeorsafe.jpg",
    tags: ["Project","React", "Tailwind CSS", "Firebase"],
    demoLink: "https://fake-or-safe.web.app/",
    githubLink: "https://github.com/sumaiyakhn1/graphic-designs",
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

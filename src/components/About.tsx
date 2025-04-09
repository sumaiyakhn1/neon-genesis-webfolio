
import { Code, Terminal, Server, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-neonblue" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Server className="text-neonpurple" size={24} />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="text-neonpink" size={24} />,
      skills: ["Git", "Docker", "Jest", "AWS", "CI/CD"]
    },
    {
      title: "Design",
      icon: <Palette className="text-neonblue" size={24} />,
      skills: ["Figma", "Responsive Design", "UI/UX", "Prototyping"]
    }
  ];

  return (
    <section id="about" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          About <span className="neon-text-blue">Me</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonblue to-neonpink rounded-full mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Hi, I'm <span className="neon-text-purple">John Doe</span>
            </h3>
            <p className="text-white/80">
              I'm a passionate full-stack developer with 5+ years of experience 
              building modern web applications. I specialize in creating clean, 
              efficient, and user-friendly experiences that solve real-world problems.
            </p>
            <p className="text-white/80">
              My journey in web development started with a curiosity about how websites 
              work. Since then, I've developed a deep expertise in React ecosystem while 
              maintaining a strong foundation in backend technologies. I'm constantly 
              learning new tools and techniques to stay at the cutting edge of web development.
            </p>
            <p className="text-white/80">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or 
              experimenting with new programming languages and frameworks.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border">
            <img 
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=400&auto=format" 
              alt="Developer Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-10">
          Technical <span className="neon-text-pink">Skills</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:border-neonblue/50 transition-all duration-300">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-xl font-medium">{category.title}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-neonblue"></span>
                      <span className="text-white/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

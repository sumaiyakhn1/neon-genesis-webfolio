
import { Code, Terminal, Server, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-neonblue" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", ]
    },
    {
      title: "Backend",
      icon: <Server className="text-neonpurple" size={24} />,
      skills: ["Node.js", "Express", "PostgreSQL", "Firebase"]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="text-neonpink" size={24} />,
      skills: ["Git", "CI/CD", "Framer Motion"]
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
              Hi, I'm <span className="neon-text-purple">Sumaiya Khan</span>
            </h3>
            <p className="text-white/80">
            I'm a passionate full-stack developer with hands-on experience building responsive and user-focused web applications. I enjoy writing clean, efficient code and creating solutions that are both functional and visually appealing.

            </p>
            <p className="text-white/80">
            My journey into web development began with a deep curiosity about how the web works. Since then, I've built a solid foundation in backend technologies and gained practical experience with the React ecosystem. I'm also interested in graphic design, which helps me bring an eye for detail and aesthetics to the user interfaces I build. I'm always learning and exploring new tools and trends to grow as a developer.

            </p>
            <p className="text-white/80">
            Outside of coding, I enjoy reading novels—especially sci-fi and thrillers—and occasionally experimenting with design work. Whether it's sketching out UI ideas or diving into a new framework, I'm always looking for creative ways to expand my skills.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border">
            <img 
              src="/sumaiya.png" 
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

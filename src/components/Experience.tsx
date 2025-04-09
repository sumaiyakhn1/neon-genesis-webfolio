
import { Briefcase, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2022 - Present",
    description: "Lead development for client projects using React and Next.js. Mentored junior developers and implemented best practices that improved code quality and reduced bugs by 40%.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "Mar 2019 - Dec 2021",
    description: "Built and maintained multiple web applications using React, Node.js and PostgreSQL. Improved application performance by 60% through code optimization and modernization.",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Creative Agency",
    period: "Jun 2017 - Feb 2019",
    description: "Developed responsive websites for clients across various industries. Collaborated with designers to implement pixel-perfect interfaces and interactive elements.",
  },
  {
    id: 4,
    title: "Frontend Development Intern",
    company: "StartUp Hub",
    period: "Jan 2017 - May 2017",
    description: "Assisted in developing UI components using HTML, CSS and JavaScript. Learned industry best practices and modern development workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Work <span className="neon-text-pink">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonpink to-neonblue rounded-full mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-neonpink/30 pl-8 ml-4 space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[42px] w-7 h-7 rounded-full flex items-center justify-center
                  ${index === 0 ? 'bg-neonpink' : 'bg-darkcard border-2 border-neonpink/50'}`}
              >
                <Briefcase size={14} className={index === 0 ? 'text-white' : 'text-neonpink'} />
              </div>

              {/* Content */}
              <div className="glass-card p-6 hover:border-neonpink/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-white/70 mb-4 space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center">
                    <Building size={16} className="mr-2 text-neonpink" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-neonpink" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-white/80">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

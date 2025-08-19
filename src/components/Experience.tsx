
import { Briefcase, Calendar, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Engineer Trainee",
    company: "Okie Dokie ",
    period: "July 2025 - Present",
    description: "Currently working as an Engineer Trainee at Okie Dokie, where I am gaining practical experience in software development and contributing to various projects, enhancing my skills in a real-world environment.",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "AMD GlobalNet",
    period: "Feb 2025 - May 2025",
    description: "Gained hands-on experience in web development and digital solutions during my internship at AMDGlobalNet, contributing to various projects and enhancing technical skills.",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Freelance",
    period: "Jan 2025 - Feb 2025",
    description: "Kumaon Cancer Conclave Website – Designed an interactive platform for a cancer awareness event, allowing doctors to register, explore event information, and navigate the venue with Google Maps integration.",
  },
  {
    id: 4,
    title: "Web Developer",
    company: "Freelance",
    period: "Jan 2025 - ongoing",
    description: "DreamKnot Carpet Portfolio – Currently developing a visually rich portfolio website for DreamKnot Carpet Company to showcase handcrafted rugs, weaves, and thread artistry with a focus on aesthetics and user engagement.",
  },
  {
    id: 5,
    title: "Frontend Development",
    company: "Freelance",
    period: "June 2024 - Aug 2024",
    description: "Journalist Portfolio – Developed a professional and responsive portfolio website as a freelance project, enabling a journalist to showcase articles, media coverage, and career highlights effectively.",
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


import { useState } from 'react';
import { ExternalLink, Github, Briefcase, Lightbulb, Cog, Building2, LayoutGrid } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Project categories with their metadata
const projectCategories = [
  {
    id: 'freelance',
    title: 'Freelance',
    icon: Briefcase,
    gradient: 'from-neonpink to-neonpurple',
    description: 'Client projects delivered with excellence',
  },
  {
    id: 'personal',
    title: 'Personal Projects',
    icon: Lightbulb,
    gradient: 'from-neonblue to-neonpurple',
    description: 'Passion projects and creative experiments',
  },
  {
    id: 'automation',
    title: 'Automation Tools',
    icon: Cog,
    gradient: 'from-emerald-400 to-neonblue',
    description: 'Tools to automate and streamline workflows',
  },
  {
    id: 'erp',
    title: 'ERP Integrated Platforms',
    icon: Building2,
    gradient: 'from-amber-400 to-neonpink',
    description: 'Enterprise resource planning solutions',
  },
];

// Tab items for navigation (including "All" option)
const tabItems = [
  { id: 'all', title: 'All', icon: LayoutGrid, gradient: 'from-white/20 to-white/10' },
  ...projectCategories,
];

// Freelance Projects
const freelanceProjects = [
  {
    id: 1,
    title: "Kumaon Cancer Conclave",
    description: "Designed an interactive platform for a cancer awareness event, allowing doctors to register, explore event information, and navigate the venue with Google Maps integration.",
    image: "/kumaon.jpg",
    tags: ["React", "TypeScript", "GoogleMap API", "Tailwind CSS", "Lovable.dev"],
    demoLink: "https://www.kumaoncancerconclave.com/",
    githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
  },
  {
    id: 2,
    title: "Journalist Portfolio",
    description: "Built a clean, responsive portfolio website for a journalist to showcase articles, media features, and achievements, ensuring easy navigation and professional presentation.",
    image: "/asif.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "https://mohd-asif-khan-portfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/story-weaver-portfolio",
  },
  {
    id: 3,
    title: "Carpet Portfolio",
    description: "Currently developing a visually rich portfolio website for DreamKnot Carpet Company to showcase handcrafted rugs, weaves, and thread artistry with a focus on aesthetics and user engagement.",
    image: "/carpet.jpg",
    tags: ["React", "Chart.js", "Node.js", "PostgreSQL", "Ongoing"],
    demoLink: "https://racportfolio.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/carpetopia-showcase",
  },
];

// Personal Projects
const personalProjects = [
  {
    id: 1,
    title: "Oncoshala-3",
    description: "Developed a professional website Oncoshala-3 during my internship for AMD GlobalNet, focused on cancer awareness and event outreach.",
    image: "/oncoshala.jpg",
    tags: ["Internship", "React", "Node.js", "TypeScript", "TailwindCSS"],
    demoLink: "https://oncoshala-3.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
  },
  {
    id: 2,
    title: "NoteShala",
    description: "Crafting an innovative digital library that empowers teachers to upload valuable study materials, while giving students instant access to download and enrich their academic journey.",
    image: "/noteshala.jpg",
    tags: ["TailwindCSS", "Node.js", "PostgreSQL", "Next JS", "Ongoing"],
    demoLink: "https://noteshala.vercel.app/",
    githubLink: "https://github.com/rajputsundram/noteshala",
  },
  {
    id: 3,
    title: "KBC-Technical Questionnaire Game",
    description: "Created an interactive quiz game for a college competition, inspired by Kaun Banega Crorepati, featuring dynamic questions and a 50:50 lifeline to enhance the competitive learning experience.",
    image: "/kbc.jpg",
    tags: ["React", "PostgreSQL", "Node.js", "Express.js"],
    demoLink: "https://questionnaire-game-alpha.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/questionnaire_game",
  },
  {
    id: 4,
    title: "Graphic Designs",
    description: "Created a website with all the Graphic-Design work that I did.",
    image: "/graphic-design.jpg",
    tags: ["React", "Tailwind CSS"],
    demoLink: "https://graphic-designs.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/graphic-designs",
  },
  {
    id: 5,
    title: "Fake or Safe Game",
    description: "Created a website where you can play a game and check your AI-created images detection skills.",
    image: "/fakeorsafe.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoLink: "https://fake-or-safe.web.app/",
    githubLink: "https://github.com/sumaiyakhn1/Catch-the-fake",
  },
  {
    id: 6,
    title: "TheCyberVision",
    description: "Created a website for education purpose.",
    image: "/cybervision.jpg",
    tags: ["Next JS", "Tailwind CSS"],
    demoLink: "https://www.thecybervision.com/",
    githubLink: "",
  },
  {
    id: 7,
    title: "Prayer Time App",
    description: "Created a website that takes your time and location and shows you prayer time.",
    image: "/PrayerTime.jpg",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoLink: "https://madras-app.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/madras-app",
  },
];

// Automation Tools - TODO: Update with your actual projects
const automationProjects = [
  {
    id: 1,
    title: "PDF Splitter & Renamer",
    description: "Splits multi-student DMC PDFs and renames using Excel mapping (Reg → Roll No).",
    image: "/pdf-splitter.png",
    tags: ["FastAPI", "Python", "React"],
    demoLink: "https://regex-split-pdf.lovable.app/",
    githubLink: "https://github.com/sumaiyakhn1/pdfsplitter",
  },
  {
    id: 2,
    title: "Drive → Google Sheet Sync Tool",
    description: "Syncs Drive folder files into a Google Sheet (metadata, timestamps, filenames).",
    image: "/drive-sync.png",
    tags: ["FastAPI", "Node.js", "Google APIs", "React"],
    demoLink: "https://okiedokiedrivetosheet.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/drive_to_sheet_backend",
  },
  {
    id: 3,
    title: "Student Image Finder",
    description: "Instantly fetches student photos by Scholar ID for ID cards & verification. (Try 2074)",
    image: "/student-finder.png",
    tags: ["FastAPI", "React", "Node.js"],
    demoLink: "https://student-image-viewer.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/student-image-finder",
  },
  {
    id: 4,
    title: "Fee Receipt Portal",
    description: "Generates, validates, and retrieves student fee receipts with PDF preview. (Try Ayushi)",
    image: "/fee-receipt.png",
    tags: ["FastAPI", "React", "Node.js"],
    demoLink: "https://okiedokie-databackup.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/fee-reciept-backend",
  },
  {
    id: 5,
    title: "Admit Card & DMC Finder",
    description: "Unified search portal for downloading admit cards & DMCs.",
    image: "/admit-card.png",
    tags: ["FastAPI", "React", "Node.js"],
    demoLink: "https://rksdcollegeadmitcard.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/dmc_finder-backend",
  },
];

// ERP Integrated Platforms - TODO: Update with your actual projects
const erpProjects = [
  {
    id: 1,
    title: "College Security Deposit Dashboard",
    description: "Role-based authentication (Admin & Student) enabling admins to update records while students track status in real-time.",
    image: "/security-deposit1.png",
    tags: ["React", "Node.js", "Auth", "Dashboard"],
    demoLink: "https://collegesecurity.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/refund-backend",
  },
  {
    id: 2,
    title: "ERP-integrated Admission Portal",
    description: "Real-time application processing, authentication, and API-based data synchronization with the institutional ERP system.",
    image: "/admission-portal.png",
    tags: ["React", "API Integration", "ERP Sync"],
    demoLink: "https://student-admission-portal-rouge.vercel.app/login",
    githubLink: "https://github.com/sumaiyakhn1/student-admission-portal",
  },
  {
    id: 3,
    title: "DMC Fetcher Platform",
    description: "Dynamically retrieves and publishes student marks directly from ERP APIs with structured validation and secure access.",
    image: "/dmc-fetcher.png",
    tags: ["React", "ERP APIs", "Validation"],
    demoLink: "https://dmc-publishing.vercel.app/",
    githubLink: "https://github.com/sumaiyakhn1/dmc_withlogin-backend",
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const getProjectsByCategory = (categoryId: string): Project[] => {
  switch (categoryId) {
    case 'freelance':
      return freelanceProjects;
    case 'personal':
      return personalProjects;
    case 'automation':
      return automationProjects;
    case 'erp':
      return erpProjects;
    default:
      return [];
  }
};

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  // Get categories to display based on active tab
  const getCategoriesToShow = () => {
    if (activeTab === 'all') {
      return projectCategories.filter(cat => getProjectsByCategory(cat.id).length > 0);
    }
    const category = projectCategories.find(cat => cat.id === activeTab);
    return category && getProjectsByCategory(category.id).length > 0 ? [category] : [];
  };

  // Get project count for a category
  const getProjectCount = (categoryId: string) => {
    if (categoryId === 'all') {
      return projectCategories.reduce((sum, cat) => sum + getProjectsByCategory(cat.id).length, 0);
    }
    return getProjectsByCategory(categoryId).length;
  };

  const categoriesToShow = getCategoriesToShow();

  return (
    <section id="projects" className="section-spacing container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          My <span className="neon-text-purple">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neonpurple to-neonpink rounded-full mx-auto"></div>
        <p className="mt-6 text-white/70 max-w-2xl mx-auto">
          Explore my recent projects that showcase my skills and expertise in web development.
          Each project represents a unique challenge and solution.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {tabItems.map((tab) => {
            const IconComponent = tab.icon;
            const count = getProjectCount(tab.id);
            const isActive = activeTab === tab.id;

            // Skip tabs with no projects (except "All")
            if (count === 0 && tab.id !== 'all') return null;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm md:text-base
                  transition-all duration-300 ease-out
                  ${isActive
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:scale-102'
                  }
                `}
              >
                <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden">{tab.id === 'all' ? 'All' : tab.title.split(' ')[0]}</span>
                {/* Project count badge */}
                <span className={`
                  ml-1 px-2 py-0.5 rounded-full text-xs font-bold
                  ${isActive ? 'bg-white/20' : 'bg-white/10'}
                `}>
                  {count}
                </span>
                {/* Active indicator glow */}
                {isActive && (
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.gradient} opacity-20 blur-xl -z-10`}></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Sections */}
      {categoriesToShow.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-white/50 text-lg">No projects in this category yet.</div>
          <p className="text-white/30 mt-2">Check back soon for updates!</p>
        </div>
      ) : (
        categoriesToShow.map((category) => {
          const projects = getProjectsByCategory(category.id);
          const IconComponent = category.icon;

          return (
            <div key={category.id} className="mb-16 animate-fade-in">
              {/* Category Header - only show when "All" is selected */}
              {activeTab === 'all' && (
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                  <div className={`flex-1 h-[2px] bg-gradient-to-r ${category.gradient} opacity-30 rounded-full ml-4`}></div>
                </div>
              )}

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => {
                  const uniqueId = `${category.id}-${project.id}`;
                  return (
                    <Card
                      key={uniqueId}
                      className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px]"
                      onMouseEnter={() => setHoveredId(uniqueId)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-darkbg/90 opacity-100`}></div>
                        {/* Category Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-white text-xs font-semibold shadow-lg`}>
                          {category.title}
                        </div>
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

                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              className="flex items-center text-white/70 hover:text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-1" /> Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Projects;



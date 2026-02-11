
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Featured projects to show on home page (select highlights from each category)
const featuredProjects = [
    {
        id: 1,
        title: "Kumaon Cancer Conclave",
        description: "Designed an interactive platform for a cancer awareness event with Google Maps integration.",
        image: "/kumaon.jpg",
        tags: ["Freelance", "React", "TypeScript", "GoogleMap API"],
        category: "Freelance",
        gradient: "from-neonpink to-neonpurple",
        demoLink: "https://www.kumaoncancerconclave.com/",
        githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
    },
    {
        id: 2,
        title: "Oncoshala-3",
        description: "Professional website for AMD GlobalNet focused on cancer awareness and event outreach.",
        image: "/oncoshala.jpg",
        tags: ["Internship", "React", "Node.js", "TypeScript"],
        category: "Internship",
        gradient: "from-neonblue to-neonpurple",
        demoLink: "https://oncoshala-3.vercel.app/",
        githubLink: "https://github.com/sumaiyakhn1/oncoshala-3-conference-hub",
    },
    {
        id: 3,
        title: "PDF Splitter & Renamer",
        description: "Splits multi-student DMC PDFs and renames using Excel mapping (Reg → Roll No).",
        image: "/pdf-splitter.png",
        tags: ["Automation", "FastAPI", "Python", "React"],
        category: "Automation Tool",
        gradient: "from-emerald-400 to-neonblue",
        demoLink: "https://regex-split-pdf.lovable.app/",
        githubLink: "https://github.com/sumaiyakhn1/pdfsplitter",
    },
    {
        id: 4,
        title: "Drive → Google Sheet Sync",
        description: "Syncs Drive folder files into a Google Sheet with metadata and timestamps.",
        image: "/drive-sync.png",
        tags: ["Automation", "FastAPI", "Google APIs"],
        category: "Automation Tool",
        gradient: "from-emerald-400 to-neonblue",
        demoLink: "https://okiedokiedrivetosheet.vercel.app/",
        githubLink: "https://github.com/sumaiyakhn1/drive_to_sheet_backend",
    },
];

const ProjectsPreview = () => {
    return (
        <section id="projects" className="section-spacing container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Featured <span className="neon-text-purple">Projects</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-neonpurple to-neonpink rounded-full mx-auto"></div>
                <p className="mt-6 text-white/70 max-w-2xl mx-auto">
                    A glimpse of my work across Freelance, Personal Projects, Automation Tools, and ERP Platforms.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {featuredProjects.map((project) => (
                    <Card
                        key={project.id}
                        className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px]"
                    >
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkbg/90"></div>
                            {/* Category Badge */}
                            <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold shadow-lg`}>
                                {project.category}
                            </div>
                        </div>

                        <div className="p-6 space-y-3">
                            <h3 className="text-lg font-bold">
                                {project.title}
                            </h3>

                            <p className="text-white/70 text-sm line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {project.tags.slice(0, 3).map((tag, index) => (
                                    <Badge key={index} className="bg-white/10 hover:bg-white/20 text-white text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                                {project.tags.length > 3 && (
                                    <Badge className="bg-white/5 text-white/50 text-xs">
                                        +{project.tags.length - 3}
                                    </Badge>
                                )}
                            </div>

                            <div className="flex justify-between pt-3">
                                <a
                                    href={project.demoLink}
                                    className="flex items-center text-neonblue hover:text-neonpurple transition-colors text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={14} className="mr-1" /> Live Demo
                                </a>

                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        className="flex items-center text-white/70 hover:text-white transition-colors text-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={14} className="mr-1" /> Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* View All Projects Button */}
            <div className="text-center">
                <Link to="/projects">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-neonpurple to-neonpink hover:from-neonpink hover:to-neonpurple text-white px-8 py-6 text-lg group"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                </Link>
                <p className="text-white/50 text-sm mt-4">
                    Explore all my Freelance, Personal, Automation & ERP projects
                </p>
            </div>
        </section>
    );
};

export default ProjectsPreview;

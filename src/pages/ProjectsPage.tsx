
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import Projects from '@/components/Projects';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-darkbg text-white">
            <ParticlesBackground />
            <Header />
            <main className="pt-24">
                {/* Back to Home Link */}
                <div className="container mx-auto px-4 mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/70 hover:text-neonblue transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>

                {/* Projects Section */}
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;

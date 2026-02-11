
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsPreview from '@/components/ProjectsPreview';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-darkbg text-white">
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectsPreview />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

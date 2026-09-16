import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import AnalyticsSnapshot from './components/sections/AnalyticsSnapshot';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import VisualizationShowcase from './components/sections/VisualizationShowcase';
import AnalyticsWorkflow from './components/sections/AnalyticsWorkflow';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import ResumeCTA from './components/sections/ResumeCTA';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)]">
      {/* Background mesh */}
      <div className="gradient-mesh" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <AnalyticsSnapshot />
        <Skills />
        <Projects />
        <VisualizationShowcase />
        <AnalyticsWorkflow />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

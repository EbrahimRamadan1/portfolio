import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import PhilosophySection from '@/components/portfolio/PhilosophySection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
}

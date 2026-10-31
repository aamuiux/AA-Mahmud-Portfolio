import { useState, useEffect } from 'react';
import type { CategoryKey, Project, ThemeMode, ViewType } from './types';
import {
  projects,
  testimonials,
  experienceData,
  skillCategories,
  certifications,
  awards,
} from './data';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { HeroSection } from './components/HeroSection';
import { WorksSection } from './components/WorksSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EngagementsSection } from './components/EngagementsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ShowcaseView } from './components/ShowcaseView';
import { ProfileView } from './components/ProfileView';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentCategory, setCurrentCategory] = useState<CategoryKey>('all');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('saikat_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'dark';
  });

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('saikat_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProfile = () => {
    setCurrentView('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: CategoryKey) => {
    setCurrentCategory(cat);
    setCurrentView('showcase');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSeeWork = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('works');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('works');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] flex flex-col font-['Satoshi'] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      {/* Mobile Top Header */}
      <MobileHeader
        isMobileOpen={isMobileOpen}
        onToggleMobile={() => setIsMobileOpen((prev) => !prev)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Sidebar (Persistent Desktop / Drawer Mobile) */}
      <Sidebar
        currentView={currentView}
        currentCategory={currentCategory}
        theme={theme}
        isMobileOpen={isMobileOpen}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
        onNavigateProfile={handleNavigateProfile}
        onToggleTheme={toggleTheme}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Page Wrapper (Offset 290px on Desktop, 58px on Mobile) */}
      <div className="lg:ml-[290px] pt-[58px] lg:pt-0 flex-1 flex flex-col w-full lg:w-[calc(100%-290px)] min-w-0 overflow-x-hidden">
        <main className="flex-1 w-full">
          {currentView === 'home' && (
            <div className="w-full animate-fadeIn">
              <HeroSection
                onSeeWork={handleSeeWork}
                onOpenBooking={() => setIsBookingOpen(true)}
              />
              <WorksSection
                projects={projects}
                onSelectProject={(proj) => setSelectedProject(proj)}
                onOpenFullShowcase={handleSelectCategory}
              />
              <PrinciplesSection />
              <TestimonialsSection testimonials={testimonials} />
              <EngagementsSection />
              <FaqSection />
              <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
            </div>
          )}

          {currentView === 'showcase' && (
            <div className="w-full animate-fadeIn">
              <ShowcaseView
                category={currentCategory}
                projects={projects}
                onSelectCategory={(cat) => setCurrentCategory(cat)}
                onBackHome={handleNavigateHome}
                onOpenProjectModal={(proj) => setSelectedProject(proj)}
              />
              <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
            </div>
          )}

          {currentView === 'profile' && (
            <div className="w-full animate-fadeIn">
              <ProfileView
                experience={experienceData}
                skills={skillCategories}
                certifications={certifications}
                awards={awards}
                onBackHome={handleNavigateHome}
                onOpenBooking={() => setIsBookingOpen(true)}
              />
              <ContactSection onOpenBooking={() => setIsBookingOpen(true)} />
            </div>
          )}
        </main>

        <Footer />
      </div>

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <BackToTop />
    </div>
  );
}

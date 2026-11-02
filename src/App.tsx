import React, { useState, useEffect, useRef } from 'react';
import type { CategoryKey, ThemeMode, ViewType, BriefData } from './types';
import { Sidebar } from './components/Sidebar';
import { MobileTopBar } from './components/MobileTopBar';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { AboutSection } from './components/AboutSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EngagementsSection } from './components/EngagementsSection';
import { FaqSection } from './components/FaqSection';
import { PreFooterCta } from './components/PreFooterCta';
import { ShowcaseView } from './components/ShowcaseView';
import { ProfileView } from './components/ProfileView';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { MenuOverlay } from './components/MenuOverlay';
import { BriefModal } from './components/BriefModal';
import { BookingModal } from './components/BookingModal';
import Lenis from 'lenis';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentCategory, setCurrentCategory] = useState<CategoryKey>('all');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeBrief, setActiveBrief] = useState<BriefData | null>(null);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Theme State
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('saikat_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return 'dark';
  });

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

  // Lenis & Motion Engine Setup
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
      const lenis = new Lenis({
        smoothWheel: !isReducedMotion,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenisRef.current = lenis;

      let rafId: number;
      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Back to top scroll listener
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setBackToTopVisible(scrollY > 350);
      };
      lenis.on('scroll', handleScroll);
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (err) {
      console.warn('Lenis setup fallback:', err);
    }
  }, []);

  // Text Animations & Intersection Observer
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Word text splitting
    const wordElements = document.querySelectorAll<HTMLElement>('[data-motion="word"]');
    wordElements.forEach((el) => {
      if (el.dataset.splitDone) return;
      el.dataset.splitDone = 'true';
      const originalText = el.textContent?.trim() || '';
      const words = originalText.split(/\s+/);
      const stagger = parseFloat(el.getAttribute('data-stagger') || '18');
      const baseDelay = parseFloat(el.getAttribute('data-delay') || '0');

      el.innerHTML = words
        .map((word, i) => {
          const delay = baseDelay + i * stagger;
          return `<span class="word-mask"><span class="word-inner" style="transition-delay: ${delay}ms;">${word}&nbsp;</span></span>`;
        })
        .join('');
    });

    // Line reveal stagger
    const lineElements = document.querySelectorAll<HTMLElement>('[data-motion="line"]');
    lineElements.forEach((el) => {
      const stagger = parseFloat(el.getAttribute('data-stagger') || '90');
      const lines = el.querySelectorAll<HTMLElement>('.line-inner');
      lines.forEach((line, i) => {
        line.style.transitionDelay = `${i * stagger}ms`;
      });
    });

    // Delays
    document.querySelectorAll<HTMLElement>('[data-stagger-index]').forEach((el) => {
      const idx = parseFloat(el.getAttribute('data-stagger-index') || '0');
      const stagger = parseFloat(el.getAttribute('data-stagger') || '90');
      el.style.transitionDelay = `${idx * stagger}ms`;
    });

    document.querySelectorAll<HTMLElement>('[data-delay]').forEach((el) => {
      if (el.getAttribute('data-motion') !== 'word') {
        const delay = parseFloat(el.getAttribute('data-delay') || '0');
        el.style.transitionDelay = `${delay}ms`;
      }
    });

    // Intersection Observer
    if (isReducedMotion) {
      document.querySelectorAll('.motion-fade-up, .motion-fade, .motion-plate, [data-motion]').forEach((el) => {
        el.classList.add('is-revealed');
      });
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px -10% 0px' }
      );

      document.querySelectorAll('.motion-fade-up, .motion-fade, .motion-plate, [data-motion]').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [currentView]);

  // Navigation Handlers
  const handleNavigateHome = () => {
    setCurrentView('home');
    setMobileSidebarOpen(false);
    setMenuOverlayOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateProfile = () => {
    setCurrentView('profile');
    setMobileSidebarOpen(false);
    setMenuOverlayOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: CategoryKey) => {
    setCurrentCategory(cat);
    setCurrentView('showcase');
    setMobileSidebarOpen(false);
    setMenuOverlayOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSeeWork = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const target = document.getElementById('about');
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, { offset: 0, duration: 1.0 });
        } else {
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.getElementById('about');
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: 0, duration: 1.0 });
      } else {
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleInitiateBriefing = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const target = document.getElementById('contact');
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, { offset: 0, duration: 1.0 });
        } else {
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.getElementById('contact');
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: 0, duration: 1.0 });
      } else {
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="site-root-layout">
      {/* Floating Back to Top Button */}
      <BackToTop visible={backToTopVisible} onScrollTop={handleScrollTop} />

      {/* Persistent Full-Height Left Sidebar: Showcase Archetypes */}
      <Sidebar
        currentView={currentView}
        currentCategory={currentCategory}
        theme={theme}
        isOpen={mobileSidebarOpen}
        onSelectCategory={handleSelectCategory}
        onNavigateHome={handleNavigateHome}
        onNavigateProfile={handleNavigateProfile}
        onToggleTheme={toggleTheme}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Site Wrapper (Offset for full-height left sidebar on desktop) */}
      <div className="site-page-wrapper">
        {/* Mobile Sticky Top Header (< 1024px) */}
        <MobileTopBar
          theme={theme}
          onNavigateHome={handleNavigateHome}
          onOpenSidebar={() => setMobileSidebarOpen(true)}
          onToggleTheme={toggleTheme}
          onToggleMenu={() => setMenuOverlayOpen((prev) => !prev)}
        />

        {/* Home Page View Panel */}
        <div id="home-view" className={`site-view-panel home-view-panel ${currentView === 'home' ? '' : 'is-hidden'}`}>
          <HeroSection
            onSeeWork={handleSeeWork}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
          <StatementSection />
          <AboutSection
            onInitiateBriefing={handleInitiateBriefing}
            onNavigateProfile={handleNavigateProfile}
          />
          <PrinciplesSection />
          <TestimonialsSection />
          <EngagementsSection />
          <FaqSection />
          <PreFooterCta
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        </div>

        {/* Dedicated Archetype Showcase View */}
        <div id="showcase-view" className={`site-view-panel showcase-view-panel ${currentView === 'showcase' ? '' : 'is-hidden'}`}>
          <ShowcaseView
            currentCategory={currentCategory}
            onSelectCategory={handleSelectCategory}
            onNavigateHome={handleNavigateHome}
            onOpenBrief={(brief) => setActiveBrief(brief)}
          />
        </div>

        {/* Dedicated Profile View Panel */}
        <div id="profile-view" className={`site-view-panel profile-view-panel ${currentView === 'profile' ? '' : 'is-hidden'}`}>
          <ProfileView
            onNavigateHome={handleNavigateHome}
            onOpenBooking={() => setBookingModalOpen(true)}
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Modal Menu Overlay */}
      <MenuOverlay
        isOpen={menuOverlayOpen}
        theme={theme}
        onClose={() => setMenuOverlayOpen(false)}
        onNavigateHome={handleNavigateHome}
        onNavigateProfile={handleNavigateProfile}
        onSelectCategory={handleSelectCategory}
        onToggleTheme={toggleTheme}
        onOpenBooking={() => {
          setMenuOverlayOpen(false);
          setBookingModalOpen(true);
        }}
      />

      {/* Interactive Case Study Modal */}
      <BriefModal
        brief={activeBrief}
        onClose={() => setActiveBrief(null)}
        onOpenBooking={() => {
          setActiveBrief(null);
          setBookingModalOpen(true);
        }}
      />

      {/* Interactive 20-min Call Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}

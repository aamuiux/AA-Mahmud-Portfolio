import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 bg-[var(--surface-grey)] border border-dashed border-[var(--line-strong)] text-[var(--ink)] rounded shadow-lg hover:bg-[var(--ink)] hover:text-[var(--canvas)] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono group"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
      <span className="hidden sm:inline">Top</span>
    </button>
  );
};

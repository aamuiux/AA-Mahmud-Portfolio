import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 sm:px-10 lg:px-14 bg-[var(--canvas)] text-xs text-[var(--ink-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="font-['Space_Grotesk'] font-bold text-sm text-[var(--ink)]">
          AA Mahmud
        </span>{' '}
        · Lead UI/UX Designer &amp; AI Strategist
      </div>
      <p className="text-[var(--ink-muted)] text-center sm:text-right">
        Designed and built by AA Mahmud in Dhaka. All rights reserved.
      </p>
    </footer>
  );
};

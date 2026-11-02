import React from 'react';

interface BackToTopProps {
  visible: boolean;
  onScrollTop: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ visible, onScrollTop }) => {
  return (
    <button
      id="back-to-top"
      className={`back-to-top-btn ${visible ? 'is-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={onScrollTop}
    >
      <span className="arrow-up" aria-hidden="true">↑</span>
      <span className="back-to-top-label">TOP</span>
    </button>
  );
};

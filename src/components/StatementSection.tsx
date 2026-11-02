import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section className="statement-section rule-dashed" aria-label="Philosophy Statement">
      <div className="statement-inner">
        <div className="eyebrow motion-fade" data-motion="fade" style={{ marginBottom: "3rem" }}>
          <span className="eyebrow-line" aria-hidden="true"></span>
          <span className="eyebrow-text">Design Philosophy</span>
        </div>

        <p className="statement-text" data-motion="word" data-stagger="30">For me, design and problem solving is more than work—it’s a calling. I wake up excited about turning ideas into experiences that make people’s lives better. Passion isn’t just what drives me; it’s what keeps me curious, motivated, and eager to grow.</p>

        <span className="statement-signature motion-fade-up" data-motion="fade-up" data-delay="400">— AA Mahmud · Lead UI/UX Designer</span>
      </div>
    </section>

  );
};

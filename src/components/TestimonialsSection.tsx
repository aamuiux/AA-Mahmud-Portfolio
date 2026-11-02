import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-pad rule-dashed" aria-label="Executive Endorsements">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow motion-fade" data-motion="fade">
            <span className="eyebrow-line" aria-hidden="true"></span>
            <span className="eyebrow-text">Executive Endorsements</span>
          </div>
          <h2 className="section-heading-title" data-motion="line" data-stagger="90">
            <span className="line-mask"><span className="line-inner">What CTOs, Founders</span></span>
            <span className="line-mask"><span className="line-inner">and Leaders say.</span></span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {/*  Testimonial 01: Shahzada Redwan  */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="0" data-stagger="110">
            <blockquote className="testimonial-quote">
              “Abdullah played a key role in the UI/UX design of several fintech and tech applications and has an excellent understanding of user-centered design. His creativity, strong analytical skills, and in-depth knowledge of UX trends make him a valuable asset to any team.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/shazredwan/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Shahzada Redwan's LinkedIn Profile" title="Shahzada Redwan on LinkedIn">
                  <img src="/public/assets/endorsements/shahzada_redwan.jpg" alt="Shahzada Redwan — Director of Engineering, Field Nation" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/shazredwan/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Shahzada Redwan on LinkedIn">
                    <span className="testimonial-author">Shahzada Redwan</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">Director of Engineering, Field Nation</p>
                </div>
              </div>
            </figcaption>
          </figure>

          {/*  Testimonial 02: Mohammad Bahar Uddin  */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="1" data-stagger="110">
            <blockquote className="testimonial-quote">
              “Abdullah's attention to detail and creative problem-solving skills are unparalleled. He has extensive experience in a variety of industries, including fintech, eCommerce, B2B, B2C, ERP, HRM, and CRM, which has made him a valuable member of our team.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/mohammad-bahar-uddin-52418686/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Mohammad Bahar Uddin's LinkedIn Profile" title="Mohammad Bahar Uddin on LinkedIn">
                  <img src="/public/assets/endorsements/bahar_uddin.jpg" alt="Mohammad Bahar Uddin — SVP, Head of Technology at QuantFintech Ltd" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/mohammad-bahar-uddin-52418686/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Mohammad Bahar Uddin on LinkedIn">
                    <span className="testimonial-author">Mohammad Bahar Uddin</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">SVP, Head of Technology at QuantFintech Ltd</p>
                </div>
              </div>
            </figcaption>
          </figure>

          {/*  Testimonial 03: Md. Taukir Hasan  */}
          <figure className="testimonial-figure motion-fade-up" data-motion="fade-up" data-stagger-index="2" data-stagger="110">
            <blockquote className="testimonial-quote">
              “I particularly impressed with Abdullah's ability to strike a balance between design and business objectives. He is adept at coordinating the design since he recognizes how important design is to achieving business goals.”
            </blockquote>
            <figcaption className="testimonial-caption">
              <div className="testimonial-author-row">
                <a href="https://www.linkedin.com/in/taukirxhasan/" target="_blank" rel="noreferrer noopener" className="testimonial-avatar-link" aria-label="Visit Md. Taukir Hasan's LinkedIn Profile" title="Md. Taukir Hasan on LinkedIn">
                  <img src="/public/assets/endorsements/taukir_hasan.jpg" alt="Md. Taukir Hasan — Head of Product &amp; AI, SSL Wireless" className="testimonial-avatar-img" width="48" height="48" loading="lazy" />
                </a>
                <div className="testimonial-author-info">
                  <a href="https://www.linkedin.com/in/taukirxhasan/" target="_blank" rel="noreferrer noopener" className="testimonial-author-name-link" title="Md. Taukir Hasan on LinkedIn">
                    <span className="testimonial-author">Md. Taukir Hasan</span>
                    <svg className="testimonial-linkedin-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <p className="testimonial-role">Head of Product &amp; AI, SSL Wireless</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

  );
};

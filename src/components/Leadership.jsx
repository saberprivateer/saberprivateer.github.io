import React from 'react';

const Leadership = () => {
  return (
    <section id="leadership" className="section container">
      <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{ fontSize: '2rem' }}>Speaking & Advisory</h2>
        <p className="fade-up delay-1" style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
          Thought leadership and guidance for emerging technology platforms and hardware startups.
        </p>
      </div>

      <div className="grid-2">
        <div className="editorial-block fade-up delay-1">
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>Speaker</h3>
          <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1rem' }}>Meta Connect</p>
          <p style={{ fontSize: '1rem', marginBottom: '0' }}>
            Shared insights and strategies on the main stage regarding the Quest developer platform, growth tactics, and the future of AR/VR ecosystems.
          </p>
        </div>

        <div className="editorial-block fade-up delay-2">
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>Advisory Board Member</h3>
          <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '1rem' }}>Lightform (2013 - 2021)</p>
          <p style={{ fontSize: '1rem', marginBottom: '0' }}>
            Provided strategic guidance on product vision and go-to-market for a pioneering hardware Augmented Reality (AR) start-up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

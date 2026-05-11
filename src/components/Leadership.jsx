import React from 'react';
import metaLogo from '../assets/logos/meta.png';
import amazonLogo from '../assets/logos/amazon.png';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <img src={metaLogo} alt="Meta logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>Speaker</h3>
              <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0' }}>Meta Connect</p>
            </div>
          </div>
          <p style={{ fontSize: '1rem', marginBottom: '0' }}>
            Shared insights and strategies on the main stage regarding the Quest developer platform, growth tactics, and the future of AR/VR ecosystems.
          </p>
        </div>

        <div className="editorial-block fade-up delay-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <img src={amazonLogo} alt="Amazon logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>Advisory Board Member</h3>
              <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.25rem', marginBottom: '0' }}>Lightform (acquired by Amazon) (2013 - 2021)</p>
            </div>
          </div>
          <p style={{ fontSize: '1rem', marginBottom: '0' }}>
            Provided strategic guidance on product vision and go-to-market for a pioneering hardware Augmented Reality (AR) start-up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

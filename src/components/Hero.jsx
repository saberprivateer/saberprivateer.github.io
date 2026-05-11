import React from 'react';

const Hero = () => {
  return (
    <section className="section container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="fade-up">
        <h1 style={{ marginBottom: '1rem' }}>
          Hi, I'm <span className="text-gradient">Daniel Kamerling</span>
        </h1>
        <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '2rem' }}>
          Product leader driving business growth by launching cutting-edge technology platforms.
        </h2>
        <p style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '3rem' }}>
          My impact includes scaling a 10x increase in customers, launching developer platforms generating $200M+ in revenue, and releasing 20+ AAA games representing $30M+ of investment. I specialize in Cloud Gaming, AR/VR, Robotics, and AI.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://linkedin.com/in/danielkamerling" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Connect on LinkedIn
          </a>
          <a href="#experience" className="btn btn-outline">
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

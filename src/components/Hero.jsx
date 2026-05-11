import React from 'react';

const Hero = () => {
  return (
    <section className="section container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="fade-up" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ marginBottom: '1rem' }}>
            Hi, I'm <span className="text-gradient">Daniel Kamerling</span>
          </h1>
          <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '2rem' }}>
            Product leader driving business growth by launching cutting-edge technology platforms.
          </h2>
          <p style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '3rem' }}>
            My impact includes scaling a 10x increase in customers, launching developer platforms generating $200M+ in revenue, and releasing 20+ AAA games representing $30M+ of investment. I specialize in Cloud Gaming, AR/VR, Robotics, and AI.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>
            <a href="https://linkedin.com/in/danielkamerling" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href="https://github.com/saberprivateer" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </div>
        </div>
        <div style={{ flex: '0 0 300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '300px', 
            height: '300px', 
            borderRadius: '50%', 
            overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 30px rgba(109, 40, 217, 0.3)'
          }}>
            <img src="/headshot.png" alt="Daniel Kamerling Headshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <section className="section container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        
        {/* Left Column: The Professional / Strategic Focus */}
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}>
            Taking new tech from <span style={{ color: 'var(--accent-primary)' }}>0 to 1</span> and productizing it.
          </h1>
          <h2 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '2rem', fontSize: '1.5rem' }}>
            I specialize in Strategy and Innovation for B2B and technical users.
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.125rem' }}>
              I'm Daniel Kamerling. As a Product Leader, I bridge the gap between complex engineering and market viability. My focus is primarily on highly technical audiences—developers, business analysts, and BD teams—building platforms that scale.
            </p>
            <p style={{ fontSize: '1.125rem' }}>
              My career highlights include scaling a 10x increase in customers at Intrinsic, launching developer platforms generating $200M+ in revenue at Meta, and releasing 20+ AAA games representing $30M+ of investment at Google Stadia. I thrive in emerging tech like Cloud Gaming, AR/VR, Robotics, and AI.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#experience" className="btn btn-primary">
              View Experience
            </a>
            <a href="https://linkedin.com/in/danielkamerling" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href="https://github.com/saberprivateer" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column: The Personal Touch & Visual */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '350px',
            aspectRatio: '1/1', 
            borderRadius: '12px', 
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            margin: '0 auto',
            backgroundColor: 'var(--bg-secondary)'
          }}>
            <img src="/headshot.png" alt="Daniel Kamerling Headshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div className="editorial-block" style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>👋</span> Beyond the Screen
            </h3>
            <p style={{ fontSize: '1rem', marginBottom: '0' }}>
              I believe great products come from human connection and a light-hearted approach to hard problems. When I'm not strategizing the next tech leap, I'm usually exploring hobbies with my kids, volunteering with Hire Heroes USA, or tinkering in "The Lab". Let's connect!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

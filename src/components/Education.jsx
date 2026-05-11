import React from 'react';

const education = [
  {
    school: 'Kellogg School of Management, Northwestern University',
    degree: 'MBA + MEM',
    duration: 'Evanston, IL',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/northwesternuniversity.svg' // Fallback handled
  },
  {
    school: 'Florida Institute of Technology',
    degree: 'MS in Mechanical Engineering',
    duration: 'Melbourne, FL',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fitbit.svg' // Just an example, better to use fallback
  },
  {
    school: 'University of Virginia',
    degree: 'BS in Mechanical Engineering',
    duration: 'Charlottesville, VA',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/universityofvirginia.svg' // Fallback handled
  }
];

const Education = () => {
  return (
    <section id="education" className="section container">
      <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{ fontSize: '2rem' }}>Education</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {education.map((edu, index) => (
          <div key={index} className={`editorial-block fade-up delay-${(index % 3) + 1}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '8px', 
                background: 'var(--bg-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'var(--accent-primary)'
              }}>
                {edu.school.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{edu.school}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.875rem' }}>{edu.duration}</span>
                </div>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 500, fontSize: '1rem', marginBottom: 0 }}>{edu.degree}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

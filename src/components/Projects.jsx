import React from 'react';

const projects = [
  {
    title: 'App Development',
    description: 'Developed and launched multiple applications including a Defold idle game, a Flutter mobile app, and an AI-based facial recognition sample.',
    tags: ['Defold', 'Flutter', 'AI', 'Game Dev']
  },
  {
    title: 'Advisory Board Member @ Lightform',
    description: 'Advised a hardware AR start-up on product strategy and go-to-market. (2013 - 2021)',
    tags: ['AR', 'Hardware', 'Advising']
  },
  {
    title: 'Mentor @ Hire Heroes USA',
    description: 'Volunteering to help boost candidate pipelines with veterans. (2015 - Present)',
    tags: ['Mentorship', 'Volunteering']
  }
];

const education = [
  {
    degree: 'MBA + MEM',
    school: 'Kellogg School of Management, Northwestern University',
    location: 'Evanston, IL'
  },
  {
    degree: 'MS in Mechanical Engineering',
    school: 'Florida Institute of Technology',
    location: 'Melbourne, FL',
    details: 'Thesis in robotics'
  },
  {
    degree: 'BS in Mechanical Engineering',
    school: 'University of Virginia',
    location: 'Charlottesville, VA'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      
      <div className="grid-2">
        {/* Projects / Additional Exp */}
        <div>
          <h2 className="text-gradient fade-up" style={{ marginBottom: '2rem' }}>Additional Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {projects.map((proj, index) => (
              <div key={index} className="glass-card fade-up delay-1" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{proj.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.8rem', 
                      background: 'rgba(255,255,255,0.1)', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '50px',
                      color: 'var(--text-secondary)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-gradient fade-up" style={{ marginBottom: '2rem' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, index) => (
              <div key={index} className="glass-card fade-up delay-2" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>{edu.degree}</h3>
                <p style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.25rem', fontWeight: 500 }}>{edu.school}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span>{edu.location}</span>
                  {edu.details && <span>{edu.details}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

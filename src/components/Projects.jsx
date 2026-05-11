import React from 'react';
import kelloggLogo from '../assets/logos/kellogg.png';


const projects = [
  {
    title: 'App Development',
    description: <>Developed and launched multiple applications including a <span className="highlight">Defold idle game</span>, a <span className="highlight">Flutter mobile app</span>, and an <span className="highlight">AI-based facial recognition sample</span>.</>,
    tags: ['Defold', 'Flutter', 'AI', 'Game Dev']
  },
  {
    title: 'Advisory Board Member @ Lightform',
    description: <>Advised a <span className="highlight">hardware AR start-up</span> on product strategy and go-to-market. (2013 - 2021)</>,
    tags: ['AR', 'Hardware', 'Advising']
  },
  {
    title: 'Mentor @ Hire Heroes USA',
    description: <>Volunteering to help <span className="highlight">boost candidate pipelines</span> with <span className="highlight">veterans</span>. (2015 - Present)</>,
    tags: ['Mentorship', 'Volunteering']
  }
];

const education = [
  {
    degree: 'MBA + MEM',
    school: 'Kellogg School of Management, Northwestern University',
    location: 'Evanston, IL',
    logo: kelloggLogo
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
          <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '2rem' }}>
            <h2 className="fade-up" style={{ fontSize: '2rem' }}>Additional Experience</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {projects.map((proj, index) => (
              <div key={index} className="editorial-block fade-up delay-1">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  {proj.title !== 'App Development' && (
                    <div style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '8px', 
                      background: 'var(--bg-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: 'var(--accent-primary)'
                    }}>
                      {proj.title.charAt(0)}
                    </div>
                  )}

                  <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>{proj.title}</h3>
                </div>
                <p style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>{proj.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.8rem', 
                      background: 'var(--bg-primary)', 
                      border: '1px solid var(--border-color)',
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '4px',
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
          <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '2rem' }}>
            <h2 className="fade-up" style={{ fontSize: '2rem' }}>Education</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {education.map((edu, index) => (
              <div key={index} className="editorial-block fade-up delay-2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '8px', 
                    background: 'var(--bg-primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: 'var(--accent-primary)',
                    overflow: 'hidden'
                  }}>
                    {edu.logo ? (
                      <img src={edu.logo} alt={`${edu.school} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      edu.school.charAt(0)
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--accent-primary)' }}>{edu.degree}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: 0, fontWeight: 500 }}>{edu.school}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem', paddingLeft: 'calc(36px + 1rem)' }}>
                  <span>{edu.location}</span>
                  {edu.details && <span>{edu.details}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Lab / Playground */}
      <div style={{ marginTop: '4rem' }}>
        <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h2 className="fade-up" style={{ fontSize: '2rem' }}>The Lab & Playground</h2>
        </div>
        <p className="fade-up" style={{ marginBottom: '2rem' }}>This site serves as a testing ground for my personal projects. Here are some of the experiments and tools I've built:</p>
        <div className="grid-2">
          <div className="editorial-block fade-up delay-1">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Riot Tracker</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>A tool or tracker related to Riot Games (League of Legends), likely exploring APIs or player data.</p>
            <a href="/legacy/RiotTracker/index.html" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Open Project</a>
          </div>
          <div className="editorial-block fade-up delay-2">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Garry's List</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>Another legacy project or tool hosted on the site.</p>
            <a href="/legacy/garryslist/index.html" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Open Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

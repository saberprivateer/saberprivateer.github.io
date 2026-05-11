import React, { useState } from 'react';
import netflixLogo from '../assets/logos/netflix.png';
import metaLogo from '../assets/logos/meta.png';
import googleLogo from '../assets/logos/google.png';


const experiences = [
  {
    company: 'Netflix',
    logo: netflixLogo,
    role: 'Group Product Manager',

    duration: 'Present',
    bullets: [
      <>Group Product Manager for a portfolio of products and services that enable global partners to quickly and efficiently onboard, integrate, test, and launch Netflix across <span className="highlight">any device or platform</span>.</>,
      <>Lead team supporting global partners to grow the subscriber base from <span className="highlight">300 million</span> to the next big milestone.</>,
      <>Drive impact on the <span className="highlight">"seamless living room experience"</span> by improving partner integration efficiency.</>
    ]
  },
  {
    company: 'Intrinsic',
    role: 'Group Product Manager',
    duration: '2023 - Present',
    bullets: [
      <>Spearheaded shift from a high-touch integration model to a scalable self-serve platform, unlocking scale needed to gain a <span className="highlight">10x increase in customers</span> and an increase in company valuation by <span className="highlight">60%</span>.</>,
      <>Hire and grow a team of 4 PMs which are leading <span className="highlight">~40+ engineers</span> to build the end-to-end experience for creating automation with robotics including low-code, APIs, LLMs, developer environment, digital twin creation, onboarding, component catalogs and publishing, documentation, enterprise tools, and billing.</>,
      <>Collaborate cross-functionally: With marketing to define and launch beta experience for <span className="highlight">50+ industry participants</span> and experience for multiple trade shows with <span className="highlight">100,000s of visitors</span>. Work with sales to define target industries and pricing strategy.</>,
      <>Mature the organization by creating a transparent and performing product culture including passion for users, everyday use of AI, and reviews to improve decision velocity.</>
    ]
  },
  {
    company: 'Meta',
    logo: metaLogo,
    role: 'Lead Product Manager (Oculus)',

    duration: '2020 - 2023',
    bullets: [
      <>Scaled the Quest developer platform to <span className="highlight">10,000s MAU</span> that launched 100s of apps per year with a revenue of <span className="highlight">$200M+</span> through strategic initiatives including segmentation/targeting platform for marketing automation, cross-platform infrastructure for XR future, complete site redesign, and more.</>,
      <>Speaker at <span className="highlight">Meta Connect</span> and founding member of the Orion (AR glasses) developer platform.</>,
      <>Built publisher insights for growing and engaging with customers.</>
    ]
  },
  {
    company: 'Google',
    logo: googleLogo,
    role: 'Product Manager (Stadia)',

    duration: '2018 - 2020',
    bullets: [
      <>Drove the launch of <span className="highlight">20+ AAA games</span> on Stadia representing <span className="highlight">$10Ms of investment</span>.</>,
      <>Defined and executed Stadia’s GDC presence which served <span className="highlight">~30k industry attendees</span> including 6 stage talks, two dozen demos, and launch of developer site.</>,
      <>Part of the launch team, responsible for gamer services and technical certification.</>
    ]
  },
  {
    company: 'Beachbody',
    role: 'Senior Manager of Product Management',
    duration: '2016 - 2018',
    bullets: [
      <>Led A/B testing resulting in <span className="highlight">$8M ARR</span>.</>,
      <>Redesigned the checkout flow to improve user experience and conversion.</>,
      <>Modernized foundational technology to increase speed of development by <span className="highlight">200%</span>.</>
    ]
  },
  {
    company: 'Mobcrush',
    role: 'Senior Product Manager',
    duration: '2016',
    bullets: [
      <>Responsible for developing the product management function to support scale, including building the structure for an agile development process across business, product, design, and engineering.</>
    ]
  },
  {
    company: 'Pivotal Labs',
    role: 'Senior Product Manager',
    duration: '2015 - 2016',
    bullets: [
      <>Built analytics tool that won business from a top bank.</>,
      <>Responsible for executing product design through Discovery & Framing and software development using extreme programming methodology.</>
    ]
  },
  {
    company: 'Riot Games',
    role: 'Product Manager',
    duration: '2013 - 2015',
    bullets: [
      <>Product Manager for store with <span className="highlight">~60M MAU</span> and incremental <span className="highlight">$100Ms revenue</span>.</>,
      <>Responsible globally for the stewardship of commerce product features on League of Legends which is a 24/7 live game as a service.</>,
      <>Launched Mystery Gifting and End of Game Gifting resulting in significant revenue growth.</>
    ]
  },
  {
    company: 'IBM Strategy',
    role: 'Managing Consultant',
    duration: '2011 - 2013',
    bullets: [
      <>Achieved savings of <span className="highlight">$50M</span> from portfolio rationalization.</>,
      <>Develop innovative solutions for clients vital business issues by developing strategic frameworks and formulating actionable roadmaps.</>
    ]
  },
  {
    company: 'SPC / DARPA',
    role: 'Research Engineer',
    duration: '2008 - 2009',
    bullets: [
      <>Identified investment opportunities (<span className="highlight">~$200k-$5M</span>) and managed progress of disruptive technology initiatives for DARPA.</>
    ]
  },
  {
    company: 'Harris',
    role: 'Mechanical Engineer 2',
    duration: '2004 - 2007',
    bullets: [
      <>Mechanical Engineer in the Defense Industry w/Top Secret clearance.</>,
      <>Performed project management duties of <span className="highlight">+$200k project</span> including supplier selection and oversight.</>
    ]
  }
];

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredExperiences = experiences.slice(0, 4); 
  const olderExperiences = experiences.slice(4);


  return (
    <section id="experience" className="section container">
      <div style={{ borderTop: '2px solid var(--text-primary)', paddingTop: '2rem', marginBottom: '3rem' }}>
        <h2 className="fade-up" style={{ fontSize: '2rem' }}>Experience</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {featuredExperiences.map((exp, index) => (
          <div key={index} className={`editorial-block fade-up delay-${(index % 3) + 1}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '10px', 
                background: 'var(--bg-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--accent-primary)',
                overflow: 'hidden'
              }}>
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} logo`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                ) : (
                  exp.company.charAt(0)
                )}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{exp.company}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}>{exp.duration}</span>
                </div>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 500, fontSize: '1.125rem', marginBottom: 0 }}>{exp.role}</p>
              </div>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', lineHeight: '1.5' }}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Collapsible Section for Older Experience */}
        {showAll && olderExperiences.map((exp, index) => (
          <div key={index + 3} className="editorial-block fade-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {exp.company === 'Riot Games' && (
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '10px', 
                  background: 'var(--bg-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)'
                }}>
                  {exp.company.charAt(0)}
                </div>
              )}

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 0 }}>{exp.company}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1rem' }}>{exp.duration}</span>
                </div>
                <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '1.125rem', marginBottom: 0 }}>{exp.role}</p>
              </div>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.75rem', lineHeight: '1.5' }}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="btn btn-outline"
            style={{ padding: '0.75rem 2rem' }}
          >
            {showAll ? 'Show Less' : 'View Previous Roles'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useState } from 'react';

const experiences = [
  {
    company: 'Intrinsic',
    role: 'Group Product Manager',
    duration: '2023 - Present',
    bullets: [
      'Spearheaded shift from a high-touch integration model to a scalable self-serve platform, unlocking scale needed to gain a 10x increase in customers and an increase in company valuation by 60%.',
      'Hire and grow a team of 4 PMs which are leading ~40+ engineers to build the end-to-end experience for creating automation with robotics including low-code, APIs, LLMs, developer environment, digital twin creation, onboarding, component catalogs and publishing, documentation, enterprise tools, and billing.',
      'Collaborate cross-functionally: With marketing to define and launch beta experience for 50+ industry participants and experience for multiple trade shows with 100,000s of visitors. Work with sales to define target industries and pricing strategy.',
      'Mature the organization by creating a transparent and performing product culture including passion for users, everyday use of AI, and reviews to improve decision velocity.'
    ]
  },
  {
    company: 'Meta',
    role: 'Lead Product Manager (Oculus)',
    duration: '2020 - 2023',
    bullets: [
      'Scaled the Quest developer platform to 10,000s MAU that launched 100s of apps per year with a revenue of $200M+ through strategic initiatives including segmentation/targeting platform for marketing automation, cross-platform infrastructure for XR future, complete site redesign, and more.',
      'Speaker at Meta Connect and founding member of the Orion (AR glasses) developer platform.',
      'Built publisher insights for growing and engaging with customers.'
    ]
  },
  {
    company: 'Google',
    role: 'Product Manager (Stadia)',
    duration: '2018 - 2020',
    bullets: [
      'Drove the launch of 20+ AAA games on Stadia representing $10Ms of investment.',
      'Defined and executed Stadia’s GDC presence which served ~30k industry attendees including 6 stage talks, two dozen demos, and launch of developer site.',
      'Part of the launch team, responsible for gamer services and technical certification.'
    ]
  },
  {
    company: 'Beachbody',
    role: 'Senior Manager of Product Management',
    duration: '2016 - 2018',
    bullets: [
      'Led A/B testing resulting in $8M ARR.',
      'Redesigned the checkout flow to improve user experience and conversion.',
      'Modernized foundational technology to increase speed of development by 200%.'
    ]
  },
  {
    company: 'Mobcrush',
    role: 'Senior Product Manager',
    duration: '2016',
    bullets: [
      'Responsible for developing the product management function to support scale, including building the structure for an agile development process across business, product, design, and engineering.'
    ]
  },
  {
    company: 'Pivotal Labs',
    role: 'Senior Product Manager',
    duration: '2015 - 2016',
    bullets: [
      'Built analytics tool that won business from a top bank.',
      'Responsible for executing product design through Discovery & Framing and software development using extreme programming methodology.'
    ]
  },
  {
    company: 'Riot Games',
    role: 'Product Manager',
    duration: '2013 - 2015',
    bullets: [
      'Product Manager for store with ~60M MAU and incremental $100Ms revenue.',
      'Responsible globally for the stewardship of commerce product features on League of Legends which is a 24/7 live game as a service.',
      'Launched Mystery Gifting and End of Game Gifting resulting in significant revenue growth.'
    ]
  },
  {
    company: 'IBM Strategy',
    role: 'Managing Consultant',
    duration: '2011 - 2013',
    bullets: [
      'Achieved savings of $50M from portfolio rationalization.',
      'Developed innovative solutions for clients vital business issues by developing strategic frameworks and formulating actionable roadmaps.'
    ]
  },
  {
    company: 'SPC / DARPA',
    role: 'Research Engineer',
    duration: '2008 - 2009',
    bullets: [
      'Identified investment opportunities (~$200k-$5M) and managed progress of disruptive technology initiatives for DARPA.'
    ]
  },
  {
    company: 'Harris',
    role: 'Mechanical Engineer 2',
    duration: '2004 - 2007',
    bullets: [
      'Mechanical Engineer in the Defense Industry w/Top Secret clearance.',
      'Performed project management duties of +$200k project including supplier selection and oversight.'
    ]
  }
];

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredExperiences = experiences.slice(0, 3); // Intrinsic, Meta, Google
  const olderExperiences = experiences.slice(3);

  return (
    <section id="experience" className="section container">
      <h2 className="text-gradient fade-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>Experience</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {featuredExperiences.map((exp, index) => (
          <div key={index} className={`glass-card fade-up delay-${(index % 3) + 1}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3>{exp.role} <span style={{ color: 'var(--accent-secondary)', fontWeight: 400 }}>@ {exp.company}</span></h3>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.duration}</span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Collapsible Section for Older Experience */}
        {showAll && olderExperiences.map((exp, index) => (
          <div key={index + 3} className="glass-card fade-up" style={{ opacity: 0.9 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3>{exp.role} <span style={{ color: 'var(--accent-secondary)', fontWeight: 400 }}>@ {exp.company}</span></h3>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.duration}</span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)} 
            className="btn btn-outline"
            style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}
          >
            {showAll ? 'Show Less' : 'View Older Experience'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

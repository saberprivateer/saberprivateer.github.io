import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-right"></div>
      
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>

      <footer className="container section text-center">
        <p>© {new Date().getFullYear()} Daniel Kamerling. All rights reserved.</p>
        <p className="text-sm">
          {/* Vercel/Netlify deployment reminder */}
          {/* TODO: When deploying to Vercel/Netlify with a custom domain, ensure routing is configured correctly if React Router is added later. */}
        </p>
      </footer>
    </div>
  );
}

export default App;

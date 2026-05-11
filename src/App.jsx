import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
          customSmoothScrollTo(targetY, 1500); // 1500ms duration for slower scroll
        }
      }
    };

    const customSmoothScrollTo = (targetY, duration) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleAnchorClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);

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

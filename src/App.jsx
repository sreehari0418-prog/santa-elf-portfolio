import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { TerminalSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative z-10 selection:bg-primary selection:text-bg-page">
      {/* Santa Animation */}
      <div className="santa-sleigh">
        🦌🦌🛷🎅
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-border bg-bg-page/80 backdrop-blur-md">
        <div className="container flex justify-between items-center h-16">
          <div className="font-bold flex items-center gap-2 text-primary">
            {/* Logo/Title removed as requested */}
          </div>
          <div className="flex gap-8 text-sm font-medium text-text-muted">
            {/* Nav links removed as requested */}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-border mt-20 bg-bg-card">
        <div className="container flex justify-between items-center text-text-muted text-sm">
          <p>© 2025 Sreehari Evergreen. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Operational
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Sparkles } from 'lucide-react';

function App() {
    // Simple snowflake effect
    useEffect(() => {
        const createSnowflake = () => {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerText = '❄';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';

            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        };

        const interval = setInterval(createSnowflake, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative z-10">
            <nav className="fixed top-0 w-full z-50 glass shadow-lg">
                <div className="container flex justify-between items-center py-4">
                    <div className="text-2xl gradient-text font-bold flex items-center gap-2">
                        <Sparkles className="text-primary" />
                        Frostbyte.dev
                    </div>
                    <div className="flex gap-6 text-sm font-semibold">
                        <a href="#about" className="hover:text-primary transition-colors">ELF.LOG</a>
                        <a href="#projects" className="hover:text-primary transition-colors">BLUEPRINTS</a>
                        <a href="#contact" className="hover:text-primary transition-colors">HIRE_ME</a>
                    </div>
                </div>
            </nav>

            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>

            <footer className="py-8 text-center text-text-muted text-sm border-t border-white/10 mt-20">
                <p>© 2025 Sreehari "Frostbyte" Evergreen. Made with <span className="text-secondary">♥</span> at the North Pole.</p>
                <p className="text-xs opacity-50 mt-2">Authorized by Santa Claus Inc. R&D Dept.</p>
            </footer>
        </div>
    );
}

export default App;

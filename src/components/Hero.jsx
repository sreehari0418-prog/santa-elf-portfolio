import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center">
            <div className="container">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Available for North Pole Operations
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Delivering Happiness <br />
                        <span className="text-text-muted">At Global Scale.</span>
                    </h1>

                    <p className="text-xl text-text-muted max-w-xl leading-relaxed">
                        I am <strong className="text-white">Sreehari Evergreen</strong>, a Senior Systems Architect specializing in quantum logistics, RTOS sleigh navigation, and high-availability magical infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Projects <ArrowRight size={18} />
                        </button>
                        <a href="/sree.pdf" download="Sreehari_Resume.pdf" className="btn-primary">
                            Download Resume <Download size={18} />
                        </a>
                    </div>

                    <div className="pt-16 grid grid-cols-3 gap-8 border-t border-border">
                        <div>
                            <div className="text-3xl font-bold text-white">4+</div>
                            <div className="text-sm text-text-muted mt-1">Major Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">Full Stack</div>
                            <div className="text-sm text-text-muted mt-1">Development Ready</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">100%</div>
                            <div className="text-sm text-text-muted mt-1">Commitment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { Terminal, Gift, Code } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section-screen relative overflow-hidden">
            <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-2 glass rounded-full text-secondary text-sm font-bold border border-secondary/30">
                        🎄 NOW HIRING: SANTA'S ELITES
                    </div>
                    <h1 className="text-6xl md:text-8xl gradient-text leading-tight">
                        Elf <br /> Engineer.
                    </h1>
                    <p className="text-xl text-text-muted max-w-lg">
                        I build the tech that powers the North Pole. From <span className="text-white">Quantum Sleigh Navigation</span> to <span className="text-white">Naughty-List Blockchain</span>.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button className="px-8 py-4 bg-secondary text-white rounded-lg font-bold hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition-all flex items-center gap-2">
                            <Terminal size={20} />
                            View Logs
                        </button>
                        <button className="px-8 py-4 glass text-white rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                            <Gift size={20} />
                            My Stack
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Abstract Techno-Tree Representation */}
                    <div className="w-full aspect-square glass flex items-center justify-center relative">
                        <Code size={120} className="text-primary opacity-50 absolute" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center space-y-4 p-8 border border-white/5 rounded-xl bg-bg-dark/50">
                            <div className="text-4xl">🧝</div>
                            <h3 className="text-2xl font-bold font-heading text-accent">Sreehari "Frostbyte"</h3>
                            <p className="text-sm text-text-muted">Head of R&D</p>
                            <div className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                ID: ELF-8088-X
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

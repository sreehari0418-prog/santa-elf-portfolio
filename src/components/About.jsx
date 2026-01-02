import React from 'react';
import { Cpu, Globe, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Core Infrastructure</h2>
                        <p className="text-text-muted max-w-xl">
                            We don't just build toys; we build the systems that deliver them. My role involves architecting scalable solutions for the world's highest-traffic night.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
                    {/* Large Card */}
                    <div className="card md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="p-3 bg-bg-card-hover w-fit rounded-lg mb-6 border border-border">
                                <Globe className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Sleigh-OS Navigation</h3>
                            <p className="text-text-muted leading-relaxed">
                                Engineered the custom real-time operating system ensuring sub-millisecond route optimization for 500M+ stops. Integrated with Chimney-Lidar API for safe entry.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-2">
                            <span className="text-xs font-mono bg-border px-2 py-1 rounded text-text-muted">Rust</span>
                            <span className="text-xs font-mono bg-border px-2 py-1 rounded text-text-muted">WASM</span>
                        </div>
                    </div>

                    {/* Smaller Cards */}
                    <div className="card md:col-span-1 md:row-span-1">
                        <Cpu className="text-primary mb-4" size={24} />
                        <h3 className="text-lg font-bold text-white">Quantum Wrapping</h3>
                        <p className="text-sm text-text-muted mt-2">Space-time folding algorithms.</p>
                    </div>

                    <div className="card md:col-span-1 md:row-span-1">
                        <ShieldCheck className="text-primary mb-4" size={24} />
                        <h3 className="text-lg font-bold text-white">Naughty/Nice DB</h3>
                        <p className="text-sm text-text-muted mt-2">Immutable ledger Security.</p>
                    </div>

                    <div className="card md:col-span-2 md:row-span-1 flex items-center gap-6">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <Zap className="text-primary" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">System Performance</h3>
                            <p className="text-sm text-text-muted">Optimized magic consumption by 40% using renewable Spirit energy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

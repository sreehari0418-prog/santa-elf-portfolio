import React from 'react';
import { ExternalLink, Github, Box, Layers, Radio } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Sleigh-OS v4.0",
            desc: "Real-time RTOS for sleigh navigation, featuring anti-gravity kernel modules and chimney edge-detection.",
            tags: ["C++", "Rust", "MagicL"],
            icon: <Box size={40} className="text-secondary" />
        },
        {
            title: "Naughty-Nice Ledger",
            desc: "Immutable blockchain ledger for tracking global behavior metrics. 0% false positive rate.",
            tags: ["Solidity", "React", "Web3"],
            icon: <Layers size={40} className="text-accent" />
        },
        {
            title: "Wrap-Speed Algorithm",
            desc: "AI-driven geometric optimization for wrapping irregular shapes. Reduced paper waste by 40%.",
            tags: ["Python", "TensorFlow", "Geometry"],
            icon: <Radio size={40} className="text-primary" />
        }
    ];

    return (
        <section id="projects" className="py-20 relative bg-bg-dark/50">
            <div className="container">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl gradient-text mb-2">Toy Blueprints</h2>
                        <p className="text-text-muted">Classified projects from the R&D Lab.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass p-8 group hover:border-primary/50 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={20} />
                            </div>

                            <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                                {project.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-text-muted mb-6 text-sm h-12">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-primary">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

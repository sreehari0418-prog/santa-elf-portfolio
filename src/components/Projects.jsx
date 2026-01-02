import React from 'react';
import { ArrowUpRight, Lock, GitBranch } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            year: "2024",
            title: "Sleigh-OS v4.0",
            role: "Lead Architect",
            tech: "Rust / WASM / RTOS",
            desc: "Real-time navigation kernel for Mach-10 flight. Reduced latency by 40%.",
            status: "Classified",
            link: "#"
        },
        {
            year: "2023",
            title: "Global Behavior Ledger",
            role: "Senior Engineer",
            tech: "Solidity / Node.js",
            desc: "Immutable blockchain for tracking Naughty/Nice metrics with zero-knowledge proofs.",
            status: "Public Beta",
            link: "#"
        },
        {
            year: "2022",
            title: "Wrap-Speed Geometry",
            role: "Algorithm Designer",
            tech: "Python / TensorFlow",
            desc: "ML model optimizing paper usage for irregular shapes. Saved 400 tons of paper.",
            status: "Internal Tool",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-bold">Selected Works</h2>
                    <a href="#" className="text-sm text-text-muted hover:text-white flex items-center gap-1">
                        View Archive <ArrowUpRight size={14} />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-semibold text-text-muted px-6 pb-2 border-b border-border/50 uppercase tracking-wider">
                        <div className="col-span-1">Year</div>
                        <div className="col-span-3">Project</div>
                        <div className="col-span-2">Role</div>
                        <div className="col-span-3">Tech Stack</div>
                        <div className="col-span-3 text-right">Link</div>
                    </div>

                    {projects.map((p, i) => (
                        <div key={i} className="group relative grid md:grid-cols-12 gap-4 p-6 rounded-lg border border-transparent hover:bg-bg-card-hover hover:border-border transition-all items-center">
                            <div className="col-span-1 text-sm text-text-muted font-mono">{p.year}</div>

                            <div className="col-span-3">
                                <h3 className="font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                    {p.title}
                                    {p.status === 'Classified' && <Lock size={12} className="text-text-muted" />}
                                </h3>
                                <p className="md:hidden text-sm text-text-muted mt-1">{p.desc}</p>
                            </div>

                            <div className="col-span-2 hidden md:block text-sm text-text-muted">{p.role}</div>

                            <div className="col-span-3 hidden md:block">
                                <span className="text-xs font-mono text-text-muted bg-bg-page px-2 py-1 rounded border border-border">
                                    {p.tech}
                                </span>
                            </div>

                            <div className="col-span-3 text-right flex justify-end">
                                <a href={p.link} className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-white group-hover:translate-x-1 transition-transform">
                                    View Case Study <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

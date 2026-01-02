import React from 'react';
import { ArrowUpRight, Lock, GitBranch } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            year: "2024",
            title: "AI Equipment Dashboard",
            role: "Full Stack Developer",
            tech: "React / Python / Vercel",
            desc: "IoT-based health & efficiency monitoring for construction equipment. Deployed on Vercel & Render.",
            status: "Live",
            link: "#"
        },
        {
            year: "2024",
            title: "Netflix Puzzled Clone",
            role: "Frontend Engineer",
            tech: "React / Motion / CSS",
            desc: "High-fidelity recreation of Netflix's game UI with complex staggered animations and glassmorphism.",
            status: "Live",
            link: "#"
        },
        {
            year: "2023",
            title: "Calculator PWA",
            role: "Mobile Developer",
            tech: "PWA / JS / Android",
            desc: "Offline-capable scientific calculator with installable mobile support (PWA).",
            status: "Shipped",
            link: "#"
        },
        {
            year: "2023",
            title: "Blood Report Fitness",
            role: "Systems Architect",
            tech: "ML / Data Analysis",
            desc: "Automated analysis of blood work to generate personalized fitness and health recommendations.",
            status: "Prototype",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section-screen py-24">
            <div className="container">
                <div className="flex justify-between items-end mb-12">
                    {/* Header Removed */}
                    <span className="hidden"></span>
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

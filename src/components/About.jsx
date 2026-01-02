import React from 'react';
import { Cpu, Wind, Zap, Database } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-screen relative">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl text-white mb-6">System <br /> Check.</h2>
                        <p className="text-text-muted">
                            Before I joined the North Pole, toy production was running on legacy magic. I introduced cloud-based cheer distribution and optimized reindeer aerodynamics.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SkillCard
                            icon={<Cpu />}
                            title="Toy Architecture"
                            desc="Designing scalable dollhouses using Microservices."
                        />
                        <SkillCard
                            icon={<Wind />}
                            title="Sleigh Dynamics"
                            desc="Reducing drag coefficient for Mach-10 travel."
                        />
                        <SkillCard
                            icon={<Database />}
                            title="NaughtyDB"
                            desc="Managing 7 billion records with 99.99% uptime."
                        />
                        <SkillCard
                            icon={<Zap />}
                            title="Magic Injection"
                            desc="Safely infusing Christmas Spirit into hardware."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ icon, title, desc }) => (
    <div className="glass p-6 hover:translate-y-[-5px] transition-transform duration-300">
        <div className="text-primary mb-4 p-3 bg-primary/10 inline-block rounded-lg">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-text-muted">{desc}</p>
    </div>
);

export default About;

import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container max-w-4xl text-center">
                <div className="glass p-12 relative overflow-hidden">
                    {/* Decorative glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-[100px] pointer-events-none"></div>

                    <h2 className="text-5xl font-heading mb-6">Ready to Join the Workshop?</h2>
                    <p className="text-xl text-text-muted mb-8">
                        I'm currently looking for talented elves to join my sub-team. <br />
                        Proficiency in <strong>Cookie Eating</strong> is a plus.
                    </p>

                    <a href="mailto:frostbyte@northpole.io" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-bg-dark rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all mb-12">
                        <Mail />
                        Send a Carrier Pigeon
                    </a>

                    <div className="flex justify-center gap-8 text-text-muted">
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Github size={20} />
                            <span>FrostGithub</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Linkedin size={20} />
                            <span>ElfIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

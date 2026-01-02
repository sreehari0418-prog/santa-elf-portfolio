import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-screen py-24 border-t border-border">
            <div className="container">
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Ready to Deploy?</h2>
                    <p className="text-text-muted text-lg mb-12">
                        I am currently available for new opportunities. <br />
                        Check out my code or drop me a line.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
                        <a href="mailto:sreehari0418@gmail.com" className="flex items-center gap-4 text-white hover:text-primary transition-colors group p-6 glass w-full md:w-auto justify-center">
                            <div className="w-12 h-12 rounded-full bg-bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-text-muted">Email</div>
                                <div className="text-lg font-bold">sreehari0418@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://github.com/sreehari0418-prog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-primary transition-colors group p-6 glass w-full md:w-auto justify-center">
                            <div className="w-12 h-12 rounded-full bg-bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                <Github size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-sm text-text-muted">GitHub</div>
                                <div className="text-lg font-bold">sreehari0418-prog</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

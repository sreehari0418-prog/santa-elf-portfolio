import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 border-t border-border">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's build the future <br /> of logistics.</h2>
                        <p className="text-text-muted text-lg mb-8 max-w-md">
                            I am currently open to discussing new opportunities for the upcoming season.
                            Available for relocation to North Pole HQ or Remote (Sleigh-VPN).
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:sreehari0418@gmail.com" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="text-lg">sreehari0418@gmail.com</span>
                            </a>

                            <a href="https://github.com/sreehari0418-prog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                    <Github size={18} />
                                </div>
                                <span className="text-lg">github.com/sreehari0418-prog</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-bg-card border border-border rounded-2xl p-8">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                                <input type="text" className="w-full bg-bg-page border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Santa Claus" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                                <input type="email" className="w-full bg-bg-page border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="santa@northpole.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                                <textarea className="w-full bg-bg-page border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder="I have a mission for you..."></textarea>
                            </div>
                            <button className="w-full btn-primary justify-center">
                                Send Message <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

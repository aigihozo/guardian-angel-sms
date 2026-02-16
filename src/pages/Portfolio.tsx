import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowRight, Code2, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-gradient-gold">IGIHOZO Ange</h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">Software Developer</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient-gold">IGIHOZO</span><br />Ange
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Passionate software developer based in Masoro, building innovative digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-gradient-gold text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-emerald rounded-full opacity-20 blur-2xl" />
              <img
                src={profilePhoto}
                alt="IGIHOZO Ange"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-accent/30 shadow-gold pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-emerald transition-shadow">
              <Code2 className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-muted-foreground text-sm">Building end-to-end web applications with modern technologies</p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-emerald transition-shadow">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Web Solutions</h3>
              <p className="text-muted-foreground text-sm">Creating responsive and user-friendly web experiences</p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover:shadow-emerald transition-shadow">
              <Database className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">System Design</h3>
              <p className="text-muted-foreground text-sm">Designing scalable and efficient management systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-16">
            My <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SMS Project */}
            <Link to="/login" className="group glass-card rounded-xl overflow-hidden hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-emerald flex items-center justify-center">
                <Database className="w-16 h-16 text-primary-foreground opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  School Management System
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete SMS with student registration, admin dashboard, and user management. Built with modern web technologies.
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                  Open Project <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Online Examination System */}
            <div className="group glass-card rounded-xl overflow-hidden hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-gold flex items-center justify-center">
                <Globe className="w-16 h-16 text-accent-foreground opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Online Examination System
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Digital examination platform enabling online test creation, administration, and automated grading.
                </p>
                <span className="inline-flex items-center gap-2 text-muted-foreground text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-16">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="mailto:aigihozo40@gmail.com" className="glass-card rounded-xl px-8 py-6 flex items-center gap-4 hover:shadow-emerald transition-shadow">
              <Mail className="w-6 h-6 text-accent" />
              <span className="text-foreground">aigihozo40@gmail.com</span>
            </a>
            <a href="https://wa.me/250735455500" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl px-8 py-6 flex items-center gap-4 hover:shadow-emerald transition-shadow">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-foreground">0735455500</span>
            </a>
            <div className="glass-card rounded-xl px-8 py-6 flex items-center gap-4">
              <MapPin className="w-6 h-6 text-accent" />
              <span className="text-foreground">Masoro, Rwanda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-3">
              <img
                src={profilePhoto}
                alt="IGIHOZO Ange"
                className="w-10 h-10 rounded-full object-cover border-2 border-accent/30 pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <span className="font-display font-semibold text-gradient-gold">IGIHOZO Ange</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:aigihozo40@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://wa.me/250735455500" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-right text-sm text-muted-foreground">
              Developed by <span className="text-accent font-medium">IGIHOZO Ange</span><br />
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

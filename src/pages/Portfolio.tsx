import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowRight, ArrowDown, Code2, Globe, Database, Layers, Terminal, Cpu, Sparkles, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    { name: "React / Next.js", icon: Code2, level: 90 },
    { name: "TypeScript", icon: Terminal, level: 85 },
    { name: "Node.js", icon: Cpu, level: 80 },
    { name: "Database Design", icon: Database, level: 85 },
    { name: "UI/UX Design", icon: Layers, level: 75 },
    { name: "Web APIs", icon: Globe, level: 80 },
  ];

  const experiences = [
    {
      year: "2025 — Present",
      title: "Full Stack Developer",
      description: "Building modern web applications and management systems with cutting-edge technologies.",
    },
    {
      year: "2024 — 2025",
      title: "Frontend Developer",
      description: "Developed responsive user interfaces and interactive web experiences for clients.",
    },
    {
      year: "2023 — 2024",
      title: "Junior Developer",
      description: "Started career building web solutions and learning industry best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? "glass-card shadow-emerald" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-xl font-bold text-gradient-gold tracking-wide">IA.</h1>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-gradient-gold text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(160_70%_36%_/_0.08),_transparent_70%)]" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/30 animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1 text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-xs font-medium tracking-widest uppercase">Available for Work</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
                IGIHOZO<br />
                <span className="text-gradient-gold">Ange</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Crafting elegant digital experiences through code. A passionate software developer turning ideas into impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#projects" className="group bg-gradient-gold text-accent-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2">
                  Explore My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#about" className="border border-border px-8 py-3.5 rounded-full font-semibold hover:bg-secondary/50 transition-colors text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 animate-float">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent/20 via-primary/10 to-transparent blur-2xl" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/30 to-primary/30" />
                <img
                  src={profilePhoto}
                  alt="IGIHOZO Ange"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover pointer-events-none select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Who I Am</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                A Developer With <span className="text-gradient-gold">Passion</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a full-stack software developer based in Masoro, Rwanda. I specialize in building end-to-end web applications that solve real-world problems with clean code and elegant interfaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From school management systems to examination platforms, I thrive on creating digital solutions that make a meaningful impact. I believe great software combines powerful functionality with beautiful, intuitive design.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-accent">2+</p>
                  <p className="text-xs text-muted-foreground mt-1">Years Exp.</p>
                </div>
                <div className="text-center glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-accent">5+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-accent">100%</p>
                  <p className="text-xs text-muted-foreground mt-1">Dedication</p>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
              {experiences.map((exp, i) => (
                <div key={i} className="glass-card rounded-xl p-6 hover:shadow-emerald transition-all duration-300 hover:-translate-y-1 relative">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-medium">{exp.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">What I Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              My <span className="text-gradient-gold">Skills</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="glass-card rounded-xl p-6 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-emerald flex items-center justify-center group-hover:bg-gradient-gold transition-all">
                    <skill.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">{skill.name}</h3>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-gold transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-xs text-muted-foreground mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SMS Project */}
            <Link to="/login" className="group glass-card rounded-2xl overflow-hidden hover:shadow-gold transition-all duration-500 hover:-translate-y-2">
              <div className="h-52 bg-gradient-emerald flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_hsl(160_70%_45%_/_0.4),_transparent_60%)]" />
                <Database className="w-20 h-20 text-primary-foreground/60 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="text-accent text-xs font-medium tracking-wider uppercase">Live Project</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  School Management System
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  A complete SMS featuring student registration, admin dashboard, user management, and real-time data tracking.
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                  Open Project <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Online Examination System */}
            <div className="group glass-card rounded-2xl overflow-hidden hover:shadow-gold transition-all duration-500 hover:-translate-y-2">
              <div className="h-52 bg-gradient-gold flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(43_90%_65%_/_0.4),_transparent_60%)]" />
                <Globe className="w-20 h-20 text-accent-foreground/60 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">In Development</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  Online Examination System
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  A digital platform for creating, administering, and auto-grading exams. Designed for efficiency and scale.
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
      <section id="contact" className="py-28 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Let's <span className="text-gradient-gold">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">Have a project in mind? I'd love to hear from you. Reach out through any of the channels below.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <a href="mailto:aigihozo40@gmail.com" className="glass-card rounded-xl px-6 py-8 flex flex-col items-center gap-3 hover:shadow-emerald transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground text-sm font-medium">Email</span>
              <span className="text-muted-foreground text-xs">aigihozo40@gmail.com</span>
            </a>
            <a href="https://wa.me/250735455500" target="_blank" rel="noopener noreferrer" className="glass-card rounded-xl px-6 py-8 flex flex-col items-center gap-3 hover:shadow-emerald transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium">WhatsApp</span>
              <span className="text-muted-foreground text-xs">0735455500</span>
            </a>
            <div className="glass-card rounded-xl px-6 py-8 flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground text-sm font-medium">Location</span>
              <span className="text-muted-foreground text-xs">Masoro, Rwanda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={profilePhoto}
                alt="IGIHOZO Ange"
                className="w-9 h-9 rounded-full object-cover border-2 border-accent/30 pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <span className="font-display font-semibold text-gradient-gold text-sm">IGIHOZO Ange</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="mailto:aigihozo40@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://wa.me/250735455500" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Developed by <span className="text-accent font-medium">IGIHOZO Ange</span> · © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

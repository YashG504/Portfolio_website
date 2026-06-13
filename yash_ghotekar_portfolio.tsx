import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, Code2, Terminal, Briefcase, 
  GraduationCap, ExternalLink, ChevronRight, Menu, X, 
  Server, Layout, Database, Wrench, Award, Sparkles, 
  Rocket, Cpu, Globe, Zap, BrainCircuit, MonitorSmartphone, Layers
} from 'lucide-react';

// --- 3D Interactive Card Component ---
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = (0.5 - y) * 20; 
    const rotateY = (x - 0.5) * 20;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
      zIndex: 1
    });
  };

  return (
    <div 
      ref={cardRef}
      className={`${className} transform-gpu`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { category: "Languages", icon: <Terminal size={20} className="text-blue-400" />, items: ["C++", "Java", "JavaScript", "TypeScript", "Python"] },
    { category: "Frontend", icon: <MonitorSmartphone size={20} className="text-cyan-400" />, items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", icon: <Server size={20} className="text-emerald-400" />, items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
    { category: "Databases", icon: <Database size={20} className="text-indigo-400" />, items: ["MongoDB", "MySQL"] },
    { category: "Tools", icon: <Wrench size={20} className="text-orange-400" />, items: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Jira"] },
    { category: "Core CS", icon: <BrainCircuit size={20} className="text-purple-400" />, items: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Computer Networks"] }
  ];

  const experience = [
    {
      role: "SDE Intern",
      company: "Unique Schools India App LLP",
      location: "Pune, Maharashtra",
      period: "Jan 2026 - Present",
      points: [
        "Developing a scalable role-based ticketing platform using Next.js, TypeScript, Tailwind CSS and REST APIs.",
        "Engineered ticket management, chat, and file upload workflows for Client, Admin, Developer, and Reviewer roles.",
        "Built reusable UI components, protected routes, form validation and API error handling for improved maintainability and UX.",
        "Debugged authentication, session persistence, file upload, and UI consistency issues in collaboration with teams."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "TalesByDora (Travel Startup)",
      location: "Remote",
      period: "Jul 2025 - Dec 2025",
      points: [
        "Built a responsive MERN travel platform with reusable UI components and optimized user workflows.",
        "Built reusable React templates for 7+ destination pages, reducing duplicate UI code and improving development efficiency.",
        "Integrated REST APIs, MongoDB, WhatsApp, and email workflows for inquiry management and lead tracking."
      ]
    },
    {
      role: "Technical Intern",
      company: "9 BRD, Indian Air Force",
      location: "Pune, Maharashtra",
      period: "Jan 2025 - Jun 2025",
      points: [
        "Analyzed Python and LabVIEW based automated testing systems used in defense PCB maintenance workflows.",
        "Studied automated PCB testing workflows, LabVIEW configurations, and test data analysis for defense systems."
      ]
    }
  ];

  const projects = [
    {
      title: "Connectify Real-Time Video Calling",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "WebRTC", "Socket.IO"],
      description: "A full-stack real-time communication platform with secure JWT-based authentication.",
      points: [
        "Implemented video calling, instant messaging, notifications, media sharing, and reactions.",
        "Optimized data fetching and UI responsiveness using TanStack Query and reusable React hooks."
      ],
      icon: <Globe size={28} className="text-cyan-400" />
    },
    {
      title: "Metro Route Optimizer",
      tags: ["C++", "Data Structures", "Graph Algorithms", "Dijkstra's"],
      description: "A C++ metro route optimizer using weighted graphs, priority queues, and Dijkstra's algorithm.",
      points: [
        "Designed route recommendation logic based on distance, travel time, fare estimation, and interchange minimization.",
        "Optimized pathfinding performance using priority-queue traversal for efficient route computation."
      ],
      icon: <Layers size={28} className="text-blue-400" />
    }
  ];

  const education = [
    {
      degree: "B.Tech Electronics and Telecommunication",
      school: "Vishwakarma Institute of Information Technology, Pune",
      period: "2022 - 2026",
      score: "CGPA: 8.25"
    },
    {
      degree: "12th Grade",
      school: "Shree Mahaveer Jr. College, Pune",
      period: "2021 - 2022",
      score: "Percentage: 88.50%"
    },
    {
      degree: "10th Grade",
      school: "P.T.V.K School, Nashik",
      period: "2019 - 2020",
      score: "Percentage: 95.20%"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Custom Keyframes & Utility Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out 3s infinite; }
        .animate-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#050B14]/80 backdrop-blur-xl border-cyan-900/30 py-4 shadow-[0_4px_30px_rgba(6,182,212,0.05)]' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer flex items-center gap-2 group" onClick={() => scrollTo('home')}>
            <Zap className="text-cyan-400 group-hover:animate-bounce" size={24} />
            YG.
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300 tracking-wide">
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="relative hover:text-cyan-400 transition-colors group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-300 hover:text-cyan-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#050B14]/95 backdrop-blur-lg border-b border-cyan-900/30 py-4 px-6 flex flex-col gap-4 shadow-2xl">
             {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-slate-300 hover:text-cyan-400 py-3 text-lg font-medium border-b border-slate-800/50">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative">
        
        {/* Background 3D Elements */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-glow pointer-events-none"></div>
        <div className="absolute top-96 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-glow pointer-events-none" style={{ animationDelay: '2s' }}></div>

        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center relative z-10">
          <div className="absolute right-10 md:right-32 top-1/2 -translate-y-1/2 hidden lg:block animate-float opacity-80">
            {/* Abstract 3D shape replacement using styling */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-3xl transform rotate-12 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 border border-cyan-500/30 rounded-3xl transform -rotate-6 backdrop-blur-md bg-slate-900/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex items-center justify-center">
                 <Code2 size={100} className="text-cyan-400/50 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              </div>
              <div className="absolute -top-10 -right-10 border border-blue-500/30 rounded-full w-32 h-32 backdrop-blur-sm bg-blue-500/10 animate-float-delayed"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-sm mb-6 animate-pulse-glow">
              <Sparkles size={16} className="text-cyan-300" />
              <span>Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
              Yash Ghotekar.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6 pb-2">
              Building the future, scalable.
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Software Developer specializing in the <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">MERN Stack, Next.js, and TypeScript</span>. 
              Translating logic into seamless digital experiences with <span className="text-blue-400 font-semibold">300+ DSA problems</span> solved.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#projects" onClick={(e) => {e.preventDefault(); scrollTo('projects')}} className="group relative px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-2">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
                <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Explore My Work
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-4 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group" title="GitHub">
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-4 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all group" title="LinkedIn">
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <Cpu className="text-cyan-400 animate-pulse" size={36} />
            <h2 className="text-4xl font-black text-white">Technical Arsenal</h2>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-1 ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <TiltCard key={index} className="p-8 rounded-2xl glass-card hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors group cursor-default">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-800/80 rounded-xl group-hover:scale-110 transition-transform shadow-inner">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors tracking-wide">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-4 py-1.5 text-sm font-medium bg-slate-900/80 text-slate-300 rounded-lg border border-slate-700/50 group-hover:border-slate-600/50 transition-colors hover:text-cyan-400 hover:bg-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-20">
            <Briefcase className="text-blue-400" size={36} />
            <h2 className="text-4xl font-black text-white">Career Journey</h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1 ml-4"></div>
          </div>

          <div className="space-y-16 pl-6 md:pl-0 relative">
            {experience.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group">
                {/* 3D Glowing Timeline Line */}
                <div className="absolute left-[-24px] md:left-[240px] top-4 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-transparent group-last:from-slate-800 group-last:to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* 3D Timeline Node */}
                <div className="absolute left-[-31px] md:left-[233px] top-2 h-4 w-4 rounded-full bg-cyan-950 border-[3px] border-cyan-400 z-10 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>

                {/* Date & Location */}
                <div className="md:w-[220px] shrink-0 pt-1 text-left">
                  <div className="text-cyan-400 font-mono text-base font-bold mb-2 tracking-wider drop-shadow-md">{exp.period}</div>
                  <div className="text-slate-400 text-sm flex items-center gap-2 font-medium bg-slate-900/50 inline-flex px-3 py-1 rounded-full border border-slate-800">
                    <Globe size={14} className="text-blue-400" /> {exp.location}
                  </div>
                </div>

                {/* Content Card */}
                <TiltCard className="flex-1 glass-card p-8 md:p-10 rounded-3xl group-hover:border-cyan-500/40 relative overflow-hidden">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-black text-white mb-2 relative z-10">{exp.role}</h3>
                  <div className="text-lg text-cyan-300 mb-6 flex items-center gap-2 font-semibold relative z-10">
                    {exp.company}
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-slate-300 flex items-start gap-4 leading-relaxed group/item">
                        <ChevronRight size={18} className="text-cyan-500 shrink-0 mt-1 transform group-hover/item:translate-x-1 transition-transform" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <Layout className="text-purple-400" size={36} />
            <h2 className="text-4xl font-black text-white">Featured Builds</h2>
            <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <TiltCard key={index} className="glass-card rounded-3xl p-1 relative overflow-hidden group cursor-pointer h-full flex flex-col">
                {/* Holographic Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className="bg-[#0b1121] rounded-[22px] p-8 h-full relative z-10 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-cyan-950/50 rounded-2xl shadow-inner border border-cyan-900/50 group-hover:rotate-6 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div className="flex gap-4 text-slate-400 bg-slate-900/80 p-2 rounded-full border border-slate-800">
                      <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all p-2 rounded-full hover:bg-slate-800" title="Source Code"><Github size={22} /></a>
                      <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all p-2 rounded-full hover:bg-slate-800" title="Live Preview"><ExternalLink size={22} /></a>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors drop-shadow-sm">{project.title}</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed flex-1 text-lg">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] shrink-0 mt-1.5"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold tracking-wide text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-md backdrop-blur-sm group-hover:border-cyan-500/40 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* Education & Extra Section */}
        <section id="education" className="py-24 relative z-10 border-t border-slate-800/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <GraduationCap className="text-emerald-400" size={32} />
                <h2 className="text-3xl font-black text-white">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-slate-800 pb-2 group">
                    <div className="absolute w-4 h-4 rounded-full bg-[#050B14] border-2 border-emerald-500 left-[-9px] top-1 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                    <div className="text-emerald-400 font-mono text-sm my-2 font-bold">{edu.period}</div>
                    <div className="text-slate-400 text-lg">{edu.school}</div>
                    <div className="text-slate-200 font-bold mt-3 bg-emerald-500/10 border border-emerald-500/20 inline-block px-3 py-1 rounded-lg text-sm drop-shadow-md">{edu.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Award className="text-orange-400" size={32} />
                <h2 className="text-3xl font-black text-white">Leadership</h2>
              </div>
              
              <TiltCard className="glass-card rounded-3xl p-8 hover:border-orange-500/30 transition-colors border-l-4 border-l-orange-500 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Award size={100} className="text-orange-400" />
                 </div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">Associate Marketing Head</h3>
                    <span className="text-orange-400 font-mono text-sm font-bold bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">Sep 2023 - Jun 2024</span>
                  </div>
                  <div className="text-slate-300 mb-6 flex items-center gap-2 font-medium">
                     Entrepreneurship Development Cell, VIIT, Pune
                  </div>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    Led student outreach campaigns and spearheaded the development of <span className="text-orange-300 font-semibold">"Laptop Bajar,"</span> a successful WhatsApp-based laptop resale initiative promoting accessible tech for students.
                  </p>
                </div>
              </TiltCard>
            </div>

          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer className="bg-[#03070c] py-20 border-t border-cyan-900/30 text-center relative overflow-hidden">
        {/* Massive Footer Glow */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-cyan-600/20 to-blue-600/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-cyan-950/50 rounded-full mb-6 border border-cyan-900">
            <Zap size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-4xl font-black text-white mb-6">Let's Build Something Great</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
            My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="mailto:yash.22210210@viit.ac.in" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-card hover:bg-cyan-950/50 hover:border-cyan-500/50 text-slate-200 transition-all font-semibold shadow-lg">
              <Mail size={22} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              yash.22210210@viit.ac.in
            </a>
            <a href="tel:+918459454322" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl glass-card hover:bg-blue-950/50 hover:border-blue-500/50 text-slate-200 transition-all font-semibold shadow-lg">
              <Phone size={22} className="text-blue-400 group-hover:scale-110 transition-transform" />
              +91-8459454322
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all">
              <Github size={28} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
              <Linkedin size={28} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-orange-400 hover:bg-slate-800 hover:scale-110 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all">
              <Code2 size={28} />
            </a>
          </div>

          <p className="text-slate-600 font-mono text-sm">
            Designed & Built with <span className="text-cyan-500">React</span> by Yash Ghotekar &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
import React from 'react';
import { motion } from 'framer-motion';
// Using standard Lucide icons
import { 
  Github, Linkedin, Mail, Code, ExternalLink, ChevronDown, 
  Terminal, Layout, Globe, Cpu, Trophy, Star, Send, 
  Database, GitBranch, PenTool, Layers, CheckCircle, FileText 
} from 'lucide-react';

/* --- ANIMATIONS --- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/* --- DATA FROM RESUME (UPDATED FOR SDLC/FULL-STACK) --- */
const techStack = {
  frontend: [
    { name: "React.js / Native", icon: <Code size={16} /> },
    { name: "Tailwind CSS", icon: <Layout size={16} /> },
    { name: "UI/UX (Figma)", icon: <PenTool size={16} /> },
    { name: "HCI Principles", icon: <Globe size={16} /> },
  ],
  backend: [
    { name: "Java & Python", icon: <Terminal size={16} /> },
    { name: "Spring Boot", icon: <Layers size={16} /> },
    { name: "SQL & DBs", icon: <Database size={16} /> },
    { name: "Distributed Sys", icon: <Cpu size={16} /> },
  ],
  qa: [
    { name: "JUnit 5", icon: <CheckCircle size={16} /> },
    { name: "Postman", icon: <Send size={16} /> },
    { name: "API Testing", icon: <Code size={16} /> },
    { name: "Test Automation (Selenium)", icon: <Terminal size={16} /> },
  ],
  devops: [
    { name: "Git & GitHub", icon: <GitBranch size={16} /> },
    { name: "Agile / Scrum", icon: <Layers size={16} /> },
    { name: "SDLC & Analysis", icon: <FileText size={16} /> },
  ]
};

const projects = [
  {
    title: "TestLang++ (QA Tool)",
    category: "QA Automation | Compiler",
    tech: ["Java", "JUnit 5", "Spring Boot"],
    desc: "Developed a specialized automation tool and custom DSL to streamline API testing workflows by converting lightweight scripts into robust JUnit 5 test cases.",
    link: "https://github.com/Oshadhi2003"
  },
  {
    title: "Distributed Payment System",
    category: "Backend | DevOps",
    tech: ["Python", "gRPC", "Consensus Algos"],
    desc: "Engineered a fault-tolerant distributed system to process concurrent transactions. Implemented automated node recovery and custom consensus mechanisms for high availability.",
    link: "https://github.com/Oshadhi2003"
  },
  {
    title: "Mobile Repair Shop System",
    category: "Full-Stack | BA",
    tech: ["React.js", "State Management", "SPA"],
    desc: "Analyzed business requirements to build a dual-interface SPA, featuring a secure Admin Dashboard for inventory management and a public portal for real-time customer status tracking.",
    link: "https://github.com/Oshadhi2003"
  },
  {
    title: "Mentora - AI Career App",
    category: "Frontend | BA",
    tech: ["React Native", "HCI Principles"],
    desc: "Acted as a bridge between user needs and technical implementation. Engineered a cross-platform mobile app applying strict HCI principles validated through user testing.",
    link: "https://github.com/Oshadhi2003"
  },
  {
    title: "Kinetic Kicks (Smart Shoe)",
    category: "IoT | Integration",
    tech: ["React Native", "IoT", "Bluetooth BLE"],
    desc: "Award-winning project. Engineered a responsive mobile dashboard that communicates seamlessly with embedded hardware via Bluetooth to visualize live power generation data.",
    link: "https://github.com/Oshadhi2003"
  },
  {
    title: "Naval Battle Simulator",
    category: "Logic | C Programming",
    tech: ["C Language", "Simulation Logic"],
    desc: "Developed a strategic combat simulator modeling complex ship damage logic and shot probability. Implemented progressive difficulty levels and strict memory management.",
    link: "https://github.com/Oshadhi2003"
  }
];

const education = [
  {
    school: "Sri Lanka Institute of Information Technology",
    degree: "B.Sc (Hons) in Computer Science",
    year: "Undergraduate"
  },
  {
    school: "Sujatha Vidyalaya",
    degree: "GCE Advanced Level (Physical Science Stream)",
    year: "Completed"
  }
];

const certifications = [
  "Introduction to Programming Using Python (UoM)",
  "Artificial Intelligence - Beginners Guide (Simplilearn)",
  "Web Design for Beginners (UoM)"
];

const achievements = [
  "Most Innovative Idea - INNOVELEC 2025",
  "1st Runners-Up - SDG Youth Challenge 2024",
  "5th Place: Startup Spark - Techno 2024",
  "Finalist - SSD 2025 SDG Project Competition",
  "Participant - IDEALIZE 2024"
];

const volunteering = [
  "Secretary Team Member - SLIITXtreme 4.0 (IEEE Computer Society)"
];

function App() {
  const line1 = "Hello, I'm".split("");
  const line2 = "Oshadhi Manage".split("");

  return (
    // Background: Deep Royal Purple Theme
    <div className="bg-[#0f0718] min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 relative pt-20 md:pt-0 gap-10">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]"></div>

        {/* IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 md:order-2 shrink-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-fuchsia-600 rounded-full blur opacity-60 animate-pulse"></div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#1a0b2e] shadow-2xl">
            <img 
              src="/profile.png" 
              onError={(e) => {e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&q=80"}} 
              alt="Oshadhi Manage" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="z-10 text-center md:text-left max-w-2xl md:order-1">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-5 border border-purple-500/30 rounded-full bg-purple-500/10 text-purple-300 text-sm font-mono tracking-wide backdrop-blur-md"
          >
            🚀 Computer Science Undergraduate & Software Developer | Actively Seeking Internships
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight tracking-tight"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            <div className="block text-white">
              {line1.map((char, index) => <motion.span key={index} variants={letter}>{char}</motion.span>)}
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              {line2.map((char, index) => <motion.span key={index} variants={letter}>{char}</motion.span>)}
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-xl text-purple-200/80 mb-8 leading-relaxed font-light"
          >
            Passionate about building robust, scalable systems—ranging from <span className="text-white font-medium">full-stack web applications</span> to distributed backend architectures and automated testing tools. I leverage a strong foundation in Computer Science to bridge the gap between business requirements <span className="text-white font-medium">(BA)</span>, system design, and quality assurance<span className="text-white font-medium">(QA)</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
          >
            {/* View Projects Button */}
            <a href="#projects" className="px-8 py-3 bg-white text-purple-950 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-white/10">
              View Work
            </a>

            {/* Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500/30 bg-purple-500/10 text-purple-300 rounded-full font-bold hover:bg-purple-500/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              <FileText size={20} /> Resume
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 items-center px-4">
              <a href="https://github.com/Oshadhi2003" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                <Github size={24}/>
              </a>
              <a href="https://www.linkedin.com/in/oshadhi-manage-49032a346" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">
                <Linkedin size={24}/>
              </a>
              <a href="#contact" className="text-purple-300 hover:text-white transition-colors">
                <Mail size={24}/>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-purple-500/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- TECH STACK (UPDATED TO 4 COLUMNS) --- */}
      <section className="py-20 bg-[#130820] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-purple-300/60">A full-stack toolkit built on Engineering Principles & Modern Design</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-purple-500/20 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-bold mb-6 text-purple-300 flex items-center gap-2"><Layout size={20}/> Frontend & Mobile</h3>
              <div className="flex flex-col gap-3">
                {techStack.frontend.map((tech, i) => (
                  <span key={i} className="flex items-center gap-3 px-3 py-2.5 bg-[#1e0b36] rounded-lg text-sm border border-purple-500/10 text-purple-100">
                    <span className="text-purple-400">{tech.icon}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-indigo-500/20 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-bold mb-6 text-indigo-300 flex items-center gap-2"><Database size={20}/> Backend & Arch</h3>
              <div className="flex flex-col gap-3">
                {techStack.backend.map((tech, i) => (
                  <span key={i} className="flex items-center gap-3 px-3 py-2.5 bg-[#1e0b36] rounded-lg text-sm border border-indigo-500/10 text-indigo-100">
                    <span className="text-indigo-400">{tech.icon}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* QA Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-emerald-500/20 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-bold mb-6 text-emerald-300 flex items-center gap-2"><CheckCircle size={20}/> QA & Testing</h3>
              <div className="flex flex-col gap-3">
                {techStack.qa.map((tech, i) => (
                  <span key={i} className="flex items-center gap-3 px-3 py-2.5 bg-[#1e0b36] rounded-lg text-sm border border-emerald-500/10 text-emerald-100">
                    <span className="text-emerald-400">{tech.icon}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps/BA Column */}
            <div className="p-6 rounded-2xl bg-white/5 border border-fuchsia-500/20 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-bold mb-6 text-fuchsia-300 flex items-center gap-2"><GitBranch size={20}/> DevOps & Tools</h3>
              <div className="flex flex-col gap-3">
                {techStack.devops.map((tech, i) => (
                  <span key={i} className="flex items-center gap-3 px-3 py-2.5 bg-[#1e0b36] rounded-lg text-sm border border-fuchsia-500/10 text-fuchsia-100">
                    <span className="text-fuchsia-400">{tech.icon}</span> {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL PROJECTS --- */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-purple-200/60">
              A complete showcase of my work spanning the Software Development Life Cycle.
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-[#150a22] border border-white/5 p-8 rounded-2xl hover:border-purple-500/40 hover:bg-[#1a0b2e] transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-300 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                    <Code size={22} />
                  </div>
                  <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={20}/>
                  </a>
                </div>
                
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-purple-100/60 text-sm mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 text-purple-200 text-xs rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section className="py-20 bg-gradient-to-b from-[#0f0718] to-[#160a25]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Cpu className="text-purple-400"/> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    <h3 className="font-bold text-lg text-white">{edu.school}</h3>
                    <p className="text-purple-200">{edu.degree}</p>
                    <span className="text-sm text-gray-400 block mt-1">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Volunteering */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <Star className="text-yellow-400"/> Certifications & Volunteering
              </h2>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-full">
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></div>
                      <span className="text-purple-100/90">{cert}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="font-bold text-purple-300 mb-3">Volunteering</h4>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                      <CheckCircle size={16}/>
                    </div>
                    <span className="text-sm text-gray-300">{volunteering[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACHIEVEMENTS --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Trophy className="mx-auto text-yellow-500 mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-10 text-white">Honors & Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((award, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl text-left hover:border-purple-500/30 transition-colors">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 shrink-0"><Star size={18}/></div>
                <span className="text-purple-100/90 text-sm md:text-base font-medium">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/10 radial-gradient"></div>
        
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-purple-200/70 mb-10 text-lg">
            I'm currently looking for <b>Internship opportunities</b>. <br/>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="bg-[#1a0b2e] border border-white/10 p-8 rounded-3xl shadow-2xl text-left">
            <form action="https://formspree.io/f/meeljgkv" method="POST" className="space-y-5">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-purple-300 uppercase tracking-wider ml-1">Name</label>
                  <input type="text" name="name" className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="text-xs font-bold text-purple-300 uppercase tracking-wider ml-1">Email</label>
                  <input type="email" name="email" className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-all" placeholder="name@example.com" required />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-purple-300 uppercase tracking-wider ml-1">Message</label>
                <textarea name="message" rows="4" className="w-full mt-2 bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-purple-500 focus:outline-none transition-all" placeholder="Hi, I saw your portfolio..." required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>

          <footer className="mt-16 text-purple-500/30 text-sm">
            © 2026 Oshadhi Manage. Crafted with React & Tailwind.
          </footer>
        </div>
      </section>
      
    </div>
  );
}

export default App;
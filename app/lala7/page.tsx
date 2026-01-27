"use client";
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  FileText,
  Trophy,
  HeartHandshake,
  Cpu,
  Play,
  Layout,
  Server,
  Globe,
  Database,
  Box,
  X
} from 'lucide-react';
import { 
  FaReact, 
  FaNode, 
  FaDocker, 
  FaGitAlt, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiMongodb, 
  SiRedis,
  SiExpress
} from 'react-icons/si';

const PROJECTS = [
  {
    id: 1,
    title: "Velocity",
    subtitle: "Centralized Perpetual Crypto Futures Simulator",
    description: "High-frequency exchange with real-time WebSockets & Node.js matching engine. Handles sub-millisecond updates.",
    theme: "red", 
    link: "https://velocity.bitshitfalse.com",
    repo: "https://github.com/sforsanjnarao/xness.git",
    video: "/videos/velocity.mp4", 
    stack: ["Node.js", "Next.js", "Websocket","Redis","Docker","AWS"]
  },
  {
    id: 2,
    title: "PrivMat",
    subtitle: "Personal Data Vault",
    description: "Privacy dashboard with synthetic identity generation & AES-256 encryption.",
    theme: "blue",
    link: "https://privmat.com",
    repo: "https://github.com/sforsanjnarao/prevmat.git",
    video: "/videos/privmat_video.mp4", 
    stack: ["Next.js", "Postgres","Prisma","Crypto","Javascript"]
  },
];

export default function Portfolio() {
   const [activeVideo, setActiveVideo] = React.useState<string | null>(null);

  return (
    <main className="bg-black text-zinc-200 font-sans min-h-screen w-full flex flex-col lg:flex-row selection:bg-purple-500/30">
      
      {/* =========================================
          LEFT SIDEBAR: FIXED (30% Width)
         ========================================= */}
      <aside className="w-full lg:w-[28%] lg:h-screen lg:sticky lg:top-0 bg-black border-r border-zinc-800 p-6 flex flex-col gap-2 z-20">
        
        {/* 1. PROFILE BOX */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col relative group">
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-white tracking-tight leading-none mb-2">
              Sanjana<br/>Rao
            </h1>
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-zinc-500 text-sm font-mono">
                Full Stack Developer
                </span>
                {/* The Pill */}
                <span className="px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-[10px] font-bold text-zinc-300 tracking-wide hover:bg-zinc-700 transition-colors cursor-default">
                IIT Patna
                </span>
            </div>
          </div>
        </div>

        {/* 2. TECH ARSENAL */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex-grow flex flex-col">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
               <Cpu size={14} /> Tech Arsenal
            </div>
            <div className="grid grid-cols-4 gap-3 content-start">
                <TechIcon icon={<FaReact size={24}/>} name="React" color="#61DAFB" />
                <TechIcon icon={<FaNode size={24}/>} name="Node.js" color="#339933" />
                <TechIcon icon={<SiExpress size={24}/>} name="Express.js" color="#FFFFFF" />
                <TechIcon icon={<SiNextdotjs size={24}/>} name="Next.js" color="#FFFFFF" />
                <TechIcon icon={<SiTypescript size={24}/>} name="TypeScript" color="#3178C6" />
                <TechIcon icon={<SiMongodb size={24}/>} name="MongoDB" color="#47A248" />
                <TechIcon icon={<FaDocker size={24}/>} name="Docker" color="#2496ED" />
                <TechIcon icon={<FaGitAlt size={24}/>} name="Git" color="#71717C" />
                <TechIcon icon={<FaAws size={24}/>} name="AWS" color="#EC7211" />
                <TechIcon icon={<SiRedis size={24}/>} name="Redis" color="#FF4338" />
            </div>
        </div>

        {/* 3. SOCIALS */}
        <div className="flex flex-col gap-2 mt-auto">
            <SocialBtn href="mailto:Sanjanarao26@gmail.com" label="Email Me" />
            <SocialBtn href="https://github.com/sforsanjnarao" label="GitHub" />
            <div className="grid grid-cols-2 gap-2">
               <SocialBtn href="https://linkedin.com/in/sforsanjnarao" label="LinkedIn" />
               <SocialBtn href="/resume.pdf" label="CV" />
            </div>
        </div>
      </aside>


      {/* =========================================
          RIGHT CONTENT: SCROLLABLE (70% Width)
         ========================================= */}
         
      <div className="w-full lg:w-[72%] h-screen overflow-y-auto px-6 lg:px-12 py-6 flex flex-col scroll-smooth">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* ABOUT ME */}
          <div className="lg:col-span-2 bg-[#0c0c0c] border border-zinc-800 rounded-3xl p-4 font-mono text-sm flex flex-col justify-between">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            <div className="text-zinc-400 leading-6">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-200">sanjana</span> = {'{'}</p>
              <p className="pl-6">current_focus: <span className="text-green-400"> "Building efficient, scalable systems informed by first principles thinking"</span>,</p>
              <p className="pl-6">methodology: <span className="text-green-400"> "Challenge assumptions → simplify → optimize → iterate fast → automate right"</span>,</p>
              <p className="pl-6">location: <span className="text-green-400">"Bangalore, India"</span></p>
              <p>{'};'}</p>
              <p className="mt-2 text-zinc-600">// Engineering isn’t about duplication — it’s about transformation.</p>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-center">
              <div className="text-purple-400 text-xs font-bold uppercase mb-1">Volunteering</div>
              <div className="text-white font-bold">IIT Patna E-Summit</div>
              <div className="text-xs text-zinc-400">Creative Team Lead</div>
            </div>

            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-center">
              <div className="text-yellow-500 text-xs font-bold uppercase mb-1">Latest Win</div>
              <div className="text-white font-bold">Codictive 3.0</div>
              <div className="text-xs text-zinc-400">Finalist 2025</div>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="flex flex-col gap-4 pb-10">
           {PROJECTS.map((project) => (
             <ProjectCard key={project.id} data={project} onPlay={setActiveVideo} />
           ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-zinc-800 text-white rounded-full backdrop-blur-sm transition-all"
            >
              <X size={20} />
            </button>
            <video 
              src={activeVideo} 
              className="w-full h-auto max-h-[80vh]"
              controls 
              autoPlay 
            />
          </div>
        </div>
      )}

    </main>
  );
}

// --- COMPONENTS ---

function ProjectCard({ data, onPlay }: { data: any, onPlay: (url: string) => void }) {
  const accentColors: any = {
    purple: "group-hover:text-purple-400 border-purple-500/20",
    red: "group-hover:text-red-400 border-red-500/20",
    blue: "group-hover:text-cyan-400 border-cyan-500/20",
    yellow: "group-hover:text-yellow-400 border-yellow-500/20",
    green: "group-hover:text-green-400 border-green-500/20",
  };

  return (
    <div className={`w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:border-opacity-100 transition-all group hover:bg-zinc-900/80 ${accentColors[data.theme].split(" ")[1]}`}>
       {/* LEFT: INFO */}
       <div className="flex-1 flex flex-col justify-center pl-2">
          <div className="flex justify-between items-start mb-1">
             <h3 className={`text-2xl font-bold text-white transition-colors ${accentColors[data.theme].split(' ')[0]}`}>
                {data.title}
             </h3>
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{data.subtitle}</p>
          
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-md">
             {data.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
              {data.stack.map((t: string) => (
              <span 
                  key={t} 
                  className="px-2.5 py-1 rounded-md text-[11px] font-medium border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
              >
                  {t}
              </span>
              ))}
          </div>

          <div className="flex gap-3">
             <a href={data.link} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-950 rounded-full text-xs font-bold hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <ExternalLink size={14} /> 
                Live Demo
              </a>
             <a href={data.repo} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-full text-xs font-bold hover:bg-zinc-900 hover:text-white hover:border-zinc-700 hover:scale-105 active:scale-95 transition-all">
                <Github size={14} /> 
                Code
              </a>
          </div>
       </div>

       {/* RIGHT: VIDEO PREVIEW */}
      <div 
        className="w-full md:w-[280px] h-[200px] bg-black rounded-2xl border border-zinc-800 relative overflow-hidden group-hover:shadow-2xl transition-all shadow-lg shadow-black/50 cursor-pointer"
        onClick={() => onPlay(data.video)}
      >
        <div className="absolute inset-0 z-10 border border-white/5 rounded-2xl pointer-events-none" />
        <video 
          src={data.video} 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
             <Play size={20} className="ml-1 text-white" fill="currentColor"/>
           </div>
        </div>
      </div>
    </div>
  );
}

function SocialBtn({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" className="w-full py-5 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-zinc-400 text-sm font-bold hover:bg-zinc-800 hover:text-white transition-colors">
      {label}
    </a>
  );
}

function TechIcon({ icon, name, color }: { icon: any, name: string, color: string }) {
  return (
    <div 
      className="group relative flex aspect-square cursor-pointer items-center justify-center rounded-2xl bg-zinc-900/50 border border-zinc-800/50 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-105"
    >
       <div 
        className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: color }} 
      />
       <div 
         className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" 
         style={{ color: color }}
       >
         {icon}
       </div>
       <span 
         className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10 whitespace-nowrap shadow-lg bg-zinc-900 border border-zinc-700"
       >
         {name}
       </span>
    </div>
  )
}
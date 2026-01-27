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
  Play
} from 'lucide-react';

// --- DATA ---
const PROJECTS = [
  {
    id: 1,
    title: "Velocity",
    subtitle: "Crypto Futures Simulator",
    description: "High-frequency exchange with real-time WebSockets & Node.js matching engine. Handles sub-millisecond updates.",
    theme: "purple", 
    link: "https://velocity-demo.com",
    repo: "https://github.com",
    image: "/api/placeholder/600/350", 
    stack: ["React", "Node.js", "Socket.IO"]
  },
  {
    id: 2,
    title: "PrivMat",
    subtitle: "Personal Data Vault",
    description: "Privacy dashboard with synthetic identity generation & AES-256 encryption.",
    theme: "green",
    link: "https://privmat-demo.com",
    repo: "https://github.com",
    image: "/api/placeholder/600/350", 
    stack: ["React", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Codictive 3.0",
    subtitle: "AI Trip Planner",
    description: "Built a real-time booking chatbot in 24 hours using OpenAI API.",
    theme: "yellow",
    link: "https://github.com",
    repo: "https://github.com",
    image: "/api/placeholder/600/350", 
    stack: ["Next.js", "OpenAI", "TypeScript"]
  },
   {
    id: 4,
    title: "Portfolio V1",
    subtitle: "Static Site",
    description: "High performance portfolio built with Next.js and Tailwind.",
    theme: "blue",
    link: "https://github.com",
    repo: "https://github.com",
    image: "/api/placeholder/600/350", 
    stack: ["Next.js", "Tailwind"]
  }
];

export default function Portfolio() {
  return (
    <main className="bg-black text-zinc-200 font-sans min-h-screen w-full flex flex-col lg:flex-row">
      
      {/* =========================================
          LEFT SIDEBAR: FIXED & NON-SCROLLABLE (30% Width)
          Matches Wireframe: Profile + Tech + Socials
         ========================================= */}
      <aside className="w-full lg:w-[28%] lg:h-screen lg:sticky lg:top-0 bg-black border-r border-zinc-800 p-6 flex flex-col gap-4 overflow-hidden z-20">
        
        {/* 1. BIG PROFILE BOX (Contains Name, Info & Tech Icons) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col flex-grow relative group">
          
          {/* Header Info */}
          <div className="mb-6">
            {/* <div className="w-16 h-16 rounded-full bg-zinc-800 mb-4 border-2 border-zinc-700 overflow-hidden flex items-center justify-center">
              <span className="font-bold text-zinc-600">IMG</span>
            </div> */}
            <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-1">
              Sanjana<br/>Rao
            </h1>
            <p className="text-zinc-500 text-sm font-mono mb-4">
              Full Stack Developer
            </p>
            {/* <div className="flex items-center gap-2 text-xs text-zinc-400">
               <MapPin size={14} /> Patna, India
            </div> */}
          </div>

          {/* Spacer to push Tech Stack down */}
          <div className="flex-grow"></div>

          {/* Tech Stack Grid (Moved inside Profile as per wireframe) */}
          <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-4">
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
               <Cpu size={12} /> Tech Arsenal
            </div>
            <div className="grid grid-cols-4 gap-2">
                <TechIcon name="React" />
                <TechIcon name="Node" />
                <TechIcon name="Next" />
                <TechIcon name="TS" />
                <TechIcon name="Mongo" />
                <TechIcon name="Docker" />
                <TechIcon name="Git" />
                <TechIcon name="AWS" />
            </div>
          </div>
        </div>

        {/* 2. SOCIALS (Fixed at bottom of Sidebar) */}
        <div className="flex flex-col gap-2">
            <SocialBtn href="mailto:Sanjanarao26@gmail.com" label="Email Me" />
            <SocialBtn href="https://github.com" label="GitHub" />
            <div className="grid grid-cols-2 gap-2">
               <SocialBtn href="https://linkedin.com" label="LinkedIn" />
               <SocialBtn href="/resume.pdf" label="CV" />
            </div>
        </div>
      </aside>


      {/* =========================================
          RIGHT CONTENT: SCROLLABLE (70% Width)
          Matches Wireframe: Top Grid + Scrollable Projects
         ========================================= */}
      <div className="w-full lg:w-[70%] p-6 lg:p-10 flex flex-col gap-4">
        
        {/* --- TOP ROW: ABOUT ME (Terminal) + RIGHT STACK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* A. TERMINAL ABOUT ME (Matches Image 1 Exact Colors) */}
          <div className="lg:col-span-2 bg-[#0d0d0d] border border-zinc-800 rounded-3xl p-6 font-mono text-sm shadow-xl flex flex-col">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            
            {/* Code Content */}
            <div className="text-zinc-400 leading-7">
               <p>
                 <span className="text-purple-400">const</span> <span className="text-yellow-200">sanjana</span> <span className="text-zinc-400">=</span> <span className="text-blue-400">{`{`}</span>
               </p>
               <p className="pl-6">
                 current_focus<span className="text-zinc-400">:</span> <span className="text-green-400">"Building Scalable Systems"</span>,
               </p>
               <p className="pl-6">
                 hardest_bug_fixed<span className="text-zinc-400">:</span> <span className="text-green-400">"Race condition in payment API"</span>,
               </p>
               <p className="pl-6">
                 location<span className="text-zinc-400">:</span> <span className="text-green-400">"Patna, India"</span>
               </p>
               <p className="text-blue-400">{`}`};</p>
               
               <p className="mt-4 text-zinc-500">// I don't just write code, I build engines.</p>
               <p className="flex items-center gap-2">
                 <span className="text-purple-400">➜</span> <span className="text-blue-400">~</span> <span className="animate-pulse w-2 h-4 bg-zinc-500 block"></span>
               </p>
            </div>
          </div>

          {/* B. RIGHT STACK (Volunteering + Win) */}
          <div className="lg:col-span-1 flex flex-col gap-3">
             {/* Volunteering */}
             <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-center hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-purple-400">
                   <HeartHandshake size={20} />
                   <span className="text-xs font-bold uppercase">Volunteering</span>
                </div>
                <div className="font-bold text-white">IIT Patna E-Summit</div>
                <div className="text-xs text-zinc-400">Creative Team Lead</div>
             </div>
             
             {/* Win */}
             <div className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-2 right-2 opacity-10">
                   <Trophy size={40} />
                </div>
                <div className="text-yellow-500 text-xs font-bold uppercase mb-1">Latest Win</div>
                <div className="font-bold text-white text-lg">Codictive 3.0</div>
                <div className="text-xs text-zinc-400">Finalist 2025</div>
             </div>
          </div>

        </div>

        {/* --- BOTTOM ROW: PROJECTS (Scrollable List) --- */}
        <div className="flex flex-col gap-4 ">
           <div className="flex items-center gap-4 ">
              <h2 className="text-lg font-bold text-white">Projects</h2>
              <div className="h-[1px] bg-zinc-800 flex-grow"></div>
           </div>

           {PROJECTS.map((project) => (
             <ProjectCard key={project.id} data={project} />
           ))}
        </div>

      </div>
    </main>
  );
}

// --- COMPONENTS ---

function ProjectCard({ data }: { data: any }) {
  const accentColors: any = {
    purple: "group-hover:text-purple-400 border-purple-500/20",
    green: "group-hover:text-green-400 border-green-500/20",
    yellow: "group-hover:text-yellow-400 border-yellow-500/20",
    blue: "group-hover:text-blue-400 border-blue-500/20",
  };

  return (
    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-4 flex flex-col md:flex-row gap-6 hover:border-zinc-600 transition-all group">
       {/* LEFT: INFO */}
       <div className="flex-1 flex flex-col justify-center py-2 pl-2">
          <div className="flex justify-between items-start">
             <div>
                <h3 className={`text-2xl font-bold text-white mb-1 transition-colors ${accentColors[data.theme].split(' ')[0]}`}>
                   {data.title}
                </h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{data.subtitle}</p>
             </div>
          </div>
          
          <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-md">
             {data.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
             {data.stack.map((t: string) => (
                <span key={t} className="px-2 py-1 bg-black rounded text-[10px] text-zinc-400 border border-zinc-800">
                   {t}
                </span>
             ))}
          </div>

          {/* ACTION BUTTONS (Not whole card clickable) */}
          <div className="flex gap-3">
             <a href={data.link} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">
                <ExternalLink size={14} /> Live Demo
             </a>
             <a href={data.repo} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-black border border-zinc-800 text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-colors">
                <Github size={14} /> Code
             </a>
          </div>
       </div>

       {/* RIGHT: VIDEO/IMAGE PREVIEW (Fixed height to ensure 2 projects fit on screen) */}
       <div className="w-full md:w-[320px] h-[200px] bg-black rounded-2xl border border-zinc-800 relative overflow-hidden group-hover:shadow-2xl transition-all">
          <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
                <Play size={16} className="ml-1 text-white" fill="white"/>
             </div>
          </div>
       </div>
    </div>
  );
}

function SocialBtn({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" className="w-full py-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-zinc-400 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors">
      {label}
    </a>
  );
}

function TechIcon({ name }: { name: string }) {
  return (
    <div className="aspect-square bg-black border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors cursor-default" title={name}>
       {/* Placeholder for SVG */}
       <span className="text-[9px] font-bold">{name.substring(0,2)}</span>
    </div>
  )
}
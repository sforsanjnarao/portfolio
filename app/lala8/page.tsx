"use client";
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { SkillPill } from '../_component/SkillPill';
import { SocialBox } from '../_component/SocialBox';

// --- DATA: ADD YOUR PROJECTS HERE ---
// Simply add a new object to this array, and the website handles the rest.
const PROJECTS = [
  {
    id: 1,
    title: "Velocity",
    subtitle: "Crypto Futures Simulator",
    description: "High-frequency exchange with real-time WebSockets & Node.js matching engine.",
    theme: "red", // Options: red, blue, green, yellow, purple
    link: "https://velocity-demo.com",
    // REPLACE THIS with your actual image path (e.g., "/velocity.png")
    image: "/api/placeholder/600/400", 
    stack: ["React", "Node.js", "Socket.IO", "Tailwind"]
  },
  {
    id: 2,
    title: "PrivMat",
    subtitle: "Personal Data Vault",
    description: "Privacy dashboard with synthetic identity generation & AES-256 encryption.",
    theme: "blue",
    link: "https://privmat-demo.com",
    // REPLACE THIS with your actual image path
    image: "/api/placeholder/600/400",
    stack: ["React", "Express", "MongoDB", "Docker"]
  },
  // {
  //   id: 3,
  //   title: "Codictive 3.0",
  //   subtitle: "AI Trip Planner",
  //   description: "Hackathon Win. Built a real-time booking chatbot in 24 hours.",
  //   theme: "yellow",
  //   link: "https://github.com/sanjana/codictive",
  //   image: "/api/placeholder/600/400",
  //   stack: ["Next.js", "OpenAI", "TypeScript"]
  // }
];

export default function Portfolio() {
  return (
    <main className="bg-black text-zinc-200 font-sans selection:bg-zinc-700/30 
      min-h-screen w-full p-4 md:p-6 flex flex-col justify-center">
      
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* =========================================
            SIDEBAR (Fixed on Desktop, Top on Mobile)
            Width: 3/12 cols
           ========================================= */}
        <aside className="lg:col-span-3 lg:h-[calc(100vh-3rem)] lg:sticky lg:top-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col shadow-2xl z-10">
        <div className="md:col-span-3 flex flex-col gap-4 h-full">
            {/* 1. Profile Card */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-center flex-grow">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-800 text-green-400 text-xs font-mono mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online & Coding
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                  Sanjana<br/>Kumari
                </h1>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Full Stack Developer <br/>
                  <span className="text-zinc-500">CS & Data Analytics @ IIT Patna</span>
                </p>
              </div>

              {/* Mini Skills List */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Core Stack</div>
                <div className="flex flex-wrap gap-2">
                  <SkillPill>React</SkillPill>
                  <SkillPill>Node.js</SkillPill>
                  <SkillPill>TypeScript</SkillPill>
                  <SkillPill>MongoDB</SkillPill>
                  <SkillPill>Next.js</SkillPill>
                  <SkillPill>Docker</SkillPill>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-2 h-32">
              <SocialBox href="mailto:Sanjanarao26@gmail.com" icon={<Mail size={18} />} label="Email Me" color="hover:bg-red-500/10 hover:text-red-400" />
              <SocialBox href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" color="hover:bg-blue-500/10 hover:text-blue-400" />
                <div className="grid grid-cols-2 gap-2 row-span-1">
                  <SocialBox href="https://github.com" icon={<Github size={18} />} label="Git" color="hover:bg-zinc-700" />
                  <SocialBox href="/resume.pdf" icon={<FileText size={18} />} label="CV" color="hover:bg-green-500/10 hover:text-green-400" />
                </div>
            </div>
          </div>
        </aside>


        {/* =========================================
            MAIN CONTENT AREA
            Width: 9/12 cols
           ========================================= */}
        <section className="lg:col-span-9 flex flex-col gap-6">

          {/* 2. DYNAMIC PROJECTS GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>

          {/* 1. ABOUT ME (Terminal Style) */}
          <div className="md:col-span-2 md:row-span-1 bg-black border border-zinc-800 rounded-2xl p-5 font-mono text-xs text-zinc-400 flex flex-col justify-center">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="space-y-1">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-200">sanjana</span> = <span className="text-blue-400">{`{`}</span></p>
              <p className="pl-4">current_focus: <span className="text-green-400">"Building Scalable Systems"</span>,</p>
              <p className="pl-4">hardest_bug_fixed: <span className="text-green-400">"Race condition in payment API"</span>,</p>
              <p className="pl-4">location: <span className="text-green-400">"Patna, India"</span></p>
              <p><span className="text-blue-400">{`}`}</span>;</p>
            </div>
        </div>

          

        </section>

      </div>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function ProjectCard({ data }: { data: any }) {
  // Theme configuration
  const themes: any = {
    red: "hover:border-red-500/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]",
    blue: "hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
    yellow: "hover:border-yellow-500/50 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.2)]",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
  };

  const activeTheme = themes[data.theme] || themes.purple;

  return (
    <a 
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col h-[400px] transition-all duration-500 ${activeTheme}`}
    >
      {/* BACKGROUND IMAGE AREA */}
      <div className="h-[55%] w-full relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0">
             {/* Simulating the image provided */}
             <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
             {/* Gradient Overlay to make text readable at bottom of image */}
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
        </div>
        
        {/* HOVER "VISIT" BUTTON - Flashes briefly on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm bg-black/20">
          <div className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 shadow-xl">
            Visit Website <ExternalLink size={16} />
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="flex-grow p-6 flex flex-col justify-between relative z-10 bg-zinc-900">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
              {data.title}
            </h2>
            <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
            {data.subtitle}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
            {data.description}
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-4 pt-4 border-t border-zinc-800 flex gap-3 overflow-x-auto no-scrollbar">
          {data.stack.map((tech: string) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </div>
      </div>
    </a>
  );
}

// Helper to render Icons based on string name
function TechIcon({ name }: { name: string }) {
  // Simple mapping - In a real app, import these from react-icons or use SVGs
  const getIcon = (n: string) => {
    const s = "w-5 h-5";
    switch(n) {
      case 'React': return <svg className={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>; // Placeholder Circle
      case 'Node.js': return <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>; // Hexagon
      default: return <Code2 size={20} />;
    }
  };

  return (
    <div 
      className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
      title={name} // Shows text on hover
    >
      {getIcon(name)}
    </div>
  );
}

function SocialBtn({ href, icon, label }: any) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white text-zinc-400 transition-all group"
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
      <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
    </a>
  )
}
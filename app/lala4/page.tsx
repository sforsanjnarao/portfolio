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
  ArrowUpRight,
  FileText,
  Trophy,
  HeartHandshake,
  Cpu
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const PROJECTS = [
  {
    id: 1,
    title: "Velocity",
    subtitle: "Crypto Futures Simulator",
    description: "High-frequency exchange with real-time WebSockets & Node.js matching engine. Handles sub-millisecond updates.",
    theme: "purple", 
    link: "https://velocity-demo.com",
    image: "/api/placeholder/600/400", // Replace with your video/image
    stack: ["React", "Node.js", "Socket.IO", "Tailwind"]
  },
  {
    id: 2,
    title: "PrivMat",
    subtitle: "Personal Data Vault",
    description: "Privacy dashboard with synthetic identity generation & AES-256 encryption for secure credential storage.",
    theme: "green",
    link: "https://privmat-demo.com",
    image: "/api/placeholder/600/400", 
    stack: ["React", "Express", "MongoDB", "Docker"]
  },
  {
    id: 3,
    title: "Codictive 3.0",
    subtitle: "AI Trip Planner",
    description: "Hackathon Win. Built a real-time booking chatbot in 24 hours using OpenAI API.",
    theme: "yellow",
    link: "https://github.com/sanjana/codictive",
    image: "/api/placeholder/600/400", 
    stack: ["Next.js", "OpenAI", "TypeScript"]
  }
];

export default function Portfolio() {
  return (
    <main className="bg-black text-zinc-200 font-sans selection:bg-purple-500/30 
      min-h-screen w-full p-4 md:p-8 flex flex-col justify-center">
      
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* =========================================
            LEFT COLUMN: SIDEBAR (3 Cols)
            Matches your sketch: Profile -> Volunteering -> Socials
           ========================================= */}
        <aside className="lg:col-span-3 flex flex-col gap-4 h-full">
            
            {/* 1. PROFILE CARD (Tall Box) */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="w-20 h-20 rounded-full bg-zinc-800 mb-6 border-2 border-zinc-700 overflow-hidden relative">
                   {/* IMAGE GOES HERE */}
                   <div className="absolute inset-0 flex items-center justify-center font-bold text-zinc-600">IMG</div>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                  Sanjana<br/>Rao
                </h1>
                <p className="text-zinc-500 text-sm font-mono mb-6">
                  portfolio_frontend<span className="animate-pulse">_</span>
                </p>
                
                <div className="space-y-2 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} /> Patna, India
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 size={16} /> Full Stack Dev
                  </div>
                </div>
              </div>

              {/* Volunteering Section (Inside Profile as per sketch) */}
              <div className="mt-8 p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800 group hover:border-zinc-600 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <HeartHandshake size={20} />
                  </div>
                  <span className="font-bold text-white text-sm">Volunteering</span>
                </div>
                <p className="text-xs text-zinc-400">
                  IIT Patna E-Summit <br/> Creative Team Lead
                </p>
              </div>
            </div>

            {/* 2. SOCIAL GRID (Matches Image 1 exactly) */}
            <div className="flex flex-col gap-3">
              {/* Row 1: Email */}
              <SocialBtn href="mailto:Sanjanarao26@gmail.com" icon={<Mail size={20} />} label="Email Me" />
              
              {/* Row 2: LinkedIn */}
              <SocialBtn href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
              
              {/* Row 3: Git + CV */}
              <div className="grid grid-cols-2 gap-3">
                 <SocialBtn href="https://github.com" icon={<Github size={20} />} label="Git" />
                 <SocialBtn href="/resume.pdf" icon={<FileText size={20} />} label="CV" />
              </div>
            </div>
        </aside>


        {/* =========================================
            RIGHT COLUMN: MAIN CONTENT (9 Cols)
           ========================================= */}
        <section className="lg:col-span-9 flex flex-col gap-6">

          {/* ROW 1: ABOUT ME + TECH + WIN (Matches Sketch) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[300px]">
            
            {/* 1. ABOUT ME (Wide Box - 2 Cols) */}
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

            {/* 2. RIGHT STACK (Tech + Win - 1 Col) */}
            <div className="md:col-span-1 flex flex-col gap-6 h-full">
              
              {/* Top: Tech Icons */}
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center">
                 <div className="flex items-center gap-2 mb-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                   <Cpu size={14} /> Tech Stack
                 </div>
                 <div className="grid grid-cols-4 gap-4">
                    {/* Hardcoded icons for the 'Tech I Know' box */}
                    <TechIconSimple name="React" />
                    <TechIconSimple name="Node" />
                    <TechIconSimple name="Next" />
                    <TechIconSimple name="TS" />
                    <TechIconSimple name="Mongo" />
                    <TechIconSimple name="Docker" />
                    <TechIconSimple name="Git" />
                    <TechIconSimple name="AWS" />
                 </div>
              </div>

              {/* Bottom: Codictive Win */}
              <div className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity">
                   <Trophy size={80} />
                 </div>
                 <div className="z-10">
                   <div className="text-yellow-500 font-bold text-xs uppercase mb-1">Latest Win</div>
                   <div className="text-xl font-bold text-white">Codictive 3.0</div>
                   <div className="text-xs text-zinc-400 mt-1">Hackathon Finalist 2025</div>
                 </div>
              </div>

            </div>
          </div>

          {/* ROW 2: PROJECTS (Dynamic List - Matches Sketch "Horizontal" Cards) */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 px-2">
                <div className="h-1 w-1 rounded-full bg-zinc-500"></div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Selected Works</span>
             </div>

             {PROJECTS.map((project) => (
                <ProjectCardHorizontal key={project.id} data={project} />
             ))}
          </div>

        </section>

      </div>
    </main>
  );
}

// --- COMPONENT: HORIZONTAL PROJECT CARD (Matches Sketch) ---
function ProjectCardHorizontal({ data }: { data: any }) {
  const themes: any = {
    purple: "hover:border-purple-500/50 group-hover:text-purple-400",
    green: "hover:border-green-500/50 group-hover:text-green-400",
    yellow: "hover:border-yellow-500/50 group-hover:text-yellow-400",
  };
  
  const accentClass = themes[data.theme];

  return (
    <a 
      href={data.link}
      target="_blank" 
      rel="noreferrer"
      className={`group w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-2 md:p-3 flex flex-col md:flex-row gap-4 hover:bg-zinc-800/50 transition-all duration-300 ${accentClass}`}
    >
      {/* LEFT: TEXT CONTENT */}
      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
           <h3 className="text-2xl font-bold text-white">{data.title}</h3>
           <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-white transition-colors"/>
        </div>
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{data.subtitle}</p>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
          {data.description}
        </p>
        
        {/* Tech Stack Icons (No Words) */}
        <div className="flex gap-2">
          {data.stack.map((tech: string) => (
             <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* RIGHT: VIDEO/IMAGE PREVIEW */}
      <div className="w-full md:w-[350px] h-[200px] md:h-auto bg-black rounded-2xl border border-zinc-800 overflow-hidden relative">
         {/* Placeholder for Video/Image */}
         <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
         
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-zinc-800/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
               <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
            </div>
         </div>
      </div>
    </a>
  );
}

// --- HELPER COMPONENTS ---

function SocialBtn({ href, icon, label }: any) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="flex items-center justify-center gap-3 w-full py-4 bg-zinc-950 border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all group"
    >
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </a>
  )
}

function TechIconSimple({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center w-full aspect-square bg-black border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-600 transition-all cursor-default" title={name}>
       {/* You can replace these with real SVGs later. Using text for now to identify */}
       <span className="text-[10px] font-bold">{name}</span>
    </div>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="p-2 bg-black border border-zinc-800 rounded-lg text-zinc-400" title={name}>
       <Code2 size={16} /> {/* Replace with dynamic icons if needed */}
    </div>
  )
}
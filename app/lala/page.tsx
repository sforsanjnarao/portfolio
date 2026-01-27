import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText,
  ExternalLink,
  Code2,
  Cpu, 
  Shield, 
  Trophy,
  Terminal,
  Zap
} from 'lucide-react';

export default function Portfolio() {
  return (
    // h-screen locks the height on desktop. overflow-hidden prevents scrolling.
    <main className="bg-zinc-950 text-zinc-200 font-sans selection:bg-blue-500/30 
      min-h-screen w-full p-2 md:p-4 md:h-screen md:overflow-hidden flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3">
        
        {/* --- ROW 1 (Top) --- */}
        
        {/* BLOCK 1: Profile (Top Left - 2 Cols) */}
        <div className="md:col-span-2 md:row-span-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Cpu size={120} />
          </div>
          <div className="z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full bg-green-500/10">
                IIT Patna '26
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-1">
              Sanjana Kumari
            </h1>
            <p className="text-zinc-400 text-lg">
              Full Stack Developer <span className="text-zinc-600">|</span> Data Analytics
            </p>
          </div>
        </div>

        {/* BLOCK 2: Education (Top Middle - 1 Col) */}
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/30 transition-colors">
          <div className="flex justify-between items-start">
             <div className="p-2 bg-blue-500/10 rounded-lg">
                <Code2 className="text-blue-400" size={20} />
              </div>
              <span className="text-xs font-mono text-zinc-500">8.0 CPI</span>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-1">Education</div>
            <div className="font-bold text-white text-lg leading-tight">B.Sc. CS & DA</div>
            <div className="text-xs text-zinc-400 mt-1">Indian Institute of Technology, Patna</div>
          </div>
        </div>

        {/* BLOCK 3: Socials/Resume (Top Right - 1 Col) */}
        <div className="md:col-span-1 md:row-span-1 grid grid-rows-3 gap-2">
          <SocialBox href="mailto:Sanjanarao26@gmail.com" icon={<Mail size={18} />} label="Email Me" color="hover:bg-red-500/10 hover:text-red-400" />
          <SocialBox href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" color="hover:bg-blue-500/10 hover:text-blue-400" />
          <div className="grid grid-cols-2 gap-2 row-span-1">
             <SocialBox href="https://github.com" icon={<Github size={18} />} label="Git" color="hover:bg-zinc-700" />
             <SocialBox href="/resume.pdf" icon={<FileText size={18} />} label="CV" color="hover:bg-green-500/10 hover:text-green-400" />
          </div>
        </div>

        {/* --- ROW 2 (Middle - The "Meat") --- */}

        {/* BLOCK 4: Velocity (Main Project - 2 Cols) */}
        <div className="md:col-span-2 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-purple-500/30 transition-all relative overflow-hidden">
           <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <Zap size={150} />
          </div>
          
          <div className="flex justify-between items-start z-10">
            <div className="flex gap-2">
               <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Velocity Exchange
              </h2>
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] rounded border border-purple-500/20 h-fit mt-1">
                FEATURED
              </span>
            </div>
            <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-colors">
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="z-10 mt-2">
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Crypto Futures Simulator engineered with <strong className="text-zinc-200">WebSockets</strong> for real-time market data and a <strong className="text-zinc-200">Node.js</strong> matching engine. Handles high-frequency updates with zero latency.
            </p>
            <div className="flex gap-2">
              <TechBadge>React</TechBadge>
              <TechBadge>Node.js</TechBadge>
              <TechBadge>Socket.IO</TechBadge>
              <TechBadge>USDC</TechBadge>
            </div>
          </div>
        </div>

        {/* BLOCK 5: PrivMat (Secondary Project - 1 Col) */}
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between group hover:border-green-500/30 transition-all">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Shield className="text-green-400" size={20} />
            </div>
            <a href="#" className="text-zinc-500 hover:text-white"><ExternalLink size={14} /></a>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg group-hover:text-green-400 transition-colors">PrivMat Vault</h3>
            <p className="text-xs text-zinc-400 mt-1 mb-3">
              Privacy dashboard with <span className="text-zinc-200">synthetic identity generation</span> and AES-256 encryption.
            </p>
            <div className="flex flex-wrap gap-1">
              <Badge>Argon2</Badge>
              <Badge>JWT</Badge>
              <Badge>MERN</Badge>
            </div>
          </div>
        </div>

        {/* BLOCK 6: Tech Stack (1 Col) */}
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 overflow-hidden flex flex-col justify-center">
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-3">Tech Arsenal</h3>
          <div className="flex flex-wrap gap-1.5">
             <StackItem>JavaScript</StackItem>
             <StackItem>TypeScript</StackItem>
             <StackItem>Next.js</StackItem>
             <StackItem>React</StackItem>
             <StackItem>Redux</StackItem>
             <StackItem>Node.js</StackItem>
             <StackItem>Express</StackItem>
             <StackItem>MongoDB</StackItem>
             <StackItem>Docker</StackItem>
             <StackItem>Git</StackItem>
             <StackItem>Postman</StackItem>
          </div>
        </div>

        {/* --- ROW 3 (Bottom) --- */}

        {/* BLOCK 7: Terminal / About (2 Cols) */}
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

        {/* BLOCK 8: Achievement (2 Cols) */}
        <div className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-2xl p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-yellow-500"></div>
          <div className="z-10 max-w-[70%]">
             <div className="flex items-center gap-2 mb-1">
                <Trophy size={16} className="text-yellow-500" />
                <span className="text-xs font-bold text-yellow-500 uppercase">Latest Win</span>
             </div>
             <h3 className="text-xl font-bold text-white">Codictive 3.0 Hackathon</h3>
             <p className="text-xs text-zinc-400 mt-1">Built an AI Trip Planner with real-time booking chatbot.</p>
          </div>
          <div className="z-10 text-right">
            <div className="text-2xl font-bold text-white">2025</div>
            <div className="text-xs text-zinc-500">Finalist</div>
          </div>
        </div>

      </div>
    </main>
  );
}

// --- MICRO COMPONENTS ---

function SocialBox({ href, icon, label, color }: any) {
  return (
    <a 
      href={href} 
      target="_blank"
      className={`bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center gap-2 text-zinc-400 transition-all h-full ${color}`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </a>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 font-mono font-medium">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-1.5 py-0.5 bg-zinc-800/50 border border-zinc-700/50 rounded text-[10px] text-zinc-400">
      {children}
    </span>
  );
}

function StackItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-default">
      {children}
    </span>
  );
}
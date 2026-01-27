import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  Cpu, 
  Shield, 
  Zap,
  TrendingUp,
  Activity,
  Lock,
  Trophy
} from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="bg-black text-zinc-200 font-sans selection:bg-purple-500/30 
      min-h-screen w-full p-2 md:p-6 md:h-screen md:overflow-hidden flex flex-col justify-center">
      
      <div className="max-w-[1400px] mx-auto w-full h-full grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* =========================================
            LEFT COLUMN: PROFILE (Sidebar - 25% width)
            Context only. Not the focus.
           ========================================= */}
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

          {/* 2. Contact / Links */}
          <div className="grid grid-cols-2 gap-2 h-32">
             <SocialBtn href="https://github.com" icon={<Github size={20} />} label="GitHub" />
             <SocialBtn href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
             <SocialBtn href="mailto:Sanjanarao26@gmail.com" icon={<Mail size={20} />} label="Email" />
             <SocialBtn href="/resume.pdf" icon={<Code2 size={20} />} label="Resume" />
          </div>
        </div>


        {/* =========================================
            RIGHT COLUMN: PROJECTS (Main Stage - 75% width)
            This is where the eye goes first.
           ========================================= */}
        <div className="md:col-span-9 grid grid-rows-12 gap-4 h-full">
          
          {/* --- HERO PROJECT: VELOCITY (Takes up 60% of vertical space) --- */}
          <div className="row-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
            {/* Background "Chart" Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
               <svg viewBox="0 0 400 200" className="w-full h-full text-purple-500 fill-current">
                 <path d="M0 150 C 50 150, 50 100, 100 100 C 150 100, 150 180, 200 180 C 250 180, 250 50, 300 50 C 350 50, 350 100, 400 80 V 200 H 0 Z" />
               </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <Zap className="text-purple-400" size={32} />
                  </div>
                  <span className="text-purple-400 font-mono text-sm tracking-wider border border-purple-500/20 px-3 py-1 rounded-full bg-purple-900/10">
                    FLAGSHIP PROJECT
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-100 transition-colors">
                  Velocity
                </h2>
                <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
                  A high-frequency <span className="text-white font-semibold">Crypto Futures Exchange</span> simulator. 
                  Engineered with <span className="text-purple-300">WebSockets</span> for real-time order books and a <span className="text-purple-300">Node.js</span> matching engine that handles sub-millisecond updates.
                </p>
              </div>

              {/* Bottom Tech Bar */}
              <div className="flex items-end justify-between border-t border-zinc-800 pt-6 mt-6">
                <div className="flex gap-4 text-sm font-mono text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Activity size={16} /> 
                    <span>Live WebSocket Feed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu size={16} /> 
                    <span>Zero-Latency Matching</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-bold transition-all">
                  View Architecture <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>


          {/* --- SECONDARY ROW (Split 50/50) --- */}
          <div className="row-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* PROJECT 2: PRIVMAT */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                   <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Shield className="text-blue-400" size={24} />
                  </div>
                  <ExternalLink className="text-zinc-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PrivMat Vault</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Privacy dashboard featuring <strong className="text-zinc-200">Synthetic Identity Generation</strong> to mask user footprints. Secure storage powered by <strong className="text-zinc-200">AES-256 Encryption</strong>.
                </p>
              </div>
              <div className="flex gap-2">
                <Badge color="blue">Argon2</Badge>
                <Badge color="blue">JWT</Badge>
                <Badge color="blue">Express</Badge>
              </div>
            </div>

            {/* ACHIEVEMENT: HACKATHON */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Trophy size={100} />
              </div>
              <div className="z-10">
                 <h4 className="text-yellow-500 font-bold tracking-wider text-xs uppercase mb-2">Latest Achievement</h4>
                 <div className="text-3xl font-bold text-white mb-2">Codictive 3.0</div>
                 <p className="text-zinc-400 text-sm mb-4">
                   Built an <strong>AI Trip Planner</strong> with a real-time booking chatbot in 24 hours.
                 </p>
                 <div className="inline-block bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded text-xs font-mono">
                   Finalist • 2025
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

// --- COMPONENTS ---

function SocialBtn({ href, icon, label }: any) {
  return (
    <a href={href} className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl flex flex-col items-center justify-center gap-2 transition-all group">
      <div className="group-hover:-translate-y-1 transition-transform duration-300">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] text-zinc-400 uppercase tracking-wide font-medium">
      {children}
    </span>
  );
}

function Badge({ children, color }: { children: React.ReactNode, color: string }) {
  // Tailwind simplified map for this demo
  const styles = color === 'blue' 
    ? "bg-blue-500/10 text-blue-300 border-blue-500/20" 
    : "bg-zinc-800 text-zinc-300 border-zinc-700";
    
  return (
    <span className={`px-2 py-1 rounded text-xs border font-mono ${styles}`}>
      {children}
    </span>
  );
}
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Cpu, 
  Shield, 
  TrendingUp, 
  Award,
  ExternalLink,
  Code2,
  Database,
  Lock
} from 'lucide-react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 p-4 md:p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* TOP ROW: Intro + Education */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* CARD 1: BIO & HERO (2 Columns) */}
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
                  Open to Work
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                Sanjana Kumari
              </h1>
              <p className="text-zinc-400 text-lg">
                Full Stack Developer & Data Analytics Student @ <span className="text-blue-400 font-medium">IIT Patna</span>
              </p>
            </div>
            
            <div className="flex gap-3 mt-8">
              <SocialBtn href="mailto:Sanjanarao26@gmail.com" icon={<Mail size={18} />} label="Email" />
              <SocialBtn href="https://github.com" icon={<Github size={18} />} label="GitHub" />
              <SocialBtn href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          {/* CARD 2: EDUCATION (1 Column) */}
          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="p-2 bg-blue-500/10 w-fit rounded-lg mb-4">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-semibold mb-1">Education</h3>
              <p className="font-bold text-white">IIT Patna</p>
              <p className="text-sm text-zinc-400">B.Sc. CS & Data Analytics</p>
              <p className="text-xs text-zinc-500 mt-2 font-mono">CPI: 7.98 / 10.0</p>
              <p className="text-xs text-zinc-500 font-mono">Batch 2026</p>
            </div>
          </div>

          {/* CARD 3: ACHIEVEMENT / HACKATHON (1 Column) */}
          <div className="md:col-span-1 bg-gradient-to-br from-zinc-900 to-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Award size={80} />
            </div>
            <div className="z-10">
              <h3 className="text-sm uppercase tracking-wider text-yellow-500/80 font-semibold mb-2">Achievement</h3>
              <div className="font-bold text-white text-lg leading-tight mb-2">Codictive 3.0</div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Developed an AI-powered trip planner with real-time booking & chat.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 z-10">
              <span className="text-xs font-mono text-zinc-500">2025 Hackathon</span>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* CARD 4: VELOCITY (Flagship - 2 Columns) */}
          <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <TrendingUp className="text-purple-400" size={24} />
              </div>
              <a href="#" className="text-xs flex items-center gap-1 text-zinc-500 hover:text-white transition-colors">
                View Repo <ExternalLink size={12} />
              </a>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                Velocity Exchange
              </h2>
              <p className="text-zinc-400 mb-6 max-w-lg">
                Crypto Futures Simulator. Engineered a <span className="text-zinc-200">low-latency exchange</span> using USDC. Implemented real-time order matching and WebSocket feeds for live market data.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <TechBadge>Node.js</TechBadge>
                <TechBadge>Socket.IO</TechBadge>
                <TechBadge>React</TechBadge>
                <TechBadge>Tailwind</TechBadge>
              </div>
            </div>
          </div>

          {/* CARD 5: TECH STACK (1 Column) */}
          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors">
            <h3 className="text-sm uppercase tracking-wider text-zinc-500 font-semibold">Tech Stack</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-xs text-zinc-500 mb-1">Core</div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>JavaScript (ES6+)</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>C++</Badge>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-zinc-500 mb-1">Backend & DB</div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Clerk Auth</Badge>
                </div>
              </div>

              <div>
                <div className="text-xs text-zinc-500 mb-1">DevOps & Tools</div>
                <div className="flex flex-wrap gap-1.5">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Postman</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: More Projects & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* CARD 6: PRIVMAT (1 Column) */}
          <div className="md:col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between group hover:border-green-500/30 transition-all">
             <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Shield className="text-green-400" size={24} />
              </div>
              <a href="#" className="text-xs flex items-center gap-1 text-zinc-500 hover:text-white transition-colors">
                View Repo <ExternalLink size={12} />
              </a>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                PrivMat Vault
              </h2>
              <p className="text-sm text-zinc-400 mb-4">
                Privacy dashboard featuring <span className="text-zinc-200">synthetic identity generation</span> and AES-encrypted vaults for credential storage.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <TechBadge>Argon2</TechBadge>
                <TechBadge>JWT</TechBadge>
                <TechBadge>React</TechBadge>
              </div>
            </div>
          </div>

           {/* CARD 7: TERMINAL / ABOUT (2 Columns) */}
           <div className="md:col-span-2 bg-black border border-zinc-800 rounded-2xl p-6 font-mono text-sm overflow-hidden relative">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="space-y-2 text-zinc-300 z-10 relative">
              <p>
                <span className="text-blue-400">~</span> <span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = <span className="text-blue-400">{`{`}</span>
              </p>
              <p className="pl-4">
                name: <span className="text-green-400">"Sanjana Kumari"</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-green-400">"Full Stack Developer"</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-green-400">["Scalability", "Data Privacy", "Real-time Systems"]</span>,
              </p>
               <p className="pl-4">
                volunteering: <span className="text-green-400">"IIT Patna E-Summit Creative Team"</span>
              </p>
              <p>
                <span className="text-blue-400">{`}`}</span>;
              </p>
              <p className="animate-pulse mt-2">_</p>
            </div>
            {/* Subtle background decoration */}
            <Terminal className="absolute bottom-4 right-4 text-zinc-800 opacity-20" size={100} />
          </div>

        </div>
        
        {/* FOOTER */}
        <div className="flex justify-between items-center pt-8 pb-4 text-xs text-zinc-600 border-t border-zinc-900 mt-8">
          <p>© 2026 Sanjana Kumari. Built with Next.js & Tailwind.</p>
          <p>Patna, India</p>
        </div>
      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function SocialBtn({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg transition-all text-sm font-medium border border-zinc-700 hover:border-zinc-600"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 font-mono">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 bg-zinc-800/50 border border-zinc-700/50 rounded text-[10px] text-zinc-400 uppercase tracking-wide">
      {children}
    </span>
  );
}
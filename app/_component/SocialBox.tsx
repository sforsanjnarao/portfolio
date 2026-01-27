export function SocialBox({ href, icon, label, color }: any) {
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
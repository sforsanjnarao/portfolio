export function SocialBtn({ href, icon, label }: any) {
  return (
    <a href={href} className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl flex flex-col items-center justify-center gap-2 transition-all group">
      <div className="group-hover:-translate-y-1 transition-transform duration-300">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
}
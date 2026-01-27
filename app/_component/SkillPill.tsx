export function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] text-zinc-400 uppercase tracking-wide font-medium">
      {children}
    </span>
  );
}
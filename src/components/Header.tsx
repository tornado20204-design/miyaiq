import React from 'react';
import { Shield, Clock, Terminal } from 'lucide-react';

export default function Header() {
  const today = new Date().toLocaleDateString('uz-UZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="h-14 border-b border-subtle bg-dark-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-dark-900 border border-subtle text-titanium-200">
          <span className="w-1.5 h-1.5 rounded-full bg-tactic-emerald" />
          198CM INTJ-T ENGINE ONLINE
        </span>
        <span className="hidden md:inline text-xs text-titanium-500 font-mono">
          | 13 Fundamental Asar Bazasida
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs font-mono text-titanium-400">
        <div className="hidden sm:flex items-center gap-1.5">
          <Clock size={14} className="text-titanium-500" />
          <span>{today}</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[11px] bg-dark-900 border border-subtle text-tactic-amber font-bold">
          2X ELITA: 70.0%
        </span>
      </div>
    </header>
  );
}

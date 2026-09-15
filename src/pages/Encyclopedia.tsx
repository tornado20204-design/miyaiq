import React, { useState } from 'react';
import {
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Target,
  Shield,
  Zap,
  Quote,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { TACTICAL_ENCYCLOPEDIA, TacticalBook } from '../data/encyclopedia';

export default function Encyclopedia() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedBookId, setExpandedBookId] = useState<string>(TACTICAL_ENCYCLOPEDIA[0].id);

  const categories = [
    { id: 'all', label: 'Barchasi (13 ta Asar)' },
    { id: 'strategy', label: 'Asimmetrik Strategiya' },
    { id: 'physical', label: 'Elita Jismoniy & Richag' },
    { id: 'combat', label: 'Jangovar Fiziologiya & Boyd' },
    { id: 'stoic', label: 'Stoik Matonat & Goggins' },
  ];

  const filteredBooks = TACTICAL_ENCYCLOPEDIA.filter((b) => {
    const matchesCat = selectedCategory === 'all' || b.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      b.titleUz.toLowerCase().includes(q) ||
      b.titleOriginal.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.coreDoctrine.toLowerCase().includes(q) ||
      b.mathematicalFormulaOrLaw.name.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header briefing */}
      <div className="space-y-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
          Fundamental Kutubxona
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          13 Asar Taktik Ensiklopediyasi
        </h1>
        <p className="text-sm text-titanium-400 max-w-3xl leading-relaxed">
          Hech qanday sun’iy intellektning umumiy yoki yuzaki gaplarisiz: har bir asar harbiy, fizik va 
          fiziologik formulalar, asl iqtiboslar, qat’iy amaliy drillar va sizning shaxsiy 198sm / INTJ-T 
          arxitekturangizga to‘g‘ridan-to‘g‘ri bog‘langan holda taqdim etiladi.
        </p>
      </div>

      {/* Controls: Search & Categories */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-titanium-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Asar, muallif, doktrina yoki formula bo‘yicha qidiruv..."
            className="w-full bg-dark-900 border border-subtle rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder:text-titanium-500 focus:outline-none focus:border-dark-700 font-mono"
          />
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-white text-dark-950 font-bold'
                  : 'bg-dark-900 text-titanium-400 hover:text-white border border-subtle'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Encyclopedia List */}
      <div className="space-y-4">
        {filteredBooks.map((book) => {
          const isExpanded = expandedBookId === book.id;

          return (
            <div
              key={book.id}
              className="rounded-xl bg-dark-900 border border-subtle overflow-hidden transition-all"
            >
              {/* Card Header Accordion Trigger */}
              <button
                onClick={() => setExpandedBookId(isExpanded ? '' : book.id)}
                className="w-full p-5 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-dark-850 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-dark-950 border border-subtle flex items-center justify-center font-mono font-bold text-xs text-white shrink-0">
                    {book.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-bold text-white tracking-tight">
                        {book.titleUz}
                      </span>
                      <span className="text-xs text-titanium-500 font-mono hidden sm:inline">
                        ({book.titleOriginal})
                      </span>
                    </div>
                    <p className="text-xs text-titanium-400 mt-0.5 font-mono">
                      {book.author} • <span className="text-titanium-500">{book.categoryUz}</span> • {book.yearPublished}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden md:inline text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-subtle text-titanium-300">
                    {book.mathematicalFormulaOrLaw.name}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={18} className="text-titanium-400" />
                  ) : (
                    <ChevronDown size={18} className="text-titanium-400" />
                  )}
                </div>
              </button>

              {/* Detailed Dossier (When Expanded) */}
              {isExpanded && (
                <div className="p-6 border-t border-subtle bg-dark-950 space-y-6">
                  {/* 1. Fundamental Doctrine & Law */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-dark-900 border border-subtle space-y-2">
                      <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Target size={14} />
                        Fundamental Doktrina
                      </span>
                      <p className="text-xs text-titanium-200 leading-relaxed">
                        {book.coreDoctrine}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-dark-900 border border-subtle space-y-2">
                      <span className="text-[10px] font-mono font-bold text-tactic-amber uppercase tracking-wider flex items-center gap-1.5">
                        <Zap size={14} />
                        Ilmiy / Harbiy Formula: {book.mathematicalFormulaOrLaw.name}
                      </span>
                      <div className="p-2 rounded bg-dark-950 border border-subtle font-mono text-xs font-bold text-white">
                        {book.mathematicalFormulaOrLaw.formula}
                      </div>
                      <p className="text-[11px] text-titanium-400 leading-relaxed">
                        {book.mathematicalFormulaOrLaw.description}
                      </p>
                    </div>
                  </div>

                  {/* 2. Key Axioms */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase tracking-wider">
                      Asosiy Aksiomalar & Qonuniyatlar
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {book.keyAxioms.map((ax, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-dark-900 border border-subtle-light text-xs text-titanium-300 flex items-start gap-2">
                          <span className="text-titanium-500 font-mono shrink-0">0{idx + 1}.</span>
                          <span className="leading-relaxed">{ax}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Personalized Alignment: INTJ-T & 198cm */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-dark-900/60 border border-subtle space-y-2">
                      <span className="text-[10px] font-mono font-bold text-tactic-blue uppercase tracking-wider">
                        INTJ-T Ratsional Arxitekturasiga Bog‘liqligi
                      </span>
                      <p className="text-xs text-titanium-300 leading-relaxed">
                        {book.intjApplication}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-dark-900/60 border border-subtle space-y-2">
                      <span className="text-[10px] font-mono font-bold text-tactic-emerald uppercase tracking-wider">
                        198 sm Bo‘y & Richag Kinetikasiga Bog‘liqligi
                      </span>
                      <p className="text-xs text-titanium-300 leading-relaxed">
                        {book.height198cmApplication}
                      </p>
                    </div>
                  </div>

                  {/* 4. Actionable Practical Drill */}
                  <div className="p-4 rounded-lg bg-dark-900 border border-subtle space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-subtle-light pb-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                          Amaliy Qo‘llanma & Drill: {book.practicalDrill.title}
                        </span>
                        <p className="text-[11px] text-titanium-400">
                          Mezon: <span className="text-white font-mono">{book.practicalDrill.targetBenchmark}</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-titanium-400 bg-dark-950 px-2 py-0.5 rounded border border-subtle">
                        {book.practicalDrill.frequency}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">1. Tayyorgarlik</span>
                        <ul className="mt-1 space-y-1 text-titanium-300 text-[11px]">
                          {book.practicalDrill.phasePreparation.map((p, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-titanium-500">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">2. Bajarish</span>
                        <ul className="mt-1 space-y-1 text-titanium-300 text-[11px]">
                          {book.practicalDrill.phaseExecution.map((e, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-titanium-500">•</span>
                              <span>{e}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">3. Xavfsizlik</span>
                        <ul className="mt-1 space-y-1 text-titanium-300 text-[11px]">
                          {book.practicalDrill.phaseSafety.map((s, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-titanium-500">•</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 5. Authentic Quotes */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Quote size={14} />
                      Asl Iqtiboslar
                    </span>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {book.authenticQuotes.map((q, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-dark-900/40 border border-subtle-light text-xs italic text-titanium-300">
                          <p>«{q.text}»</p>
                          <p className="text-[10px] text-titanium-500 not-italic mt-1 font-mono text-right">— {q.context}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

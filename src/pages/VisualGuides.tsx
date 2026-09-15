import React, { useState } from 'react';
import {
  Eye,
  Maximize2,
  X,
  AlertTriangle
} from 'lucide-react';
import { VISUAL_GUIDES, VisualGuideItem } from '../data/visualGuidesData';

export default function VisualGuides() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Barcha Qo‘llanmalar (9 ta Illyustratsiya)' },
    { id: 'biomechanics', label: '198cm Biomexanika (Pull-up, Deadlift, Dips)' },
    { id: 'combat', label: 'Jangovar Taktika & Boyd OODA (Rucking, Teep, OODA)' },
    { id: 'strategy', label: 'Asimmetrik Strategiya (Sun Tzu, Clausewitz)' },
    { id: 'physiology', label: 'Fiziologiya & Nafas (Grossman HUD)' },
  ];

  const filteredGuides = VISUAL_GUIDES.filter((g) => {
    if (selectedCategory === 'all') return true;
    return g.category === selectedCategory;
  });

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
          Vizual Taktik Illyustratsiyalar
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Jang San’ati, Richag Biomexanikasi & Amaliy Mashqlar Vizual Qo‘llanmasi
        </h1>
        <p className="text-sm text-titanium-400 max-w-3xl leading-relaxed">
          198 sm bo‘y parametrlari, yelka va son richaglari, burchaklar, harakat traektoriyalari, 
          vektorlar hamda Dave Grossman fiziologik protokoli uchun maxsus chizilgan yuqori aniqlikdagi texnik illyustratsiyalar.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
              selectedCategory === c.id
                ? 'bg-white text-dark-950 font-bold shadow-sm'
                : 'bg-dark-900 text-titanium-400 hover:text-white border border-subtle'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Visual Guide Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="rounded-xl bg-dark-900 border border-subtle overflow-hidden flex flex-col justify-between hover:border-dark-700 transition-all group"
          >
            <div>
              {/* Image Frame with Lightbox Button */}
              <div className="relative aspect-video bg-dark-950 overflow-hidden border-b border-subtle">
                <img
                  src={guide.imageSrc}
                  alt={guide.titleUz}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                <button
                  onClick={() => setLightboxImage(guide.imageSrc)}
                  className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-dark-950/80 hover:bg-white hover:text-dark-950 text-white border border-subtle text-xs font-mono flex items-center gap-1.5 transition-all backdrop-blur-md"
                >
                  <Maximize2 size={13} />
                  Kattalashtirish
                </button>

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-dark-950/80 border border-subtle text-white backdrop-blur-md">
                    {guide.categoryUz}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-dark-950/80 border border-subtle text-tactic-amber backdrop-blur-md">
                    {guide.keyMetric}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-titanium-400">
                    <span>{guide.bookSource} • {guide.author}</span>
                  </div>
                  <h2 className="text-base font-bold text-white mt-1 tracking-tight">
                    {guide.titleUz}
                  </h2>
                  <p className="text-xs text-titanium-300 mt-2 leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                {/* Technical Points */}
                <div className="space-y-3 pt-2 border-t border-subtle-light">
                  {guide.technicalBreakdown.map((sec, i) => (
                    <div key={i} className="p-3 rounded-lg bg-dark-950 border border-subtle-light space-y-1">
                      <h4 className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                        {sec.title}
                      </h4>
                      <ul className="text-[11px] text-titanium-300 space-y-1">
                        {sec.points.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-titanium-500">•</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Common Mistakes */}
                <div className="p-3 rounded-lg bg-dark-950/60 border border-subtle-light space-y-1">
                  <span className="text-[10px] font-mono font-bold text-tactic-crimson uppercase tracking-wider flex items-center gap-1">
                    <AlertTriangle size={12} />
                    Yo‘l Qo‘yib Bo‘lmaydigan Xatolar
                  </span>
                  <ul className="text-[11px] text-titanium-400 space-y-0.5">
                    {guide.mistakesToAvoid.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-1.5">
                        <span className="text-tactic-crimson">✕</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-titanium-300 flex items-center gap-1 text-xs font-mono"
            >
              <X size={18} /> Yopish (ESC)
            </button>
            <img
              src={lightboxImage}
              alt="Kattalashtirilgan qo'llanma"
              className="w-full h-auto rounded-xl border border-subtle shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

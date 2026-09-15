import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Brain,
  Zap,
  Swords,
  ChevronRight,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { USER_PROFILE_CONSTANTS, WEEKLY_ACTIONABLE_PROTOCOL } from '../data/protocol198cm';
import { TACTICAL_ENCYCLOPEDIA } from '../data/encyclopedia';

export default function Dashboard() {
  const currentDayProtocol = WEEKLY_ACTIONABLE_PROTOCOL[0]; // Monday default for actionable focus

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* 1. HERO OPERATIONAL BRIEFING (DARK MINIMALIST PREMIUM) */}
      <div className="p-6 rounded-xl bg-dark-900 border border-subtle relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-800 text-titanium-300 border border-subtle">
                Shaxsiy Boshqaruv Markazi
              </span>
              <span className="text-xs text-titanium-500 font-mono">
                Model: 198cm • INTJ-T • 2X
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Kognitiv-Jangovar Boshqaruv Markazi
            </h1>
            <p className="text-sm text-titanium-400 max-w-2xl leading-relaxed">
              198 sm bo‘y kinetikasi, INTJ-T ratsional arxitekturasi va 13 ta klassik harbiy/fizik qo‘llanmalar 
              yagona qat’iy amaliy tizimga birlashtirildi. Hech qanday umumiy so‘zlarsiz — faqat aniq formulalar, 
              harbiy protokollar va jismoniy mezonlar.
            </p>
          </div>

          {/* Master 2X Readiness Index */}
          <div className="p-4 rounded-lg bg-dark-950 border border-subtle min-w-[220px] text-center">
            <p className="text-[11px] font-mono font-semibold text-titanium-400 uppercase tracking-wider">
              2X Elita Indeksi
            </p>
            <p className="text-4xl font-mono font-black text-white mt-1">
              70.0<span className="text-lg text-titanium-500">%</span>
            </p>
            <div className="w-full bg-dark-800 h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '70%' }} />
            </div>
            <p className="text-[10px] font-mono text-titanium-500 mt-2">
              40 turnik / 60 brus / 220kg deadlift marrasi
            </p>
          </div>
        </div>
      </div>

      {/* 2. SNOWUI HIGH-DENSITY KPI CARDS (MONOSPACE NUMERALS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: '2X KONDITSIYA KO‘RSATKICHI',
            value: '70.0%',
            delta: '+14.2%',
            deltaLabel: 'oylik dinamika',
            note: 'Turnik: 28/40, Brus: 42/60',
            icon: Target
          },
          {
            title: 'KOGNITIV SALOHIYAT (GF)',
            value: '124 IQ',
            delta: '+6 ball',
            deltaLabel: 'Dual N-Back 4-daraja',
            note: 'INTJ-T ishchi xotira sinxronligi',
            icon: Brain
          },
          {
            title: '198CM RICHAG BOSIMI',
            value: '+25.0%',
            delta: 'τ = F·r',
            deltaLabel: 'oddiy bo‘yga nisbatan',
            note: 'Scapular qulflash majburiy',
            icon: Zap
          },
          {
            title: 'ASIMMETRIYA KOEFFITSIENTI',
            value: '1 : 20',
            delta: 'Maximal',
            deltaLabel: 'Cost-Exchange nisbati',
            note: 'Schwerpunkt markaziga zarba',
            icon: Swords
          },
        ].map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="p-4 rounded-xl bg-dark-900 border border-subtle hover:border-dark-700 transition-all">
              <div className="flex items-center justify-between text-titanium-400">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider">{kpi.title}</span>
                <Icon size={16} className="text-titanium-500" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-mono font-black text-white">{kpi.value}</span>
                <span className="inline-flex items-center text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-dark-800 text-tactic-emerald border border-subtle">
                  <TrendingUp size={10} className="mr-0.5" />
                  {kpi.delta}
                </span>
              </div>
              <p className="text-[11px] text-titanium-400 mt-2 font-mono">{kpi.note}</p>
            </div>
          );
        })}
      </div>

      {/* 3. CENTRAL SECTION: 2X BENCHMARK PROGRESS TABLE + TODAY'S PROTOCOL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 2X Benchmark Progress Table (7 Cols) */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-dark-900 border border-subtle space-y-4">
          <div className="flex items-center justify-between border-b border-subtle pb-3">
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                2X Elita Konditsiya Matritsasi
              </h2>
              <p className="text-xs text-titanium-400 mt-0.5">
                198 sm bo‘y kinetikasiga moslangan 6 ta elita jismoniy standartlar
              </p>
            </div>
            <Link to="/protocol" className="text-xs font-mono text-titanium-300 hover:text-white inline-flex items-center gap-1">
              To‘liq protokol <ChevronRight size={14} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-subtle text-titanium-400 font-mono text-[11px]">
                  <th className="pb-2 font-semibold">Mashq & Standart</th>
                  <th className="pb-2 font-semibold text-center">Joriy / Maqsad</th>
                  <th className="pb-2 font-semibold text-right">Holat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle-light">
                {USER_PROFILE_CONSTANTS.benchmarks2x.map((bm, i) => (
                  <tr key={i} className="hover:bg-dark-850 transition-colors">
                    <td className="py-2.5 font-medium text-white">{bm.name}</td>
                    <td className="py-2.5 text-center font-mono text-titanium-300">
                      {bm.current} <span className="text-titanium-500">/</span> {bm.target} {bm.unit}
                    </td>
                    <td className="py-2.5 text-right font-mono text-[11px] text-titanium-400">
                      {bm.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-lg bg-dark-950 border border-subtle text-[11px] text-titanium-400 font-mono flex items-center justify-between">
            <span>Biomexanik koeffitsient: 204 sm wingspan inobatga olingan</span>
            <span className="text-white font-bold">Overcoming Gravity</span>
          </div>
        </div>

        {/* Right: Today's Actionable Operational Plan (5 Cols) */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-dark-900 border border-subtle flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-subtle pb-3">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Bugungi Taktik Reja ({currentDayProtocol.dayNameUz})
                </h2>
                <p className="text-xs text-titanium-400 mt-0.5">{currentDayProtocol.focusTitle}</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-800 text-tactic-emerald border border-subtle">
                FAOL
              </span>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-dark-950 border border-subtle">
                <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">Asosiy Mashg‘ulot (75 min)</span>
                <p className="font-semibold text-white mt-1">{currentDayProtocol.mainSession.type}</p>
                <p className="text-titanium-400 text-[11px] mt-1 leading-relaxed">
                  {currentDayProtocol.mainSession.biomechanicsNote198cm}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-dark-950 border border-subtle">
                <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">Kognitiv Trenajor</span>
                <p className="font-semibold text-white mt-1">{currentDayProtocol.cognitiveSession.type}</p>
                <p className="text-titanium-400 text-[11px] mt-1">
                  {currentDayProtocol.cognitiveSession.protocol}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-dark-950 border border-subtle">
                <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase">Oziqlanish & Tiklanish</span>
                <p className="font-mono text-titanium-300 mt-1">
                  Kaloriya: {currentDayProtocol.nutritionAndBioRecovery.caloriesTarget} kcal | Oqsil: {currentDayProtocol.nutritionAndBioRecovery.proteinGrams}g | Suv: {currentDayProtocol.nutritionAndBioRecovery.waterLiters}L
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/protocol"
            className="w-full py-2.5 rounded-lg text-xs font-mono font-bold text-center bg-dark-800 hover:bg-dark-700 text-white border border-subtle transition-all block"
          >
            Haftalik To‘liq Rejimga O‘tish →
          </Link>
        </div>
      </div>

      {/* 4. JANG SAN’ATI & MASHQLAR VIZUAL QO‘LLANMALARI (FOTO-ILMIY QO‘LLANMA) */}
      <div className="p-5 rounded-xl bg-dark-900 border border-subtle space-y-4">
        <div className="flex items-center justify-between border-b border-subtle pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tactic-emerald" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Jang San’ati, 198cm Richag & Mashqlar Vizual Qo‘llanmasi
              </h2>
            </div>
            <p className="text-xs text-titanium-400 mt-0.5">
              Pull-up L-sit, Semi-Sumo Deadlift, Parallel Dips, 35kg Rucking, Left of Bang Teep Kick va Grossman HUD
            </p>
          </div>
          <Link to="/visual-guides" className="text-xs font-mono text-white hover:text-titanium-200 inline-flex items-center gap-1 font-bold">
            Barcha 6 ta Fotoni Ko‘rish <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: '198cm L-Sit Pull-up',
              sub: 'Scapular Depression & T=120Nm',
              img: '/guides/pullup_technique.jpg',
              badge: 'Steven Low'
            },
            {
              title: 'Long-Femur Semi-Sumo Deadlift',
              sub: '110° Hip Angle & Boldir qulfi',
              img: '/guides/deadlift_technique.jpg',
              badge: 'Mark Rippetoe'
            },
            {
              title: 'Brusda 45° Torso Lean (Dips)',
              sub: 'Yelka bo‘g‘imi kapsulasi himoyasi',
              img: '/guides/dips_technique.jpg',
              badge: 'Sommer SAS'
            },
            {
              title: '198cm Elita Harbiy Marsh (35kg)',
              sub: '1.0m Qadam & Zone 2 (135 bpm)',
              img: '/guides/rucking_technique.jpg',
              badge: 'Tactical Barbell'
            },
            {
              title: 'Left of Bang & Push Teep',
              sub: '204cm Quloch & Masofani saqlash',
              img: '/guides/combat_stance_technique.jpg',
              badge: 'Van Horne'
            },
            {
              title: 'Grossman Taktik Puls & Box Breathing',
              sub: '115-145 BPM Optimal & 4-4-4-4 HUD',
              img: '/guides/box_breathing_hud.jpg',
              badge: 'Dave Grossman'
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to="/visual-guides"
              className="rounded-lg bg-dark-950 border border-subtle hover:border-dark-700 overflow-hidden group transition-all block"
            >
              <div className="relative aspect-video bg-dark-950 overflow-hidden border-b border-subtle-light">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-dark-950/80 border border-subtle text-white backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-white group-hover:text-titanium-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] text-titanium-400 font-mono mt-0.5">
                  {item.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4. 13 TA ASAR ENSIKLOPEDIYASI TEZKOR RO‘YXATI */}
      <div className="p-5 rounded-xl bg-dark-900 border border-subtle space-y-4">
        <div className="flex items-center justify-between border-b border-subtle pb-3">
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              13 Fundamental Asar & Doktrinalar Boshqaruvi
            </h2>
            <p className="text-xs text-titanium-400 mt-0.5">
              Sun Tzu, Klauzevits, Steven Low, Grossman, Boyd, Goggins va boshqa manbalarning to‘liq tahlili
            </p>
          </div>
          <Link to="/encyclopedia" className="text-xs font-mono text-titanium-300 hover:text-white inline-flex items-center gap-1">
            Barchasini ko‘rish <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TACTICAL_ENCYCLOPEDIA.slice(0, 6).map((book) => (
            <Link
              key={book.id}
              to="/encyclopedia"
              className="p-3.5 rounded-lg bg-dark-950 border border-subtle hover:border-dark-700 transition-all block group"
            >
              <div className="flex items-center justify-between text-titanium-500 text-[10px] font-mono">
                <span>#{book.number} • {book.categoryUz}</span>
                <ArrowUpRight size={12} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-sm font-bold text-white mt-1 group-hover:text-titanium-200 transition-colors">
                {book.titleUz}
              </h3>
              <p className="text-xs text-titanium-400 mt-0.5">{book.author}</p>
              <p className="text-[11px] text-titanium-500 mt-2 line-clamp-2 leading-relaxed">
                {book.coreDoctrine}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

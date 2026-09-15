import React, { useState, useEffect } from 'react';
import { Shield, Heart, Activity, Play, Pause, RotateCcw } from 'lucide-react';
import { getGrossmanHeartRateZone } from '../data/formulas';

export default function SitTrainer() {
  const [bpm, setBpm] = useState<number>(135);
  const [boxActive, setBoxActive] = useState<boolean>(false);
  const [boxPhase, setBoxPhase] = useState<'Inhale' | 'Hold1' | 'Exhale' | 'Hold2'>('Inhale');
  const [phaseSeconds, setPhaseSeconds] = useState<number>(4);

  const zone = getGrossmanHeartRateZone(bpm);

  useEffect(() => {
    let interval: any;
    if (boxActive) {
      interval = setInterval(() => {
        setPhaseSeconds((prev) => {
          if (prev <= 1) {
            setBoxPhase((curr) => {
              if (curr === 'Inhale') return 'Hold1';
              if (curr === 'Hold1') return 'Exhale';
              if (curr === 'Exhale') return 'Hold2';
              return 'Inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setPhaseSeconds(4);
      setBoxPhase('Inhale');
    }
    return () => clearInterval(interval);
  }, [boxActive]);

  const phaseNamesUz = {
    Inhale: 'Nafas Oling (Burun orqali chuqur)',
    Hold1: 'Nafasni Qulflang (Ichkarida ushlang)',
    Exhale: 'Nafasni Chiqaring (Og‘izdan sekin)',
    Hold2: 'Bo‘sh O‘pka (Kuting)'
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
          Jangovar Fiziologiya & Psixologiya
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          SIT (Stress Inoculation Training) & Taktik Puls Spektri
        </h1>
        <p className="text-sm text-titanium-400 max-w-3xl leading-relaxed">
          Deyv Grossman («On Combat») doktrinasi: stress ostida yurak urish tezligi oshganda 
          ongning falajlanishini to‘xtatish va Taktik Quti Nafasi (Box Breathing 4-4-4-4) yordamida 
          simpatik bo‘ronni jilovlash trenajori.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Grossman Heart Rate Zone Simulator (6 Cols) */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-dark-900 border border-subtle space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Heart size={16} className="text-tactic-crimson" />
              Puls Spektri Simulyatori
            </h2>
            <span className="font-mono text-xl font-bold text-white">{bpm} BPM</span>
          </div>

          <div className="space-y-2">
            <input
              type="range"
              min="60"
              max="195"
              step="1"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="w-full accent-white bg-dark-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-titanium-500">
              <span>60 (Oq)</span>
              <span>115 (Yashil Boshlanishi)</span>
              <span>145 (Qizil Chegara)</span>
              <span>175+ (Qora Falaj)</span>
            </div>
          </div>

          {/* Real-time Zone Card */}
          <div className="p-4 rounded-lg bg-dark-950 border border-subtle space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase" style={{ color: zone.zoneColor }}>
                {zone.zoneName}
              </span>
            </div>
            <div className="text-xs space-y-1.5 text-titanium-300">
              <p>• <strong>Kognitiv Holat:</strong> {zone.cognitiveState}</p>
              <p>• <strong>Motorika:</strong> {zone.motorSkills}</p>
              <p>• <strong>Taktik Harakat:</strong> <span className="text-white">{zone.recommendedAction}</span></p>
            </div>
          </div>
        </div>

        {/* Right: Tactical Box Breathing Pacer (6 Cols) */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-dark-900 border border-subtle flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-subtle pb-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Activity size={16} className="text-tactic-emerald" />
                Navy SEAL Taktik Quti Nafasi (4-4-4-4)
              </h2>
              <span className="text-xs font-mono text-titanium-400">Parasimpatik Kalit</span>
            </div>

            {/* Visual Box Timer */}
            <div className="mt-6 flex flex-col items-center justify-center p-6 rounded-lg bg-dark-950 border border-subtle text-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex flex-col items-center justify-center relative">
                <span className="text-3xl font-mono font-black text-white">{phaseSeconds}</span>
                <span className="text-[10px] font-mono text-titanium-500">SEKUND</span>
              </div>

              <p className="text-sm font-bold text-white mt-4 font-mono">
                {phaseNamesUz[boxPhase]}
              </p>
              <p className="text-[11px] text-titanium-400 mt-1">
                {boxActive ? 'Nafasni qat’iy 4 soniya ritmida ushlang' : 'Boshlash tugmasini bosing'}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setBoxActive(!boxActive)}
              className="flex-1 py-2.5 rounded-lg text-xs font-mono font-bold bg-white text-dark-950 hover:bg-titanium-200 transition-all flex items-center justify-center gap-2"
            >
              {boxActive ? <Pause size={14} /> : <Play size={14} />}
              {boxActive ? 'To‘xtatish' : 'Mashqni Boshlash (90 sek)'}
            </button>
            <button
              onClick={() => {
                setBoxActive(false);
                setBoxPhase('Inhale');
                setPhaseSeconds(4);
              }}
              className="px-4 py-2.5 rounded-lg text-xs font-mono bg-dark-800 text-titanium-300 hover:text-white border border-subtle transition-all"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

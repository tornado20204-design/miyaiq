import React, { useState, useEffect, useRef } from 'react';
import { Brain, Play, RotateCcw, Volume2, Eye } from 'lucide-react';

const TONES = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]; // C4 to C5 notes

export default function DualNBack() {
  const [nLevel, setNLevel] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeCell, setActiveCell] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [history, setHistory] = useState<{ pos: number; toneIndex: number }[]>([]);

  // Scoring
  const [visualHits, setVisualHits] = useState<number>(0);
  const [audioHits, setAudioHits] = useState<number>(0);
  const [totalTrials, setTotalTrials] = useState<number>(20);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTone = (freq: number) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      console.error(e);
    }
  };

  // Trial Loop
  useEffect(() => {
    let timer: any;
    if (isPlaying && currentStep < totalTrials) {
      timer = setTimeout(() => {
        const nextPos = Math.floor(Math.random() * 9);
        const nextTone = Math.floor(Math.random() * TONES.length);

        setActiveCell(nextPos);
        playTone(TONES[nextTone]);

        setHistory((prev) => [...prev, { pos: nextPos, toneIndex: nextTone }]);
        setCurrentStep((prev) => prev + 1);

        // Clear active cell highlight after 600ms
        setTimeout(() => setActiveCell(null), 700);
      }, 2500);
    } else if (currentStep >= totalTrials && isPlaying) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, totalTrials]);

  const handleVisualResponse = () => {
    if (history.length <= nLevel) return;
    const current = history[history.length - 1];
    const target = history[history.length - 1 - nLevel];
    if (current && target && current.pos === target.pos) {
      setVisualHits((h) => h + 1);
    }
  };

  const handleAudioResponse = () => {
    if (history.length <= nLevel) return;
    const current = history[history.length - 1];
    const target = history[history.length - 1 - nLevel];
    if (current && target && current.toneIndex === target.toneIndex) {
      setAudioHits((h) => h + 1);
    }
  };

  const startSession = () => {
    setHistory([]);
    setCurrentStep(0);
    setVisualHits(0);
    setAudioHits(0);
    setIsPlaying(true);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
          Ilmiy Kognitiv Trenajor
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Dual N-Back: Suyuq Intellekt (Gf) & Ishchi Xotira
        </h1>
        <p className="text-sm text-titanium-400 max-w-3xl leading-relaxed">
          Parietal va prefrontal korteks sinapslarini qayta dasturlovchi ilmiy isbotlangan usul. 
          Bir vaqtda visual pozitsiya va audio chastotani <span className="text-white font-mono">{nLevel} qadam</span> orqada saqlang.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 3x3 Grid (7 Cols) */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-dark-900 border border-subtle flex flex-col items-center justify-center space-y-6">
          <div className="grid grid-cols-3 gap-3 w-full max-w-[320px] aspect-square">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
              const isActive = activeCell === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-150 flex items-center justify-center ${
                    isActive
                      ? 'bg-white border-white shadow-[0_0_25px_rgba(255,255,255,0.6)] scale-95'
                      : 'bg-dark-950 border-subtle'
                  }`}
                />
              );
            })}
          </div>

          {/* Response Buttons */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
            <button
              onClick={handleVisualResponse}
              disabled={!isPlaying}
              className="py-3 px-4 rounded-lg bg-dark-950 border border-subtle hover:border-dark-700 text-xs font-mono font-bold text-white flex items-center justify-center gap-2 active:scale-95 disabled:opacity-40 transition-all"
            >
              <Eye size={16} />
              Vizual Moslik (A)
            </button>
            <button
              onClick={handleAudioResponse}
              disabled={!isPlaying}
              className="py-3 px-4 rounded-lg bg-dark-950 border border-subtle hover:border-dark-700 text-xs font-mono font-bold text-white flex items-center justify-center gap-2 active:scale-95 disabled:opacity-40 transition-all"
            >
              <Volume2 size={16} />
              Audio Moslik (L)
            </button>
          </div>
        </div>

        {/* Right: Controls & Stats (5 Cols) */}
        <div className="lg:col-span-5 p-6 rounded-xl bg-dark-900 border border-subtle flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Daraja & Telemetriya
            </h2>

            {/* N-Level Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-titanium-400">N-Darajasi:</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    disabled={isPlaying}
                    onClick={() => setNLevel(lvl)}
                    className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                      nLevel === lvl
                        ? 'bg-white text-dark-950 shadow-sm'
                        : 'bg-dark-950 text-titanium-400 border border-subtle hover:text-white'
                    }`}
                  >
                    N={lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress & Hits */}
            <div className="p-4 rounded-lg bg-dark-950 border border-subtle space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-titanium-400">Sinov Qadami:</span>
                <span className="text-white font-bold">{currentStep} / {totalTrials}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-titanium-400">Vizual Aniq Ulanishlar:</span>
                <span className="text-tactic-emerald font-bold">{visualHits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-titanium-400">Audio Aniq Ulanishlar:</span>
                <span className="text-tactic-emerald font-bold">{audioHits}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {!isPlaying ? (
              <button
                onClick={startSession}
                className="w-full py-3 rounded-lg text-xs font-mono font-bold bg-white text-dark-950 hover:bg-titanium-200 transition-all flex items-center justify-center gap-2"
              >
                <Play size={14} />
                Trenajorni Boshlash (20 Qadam)
              </button>
            ) : (
              <button
                onClick={() => setIsPlaying(false)}
                className="w-full py-3 rounded-lg text-xs font-mono font-bold bg-dark-800 text-white border border-subtle transition-all"
              >
                To‘xtatish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

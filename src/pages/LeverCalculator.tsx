import React, { useState } from 'react';
import { Compass, Zap, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { calculateLeverTorque } from '../data/formulas';

export default function LeverCalculator() {
  const [weightKg, setWeightKg] = useState<number>(79.6);
  const [limbLengthCm, setLimbLengthCm] = useState<number>(82); // 198cm arm length approx
  const [angleDeg, setAngleDeg] = useState<number>(90);

  const forceNewtons = weightKg * 9.81;
  const limbLengthMeters = limbLengthCm / 100;
  const result = calculateLeverTorque(forceNewtons, limbLengthMeters, angleDeg);

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-2">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
          Biomexanika & Fizika
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          198 sm Suyak Richagi & Aylanma Moment (Torque) Hisoblagichi
        </h1>
        <p className="text-sm text-titanium-400 max-w-3xl leading-relaxed">
          Steven Low («Overcoming Gravity») va Mark Rippetoe («Starting Strength») tamoyillari asosida: 
          198 sm bo‘yda suyak richagi uzun bo‘lgani uchun bo‘g‘imlarga tushadigan yuklamani matematik hisoblash 
          va uni zaiflikdan asimmetrik kinetik qurolga aylantirish qoidalari.
        </p>
      </div>

      {/* Interactive Calculator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Input Sliders (6 Cols) */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-dark-900 border border-subtle space-y-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Parametrlarni O‘zgartirish
          </h2>

          {/* Slider 1: Vazn */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-titanium-400">Ko‘tarilayotgan Og‘irlik (Vazn):</span>
              <span className="text-white font-bold">{weightKg} kg ({Math.round(forceNewtons)} N)</span>
            </div>
            <input
              type="range"
              min="50"
              max="220"
              step="1"
              value={weightKg}
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-white bg-dark-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2: Qo‘l / Oyoq Suyagi Uzunligi */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-titanium-400">Suyak Richagi Uzunligi (r):</span>
              <span className="text-white font-bold">{limbLengthCm} sm ({limbLengthMeters} m)</span>
            </div>
            <input
              type="range"
              min="60"
              max="110"
              step="1"
              value={limbLengthCm}
              onChange={(e) => setLimbLengthCm(Number(e.target.value))}
              className="w-full accent-white bg-dark-800 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-titanium-500 font-mono">
              *198 sm bo‘yda o‘rtacha qo‘l uzunligi: 82 sm, oyoq uzunligi: 104 sm
            </p>
          </div>

          {/* Slider 3: Harakat Burchagi */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-titanium-400">Burchak (θ):</span>
              <span className="text-white font-bold">{angleDeg}°</span>
            </div>
            <input
              type="range"
              min="15"
              max="90"
              step="5"
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full accent-white bg-dark-800 h-2 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-titanium-500 font-mono">
              *90° da richag momenti maksimal bo‘ladi (sin(90°) = 1.0)
            </p>
          </div>

          <div className="p-3 rounded-lg bg-dark-950 border border-subtle text-xs font-mono text-titanium-400">
            Formula: <span className="text-white font-bold">τ = F × r × sin(θ)</span> = {Math.round(forceNewtons)}N × {limbLengthMeters}m × {Math.sin((angleDeg * Math.PI) / 180).toFixed(2)}
          </div>
        </div>

        {/* Right: Calculated Biomechanical Results (6 Cols) */}
        <div className="lg:col-span-6 p-6 rounded-xl bg-dark-900 border border-subtle flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase tracking-wider">
              Natijaviy Tahlil
            </span>
            <div className="mt-3 p-4 rounded-lg bg-dark-950 border border-subtle space-y-2">
              <span className="text-xs font-mono text-titanium-400">Bo‘g‘imga Tushadigan Aylanma Moment (Torque):</span>
              <p className="text-4xl font-mono font-black text-white">
                {result.torqueNm} <span className="text-lg text-titanium-500">N·m</span>
              </p>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-dark-950 border border-subtle space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-titanium-400">175 sm odamga nisbatan farq:</span>
                <span className="text-tactic-amber font-bold font-mono">+{result.comparisonTo175cm}% Qo‘shimcha Moment</span>
              </div>
              <p className="text-xs text-titanium-300 leading-relaxed">
                Sizning yelka yoki umurtqa bo‘g‘imingiz oddiy bo‘yli kishiga qaraganda 
                <strong className="text-white"> {result.comparisonTo175cm}% ko‘proq</strong> yuklamaga bardosh berishi talab etiladi.
              </p>
            </div>
          </div>

          {/* Biomechanical Solution Box */}
          <div className="p-4 rounded-lg bg-dark-950 border border-subtle space-y-2">
            <span className="text-[10px] font-mono font-bold text-tactic-emerald uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 size={14} />
              198 sm Uchun Neytrallash Qonuniyatlari
            </span>
            <ul className="text-xs text-titanium-300 space-y-1.5">
              <li>• <strong>Turnikda:</strong> Scapula qulflanishi moment qo‘lini 15% qisqartiradi.</li>
              <li>• <strong>Deadliftda:</strong> Semi-sumo oyoq pozitsiyasi shtangani mid-footga yaqinlashtiradi.</li>
              <li>• <strong>Brusda:</strong> Gavdani 45° oldinga egish yelka bo‘g‘imi kapsulasini saqlaydi.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

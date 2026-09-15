import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Clock,
  Dumbbell,
  Brain,
  Coffee,
  Moon,
  ChevronRight,
  ShieldCheck,
  Check,
  Eye,
  Maximize2,
  X,
  AlertTriangle,
  Zap,
  Target,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Flame,
  Activity,
  ArrowRight,
  Shield,
  Award,
  ChevronLeft
} from 'lucide-react';
import { WEEKLY_ACTIONABLE_PROTOCOL, USER_PROFILE_CONSTANTS } from '../data/protocol198cm';

const DAY_VISUAL_MAP: { [key: number]: {
  image: string;
  title: string;
  badge: string;
  biomechanicRule: string;
  keyAngles: string;
  tempo: string;
} } = {
  0: { // Monday: Pull-ups
    image: '/guides/pullup_technique.jpg',
    title: '198 sm L-Sit Pull-up & Scapular Depression Texnikasi',
    badge: 'Steven Low • Overcoming Gravity',
    biomechanicRule: '204 sm wingspan richagida yelka va tirsakka tushadigan T=120 N·m burovchi kuchni so‘ndirish uchun birinchi navbatda kuraklar pastga qulflanadi (Scapular depression), so‘ngra 90° tirsak burchagi bilan vertikal ko‘tarilish.',
    keyAngles: 'Tirsak: 90° | Torso-Oyoq: 90° L-Sit | Torque: 120 N·m',
    tempo: '3-0-1-0 (3s sekin tushish, 1s portlovchi ko‘tarilish)'
  },
  1: { // Tuesday: Deadlift
    image: '/guides/deadlift_technique.jpg',
    title: '198 sm Long-Femur Semi-Sumo Deadlift Texnikasi',
    badge: 'Mark Rippetoe • Starting Strength',
    biomechanicRule: 'Uzun son suyagida an’anaviy o‘tirish umurtqaga og‘ir moment qo‘li beradi. Semi-sumo pozitsiyasi va baland chanoq (high hip) orqali shtanga boldir terisiga yopishtiriladi va 1850 N kuch polni itarish bilan hosil qilinadi.',
    keyAngles: 'Chanoq: 110° | Tizza: 135° | Shtanga chizig‘i: Mid-foot',
    tempo: '2-1-X-0 (Shtangani polga urmasdan, portlovchi ko‘tarish)'
  },
  2: { // Wednesday: Combat / SIT
    image: '/guides/combat_stance_technique.jpg',
    title: 'Left of Bang & Push Teep Bilan Masofa Nazorati',
    badge: 'Van Horne & Riley • Left of Bang',
    biomechanicRule: '204 sm quloch yordamida dushmanga 1.5–2 metr masofadan yetib borish. Xavf BANG oniga yetmasdan oldin chanoq (hip drive) orqali to‘xtatuvchi push teep zarbasi beriladi va 360° xavf skaneri saqlanadi.',
    keyAngles: 'Quloch: 204 sm | Chanoq: Hip Drive | Skaner: 360° Radar',
    tempo: 'Maksimal tezlik (Reaction Time < 0.3s)'
  },
  3: { // Thursday: Rucking
    image: '/guides/rucking_technique.jpg',
    title: '198 sm Operator 35kg Harbiy Rucking Kinematikasi',
    badge: 'K. Black • Tactical Barbell',
    biomechanicRule: '198 sm bo‘yda uzun qadam (1.0m) hisobiga energiya tejaladi. 35 kg ryukzak kuraklar orasiga yuqori joylashtiriladi, yukning 70% ini tos kamari qabul qiladi, puls qat’iy Zone 2 (135 bpm) da saqlanadi.',
    keyAngles: 'Qadam: 0.95–1.05m | Puls: 135 bpm | Yuk: 35 kg',
    tempo: 'Sur’at: 8.5–9.0 min/km (Qat’iy qadam ritmi)'
  },
  4: { // Friday: Dips
    image: '/guides/dips_technique.jpg',
    title: 'Brusda 45° Gavda Og‘ishi & Yelka Zirhi (Parallel Bar Dips)',
    badge: 'Christopher Sommer • Gymnastic Body',
    biomechanicRule: 'Uzun qo‘llarda tik tushish yelka old kapsulasiga burovchi shikast yetkazadi. 45° gavda og‘ishi yuklamani pectoralis major (ko‘krak) va tricepsga to‘g‘ri taqsimlaydi va anterior deltoidni qulflaydi.',
    keyAngles: 'Gavda og‘ishi: 45° | Tirsak: 90° past | Scapular qulf',
    tempo: '3-1-1-0 (3s nazoratli tushish, 1s pastda to‘xtash)'
  },
  5: { // Saturday: Grossman HR & 3km
    image: '/guides/box_breathing_hud.jpg',
    title: 'Dave Grossman Taktik Puls Zonalari & Box Breathing HUD',
    badge: 'Lt. Col. Dave Grossman • On Combat',
    biomechanicRule: '3 km yugurish va maksimal otjimaniyada puls 160+ BPM ga chiqqanda, Vagus nervi stimulyatsiyasi orqali Taktik Quti Nafasi (4-4-4-4) 90 soniyada pulsni 125 BPM yashil optimal zonaga qaytaradi.',
    keyAngles: 'Optimal: 115–145 BPM | Box: 4-4-4-4 sek | Vagus qulfi',
    tempo: '1-km: 3:10, 2-km: 3:05, 3-km: 2:50 (Splits)'
  },
  6: { // Sunday: Stoic Recovery
    image: '/guides/stoic_guide.jpg',
    title: 'Mark Avreliy Stoik Nazorat Doirasi & Glimfatik Tiklanish',
    badge: 'Marcus Aurelius • Meditations',
    biomechanicRule: '198 sm tana gravitatsion dekompressiyasi: turnikda bo‘sh osilish orqali umurtqalararo masofani kengaytirish va 19°C qorong‘i xonada 8.5 soat uyqu orqali miyani beta-amiloid oqsillaridan tozalash.',
    keyAngles: 'Umurtqa dekompressiyasi: 5×60 sek | Harorat: 19°C',
    tempo: 'Sekin diafragma nafasi'
  }
};

const WARMUP_SEQUENCE = [
  { id: 'w1', name: 'Scapular Band Pull-Aparts', duration: '15 takror', note: 'Kuraklarni qisish va orqa deltoidni uyg‘otish' },
  { id: 'w2', name: 'Rotator Cuff 90/90 Tashqi Aylanish', duration: '12 takror', note: '204 sm wingspanda yelka bo‘g‘imi kapsulasini moylash' },
  { id: 'w3', name: '90/90 Chanoq Bo‘g‘imi Mobilizatsiyasi', duration: '10 takror/oyoq', note: 'Uzun son suyagida chanoq qisilishini ochish' },
  { id: 'w4', name: 'Gravitatsion Osilish (Dead Hang)', duration: '45 soniya', note: 'Umurtqa pog‘onasini gravitatsiyadan dekompressiya qilish' }
];

export default function Protocol() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Live Workout Mode States
  const [isWorkoutMode, setIsWorkoutMode] = useState<boolean>(false);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState<number>(0);
  const [restSecondsLeft, setRestSecondsLeft] = useState<number>(0);
  const [isRestTimerActive, setIsRestTimerActive] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [warmupDone, setWarmupDone] = useState<{ [key: string]: boolean }>({});

  // Interactive Tempo Metronome (3-0-1-0 or 3-1-1-1 Cadence Pacer)
  const [isMetronomeActive, setIsMetronomeActive] = useState<boolean>(false);
  const [metronomeStep, setMetronomeStep] = useState<number>(0); // 0,1,2: Eccentric, 3: Pause, 4: Concentric explosion, 5: Lockout
  const [metronomeReps, setMetronomeReps] = useState<number>(0);

  // Live Form Checklist State
  const [checkedFormItems, setCheckedFormItems] = useState<{ [key: string]: boolean }>({});

  // Workout Session Duration & History
  const [sessionSeconds, setSessionSeconds] = useState<number>(0);
  const [savedNotification, setSavedNotification] = useState<string | null>(null);

  interface WorkoutLog {
    id: string;
    date: string;
    dayName: string;
    focus: string;
    tonnage: number;
    setsCompleted: number;
    durationMinutes: number;
  }

  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>(() => {
    try {
      const saved = localStorage.getItem('miyaiq_workout_logs');
      return saved ? JSON.parse(saved) : [
        {
          id: 'log-1',
          date: '14-sentabr, 18:30',
          dayName: 'Dushanba',
          focus: '198cm Richag Kinetikasi: L-Sit Pull-ups',
          tonnage: 2840,
          setsCompleted: 18,
          durationMinutes: 72
        },
        {
          id: 'log-2',
          date: '12-sentabr, 17:45',
          dayName: 'Shanba',
          focus: '3 km Taktik Yugurish & 110 Otjimaniya',
          tonnage: 1950,
          setsCompleted: 14,
          durationMinutes: 58
        }
      ];
    } catch {
      return [];
    }
  });

  // Set-by-Set Tracker data
  const [completedSets, setCompletedSets] = useState<{ [key: string]: boolean }>({});
  const [loggedValues, setLoggedValues] = useState<{ [key: string]: { weight: string; reps: string; rpe: string } }>({});

  const audioCtxRef = useRef<AudioContext | null>(null);

  const currentDay = WEEKLY_ACTIONABLE_PROTOCOL[activeDayIndex];
  const dayVisual = DAY_VISUAL_MAP[activeDayIndex] || DAY_VISUAL_MAP[0];
  const currentExercise = currentDay.mainSession.exercises[activeExerciseIndex] || currentDay.mainSession.exercises[0];

  // Sound beep synthesizer
  const playBeep = (freq: number, duration: number = 0.15) => {
    if (!soundEnabled) return;
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
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.error(e);
    }
  };

  // Workout Session Stopwatch (counts while in workout mode)
  useEffect(() => {
    let interval: any;
    if (isWorkoutMode) {
      interval = setInterval(() => {
        setSessionSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWorkoutMode]);

  // Metronome Cadence Engine (3s Eccentric -> 1s Pause -> 1s Explosion -> 1s Reset)
  useEffect(() => {
    let metronomeTimer: any;
    if (isMetronomeActive) {
      metronomeTimer = setInterval(() => {
        setMetronomeStep((prevStep) => {
          const nextStep = (prevStep + 1) % 6;
          // Step 0, 1, 2: Eccentric (low beep)
          if (nextStep === 0 || nextStep === 1 || nextStep === 2) {
            playBeep(280, 0.05);
          } else if (nextStep === 3) {
            // Isometric bottom pause
            playBeep(370, 0.08);
          } else if (nextStep === 4) {
            // Concentric explosion!
            playBeep(784, 0.15);
          } else if (nextStep === 5) {
            // Lockout & Rep Complete
            playBeep(523, 0.1);
            setMetronomeReps(r => r + 1);
          }
          return nextStep;
        });
      }, 1000);
    }
    return () => clearInterval(metronomeTimer);
  }, [isMetronomeActive, soundEnabled]);

  // Rest Timer Countdown Effect
  useEffect(() => {
    let timer: any;
    if (isRestTimerActive && restSecondsLeft > 0) {
      timer = setInterval(() => {
        setRestSecondsLeft((prev) => {
          if (prev <= 4 && prev > 1) {
            playBeep(440, 0.1); // Short warning beep
          } else if (prev === 1) {
            playBeep(880, 0.35); // Final high-pitch start beep!
            setIsRestTimerActive(false);
          }
          return prev - 1;
        });
      }, 1000);
    } else if (restSecondsLeft === 0) {
      setIsRestTimerActive(false);
    }
    return () => clearInterval(timer);
  }, [isRestTimerActive, restSecondsLeft, soundEnabled]);

  const startRestTimer = (seconds: number) => {
    setRestSecondsLeft(seconds);
    setIsRestTimerActive(true);
    playBeep(520, 0.2);
  };

  const toggleSet = (exerciseIndex: number, setNum: number) => {
    const key = `${activeDayIndex}-${exerciseIndex}-${setNum}`;
    const nextState = !completedSets[key];
    setCompletedSets(prev => ({ ...prev, [key]: nextState }));

    // Automatically trigger rest timer when a set is marked done!
    if (nextState) {
      const restTime = currentDay.mainSession.exercises[exerciseIndex]?.restSec || 90;
      startRestTimer(restTime);
    }
  };

  const handleLogInput = (exerciseIndex: number, setNum: number, field: 'weight' | 'reps' | 'rpe', val: string) => {
    const key = `${activeDayIndex}-${exerciseIndex}-${setNum}`;
    setLoggedValues(prev => ({
      ...prev,
      [key]: {
        weight: prev[key]?.weight || '',
        reps: prev[key]?.reps || '',
        rpe: prev[key]?.rpe || '',
        [field]: val
      }
    }));
  };

  // Calculate Total Completed Volume in kg
  const calculateTotalTonnage = () => {
    let totalKg = 0;
    Object.keys(loggedValues).forEach((k) => {
      const w = parseFloat(loggedValues[k]?.weight) || 0;
      const r = parseInt(loggedValues[k]?.reps, 10) || 0;
      totalKg += w * r;
    });
    return Math.round(totalKg);
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const saveWorkoutSession = () => {
    const tonnage = calculateTotalTonnage();
    const completedCount = Object.values(completedSets).filter(Boolean).length;
    const durationMin = Math.max(1, Math.round(sessionSeconds / 60));

    const newLog: WorkoutLog = {
      id: `log-${Date.now()}`,
      date: new Date().toLocaleDateString('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
      dayName: currentDay.dayNameUz,
      focus: currentDay.focusTitle.split(':')[0],
      tonnage,
      setsCompleted: completedCount,
      durationMinutes: durationMin
    };

    const updated = [newLog, ...workoutLogs];
    setWorkoutLogs(updated);
    try {
      localStorage.setItem('miyaiq_workout_logs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setSavedNotification(`✅ Mashg‘ulot saqlandi! Tonnaj: ${tonnage} kg, Yondashuvlar: ${completedCount} ta (${durationMin} min).`);
    setTimeout(() => setSavedNotification(null), 6000);
  };

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Top Notification / Briefing */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-dark-900 text-titanium-300 border border-subtle">
              Operatsion Mashg‘ulot Tizimi
            </span>
            <span className="text-xs text-titanium-500 font-mono">
              Model: 198cm • Long Levers • 2X Elita
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Mashg‘ulot Sifati & Jonli Taktik Protokol
          </h1>
          <p className="text-xs text-titanium-400 max-w-2xl">
            Anatomik chizmalar, dam olish taymeri, 198 sm harakat sur’ati (tempo) va jarohatdan himoyalovchi isitish bosqichlari.
          </p>
        </div>

        {/* Start Workout Mode CTA Button */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setIsWorkoutMode(!isWorkoutMode)}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-lg ${
              isWorkoutMode
                ? 'bg-tactic-crimson text-white hover:bg-red-600'
                : 'bg-white text-dark-950 hover:bg-titanium-200'
            }`}
          >
            {isWorkoutMode ? <X size={15} /> : <Flame size={15} />}
            {isWorkoutMode ? 'Jonli Rejimni Yopish' : '🔥 Jonli Mashg‘ulotni Boshlash'}
          </button>
        </div>
      </div>

      {/* JONLI MASHG‘ULOT KOKPITI (ACTIVE WORKOUT COCKPIT WHEN ACTIVE) */}
      {isWorkoutMode && (
        <div className="p-6 rounded-2xl bg-dark-900 border-2 border-white/20 shadow-2xl space-y-6 animate-in fade-in duration-200">
          {/* Notification toast inside cockpit if saved */}
          {savedNotification && (
            <div className="p-3 rounded-lg bg-tactic-emerald/20 border border-tactic-emerald/40 text-xs font-mono text-tactic-emerald flex items-center justify-between animate-in fade-in">
              <span>{savedNotification}</span>
              <button onClick={() => setSavedNotification(null)} className="text-white hover:text-titanium-300">✕</button>
            </div>
          )}

          {/* Workout Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-subtle pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tactic-emerald animate-ping" />
                <span className="text-xs font-mono font-bold text-tactic-emerald uppercase tracking-wider">
                  JONLI MASHG‘ULOT REJIMI FAOL ({currentDay.dayNameUz})
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1">
                {currentExercise.name}
              </h2>
              <p className="text-xs text-titanium-400 font-mono">
                Standart: {currentExercise.setsReps} | Dam olish: {currentExercise.restSec} sek | Maqsad: {currentExercise.targetRpe}
              </p>
            </div>

            {/* Live Metrics: Stopwatch & Rest Timer & Save Session CTA */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Session Stopwatch */}
              <div className="bg-dark-950 border border-subtle px-3.5 py-2 rounded-xl text-center">
                <span className="text-[10px] font-mono text-titanium-500 uppercase block">Mashg‘ulot Vaqti</span>
                <span className="text-lg font-mono font-black text-white">
                  ⏱ {formatSeconds(sessionSeconds)}
                </span>
              </div>

              {/* Rest Timer Visual HUD */}
              <div className="flex items-center gap-3 bg-dark-950 border border-subtle px-3.5 py-2 rounded-xl">
                <div className="text-center">
                  <span className="text-[10px] font-mono text-titanium-500 uppercase block">Dam Olish</span>
                  <span className={`text-lg font-mono font-black ${
                    restSecondsLeft > 0 ? 'text-tactic-amber' : 'text-titanium-500'
                  }`}>
                    {restSecondsLeft > 0 ? `${restSecondsLeft}s` : '00s'}
                  </span>
                </div>

                <div className="flex items-center gap-1 border-l border-subtle pl-2.5">
                  <button
                    onClick={() => startRestTimer(currentExercise.restSec || 90)}
                    className="p-1.5 rounded bg-dark-800 hover:bg-dark-700 text-white text-xs font-mono"
                    title="Taymerni ishga tushirish"
                  >
                    <Play size={13} />
                  </button>
                  <button
                    onClick={() => {
                      setIsRestTimerActive(false);
                      setRestSecondsLeft(0);
                    }}
                    className="p-1.5 rounded bg-dark-800 hover:bg-dark-700 text-titanium-400 text-xs font-mono"
                    title="Nollash"
                  >
                    <RotateCcw size={13} />
                  </button>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded bg-dark-800 hover:bg-dark-700 text-titanium-400 text-xs font-mono"
                    title="Tovushni yoqish/o‘chirish"
                  >
                    {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
                  </button>
                </div>
              </div>

              {/* Save & Finish Workout Button */}
              <button
                onClick={saveWorkoutSession}
                className="px-3.5 py-2.5 rounded-xl bg-tactic-emerald hover:bg-emerald-600 text-dark-950 font-bold text-xs font-mono flex items-center gap-1.5 transition-all shadow-md"
                title="Bajarilgan mashg‘ulotni qaydnomaga saqlash"
              >
                <Check size={14} /> Saqlash
              </button>
            </div>
          </div>

          {/* Exercise Step Cockpit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Technique Photo, Cadence Metronome, Form Checklist, Mistakes (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video bg-dark-950 rounded-xl overflow-hidden border border-subtle">
                <img
                  src={dayVisual.image}
                  alt={currentExercise.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-dark-950/90 text-xs font-mono font-bold text-white border border-subtle">
                  {dayVisual.badge}
                </div>
                <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded bg-dark-950/90 border border-subtle text-[11px] font-mono text-titanium-200">
                  <span className="text-tactic-amber font-bold">198 sm Qoida:</span> {currentExercise.technicalCue}
                </div>
              </div>

              {/* INTERACTIVE CADENCE / TEMPO METRONOME (3-0-1-0 or 3-1-1-1) */}
              <div className="p-4 rounded-xl bg-dark-950 border border-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity size={15} className={isMetronomeActive ? 'text-tactic-emerald animate-pulse' : 'text-titanium-500'} />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      198 sm Sur’at Metronomi (Kadans: 3-0-1-0)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-dark-900 border border-subtle text-[11px] font-mono font-bold text-tactic-amber">
                      Takror: {metronomeReps} ta
                    </span>
                    <button
                      onClick={() => setMetronomeReps(0)}
                      className="p-1 rounded bg-dark-900 text-titanium-500 hover:text-white text-[10px]"
                      title="Takrorlarni nollash"
                    >
                      <RotateCcw size={11} />
                    </button>
                  </div>
                </div>

                {/* Metronome Active Phase Display */}
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono">
                  <div className={`p-2 rounded border transition-all ${
                    metronomeStep <= 2 && isMetronomeActive
                      ? 'bg-tactic-amber/20 border-tactic-amber text-tactic-amber font-bold shadow-sm'
                      : 'bg-dark-900 border-subtle text-titanium-500'
                  }`}>
                    <span>🔻 EKSENTRIK</span>
                    <span className="block text-xs font-black mt-0.5">
                      {isMetronomeActive && metronomeStep <= 2 ? `${3 - metronomeStep}s` : '3s'}
                    </span>
                  </div>

                  <div className={`p-2 rounded border transition-all ${
                    metronomeStep === 3 && isMetronomeActive
                      ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-bold shadow-sm'
                      : 'bg-dark-900 border-subtle text-titanium-500'
                  }`}>
                    <span>⏸ TO‘XTASH</span>
                    <span className="block text-xs font-black mt-0.5">
                      {isMetronomeActive && metronomeStep === 3 ? '1s' : '0-1s'}
                    </span>
                  </div>

                  <div className={`p-2 rounded border transition-all ${
                    metronomeStep === 4 && isMetronomeActive
                      ? 'bg-tactic-emerald/20 border-tactic-emerald text-tactic-emerald font-bold shadow-sm'
                      : 'bg-dark-900 border-subtle text-titanium-500'
                  }`}>
                    <span>⚡ PORTLASH</span>
                    <span className="block text-xs font-black mt-0.5">
                      {isMetronomeActive && metronomeStep === 4 ? '1s' : '1s'}
                    </span>
                  </div>

                  <div className={`p-2 rounded border transition-all ${
                    metronomeStep === 5 && isMetronomeActive
                      ? 'bg-white/20 border-white text-white font-bold shadow-sm'
                      : 'bg-dark-900 border-subtle text-titanium-500'
                  }`}>
                    <span>🔝 LOKAUT</span>
                    <span className="block text-xs font-black mt-0.5">
                      {isMetronomeActive && metronomeStep === 5 ? '✓' : '1s'}
                    </span>
                  </div>
                </div>

                {/* Metronome Toggle Button */}
                <div className="flex items-center justify-between pt-1">
                  <p className="text-[11px] text-titanium-400">
                    {isMetronomeActive
                      ? '🎵 Tovush va tebranish bilan birga harakatlaning'
                      : 'Uzun richagda paylarni yemirmaslik uchun sur’atni yoqing'}
                  </p>
                  <button
                    onClick={() => setIsMetronomeActive(!isMetronomeActive)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      isMetronomeActive
                        ? 'bg-tactic-crimson hover:bg-red-600 text-white'
                        : 'bg-dark-800 hover:bg-dark-700 text-white border border-subtle'
                    }`}
                  >
                    {isMetronomeActive ? <Pause size={13} /> : <Play size={13} />}
                    {isMetronomeActive ? 'To‘xtatish' : 'Metronomni Yoqish'}
                  </button>
                </div>
              </div>

              {/* 198CM BIOMECHANICAL FORM CHECKLIST FOR ACTIVE EXERCISE */}
              {currentExercise.checklist && currentExercise.checklist.length > 0 && (
                <div className="p-4 rounded-xl bg-dark-950 border border-subtle space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-tactic-emerald" />
                      198 sm Texnik Nazorat Qoidalari (Checklist)
                    </span>
                    <span className="text-[10px] font-mono text-titanium-500">Yondashuvdan oldin tekshiring</span>
                  </div>

                  <div className="space-y-1.5">
                    {currentExercise.checklist.map((item, chkIdx) => {
                      const itemKey = `${activeDayIndex}-${activeExerciseIndex}-${chkIdx}`;
                      const isChecked = checkedFormItems[itemKey];

                      return (
                        <div
                          key={chkIdx}
                          onClick={() => setCheckedFormItems(p => ({ ...p, [itemKey]: !p[itemKey] }))}
                          className={`p-2.5 rounded-lg border cursor-pointer text-xs font-mono flex items-center justify-between gap-3 transition-all ${
                            isChecked
                              ? 'bg-dark-900 border-white/40 text-white'
                              : 'bg-dark-900/60 border-subtle text-titanium-400 hover:text-white hover:border-dark-700'
                          }`}
                        >
                          <span className="leading-snug">{item}</span>
                          <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                            isChecked ? 'bg-white text-dark-950 border-white' : 'border-subtle text-transparent'
                          }`}>
                            ✓
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 198CM XATOLARIDAN SAQLANISH (COMMON MISTAKES TO AVOID) */}
              {currentExercise.mistakesToAvoid && currentExercise.mistakesToAvoid.length > 0 && (
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-tactic-crimson">
                    <AlertTriangle size={13} />
                    <span>198 sm Xavflari & Qat’iy Taqiqlar:</span>
                  </div>
                  <ul className="text-[11px] text-titanium-300 space-y-1 pl-4 list-disc font-sans">
                    {currentExercise.mistakesToAvoid.map((mistake, mIdx) => (
                      <li key={mIdx} className="leading-relaxed">{mistake}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Live Weight & Reps Logging Cockpit & RPE Guide (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider">
                    Yondashuvlarni Bajarish & Qayd Etish
                  </span>
                  <span className="text-xs font-mono text-tactic-emerald font-bold">
                    Tonna: {calculateTotalTonnage()} kg
                  </span>
                </div>

                {/* Interactive Rows for Active Exercise */}
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, sIdx) => {
                    const setNum = sIdx + 1;
                    const key = `${activeDayIndex}-${activeExerciseIndex}-${sIdx}`;
                    const isDone = completedSets[key];
                    const currentLog = loggedValues[key] || { weight: '', reps: '', rpe: '' };

                    return (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                          isDone
                            ? 'bg-dark-950 border-white/40 shadow-sm'
                            : 'bg-dark-950/60 border-subtle'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-dark-900 border border-subtle flex items-center justify-center font-mono text-xs font-bold text-white">
                            {setNum}
                          </span>
                          <span className="text-xs font-mono text-titanium-400">Yondashuv</span>
                        </div>

                        {/* Weight Input */}
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            placeholder="Vazn"
                            value={currentLog.weight}
                            onChange={(e) => handleLogInput(activeExerciseIndex, sIdx, 'weight', e.target.value)}
                            className="w-20 bg-dark-900 border border-subtle rounded px-2 py-1 text-xs font-mono text-white text-center focus:outline-none focus:border-white"
                          />
                          <span className="text-[10px] font-mono text-titanium-500">kg</span>
                        </div>

                        {/* Reps Input */}
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            placeholder="Takror"
                            value={currentLog.reps}
                            onChange={(e) => handleLogInput(activeExerciseIndex, sIdx, 'reps', e.target.value)}
                            className="w-16 bg-dark-900 border border-subtle rounded px-2 py-1 text-xs font-mono text-white text-center focus:outline-none focus:border-white"
                          />
                          <span className="text-[10px] font-mono text-titanium-500">ta</span>
                        </div>

                        {/* RPE Input */}
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            placeholder="RPE"
                            value={currentLog.rpe}
                            onChange={(e) => handleLogInput(activeExerciseIndex, sIdx, 'rpe', e.target.value)}
                            className="w-14 bg-dark-900 border border-subtle rounded px-1.5 py-1 text-xs font-mono text-white text-center focus:outline-none focus:border-white"
                          />
                        </div>

                        {/* Complete Button */}
                        <button
                          onClick={() => toggleSet(activeExerciseIndex, sIdx)}
                          className={`px-3 py-1 rounded text-xs font-mono font-bold transition-all ${
                            isDone
                              ? 'bg-white text-dark-950 shadow-sm'
                              : 'bg-dark-900 hover:bg-dark-800 text-titanium-400 border border-subtle'
                          }`}
                        >
                          {isDone ? '✓ Bajarildi' : 'Tugatish'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RPE AUTOREGULATION & CNS FATIGUE GUIDE */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-subtle space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-titanium-400">
                  <span className="font-bold text-white flex items-center gap-1">
                    <Zap size={13} className="text-tactic-amber" /> RPE Autoregulatsiya Qoidasi:
                  </span>
                  <span className="text-tactic-emerald font-bold">198 sm Standart</span>
                </div>
                <p className="text-[11px] text-titanium-300 font-sans leading-relaxed">
                  Agar RPE 9.0 dan oshsa yoki bar harakati sezilarli sekinlashsa, keyingi yondashuvda yukni 5–10% kamaytiring yoki dam olishni 180 soniyagacha uzaytiring. Mark Rippetoe qoidasi: texnika buzilgan takrorlar 2X elita standartiga hisoblanmaydi!
                </p>
              </div>

              {/* Navigation Between Exercises */}
              <div className="flex items-center justify-between pt-3 border-t border-subtle">
                <button
                  disabled={activeExerciseIndex === 0}
                  onClick={() => setActiveExerciseIndex(prev => Math.max(0, prev - 1))}
                  className="px-3 py-2 rounded-lg bg-dark-950 border border-subtle hover:bg-dark-850 disabled:opacity-40 text-xs font-mono text-white flex items-center gap-1.5"
                >
                  <ChevronLeft size={14} /> Oldingi Mashq
                </button>

                <span className="text-xs font-mono text-titanium-400">
                  {activeExerciseIndex + 1} / {currentDay.mainSession.exercises.length}
                </span>

                <button
                  disabled={activeExerciseIndex >= currentDay.mainSession.exercises.length - 1}
                  onClick={() => setActiveExerciseIndex(prev => Math.min(currentDay.mainSession.exercises.length - 1, prev + 1))}
                  className="px-3 py-2 rounded-lg bg-dark-950 border border-subtle hover:bg-dark-850 disabled:opacity-40 text-xs font-mono text-white flex items-center gap-1.5"
                >
                  Keyingi Mashq <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 198CM JAROHATDAN HIMOYA & ISITISH PROTOKOLI (WARMUP SEQUENCE) */}
      <div className="p-5 rounded-xl bg-dark-900 border border-subtle space-y-4">
        <div className="flex items-center justify-between border-b border-subtle pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-tactic-amber" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                198 sm Jarohatdan Himoya & Isitish Protokoli (7 daqiqa)
              </h2>
            </div>
            <p className="text-xs text-titanium-400 mt-0.5">
              204 sm wingspan va uzun richagda paylarni zo‘riqishdan saqlovchi majburiy pre-workout ketma-ketlik
            </p>
          </div>
          <span className="text-[10px] font-mono text-titanium-500">
            Mashg‘ulotdan oldin bajariladi
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {WARMUP_SEQUENCE.map((item) => {
            const isDone = warmupDone[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setWarmupDone(p => ({ ...p, [item.id]: !p[item.id] }))}
                className={`p-3.5 rounded-lg border cursor-pointer transition-all flex flex-col justify-between ${
                  isDone
                    ? 'bg-dark-950 border-white/30 text-white'
                    : 'bg-dark-950/70 border-subtle text-titanium-400 hover:border-dark-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white">{item.name}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] ${
                      isDone ? 'bg-white text-dark-950 font-bold border-white' : 'border-subtle text-transparent'
                    }`}>
                      ✓
                    </span>
                  </div>
                  <p className="text-[11px] text-titanium-400 mt-1 leading-relaxed">
                    {item.note}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-subtle-light text-[10px] font-mono text-tactic-amber">
                  Mezon: {item.duration}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Day Selector Tabs (Figma / Linear segmented buttons) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {WEEKLY_ACTIONABLE_PROTOCOL.map((d, idx) => {
          const isActive = activeDayIndex === idx;
          return (
            <button
              key={d.dayOfWeek}
              onClick={() => {
                setActiveDayIndex(idx);
                setActiveExerciseIndex(0);
              }}
              className={`p-3 rounded-lg text-left border transition-all ${
                isActive
                  ? 'bg-dark-800 border-white/30 text-white shadow-sm ring-1 ring-white/10'
                  : 'bg-dark-900 border-subtle text-titanium-400 hover:text-white hover:bg-dark-850'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{d.dayNameUz}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              </div>
              <p className="text-[10px] font-mono text-titanium-500 mt-1 truncate">
                {d.focusTitle.split(':')[0]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Day Full Operational Card */}
      <div className="p-6 rounded-xl bg-dark-900 border border-subtle space-y-6">
        {/* Day Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-subtle pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider">
              {currentDay.dayNameUz} • Operatsion Faza
            </span>
            <h2 className="text-xl font-bold text-white mt-1 tracking-tight">
              {currentDay.focusTitle}
            </h2>
            <p className="text-xs text-titanium-400 mt-0.5 font-mono">
              Fokus yo‘nalishi: <span className="uppercase text-white font-bold">{currentDay.targetCategory}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-titanium-300">
            <span className="px-2.5 py-1 rounded bg-dark-950 border border-subtle">
              {currentDay.nutritionAndBioRecovery.caloriesTarget} kcal
            </span>
            <span className="px-2.5 py-1 rounded bg-dark-950 border border-subtle">
              {currentDay.nutritionAndBioRecovery.proteinGrams}g Oqsil
            </span>
            <span className="px-2.5 py-1 rounded bg-dark-950 border border-subtle text-tactic-emerald">
              {currentDay.nutritionAndBioRecovery.waterLiters}L Suv
            </span>
          </div>
        </div>

        {/* 1. ANATOMIK TEXNIKA VA FOTO QO‘LLANMA */}
        <div className="rounded-xl bg-dark-950 border border-subtle overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Preview (5 Cols) */}
            <div className="lg:col-span-5 relative aspect-video lg:aspect-auto bg-black overflow-hidden border-b lg:border-b-0 lg:border-r border-subtle group">
              <img
                src={dayVisual.image}
                alt={dayVisual.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => setLightboxImage(dayVisual.image)}
                className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-dark-950/80 hover:bg-white hover:text-dark-950 text-white border border-subtle text-xs font-mono flex items-center gap-1.5 transition-all backdrop-blur-md"
              >
                <Maximize2 size={13} />
                Full HD Kattalashtirish
              </button>
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-dark-950/80 border border-subtle text-tactic-amber backdrop-blur-md">
                {dayVisual.badge}
              </span>
            </div>

            {/* Technical Rule & Angles (7 Cols) */}
            <div className="lg:col-span-7 p-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tactic-emerald" />
                  <span className="text-[10px] font-mono font-bold text-titanium-400 uppercase tracking-wider">
                    Bugungi Mashg‘ulotning Anatomik Texnika Qoidasi
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  {dayVisual.title}
                </h3>
                <p className="text-xs text-titanium-300 mt-2 leading-relaxed">
                  {dayVisual.biomechanicRule}
                </p>
              </div>

              <div className="pt-3 border-t border-subtle-light flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-dark-900 border border-subtle text-titanium-200">
                  {dayVisual.keyAngles}
                </span>
                <span className="text-xs text-tactic-amber font-mono">
                  Tempo: {dayVisual.tempo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Asosiy Jismoniy Mashg‘ulot & Mashqlar Jadvali */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-2">
              <Dumbbell size={14} />
              Mashg‘ulot Dasturi: {currentDay.mainSession.type} ({currentDay.mainSession.durationMinutes} min)
            </h3>
            <button
              onClick={() => setIsWorkoutMode(true)}
              className="text-xs font-mono text-white hover:underline flex items-center gap-1 font-bold"
            >
              Jonli rejimda bajarish →
            </button>
          </div>

          {/* Exercise Table */}
          <div className="overflow-x-auto rounded-lg border border-subtle">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-subtle bg-dark-950 text-titanium-400 font-mono text-[11px]">
                  <th className="p-3 font-semibold">Mashq & Standart</th>
                  <th className="p-3 font-semibold text-center">Yondashuv × Takror</th>
                  <th className="p-3 font-semibold text-center">Dam Olish</th>
                  <th className="p-3 font-semibold text-center">RPE</th>
                  <th className="p-3 font-semibold">198 sm Texnik Ko‘rsatma & Qulf</th>
                  <th className="p-3 font-semibold text-center">Yondashuvlarni Belgilash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle-light bg-dark-900">
                {currentDay.mainSession.exercises.map((ex, exIdx) => {
                  const setsMatch = ex.setsReps.match(/^(\d+)/);
                  const setsCount = setsMatch ? parseInt(setsMatch[1], 10) : 4;

                  return (
                    <tr key={exIdx} className="hover:bg-dark-850 transition-colors">
                      <td className="p-3 font-semibold text-white">
                        <div className="flex items-center gap-2">
                          <span>{ex.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-center font-mono text-titanium-300 font-bold">{ex.setsReps}</td>
                      <td className="p-3 text-center font-mono text-titanium-400">{ex.restSec} sek</td>
                      <td className="p-3 text-center font-mono text-tactic-emerald font-bold">{ex.targetRpe}</td>
                      <td className="p-3 text-titanium-300 text-[11px] leading-relaxed max-w-xs">{ex.technicalCue}</td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          {Array.from({ length: setsCount }).map((_, setIdx) => {
                            const isDone = completedSets[`${activeDayIndex}-${exIdx}-${setIdx}`];
                            return (
                              <button
                                key={setIdx}
                                onClick={() => toggleSet(exIdx, setIdx)}
                                title={`${setIdx + 1}-yondashuv`}
                                className={`w-6 h-6 rounded text-[10px] font-mono font-bold transition-all border ${
                                  isDone
                                    ? 'bg-white text-dark-950 border-white shadow-sm'
                                    : 'bg-dark-950 text-titanium-500 border-subtle hover:text-white hover:border-dark-700'
                                }`}
                              >
                                {isDone ? '✓' : setIdx + 1}
                              </button>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Ertalabki Rutina & Kognitiv Blok */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-dark-950 border border-subtle space-y-2">
            <h4 className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-2">
              <Coffee size={14} />
              Ertalabki Biologik Rejim (05:30 — 06:30)
            </h4>
            <div className="space-y-2 text-xs font-mono">
              {currentDay.morningRoutine.map((m, i) => (
                <div key={i} className="p-2 rounded bg-dark-900 border border-subtle-light flex items-start justify-between gap-2">
                  <div>
                    <span className="text-white font-bold">{m.action}</span>
                    <p className="text-[11px] text-titanium-400 font-sans mt-0.5">{m.details}</p>
                  </div>
                  <span className="text-titanium-500 text-[10px]">{m.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-dark-950 border border-subtle space-y-3">
            <div>
              <h4 className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-2">
                <Brain size={14} />
                Kognitiv Yuklama ({currentDay.cognitiveSession.durationMinutes} min)
              </h4>
              <p className="text-xs font-bold text-white mt-1">{currentDay.cognitiveSession.type}</p>
              <p className="text-[11px] text-titanium-300 mt-1 leading-relaxed">
                {currentDay.cognitiveSession.protocol}
              </p>
            </div>

            <div className="pt-2 border-t border-subtle-light">
              <h4 className="text-xs font-mono font-bold text-titanium-400 uppercase tracking-wider flex items-center gap-2">
                <Moon size={14} />
                Bio-Tiklanish & Uyqu
              </h4>
              <p className="text-[11px] text-titanium-300 mt-1">
                {currentDay.nutritionAndBioRecovery.eveningProtocol}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MASHG‘ULOTLAR TARIXI & TONNAJ REKORDLARI (LOCALSTORAGE LOGS) */}
      <div className="p-6 rounded-xl bg-dark-900 border border-subtle space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-subtle pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-tactic-emerald" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Mashg‘ulotlar Tarixi & Tonnaj Rekordlari
              </h3>
            </div>
            <p className="text-xs text-titanium-400 mt-0.5">
              Har bir yondashuv va ko‘tarilgan umumiy tonnajning xotiradagi qaydnomasi (Volume Load Tracker)
            </p>
          </div>

          {/* Quick KPIs */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-lg bg-dark-950 border border-subtle">
              <span className="text-titanium-500 block text-[10px]">Jami Mashg‘ulotlar</span>
              <span className="text-white font-bold">{workoutLogs.length} ta</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-dark-950 border border-subtle">
              <span className="text-titanium-500 block text-[10px]">Jami Ko‘tarilgan Yuklama</span>
              <span className="text-tactic-emerald font-bold">
                {workoutLogs.reduce((acc, log) => acc + log.tonnage, 0).toLocaleString()} kg
              </span>
            </div>
          </div>
        </div>

        {/* History Table */}
        <div className="overflow-x-auto rounded-lg border border-subtle">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-subtle bg-dark-950 text-titanium-400 font-mono text-[11px]">
                <th className="p-3 font-semibold">Sana & Vaqt</th>
                <th className="p-3 font-semibold">Kun & Faza</th>
                <th className="p-3 font-semibold">Mashg‘ulot Yo‘nalishi</th>
                <th className="p-3 font-semibold text-center">Yondashuvlar</th>
                <th className="p-3 font-semibold text-center">Davomiyligi</th>
                <th className="p-3 font-semibold text-right">Hajm (Tonnaj)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-subtle-light bg-dark-900 font-mono text-xs">
              {workoutLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-titanium-500 font-sans">
                    Hozircha saqlangan mashg‘ulotlar yo‘q. Jonli mashg‘ulot rejimida yondashuvlarni bajarib «Saqlash» tugmasini bosing.
                  </td>
                </tr>
              ) : (
                workoutLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-dark-850 transition-colors">
                    <td className="p-3 text-titanium-300">{log.date}</td>
                    <td className="p-3 font-bold text-white">{log.dayName}</td>
                    <td className="p-3 text-titanium-200 font-sans">{log.focus}</td>
                    <td className="p-3 text-center text-titanium-300">{log.setsCompleted} ta</td>
                    <td className="p-3 text-center text-titanium-400">{log.durationMinutes} min</td>
                    <td className="p-3 text-right font-bold text-tactic-emerald">
                      {log.tonnage > 0 ? `${log.tonnage.toLocaleString()} kg` : 'Kardio / Baza'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
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

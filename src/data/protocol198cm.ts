export interface DayProtocol {
  dayOfWeek: string;
  dayNameUz: string;
  focusTitle: string;
  targetCategory: 'physical' | 'cognitive' | 'endurance' | 'recovery';
  morningRoutine: {
    time: string;
    action: string;
    details: string;
  }[];
  mainSession: {
    type: string;
    durationMinutes: number;
    biomechanicsNote198cm: string;
    exercises: {
      name: string;
      setsReps: string;
      restSec: number;
      targetRpe: string;
      technicalCue: string;
      checklist?: string[];
      mistakesToAvoid?: string[];
    }[];
  };
  cognitiveSession: {
    type: string;
    tool: string;
    durationMinutes: number;
    protocol: string;
  };
  nutritionAndBioRecovery: {
    caloriesTarget: number;
    proteinGrams: number;
    waterLiters: number;
    supplements: string[];
    eveningProtocol: string;
  };
}

export const USER_PROFILE_CONSTANTS = {
  height_cm: 198,
  weight_kg: 79.6,
  skeletal_muscle_mass_kg: 41.6,
  body_fat_percentage: 8.7,
  wingspan_cm: 204,
  iq_range: '118 - 128 (INTJ-T)',
  bmr_kcal: 1940,
  tdee_training_kcal: 2950,
  daily_protein_target_g: 175,
  daily_water_min_l: 3.5,
  benchmarks2x: [
    { name: 'Turnik (Pull-ups)', current: 28, target: 40, unit: 'marta', status: '70.0% — Protsessda' },
    { name: 'Brus (Dips)', current: 42, target: 60, unit: 'marta', status: '70.0% — Protsessda' },
    { name: 'Deadlift (198cm Sumo)', current: 175, target: 220, unit: 'kg', status: '79.5% — Yuqori' },
    { name: 'Harbiy Rucking (Marsh)', current: 30, target: 40, unit: 'kg (15km)', status: '75.0% — Protsessda' },
    { name: 'Otjimaniya (Push-ups)', current: 110, target: 150, unit: 'marta', status: '73.3% — Yuqori' },
    { name: '3 km Taktik Yugurish', current: 575, target: 540, unit: 'soniya (9:35 min)', status: '66.0% — Kardio fazasi' }
  ]
};

export const WEEKLY_ACTIONABLE_PROTOCOL: DayProtocol[] = [
  // DUSHANBA
  {
    dayOfWeek: 'Monday',
    dayNameUz: 'Dushanba',
    focusTitle: '198cm Richag Kinetikasi: Yuqori Tana & L-Sit Pull-ups',
    targetCategory: 'physical',
    morningRoutine: [
      { time: '05:30', action: 'Gidratsiya & Elektrolit', details: '500 ml iliq suv + 1/4 choy qoshiq dengiz tuzi (hujayra ichi osmosi uchun).' },
      { time: '05:40', action: 'Sovuq Dush & Vagus Faollashuvi', details: '2 daqiqa sovuq suv (15°C) — simpatik shok va dopamin darajasini 2.5x oshirish.' },
      { time: '06:00', action: 'Stoik Zirh Jurnali', details: 'Mark Avreliy nazorat doirasi: bugun duch kelinishi mumkin bo‘lgan 3 ta to‘siqni oldindan neytrallash.' }
    ],
    mainSession: {
      type: 'Kuch va Kalistenika Richagi (Steven Low / Sommer)',
      durationMinutes: 75,
      biomechanicsNote198cm: '204 sm wingspan richagi harakat amplitudasini oshiradi. Yelka bo‘g‘imini yemirmaslik uchun har bir tortilishda kuraklar pastga qulflanishi (scapular depression) shart.',
      exercises: [
        {
          name: 'Scapular Pull-ups (Qizdirish)',
          setsReps: '3 × 12',
          restSec: 60,
          targetRpe: 'RPE 6',
          technicalCue: 'Tirsaklar bukmasdan, faqat kuraklarni pastga tortish.',
          checklist: [
            'Tirsaklar mutlaqo to‘g‘ri, faqat kuraklar harakatda',
            'Pastga tushganda bo‘yin erkin, yelkalar quloqqa yopishmaydi',
            'Yuqorida 1 soniya izometrik siqish'
          ],
          mistakesToAvoid: ['Biceps bilan tortish', 'Oyoqlarni orqaga siltash']
        },
        {
          name: 'L-Sit Strict Pull-ups',
          setsReps: '5 × 8',
          restSec: 120,
          targetRpe: 'RPE 8.5',
          technicalCue: 'Oyoqlar 90 daraja oldinda. Tebranish inersiyasini butunlay yo‘qotish.',
          checklist: [
            'Oyoqlar 90° parallel, tizzalar to‘liq to‘g‘rilangan',
            'Scapular depression orqali boshlanadi',
            'Iyak turnikdan to‘liq oshadi, ko‘krak turnikka intiladi',
            '3 soniya nazoratli eksentrik tushish'
          ],
          mistakesToAvoid: ['Kipping (tebranish)', 'Boshni orqaga tashlash', 'Pastda tirsakni shiddat bilan ochish']
        },
        {
          name: 'Weighted Dips (45° Forward Lean)',
          setsReps: '4 × 10 (+15 kg)',
          restSec: 120,
          targetRpe: 'RPE 8',
          technicalCue: 'Gavdani 45 daraja oldinga egish; tirsaklar ko‘krak orqasiga ketmasligi shart.',
          checklist: [
            'Gavda 45° oldinga og‘gan (Pectoralis ko‘krak yuklanadi)',
            'Tirsaklar 90° burchakda qulflangan, ichkariga yo‘naltirilgan',
            'Pastda yelka kapsulasi cho‘zilib ketmasligi nazoratda'
          ],
          mistakesToAvoid: ['Tik tushish (anterior deltoid jarohati)', 'Tirsaklarni ikki tomonga yoyish']
        },
        {
          name: 'Ring Support Hold (SAS)',
          setsReps: '4 × 45 soniya',
          restSec: 90,
          targetRpe: 'RPE 7.5',
          technicalCue: 'To‘g‘ri qo‘l kuchi. Biceps tendonlarini mustahkamlash.',
          checklist: [
            'Halqalar tashqariga 45° burilgan (RTO)',
            'Qo‘llar to‘liq to‘g‘ri, biceps distal payi tarang',
            'Kuraklar pastga bosilgan, qorin qulflangan'
          ],
          mistakesToAvoid: ['Tirsakni bukib ushlash', 'Yelkani bo‘shashtirib quloqqa yaqinlashtirish']
        },
        {
          name: 'Hanging Leg Raises (Barqaror)',
          setsReps: '4 × 12',
          restSec: 60,
          targetRpe: 'RPE 8',
          technicalCue: 'Tos suyagini ko‘krak qafasiga burish, bel orqaga egilmasin.',
          checklist: [
            'Tos suyagi oldinga burilib ko‘tariladi',
            'Oyoqlar to‘liq to‘g‘ri, tizzalar qulflangan',
            'Tushishda inersiyasiz, qorin doimiy zo‘riqishda'
          ],
          mistakesToAvoid: ['Belni orqaga bukib tebranish', 'Oyoqni faqat chanoq muskullari bilan ko‘tarish']
        }
      ]
    },
    cognitiveSession: {
      type: 'Ishchi Xotira & Suyuq Intellekt (Gf)',
      tool: 'Dual N-Back Trenajori',
      durationMinutes: 25,
      protocol: '20 blokli 3-4 darajali Dual N-Back (Position + Audio). Aniqlik 85% dan oshganda keyingi N-darajaga o‘tish.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 3050,
      proteinGrams: 180,
      waterLiters: 4.0,
      supplements: ['Kreatin monogidrat: 5g', 'Omega-3: 2000mg EPA/DHA', 'D3 vitamini: 5000 IU', 'Magniy bisglitsinat: 400mg (kechqurun)'],
      eveningProtocol: '21:30 da ko‘k chiroqni o‘chirish, 19°C qorong‘i xonada 8 soat uyqu.'
    }
  },

  // SESHANBA
  {
    dayOfWeek: 'Tuesday',
    dayNameUz: 'Seshanba',
    focusTitle: 'Pastki Tana & Umurtqa Zirhi (198cm Long-Femur Deadlift)',
    targetCategory: 'physical',
    morningRoutine: [
      { time: '05:30', action: 'Gidratsiya', details: '500 ml suv + limon sharbati.' },
      { time: '05:45', action: 'Chanoq Bo‘g‘imi Mobilizatsiyasi', details: '90/90 son bo‘g‘imi va tovon harakatchanligi (uzun suyaklar uchun majburiy).' }
    ],
    mainSession: {
      type: 'Shtanga Biomexanikasi (Mark Rippetoe Starting Strength)',
      durationMinutes: 70,
      biomechanicsNote198cm: 'Uzun son suyagida klassik o‘tirish umurtqaga og‘ir moment qo‘li beradi. Shuning uchun Semi-Sumo Deadlift va baland chanoq (high hip) pozitsiyasi qo‘llanadi.',
      exercises: [
        {
          name: 'Semi-Sumo Deadlift (Baland chanoq)',
          setsReps: '5 × 5 (150-165 kg)',
          restSec: 180,
          targetRpe: 'RPE 8.5',
          technicalCue: 'Shtanga boldirga tegib tursin. Polni oyoq bilan itarib ochish.',
          checklist: [
            'Shtanga boldir terisiga tegib turadi (0 sm bo‘shliq)',
            'Chanoq baland (High hip), bel 100% neytral holatda',
            'Yelkalar shtangadan biroz oldinda, qanotsimon mushaklar qulflangan',
            'Polni ikki tomonga yirtayotgandek oyoq bilan itarish'
          ],
          mistakesToAvoid: ['Dumg‘azani erta ochib umurtqa bilan tortish', 'Shtangani boldirdan uzoqlashtirish (moment richagini 2x oshiradi)']
        },
        {
          name: 'Bulgarian Split Squats (Gantel bilan)',
          setsReps: '4 × 8 (har bir oyoqqa)',
          restSec: 90,
          targetRpe: 'RPE 8',
          technicalCue: 'Tizzani tovon ustida barqaror ushlash, chanoq assimetriyasini yo‘qotish.',
          checklist: [
            'Oldingi tizza tovon chizig‘ida vertikal',
            'Orqa oyoq faqat muvozanat uchun, yuk 85% oldingi tovonda',
            'Gavda 10° oldinga egilgan holda dumg‘azani qisish'
          ],
          mistakesToAvoid: ['Oldingi tizzani ichkariga qulatish (valgus)', 'Tovonni poldan uzish']
        },
        {
          name: 'Nordic Hamstring Curls',
          setsReps: '4 × 6',
          restSec: 90,
          targetRpe: 'RPE 9',
          technicalCue: 'Son orqa paylarini (hamstrings) eksentrik fazada 4 soniya tushirish.',
          checklist: [
            'Chanoq to‘liq tekis, tos orqaga ketmaydi',
            '4 soniya davomida o‘ta sekin pastga tushish',
            'Pastda qo‘llar bilan yumshoq qaytib itarish'
          ],
          mistakesToAvoid: ['Belni bukib tushish', 'Eksentrik fazani nazoratsiz tashlab yuborish']
        },
        {
          name: 'Farmer’s Walk (Og‘ir qadam)',
          setsReps: '4 × 50 metr (2 × 36 kg)',
          restSec: 90,
          targetRpe: 'RPE 8.5',
          technicalCue: 'Gavda tik, trapetsiya va qorin qulflangan, qadamlar qisqa va qat’iy.',
          checklist: [
            'Kuraklar orqaga tortilgan va pastga mahkamlangan',
            'Qadamlar qisqa, tovon-kaft ketma-ketligida qat’iy',
            'Kaftlar barqaror, gantellar songa urilmaydi'
          ],
          mistakesToAvoid: ['Gavdani ikki tomonga chayqash', 'Yelkalarni oldinga osiltirish']
        }
      ]
    },
    cognitiveSession: {
      type: 'First Principles & Inversiya Tahlili',
      tool: 'Mental Trenajor',
      durationMinutes: 30,
      protocol: 'Haftalik murakkab biznes/taktik muammoni eng mayda atomar qismlariga ajratish va teskari fikrlash (Inversion).'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 3100,
      proteinGrams: 185,
      waterLiters: 4.2,
      supplements: ['Kreatin: 5g', 'Kollagen peptidlar + C vitamini: 15g (bo‘g‘imlar uchun)', 'Sink pikolinat: 25mg'],
      eveningProtocol: 'Oyoqlarni devorga 15 daqiqa ko‘tarib yotish (limfa aylanishi va venoz qaytishni tezlashtirish).'
    }
  },

  // CHORSHANBA
  {
    dayOfWeek: 'Wednesday',
    dayNameUz: 'Chorshanba',
    focusTitle: 'INTJ-T Taktik Qarorlar & SIT (Stress Inoculation Training)',
    targetCategory: 'cognitive',
    morningRoutine: [
      { time: '05:30', action: 'Nafas Gimnastikasi', details: 'Box Breathing (4-4-4-4) 10 daqiqa — simpatik nerv tonusini pasaytirish.' },
      { time: '06:00', action: 'Taktik OODA Analiz', details: 'Kun davomida qabul qilinishi kerak bo‘lgan 3 ta qarorning tezlik parametrlarini belgilash.' }
    ],
    mainSession: {
      type: 'Stress Ostida Qaror Qabul Qilish (Dave Grossman & SIT)',
      durationMinutes: 50,
      biomechanicsNote198cm: 'Jismoniy charchoq paytida puls 150-165 BPM ga chiqqanda, miya tunnel ko‘rishga o‘tadi. SIT mashqlari aynan shu paytda tahlilni saqlashni o‘rgatadi.',
      exercises: [
        {
          name: 'Spurt / Burpee portlashi (Pulsni oshirish)',
          setsReps: '5 raund × 45 soniya',
          restSec: 15,
          targetRpe: 'RPE 9.5',
          technicalCue: 'Yurak urishini 155+ BPM ga chiqarish.',
          checklist: [
            'Portlovchi sakrashda oyoqlar to‘liq to‘g‘rilanadi',
            'Tushishda chanoq osilib qolmaydi, qorin qulflangan',
            'Raund davomida maksimal temp saqlanadi'
          ],
          mistakesToAvoid: ['Belni tashlab yuborish (lumbar hyperextension)', 'Sekinlashib dam olish']
        },
        {
          name: 'Darhol Matematik / Mantiqiy Masala Yechish',
          setsReps: 'Har bir raunddan so‘ng 60 soniya',
          restSec: 30,
          targetRpe: 'Maksimal Kognitiv',
          technicalCue: 'Nafasni boshqarib, hisob-kitob xatosiga yo‘l qo‘ymaslik.',
          checklist: [
            'Tunnel ko‘rishni sindirish uchun nigohni kengaytirish (panoramic vision)',
            'Burun orqali chuqur 4s nafas olish',
            'Vahimani so‘ndirib hisoblashga diqqatni qaratish'
          ],
          mistakesToAvoid: ['Og‘izdan tez-tez yuzaki nafas olish (giperventilyatsiya)', 'Vahimada shoshilib javob belgilash']
        },
        {
          name: 'Box Breathing Faza O‘tishi',
          setsReps: '3 daqiqa',
          restSec: 0,
          targetRpe: 'Parasimpatik',
          technicalCue: 'Pulsni 160 dan 125 gacha 90 soniyada tushirish.',
          checklist: [
            '4 soniya burundan nafas olish',
            '4 soniya o‘pkani to‘ldirib ushlab turish',
            '4 soniya sekin og‘izdan/burundan chiqarish',
            '4 soniya bo‘sh o‘pka bilan ushlab turish'
          ],
          mistakesToAvoid: ['Nafasni tomoq mushagi bilan qisish (diafragmani bo‘shatish kerak)']
        }
      ]
    },
    cognitiveSession: {
      type: 'Sun Tzu & Klauzevits Asimmetriya Dosyesi',
      tool: 'Harbiy Ensiklopediya O‘quvchi',
      durationMinutes: 40,
      protocol: 'Schwerpunkt va Flank hujumi konsepsiyalarini shaxsiy loyihalarga moslashtirish.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 2800,
      proteinGrams: 170,
      waterLiters: 3.8,
      supplements: ['L-Teanin: 200mg + Kofein: 100mg (diqqatni jamlash)', 'Ashvaganda KSM-66: 600mg (kortizolni pasaytirish)'],
      eveningProtocol: 'Ekranlarsiz kitob mutolaasi, xona harorati 18.5°C.'
    }
  },

  // PAYSHANBA
  {
    dayOfWeek: 'Thursday',
    dayNameUz: 'Payshanba',
    focusTitle: 'Harbiy Rucking (30kg) & Aerobik Baza (Tactical Barbell)',
    targetCategory: 'endurance',
    morningRoutine: [
      { time: '05:30', action: 'Uglevodli Baza', details: 'Suli yormasi + yong‘oqlar va banan (marsh uchun sekin energiya).' },
      { time: '06:00', action: 'Taktik Ryukzakni Balanslash', details: '30 kg yukni yuqoriga, kuraklar oralig‘iga mahkamlash.' }
    ],
    mainSession: {
      type: 'Zone 2 Harbiy Chidamlilik Marshi (Rucking)',
      durationMinutes: 90,
      biomechanicsNote198cm: '198 sm bo‘y uzun qadam orqali kamroq energiya sarflaydi. Asosiy e’tibor — oyoq zarbasi tovonga emas, butun oyoq panjasiga yumshoq tushishi.',
      exercises: [
        {
          name: 'Harbiy Rucking (30 kg yuk bilan)',
          setsReps: '10–12 km to‘xtovsiz',
          restSec: 0,
          targetRpe: 'RPE 7.5 (Zone 2)',
          technicalCue: 'Yurak urishi qat’iy 130–142 BPM oralig‘ida. Sur’at: 8.5 min/km.',
          checklist: [
            'Ryukzak kuraklar orasida baland bog‘langan (belga osilmagan)',
            'Qadam uzunligi 0.95–1.05m barqaror ritmda',
            'Qorin devori yengil tarang, umurtqa tik',
            'Puls Zone 2 doirasida (burun bilan gaplasha oladigan daraja)'
          ],
          mistakesToAvoid: ['Haddan ortiq katta qadam tashlab tizzaga zarba berish', 'Gavdani haddan tashqari oldinga bukib bo‘yinga yuk tushirish']
        },
        {
          name: 'Oyoq Kafti & Boldir Cho‘zilishlari',
          setsReps: '15 daqiqa',
          restSec: 0,
          targetRpe: 'Tiklanish',
          technicalCue: 'Plantar fastsiya va axill payini yengillashtirish.',
          checklist: [
            'Axill payi 45 soniya statik cho‘ziladi',
            'Oyoq panjasi to‘p yordamida massaj qilinadi',
            'Boldir mushagi kramplardan bo‘shatiladi'
          ],
          mistakesToAvoid: ['Sovuq oyoqni keskin siltab cho‘zish']
        }
      ]
    },
    cognitiveSession: {
      type: 'John Boyd OODA Ritm Testi',
      tool: 'Kognitiv Trenajor',
      durationMinutes: 20,
      protocol: 'Tezkor qaror qabul qilish va kutilmagan vaziyatda yo‘nalishni 1 soniyada o‘zgartirish mashqlari.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 3300,
      proteinGrams: 185,
      waterLiters: 4.5,
      supplements: ['Elektrolitlar kompleksi (Natriy, Kaliy, Magniy)', 'BCAA / EAA marshdan so‘ng', 'Glyukozamin & Xondroitin'],
      eveningProtocol: 'Kontrastli dush (30 soniya issiq, 30 soniya sovuq — 5 tsikl).'
    }
  },

  // JUMA
  {
    dayOfWeek: 'Friday',
    dayNameUz: 'Juma',
    focusTitle: 'Elita Kalistenika & Brus (42/60 Dips) va Paylar Zirhi',
    targetCategory: 'physical',
    morningRoutine: [
      { time: '05:30', action: 'Gidratsiya', details: '500 ml suv + elektrolit.' },
      { time: '05:50', action: 'Yelka Bo‘g‘imi Band Kinesiology', details: 'Elastik tasma bilan rotator manjeti mashqlari.' }
    ],
    mainSession: {
      type: 'Yuqori Tana Bosimi & Gimnastika Kuchi',
      durationMinutes: 70,
      biomechanicsNote198cm: 'Brusda chuqur tushganda yelka oldi bo‘g‘imiga tushadigan kuchni ko‘krak mushagi bilan qabul qilish, bo‘g‘im kapsulasiga osilib qolmaslik.',
      exercises: [
        {
          name: 'Weighted Parallel Dips',
          setsReps: '5 × 12 (+20 kg)',
          restSec: 120,
          targetRpe: 'RPE 8.5',
          technicalCue: 'To‘liq sternum lokauti, tirsaklar 90 darajadan sal pastroqqa.',
          checklist: [
            'Gavda 45° oldinga og‘gan holatda',
            'Tirsaklar 90° chuqurlikka tushadi, orqaga yoyilmaydi',
            'Yuqorida kuraklar to‘liq pastga bosilib lokaut qilinadi'
          ],
          mistakesToAvoid: ['Tik tushish (yelka kapsulasi eziladi)', 'Tebranish inersiyasidan foydalanish']
        },
        {
          name: 'Bodyweight Dips (Tezkor portlash)',
          setsReps: '3 × Max (42+ ga intilish)',
          restSec: 90,
          targetRpe: 'RPE 9',
          technicalCue: 'Ritmik, barqaror nafas bilan toza harakat.',
          checklist: [
            'Doimiy tezlik ritmi (1 soniya pastga, 1 soniya yuqoriga)',
            'Har bir takrorda to‘liq harakat amplitudasi',
            'Har 10 takrorda diafragma nafasi yangilanadi'
          ],
          mistakesToAvoid: ['Yarim amplituda (chala tushish)', 'Oxirgi takrorlarda bo‘yinni bukib qisish']
        },
        {
          name: 'Ring Push-ups (Beqarorlikda)',
          setsReps: '4 × 15',
          restSec: 60,
          targetRpe: 'RPE 8',
          technicalCue: 'Halqalarni yuqorida bir-biriga yaqinlashtirib ko‘krakni siqish.',
          checklist: [
            'Pastda halqalar ko‘krak yoniga tekkiziladi',
            'Yuqorida halqalar ichkariga burilib ko‘krak qisiladi',
            'Bel tekis (hollow body plank)'
          ],
          mistakesToAvoid: ['Chanoqni pastga osiltirish', 'Tirsaklarni ikki chetga ochib yuborish']
        },
        {
          name: 'German Hang (Sommer protokoli)',
          setsReps: '4 × 45 soniya',
          restSec: 90,
          targetRpe: 'RPE 7.5',
          technicalCue: 'Yelka old paylarini cho‘zib mustahkamlash.',
          checklist: [
            'Sekin va nazoratli orqaga o‘tish',
            'Oyoqlar bo‘shashtirilgan, gravitatsiya hisobiga cho‘zilish',
            'Nafas bir tekis, vahimasiz'
          ],
          mistakesToAvoid: ['Keskin harakat bilan tushish yoki chiqish']
        }
      ]
    },
    cognitiveSession: {
      type: 'Dual N-Back 5-Daraja Sinovi',
      tool: 'MiyaIQ Trenajori',
      durationMinutes: 25,
      protocol: 'Maksimal kognitiv yuklama bilan 5-darajani yorib o‘tish.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 3000,
      proteinGrams: 180,
      waterLiters: 4.0,
      supplements: ['Kreatin: 5g', 'Omega-3: 2000mg', 'ZMA (Sink, Magniy, B6)'],
      eveningProtocol: 'Miyani dam oldirish uchun 60 daqiqa toza havoda sayr.'
    }
  },

  // SHANBA
  {
    dayOfWeek: 'Saturday',
    dayNameUz: 'Shanba',
    focusTitle: 'Goggins 40% Qoidasi: 3 km Yugurish (9:35 $\to$ 9:00) & Otjimaniya',
    targetCategory: 'physical',
    morningRoutine: [
      { time: '06:00', action: 'Accountability Mirror', details: 'Ko‘zguga qarab haftalik natijalarni sovuqqon tahlil qilish.' },
      { time: '06:15', action: 'Kardio Isitish', details: '10 daqiqa dinamik harakatlar, to‘piq va boldir tayyorgarligi.' }
    ],
    mainSession: {
      type: 'Taktik Tezlik & Mental Chegara Sinovi',
      durationMinutes: 60,
      biomechanicsNote198cm: '3 km masofada 198 sm bo‘yda kadans (daqiqadagi qadamlar soni) 165–172 bo‘lishi optimal. Qadamni haddan ortiq oldinga tashlab to‘piqqa tormoz bermaslik.',
      exercises: [
        {
          name: '3 km Taktik Yugurish (Maksimal sur’at)',
          setsReps: '1 × 3 km (Maqsad: < 9:00 min)',
          restSec: 0,
          targetRpe: 'RPE 9.5',
          technicalCue: '1-km: 3:10, 2-km: 3:05, 3-km: 2:50 (Splits nazorati).',
          checklist: [
            'Kadans 168–172 qadam/daqiqa',
            'Oyoq yerga gavda ostida, o‘rta qism bilan tushadi',
            'Qo‘llar 90° burchakda yelka o‘qi bo‘ylab ritmik harakatda',
            '3-kilometrda 100% gaz berish (mental sinov)'
          ],
          mistakesToAvoid: ['1-kilometrda 2:50 bilan boshlab tez charchash', 'Oyoqni oldinga otib tovon bilan tormozlanish']
        },
        {
          name: 'Maksimal Otjimaniya Marafon (The 40% Rule)',
          setsReps: '110 ta to‘xtovsiz (Maqsad: 150)',
          restSec: 0,
          targetRpe: 'RPE 10',
          technicalCue: 'Charchoq kelganda to‘xtamaslik, yuqori plank holatida 3 soniya dam olib davom etish.',
          checklist: [
            'Ko‘krak polga 2 sm qolguncha tushadi',
            'Yuqorida tirsaklar to‘liq ochiladi va kuraklar qulflanadi',
            'Chanoq pastga osilmaydi, qorin toshdek tarang',
            'Charchaganda tizzaga tushmasdan yuqori plankda nafas rostlash'
          ],
          mistakesToAvoid: ['Tirsaklarni 90° ga ochish (yelka bo‘g‘imiga yuklama)', 'Chanoq bilan to‘lqinsimon itarilish']
        },
        {
          name: 'Plank Hold (Vazn bilan)',
          setsReps: '3 × 90 soniya (+20 kg)',
          restSec: 60,
          targetRpe: 'RPE 8.5',
          technicalCue: 'Qorin, dumg‘aza va sonlarni toshdek taranglash.',
          checklist: [
            'Disk kuraklar ustiga tekis qo‘yiladi',
            'Tirsaklar to‘g‘ridan-to‘g‘ri yelka ostida',
            'Bo‘yin tekis, nigoh polda'
          ],
          mistakesToAvoid: ['Belni pastga qulatish', 'Nafasni to‘xtatib qon bosimini oshirish']
        }
      ]
    },
    cognitiveSession: {
      type: 'Taktik Quti & Stoik Xulosa',
      tool: 'Haftalik Tizimli Audit',
      durationMinutes: 30,
      protocol: 'O‘tgan haftaning barcha xatolarini o‘rganish va kelgusi haftaning Schwerpunkt nuqtasini belgilash.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 3200,
      proteinGrams: 180,
      waterLiters: 4.2,
      supplements: ['Kreatin: 5g', 'Kollagen: 15g', 'C vitamini: 1000mg', 'Magniy: 400mg'],
      eveningProtocol: 'Issiq hammom yoki sauna (20 daqiqa) + sovuq dush.'
    }
  },

  // YAKSHANBA
  {
    dayOfWeek: 'Sunday',
    dayNameUz: 'Yakshanba',
    focusTitle: 'Bio-Tiklanish & Glimfatik Drenaj (To‘liq Neyro-Fizik Qayta Yuklash)',
    targetCategory: 'recovery',
    morningRoutine: [
      { time: '07:30', action: 'Tabiiy Uyg‘onish', details: 'Budilniksiz, to‘liq 8.5–9 soat chuqur uyqudan keyin turish.' },
      { time: '08:00', action: 'Quyosh Nuri & Suv', details: '15 daqiqa ochiq havoda tabiiy fotonlarni ko‘z to‘r pardasiga qabul qilish (Sirkad ritm).' }
    ],
    mainSession: {
      type: 'Faol Tiklanish & Mobilizatsiya',
      durationMinutes: 45,
      biomechanicsNote198cm: 'Baland bo‘yli odamda umurtqa disklari kun davomida 1.5–2 sm gacha qisqaradi. Yakshanba kuni gravitatsion dekompressiya (osilib turish) zarur.',
      exercises: [
        {
          name: 'Gravitatsion Inversion / Turnikda Bo‘sh Osilish',
          setsReps: '5 × 60 soniya',
          restSec: 60,
          targetRpe: 'RPE 1',
          technicalCue: 'Barcha mushaklarni bo‘shashtirib umurtqalararo masofani kengaytirish.',
          checklist: [
            'Kaftlar qulflangan, lekin yelka va bel to‘liq bo‘shashtiriladi',
            'Diafragma bilan sekin, to‘liq chuqur nafas olinadi',
            'Har bir yondashuvdan so‘ng yerga ohista, sakramasdan tushish'
          ],
          mistakesToAvoid: ['Osilgan holatda yelkada kuch bilan ushlab turish', 'Turnikdan pastga qattiq sakrab tushish']
        },
        {
          name: 'Ko‘krak Qafasi & Chanoq Mobilizatsiyasi',
          setsReps: '30 daqiqa',
          restSec: 0,
          targetRpe: 'RPE 2',
          technicalCue: 'Chuqur nafas bilan to‘liq yengillashish.',
          checklist: [
            '90/90 chanoq harakati har tomonga 3 daqiqadan',
            'Torakal (ko‘krak qafasi) umurtqa qismini ko‘pik rolikda ochish',
            'Hamstrings va son oldi fleksorlarini statik bo‘shatish'
          ],
          mistakesToAvoid: ['Og‘riq bo‘sag‘asidan oshib zo‘riqtirish']
        }
      ]
    },
    cognitiveSession: {
      type: 'Chuqur Mutolaa & Falsafiy Sintez',
      tool: 'Mark Avreliy «Mulohazalar»',
      durationMinutes: 45,
      protocol: 'Hafta davomida ichki sovuqqonlik qanchalik saqlanganini baholash.'
    },
    nutritionAndBioRecovery: {
      caloriesTarget: 2700,
      proteinGrams: 160,
      waterLiters: 3.5,
      supplements: ['Omega-3: 3000mg', 'Multivitamin kompleksi', 'Probiotiklar'],
      eveningProtocol: '21:00 da barcha raqamli qurilmalarni o‘chirish, 19°C qorong‘i xonada chuqur uyqu.'
    }
  }
];

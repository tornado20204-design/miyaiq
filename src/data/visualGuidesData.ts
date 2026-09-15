export interface VisualGuideItem {
  id: string;
  titleUz: string;
  category: 'biomechanics' | 'combat' | 'physiology' | 'strategy';
  categoryUz: string;
  imageSrc: string;
  bookSource: string;
  author: string;
  keyMetric: string;
  summary: string;
  technicalBreakdown: {
    title: string;
    points: string[];
  }[];
  mistakesToAvoid: string[];
}

export const VISUAL_GUIDES: VisualGuideItem[] = [
  {
    id: 'l-sit-pullup',
    titleUz: '198 sm L-Sit Pull-up & Scapular Depression Kinetikasi',
    category: 'biomechanics',
    categoryUz: '198cm Biomexanika',
    imageSrc: '/guides/pullup_technique.jpg',
    bookSource: '«Overcoming Gravity»',
    author: 'Steven Low',
    keyMetric: 'T = 120 N·m Torque | 90° Tirsak Burchagi',
    summary: '204 sm quloch (wingspan) va uzun richagda yelka hamda tirsak bo‘g‘imiga tushadigan 1.25x ortiqcha momentni neytrallash. Kuraklarni oldin qulflash (Scapular depression) va oyoqlarni 90° L-sit holatida ushlab tebranish inersiyasini butunlay yo‘qotish.',
    technicalBreakdown: [
      {
        title: 'Boshlang‘ich Holat & Scapular Lockout',
        points: [
          'Turnikka osilganda tirsaklar bukilmaydi; birinchi bo‘lib kuraklar qat’iy pastga tortiladi (Depression).',
          'Lats (qanotlar) va traps (trapetsiya) mushaklari 100% aktivlanadi.'
        ]
      },
      {
        title: 'L-Sit Gavda Pozitsiyasi',
        points: [
          'Oyoqlar tizza bukilmasdan oldinga 90° ko‘tariladi.',
          'Core (qorin matbuoti) va to‘rt boshli son mushaklari qulflanadi, tana tebranishi (kipping) 0 ga tushadi.'
        ]
      },
      {
        title: 'Ko‘tarilish & Cho‘qqi Faza',
        points: [
          'Ko‘krak qafasi turnikka tekkuncha vertikal kuch yo‘naltiriladi (F vektori).',
          'Tirsaklar 90° burchak ostida gavdaga parallel harakatlanadi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Oyoqlarni orqaga siltab sakrab tortilish (inertsiya bo‘g‘imni yirtadi).',
      'Harakat tubida bo‘g‘imni butunlay bo‘shatib osilib qolish (1-2° mikro-fleksiya saqlanishi shart).'
    ]
  },
  {
    id: 'semi-sumo-deadlift',
    titleUz: '198 sm Long-Femur Semi-Sumo Deadlift Kinematikasi',
    category: 'biomechanics',
    categoryUz: '198cm Biomexanika',
    imageSrc: '/guides/deadlift_technique.jpg',
    bookSource: '«Starting Strength»',
    author: 'Mark Rippetoe',
    keyMetric: '1850 N Force | 110° Hip Angle | 135° Knee Angle',
    summary: 'Uzun son suyagiga (long femur) ega 198 sm lifterlar uchun an’anaviy deadlift umurtqa pog‘onasiga xavfli gorizontal moment yuklaydi. Semi-sumo pozitsiyasi chanoqni baland (high hip) ushlab, shtanga traektoriyasini boldirga yopishtiradi.',
    technicalBreakdown: [
      {
        title: 'Oyoq Pozitsiyasi & Mid-Foot Balansi',
        points: [
          'Oyoqlar yelka kengligidan 1.3x kengroq, oyoq panjalari 30° tashqariga ochilgan.',
          'Shtanga boldir suyagidan roppa-rosa 2.5 sm masofada mid-foot ustida joylashadi.'
        ]
      },
      {
        title: 'Baland Chanoq (High Hip) & Lat Qulfi',
        points: [
          'Chanoq haddan tashqari pastga tushmaydi (Squat qilinmaydi); son burchagi 110° da qulflanadi.',
          'Latissimus dorsi qulflanib, shtanga boldir va son terisiga ishqalanib vertikal ko‘tariladi.'
        ]
      },
      {
        title: 'Polni Itarish (Leg Drive)',
        points: [
          'Og‘irlikni qo‘llar bilan tortilmaydi, polni oyoqlar bilan yorib ochish hissi beriladi.',
          'Umurtqa neytral holatda qoladi, bosh orqaga tashlanmaydi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Shtangadan boldirni uzoqlashtirish (gorizontal moment qo‘li umurtqani yemiradi).',
      'Belni dumaloqlab ko‘tarish (grija xavfi).'
    ]
  },
  {
    id: 'parallel-bar-dips',
    titleUz: 'Brusda 45° Gavda Og‘ishi & Yelka Bo‘g‘imi Zirhi (Dips)',
    category: 'biomechanics',
    categoryUz: '198cm Biomexanika',
    imageSrc: '/guides/dips_technique.jpg',
    bookSource: '«Building the Gymnastic Body»',
    author: 'Christopher Sommer',
    keyMetric: '45° Torso Lean | Scapular Depression Lockout',
    summary: 'Uzun qo‘llarda tik holatda brus qilish yelka oldi bo‘g‘im kapsulasiga (anterior capsule) halokatli burovchi kuch beradi. Gavdani 45° oldinga egish yuklamani ko‘krak (pectoralis major) va tricepsga to‘g‘ri taqsimlaydi.',
    technicalBreakdown: [
      {
        title: '45 Daraja Gavda Og‘ishi',
        points: [
          'Harakat boshidanoq tana oldinga 45° burchak ostida egiladi.',
          'Bosh neytral, iyak ko‘krakka yaqinlashtirilgan.'
        ]
      },
      {
        title: 'Tirsak Burchagi & Yuklama Taqsirlanishi',
        points: [
          'Tirsaklar 90° dan sal pastroqqa tushadi, orqaga kengayib ketmaydi.',
          'Triceps brachii va ko‘krak mushaklari yuklamaning 90% ini qabul qiladi.'
        ]
      },
      {
        title: 'Yuqori Sternum Qulflanishi',
        points: [
          'Yuqori nuqtada tirsaklar qulflanadi va kuraklar pastga bosiladi (Scapular depression).',
          'Yelka old qismi barqarorlashtiriladi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Gavdani butunlay tik tutib tushish (yelka bo‘g‘imi kapsulasiga haddan ortiq bosim).',
      'Pastki fazada tez tushib to‘xtash (tirsak paylarini zo‘riqtirish).'
    ]
  },
  {
    id: 'military-rucking',
    titleUz: '198 sm Elita Harbiy Marsh (35kg Rucking) Kinematikasi',
    category: 'combat',
    categoryUz: 'Jangovar Taktika & Masofa',
    imageSrc: '/guides/rucking_technique.jpg',
    bookSource: '«Tactical Barbell: Green Protocol»',
    author: 'K. Black',
    keyMetric: '35 kg Yuk | 0.95–1.05 m Qadam | Zone 2 HR (135 bpm)',
    summary: '198 sm bo‘yli operator uzun qadam uzunligi (stride length) hisobiga kilometriga 10–15% kamroq qadam sarflaydi. Og‘irlikni kuraklar orasiga joylashtirish va og‘irlik markazini ozgina oldinda ushlab tezkor quvvatli qadam (Power Walk) tashlash.',
    technicalBreakdown: [
      {
        title: 'Ryukzakning Yuqori Fiksatsiyasi',
        points: [
          'Yuk ryukzakning eng yuqori qismiga joylashtiriladi (pastga emas).',
          'Ko‘krak kamari va keng bel kamari yukning 70% ini tos suyagiga uzatadi.'
        ]
      },
      {
        title: 'Uzun Qadam & Tovon-Panja Fazasi',
        points: [
          'Qadam kengligi 0.95–1.05 metr oralig‘ida saqlanadi.',
          'Ketma-ketlik: Tovon yumshoq tegadi $\to$ Mid-foot yuklanadi $\to$ Barmoqlar itaradi.'
        ]
      },
      {
        title: 'Zone 2 Kardio Boshqaruvi',
        points: [
          'Puls qat’iy ravishda 125–145 BPM oralig‘ida (yog‘ oksidlanishi va chidamlilik).',
          'Nafas faqat burun orqali nazorat qilinadi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Yugurishga o‘tish (35 kg yuk bilan yugurish tizza meniskini yemirishi mumkin).',
      'Gavdani orqaga tashlab yurish (bel umurtqasini ezadi).'
    ]
  },
  {
    id: 'combat-teep-kick',
    titleUz: 'Left of Bang: 204 sm Quloch & Push Teep Bilan Masofa Nazorati',
    category: 'combat',
    categoryUz: 'Jangovar Taktika & Masofa',
    imageSrc: '/guides/combat_stance_technique.jpg',
    bookSource: '«Left of Bang»',
    author: 'Patrick Van Horne / Jason Riley',
    keyMetric: '204 sm Wingspan Radius | 360° Skanerlash | Pre-Event Teep',
    summary: '198 sm bo‘y va 204 sm qulochning asosiy taktik ustunligi — dushmanga 1.5–2 metr masofadan yetib borish. Xavf BANG fazasiga yetmasdan (Left of Bang) to‘xtatuvchi Teep zarbasi bilan raqib muvozanati buziladi.',
    technicalBreakdown: [
      {
        title: '360° Kinezik Skanerlash',
        points: [
          'Atrofdagi anomaliyalar va xavfli niyatlar 1–2 soniya oldin ilg‘anadi.',
          'Baland bo‘y hisobiga ko‘rish maydoni barchadan kengroq saqlanadi.'
        ]
      },
      {
        title: 'Push Teep Masofani Tiklash Zarba Vektori',
        points: [
          'Oldingi tizza ko‘krakka tortilib, chanoq (hip drive) orqali oldinga qat’iy itariladi.',
          'Oyoq kafti dushmanning qorin yoki ko‘krak markaziga tushadi va uning hujumini so‘ndiradi.'
        ]
      },
      {
        title: 'Og‘irlik Markazini Saqlash',
        points: [
          'Tayanch oyoq to‘liq erga yopishgan, gavda orqaga yiqilmaydi.',
          'Qo‘llar himoya pozitsiyasida (Guard) qoladi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Yaqin masofaga (tiqilinch) kirib ketish (uzun richag ustunligini yo‘qotadi).',
      'Zarba berayotganda qo‘llarni pastga tushirib boshni ochiq qoldirish.'
    ]
  },
  {
    id: 'box-breathing-hud',
    titleUz: 'Grossman Taktik Puls Spektri & Box Breathing 4-4-4-4 HUD',
    category: 'physiology',
    categoryUz: 'Fiziologiya & Nafas',
    imageSrc: '/guides/box_breathing_hud.jpg',
    bookSource: '«On Combat»',
    author: 'Lt. Col. Dave Grossman',
    keyMetric: '115–145 BPM Optimal Zona | Vagus Nerve 4-4-4-4 Sekund',
    summary: 'Jangovar stress paytida simpatik bo‘ronni jilovlash ilmi. Puls 145 BPM dan oshganda miyaning tahliliy qismi o‘chib qolmasligi uchun Navy SEAL usulidagi Taktik Quti Nafasi orqali parasimpatik nerv tizimini faollashtirish.',
    technicalBreakdown: [
      {
        title: 'Puls Zonalari Analizi',
        points: [
          '60–80 BPM: Oq Zona (Xotirjam).',
          '80–115 BPM: Yashil Baza (Hushyorlik, nozik motorika 100%).',
          '115–145 BPM: Sariq Optimal Jangovar Zona (Maksimal kognitiv va jismoniy samaradorlik).',
          '145–175 BPM: Qizil Zona (Kortizol portlashi, faqat qo‘pol kuch qoladi).',
          '175+ BPM: Qora Zona (Tunnel ko‘rish, eshitish falaji, mantiqiy aql falaji).'
        ]
      },
      {
        title: 'Taktik Quti Nafasi 4 Bosqichi',
        points: [
          '1. INHALE: 4 soniya burun orqali diafragma bilan chuqur nafas olish.',
          '2. HOLD: 4 soniya o‘pkadagi havoni qulflab turish.',
          '3. EXHALE: 4 soniya og‘iz orqali havoni sekin bo‘shatish.',
          '4. HOLD: 4 soniya o‘pka bo‘sh holatida kutish.'
        ]
      },
      {
        title: 'Vagus Nervi Stimulyatsiyasi',
        points: [
          '90 soniya ichida yurak urishi 160 BPM dan 125 BPM ga tushadi.',
          'Nozik motorika va ko‘rish burchagi (perceptual field) qayta tiklanadi.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Sayoz ko‘krak nafasi olish (bu simpatik stressni battar oshiradi).',
      'Nafas ritmini shoshiltirish (har bir faza qat’iy 4 soniya bo‘lishi lozim).'
    ]
  },
  {
    id: 'sun-tzu-flanking',
    titleUz: 'Sun-Tszi: Asimmetrik Qanot Zarba (Flank Maneuver) & 5 Omil Radari',
    category: 'strategy',
    categoryUz: 'Asimmetrik Strategiya',
    imageSrc: '/guides/sun_tzu_strategy_guide.jpg',
    bookSource: '«Urush san’ati» (The Art of War)',
    author: 'Sun-Tszi',
    keyMetric: '5 Factors Radar | Stealth Flank | Logistika Zarba',
    summary: 'Dushmanning mustahkamlangan front mudofaasiga qarshi to‘g‘ridan-to‘g‘ri hujum qilmaslik. 5 Strategik Omil (Dao, Tian, Di, Jiang, Fa) radari orqali dushmanning ta’minot zanjiri va eng himoyasiz orqa logistika bazasiga yashirin qanot zarbasi berish.',
    technicalBreakdown: [
      {
        title: '5 Omil Radari (Wu Shi) Tahlili',
        points: [
          'Dao (90% ruhiy birlik va motivatsiya).',
          'Tian (Tungi fasl, yomg‘ir, ko‘rinish pastligi — yashirin harakat uchun).',
          'Di (Tog‘li relyef, to‘siqlarni chetlab o‘tish yo‘nalishi).',
          'Jiang & Fa (Sovuqqon boshqaruv va qat’iy intizom).'
        ]
      },
      {
        title: 'Asimmetrik Qanot Zarba Traektoriyasi',
        points: [
          'Qizil mudofaa chizig‘idan butunlay chetlab o‘tuvchi yashirin infiltratsiya.',
          'Dushmanning qurol-aslaha va yoqilg‘i omborlariga kutilmagan zarba.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Kuchli mustahkamlangan markazga frontal hujum qilish (og‘ir yo‘qotishlar).',
      'Logistika va orqa ta’minot himoyasini unutish.'
    ]
  },
  {
    id: 'clausewitz-schwerpunkt',
    titleUz: 'Klauzevits: Schwerpunkt (Og‘irlik Markazi) & Urush Tumani',
    category: 'strategy',
    categoryUz: 'Asimmetrik Strategiya',
    imageSrc: '/guides/clausewitz_guide.jpg',
    bookSource: '«G‘alaba va mag‘lubiyat kitobi» (On War)',
    author: 'Carl von Clausewitz',
    keyMetric: '75% Uncertainty | Schwerpunkt Konsentratsiya',
    summary: 'Urush maydonidagi 75% noaniqlik («Urush tumani» — Fog of War) va ishqalanish (Friction)ni yengish. Kuchlarni mayda frontlarga sochmasdan, dushmanning yagona og‘irlik markaziga (Schwerpunkt) bor kuch bilan zarba berish.',
    technicalBreakdown: [
      {
        title: 'Schwerpunkt Nuqtasini Aniqlash',
        points: [
          'Dushmanning butun tizimi qulashiga sabab bo‘ladigan yagona markaziy tugunni topish.',
          'Barcha ikkinchi darajali maqsadlardan resurslarni ushbu markazga jamlash.'
        ]
      },
      {
        title: 'Ishqalanish (Friction)ni Yengish',
        points: [
          'Rejaga 25% zaxira kiritish; noaniqlik paytida intellektual qat’iyat ko‘rsatish.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Kuchlarni bir nechta mayda nishonlarga tarqatib yuborish.',
      'Noaniqlik sababli qaror qabul qilishni haddan ortiq kechiktirish.'
    ]
  },
  {
    id: 'boyd-ooda-loop',
    titleUz: 'Jon Boyd: Qiruvchi Uchuvchi OODA Tsikli & Ritm Buzish',
    category: 'combat',
    categoryUz: 'Jangovar Taktika & Masofa',
    imageSrc: '/guides/boyd_ooda_guide.jpg',
    bookSource: '«Boyd: The Fighter Pilot Who Changed War»',
    author: 'Col. John Boyd',
    keyMetric: 'Δt = +280 kts | 0.8s vs 6.7s Tsikl Tezligi',
    summary: 'Observe $\to$ Orient $\to$ Decide $\to$ Act siklini raqibnikidan 8 barobar tezroq aylantirish (0.8 soniya vs 6.7 soniya). Raqib qaror qabul qilgunicha uning aqliy ritmini sindirib, kutilmagan vaziyatga solish.',
    technicalBreakdown: [
      {
        title: '4 Fazali Kognitiv Tsikl',
        points: [
          '1. Observe: Radar, infraqizil va sensorlar orqali vaziyatni doimiy kuzatish.',
          '2. Orient: Kontekst, xavf tahlili va doktrinaga ko‘ra oniy yo‘nalish olish.',
          '3. Decide: Kursni tanlash va nishonni qulflash.',
          '4. Act: Manevr yoki qurolni ishga tushirish.'
        ]
      },
      {
        title: 'Adversary Loop Disruption (Raqib Tsiklini Sindirish)',
        points: [
          'Tezlik differensiali orqali raqib OODA siklining ichiga kirib borish.',
          'Raqib eski voqelikka javob berayotganda siz yangi fazaga o‘tib bo‘lasiz.'
        ]
      }
    ],
    mistakesToAvoid: [
      'Bir xil taktik ritmda qolib ketish (oldindan bashorat qilinadigan bo‘lish).',
      'Orientatsiya fazasida ma’lumotlarni noto‘g‘ri filtrlab xulosa chiqarish.'
    ]
  }
];

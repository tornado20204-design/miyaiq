export interface TacticalBook {
  id: string;
  number: number;
  titleUz: string;
  titleOriginal: string;
  author: string;
  category: 'strategy' | 'physical' | 'combat' | 'stoic';
  categoryUz: string;
  yearPublished: string;
  coreDoctrine: string;
  mathematicalFormulaOrLaw: {
    name: string;
    formula: string;
    description: string;
  };
  keyAxioms: string[];
  intjApplication: string;
  height198cmApplication: string;
  practicalDrill: {
    title: string;
    targetBenchmark: string;
    phasePreparation: string[];
    phaseExecution: string[];
    phaseSafety: string[];
    frequency: string;
  };
  authenticQuotes: {
    text: string;
    context: string;
  }[];
}

export const TACTICAL_ENCYCLOPEDIA: TacticalBook[] = [
  // 1. SUN TZU
  {
    id: 'sun-tzu-art-of-war',
    number: 1,
    titleUz: 'Urush san’ati',
    titleOriginal: 'The Art of War (孫子兵法)',
    author: 'Sun-Tszi (Sun Tzu)',
    category: 'strategy',
    categoryUz: 'Asimmetrik va Harbiy Strategiya',
    yearPublished: 'Miloddan avvalgi V asr',
    coreDoctrine: 'Eng oliy harbiy mahorat — dushman qo‘shinini jangsiz bo‘ysundirishdir. Simmetrik, frontma-front to‘qnashuv — strategik ojizlik belgisi. G‘alaba sharoiti jang boshlanishidan oldin yaratiladi.',
    mathematicalFormulaOrLaw: {
      name: '5 Strategik Omil Matritsasi (Wu Shi)',
      formula: 'G\'alaba = f(Dao, Tian, Di, Jiang, Fa)',
      description: 'Dao (Ma’naviy birlik va qat’iyat), Tian (Vaqt va fasl imkoniyati), Di (Relyef va masofa), Jiang (Boshqaruvchining sovuqqon donoligi), Fa (Qat’iy tizim va logistika). Agar bu 5 ko‘rsatkich dushmandan ustun bo‘lmasa, to‘g‘ridan-to‘g‘ri hujumga o‘tish mag‘lubiyatga olib keladi.'
    },
    keyAxioms: [
      'Kuchli bo‘lsang — o‘zingni ojizdek ko‘rsat; yaqin bo‘lsang — uzoqdek taassurot qoldir.',
      'Dushman tayyor turgan joyga hujum qilma; uning bexabar va bo‘sh joyiga yashin tezligida zarba ber.',
      'Suv qanday qilib pastlikka qarab oqsa va to‘siqlarni chetlab o‘tsa, urushda ham dushmanning qattiq nuqtalaridan qochib, bo‘shliqlarga kirib borish kerak.',
      'O‘zingni bil va dushmanni bil — shunda yuzta jangda ham xavf ostida qolmaysan.'
    ],
    intjApplication: 'INTJ-T uchun his-tuyg‘ularni o‘chirib, raqibni shaxmat donasi sifatida tahlil qilish imkoniyati. Resurslar tanqisligida dushmanning kuchli tomonlari bilan bellashmasdan, uning asab tizimi, ta’minot zanjiri va psixologik zaifliklariga asimmetrik zarba berish.',
    height198cmApplication: '198 sm bo‘yda yaqin masofadagi simmetrik tiqilinch jangga kirmaslik. Uzun quloch (204 sm) orqali masofani (Di) nazorat qilish: dushman sizga yetib kela olmaydigan perimetrda qolib, tashqi zarbalar berish.',
    practicalDrill: {
      title: 'Asimmetrik Flank Zarba Mashg‘uloti (Jangsiz Yutish)',
      targetBenchmark: 'To‘g‘ridan-to‘g‘ri to‘qnashuvsiz maqsadga 100% erishish',
      phasePreparation: [
        'Raqibning 3 ta asosiy resurs manbaini qog‘ozga chizing (pul, energiya, obro‘).',
        'Raqib eng ko‘p kutayotgan frontal yo‘nalishni aniqlang va u yerdan butunlay chekining.'
      ],
      phaseExecution: [
        'Raqib resurs sarflab charchashini kuting (provokatsiyalarga javob bermang).',
        'Raqib e’tiborsiz qoldirgan yagona zaif nuqtaga barcha kuchni konsentratsiyalangan holda bering.'
      ],
      phaseSafety: [
        'G‘urur va emotsiyaga berilmang; obro‘ uchun jang qilmang, faqat yakuniy natija uchun ishlang.'
      ],
      frequency: 'Har qanday muzokara, biznes yoki ziddiyatli vaziyatda qat’iy qo‘llanadi.'
    },
    authenticQuotes: [
      { text: 'Eng oliy harbiy mahorat — dushman rejalarini puchga chiqarishdir.', context: '3-bob: Strategik hujum' },
      { text: 'Urush — bu aldov yo‘lidir.', context: '1-bob: Dastlabki hisob-kitoblar' },
      { text: 'G‘olib jangchilar avval g‘alaba qozonadilar, so‘ngra jangga kiradilar; mag‘lub jangchilar esa avval jangga kiradilar, so‘ngra g‘alaba izlaydilar.', context: '4-bob: Taktik joylashuv' }
    ]
  },

  // 2. CARL VON CLAUSEWITZ
  {
    id: 'clausewitz-on-war',
    number: 2,
    titleUz: 'G‘alaba va mag‘lubiyat kitobi',
    titleOriginal: 'Vom Kriege (On War)',
    author: 'Karl fon Klauzevits (Carl von Clausewitz)',
    category: 'strategy',
    categoryUz: 'Asimmetrik va Harbiy Strategiya',
    yearPublished: '1832-yil',
    coreDoctrine: 'Urush — siyosatning boshqa (zo‘ravonlik) vositalar bilan davomidir. Jang maydonida mutlaq aniqlik bo‘lmaydi; har doim «Urush tumani» (Fog of War) va «Ishqalanish» (Friction) qarorlarni qiyinlashtiradi. Yagona najot — Schwerpunkt (og‘irlik markazi)ga zarba berish.',
    mathematicalFormulaOrLaw: {
      name: 'Schwerpunkt & Ishqalanish Qonuni',
      formula: 'Haqiqiy Quvvat = Nazariy Quvvat - Friction (Ishqalanish)',
      description: 'Eng oddiy harakat ham urushda ulkan qarshilikka uchraydi. Shuning uchun barcha kuchlarni mayda maqsadlarga sochmasdan, faqat bitta markaziy nuqtaga (Center of Gravity — CoG) to‘plash talab etiladi.'
    },
    keyAxioms: [
      'Urushda hamma narsa juda oddiy, lekin eng oddiy narsa nihoyatda qiyin kechadi.',
      'Dushmanning butun kuchi bog‘langan yagona nuqtani (Schwerpunkt) toping va bor zarbani o‘sha yerga yo‘naltiring.',
      'Noaniqlik sharoitida faqat intellektual qat’iyat (Coup d’œil — bir qarashda vaziyatni ilg‘ash) ustunlik beradi.'
    ],
    intjApplication: 'INTJ-T rejalashtirishda ideallikka berilmasligi kerak. Real dunyoda har doim ishqalanish (friction) bo‘ladi. Rejaga kamida 25% zaxira kiritish va doimo raqibning tizimli og‘irlik markazini qidirish.',
    height198cmApplication: 'Fizik to‘qnashuvda uzun gavda inersiyasini yagona kinetik o‘qqa (core & hips) jamlash. Tana massasi va richagni tarqoq emas, bitta bo‘g‘inga (Schwerpunkt) yo‘naltirish.',
    practicalDrill: {
      title: 'Schwerpunkt (Og‘irlik Markazini Aniqlash) Mashqi',
      targetBenchmark: 'Muammoni 80% hal qiluvchi 20% markaziy tugunni topish',
      phasePreparation: [
        'Vaziyatdagi barcha ikkinchi darajali detallarni o‘chirib tashlang.',
        '«Agar dushmanning qaysi bitta elementi yo‘q qilinsa, butun tizimi qulaydi?» degan savolga javob bering.'
      ],
      phaseExecution: [
        'Ikkinchi darajali frontlarga resurs ajratishni to‘xtating.',
        'Barcha energiyani topilgan yagona Schwerpunktga yo‘naltiring.'
      ],
      phaseSafety: [
        'O‘z orqa ta’minotingizni (supply line) himoyasiz qoldirmang.'
      ],
      frequency: 'Haftalik strategik tahlil vaqtida.'
    },
    authenticQuotes: [
      { text: 'Urush — bu boshqa vositalar yordamida siyosatning davomidir.', context: '1-kitob, 1-bob' },
      { text: 'Urushdagi uchdan ikki qism ma’lumot noaniq yoki butunlay yolg‘ondir.', context: 'Urush tumani nazariyasi' }
    ]
  },

  // 3. NICCOLO MACHIAVELLI
  {
    id: 'machiavelli-the-prince',
    number: 3,
    titleUz: 'Davlat',
    titleOriginal: 'Il Principe (The Prince)',
    author: 'Nikolo Makiavelli (Niccolò Machiavelli)',
    category: 'strategy',
    categoryUz: 'Asimmetrik va Harbiy Strategiya',
    yearPublished: '1532-yil',
    coreDoctrine: 'Qarorlar odamlar qanday yashashi kerakligi haqidagi illyuziyalarga emas, ular amalda qanday yashayotganiga asoslanishi shart. Rahbar bir vaqtning o‘zida ham sher (qudrat), ham tulki (tuzoqlarni ilg‘ovchi ayyorlik) bo‘lishi lozim.',
    mathematicalFormulaOrLaw: {
      name: 'Virtù va Fortuna Muvozanati',
      formula: 'Natija = Virtù (Sovuqqon Mahorat) × Fortuna (Imkoniyat)',
      description: 'Fortuna — toshqin daryo kabi vayron qiluvchi omil, ammo kuchli iroda va sovuqqon tahlil (Virtù) daryo toshishidan oldin to‘g‘onlar qurib, uni boshqara oladi.'
    },
    keyAxioms: [
      'Insonlarga yo yaxshilik qilish kerak, yo ularni butunlay yakson qilish kerak; chunki kichik zararlar uchun ular qasd oladilar, katta zararlar oldida esa ojiz qoladilar.',
      'Sevilgandan ko‘ra qo‘rqilgan yaxshiroq, agar ikkalasiga bir vaqtda erishib bo‘lmasa.',
      'Yaxshi niyatli bo‘lishga intilgan odam, yovuzlar orasida muqarrar halokatga uchraydi.'
    ],
    intjApplication: 'Naiv va xayoliy optimizmdan xalos bo‘lish. Odamlarning so‘zlariga emas, ularning shaxsiy manfaatlariga qarab tizim qurish. Hissiy bog‘lanishlardan holi bo‘lgan qat’iyat.',
    height198cmApplication: 'Vizual psixologik ustunlik: 198 sm bo‘y tabiiy ravishda atrofdagilarda haybat (awe/intimidation) uyg‘otadi. Makiavellicha xulq-atvor: bu balandlikni baland ovoz bilan emas, qattiq jimlik va sovuqqon nigoh bilan qurolga aylantirish.',
    practicalDrill: {
      title: 'Sher va Tulki Dual Auditi',
      targetBenchmark: 'Vaziyatda kuch ishlatish va kutilmagan hiyla balansini to‘g‘ri taqsimlash',
      phasePreparation: [
        'Ziddiyatda qarshi tomonning qaysi tuzog‘iga (bo‘ri/qopqon) tushishingiz mumkinligini yozing.'
      ],
      phaseExecution: [
        'Tulki rejimi: Qopqonni aylanib o‘tish va qarshi hiyla tayyorlash.',
        'Sher rejimi: Qaror qabul qilingach, ikkilanmasdan qat’iy va sovuqqon ijro.'
      ],
      phaseSafety: [
        'Keraksiz shafqatsizlik qilmang; bu nafrat uyg‘otadi va o‘zingizga qarshi ittifoq yaratadi.'
      ],
      frequency: 'Muhim biznes va raqobatli muloqotlar oldidan.'
    },
    authenticQuotes: [
      { text: 'Tuzoqlarni ilg‘ash uchun tulki, bo‘rilarni qo‘rqitish uchun esa sher bo‘lish lozim.', context: '18-bob: Hukmdorlar o‘z so‘zida qanday turishi kerak' }
    ]
  },

  // 4. ROBERT GREENE
  {
    id: 'robert-greene-33-strategies',
    number: 4,
    titleUz: '33 ta urush strategiyasi',
    titleOriginal: 'The 33 Strategies of War',
    author: 'Robert Grin (Robert Greene)',
    category: 'strategy',
    categoryUz: 'Asimmetrik va Harbiy Strategiya',
    yearPublished: '2006-yil',
    coreDoctrine: 'Zamonaviy dunyoda urush to‘xtagan emas, u ijtimoiy, psixologik va biznes sohalariga ko‘chgan. Strategik tafakkur — o‘z xatolaringizdan kelib chiqib o‘tmish bilan yashashni to‘xtatish va vaziyatga moslashuvchan bo‘lishdir.',
    mathematicalFormulaOrLaw: {
      name: 'Death Ground (Chekinish Yo‘li Qolmagan Maydon) Qonuni',
      formula: 'Maksimal Quvvat = Adrenalin × 0 Chekinish Imkoniyati',
      description: 'Orqada qochish yo‘li bor ekan, inson miyasi o‘z salohiyatining faqat 30-40% ini sarflaydi. Barcha kemalarni yoqib, orqaga yo‘lni kesish organizmning 100% zaxiralarini ochadi.'
    },
    keyAxioms: [
      'O‘tmishdagi oxirgi urush usullari bilan bugungi jangni olib borma (The Polarity Strategy).',
      'Raqibning aqlini sarosimaga sol: uning kutilgan ritmini sindir (Guerilla-War-of-the-Mind).',
      'Markazni emas, zaif qismlarni birma-bir ajratib olib yo‘q qil (Divide and Conquer).'
    ],
    intjApplication: 'INTJ-T ning o‘z rejasiga qattiq bog‘lanib qolish xavfini yo‘qotish. Qat’iy maqsad, ammo o‘ta moslashuvchan vositalar bilan harakat qilish.',
    height198cmApplication: 'Taktik harakatlarda o‘zini katta nishon sifatida ko‘rsatmaslik. Katta jismoniy o‘lchamni kutilmagan tezkor manevrlar bilan uyg‘unlashtirish.',
    practicalDrill: {
      title: 'Death Ground Psixologik Sun’iy Chegara Mashqi',
      targetBenchmark: 'Erta tongdan kechgacha ikkilanish va chalg‘ishni 0 ga tushirish',
      phasePreparation: [
        'Barcha qulay chekinish yo‘llarini (ijtimoiy tarmoqlar, dam olish illyuziyalari) o‘chirib qo‘ying.'
      ],
      phaseExecution: [
        'Vazifani bajarishdan boshqa hech qanday tirik qolish varianti yo‘qligini miyaga buyruq qilib bering.',
        'Muddatni 50% ga qisqartirib, o‘zingizni sun’iy ekstremal holatga soling.'
      ],
      phaseSafety: [
        'Surunkali asab charchashining oldini olish uchun mashqdan keyin qat’iy tiklanish uyqusi zarur.'
      ],
      frequency: 'Haftada 1 marta kritik topshiriqlar uchun.'
    },
    authenticQuotes: [
      { text: 'Odamlar orqaga chekinish yo‘li yo‘qligini bilgandagina bor kuchlari bilan kurashadilar.', context: '4-strategiya: O‘lim maydoni' }
    ]
  },

  // 5. STEVEN LOW - OVERCOMING GRAVITY
  {
    id: 'steven-low-overcoming-gravity',
    number: 5,
    titleUz: 'Gravitatsiyani yengish: Kalistenika ilmi',
    titleOriginal: 'Overcoming Gravity: A Systematic Approach to Gymnastics and Bodyweight Strength',
    author: 'Stiven Lou (Steven Low)',
    category: 'physical',
    categoryUz: 'Elita Jismoniy Tayyorgarlik va Tana Boshqaruvi',
    yearPublished: '2016-yil (2-nashr)',
    coreDoctrine: 'O‘z tana vaznini boshqarish — bu sof biomexanika, richag qonunlari va neyromushak adaptatsiyasidir. Bo‘g‘im va paylar mushaklarga qaraganda 4–5 barobar sekinroq tiklanadi.',
    mathematicalFormulaOrLaw: {
      name: 'Suyak Richagi Aylanma Momenti (Torque)',
      formula: 'τ = F · r · sin(θ)',
      description: '198 sm bo‘yli atletda qo‘l va oyoq uzunligi (r) 175 sm odamnikidan 20–28% uzun. Binobarin, yelka va tirsak bo‘g‘imlariga tushadigan aylanma moment (τ) 1.25x dan yuqori. Shuning uchun kalistenikada Scapular Depression (kuraklarni pastga tortish) va to‘g‘ri qo‘l kuchi (Straight Arm Strength) jarohatlarning yagona qalqonidir.'
    },
    keyAxioms: [
      'Mushak gipertrofiyasi 3–4 haftada sezilsa, qon tomirlari kam bo‘lgan paylar (tendons) adaptatsiyasi 6–9 oy talab qiladi.',
      'Progressiv ortiqcha yuklama (Progressive Overload) og‘irlik qo‘shish orqali emas, balki richag burchagini qiyinlashtirish orqali amalga oshiriladi (Lever disadvantage).',
      'Kuraklar (Scapula) fiksatsiyasi bo‘lmasa, tana vaznidagi mashqlar yelka bo‘g‘imini yemiradi.'
    ],
    intjApplication: 'Mashg‘ulotlarga emotsional emas, muhandislik chizmasi sifatida qarash. Har bir mashqning burchagi va yuklama vektorini tahlil qilib, jarohatlanish xavfini matematik jihatdan nolga tushirish.',
    height198cmApplication: 'Turnikda tortilishda (Pull-ups) harakat amplitudasi juda katta bo‘ladi. Tortilish fazasida kuraklarni oldin qulflash (Scapular pull-up) va gavdani L-sit holatida ushlab, oyoqlarning tebranish inersiyasini to‘xtatish.',
    practicalDrill: {
      title: '198cm Scapular Depression & L-Sit Pull-up Protokoli',
      targetBenchmark: '28 ta toza takrorlash (Maqsad: 40 ta)',
      phasePreparation: [
        'Turnikka osilib, tirsaklarni bukmagan holda faqat kuraklarni 15 marta pastga bosing (Scapular pull-ups).',
        'Bilak bo‘g‘imlarini 3 daqiqa davomida aylantirib qizdiring.'
      ],
      phaseExecution: [
        'Oyoqlarni oldinga 45 darajaga chiqaring (inersiyani so‘ndirish uchun).',
        'Ko‘krakni turnikka tekkuncha portlash tezligida torting (1 soniya ko‘tarilish, 2 soniya tushish).'
      ],
      phaseSafety: [
        'Tirsaklarni harakat tubida to‘liq ochib tashlamang (1-2 daraja mikro-bukilish payni asraydi).'
      ],
      frequency: 'Haftada 2 marta (Dushanba, Payshanba).'
    },
    authenticQuotes: [
      { text: 'Kuch — bu mushak hajmi emas, nerv tizimining motor birliklarini bir vaqtda jalb qila olish qobiliyatidir.', context: 'Neyromushak kuchi bobi' }
    ]
  },

  // 6. MARK RIPPETOE - STARTING STRENGTH
  {
    id: 'mark-rippetoe-starting-strength',
    number: 6,
    titleUz: 'Boshlang‘ich kuch: Shtanga biomexanikasi',
    titleOriginal: 'Starting Strength: Basic Barbell Training',
    author: 'Mark Rippeto (Mark Rippetoe)',
    category: 'physical',
    categoryUz: 'Elita Jismoniy Tayyorgarlik va Tana Boshqaruvi',
    yearPublished: '2011-yil (3-nashr)',
    coreDoctrine: 'Shtanga — inson tanasining gravitatsiyaga qarshi eng samarali vositasi. Har qanday og‘irlik pol yuzasidan markaziy oyoq panjasi (mid-foot) chizig‘i bo‘ylab to‘g‘ri vertikal harakatlanishi shart.',
    mathematicalFormulaOrLaw: {
      name: 'Uzun Son Suyagi (Long Femur) Moment Qo‘li Qonuni',
      formula: 'Umurtqa Bosimi = Shtanga Og‘irligi × Gorizontal Masofa (Mid-Foot dan)',
      description: '198 sm bo‘yli kishida son suyagi juda uzun bo‘lgani sababli, an’anaviy o‘tirishda (squat) tana oldinga haddan tashqari egiladi. Deadliftda esa chanoq baland (high hips) turishi va shtanga boldirga yopishgan holda ko‘tarilishi orqali gorizontal moment qo‘li nolga keltirilishi kerak.'
    },
    keyAxioms: [
      'Shtanga traektoriyasi vertikaldan 1 sm og‘isa ham, keraksiz burovchi kuch paydo bo‘lib, umurtqaga yuklama ortadi.',
      'Valsalva nafasi (Valsalva Maneuver): qorin ichi bosimini oshirmay og‘ir vazn ko‘tarish — umurtqa churrasiga (grija) olib keladi.',
      'Oyoq panjasining to‘liq markazi (Mid-foot) — barcha og‘irlik ko‘tarishning muvozanat tayanchidir.'
    ],
    intjApplication: 'Harakatni geometrik model sifatida ko‘rish: suyaklar — richaglar, bo‘g‘imlar — tayanch nuqtalari, mushaklar — tortuvchi kuchlar.',
    height198cmApplication: 'Deadliftda Semi-Sumo yoki keng oyoq qo‘yish pozitsiyasini tanlash. 198 sm bo‘yda baland chanoq va to‘g‘ri umurtqa zanjiri (latissimus dorsi qulflanishi) orqali 175 kg dan 220 kg gacha xavfsiz o‘sish.',
    practicalDrill: {
      title: 'Long-Femur Deadlift Protokoli (198cm Arxitekturasi)',
      targetBenchmark: '175 kg (Joriy) $\to$ 220 kg (2X Elita)',
      phasePreparation: [
        'Shtanga oldiga keling: boldir shtangadan roppa-rosa 2.5 sm masofada bo‘lsin.',
        'Valsalva nafasi: o‘pkaga havo to‘ldirib, diafragmani qorin devoriga qattiq qulflang.'
      ],
      phaseExecution: [
        'Chanoqni haddan ortiq pastga tushirmang; baland chanoq holatida boldir shtangaga tegsin.',
        'Shtangani vertikal ravishda boldir va son bo‘ylab yuqoriga suring (polni itarish hissi bilan).'
      ],
      phaseSafety: [
        'Boshni orqaga tashlamang, bo‘yin umurtqa bilan bir to‘g‘ri chiziqda qolishi shart.'
      ],
      frequency: 'Haftada 1 marta (Seshanba).'
    },
    authenticQuotes: [
      { text: 'Kuchli odamlar bilan yashash qiyinroq, lekin ular o‘lishi qiyinroq va umuman olganda foydaliroqdir.', context: 'Kirish qismi' }
    ]
  },

  // 7. K. BLACK - TACTICAL BARBELL
  {
    id: 'k-black-tactical-barbell',
    number: 7,
    titleUz: 'Taktik shtanga: Harbiy kuch va konditsiya',
    titleOriginal: 'Tactical Barbell: Definitive Strength for Operational Athletes',
    author: 'K. Blek (K. Black)',
    category: 'physical',
    categoryUz: 'Elita Jismoniy Tayyorgarlik va Tana Boshqaruvi',
    yearPublished: '2016-yil',
    coreDoctrine: 'Operatsion jangchi bodibilder emas. U bir vaqtning o‘zida ham 200 kg deadlift ko‘tara olishi, ham 40 kg ryukzak bilan 15 km chopishi kerak. Bunga «Operator» va «Green Protocol» davriylashtirish to‘lqini orqali erishiladi.',
    mathematicalFormulaOrLaw: {
      name: 'Konditsiya va Maksimal Kuch Interferentsiya Qonuni',
      formula: 'Optimal Rivojlanish = Kuch Bloklari (75-85% 1RM) + Zone 2 Aerobik Baza',
      description: 'Agar kardio mashg‘ulotlar laktat chegarasidan (Zone 3-4) yuqori bo‘lsa, u kuch o‘sishini to‘xtatadi. Shuning uchun harbiy rucking qat’iy Zone 2 (yurak urishi 130–140 BPM) da bo‘lishi lozim.'
    },
    keyAxioms: [
      'Charchoqqa qadar (Failure) mashq qilish operatsion jangchi uchun qat’iyan man etiladi; zaxirada doim 1-2 takror qolishi shart.',
      'Kuch — bu barcha boshqa jismoniy sifatlarning onasidir.',
      'Ryukzak bilan marsh (Rucking) — jangovar chidamlilikning mutlaq sinovidir.'
    ],
    intjApplication: 'Haftalik grafikni matematik aniqlik bilan taqsimlash. Keraksiz mashqlarni olib tashlab, faqat 3 ta asosiy harakatga (Squat/Deadlift, Bench/Press, Weighted Pull-up) fokuslanish.',
    height198cmApplication: '198 sm atlet uchun uzun qadam (stride length) — marshdagi ustunlik. Ammo ryukzak og‘irligi bel umurtqasiga tushmasligi uchun keng kamarli taktik ryukzak va mustahkam qorin mushaklari zarur.',
    practicalDrill: {
      title: 'Harbiy Rucking (30kg) Tezkor Marsh Protokoli',
      targetBenchmark: '30 kg yuk bilan 10 km (Tezlik: 8.5–9.0 min/km)',
      phasePreparation: [
        'Og‘irlikni ryukzakning eng yuqori qismiga, kuraklar orasiga joylashtiring.',
        'Oyoq paylarini va tovonni qalin paypoq va taktik botiq bilan himoyalang.'
      ],
      phaseExecution: [
        'Yugurmang; tezkor, uzun va qat’iy qadam bilan yuring (Power Walk).',
        'Nafasni burun orqali ushlab, yurak urishini 135–145 BPM oralig‘ida saqlang.'
      ],
      phaseSafety: [
        'Gavdani haddan tashqari oldinga egmang, qorinni tarang ushlang.'
      ],
      frequency: 'Haftada 1 marta (Payshanba yoki Shanba).'
    },
    authenticQuotes: [
      { text: 'Jang maydonida siz o‘z ambitsiyalaringiz darajasiga ko‘tarilmaysiz, tayyorgarligingiz darajasiga qulaysiz.', context: 'Davriylashtirish asoslari' }
    ]
  },

  // 8. CHRISTOPHER SOMMER - BUILDING THE GYMNASTIC BODY
  {
    id: 'christopher-sommer-gymnastic-body',
    number: 8,
    titleUz: 'Gimnastik tanani qurish',
    titleOriginal: 'Building the Gymnastic Body: The Science of Gymnastics Strength Training',
    author: 'Kristofer Sommer (Christopher Sommer)',
    category: 'physical',
    categoryUz: 'Elita Jismoniy Tayyorgarlik va Tana Boshqaruvi',
    yearPublished: '2008-yil',
    coreDoctrine: 'Gimnastlarning g‘ayritabiiy kuchi gantel ko‘tarishdan emas, balki to‘g‘ri qo‘l kuchi (Straight Arm Strength — SAS) va bo‘g‘imlarning mutlaq izometrik chidamliligidan kelib chiqadi.',
    mathematicalFormulaOrLaw: {
      name: 'Biceps Tendon & Scapular Lockout Qonuni',
      formula: 'Bog‘lam Mustahkamligi = Yuklama Vaqti (Time Under Tension) × 180° Bo‘g‘im Qulflanishi',
      description: 'Bukilgan qo‘l bilan mashq qilish faqat mushakni ishlatadi. To‘g‘ri qo‘l (Ring Support, Iron Cross progressiyalari) butun og‘irlikni pay va bog‘lamlarga yuklaydi, bu esa uzoq muddatda sinmas bo‘g‘im zirhini yaratadi.'
    },
    keyAxioms: [
      'Hech qachon paylaringiz tayyor bo‘lmasdan ilg‘or gimnastik elementlarga o‘tmang.',
      'Harakatdagi sustkashlik — jarohatning boshlanishi.',
      'Yadro (Core) kuchi — bu shunchaki matbuot (press) emas, bu tos va ko‘krak qafasining yaxlit monolitga aylanishidir.'
    ],
    intjApplication: 'O‘z taraqqiyotingizni haftalab emas, oylab o‘lchash intizomi. Paylarni mustahkamlashdagi zerikarli, ammo fundamental bazani tashlab ketmaslik.',
    height198cmApplication: '198 sm bo‘yda Planch yoki Iron Cross qilish juda katta richag yuklamasini beradi. Buni tirsaklarni mustahkamlovchi German Hang va Ring Support Hold mashqlari bilan balanslash.',
    practicalDrill: {
      title: 'German Hang & Straight Arm Paylarni Mustahkamlash',
      targetBenchmark: '60 soniya to‘liq German Hang statik ushlab turish',
      phasePreparation: [
        'Yelkalarni to‘liq qizdiring; turnikda pastga tushing.',
        'Oyoqlarni qorin orqali orqaga o‘tkazib, teskari osilish holatiga o‘ting.'
      ],
      phaseExecution: [
        'Qo‘llarni to‘liq to‘g‘ri holatda ushlab, yelka paylarining cho‘zilishini nazorat qiling.',
        'Chuqur nafas oling (har doim boshqariladigan zo‘riqish).'
      ],
      phaseSafety: [
        'Bo‘g‘imda o‘tkir og‘riq sezilsa, darhol oyoqlarni erga qo‘ying.'
      ],
      frequency: 'Haftada 2 marta har bir mashg‘ulot oxirida.'
    },
    authenticQuotes: [
      { text: 'Kattalar sabrsiz bo‘lishadi, shuning uchun jarohat oladilar. Bolalar kabi poydevorni noldan quring.', context: 'Bo‘g‘imlar tayyorgarligi' }
    ]
  },

  // 9. PATRICK VAN HORNE - LEFT OF BANG
  {
    id: 'left-of-bang',
    number: 9,
    titleUz: 'Zarbadan chapda: Xavfni oldindan ilg‘ash',
    titleOriginal: 'Left of Bang: How the Marine Corps’ Combat Hunter Program Saves Lives',
    author: 'Patrik Van Xorst, Jeyson Makdeniell (Patrick Van Horne, Jason A. Riley)',
    category: 'combat',
    categoryUz: 'Ekstremal Jangovar Fiziologiya va Taktik Qarorlar',
    yearPublished: '2014-yil',
    coreDoctrine: 'Vaqt shkalasida «BANG» — bu portlash, hujum yoki fojia onidir. Agar siz BANG dan o‘ngda («Right of Bang») bo‘lsangiz, siz faqat oqibatlarga javob qaytarayotgan bo‘lasiz. Haqiqiy omon qolish — «Left of Bang» (zarbadan chapda) bo‘lish, ya’ni xavf yuz bermasidan oldin anomaliyalarni ilg‘ashdir.',
    mathematicalFormulaOrLaw: {
      name: 'Kinezik Profilaktika Qonuni',
      formula: 'Left of Bang = Baseline (Norma) - Anomaliya',
      description: 'Atrof-muhitning odatiy holati (Baseline)ni aniqlang. Normadan chetga chiqqan har qanday harakat (Anomaliya) — e’tibor yoki zarba signali hisoblanadi.'
    },
    keyAxioms: [
      'Xavfni sezish shaxsiy intuitsiya emas, bu aniq xulq-atvor indikatorlarini (kinezika, proksemika, biometrika) o‘qishdir.',
      'Qarorsizlik — o‘limdan yomon. «Left of Bang»da noto‘g‘riroq, ammo tezkor qaror kech qolgan ideal qarordan ustundir.',
      'Odamlar o‘z niyatlarini jismoniy mikro-harakatlar (yashirin qurolni tekshirish, nigohni olib qochish) orqali fosh qiladilar.'
    ],
    intjApplication: 'INTJ-T ning tabiiy analizatorlik qobiliyatini atrofdagi odamlar va tizimlarning bazaviy fonini (Baseline) doimiy skanerlashga yo‘naltirish.',
    height198cmApplication: 'Baland bo‘y sababli ko‘rish burchagi barchadan yuqori. Atrofdagi olomonni tepadan skanerlash va 10–15 metr masofadan xavf belgilarini erta aniqlash imkoniyati.',
    practicalDrill: {
      title: 'Baseline & Anomaliya 360° Skanerlash Mashqi',
      targetBenchmark: 'Har qanday jamoat joyida 3 ta anomaliyani 60 soniyada topish',
      phasePreparation: [
        'Xonaga yoki ko‘chaga kirganda birinchi 10 soniyada chiqish yo‘llarini belgilang.'
      ],
      phaseExecution: [
        'Atrofdagilarning odatiy harakat ritmini (Baseline) ilg‘ang.',
        'Atrofga mos kelmaydigan, haddan tashqari asabiy yoki diqqat bilan kuzatayotgan odamni (Anomaliya) aniqlang.'
      ],
      phaseSafety: [
        'O‘zingizni shubha uyg‘otadigan tarzda tutmang, beparvo kuzatuvchi bo‘lib qoling.'
      ],
      frequency: 'Har kuni ko‘chada yoki jamoat joylarida 1 marta.'
    },
    authenticQuotes: [
      { text: 'Agar siz hujum boshlangandan keyingina harakat qilsangiz, siz allaqachon kechikdingiz.', context: '1-bob: Xronologiya' }
    ]
  },

  // 10. DAVE GROSSMAN - ON COMBAT
  {
    id: 'dave-grossman-on-combat',
    number: 10,
    titleUz: 'Jang haqida: Jangovar stress psixologiyasi',
    titleOriginal: 'On Combat: The Psychology and Physiology of Deadly Conflict',
    author: 'Deyv Grossman (Dave Grossman)',
    category: 'combat',
    categoryUz: 'Ekstremal Jangovar Fiziologiya va Taktik Qarorlar',
    yearPublished: '2004-yil',
    coreDoctrine: 'Haqiqiy jangda insonni jismoniy dushman emas, uning o‘z simpatik asab tizimi va yurak urish tezligi falaj qiladi. Puls nazoratdan chiqsa, miyaning mantiqiy qismi (prefrontal korteks) butunlay o‘chadi.',
    mathematicalFormulaOrLaw: {
      name: 'Grossman Taktik Puls Zonasi Qonuni',
      formula: 'Optimal Jangovar Zona = 115 — 145 BPM',
      description: '60-80 BPM: Oq (Tinch). 80-115 BPM: Sariq (Hushyorlik). 115-145 BPM: Yashil (Optimal — reaksiya eng yuqori, mayda motorika saqlanadi). 145-175 BPM: Qizil (Mayda motorika yo‘qoladi, faqat qo‘pol kuch qoladi). 175+ BPM: Qora (Tunnel ko‘rish, eshitish falaji, mantiqiy fikrlashning to‘liq o‘chishi).'
    },
    keyAxioms: [
      'Stress ostida inson o‘z qobiliyati darajasiga ko‘tarilmaydi, o‘zining avtomatik odatlari darajasiga tushadi.',
      'Taktik nafas olish (Tactical Breathing / Box Breathing) — simpatik bo‘rondan parasimpatik xotirjamlikka o‘tishning yagona fiziologik kalitidir.',
      'Jangdan keyingi kognitiv tiklanish uyqu va emotsional tozalanishsiz mumkin emas.'
    ],
    intjApplication: 'INTJ-T stress paytida aqliy tahlilni yo‘qotmasligi uchun puls 145 BPM dan oshmasligini nazorat qilishi va jismoniy charchoqda nafas orqali yurak urishini tushirishni o‘rganishi shart.',
    height198cmApplication: 'Katta tana massasi va uzun qon aylanish tizimi stress ostida yurakka ko‘proq yuk beradi. Taktik quti nafasi katta gavdali odamda qon bosimini 60 soniyada normallashtiradi.',
    practicalDrill: {
      title: 'Taktik Quti Nafasi (Box Breathing 4-4-4-4)',
      targetBenchmark: 'Pulsni 160 BPM dan 125 BPM gacha 90 soniyada tushirish',
      phasePreparation: [
        'Gavdani tik tuting, yelkalarni bo‘shashtiring.'
      ],
      phaseExecution: [
        '4 soniya burun orqali chuqur nafas oling (qorin shishsin).',
        '4 soniya nafasni to‘xtatib turing.',
        '4 soniya og‘izdan sekin havoni chiqaring.',
        '4 soniya o‘pka bo‘sh holatida kuting. (Jami 4 tsikl takrorlang).'
      ],
      phaseSafety: [
        'Bosh aylanishi kuzatilsa, o‘tirgan holatda bajaring.'
      ],
      frequency: 'Har kuni ertalab va har qanday stressli vaziyatda darhol.'
    },
    authenticQuotes: [
      { text: 'Nafas — bu avtonom nerv tizimiga irodaviy ta’sir ko‘rsatish mumkin bo‘lgan yagona eshikdir.', context: '4-bo‘lim: Fiziologik nazorat' }
    ]
  },

  // 11. JOHN BOYD - OODA LOOP
  {
    id: 'john-boyd-ooda-loop',
    number: 11,
    titleUz: 'Boyd: Urush san’atini o‘zgartirgan uchuvchi',
    titleOriginal: 'Boyd: The Fighter Pilot Who Changed the Art of War',
    author: 'Robert Koram (Robert Coram) / Jon Boyd (John Boyd)',
    category: 'combat',
    categoryUz: 'Ekstremal Jangovar Fiziologiya va Taktik Qarorlar',
    yearPublished: '2002-yil',
    coreDoctrine: 'Jang maydonida kim raqibdan tezroq qaror qabul qilsa va uni kutilmagan vaziyatga solsa, o‘sha g‘alaba qozonadi. OODA sikli: Observe (Kuzatish) $\to$ Orient (Yo‘nalish olish) $\to$ Decide (Qaror qabul qilish) $\to$ Act (Harakat qilish).',
    mathematicalFormulaOrLaw: {
      name: 'OODA Sikli Tezlik Differensiali',
      formula: 'Δt(Boyd) < Δt(Raqib)',
      description: 'Agar siz o‘z OODA siklingizni raqib siklining ichiga joylashtira olsangiz (inside their loop), raqib hali oldingi harakatingizga javob berishga ulgurmasdan yangi voqelikka duch keladi va uning ongi falaj bo‘ladi.'
    },
    keyAxioms: [
      'Orientatsiya (Orient) — butun siklning yuragidir. Sizning genetikangiz, tajribangiz va yangi ma’lumotlar voqelikni qanday idrok qilishingizni belgilaydi.',
      'Statik mudofaa — o‘lim. Omon qolish faqat tezkor harakatchanlik (tempo) orqali ta’minlanadi.',
      'Dushmanga qarshi to‘g‘ridan-to‘g‘ri kurashma; uning OODA siklini chalkashtirib, o‘z-o‘zini yo‘q qilishiga olib kel.'
    ],
    intjApplication: 'INTJ-T ning kuchli tomoni — keng ko‘lamli ma’lumotlarni bir soniyada tahlil qilib, Orientatsiya fazasini raqiblardan 3 barobar tezroq yakunlashidir.',
    height198cmApplication: 'Baland bo‘yli jangchining harakati sekinroq ko‘rinishi mumkin, ammo kognitiv OODA sikli tez bo‘lsa, raqib zarba berishga qaror qilgunicha siz allaqachon qarshi zarbani berib bo‘lasiz.',
    practicalDrill: {
      title: 'OODA Siklini Tezlashtirish va Ritm Buzish Mashqi',
      targetBenchmark: 'Kutilmagan o‘zgarishga 1 soniya ichida yangi harakat bilan javob berish',
      phasePreparation: [
        'Oddiy mashg‘ulotda yoki ishda odatiy tartibni belgilang.'
      ],
      phaseExecution: [
        'Tasodifiy taymer signali chalinganda, darhol joriy vazifani to‘xtatib, boshqa yo‘nalishga 180 daraja buriling.',
        'Qaror qabul qilish vaqtini sekundomer bilan o‘lchang.'
      ],
      phaseSafety: [
        'Shoshqaloqlik bilan xato qaror qabul qilmaslik uchun Orientatsiya fazasiga diqqat qiling.'
      ],
      frequency: 'Haftada 3 marta Dual N-Back mashqlaridan keyin.'
    },
    authenticQuotes: [
      { text: 'Raqibingizning aqlini chalkashtiring, shunda uning kuchi unga qarshi ishlaydi.', context: 'Boyd doktrinasi' }
    ]
  },

  // 12. DAVID GOGGINS - CAN'T HURT ME
  {
    id: 'david-goggins-cant-hurt-me',
    number: 12,
    titleUz: 'Meni sindirib bo‘lmaydi',
    titleOriginal: 'Can’t Hurt Me: Master Your Mind and Defy the Odds',
    author: 'Devid Goggins (David Goggins)',
    category: 'stoic',
    categoryUz: 'Aqliy Sovuqqonlik va Stoik Matonat',
    yearPublished: '2018-yil',
    coreDoctrine: 'Inson miyasi azob va noqulaylikdan qochish uchun himoya mexanizmiga ega. Miya «bo‘ldi, kuchim qolmadi» deb baqirganda, siz aslida o‘z jismoniy va ruhiy salohiyatingizning faqat 40% ini ishlatgan bo‘lasiz.',
    mathematicalFormulaOrLaw: {
      name: '40% Neyrobiologik Gubernator Qoidasi',
      formula: 'Haqiqiy Quvvat = His qilingan Quvvat (40%) + Zaxira (60%)',
      description: 'Miya tana halokatga uchramasligi uchun charchoq signalini erta yoqadi. Agar bu kognitiv to‘siqni yorib o‘tsangiz, yashirin 60% biologik energiya ochiladi.'
    },
    keyAxioms: [
      'Accountability Mirror (Hisobot Ko‘zgusi): Har kuni ko‘zguga qarab o‘zingizga achchiq haqiqatni ayting; o‘zingizni aldamang.',
      'The Cookie Jar (Pechenye Bankasi): O‘tmishda yengib o‘tgan barcha og‘ir sinovlaringiz ro‘yxatini miyada saqlang va kritik daqiqada o‘sha xotiralarni eslab quvvat oling.',
      'Taking Souls (Ruhni Olish): Raqibingiz sizning taslim bo‘lishingizni kutayotgan paytda, tabassum qilib yana bitta qadam qo‘shing.'
    ],
    intjApplication: 'INTJ-T intellektual qulaylik zonasiga o‘rganib qolmasligi shart. Jismoniy azob va charchoq — aqliy takabburlikni sindirish va qat’iyatni toshdek qilishning eng toza yo‘lidir.',
    height198cmApplication: 'Uzun bo‘y bilan yugurish va og‘ir mashqlar ko‘proq og‘riq beradi. 40% qoidasi aynan oxirgi kilometrda, tana to‘xtashni talab qilganda ishga tushadi.',
    practicalDrill: {
      title: 'The 40% Governor Breaker Mashg‘uloti',
      targetBenchmark: 'Miya «to‘xta» degan ondan keyin yana 5 ta takror yoki 1 km yugurish',
      phasePreparation: [
        'O‘tmishdagi eng og‘ir 3 ta g‘alabangizni xotirlang (Cookie Jar).'
      ],
      phaseExecution: [
        'Mashg‘ulotda (turnik, brus yoki yugurish) to‘xtash istagi kelgan soniyada to‘xtamang.',
        'Ichki ovozni o‘chiring va qat’iy ravishda rejalashtirilgan ortiqcha yuklamani bajaring.'
      ],
      phaseSafety: [
        'Mushak yirtilishi yoki o‘tkir jarohatni oddiy charchoqdan farqlay biling.'
      ],
      frequency: 'Haftada 1 marta og‘ir mashg‘ulot kunida.'
    },
    authenticQuotes: [
      { text: 'Siz o‘ylaganingizdan 100 barobar kuchliroqsiz, lekin buni bilish uchun noqulaylikka yuzlanishingiz kerak.', context: '40% qoidasi' }
    ]
  },

  // 13. MARCUS AURELIUS - MEDITATIONS
  {
    id: 'marcus-aurelius-meditations',
    number: 13,
    titleUz: 'Mulohazalar',
    titleOriginal: 'Meditations (Τὰ εἰς ἑαυτόν)',
    author: 'Mark Avreliy (Marcus Aurelius)',
    category: 'stoic',
    categoryUz: 'Aqliy Sovuqqonlik va Stoik Matonat',
    yearPublished: 'Milodiy 180-yil',
    coreDoctrine: 'Siz tashqi voqealarni nazorat qila olmaysiz, ammo o‘sha voqealarga nisbatan o‘z munosabatingizni 100% nazorat qila olasiz. Shovqin-suronli dunyoda yagona tinchlik — bu insonning o‘z ichki sovuqqon idrokidir.',
    mathematicalFormulaOrLaw: {
      name: 'Stoik Nazorat Doirasi (Dichotomy of Control)',
      formula: 'Xotirjamlik = Nazoratimdagi Ishlar (100%) - Nazoratimdan Tashqari Narsalar (0%)',
      description: 'Boshqa odamlarning fikri, ob-havo, omadsizlik — bu tashqi omillardir (0% nazorat). Sizning irodangiz, intizomingiz va qat’iyatingiz — to‘liq sizning qo‘lingizda (100% nazorat). Energiyani faqat ikkinchisiga sarflang.'
    },
    keyAxioms: [
      'Yo‘lingizdagi to‘siq — bu yo‘lning o‘ziga aylanadi (The impediment to action advances action).',
      'Tongda uyg‘onganingizda o‘zingizga ayting: Bugun men noshukur, takabbur, yolg‘onchi odamlarga duch kelaman. Lekin ularning hech biri mening ruhimni bulg‘ay olmaydi.',
      'O‘lim muqarrarligini esda tut (Memento Mori): har bir kuningizni hayotingizdagi eng so‘nggi va eng oliy kun sifatida yashang.'
    ],
    intjApplication: 'INTJ-T ning atrofdagi odamlarning samarasizligi yoki bema’niligidan asabiylashishini to‘xtatish. Dunyoni qanday bo‘lsa, shunday qabul qilib, o‘z ichki intizomini temir qalqonga aylantirish.',
    height198cmApplication: 'Har qanday vaziyatda jismoniy gavdani to‘g‘ri, xotirjam va sokin tutish. Ko‘z qarashi barqaror, hech qanday bezovtaliksiz stoik imperator holati.',
    practicalDrill: {
      title: 'Ertalabki Stoik Zirh & Nazorat Doirasi Jurnali',
      targetBenchmark: 'Kunning har qanday asabiy vaziyatida 0 ta emotsional portlash',
      phasePreparation: [
        'Ertalab 5 daqiqa jim o‘tirib, kutilayotgan eng yomon 3 ta stsenariyni tasavvur qiling (Premeditatio Malorum).'
      ],
      phaseExecution: [
        'Har bir qiyinchilikka: «Bu mening nazoratimdami?» deb savol bering. Agar yo‘q bo‘lsa — unga nisbatan barcha his-tuyg‘uni o‘chiring.',
        'To‘siq paydo bo‘lganda, uni xarakterni toblash uchun berilgan mashq sifatida qabul qiling.'
      ],
      phaseSafety: [
        'Stoitsizmni beparvolik yoki apatiya bilan adashtirmang; vazifangizni eng yuqori darajada bajaring.'
      ],
      frequency: 'Har kuni ertalab (05:45) va kechqurun (21:30).'
    },
    authenticQuotes: [
      { text: 'Sizning ongiz qanday fikrlar bilan to‘la bo‘lsa, qalbingiz ham shunday rang oladi.', context: '5-kitob, 16-band' },
      { text: 'Harakatga to‘sqinlik qiluvchi narsa harakatni ilgari suradi. Yo‘lda turgan to‘siq yo‘lga aylanadi.', context: '4-kitob, 1-band' }
    ]
  }
];

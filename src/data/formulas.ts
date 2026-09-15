export function calculateLeverTorque(forceNewtons: number, limbLengthMeters: number, angleDegrees: number = 90): {
  torqueNm: number;
  comparisonTo175cm: number; // percentage difference
} {
  const angleRad = (angleDegrees * Math.PI) / 180;
  const torqueNm = Math.round(forceNewtons * limbLengthMeters * Math.sin(angleRad) * 10) / 10;
  
  // Standard 175cm person has ~20% shorter limb length
  const standardLimbLength = limbLengthMeters * 0.80;
  const standardTorqueNm = forceNewtons * standardLimbLength * Math.sin(angleRad);
  const diffPercent = Math.round(((torqueNm - standardTorqueNm) / standardTorqueNm) * 100);

  return {
    torqueNm,
    comparisonTo175cm: diffPercent
  };
}

export function getGrossmanHeartRateZone(bpm: number): {
  zoneColor: string;
  zoneName: string;
  cognitiveState: string;
  motorSkills: string;
  recommendedAction: string;
} {
  if (bpm < 80) {
    return {
      zoneColor: '#f1f5f9',
      zoneName: 'OQ ZONA (60 — 80 BPM)',
      cognitiveState: 'To‘liq xotirjamlik, bazaviy biologik holat.',
      motorSkills: '100% nozik (fine) va murakkab motorika.',
      recommendedAction: 'Kundalik odatiy rejim, kognitiv tayyorgarlik.'
    };
  } else if (bpm <= 115) {
    return {
      zoneColor: '#f59e0b',
      zoneName: 'SARIQ ZONA (80 — 115 BPM)',
      cognitiveState: 'Hushyorlik, xavfni erta skanerlash (Left of Bang).',
      motorSkills: 'Optimal diqqat va konsentratsiya.',
      recommendedAction: 'Atrof-muhitni skanerlash, taktik orientatsiya.'
    };
  } else if (bpm <= 145) {
    return {
      zoneColor: '#10b981',
      zoneName: 'YASHIL ZONA (115 — 145 BPM) — OPTIMAL',
      cognitiveState: 'Maksimal jangovar quvvat, eng tezkor reaksiya, prefrontal korteks to‘liq faol.',
      motorSkills: 'Yuqori vizual idrok, optimal tahliliy qarorlar.',
      recommendedAction: 'Jangovar va strategik eng qiyin vazifalarni ijro etish.'
    };
  } else if (bpm <= 175) {
    return {
      zoneColor: '#ef4444',
      zoneName: 'QIZIL ZONA (145 — 175 BPM)',
      cognitiveState: 'Kortizol portlashi, mantiqiy tahlil pasayadi, emotsional bosim.',
      motorSkills: 'Nozik motorika yo‘qoladi; faqat qo‘pol kuch (gross motor) qoladi.',
      recommendedAction: 'Darhol Taktik Box Breathing (4-4-4-4) orqali pulsni tushirish.'
    };
  } else {
    return {
      zoneColor: '#000000',
      zoneName: 'QORA ZONA (175+ BPM) — XAVF',
      cognitiveState: 'Tunnel ko‘rish, eshitish falaji, mantiqiy aql butunlay o‘chgan.',
      motorSkills: 'Vaziyatni boshqarish imkonsiz, faqat shartsiz reflekslar.',
      recommendedAction: 'Faqat chuqur jismoniy nafas va xavfsiz zonaga chekinish.'
    };
  }
}

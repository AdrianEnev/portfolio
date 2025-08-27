import React from 'react';

const A2025 = [
  '1st Place, Regional Round – National Olympiad in IT (Distributed Applications)',
  'Top 10, National Autumn IT Tournament “John Atanasoff” (Distributed Applications)',
  'Certificate of Excellent Performance & Medal, HSSI (HSSMI) Student Section',
  '1st Place, Regional Round – National English Language Olympiad',
  'Cambridge English: C1 Advanced – 203 points (C2, Grade A)',
  'Sold my first website end-to-end (requirements → deployment)',
  'Attended HSSMI Summer Research School (20-day programming camp)',
];

const A2024 = [
  '2nd Place, Regional Round – National English Language Olympiad',
  '8th Place, National KGL Contest (B2, 2024) + certificate',
  '92.5% in Stage 1 (regional round) of KGL, level B2',
];

const A2023 = [
  '3rd Place, Regional Round – National English Language Olympiad',
  '97.5% in Stage 1 (regional round) of KGL, level B1',
];

const A2022 = [
  '10th Place, National KGL Contest (B1, 2022) + certificate',
  '92.5% in Stage 1 (regional round) of KGL, level B1',
  '1st Place, school literary translation competition',
  'Telerik School Academy certificate (Game Dev, 2022)',
];

const Year: React.FC<{ label: string; tagClass: string; items: string[]; links?: {label:string; href:string; color:string}[] }>
= ({ label, tagClass, items, links }) => (
  <div className="p-4 rounded-lg border border-white/10 bg-white/5">
    <p className={`inline-block text-lg font-bold px-2 py-1 rounded-xl ${tagClass}`}>{label}</p>
    <ul className="mt-3 list-disc list-inside space-y-1 text-white/85">
      {items.map((it, i) => (<li key={i}>{it}</li>))}
    </ul>
    {links?.length ? (
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map(l => (
          <button key={l.label} className={`text-sm font-semibold ${l.color} hover:underline`} onClick={() => window.open(l.href, '_blank')}>
            {l.label} →
          </button>
        ))}
      </div>
    ) : null}
  </div>
);

const Achievements: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-semibold">Notable Achievements</h2>
        <p className="text-white/70">English & IT academic achievements (2022–2026)</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Year label="2025" tagClass="bg-white/10" items={A2025} links={[
          { label: 'KGL', href: 'https://www.kglcontest.org/', color: 'text-indigo-300' },
          { label: 'National IT Olympiad', href: 'https://edusoft.fmi.uni-sofia.bg/', color: 'text-green-300' },
          { label: 'HSSMI', href: 'https://www.math.bas.bg/omi/hssimi/?lang=en', color: 'text-yellow-300' },
          { label: 'Cambridge English', href: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/', color: 'text-pink-300' },
        ]} />
        <Year label="2024" tagClass="bg-white/10" items={A2024} links={[
          { label: 'KGL', href: 'https://www.kglcontest.org/', color: 'text-indigo-300' },
        ]} />
        <Year label="2023" tagClass="bg-white/10" items={A2023} links={[
          { label: 'KGL', href: 'https://www.kglcontest.org/', color: 'text-indigo-300' },
        ]} />
        <Year label="2022" tagClass="bg-white/10" items={A2022} links={[
          { label: 'KGL', href: 'https://www.kglcontest.org/', color: 'text-indigo-300' },
          { label: 'Telerik Academy', href: 'https://www.telerikacademy.com/', color: 'text-red-300' },
        ]} />
      </div>
    </div>
  );
};

export default Achievements;

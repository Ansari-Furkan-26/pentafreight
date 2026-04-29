import SlateSection from '../shared/SlateSection.jsx';

const CERTS = [
  { short: 'ACAAI', name: 'Air Cargo Agents Association of India' },
  { short: 'ACFI', name: 'Air Cargo Forum India' },
  { short: 'AON', name: 'AerOcean Network' },
  { short: 'BCHA', name: 'Brihanmumbai Custom House Agents Association' },
  { short: 'IATA', name: 'IATA Accredited Agent' },
  { short: 'FIATA', name: 'FIATA Member' },
  { short: 'WCA', name: 'WCA World Member' },
  { short: 'AEO', name: 'AEO Certified' },
  { short: 'ISO', name: 'ISO 9001 : 2015' },
  { short: 'GDP', name: 'Good Distribution Practice' },
];

function Tile({ short, name }) {
  return (
    <div className="shrink-0 mx-3 md:mx-4 w-44 md:w-56 h-32 md:h-36 bg-white rounded-2xl shadow-md shadow-black/20 flex flex-col items-center justify-center text-center px-4 border border-white/10">
      <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-slate1-900">
        {short}
      </span>
      <span className="mt-2 text-[11px] md:text-xs text-slate1-500 leading-snug">
        {name}
      </span>
    </div>
  );
}

export default function Certifications() {
  const items = [...CERTS, ...CERTS];

  return (
    <SlateSection id="certifications" className="py-20 md:py-24">
      <div className="container-page text-center mb-10">
        <h2 className="font-display text-brand font-semibold text-4xl md:text-5xl tracking-tight">
          Certifications
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg">
          Certified excellence, ensuring compliance, quality, and global logistics
          reliability.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate1-700 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate1-700 to-transparent z-10" />

        <div className="marquee-track py-2">
          {items.map((c, i) => (
            <Tile key={i} short={c.short} name={c.name} />
          ))}
        </div>
      </div>
    </SlateSection>
  );
}

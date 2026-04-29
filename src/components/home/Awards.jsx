import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

// Logo path is a slug under /public/media/awards/<slug>.png — drop your real
// PNG/SVG files there with matching slugs and they'll show automatically.
const AWARDS = [
  { brand: 'Top Cargo Agents', slug: 'top-cargo-agents', items: ['Top Cargo Agents, 2016/17', 'Top Cargo Agents, 2005/06'] },
  { brand: 'Top Revenue Performance', slug: 'top-revenue', items: ['Top Revenue Performance, 2002'] },
  { brand: 'Mega Tonners', slug: 'mega-tonners', items: ['Mega Tonners, 2006/07'] },
  { brand: 'CONCOR', slug: 'concor', items: ['CONCOR Exim Star, 2003/04'] },
  { brand: 'Air France', slug: 'airfrance', items: ['Meritorious Performance, 1999/2000'] },
  { brand: 'Finnair Cargo', slug: 'finnair', items: ['Top Performance, 2008', 'Top Performance, 2007'] },
  { brand: 'IAG Cargo', slug: 'iag-cargo', items: ['Significant Support and Contribution, 2007'] },
  { brand: 'STAT Trade Times', slug: 'stat-trade-times', items: ['International Award for Excellence in Air Cargo, Region India — Winner, 2018'] },
  { brand: 'Turkish Cargo', slug: 'turkish-cargo', items: ['Excellence Revenue Performance, 2016', 'Best Performance, 2014', 'Cargo Agency, 2013', 'Cargo Agency, 2011'] },
  { brand: 'Singapore Airlines', slug: 'singapore-airlines', items: ['Top Cargo Agent, 2002/03', 'Top Cargo Agent, 2001/02', 'Top Cargo Agent, 1999/2000'] },
  { brand: 'Lufthansa Cargo', slug: 'lufthansa-cargo', items: ['Outstanding Quality, 2007', 'Outstanding Performance — Quality, 2007', 'Outstanding performance, 2006', 'Premium Partner, 2017', 'Asia Partner, 2014'] },
  { brand: 'British Airways World Cargo', slug: 'british-airways', items: ['Significant Contribution, 2000/01', 'Significant Contribution, 1999/2000'] },
  { brand: 'Qatar Cargo', slug: 'qatar-cargo', items: ['Top Performer, 2017', 'Quality and Reliability, 2007'] },
  { brand: 'Swiss WorldCargo', slug: 'swiss-worldcargo', items: ['Customer Recognition, 2013'] },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-20 md:py-28 bg-white">
      <div className="container-page">
        <span className="eyebrow-pill mb-5">Awards</span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate1-900 max-w-4xl">
          Proudly Recognized with Prestigious<br />
          <span className="text-slate1-400">Awards and Accolades.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {AWARDS.map((a) => (
            <AwardCard key={a.brand} award={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }) {
  const ref = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 220, damping: 30, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 220, damping: 30, mass: 0.5 });

  const background = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(232,90,20,0.95), rgba(232,90,20,0.55) 35%, rgba(232,90,20,0) 70%)`;

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mx.set(x);
    my.set(y);
  };
  const onLeave = () => {
    mx.set(50);
    my.set(50);
  };

  // If the user-supplied logo doesn't exist (404), fall back to the brand wordmark
  const logoPath = `/media/awards/${award.slug}.png`;
  const onImgError = (e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling?.removeAttribute('hidden');
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl border border-slate1-100 bg-white p-6 overflow-hidden cursor-pointer transition shadow-sm hover:shadow-xl hover:border-transparent"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background }}
      />

      <div className="relative z-10 min-h-[180px] flex flex-col">
        {/* Logo image slot — drop a PNG/SVG into /public/media/awards/<slug>.png */}
        <div className="h-12 mb-4 flex items-center">
          <img
            src={logoPath}
            alt={award.brand}
            onError={onImgError}
            className="h-10 w-auto object-contain transition-[filter] group-hover:[filter:brightness(0)_invert(1)]"
          />
          <span
            hidden
            className="font-display font-extrabold text-[15px] tracking-tight text-slate1-700 group-hover:text-white"
          >
            {award.brand}
          </span>
        </div>
        <ul className="space-y-1.5 text-[13px] leading-snug text-slate1-600 group-hover:text-white transition-colors">
          {award.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

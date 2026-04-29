import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SlateSection from '../shared/SlateSection.jsx';

const STATS = [
  { value: 7, suffix: '+', label: 'Strategic Domestic Offices' },
  { value: 'USA', suffix: '', label: 'Global presence', isText: true },
  { value: 200, suffix: '+', label: 'Logistics Experts' },
  { value: 50, suffix: '+', label: 'Awards & Accolades' },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <SlateSection id="achievements">
      <div ref={sectionRef} className="container-page py-20 md:py-24 text-white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-brand font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05]">
              Our Achievements
            </h2>
            <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-md">
              Over 31+ years of excellence, trusted globally, delivering reliable
              logistics solutions with precision.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-x-10 gap-y-12">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <p className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {s.isText ? s.value : <Counter to={s.value} suffix={s.suffix} />}
                </p>
                <p className="mt-3 text-sm md:text-base text-white/80">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlateSection>
  );
}

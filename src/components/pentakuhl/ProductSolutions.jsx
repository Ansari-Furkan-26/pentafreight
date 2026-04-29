import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CARDS = [
  {
    title: 'Parcel Shippers',
    body:
      'We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.',
    rows: [
      { kind: 'Single Use', logos: ['CoolGuard PCM', 'CoolGuard Advanced'] },
      { kind: 'Reusable', logos: ['Crēdo Cube'] },
    ],
    cta: 'Parcel Shippers',
  },
  {
    title: 'Pallet Shippers',
    body:
      'Validated pallet-scale solutions for high-volume cold-chain freight, with consistent thermal performance trip after trip.',
    rows: [
      { kind: 'Single Use', logos: ['CoolPall Vertos', 'CoolPall Flex'] },
      { kind: 'Reusable', logos: ['Crēdo Xtreme', 'Crēdo Cargo'] },
    ],
    cta: 'Pallet Shippers',
  },
];

export default function ProductSolutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate1-700 text-center"
        >
          Product Solutions
        </motion.h2>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          {CARDS.map((c, i) => {
            const fromLeft = i === 0;
            return (
              <motion.div
                key={c.title}
                initial={{
                  opacity: 0,
                  scale: 0.4,
                  x: fromLeft ? -180 : 180,
                }}
                animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 18,
                  delay: 0.2 + i * 0.15,
                }}
                className="origin-center"
              >
                <article className="rounded-2xl border border-slate1-100 bg-white shadow-md shadow-slate1-900/[0.05] p-7 md:p-9 h-full flex flex-col">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-slate1-900 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-slate1-600 leading-relaxed">{c.body}</p>

                  <div className="mt-6 space-y-3 flex-1">
                    {c.rows.map((row) => (
                      <div
                        key={row.kind}
                        className="flex items-center gap-4 rounded-xl border border-slate1-100 px-4 md:px-5 py-3 bg-white"
                      >
                        <span className="text-sm md:text-base font-display font-semibold text-slate1-800 w-28 shrink-0">
                          {row.kind}
                        </span>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                          {row.logos.map((l) => (
                            <span
                              key={l}
                              className="font-display font-bold text-sm md:text-base text-slate1-700 tracking-tight"
                            >
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
                  >
                    {c.cta}
                  </a>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

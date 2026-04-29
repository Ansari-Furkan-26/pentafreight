import { useState } from 'react';

const SERIES = [
  {
    key: 'SERIES 4',
    range: '2°C - 8°C',
    use: 'Typically used for products that require refrigeration.',
    ideal:
      'Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals.',
  },
  {
    key: 'SERIES 22',
    range: '15°C - 25°C',
    use: 'Controlled room temperature shipments.',
    ideal:
      'Best for pharmaceuticals and biologics that must remain inside controlled room temperature.',
  },
  {
    key: 'SERIES 20M',
    range: '-20°C',
    use: 'Frozen storage and transportation.',
    ideal: 'Designed for frozen biologics, lab samples and clinical trial materials.',
  },
  {
    key: 'SERIES 50M',
    range: '-50°C',
    use: 'Deep-freeze transportation.',
    ideal: 'Built for cell & gene therapies, mRNA vaccines and other deep-freeze cargo.',
  },
];

export default function SeriesGuide() {
  const [active, setActive] = useState(0);
  const item = SERIES[active];

  return (
    <section className="bg-white pt-4 pb-20 md:pb-28">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-slate1-700">
            Series <span className="text-slate1-400">Guide</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate1-500 leading-relaxed">
            This guide outlines temperature-controlled packaging solutions designed for
            the safe transport and storage of sensitive products, like vaccines and
            biologics, across various thermal conditions, from refrigerated to
            deep-freeze.
          </p>
        </div>

        <div className="rounded-2xl border border-slate1-100 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate1-100 border-b border-slate1-100">
            {SERIES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                className={`px-4 py-4 text-sm md:text-base font-semibold transition ${
                  active === i ? 'text-brand bg-cream-50' : 'text-slate1-700 hover:text-brand'
                }`}
              >
                {s.key}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            <p className="text-sm md:text-base text-slate1-700">
              <span className="font-semibold text-slate1-900">Temperature Range:</span>{' '}
              {item.range}
            </p>
            <p className="mt-3 text-sm md:text-base text-slate1-700">
              <span className="font-semibold text-slate1-900">Usage & Applications:</span>{' '}
              {item.use}
            </p>
            <p className="mt-3 text-sm md:text-base text-slate1-700">
              <span className="font-semibold text-slate1-900">Ideal For:</span> {item.ideal}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

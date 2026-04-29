import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ({
  title = 'Frequently Asked',
  titleAccent = 'Questions',
  intro = 'Find answers to common questions, ensuring clarity on our services, processes, and solutions.',
  items = [],
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-white py-20 md:py-28">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05] text-slate1-900">
            {title} <span className="text-slate1-400">{titleAccent}</span>
          </h2>
          <p className="mt-5 text-slate1-500 max-w-md leading-relaxed">{intro}</p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-slate1-100 border-y border-slate1-100">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base md:text-lg text-slate1-800 font-medium">
                      {it.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate1-500 transition-transform ${
                        isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-slate1-600 leading-relaxed">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

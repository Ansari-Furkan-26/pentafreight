import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TOP = [
  'Robust Load Security',
  'Expert Logistics Support',
  'Tailored Freight Solutions',
  'Validated Cold Chain',
  'IATA Compliant',
  'Real-Time Visibility',
];
const BOTTOM = [
  'End-to-End Supply Chain Management',
  'Flexible Shipping Schedules',
  'Volume Discounts',
  'Pelican BioThermal Authorised',
  '24 / 7 Control Tower',
  'Pre-Qualified Packaging',
];

/**
 * Scroll-driven dual marquee.
 * NO auto-loop animation. Each ribbon's translateX is a useTransform of the
 * section's scrollYProgress, so the ribbons only move while the user scrolls
 * past them — and they move in opposite directions.
 */
export default function DualMarquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Slowed scroll-driven travel: each ribbon shifts only ~20% of its doubled
  // width across the full scroll range, so movement feels gentle.
  const xTop = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const xBottom = useTransform(scrollYProgress, [0, 1], ['-20%', '0%']);

  const renderRow = (words) => (
    <>
      {[...words, ...words].map((w, i) => (
        <div
          key={`${w}-${i}`}
          className="shrink-0 mx-3 md:mx-4 px-6 md:px-8 py-4 md:py-5 rounded-xl border border-slate1-200 bg-white font-display text-lg md:text-2xl text-slate1-800 whitespace-nowrap text-center"
        >
          {w}
        </div>
      ))}
    </>
  );

  return (
    <section
      ref={ref}
      className="bg-white py-12 md:py-16 overflow-hidden"
    >
      <div className="overflow-hidden">
        <motion.div style={{ x: xTop }} className="flex w-max will-change-transform">
          {renderRow(TOP)}
        </motion.div>
      </div>

      <div className="h-6 md:h-8" />

      <div className="overflow-hidden">
        <motion.div style={{ x: xBottom }} className="flex w-max will-change-transform">
          {renderRow(BOTTOM)}
        </motion.div>
      </div>
    </section>
  );
}

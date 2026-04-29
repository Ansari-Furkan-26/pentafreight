import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IndustryCard from './IndustryCard.jsx';

/**
 * Scroll-triggered industries animation.
 *
 * - The "INDUSTRIES" title is sticky in the visible center.
 * - As the user scrolls through the section, each industry card rises from
 *   below the viewport, drifts up past the title, then continues out the top
 *   and disappears.
 * - Cards are staggered along the scroll progress so they appear one by one.
 */
export default function IndustriesScrollAnimation({ items, intro }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Total scroll length: enough room for every card to enter and exit cleanly.
  // 100vh of sticky pin + 100vh per card-ish span.
  const totalHeight = `${100 + items.length * 40}vh`;

  return (
    <section ref={ref} className="relative bg-white" style={{ height: totalHeight }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Sticky title in the visible center */}
        <div className="relative z-0 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-semibold tracking-[0.06em] text-3xl md:text-5xl lg:text-6xl text-slate1-700 uppercase"
          >
            Industries
          </motion.h1>
          <p className="mt-5 max-w-xl mx-auto text-slate1-500 text-sm md:text-base leading-relaxed">
            {intro}
          </p>
        </div>

        {/* Floating cards rising from the bottom */}
        {items.map((ind, i) => (
          <RisingCard
            key={ind.title}
            industry={ind}
            index={i}
            total={items.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function RisingCard({ industry, index, total, scrollYProgress }) {
  // Each card occupies a slice of the scroll range, staggered.
  const slice = 0.55 / total; // each card's "active" span
  const start = 0.05 + index * slice * 0.9; // overlap a bit between cards
  const peak = start + slice * 1.4; // when card is centered visually
  const end = peak + slice * 1.4; // when card has exited the top

  // Vertical motion: from below the viewport → through center → exits the top
  const y = useTransform(
    scrollYProgress,
    [start, peak, end],
    ['90vh', '0vh', '-90vh']
  );

  // Fade in/out so cards don't pop hard on the edges
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.02, end - 0.02, end],
    [0, 1, 1, 0]
  );

  // Subtle rotation + scale for the "juggle" feel
  const rotate = useTransform(
    scrollYProgress,
    [start, peak, end],
    [index % 2 === 0 ? -8 : 8, 0, index % 2 === 0 ? 6 : -6]
  );
  const scale = useTransform(scrollYProgress, [start, peak, end], [0.9, 1, 0.92]);

  // Spread cards horizontally so they don't all stack on the title
  const positions = [
    { left: '8%', maxWidth: '320px' },
    { right: '8%', maxWidth: '320px' },
    { left: '4%', maxWidth: '300px' },
    { right: '4%', maxWidth: '300px' },
    { left: '14%', maxWidth: '320px' },
    { right: '14%', maxWidth: '320px' },
    { left: '20%', maxWidth: '300px' },
    { right: '20%', maxWidth: '300px' },
    { left: '50%', maxWidth: '320px', transform: 'translateX(-50%)' },
  ];
  const pos = positions[index % positions.length];

  return (
    <motion.div
      style={{
        y,
        opacity,
        rotate,
        scale,
        position: 'absolute',
        top: 'calc(50% - 110px)',
        zIndex: 20,
        ...pos,
      }}
      className="will-change-transform w-[78%] sm:w-[55%] md:w-auto"
    >
      <IndustryCard {...industry} />
    </motion.div>
  );
}

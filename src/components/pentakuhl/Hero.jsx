import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HERO_VIDEO = '/media/p-bg.mp4';
const HERO_POSTER =
  'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=1920&q=80';

export default function PKHero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    const sec = sectionRef.current;
    if (!v || !sec) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          const p = v.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } else v.pause();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >
          <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            Ensuring Safe Transport for<br />
            Temperature-Sensitive Products
          </h1>
          <span className="block mx-auto mt-7 mb-7 w-32 h-px bg-white/40" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <p className="max-w-md text-white/85 text-sm md:text-base leading-relaxed">
              Explore our frequently asked questions to gain clarity about Penta Kuhl's
              services and features.
            </p>
            <a
              href="#faq"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-full transition shadow-lg shadow-black/30 text-sm"
            >
              Explore <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

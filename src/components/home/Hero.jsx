import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const VIDEO_SRC = '/media/bg.mp4';
const POSTER =
  'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Play only when in viewport — pause when scrolled away
  useEffect(() => {
    const v = videoRef.current;
    const sec = sectionRef.current;
    if (!v || !sec) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          // Try to play; ignore promise rejections (autoplay restrictions)
          const p = v.play();
          if (p && typeof p.catch === 'function') p.catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    io.observe(sec);

    const onVisibility = () => {
      if (document.hidden) v.pause();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER}
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Stronger dark overlay so text reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate1-900/55 via-slate1-900/25 to-slate1-900/20" />
      <div className="absolute inset-0 bg-slate1-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(232,90,20,0.22),_transparent_55%)]" />

      <div className="relative z-10 h-full flex items-center pb-16 md:pb-24 pt-0 md:pt-24">
        <div className="container-page w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 text-white"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream-100/90 mb-5">
                 Reliable Logistics Solutions
              </span>
              <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-7xl lg:text-[5.25rem] tracking-tightest leading-[1.05] md:leading-[0.98]">
                Moving the world's<br />
                <span className="text-brand">trusted shipments.</span>
              </h1>
              <p className="hidden md:block mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
                Penta Freight provides reliable logistics solutions, specializing in
                temperature-sensitive shipments. We ensure safe, on-time delivery
                worldwide — trust us for seamless supply chain management.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/industries"
                  className="group inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-full transition shadow-lg shadow-brand-700/40"
                >
                  Explore industries
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/65 mb-5">
                  At a glance
                </p>
                <dl className="grid grid-cols-2 gap-6">
                  {[
                    ['31+', 'Years of excellence'],
                    ['116+', 'Logistics experts'],
                    ['29+', 'Awards & accolades'],
                    ['7+', 'Domestic offices'],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <dt className="font-display text-3xl md:text-4xl font-bold">{n}</dt>
                      <dd className="mt-1 text-xs uppercase tracking-wider text-white/65">
                        {l}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

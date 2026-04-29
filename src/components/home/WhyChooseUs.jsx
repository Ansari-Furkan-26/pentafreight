import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Truck, Sparkles } from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Comprehensive Solutions',
    body:
      'Full-spectrum logistics services including air, sea, and multimodal transport — under one accountable team.',
  },
  {
    icon: BadgeCheck,
    title: 'Expertise and Experience',
    body:
      'Over 30+ years of experience with skilled customs agents and operators across every major Indian gateway.',
  },
  {
    icon: Truck,
    title: 'State-of-the-Art Facilities',
    body:
      'Advanced transit warehouse with specialized storage and a fleet of reefer and general cargo trucks.',
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: title */}
          <div className="lg:col-span-4">
            <span className="eyebrow-pill mb-5">Why us</span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[1.05] text-slate1-900">
              Why choose<br />
              <span className="text-slate1-400">Penta Freight.</span>
            </h2>
          </div>

          {/* Right: reasons grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-cream-50 text-brand border border-cream-100 flex items-center justify-center mb-5">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate1-900">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate1-500 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

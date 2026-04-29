import { motion } from 'framer-motion';

export default function PKAbout() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page grid md:grid-cols-12 gap-8 md:gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 text-center"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-[0.25em]">About</p>
          <span className="block mx-auto mt-3 mb-3 w-12 h-px bg-brand/70" />
          <p className="text-brand text-sm font-semibold uppercase tracking-[0.25em]">
            Penta Kuhl
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="md:col-span-8 text-slate1-700 text-lg md:text-xl leading-relaxed text-center"
        >
          At <strong className="text-slate1-900 font-semibold">Pentakuhl</strong>, we
          specialize in providing durable, effective packaging solutions that maintain
          temperature <strong className="text-slate1-900 font-semibold">stability</strong>{' '}
          during transit, <strong className="text-slate1-900 font-semibold">protecting</strong>{' '}
          your valuable products. Our innovative designs cater to various industries,
          including pharmaceuticals, food, and biotechnology.
        </motion.p>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const BG_IMAGE = '/media/about-bg.jpg';
const BG_IMAGE_BLUR = '/media/about-bg-blur.png';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blur image covers only the About Us / Penta Freight content area at the top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: '100%',
          backgroundImage: `url(${BG_IMAGE_BLUR})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative container-page pt-24 md:pt-28 pb-16 flex-1">
        <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 text-center"
          >
            <p className="text-brand text-sm font-semibold uppercase tracking-[0.25em]">
              About Us
            </p>
            <span className="block mx-auto mt-3 mb-3 w-12 h-px bg-brand/70" />
            <p className="text-brand text-sm font-semibold uppercase tracking-[0.25em]">
              Penta Freight
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="md:col-span-8"
          >
            <p className="text-slate1-800 text-lg md:text-xl leading-relaxed text-center">
              Penta Freight provides reliable{' '}
              <strong className="text-slate1-900 font-semibold">logistics solutions</strong>,
              specializing in temperature-sensitive shipments. We ensure safe,{' '}
              <strong className="text-slate1-900 font-semibold">on-time delivery</strong>{' '}
              worldwide. Trust us for seamless supply chain management.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

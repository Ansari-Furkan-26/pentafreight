import { motion } from 'framer-motion';
import SlateSection from '../shared/SlateSection.jsx';

const MAP_IMG = '/media/footprint.webp';

export default function GlobalFootprint() {
  return (
    <SlateSection id="global-footprint">
      <div className="container-page py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-brand font-semibold text-4xl md:text-5xl tracking-tight">
            Our Global Footprint
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <img
            src={MAP_IMG}
            alt="Penta Freight global footprint world map"
            className="w-full h-auto select-none"
            draggable="false"
          />
        </motion.div>
      </div>
    </SlateSection>
  );
}

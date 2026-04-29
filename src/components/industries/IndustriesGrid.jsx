import { motion } from 'framer-motion';
import IndustryCard from './IndustryCard.jsx';

export default function IndustriesGrid({ items, intro }) {
  return (
    <section className="relative bg-white">
      <div className="container-page">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <IndustryCard {...ind} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

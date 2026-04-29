import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SlateSection from '../shared/SlateSection.jsx';

export default function Philosophy() {
  return (
    <SlateSection id="philosophy">
      <div className="container-page py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="font-display text-brand font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight">
            Our Philosophy
          </h2>
          <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
            Customer satisfaction drives everything we do. Every shipment is a promise,
            and we deliver it with precision, care, and professionalism. With expert
            resources, we ensure safe, timely transport, building lasting partnerships
            founded on trust and excellence.
          </p>
          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-7 py-3 rounded-full transition shadow-lg shadow-black/25"
          >
            Read more <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </SlateSection>
  );
}

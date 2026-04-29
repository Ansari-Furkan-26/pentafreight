import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';
import SlateSection from '../shared/SlateSection.jsx';

export default function AuthorizedDistributor() {
  return (
    <SlateSection className="py-16 md:py-20">
      <div className="container-page text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col items-center"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white shadow-lg flex flex-col items-center justify-center text-slate1-800 mb-6">
            <Snowflake className="w-7 h-7 text-[#0EA5E9]" />
            <span className="mt-1 font-display font-extrabold text-sm tracking-tight">
              BIOTHERMAL
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            Authorized Distributors for Pelican BioThermal
            <sup className="text-base">tm</sup> Products
          </h3>
          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-full transition text-sm shadow-lg shadow-black/30"
          >
            Read more
          </a>
        </motion.div>
      </div>
    </SlateSection>
  );
}

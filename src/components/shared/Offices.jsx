import { motion } from 'framer-motion';

const INDIA_OFFICES = [
  {
    city: 'Mumbai',
    address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
    phone: '+91 22-6222-6222',
  },
  {
    city: 'Ahmedabad',
    address: 'D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009',
    phone: '+91 7940227900',
  },
  {
    city: 'Bengaluru',
    address: '205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017',
    phone: '+91 80-4112-5590',
  },
  {
    city: 'Chennai',
    address: 'Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114',
    phone: '+91-44-22241462 / 1464',
  },
  {
    city: 'New Delhi',
    address: 'Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037',
    phone: '+91 11-4078-2222',
  },
  {
    city: 'Hyderabad',
    address: 'G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India',
    phone: '+91 40-2400-4048',
  },
  {
    city: 'Kolkata',
    address: '131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal',
    phone: '+91 33-2514-7089',
  },
];

const USA_OFFICES = [
  {
    city: 'Chicago',
    address: 'Penta Freight Pvt.Ltd 5100 Newport Dr. Suite 4, Rolling Meadows, IL 60008 USA',
    phone: '+040-234 6559 / +224 434 2154',
  },
];

function OfficeCard({ city, address, phone, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay }}
    >
      <h4 className="font-display text-lg font-semibold text-slate1-900">{city}</h4>
      <p className="mt-3 text-sm text-slate1-600 leading-relaxed whitespace-pre-line">
        {address}
      </p>
      <p className="mt-3 text-sm text-slate1-700">{phone}</p>
    </motion.div>
  );
}

export default function Offices() {
  return (
    <section id="offices" className="relative bg-white py-20 md:py-28">
      <div className="container-page space-y-20">
        {/* India offices */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-slate1-900 whitespace-nowrap">
              Our <span className="text-brand">India</span> Offices
            </h3>
            <p className="mt-4 text-slate1-600 text-sm md:text-base leading-relaxed">
              Penta Freight delivers seamless logistics across India, with branches in
              key cities for your convenience.
            </p>
          </div>
          <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {INDIA_OFFICES.map((o, i) => (
              <OfficeCard key={o.city} {...o} delay={i * 0.05} />
            ))}
          </div>
        </div>

        {/* USA offices */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-slate1-900 whitespace-nowrap">
              Our <span className="text-brand">USA</span> Office
            </h3>
            <p className="mt-4 text-slate1-600 text-sm md:text-base leading-relaxed">
              Penta Freight has expanded its operations globally, beginning with the
              USA, to offer continuous support across continents.
            </p>
          </div>
          <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {USA_OFFICES.map((o, i) => (
              <OfficeCard key={o.city} {...o} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

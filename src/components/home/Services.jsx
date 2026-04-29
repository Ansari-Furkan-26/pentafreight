import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Plane, Ship, Truck, Boxes, FileCheck2, Warehouse } from 'lucide-react';

const SERVICES = [
  {
    icon: Plane,
    title: 'Air Freight',
    body:
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space. Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and ensure smooth delivery.",
    tags: ['Speed', 'Efficiency', 'Reliability', 'Affordability'],
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80',
    href: '/services/air-freight',
    imageLeft: true,
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    body:
      'We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget. With decades of experience, we plan, monitor, and manage shipments, ensuring compliance. We provide flexible FCL scheduling and cost-efficient LCL options. On-time, every time.',
    tags: ['Flexibility', 'Cost-Effective', 'Scalability', 'Expertise'],
    image:
      'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80',
    href: '/services/sea-freight',
    imageLeft: false,
  },
  {
    icon: Truck,
    title: 'Multi Modal Transport',
    body:
      'Every shipment is unique, so we offer multiple affordable transport options. Along with air and sea freight, we provide multimodal transport via our global network — combining ocean, air, rail and road into one seamless movement.',
    tags: ['Integration', 'Efficiency', 'Visibility', 'Convenience'],
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80',
    href: '/services/multi-modal',
    imageLeft: true,
  },
  {
    icon: Boxes,
    title: 'Project Cargo',
    body:
      'We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications. We handle logistics, clearance, and oversized or breakbulk cargo with expertise.',
    tags: ['Precision', 'Expertise', 'Oversized', 'Security'],
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1600&q=80',
    href: '/services/project-cargo',
    imageLeft: false,
  },
  {
    icon: FileCheck2,
    title: 'Custom Broking',
    body:
      'Our licensed customs agents know domestic and international regulations. With 30+ years of experience, we have strong ties with authorities and handle all clearance challenges efficiently — getting your cargo released right the first time.',
    tags: ['Accuracy', 'Compliance', 'Speed', 'Expertise'],
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
    href: '/services/custom-broking',
    imageLeft: true,
  },
  {
    icon: Warehouse,
    title: 'Transit Warehouse and Fleet',
    body:
      'Our transit warehouse is near the International Air Cargo Complex and Ocean Ports. We offer storage for all cargo types, including temperature-controlled (15–25°C, 2–8°C), DGR, and shrink wrapping. Our reefer and general trucks ensure smooth nationwide transportation.',
    tags: ['Specialized', 'Accessible', 'Versatile', 'Nationwide'],
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80',
    href: '/services/warehouse-fleet',
    imageLeft: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-white">
      {/* Header — adjust pt-* / pb-* below to control mobile spacing above & below the description */}
      <div className="container-page pt-12 md:pt-28 pb-2 md:pb-10">
        <span className="eyebrow-pill mb-6">Services</span>
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate1-900">
              Seamless Solutions for<br />
              <span className="text-slate1-400">Every Logistics Need</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-slate1-500 text-base md:text-lg leading-relaxed">
            Tailored logistics solutions for timely, cost-effective deliveries across
            air, sea, and multimodal transport.
          </p>
        </div>
      </div>

      {/* Stacking-reverse cards: each is 100vh, sticks to top, next fully covers previous */}
      <div className="relative">
        {SERVICES.map((s, i) => (
          <StackCard key={s.title} item={s} index={i} total={SERVICES.length} />
        ))}
      </div>
    </section>
  );
}

function StackCard({ item, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const isLast = index === total - 1;
  // Smooth scale-down + gentle lift as the next card covers this one.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [1, isLast ? 1 : 0.97, isLast ? 1 : 0.9]
  );
  const yLift = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -32]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, isLast ? 1 : 0.6]);
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="sticky top-0"
      style={{ zIndex: 10 + index, height: '100vh' }}
    >
      {/* The sticky container is full viewport so cards stack with no gap.
          The CARD itself is contained — rounded with margin from the edges.
          MOBILE spacing knobs:
            - items-start vs items-center => where the card sits in the 100vh sticky frame
            - pt-2 (top padding) controls the gap above the card on mobile
            - pb-4 controls the gap below the card on mobile
          DESKTOP spacing knobs: md:pt-24 / md:pb-10 / md:items-center */}
      <div className="absolute inset-0 flex items-start md:items-center justify-center pt-10 pb-4 md:pb-10">
        <motion.article
          style={{ scale, y: yLift, opacity }}
          transition={{ type: 'spring', stiffness: 90, damping: 22, mass: 0.6 }}
          className="container-page w-full origin-top will-change-transform"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate1-100 h-[78vh] min-h-[560px]">
            {/* MOBILE: image as background with copy overlaid on top */}
            <div className="lg:hidden absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate1-900/90 via-slate1-900/55 to-slate1-900/25" />
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 text-white">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                    0{index + 1} / Service
                  </span>
                </div>
                <h3 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight leading-[1.05]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-lg text-white/85 text-sm sm:text-base leading-relaxed">
                  {item.body}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 mb-5">
                  {item.tags.map((t, i) => (
                    <span key={t} className="text-xs sm:text-sm text-white/85 flex items-center gap-2">
                      {t}
                      {i < item.tags.length - 1 && (
                        <span className="inline-block w-px h-3 bg-white/30" />
                      )}
                    </span>
                  ))}
                </div>
                <a
                  href={item.href}
                  className="inline-flex w-fit items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
                >
                  Read More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* DESKTOP: side-by-side grid */}
            <div
              className={`hidden lg:grid lg:grid-cols-2 h-full ${
                item.imageLeft ? '' : 'lg:[&>*:first-child]:order-2'
              }`}
            >
              {/* IMAGE side */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    item.imageLeft
                      ? 'bg-gradient-to-r from-transparent via-white/0 to-white'
                      : 'bg-gradient-to-l from-transparent via-white/0 to-white'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/30" />
              </div>

              {/* COPY side */}
              <div className="bg-white p-6 md:p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-slate1-500">
                    0{index + 1} / Service
                  </span>
                </div>
                <h3 className="mt-5 font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate1-900 leading-[1.05]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-lg text-slate1-600 text-base leading-relaxed">
                  {item.body}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                  {item.tags.map((t, i) => (
                    <span key={t} className="text-sm text-slate1-700 flex items-center gap-2">
                      {t}
                      {i < item.tags.length - 1 && (
                        <span className="hidden md:inline-block w-px h-3 bg-slate1-200" />
                      )}
                    </span>
                  ))}
                </div>
                <a
                  href={item.href}
                  className="inline-flex w-fit items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
                >
                  Read More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

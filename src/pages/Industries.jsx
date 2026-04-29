import {
  Pill,
  FlaskConical,
  Shirt,
  Lightbulb,
  Car,
  Package,
  Timer,
  Wine,
  Cpu,
} from 'lucide-react';
import IndustriesScrollAnimation from '../components/industries/IndustriesScrollAnimation.jsx';
import IndustriesGrid from '../components/industries/IndustriesGrid.jsx';
import FAQ from '../components/shared/FAQ.jsx';
import ParallaxBanner from '../components/shared/ParallaxBanner.jsx';
import Offices from '../components/shared/Offices.jsx';

const INDUSTRIES = [
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    body:
      'The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.',
  },
  {
    icon: FlaskConical,
    title: 'Chemicals',
    body:
      'We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.',
  },
  {
    icon: Shirt,
    title: 'Textiles',
    body:
      'We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.',
  },
  {
    icon: Lightbulb,
    title: 'Energy',
    body:
      'As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.',
  },
  {
    icon: Car,
    title: 'Automobile',
    body:
      'Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.',
  },
  {
    icon: Package,
    title: 'Packaging',
    body:
      'The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.',
  },
  {
    icon: Timer,
    title: 'Time Critical Cargo',
    body:
      'We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.',
  },
  {
    icon: Wine,
    title: 'Glassware',
    body:
      'Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.',
  },
  {
    icon: Cpu,
    title: 'Electronics',
    body:
      'We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'What industries do you serve?',
    a: 'We serve pharmaceuticals, chemicals, textiles, energy, automobile, packaging, time-critical cargo, glassware, electronics and more. Our network is engineered to flex with the needs of each vertical.',
  },
  {
    q: 'How do you handle temperature-sensitive shipments?',
    a: 'Through our PentaKuhl temperature-controlled packaging line and reefer warehouse / fleet network we maintain validated thermal envelopes (15–25°C, 2–8°C and deep-freeze) door-to-door, with shipment-level data loggers.',
  },
  {
    q: 'What sets your logistics apart?',
    a: 'Three things: a fully integrated team across air/sea/land, IATA-compliant compliance discipline that has held up for 30+ years, and a proactive control tower that resolves exceptions in minutes — not days.',
  },
  {
    q: 'How do you ensure compliance with regulations?',
    a: 'Our licensed customs brokers stay aligned with domestic and international regulations across every market we operate. Documentation is generated, validated and archived in one workflow for audit-ready reporting.',
  },
];

export default function Industries() {
  return (
    <div className="bg-white">
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Scroll-triggered animation: sticky title + cards rising from bottom */}
      <IndustriesScrollAnimation
        items={INDUSTRIES}
        intro="For two decades we have been coming up with innovative ways to enable global trade across various industries."
      />

      {/* Static grid view of the same cards */}
      <IndustriesGrid items={INDUSTRIES} />

      {/* FAQ */}
      <FAQ
        title="Frequently Asked"
        titleAccent="Questions"
        intro="Find answers to common industry questions, ensuring clarity on our services, processes, and solutions."
        items={FAQ_ITEMS}
      />

      {/* Parallax banner */}
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1920&q=80"
        title="Tailored Logistics for Every Industry"
        subtitle="Delivering tailored supply chain solutions to meet the unique needs of industries worldwide."
        ctaLabel="Contact Us Today"
      />

      <Offices />
    </div>
  );
}

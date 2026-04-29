import PKHero from '../components/pentakuhl/Hero.jsx';
import PKAbout from '../components/pentakuhl/About.jsx';
import AuthorizedDistributor from '../components/pentakuhl/AuthorizedDistributor.jsx';
import ProductSolutions from '../components/pentakuhl/ProductSolutions.jsx';
import SeriesGuide from '../components/pentakuhl/SeriesGuide.jsx';
import DualMarquee from '../components/pentakuhl/DualMarquee.jsx';
import FAQ from '../components/shared/FAQ.jsx';
import ParallaxBanner from '../components/shared/ParallaxBanner.jsx';
import Offices from '../components/shared/Offices.jsx';

const FAQ_ITEMS = [
  {
    q: 'What is Penta Kuhl?',
    a: 'Penta Kuhl is the temperature-controlled packaging arm of Penta Freight — a curated portfolio of single-use and reusable shippers engineered to keep pharma, biotech and food shipments inside their validated thermal envelope.',
  },
  {
    q: 'How does Penta Kuhl ensure cargo safety?',
    a: 'Every solution is qualified to a target temperature range and packed against a published payload spec. We pair the right packaging with route-specific thermal modelling and validated pre-conditioning before shipment.',
  },
  {
    q: 'What types of cargo can Penta Kuhl handle?',
    a: 'Vaccines, biologics, clinical samples, insulin, cell & gene therapies, biosimilars, perishable foods and any cargo that needs a stable 2–8°C, 15–25°C or deep-freeze environment door-to-door.',
  },
  {
    q: 'Is there customer support available for Penta Kuhl users?',
    a: 'Yes — every shipment is monitored by our control tower with named account leads. Reach us 24/7 by phone, email or our shipper portal for live tracking, exception alerts and post-shipment reports.',
  },
];

export default function PentaKuhl() {
  return (
    <div className="bg-white">
      <PKHero />
      <PKAbout />
      <AuthorizedDistributor />
      <ProductSolutions />
      <SeriesGuide />
      <DualMarquee />
      <FAQ
        title="Frequently Asked"
        titleAccent="Questions"
        intro="Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features."
        items={FAQ_ITEMS}
      />
      <ParallaxBanner
        image="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1920&q=80"
        title="Protecting What Matters Most"
        subtitle="Get in touch to ensure safe and temperature-stable transit for your sensitive products."
        ctaLabel="Contact Us Today"
      />
      <Offices />
    </div>
  );
}

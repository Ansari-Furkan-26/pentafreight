import Hero from '../components/home/Hero.jsx';
import About from '../components/home/About.jsx';
import Philosophy from '../components/home/Philosophy.jsx';
import Services from '../components/home/Services.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import Achievements from '../components/home/Achievements.jsx';
import Reviews from '../components/home/Reviews.jsx';
import Certifications from '../components/home/Certifications.jsx';
import Awards from '../components/home/Awards.jsx';
import GlobalFootprint from '../components/home/GlobalFootprint.jsx';
import Offices from '../components/shared/Offices.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Philosophy />
      <Services />
      <WhyChooseUs />
      <Achievements />
      <Reviews />
      <Certifications />
      <Awards />
      <GlobalFootprint />
      <Offices />
    </>
  );
}

import Footer from "../components/layout/Footer";

import HeroSlider from "../components/home/HeroSlider";
import AboutSection from "../components/home/AboutSection";
import CatalogSection from "../components/home/CatalogSection";
import HotelSection from "../components/home/HotelSection";
import LinesSection from "../components/home/LinesSection";
import ContactSection from "../components/home/ContactSection";

import WhatsAppButton from "../components/ui/WhatsAppButton";

function Home() {
  return (
    <>
      <HeroSlider />

      <AboutSection />

      <CatalogSection />

      <HotelSection />

      <LinesSection />

      <ContactSection />

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;
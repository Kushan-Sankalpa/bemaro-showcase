import { useState, useEffect } from 'react';
import { Navbar } from '@/components/hotel/Navbar';
import { HeroSlider } from '@/components/hotel/HeroSlider';
import { PerfectThought } from '@/components/hotel/PerfectThought';
import { NearbyDestinations } from '@/components/hotel/NearbyDestinations';
import { PhotoDescription } from '@/components/hotel/PhotoDescription';
import { Testimonials } from '@/components/hotel/Testimonials';
import { PlatformRatings } from '@/components/hotel/PlatformRatings';
import { Footer } from '@/components/hotel/Footer';
import { AboutSection } from '@/components/hotel/AboutSection';
import { GallerySection } from '@/components/hotel/GallerySection';
import { WeddingsEvents } from '@/components/hotel/WeddingsEvents';
import { OffersSection } from '@/components/hotel/OffersSection';
import { ContactSection } from '@/components/hotel/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Handle hash routing
    const hash = window.location.hash.replace('#', '') || 'home';
    setCurrentSection(hash);
  }, []);

  useEffect(() => {
    window.location.hash = currentSection;
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <HeroSlider onNavigate={handleNavigate} />
            <PerfectThought />
            <NearbyDestinations />
            <PhotoDescription />
            <Testimonials />
            <PlatformRatings />
          </>
        );
      case 'about':
        return <AboutSection />;
      case 'gallery':
        return <GallerySection />;
      case 'weddings':
        return <WeddingsEvents />;
      case 'offers':
        return <OffersSection onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSlider onNavigate={handleNavigate} />
            <PerfectThought />
            <NearbyDestinations />
            <PhotoDescription />
            <Testimonials />
            <PlatformRatings />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
      <main>
        {renderSection()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;

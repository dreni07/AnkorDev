import React from 'react';
import { LandingLayout } from '../../components/templates/LandingLayout';
import { HeroSection } from '../../components/organisms/HeroSection';
import { FeaturePreviewSection } from '../../components/organisms/FeaturePreviewSection';
import { ServicesSection } from '../../components/organisms/ServicesSection';
import { AboutSection } from '../../components/organisms/AboutSection';
import { HowWeWorkSection } from '../../components/organisms/HowWeWorkSection';
import { FAQSection } from '../../components/organisms/FAQSection';
import { Footer } from '../../components/organisms/Footer';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <LandingLayout>
      <div className="home__main-content">
        <HeroSection />
        <FeaturePreviewSection />
        <ServicesSection />
        <AboutSection />
        <HowWeWorkSection />
        <FAQSection />
        <Footer />
      </div>
    </LandingLayout>
  );
};

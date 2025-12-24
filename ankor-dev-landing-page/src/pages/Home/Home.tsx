import React from 'react';
import { LandingLayout } from '../../components/templates/LandingLayout';
import { HeroSection } from '../../components/organisms/HeroSection';
import { FeaturePreviewSection } from '../../components/organisms/FeaturePreviewSection';
import { AboutSection } from '../../components/organisms/AboutSection';
import { FAQSection } from '../../components/organisms/FAQSection';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <LandingLayout>
      <div className="home__main-content">
        <HeroSection />
        <FeaturePreviewSection />
        <AboutSection />
        <FAQSection />
      </div>
    </LandingLayout>
  );
};

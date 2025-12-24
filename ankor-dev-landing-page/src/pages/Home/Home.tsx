import React from 'react';
import { LandingLayout } from '../../components/templates/LandingLayout';
import { HeroSection } from '../../components/organisms/HeroSection';
import { FeaturePreviewSection } from '../../components/organisms/FeaturePreviewSection';
import { FAQSection } from '../../components/organisms/FAQSection';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <LandingLayout>
      <div className="home__main-content">
        <HeroSection />
        <FeaturePreviewSection />
        <FAQSection />
      </div>
    </LandingLayout>
  );
};

import React from 'react';
import { LandingLayout } from '../../components/templates/LandingLayout';
import { HeroSection } from '../../components/organisms/HeroSection';
import { FeaturePreviewSection } from '../../components/organisms/FeaturePreviewSection';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <LandingLayout>
      <div className="home__main-content">
        <HeroSection />
        <FeaturePreviewSection />
      </div>
    </LandingLayout>
  );
};

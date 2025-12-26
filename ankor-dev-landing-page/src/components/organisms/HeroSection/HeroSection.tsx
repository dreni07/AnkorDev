import React from 'react';
import { heroConfig } from '../../../config/hero.config';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { useFadeIn } from '../../../hooks/useFadeIn';
import { useParallax } from '../../../hooks/useParallax';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [ref, style] = useFadeIn({ delay: 0.2 });
  const { scrollY, mouseX, mouseY } = useParallax();

  // Helper to calculate shape transform
  const getShapeStyle = (scrollSpeed: number, mouseSpeed: number) => ({
    transform: `translate3d(${mouseX * mouseSpeed}px, ${scrollY * scrollSpeed + mouseY * mouseSpeed}px, 0)`,
  });

  return (
    <section id="home" className="hero-section" ref={ref} style={style}>
      <div 
        className="hero-section__spotlight" 
        style={{
          background: `radial-gradient(600px circle at ${(mouseX + 0.5) * 100}% ${(mouseY + 0.5) * 100}%, rgba(107, 114, 128, 0.06), transparent 80%)`
        }}
      />
      <div className="hero-section__background">
        <div className="hero-section__shape hero-section__shape--2" style={getShapeStyle(0.1, 20)} />
        <div className="hero-section__shape hero-section__shape--3" style={getShapeStyle(-0.05, 40)} />
        <div className="hero-section__shape hero-section__shape--4" style={getShapeStyle(0.15, -30)} />
        <div className="hero-section__shape hero-section__shape--5" style={getShapeStyle(0.08, 15)} />
        <div className="hero-section__shape hero-section__shape--6" style={getShapeStyle(-0.12, -50)} />
        <div className="hero-section__shape hero-section__shape--7" style={getShapeStyle(0.2, 25)} />
        <div className="hero-section__shape hero-section__shape--8" style={getShapeStyle(0.05, -20)} />
        <div className="hero-section__shape hero-section__shape--9" style={getShapeStyle(-0.08, 60)} />
        <div className="hero-section__shape hero-section__shape--10" style={getShapeStyle(0.12, -15)} />
        <div className="hero-section__shape hero-section__shape--11" style={getShapeStyle(0.03, 35)} />
        <div className="hero-section__shape hero-section__shape--12" style={getShapeStyle(-0.15, -45)} />
      </div>
      
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__headline">
            {heroConfig.headline}
            {heroConfig.headlineHighlight && (
              <>
                {' '}
                <span className="hero-section__headline-highlight">{heroConfig.headlineHighlight}</span>
              </>
            )}
          </h1>

          <div className="hero-section__subheadline">
            {heroConfig.subheadline.map((item, index) => (
              <Text key={index} variant="body" className="hero-section__subheadline-item">
                {item}
                {index < heroConfig.subheadline.length - 1 && <span className="hero-section__separator"> • </span>}
              </Text>
            ))}
          </div>

          <Button href={heroConfig.cta.href} variant="primary" size="lg" className="hero-section__cta">
            {heroConfig.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

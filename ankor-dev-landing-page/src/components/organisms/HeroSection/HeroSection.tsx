import React from 'react';
import { heroConfig } from '../../../config/hero.config';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { useFadeIn } from '../../../hooks/useFadeIn';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const [ref, style] = useFadeIn({ delay: 0.2 });

  return (
    <section id="home" className="hero-section" ref={ref} style={style}>
      <div className="hero-section__background">
        <div className="hero-section__shape hero-section__shape--2" />
        <div className="hero-section__shape hero-section__shape--3" />
        <div className="hero-section__shape hero-section__shape--4" />
        <div className="hero-section__shape hero-section__shape--5" />
        <div className="hero-section__shape hero-section__shape--6" />
        <div className="hero-section__shape hero-section__shape--7" />
        <div className="hero-section__shape hero-section__shape--8" />
        <div className="hero-section__shape hero-section__shape--9" />
        <div className="hero-section__shape hero-section__shape--10" />
        <div className="hero-section__shape hero-section__shape--11" />
        <div className="hero-section__shape hero-section__shape--12" />
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

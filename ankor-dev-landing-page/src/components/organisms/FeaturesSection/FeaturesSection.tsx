import React from 'react';
import { featuresConfig } from '../../../config/features.config';
import { FeatureCard } from '../../molecules/FeatureCard';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './FeaturesSection.css';

export const FeaturesSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });

  return (
    <section className="features-section" ref={ref} style={style}>
      <div className="features-section__container">
        <div className="features-section__header">
          <Badge variant="default" className="features-section__badge">
            • Features
          </Badge>
          <Text variant="h2" className="features-section__title">
            Some of our exclusive features
          </Text>
        </div>
        <div className="features-section__grid">
          {featuresConfig.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bulletPoints={feature.bulletPoints}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

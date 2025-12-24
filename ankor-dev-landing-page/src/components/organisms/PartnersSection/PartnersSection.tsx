import React from 'react';
import { partnersConfig } from '../../../config/partners.config';
import { Text } from '../../atoms/Text';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './PartnersSection.css';

export const PartnersSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.2, offset: 30 });

  return (
    <section className="partners-section" ref={ref} style={style}>
      <div className="partners-section__container">
        <Text variant="h2" className="partners-section__title">
          Our Valuable Trusted Partner
        </Text>
        <div className="partners-section__grid">
          {partnersConfig.map((partner) => (
            <div key={partner.id} className="partners-section__logo">
              <Text variant="small" className="partners-section__logo-text">
                {partner.logo}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

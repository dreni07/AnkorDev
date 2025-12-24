import React from 'react';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { useFadeIn } from '../../../hooks/useFadeIn';
import './CTASection.css';

export interface CTASectionProps {
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline,
  description,
  ctaLabel,
  ctaHref,
}) => {
  const [ref, style] = useFadeIn({ delay: 0.2 });

  return (
    <section className="cta-section" ref={ref} style={style}>
      <div className="cta-section__container">
        <Text variant="h2" className="cta-section__headline">
          {headline}
        </Text>
        <Text variant="body" className="cta-section__description">
          {description}
        </Text>
        <Button href={ctaHref} variant="primary" size="lg" className="cta-section__button">
          {ctaLabel} <Icon name="arrow-right" size={20} />
        </Button>
      </div>
    </section>
  );
};

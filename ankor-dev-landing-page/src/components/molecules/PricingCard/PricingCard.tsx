import React from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import './PricingCard.css';

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  className = '',
}) => {
  const baseClass = `pricing-card ${highlighted ? 'pricing-card--highlighted' : ''} ${className}`.trim();

  return (
    <div className={baseClass}>
      <Text variant="h3" className="pricing-card__title">
        {title}
      </Text>
      <div className="pricing-card__price">
        <Text variant="h1">{price}</Text>
      </div>
      <Text variant="body" className="pricing-card__description">
        {description}
      </Text>
      <ul className="pricing-card__features">
        {features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <Text variant="small">{feature}</Text>
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant={highlighted ? 'primary' : 'secondary'} className="pricing-card__cta">
        {ctaLabel}
      </Button>
    </div>
  );
};

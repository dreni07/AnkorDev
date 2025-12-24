import React from 'react';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './FeatureCard.css';

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bulletPoints: string[];
  imageUrl?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  bulletPoints,
  imageUrl,
  className = '',
}) => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });

  const baseClass = `feature-card ${className}`.trim();

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={baseClass} style={style}>
      <div className="feature-card__icon">
        <Icon type={icon} size={32} />
      </div>
      <Text variant="h3" className="feature-card__title">
        {title}
      </Text>
      <Text variant="body" className="feature-card__description">
        {description}
      </Text>
      <ul className="feature-card__bullets">
        {bulletPoints.map((point, index) => (
          <li key={index} className="feature-card__bullet">
            <Text variant="small">{point}</Text>
          </li>
        ))}
      </ul>
      {imageUrl && (
        <div className="feature-card__image">
          <div className="feature-card__image-placeholder" />
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../atoms/Button';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  type: 'development' | 'design' | 'marketing';
  icon: string;
  description?: string;
  delay?: number;
  onLearnMore?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  type, 
  icon, 
  description, 
  delay = 0,
  onLearnMore 
}) => {
  const [ref, animationStyle] = useScrollAnimation({ delay, offset: 40 });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      style={{ ...animationStyle, display: 'flex', justifyContent: 'center' }}
    >
      <div className={`service-card service-card--${type}`}>
        <div className="service-card__dot-pattern" />
        <div className="service-card__icon-wrapper">
          <Icon name={icon as any} size="lg" />
        </div>
        <Text variant="h3" className="service-card__title">
          {title}
        </Text>
        {description && (
          <Text variant="body" className="service-card__description">
            {description}
          </Text>
        )}
        <Button 
          variant="primary" 
          className="service-card__button"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
        <div className="service-card__visual">
          <div className={`service-card__blob service-card__blob--${type}`} />
        </div>
      </div>
    </div>
  );
};

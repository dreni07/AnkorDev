import React from 'react';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { TypewriterText } from '../../molecules/TypewriterText';
import { aboutConfig } from '../../../config/about.config';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });

  return (
    <section className="about-section" ref={ref} style={style}>
      <div className="about-section__container">
        <div className="about-section__header">
          <Badge variant="default" className="about-section__badge">
            • {aboutConfig.label}
          </Badge>
          <Text variant="h2" className="about-section__title">
            {aboutConfig.title}
          </Text>
        </div>
        <div className="about-section__content">
          <TypewriterText 
            text={aboutConfig.content}
            highlights={aboutConfig.highlightedWords}
            delay={8} // 8ms per character for a smooth flow
            className="about-section__text"
          />
        </div>
      </div>
    </section>
  );
};


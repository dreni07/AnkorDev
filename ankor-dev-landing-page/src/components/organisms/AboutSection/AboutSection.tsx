import React from 'react';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });

  return (
    <section className="about-section" ref={ref} style={style}>
      <div className="about-section__container">
        <div className="about-section__header">
          <Badge variant="default" className="about-section__badge">
            • About
          </Badge>
          <Text variant="h2" className="about-section__title">
            About Ankordev
          </Text>
        </div>
        <div className="about-section__content">
          <Text variant="body" className="about-section__text">
            At Ankordev, we turn <strong>common software development challenges</strong>—<strong>slow delivery, unclear communication, and inconsistent quality</strong>—into <strong>real results</strong>. We <strong>redefine</strong> how digital products are built. With <strong>strong expertise</strong> in <strong>software development, combined with design and marketing</strong>, we help businesses build <strong>reliable products, grow faster, and stand out online</strong>. From planning to launch, we deliver <strong>scalable solutions, clear collaboration, and high-quality execution</strong>—so your ideas move from <strong>concept to impact</strong>.
          </Text>
        </div>
      </div>
    </section>
  );
};


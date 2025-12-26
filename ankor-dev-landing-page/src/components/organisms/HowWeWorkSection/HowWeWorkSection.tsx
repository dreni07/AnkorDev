import React, { useState, useEffect, useRef } from 'react';
import { howWeWorkConfig } from '../../../config/howWeWork.config';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './HowWeWorkSection.css';

export const HowWeWorkSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start animation when element enters viewport
      // Progress from 0 to 1 as user scrolls through the timeline
      const startPoint = windowHeight * 0.5; // Start when element is 50% down viewport
      const endPoint = -elementHeight + windowHeight * 0.5; // End when element is scrolled past
      
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (startPoint - elementTop) / (startPoint - endPoint)
        )
      );

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="how-we-work-section" ref={ref} style={style}>
      <div className="how-we-work-section__container">
        <div className="how-we-work-section__header">
          <Badge variant="default" className="how-we-work-section__badge">
            • How We Work
          </Badge>
          <Text variant="h2" className="how-we-work-section__title">
            Our Process
          </Text>
        </div>
        <div className="how-we-work-section__timeline" ref={timelineRef}>
          <div className="how-we-work-section__line">
            <div
              className="how-we-work-section__line-progress"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <div className="how-we-work-section__steps">
            {howWeWorkConfig.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = progress >= index / (howWeWorkConfig.length - 1);
              
              return (
                <div key={step.id} className="how-we-work-section__step">
                  {isEven ? (
                    <>
                      <div className="how-we-work-section__step-content-wrapper">
                        <div className="how-we-work-section__step-content">
                          <div className="how-we-work-section__step-icon">
                            <Icon name={step.icon} size={32} />
                          </div>
                          <Text variant="h3" className="how-we-work-section__step-title">
                            {step.title}
                          </Text>
                          <Text variant="body" className="how-we-work-section__step-description">
                            {step.description}
                          </Text>
                        </div>
                      </div>
                      
                      <div className={`how-we-work-section__step-marker ${isActive ? 'how-we-work-section__step-marker--active' : ''}`}>
                        <div className="how-we-work-section__step-number">
                          {step.stepNumber}
                        </div>
                      </div>
                      
                      <div className="how-we-work-section__step-content-wrapper">
                        <div className="how-we-work-section__step-image">
                          <img src={step.imageUrl} alt={step.title} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="how-we-work-section__step-content-wrapper">
                        <div className="how-we-work-section__step-image">
                          <img src={step.imageUrl} alt={step.title} />
                        </div>
                      </div>
                      
                      <div className={`how-we-work-section__step-marker ${isActive ? 'how-we-work-section__step-marker--active' : ''}`}>
                        <div className="how-we-work-section__step-number">
                          {step.stepNumber}
                        </div>
                      </div>
                      
                      <div className="how-we-work-section__step-content-wrapper">
                        <div className="how-we-work-section__step-content">
                          <div className="how-we-work-section__step-icon">
                            <Icon name={step.icon} size={32} />
                          </div>
                          <Text variant="h3" className="how-we-work-section__step-title">
                            {step.title}
                          </Text>
                          <Text variant="body" className="how-we-work-section__step-description">
                            {step.description}
                          </Text>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


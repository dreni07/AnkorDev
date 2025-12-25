import React, { useState, useRef, useEffect } from 'react';
import { featuresConfig } from '../../../config/features.config';
import { Text } from '../../atoms/Text';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useCardSlider } from '../../../hooks/useCardSlider';
import { useResponsive } from '../../../hooks/useResponsive';
import './FeaturePreviewSection.css';

export const FeaturePreviewSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.2, offset: 30 });
  const { isDesktop } = useResponsive();
  const positions = useCardSlider(featuresConfig.length, 3500, !isDesktop);
  
  // Mobile slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < featuresConfig.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getCardPositionClass = (position: number): string => {
    if (position === 1) return 'feature-preview-card--center';
    if (position === 0) return 'feature-preview-card--left';
    if (position === 2) return 'feature-preview-card--right';
    return '';
  };

  return (
    <section className="feature-preview-section" ref={ref} style={style}>
      <div className="feature-preview-section__container">
        <div 
          className="feature-preview-section__cards"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {featuresConfig.map((feature, index) => {
            const currentPos = isDesktop ? positions[index] : (index === currentSlide ? 1 : index < currentSlide ? 0 : 2);
            
            return (
              <div
                key={feature.id}
                className={`feature-preview-card feature-preview-card--${feature.type} ${getCardPositionClass(currentPos)}`}
              >
                <Text variant="h3" className="feature-preview-card__title">
                  {feature.title}
                </Text>
                <Text variant="body" className="feature-preview-card__description">
                  {feature.description}
                </Text>
                <div className="feature-preview-card__visual">
                  {feature.type === 'team' && <TeamCollaborationVisual />}
                  {feature.type === 'planning' && <PlanningVisual />}
                  {feature.type === 'payments' && <PaymentsVisual />}
                </div>
              </div>
            );
          })}
        </div>
        {!isDesktop && (
          <div className="feature-preview-section__dots">
            {featuresConfig.map((_, index) => (
              <button
                key={index}
                className={`feature-preview-section__dot ${index === currentSlide ? 'feature-preview-section__dot--active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const TeamCollaborationVisual: React.FC = () => {
  return (
    <div className="visual-team">
      <div className="visual-team__messages">
        <div className="visual-team__message">
          <div className="visual-team__avatar" />
          <div className="visual-team__bubble">
            <div className="visual-team__bubble-line" />
            <div className="visual-team__bubble-line visual-team__bubble-line--short" />
          </div>
        </div>
        <div className="visual-team__message visual-team__message--right">
          <div className="visual-team__bubble visual-team__bubble--right">
            <div className="visual-team__bubble-line" />
          </div>
          <div className="visual-team__avatar" />
        </div>
        <div className="visual-team__message">
          <div className="visual-team__avatar" />
          <div className="visual-team__bubble">
            <div className="visual-team__bubble-line" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PlanningVisual: React.FC = () => {
  return (
    <div className="visual-planning">
      <div className="visual-planning__center">
        <span>Planquanta</span>
      </div>
      <svg className="visual-planning__orbits" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="1" />
      </svg>
      <div className="visual-planning__labels">
        <span className="visual-planning__label" style={{ top: '10%', left: '50%' }}>
          Ticketing
        </span>
        <span className="visual-planning__label" style={{ top: '30%', right: '5%' }}>
          Event Planning
        </span>
        <span className="visual-planning__label" style={{ bottom: '30%', right: '5%' }}>
          Scheduling
        </span>
        <span className="visual-planning__label" style={{ bottom: '10%', left: '50%' }}>
          Check-in
        </span>
        <span className="visual-planning__label" style={{ bottom: '30%', left: '5%' }}>
          Engagement
        </span>
        <span className="visual-planning__label" style={{ top: '30%', left: '5%' }}>
          Analytics
        </span>
        <span className="visual-planning__label" style={{ top: '50%', left: '5%' }}>
          Automation
        </span>
      </div>
    </div>
  );
};

const PaymentsVisual: React.FC = () => {
  return (
    <div className="visual-payments">
      <div className="visual-payments__shield">
        <div className="visual-payments__check">✓</div>
        <div className="visual-payments__ring visual-payments__ring--1" />
        <div className="visual-payments__ring visual-payments__ring--2" />
        <div className="visual-payments__ring visual-payments__ring--3" />
      </div>
      <div className="visual-payments__message">Subscription renewed successfully</div>
    </div>
  );
};

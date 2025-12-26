import React, { useState } from 'react';
import { faqConfig } from '../../../config/faq.config';
import { FAQItem } from '../../molecules/FAQItem';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './FAQSection.css';

export const FAQSection: React.FC = () => {
  const [headerRef, headerStyle] = useScrollAnimation({ delay: 0.1, offset: 30 });
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-section__container">
        <div className="faq-section__header" ref={headerRef} style={headerStyle}>
          <Badge variant="default" className="faq-section__badge">
            • FAQ
          </Badge>
          <Text variant="h2" className="faq-section__title">
            Frequently Asked Questions
          </Text>
          <Text variant="body" className="faq-section__subtitle">
            Find answers to common questions about our platform
          </Text>
        </div>
        <div className="faq-section__list">
          {faqConfig.map((faq, index) => (
            <AnimatedFAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedFAQItemProps {
  faq: typeof faqConfig[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AnimatedFAQItem: React.FC<AnimatedFAQItemProps> = ({ faq, isOpen, onToggle, index }) => {
  const [ref, style] = useScrollAnimation({ delay: 0.1 * index, offset: 20 });
  
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={style}>
      <FAQItem
        id={faq.id}
        question={faq.question}
        answer={faq.answer}
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </div>
  );
};


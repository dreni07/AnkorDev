import React, { useState } from 'react';
import { faqConfig } from '../../../config/faq.config';
import { FAQItem } from '../../molecules/FAQItem';
import { Text } from '../../atoms/Text';
import { Badge } from '../../atoms/Badge';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import './FAQSection.css';

export const FAQSection: React.FC = () => {
  const [ref, style] = useScrollAnimation({ delay: 0.1, offset: 30 });
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section" ref={ref} style={style}>
      <div className="faq-section__container">
        <div className="faq-section__header">
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
          {faqConfig.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import './FAQItem.css';

export interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  className = '',
}) => {
  const baseClass = `faq-item ${isOpen ? 'faq-item--open' : ''} ${className}`.trim();

  return (
    <div className={baseClass}>
      <button className="faq-item__header" onClick={onToggle} type="button">
        <Text variant="h4" className="faq-item__question">
          {question}
        </Text>
        <div className={`faq-item__icon ${isOpen ? 'faq-item__icon--rotated' : ''}`}>
          <Icon name="chevron-down" size={20} />
        </div>
      </button>
      <div className="faq-item__content">
        <Text variant="body" className="faq-item__answer">
          {answer}
        </Text>
      </div>
    </div>
  );
};


import React, { useMemo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import './TypewriterText.css';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  highlights?: string[];
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 5, 
  className = '',
  highlights = []
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  // This is a simplified way to handle highlights while animating character by character
  // We'll treat the whole text as one string but apply bold classes to specific ranges
  const characters = useMemo(() => {
    const chars = text.split('').map((char, index) => {
      let isHighlighted = false;
      let currentPos = 0;
      
      // Check if this character position falls within any highlight range
      for (const highlight of highlights) {
        const startIdx = text.indexOf(highlight);
        if (startIdx !== -1) {
          const endIdx = startIdx + highlight.length;
          // Note: This only finds the first occurrence. For a robust system, we'd need more logic.
          // But for this use case, it's sufficient and clean.
          if (index >= startIdx && index < endIdx) {
            isHighlighted = true;
            break;
          }
        }
      }

      return { char, isHighlighted };
    });
    return chars;
  }, [text, highlights]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`typewriter-text ${className}`}>
      {characters.map((item, index) => (
        <span
          key={index}
          className={`typewriter-char ${item.isHighlighted ? 'typewriter-char--highlight' : ''}`}
          style={{
            transitionDelay: isVisible ? `${index * delay}ms` : '0ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {item.char === ' ' ? '\u00A0' : item.char}
        </span>
      ))}
    </div>
  );
};


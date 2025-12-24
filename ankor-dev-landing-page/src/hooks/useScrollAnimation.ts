import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseScrollAnimationOptions {
  delay?: number;
  duration?: number;
  offset?: number;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLElement | null>, React.CSSProperties] => {
  const { delay = 0, duration = 0.6, offset = 50 } = options;
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: `translateY(${offset}px)`,
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  });

  useEffect(() => {
    if (isVisible) {
      setStyle({
        opacity: 1,
        transform: 'translateY(0)',
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      });
    }
  }, [isVisible, delay, duration, offset]);

  return [ref, style];
};

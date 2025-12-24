import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseFadeInOptions {
  delay?: number;
  duration?: number;
}

export const useFadeIn = (
  options: UseFadeInOptions = {}
): [RefObject<HTMLElement | null>, React.CSSProperties] => {
  const { delay = 0, duration = 0.6 } = options;
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const [style, setStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transition: `opacity ${duration}s ease-out ${delay}s`,
  });

  useEffect(() => {
    if (isVisible) {
      setStyle({
        opacity: 1,
        transition: `opacity ${duration}s ease-out ${delay}s`,
      });
    }
  }, [isVisible, delay, duration]);

  return [ref, style];
};

import { useEffect, useState, useCallback } from 'react';

interface ParallaxState {
  scrollY: number;
  mouseX: number;
  mouseY: number;
}

/**
 * Enhanced Parallax hook that tracks scroll and mouse position
 */
export const useParallax = () => {
  const [state, setState] = useState<ParallaxState>({
    scrollY: 0,
    mouseX: 0,
    mouseY: 0,
  });

  const handleScroll = useCallback(() => {
    setState((prev) => ({
      ...prev,
      scrollY: window.pageYOffset,
    }));
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setState((prev) => ({
      ...prev,
      mouseX: (e.clientX / window.innerWidth) - 0.5,
      mouseY: (e.clientY / window.innerHeight) - 0.5,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return state;
};

import { useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0 } = options;
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setTransform(scrolled * speed + offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, offset]);

  return transform;
};

import { useEffect, useState } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useResponsive = (breakpoints: Breakpoints = defaultBreakpoints) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < breakpoints.md,
    isTablet: windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
    isDesktop: windowSize.width >= breakpoints.lg,
    isSmall: windowSize.width < breakpoints.sm,
    isMedium: windowSize.width >= breakpoints.sm && windowSize.width < breakpoints.md,
    isLarge: windowSize.width >= breakpoints.lg,
  };
};

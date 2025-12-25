import { useState, useEffect } from 'react';

/**
 * Custom hook for rotating array items' positions
 * @param count Number of items to rotate
 * @param interval Duration in milliseconds between rotations
 * @param disabled If true, rotation is paused
 * @returns Array of indexes mapping original item index to its current position (0=left, 1=center, 2=right)
 */
export const useCardSlider = (count: number = 3, interval: number = 3000, disabled: boolean = false) => {
  // order[originalIndex] = currentPosition
  // Initial: [0, 1, 2] -> index 0 is pos 0 (left), 1 is pos 1 (center), 2 is pos 2 (right)
  const [positions, setPositions] = useState<number[]>(Array.from({ length: count }, (_, i) => i));

  useEffect(() => {
    if (count <= 1 || disabled) return;

    const timer = setInterval(() => {
      setPositions((prev) => {
   
        
        const next = [...prev];
        const lastValue = next[next.length - 1];
        
        return prev.map(pos => (pos + 1) % count);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  return positions;
};


import React from 'react';
import { Icon } from '../Icon';
import { useNavbarScroll } from '../../../hooks/useNavbarScroll';
import './ScrollToTop.css';

export const ScrollToTop: React.FC = () => {
  const isVisible = useNavbarScroll(400);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <Icon name="arrow-up" size="sm" />
    </button>
  );
};


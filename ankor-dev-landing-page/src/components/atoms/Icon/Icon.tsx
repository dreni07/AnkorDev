import React from 'react';
import './Icon.css';

export type IconType = 'wallet' | 'team' | 'analytics' | 'star' | 'menu' | 'close' | 'arrow-right';

export interface IconProps {
  type: IconType | string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, string> = {
  wallet: '💰',
  team: '👥',
  analytics: '📊',
  star: '⭐',
  menu: '☰',
  close: '✕',
  'arrow-right': '→',
};

export const Icon: React.FC<IconProps> = ({ type, size = 24, className = '' }) => {
  const baseClass = `icon icon--${type} ${className}`.trim();
  const iconSymbol = iconMap[type] || '•';

  return (
    <span className={baseClass} style={{ fontSize: `${size}px` }}>
      {iconSymbol}
    </span>
  );
};

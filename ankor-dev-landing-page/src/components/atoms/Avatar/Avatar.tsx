import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name,
  size = 'md',
  className = '',
}) => {
  const baseClass = `avatar avatar--${size} ${className}`.trim();

  if (src) {
    return <img src={src} alt={alt} className={baseClass} />;
  }

  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '?';

  return (
    <div className={baseClass}>
      <span>{initials}</span>
    </div>
  );
};

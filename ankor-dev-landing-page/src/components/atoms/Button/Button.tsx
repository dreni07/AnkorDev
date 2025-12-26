import React from 'react';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}) => {
  const baseClass = `button button--${variant} button--${size} ${className}`.trim();

  const content = (
    <>
      <span className="button__shimmer" />
      <span className="button__content">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClass} onClick={onClick}>
      {content}
    </button>
  );
};

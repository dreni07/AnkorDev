import React from 'react';
import './Text.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'label';
  className?: string;
  as?: React.ElementType;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className = '',
  as,
}) => {
  const Component = (as || (variant.startsWith('h') ? variant : 'p')) as React.ElementType;
  const baseClass = `text text--${variant} ${className}`.trim();

  return <Component className={baseClass}>{children}</Component>;
};

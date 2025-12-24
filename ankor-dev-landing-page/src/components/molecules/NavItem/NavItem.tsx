import React from 'react';
import { Text } from '../../atoms/Text';
import './NavItem.css';

export interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({ label, href, active = false, className = '' }) => {
  const baseClass = `nav-item ${active ? 'nav-item--active' : ''} ${className}`.trim();

  return (
    <a href={href} className={baseClass}>
      <Text variant="body" className="nav-item__text">
        {label}
      </Text>
    </a>
  );
};

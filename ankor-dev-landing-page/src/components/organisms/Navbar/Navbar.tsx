import React, { useState } from 'react';
import { navigationConfig, navbarButtons } from '../../../config/navigation.config';
import { companyConfig } from '../../../config/company.config';
import { NavItem } from '../../molecules/NavItem';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { useResponsive } from '../../../hooks/useResponsive';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  const baseClass = `navbar ${isMenuOpen ? 'navbar--menu-open' : ''}`.trim();

  return (
    <nav className={baseClass} id="main-nav">
      <div className="navbar__container">
        <div className="navbar__left">
          {isMobile && (
            <button
              className="navbar__menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? 'close' : 'menu'} size={24} />
            </button>
          )}
          <div className="navbar__brand">
            <Avatar name={companyConfig.name} size="sm" className="navbar__logo-icon" />
            <Text variant="h4" className="navbar__logo">
              {companyConfig.logo}
            </Text>
          </div>
        </div>

        {!isMobile && (
          <>
            <div className="navbar__center">
              <div className="navbar__links">
                {navigationConfig.map((item) => (
                  <NavItem key={item.id} label={item.label} href={item.href} active={item.active} />
                ))}
              </div>
            </div>
            <div className="navbar__buttons">
              <Button href={navbarButtons.signUp.href} variant="secondary" size="sm">
                {navbarButtons.signUp.label}
              </Button>
              <Button href={navbarButtons.contact.href} variant="primary" size="sm">
                {navbarButtons.contact.label}
              </Button>
            </div>
          </>
        )}

        {isMobile && isMenuOpen && (
          <div className="navbar__mobile-menu">
            <div className="navbar__links">
              {navigationConfig.map((item) => (
                <NavItem key={item.id} label={item.label} href={item.href} active={item.active} />
              ))}
            </div>
            <div className="navbar__buttons">
              <Button href={navbarButtons.signUp.href} variant="secondary" size="sm">
                {navbarButtons.signUp.label}
              </Button>
              <Button href={navbarButtons.contact.href} variant="primary" size="sm">
                {navbarButtons.contact.label}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

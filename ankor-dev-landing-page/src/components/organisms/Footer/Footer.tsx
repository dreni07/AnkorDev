import React from 'react';
import { companyConfig } from '../../../config/company.config';
import { Text } from '../../atoms/Text';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <Text variant="h4" className="footer__logo">
              {companyConfig.logo}
            </Text>
            <Text variant="small" className="footer__description">
              {companyConfig.footer.description}
            </Text>
          </div>

          <div className="footer__links">
            <div className="footer__links-group">
              <Text variant="label" className="footer__links-title">
                Legal
              </Text>
              {companyConfig.footer.legal.map((link) => (
                <a key={link.id} href={link.href} className="footer__link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>

            <div className="footer__links-group">
              <Text variant="label" className="footer__links-title">
                Social
              </Text>
              {companyConfig.footer.socialLinks.map((link) => (
                <a key={link.id} href={link.href} className="footer__link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <Text variant="small" className="footer__copyright">
            © {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

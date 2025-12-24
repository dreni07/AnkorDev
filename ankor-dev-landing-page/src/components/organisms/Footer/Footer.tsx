import React from 'react';
import { companyConfig } from '../../../config/company.config';
import { Text } from '../../atoms/Text';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
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
                Company
              </Text>
              {companyConfig.footer.company.map((link) => (
                <a key={link.id} href={link.href} className="footer__link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>

            <div className="footer__links-group">
              <Text variant="label" className="footer__links-title">
                Software
              </Text>
              {companyConfig.footer.software.map((link) => (
                <a key={link.id} href={link.href} className="footer__link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>

            <div className="footer__links-group">
              <Text variant="label" className="footer__links-title">
                Contact
              </Text>
              {companyConfig.footer.contact.map((link) => (
                <a key={link.id} href={link.href} className="footer__link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>

            <div className="footer__links-group">
              <Text variant="label" className="footer__links-title">
                Social
              </Text>
              {companyConfig.footer.socialLinks.map((link) => {
                const getIcon = (id: string) => {
                  switch (id.toLowerCase()) {
                    case 'twitter':
                      return <FaTwitter className="footer__social-icon" />;
                    case 'linkedin':
                      return <FaLinkedin className="footer__social-icon" />;
                    case 'github':
                      return <FaGithub className="footer__social-icon" />;
                    case 'facebook':
                      return <FaFacebook className="footer__social-icon" />;
                    case 'instagram':
                      return <FaInstagram className="footer__social-icon" />;
                    case 'youtube':
                      return <FaYoutube className="footer__social-icon" />;
                    default:
                      return null;
                  }
                };

                return (
                  <a key={link.id} href={link.href} className="footer__link footer__social-link">
                    {getIcon(link.id)}
                    <Text variant="small">{link.label}</Text>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <Text variant="h4" className="footer__bottom-logo">
              {companyConfig.logo}
            </Text>
            <div className="footer__legal-links">
              {companyConfig.footer.legal.map((link) => (
                <a key={link.id} href={link.href} className="footer__legal-link">
                  <Text variant="small">{link.label}</Text>
                </a>
              ))}
            </div>
          </div>
          <Text variant="small" className="footer__copyright">
            © {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

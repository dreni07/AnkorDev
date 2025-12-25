import React, { useState } from 'react';
import { servicesConfig, type ServiceConfig } from '../../../config/services.config';
import { ServiceCard } from '../../molecules/ServiceCard/ServiceCard';
import { Modal } from '../../molecules/Modal';
import { Icon } from '../../atoms/Icon';
import { Text } from '../../atoms/Text';
import { useFadeIn } from '../../../hooks/useFadeIn';
import { useModal } from '../../../hooks/useModal';
import './ServicesSection.css';

export const ServicesSection: React.FC = () => {
  const [sectionRef, sectionStyle] = useFadeIn({ delay: 0.1 });
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedService, setSelectedService] = useState<ServiceConfig | null>(null);

  const handleLearnMore = (service: ServiceConfig) => {
    setSelectedService(service);
    openModal();
  };

  return (
    <section id="services" className="services-section" ref={sectionRef} style={sectionStyle}>
      <div className="services-section__container">
        <div className="services-section__header">
          <div className="services-section__label">Services</div>
          <h2 className="services-section__title">Expertise we provide</h2>
        </div>
        
        <div className="services-section__grid">
          <svg style={{ position: 'absolute', width: 0, height: 0 }}>
            <defs>
              <linearGradient id="wavy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(169, 201, 255, 0.6)" />
                <stop offset="50%" stopColor="rgba(255, 180, 162, 0.6)" />
                <stop offset="100%" stopColor="rgba(195, 217, 255, 0.6)" />
              </linearGradient>
            </defs>
          </svg>
          {servicesConfig.map((service, index) => (
            <React.Fragment key={service.id}>
              <ServiceCard
                title={service.title}
                type={service.type}
                icon={service.icon}
                description={service.description}
                delay={0.2 * index}
                onLearnMore={() => handleLearnMore(service)}
              />
              {index < servicesConfig.length - 1 && (
                <ServiceConnector delay={0.2 * index + 0.1} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={selectedService?.modalContent.title || ''}
        description={selectedService?.modalContent.description || ''}
      >
        {selectedService && (
          <div className="service-modal-content">
            <div className="service-modal-features">
              {selectedService.modalContent.features.map((feature, idx) => (
                <div key={idx} className="service-modal-feature">
                  <Icon name="star" size={16} className="service-modal-feature-icon" />
                  <Text variant="body">{feature}</Text>
                </div>
              ))}
            </div>
            <div className="service-modal-divider" />
            <Text variant="body" className="service-modal-detailed-text">
              {selectedService.modalContent.detailedContent}
            </Text>
          </div>
        )}
      </Modal>
    </section>
  );
};

const ServiceConnector: React.FC<{ delay: number }> = ({ delay }) => {
  const [ref, style] = useFadeIn({ delay, duration: 0.8 });
  

  return (
    <div className="services-section__connector" ref={ref as React.RefObject<HTMLDivElement>} style={style}>
      <svg 
        viewBox="0 0 100 20" 
        fill="none" 
        preserveAspectRatio="none"
        className="services-section__wavy-line"
      >
        <path 
          d="M0,10 Q25,0 50,10 T100,10" 
          stroke="url(#wavy-gradient)" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
          strokeLinecap="round"
        />
      </svg>
      <div className="services-section__connector-arrow">
        <Icon name="arrow-right" size={16} />
      </div>
    </div>
  );
};

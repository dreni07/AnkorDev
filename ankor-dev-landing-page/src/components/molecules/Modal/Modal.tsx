import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../../atoms/Text';
import { Icon } from '../../atoms/Icon';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  className = '',
  maxWidth = '600px',
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = '';
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return createPortal(
    <div className={`modal-overlay ${isVisible ? 'modal-overlay--open' : ''}`} onClick={onClose}>
      <div 
        className={`modal-container ${isVisible ? 'modal-container--open' : ''} ${className}`}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-header__content">
            <Text variant="h3" className="modal-title">{title}</Text>
            {description && (
              <Text variant="body" className="modal-description">{description}</Text>
            )}
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <Icon name="close" size={20} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};


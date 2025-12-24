import React from 'react';
import { Text } from '../../atoms/Text';
import { Avatar } from '../../atoms/Avatar';
import { Icon } from '../../atoms/Icon';
import './Testimonial.css';

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className = '',
}) => {
  const baseClass = `testimonial ${className}`.trim();

  return (
    <div className={baseClass}>
      <div className="testimonial__rating">
        {Array.from({ length: rating }).map((_, index) => (
          <Icon key={index} type="star" size={20} />
        ))}
      </div>
      <Text variant="body" className="testimonial__quote">
        "{quote}"
      </Text>
      <div className="testimonial__author">
        <Avatar src={avatar} name={author} size="md" />
        <div className="testimonial__author-info">
          <Text variant="small" className="testimonial__author-name">
            {author}
          </Text>
          <Text variant="small" className="testimonial__author-role">
            {role}
          </Text>
        </div>
      </div>
    </div>
  );
};

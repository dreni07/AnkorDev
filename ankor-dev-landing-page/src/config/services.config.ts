export interface ServiceConfig {
  id: string;
  title: string;
  type: 'development' | 'design' | 'marketing';
  icon: string;
  description?: string;
}

export const servicesConfig: ServiceConfig[] = [
  {
    id: 'service-1',
    title: 'Development',
    type: 'development',
    icon: 'code',
    description: 'We build high-performance, scalable, and secure digital products. From complex web applications to custom enterprise solutions, our engineering team ensures your vision is brought to life with the latest tech stack.',
  },
  {
    id: 'service-2',
    title: 'Design',
    type: 'design',
    icon: 'layout',
    description: 'Our design philosophy centers on user experience and premium aesthetics. We create intuitive interfaces and engaging brand identities that resonate with your audience and elevate your digital presence.',
  },
  {
    id: 'service-3',
    title: 'Marketing',
    type: 'marketing',
    icon: 'trending-up',
    description: 'Grow your business with data-driven marketing strategies. We specialize in performance marketing, brand positioning, and digital growth tactics that drive conversion and maximize your return on investment.',
  },
];


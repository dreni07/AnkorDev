export interface HeroConfig {
  headline: string;
  headlineHighlight: string;
  subheadline: string[];
  cta: {
    label: string;
    href: string;
  };
}

export const heroConfig: HeroConfig = {
  headline: 'We turn ideas into scalable digital products that grow',
  headlineHighlight: 'businesses',
  subheadline: [
    'Guest management',
    'Task tracking',
    'Real-time updates',
    'Ease of planning',
  ],
  cta: {
    label: 'Start Planning Today',
    href: '#',
  },
};

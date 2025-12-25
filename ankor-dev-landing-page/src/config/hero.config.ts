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
  headline: 'We build websites, brands, and digital systems that scale your',
  headlineHighlight: 'business.',
  subheadline: [
    'Websites',
    'Logos & Branding',
    'UI/UX',
    'Marketing',
    'Custom Digital Solutions',
  ],
  cta: {
    label: 'Build Product',
    href: '#',
  },
};

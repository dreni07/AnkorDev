export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export const navigationConfig: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', active: true },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'about', label: 'About', href: '#about' },
];

export const navbarButtons = {
  signUp: {
    label: 'Sign Up',
    href: '#',
    variant: 'secondary' as const,
  },
  contact: {
    label: 'Contact Us',
    href: '#',
    variant: 'primary' as const,
  },
};

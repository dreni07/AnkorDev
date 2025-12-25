export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export const navigationConfig: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', active: true },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
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

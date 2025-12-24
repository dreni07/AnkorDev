export interface Feature {
  id: string;
  title: string;
  description: string;
  type: 'team' | 'planning' | 'payments';
}

export const featuresConfig: Feature[] = [
  {
    id: '1',
    title: 'Seamless Team Collaboration',
    description: 'Coordinate tasks and communication effortlessly with your team members in real-time.',
    type: 'team',
  },
  {
    id: '2',
    title: 'All-in-One Event Planning',
    description: 'Multiple planning tools combined into one platform for complete event management.',
    type: 'planning',
  },
  {
    id: '3',
    title: 'Secure Payments & Billing',
    description: 'Safe and secure payment processing with transparent billing management.',
    type: 'payments',
  },
];

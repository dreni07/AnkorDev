export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  stepNumber: number;
  icon: string;
  imageUrl?: string;
}

export const howWeWorkConfig: ProcessStep[] = [
  {
    id: '1',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, identifying key opportunities and crafting a roadmap tailored to your vision.',
    stepNumber: 1,
    icon: 'analytics',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Design & Prototyping',
    description: 'Our designers create stunning, user-centric interfaces. You get to see interactive prototypes before a single line of code is written.',
    stepNumber: 2,
    icon: 'layout',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Development & Testing',
    description: 'We build your product using modern technologies and best practices, with continuous testing to ensure quality and performance.',
    stepNumber: 3,
    icon: 'code',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Launch & Support',
    description: 'We deploy your product and provide ongoing support, monitoring, and optimization to ensure long-term success and growth.',
    stepNumber: 4,
    icon: 'trending-up',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
];


export interface ServiceModalContent {
  title: string;
  description: string;
  features: string[];
  detailedContent: string;
}

export interface ServiceConfig {
  id: string;
  title: string;
  type: 'development' | 'design' | 'marketing';
  icon: string;
  description?: string;
  modalContent: ServiceModalContent;
}

export const servicesConfig: ServiceConfig[] = [
  {
    id: 'service-1',
    title: 'Development',
    type: 'development',
    icon: 'code',
    description: 'We build high-performance, scalable, and secure digital products. From complex web applications to custom enterprise solutions, our engineering team ensures your vision is brought to life with the latest tech stack.',
    modalContent: {
      title: 'Expert Software Development',
      description: 'Building the backbone of your digital success with modern engineering practices.',
      features: [
        'Full-stack Web Applications',
        'Mobile App Development',
        'Cloud Infrastructure & DevOps',
        'API Integration & Development',
        'Legacy System Modernization'
      ],
      detailedContent: 'Our development team specializes in creating robust, scalable solutions that grow with your business. We use modern frameworks like React, Node.js, and Python to ensure your product is fast, secure, and maintainable. From the initial architecture to the final deployment, we focus on code quality and performance.'
    }
  },
  {
    id: 'service-2',
    title: 'Design',
    type: 'design',
    icon: 'layout',
    description: 'Our design philosophy centers on user experience and premium aesthetics. We create intuitive interfaces and engaging brand identities that resonate with your audience and elevate your digital presence.',
    modalContent: {
      title: 'Premium UI/UX Design',
      description: 'Crafting digital experiences that are as beautiful as they are functional.',
      features: [
        'User Interface (UI) Design',
        'User Experience (UX) Research',
        'Brand Identity & Logo Design',
        'Prototyping & Wireframing',
        'Design Systems'
      ],
      detailedContent: 'We believe that great design is more than just aesthetics—it\'s about solving problems and creating emotional connections. Our process involves deep research into user behavior, followed by iterative design cycles that result in intuitive, high-converting digital products.'
    }
  },
  {
    id: 'service-3',
    title: 'Marketing',
    type: 'marketing',
    icon: 'trending-up',
    description: 'Grow your business with data-driven marketing strategies. We specialize in performance marketing, brand positioning, and digital growth tactics that drive conversion and maximize your return on investment.',
    modalContent: {
      title: 'Growth-Focused Marketing',
      description: 'Strategically scaling your reach and impact in the digital landscape.',
      features: [
        'Search Engine Optimization (SEO)',
        'Content Marketing Strategy',
        'Social Media Management',
        'Pay-Per-Click (PPC) Advertising',
        'Conversion Rate Optimization (CRO)'
      ],
      detailedContent: 'Our marketing strategies are built on data and driven by results. we don\'t just look for clicks; we look for customers. By combining creative storytelling with technical analysis, we help your brand reach its target audience and achieve sustainable growth in a competitive market.'
    }
  },
];



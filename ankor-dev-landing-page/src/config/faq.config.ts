export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqConfig: FAQItem[] = [
  {
    id: '1',
    question: 'How do I get started with the platform?',
    answer: 'Getting started is easy! Simply sign up for an account, complete your profile setup, and you\'ll have access to all our features. Our onboarding process will guide you through the initial setup.',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through our encrypted payment gateway to ensure your financial information is protected.',
  },
  {
    id: '3',
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and you won\'t be charged for the next cycle.',
  },
  {
    id: '4',
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial for all new users. No credit card required to start. You can explore all features during the trial period and decide if our platform is right for you.',
  },
  {
    id: '5',
    question: 'How does team collaboration work?',
    answer: 'Our platform enables real-time collaboration with your team members. You can invite team members, assign tasks, share documents, and communicate seamlessly through our integrated messaging system.',
  },

];


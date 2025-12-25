import React from 'react';
import { Navbar } from '../../organisms/Navbar';
import './LandingLayout.css';

export interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="landing-layout">
      <Navbar />
      <main className="landing-layout__main">{children}</main>
    </div>
  );
};

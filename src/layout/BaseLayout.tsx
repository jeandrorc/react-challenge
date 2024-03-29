import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-column">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;

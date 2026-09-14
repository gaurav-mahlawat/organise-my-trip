import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { EnquiryModal } from './EnquiryModal';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { CookieBanner } from './CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-slate-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
      <EnquiryModal />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
};

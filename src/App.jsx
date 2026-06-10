import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import DestinationsSection from './components/DestinationsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import LegalPage from './components/LegalPage.jsx';
import { legalPageMap } from './data/legalPages.js';
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js';

function getCurrentHash() {
  return window.location.hash || '#home';
}

function getCurrentLegalPage() {
  const slug = window.location.hash.replace('#/legal/', '');
  return legalPageMap[slug] ?? null;
}

export default function App() {
  const [currentHash, setCurrentHash] = useState(getCurrentHash);
  const [legalPage, setLegalPage] = useState(getCurrentLegalPage);

  useRevealOnScroll(legalPage?.slug ?? 'home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(getCurrentHash());
      setLegalPage(getCurrentLegalPage());
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (legalPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = currentHash.startsWith('#') ? currentHash.slice(1) : '';

    if (!id || id.startsWith('/')) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [currentHash, legalPage]);

  return (
    <>
      <Header forceSolid={Boolean(legalPage)} />
      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <main>
          <Hero />
          <DestinationsSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      )}
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

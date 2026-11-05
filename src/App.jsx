import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState('');

  const handleOpenQuoteModal = (serviceName = '') => {
    setModalDefaultService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalDefaultService('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* Sleek Top Navigation with Logo on Left and Links squeezed on Right */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Authoritative Navy Blue Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* About Frah Contractors & Key Values */}
        <About />

        {/* 4 Core Contracting Services */}
        <Services onOpenQuoteModal={(serviceTitle) => handleOpenQuoteModal(serviceTitle)} />

        {/* Featured Projects Gallery */}
        <Projects onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Clean Footer with Official Logo */}
      <Footer />

      {/* Quote Popup Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseQuoteModal} 
        defaultService={modalDefaultService} 
      />
    </div>
  );
}

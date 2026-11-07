import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import EnquiryModal from './components/EnquiryModal';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessDivisionPage from './pages/BusinessDivisionPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleOpenEnquiry = (divisionId = "") => {
    setSelectedDivision(divisionId);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedDivision("");
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#FBFAF4] text-[#1c241e] selection:bg-[#D5B45E]/30 selection:text-[#0C2815]">
        <ScrollToTop />
        
        {/* Corporate Header */}
        <Navbar 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenSearch={handleOpenSearch}
        />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} 
            />
            <Route 
              path="/business/:slug" 
              element={<BusinessDivisionPage onOpenEnquiry={handleOpenEnquiry} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} 
            />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Global Business & Institutional Enquiry Modal */}
        <EnquiryModal 
          isOpen={isEnquiryOpen} 
          onClose={handleCloseEnquiry} 
          initialDivision={selectedDivision} 
        />

        {/* Global Division & Catalogue Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={handleCloseSearch}
        />
      </div>
    </BrowserRouter>
  );
}

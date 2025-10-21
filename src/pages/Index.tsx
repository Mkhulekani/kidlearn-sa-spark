import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/HomePage';
import { GamePage } from '@/components/GamePage';
import { AboutPage } from '@/components/AboutPage';
import { type LanguageCode } from '@/data/translations';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<LanguageCode>('en-ZA');

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'game' && <GamePage onNavigate={setCurrentPage} language={language} setLanguage={setLanguage} />}
        {currentPage === 'about' && <AboutPage onNavigate={setCurrentPage} />}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default Index;

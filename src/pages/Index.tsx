import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/HomePage';
import { GamePage } from '@/components/GamePage';
import { AboutPage } from '@/components/AboutPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'game' && <GamePage onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage onNavigate={setCurrentPage} />}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default Index;

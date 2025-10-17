import { BookOpen, Home, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-10 h-10 animate-bounce-soft" />
            <div>
              <h1 className="text-3xl font-bold">KidsLearn SA</h1>
              <p className="text-sm text-primary-foreground/80">Making Learning Fun for South African Children</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-3">
            <Button
              onClick={() => onNavigate('home')}
              variant={currentPage === 'home' ? 'secondary' : 'ghost'}
              className="gap-2"
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
            <Button
              onClick={() => onNavigate('game')}
              variant={currentPage === 'game' ? 'secondary' : 'ghost'}
              className="gap-2"
            >
              <Trophy className="w-5 h-5" />
              Play Game
            </Button>
            <Button
              onClick={() => onNavigate('about')}
              variant={currentPage === 'about' ? 'secondary' : 'ghost'}
              className="gap-2"
            >
              <BookOpen className="w-5 h-5" />
              About
            </Button>
          </nav>
        </div>
        <nav className="md:hidden flex gap-2 mt-3">
          <Button
            onClick={() => onNavigate('home')}
            variant={currentPage === 'home' ? 'secondary' : 'ghost'}
            className="flex-1 text-sm"
          >
            Home
          </Button>
          <Button
            onClick={() => onNavigate('game')}
            variant={currentPage === 'game' ? 'secondary' : 'ghost'}
            className="flex-1 text-sm"
          >
            Play Game
          </Button>
          <Button
            onClick={() => onNavigate('about')}
            variant={currentPage === 'about' ? 'secondary' : 'ghost'}
            className="flex-1 text-sm"
          >
            About
          </Button>
        </nav>
      </div>
    </header>
  );
};

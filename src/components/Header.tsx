import { BookOpen, Home, Trophy, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type LanguageCode } from '@/data/translations';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

export const Header = ({ currentPage, onNavigate, language, setLanguage }: HeaderProps) => {
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
          <div className="hidden md:flex items-center gap-3">
            <nav className="flex gap-3">
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
            <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
              <SelectTrigger className="w-[180px] bg-white/20 text-primary-foreground border-white/30">
                <Languages className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-ZA">English</SelectItem>
                <SelectItem value="zu-ZA">isiZulu</SelectItem>
                <SelectItem value="xh-ZA">isiXhosa</SelectItem>
                <SelectItem value="nso-ZA">Sepedi</SelectItem>
                <SelectItem value="tn-ZA">Setswana</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
        <div className="md:hidden mt-3">
          <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
            <SelectTrigger className="w-full bg-white/20 text-primary-foreground border-white/30">
              <Languages className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en-ZA">English</SelectItem>
              <SelectItem value="zu-ZA">isiZulu</SelectItem>
              <SelectItem value="xh-ZA">isiXhosa</SelectItem>
              <SelectItem value="nso-ZA">Sepedi</SelectItem>
              <SelectItem value="tn-ZA">Setswana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

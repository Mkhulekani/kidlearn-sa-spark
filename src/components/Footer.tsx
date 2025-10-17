import { BookOpen, Mail, Phone, Home, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">KidsLearn SA</h3>
            </div>
            <p className="text-background/70 text-sm">
              Empowering South African children through interactive and engaging educational games designed for Grade R and Grade 1 learners.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-primary transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('game')} className="hover:text-primary transition">
                  Learning Games
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-primary transition">
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">For Parents</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                info@kidslearnsa.co.za
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                071 121 9900
              </li>
              <li className="flex items-center gap-2">
                <Home className="w-4 h-4 text-primary" />
                Benoni, Gauteng, South Africa
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
            <div className="mt-6">
              <p className="text-xs text-background/50 mb-2">Download Our App:</p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50 text-sm">
          <p>&copy; 2025 KidsLearn SA. All rights reserved. | Designed for South African Learners</p>
          <p className="mt-2">Privacy Policy | Terms of Service | Accessibility</p>
        </div>
      </div>
    </footer>
  );
};

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Welcome to KidsLearn SA! 🎉
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8">
            Fun Educational Games for Grade R & Grade 1 Learners
          </p>
          <Button
            onClick={() => onNavigate('game')}
            size="lg"
            className="text-xl px-8 py-6 shadow-glow animate-bounce-soft"
          >
            Start Playing Now! 🚀
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center transform hover:scale-105 transition shadow-soft">
            <div className="text-6xl mb-4 animate-float">🎮</div>
            <h3 className="text-2xl font-bold text-primary mb-3">Interactive Games</h3>
            <p className="text-muted-foreground">
              Engaging games that make learning animals, objects, and words exciting and fun!
            </p>
          </Card>

          <Card className="p-8 text-center transform hover:scale-105 transition shadow-soft">
            <div className="text-6xl mb-4 animate-float" style={{ animationDelay: '0.5s' }}>🔊</div>
            <h3 className="text-2xl font-bold text-primary mb-3">Audio Learning</h3>
            <p className="text-muted-foreground">
              Hear words spoken in South African English to improve pronunciation and listening skills.
            </p>
          </Card>

          <Card className="p-8 text-center transform hover:scale-105 transition shadow-soft">
            <div className="text-6xl mb-4 animate-float" style={{ animationDelay: '1s' }}>⭐</div>
            <h3 className="text-2xl font-bold text-primary mb-3">Track Progress</h3>
            <p className="text-muted-foreground">
              Watch your child's learning journey with scores, levels, and achievements!
            </p>
          </Card>
        </div>

        <Card className="bg-gradient-primary p-12 text-primary-foreground text-center shadow-glow">
          <h2 className="text-4xl font-bold mb-4">Designed for South African Children</h2>
          <p className="text-xl mb-6 text-primary-foreground/90">
            Our platform uses South African English pronunciation and culturally relevant content to ensure the best learning experience for local learners.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-background text-primary px-6 py-2 rounded-full font-bold shadow-soft">
              Grade R Ready
            </span>
            <span className="bg-background text-primary px-6 py-2 rounded-full font-bold shadow-soft">
              Grade 1 Approved
            </span>
            <span className="bg-background text-primary px-6 py-2 rounded-full font-bold shadow-soft">
              CAPS Aligned
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

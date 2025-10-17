import { useEffect } from 'react';
import { Trophy, RefreshCw, Home, Volume2, Star, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameLogic } from '@/hooks/useGameLogic';
import { getLevelDescription } from '@/data/learningItems';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GamePageProps {
  onNavigate: (page: string) => void;
}

export const GamePage = ({ onNavigate }: GamePageProps) => {
  const {
    currentItem,
    options,
    score,
    attempts,
    feedback,
    showCelebration,
    level,
    language,
    setLanguage,
    handleAnswer,
    resetGame,
    repeatWord,
    generateNewQuestion
  } = useGameLogic();

  useEffect(() => {
    generateNewQuestion();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <Card className="p-4 mb-4 shadow-soft">
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <Languages className="w-6 h-6 text-primary" />
            <label className="text-lg font-bold text-primary">Choose Language:</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[200px] bg-gradient-to-r from-secondary/40 to-primary/40 border-2 border-primary/30">
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
        </Card>

        {/* Header */}
        <Card className="p-6 mb-6 shadow-soft">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-10 h-10 text-warning" />
              <div>
                <h1 className="text-3xl font-bold text-primary">Learning Fun!</h1>
                <p className="text-muted-foreground">
                  Level {level} of 5 - {getLevelDescription(level)}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => onNavigate('home')}
                variant="outline"
                className="gap-2"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Button>
              <Button
                onClick={resetGame}
                variant="outline"
                className="gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span className="hidden sm:inline">New Game</span>
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <div className="bg-success/10 px-6 py-3 rounded-2xl border-2 border-success/20">
              <div className="text-3xl font-bold text-success">{score}</div>
              <div className="text-sm text-success/80">Correct</div>
            </div>
            <div className="bg-accent/10 px-6 py-3 rounded-2xl border-2 border-accent/20">
              <div className="text-3xl font-bold text-accent">{attempts}</div>
              <div className="text-sm text-accent/80">Tries</div>
            </div>
          </div>
        </Card>

        {/* Game Area */}
        {currentItem && (
          <Card className="p-8 shadow-glow">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Listen and Find!
              </h2>
              
              {/* Audio prompt area */}
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 mb-6 relative overflow-hidden">
                {showCelebration && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <Star
                        key={i}
                        className="absolute w-8 h-8 text-warning animate-celebration"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                )}
                <div className="text-9xl mb-4 animate-float">🔊</div>
                <p className="text-2xl font-bold text-foreground mb-4">
                  Listen carefully and click the correct picture!
                </p>
                <Button
                  onClick={repeatWord}
                  size="lg"
                  className="gap-3 text-xl shadow-soft"
                >
                  <Volume2 className="w-8 h-8" />
                  Hear it Again!
                </Button>
              </div>

              {/* Options */}
              <p className="text-xl font-bold text-foreground mb-4">Which one is it? Click the picture!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    variant="outline"
                    className="h-auto bg-gradient-to-br from-secondary/40 to-primary/40 hover:from-secondary/60 hover:to-primary/60 border-2 border-primary/20 rounded-2xl p-8 transition transform hover:scale-110 active:scale-95 shadow-soft"
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-8xl mb-3">{option.emoji}</div>
                      <div className="text-2xl font-bold text-foreground">{option.name}</div>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Feedback */}
              {feedback && (
                <div className={`text-2xl font-bold p-6 rounded-2xl shadow-soft ${
                  feedback.includes('Correct')
                    ? 'bg-success/20 text-success border-2 border-success/30'
                    : 'bg-warning/20 text-warning border-2 border-warning/30'
                }`}>
                  {feedback}
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Instructions */}
        <Card className="p-6 mt-6 shadow-soft">
          <h3 className="text-2xl font-bold text-primary mb-3">How to Play:</h3>
          <ul className="text-lg text-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🔊</span>
              <span>Listen to the word that is spoken</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">👀</span>
              <span>Look at the three pictures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🎯</span>
              <span>Click on the correct picture that matches the word</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🔁</span>
              <span>Click "Hear it Again!" if you need to listen again</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">⭐</span>
              <span>Get points for correct answers and level up!</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

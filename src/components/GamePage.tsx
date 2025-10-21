import { useEffect } from 'react';
import { Trophy, RefreshCw, Home, Volume2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useGameLogic } from '@/hooks/useGameLogic';
import { getLevelDescription } from '@/data/learningItems';
import { getTranslation } from '@/data/translations';

interface GamePageProps {
  onNavigate: (page: string) => void;
  language: any;
  setLanguage: (language: any) => void;
}

export const GamePage = ({ onNavigate, language, setLanguage }: GamePageProps) => {
  const {
    currentItem,
    options,
    score,
    attempts,
    feedback,
    showCelebration,
    level,
    handleAnswer,
    resetGame,
    repeatWord,
    generateNewQuestion
  } = useGameLogic(language, setLanguage);

  const t = (key: string) => getTranslation(language, key);

  useEffect(() => {
    generateNewQuestion();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="p-6 mb-6 shadow-soft">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-10 h-10 text-warning" />
              <div>
                <h1 className="text-3xl font-bold text-primary">{t('learningFun')}</h1>
                <p className="text-muted-foreground">
                  {t('levelOf')} {level} {t('of')} 5 - {t(`levelDescriptions.${level}`)}
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
                <span className="hidden sm:inline">{t('home')}</span>
              </Button>
              <Button
                onClick={resetGame}
                variant="outline"
                className="gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span className="hidden sm:inline">{t('newGame')}</span>
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <div className="bg-success/10 px-6 py-3 rounded-2xl border-2 border-success/20">
              <div className="text-3xl font-bold text-success">{score}</div>
              <div className="text-sm text-success/80">{t('correct')}</div>
            </div>
            <div className="bg-accent/10 px-6 py-3 rounded-2xl border-2 border-accent/20">
              <div className="text-3xl font-bold text-accent">{attempts}</div>
              <div className="text-sm text-accent/80">{t('tries')}</div>
            </div>
          </div>
        </Card>

        {/* Level Display */}
        <Card className="p-6 mb-6 shadow-glow bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
          <div className="text-center">
            <div className="inline-block bg-gradient-primary text-primary-foreground px-8 py-4 rounded-3xl shadow-soft mb-3">
              <div className="text-5xl font-black">LEVEL {level}</div>
            </div>
            <p className="text-2xl font-bold text-foreground">
              {t(`levelDescriptions.${level}`)}
            </p>
          </div>
        </Card>

        {/* Game Area */}
        {currentItem && (
          <Card className="p-8 shadow-glow">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-4">
                {t('listenAndFind')}
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
                  {t('listenCarefully')}
                </p>
                <Button
                  onClick={repeatWord}
                  size="lg"
                  className="gap-3 text-xl shadow-soft"
                >
                  <Volume2 className="w-8 h-8" />
                  {t('hearAgain')}
                </Button>
              </div>

              {/* Options */}
              <p className="text-xl font-bold text-foreground mb-4">{t('whichOne')}</p>
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
          <h3 className="text-2xl font-bold text-primary mb-3">{t('howToPlay')}</h3>
          <ul className="text-lg text-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🔊</span>
              <span>{t('instruction1')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">👀</span>
              <span>{t('instruction2')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🎯</span>
              <span>{t('instruction3')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">🔁</span>
              <span>{t('instruction4')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">⭐</span>
              <span>{t('instruction5')}</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

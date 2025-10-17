import { useState, useEffect } from 'react';
import { learningItems, type LearningItem } from '@/data/learningItems';

export const useGameLogic = () => {
  const [currentItem, setCurrentItem] = useState<LearningItem | null>(null);
  const [options, setOptions] = useState<LearningItem[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [level, setLevel] = useState(1);

  const speakWord = (itemName: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(`Find the ${itemName}`);
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      utterance.volume = 1;
      utterance.lang = 'en-ZA';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakCorrectAnswer = (itemName: string, sound: string) => {
    if ('speechSynthesis' in window) {
      const encouragement = [
        'Well done!',
        'Great job!',
        'Excellent!',
        'Perfect!',
        'You got it!'
      ];
      const randomEncouragement = encouragement[Math.floor(Math.random() * encouragement.length)];
      
      const utterance = new SpeechSynthesisUtterance(
        `${randomEncouragement} That's a ${itemName}! ${sound}`
      );
      utterance.rate = 0.8;
      utterance.pitch = 1.3;
      utterance.volume = 1;
      utterance.lang = 'en-ZA';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const announceLevelUp = (newLevel: number) => {
    if ('speechSynthesis' in window) {
      const levelDescriptions: Record<number, string> = {
        2: 'Farm Animals and Nature',
        3: 'Wild Animals and Transport',
        4: 'Food and Household items',
        5: 'Sea Creatures and More'
      };
      
      const utterance = new SpeechSynthesisUtterance(
        `Congratulations! You're on stage ${newLevel}! ${levelDescriptions[newLevel]}! Well done!`
      );
      utterance.rate = 0.7;
      utterance.pitch = 1.4;
      utterance.volume = 1;
      utterance.lang = 'en-ZA';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const generateNewQuestion = () => {
    setFeedback('');
    
    const availableItems = learningItems.filter(item => item.level <= level);
    
    const correctAnswer = availableItems[Math.floor(Math.random() * availableItems.length)];
    const wrongOptions = availableItems
      .filter(item => item.name !== correctAnswer.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    const allOptions = [correctAnswer, ...wrongOptions]
      .sort(() => Math.random() - 0.5);
    
    setCurrentItem(correctAnswer);
    setOptions(allOptions);
    
    setTimeout(() => {
      speakWord(correctAnswer.name);
    }, 500);
  };

  const handleAnswer = (selectedItem: LearningItem) => {
    if (!currentItem) return;

    setAttempts(attempts + 1);
    
    if (selectedItem.name === currentItem.name) {
      setScore(score + 1);
      setFeedback(`🎉 Correct! That's a ${currentItem.name}! ${currentItem.sound}`);
      setShowCelebration(true);
      
      // Speak the correct answer with encouragement
      speakCorrectAnswer(currentItem.name, currentItem.sound);
      
      setTimeout(() => {
        setShowCelebration(false);
        
        if ((score + 1) % 5 === 0 && level < 5) {
          const newLevel = level + 1;
          setLevel(newLevel);
          setFeedback(`🎉 Level Up! Welcome to Level ${newLevel}!`);
          
          // Announce the new level
          announceLevelUp(newLevel);
          
          setTimeout(() => {
            generateNewQuestion();
          }, 3000); // Extended timeout to allow level announcement to finish
        } else {
          generateNewQuestion();
        }
      }, 2000);
    } else {
      setFeedback(`Try again! That's a ${selectedItem.name}. Find the ${currentItem.name}!`);
      // Speak gentle correction
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(
          `That's a ${selectedItem.name}. Try again! Find the ${currentItem.name}!`
        );
        utterance.rate = 0.7;
        utterance.pitch = 1.1;
        utterance.volume = 1;
        utterance.lang = 'en-ZA';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setLevel(1);
    setFeedback('');
    generateNewQuestion();
  };

  const repeatWord = () => {
    if (currentItem) {
      setFeedback(`Listen carefully: ${currentItem.name}`);
      speakWord(currentItem.name);
    }
  };

  return {
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
  };
};

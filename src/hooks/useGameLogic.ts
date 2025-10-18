import { useState, useEffect } from 'react';
import { learningItems, type LearningItem } from '@/data/learningItems';
import { getTranslation, type LanguageCode } from '@/data/translations';

export const useGameLogic = () => {
  const [currentItem, setCurrentItem] = useState<LearningItem | null>(null);
  const [options, setOptions] = useState<LearningItem[]>([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [level, setLevel] = useState(1);
  const [language, setLanguage] = useState<LanguageCode>('en-ZA');

  const speakWord = (itemName: string, item: LearningItem) => {
    if ('speechSynthesis' in window) {
      const findTheText = getTranslation(language, 'findThe');
      const translatedName = item.translations[language];
      const utterance = new SpeechSynthesisUtterance(`${findTheText} ${translatedName}`);
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      utterance.volume = 1;
      utterance.lang = language;
      
      // Get and set voice for the selected language
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => voice.lang.startsWith(language.split('-')[0]));
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const speakCorrectAnswer = (item: LearningItem, sound: string) => {
    if ('speechSynthesis' in window) {
      const encouragementKeys = ['wellDone', 'greatJob', 'excellent', 'perfect', 'youGotIt'];
      const randomKey = encouragementKeys[Math.floor(Math.random() * encouragementKeys.length)];
      const encouragement = getTranslation(language, randomKey);
      const thatsA = getTranslation(language, 'thatsA');
      const translatedName = item.translations[language];
      
      const utterance = new SpeechSynthesisUtterance(
        `${encouragement} ${thatsA} ${translatedName}! ${sound}`
      );
      utterance.rate = 0.8;
      utterance.pitch = 1.3;
      utterance.volume = 1;
      utterance.lang = language;
      
      // Get and set voice for the selected language
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => voice.lang.startsWith(language.split('-')[0]));
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const announceLevelUp = (newLevel: number) => {
    if ('speechSynthesis' in window) {
      const congratulations = getTranslation(language, 'congratulations');
      const yourOnStage = getTranslation(language, 'yourOnStage');
      const levelDescription = getTranslation(language, `levelDescriptions.${newLevel}`);
      const wellDone = getTranslation(language, 'wellDone');
      
      const utterance = new SpeechSynthesisUtterance(
        `${congratulations}! ${yourOnStage} ${newLevel}! ${levelDescription}! ${wellDone}!`
      );
      utterance.rate = 0.7;
      utterance.pitch = 1.4;
      utterance.volume = 1;
      utterance.lang = language;
      
      // Get and set voice for the selected language
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(voice => voice.lang.startsWith(language.split('-')[0]));
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
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
      speakWord(correctAnswer.name, correctAnswer);
    }, 500);
  };

  const handleAnswer = (selectedItem: LearningItem) => {
    if (!currentItem) return;

    setAttempts(attempts + 1);
    
    if (selectedItem.name === currentItem.name) {
      setScore(score + 1);
      const correctEmoji = '🎉';
      const correctText = getTranslation(language, 'correct');
      const thatsA = getTranslation(language, 'thatsA');
      setFeedback(`${correctEmoji} ${correctText}! ${thatsA} ${currentItem.name}! ${currentItem.sound}`);
      setShowCelebration(true);
      
      // Speak the correct answer with encouragement
      speakCorrectAnswer(currentItem, currentItem.sound);
      
      setTimeout(() => {
        setShowCelebration(false);
        
        if ((score + 1) % 5 === 0 && level < 5) {
          const newLevel = level + 1;
          setLevel(newLevel);
          const levelUpText = getTranslation(language, 'levelUp');
          setFeedback(`🎉 ${levelUpText} ${newLevel}!`);
          
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
      const tryAgain = getTranslation(language, 'tryAgain');
      const thatsA = getTranslation(language, 'thatsA');
      const findThe = getTranslation(language, 'findThe');
      const selectedTranslated = selectedItem.translations[language];
      const currentTranslated = currentItem.translations[language];
      setFeedback(`${tryAgain} ${thatsA} ${selectedItem.name}. ${findThe} ${currentItem.name}!`);
      // Speak gentle correction
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(
          `${thatsA} ${selectedTranslated}. ${tryAgain} ${findThe} ${currentTranslated}!`
        );
        utterance.rate = 0.7;
        utterance.pitch = 1.1;
        utterance.volume = 1;
        utterance.lang = language;
        
        // Get and set voice for the selected language
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(voice => voice.lang.startsWith(language.split('-')[0]));
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        
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
      const listenCarefully = getTranslation(language, 'listenCarefully');
      setFeedback(`${listenCarefully}: ${currentItem.name}`);
      speakWord(currentItem.name, currentItem);
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
    language,
    setLanguage,
    handleAnswer,
    resetGame,
    repeatWord,
    generateNewQuestion
  };
};

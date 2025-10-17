export interface LearningItem {
  name: string;
  emoji: string;
  sound: string;
  level: number;
}

export const learningItems: LearningItem[] = [
  // Level 1 - Basic Animals & Common Objects
  { name: 'Cat', emoji: '🐱', sound: 'Meow!', level: 1 },
  { name: 'Dog', emoji: '🐶', sound: 'Woof!', level: 1 },
  { name: 'Bird', emoji: '🐦', sound: 'Tweet!', level: 1 },
  { name: 'Fish', emoji: '🐟', sound: 'Blub!', level: 1 },
  { name: 'Apple', emoji: '🍎', sound: 'Crunch!', level: 1 },
  { name: 'Banana', emoji: '🍌', sound: 'Yummy!', level: 1 },
  { name: 'Car', emoji: '🚗', sound: 'Vroom!', level: 1 },
  { name: 'Ball', emoji: '⚽', sound: 'Bounce!', level: 1 },
  { name: 'Sun', emoji: '☀️', sound: 'Shine!', level: 1 },
  { name: 'Star', emoji: '⭐', sound: 'Twinkle!', level: 1 },
  
  // Level 2 - Farm Animals & Nature
  { name: 'Cow', emoji: '🐮', sound: 'Moo!', level: 2 },
  { name: 'Pig', emoji: '🐷', sound: 'Oink!', level: 2 },
  { name: 'Chicken', emoji: '🐔', sound: 'Cluck!', level: 2 },
  { name: 'Horse', emoji: '🐴', sound: 'Neigh!', level: 2 },
  { name: 'Sheep', emoji: '🐑', sound: 'Baa!', level: 2 },
  { name: 'Duck', emoji: '🦆', sound: 'Quack!', level: 2 },
  { name: 'Tree', emoji: '🌳', sound: 'Rustle!', level: 2 },
  { name: 'Flower', emoji: '🌸', sound: 'Pretty!', level: 2 },
  { name: 'Rainbow', emoji: '🌈', sound: 'Colorful!', level: 2 },
  { name: 'Cloud', emoji: '☁️', sound: 'Fluffy!', level: 2 },
  
  // Level 3 - Wild Animals & Transport
  { name: 'Lion', emoji: '🦁', sound: 'Roar!', level: 3 },
  { name: 'Elephant', emoji: '🐘', sound: 'Trumpet!', level: 3 },
  { name: 'Monkey', emoji: '🐵', sound: 'Ooh ooh!', level: 3 },
  { name: 'Giraffe', emoji: '🦒', sound: 'Tall!', level: 3 },
  { name: 'Zebra', emoji: '🦓', sound: 'Stripes!', level: 3 },
  { name: 'Tiger', emoji: '🐯', sound: 'Growl!', level: 3 },
  { name: 'Bus', emoji: '🚌', sound: 'Beep beep!', level: 3 },
  { name: 'Train', emoji: '🚂', sound: 'Choo choo!', level: 3 },
  { name: 'Plane', emoji: '✈️', sound: 'Zoom!', level: 3 },
  { name: 'Boat', emoji: '⛵', sound: 'Sail!', level: 3 },
  
  // Level 4 - Food & Household
  { name: 'Bread', emoji: '🍞', sound: 'Fresh!', level: 4 },
  { name: 'Milk', emoji: '🥛', sound: 'Yum!', level: 4 },
  { name: 'Cheese', emoji: '🧀', sound: 'Tasty!', level: 4 },
  { name: 'Pizza', emoji: '🍕', sound: 'Delicious!', level: 4 },
  { name: 'Ice Cream', emoji: '🍦', sound: 'Sweet!', level: 4 },
  { name: 'Cookie', emoji: '🍪', sound: 'Crunchy!', level: 4 },
  { name: 'House', emoji: '🏠', sound: 'Home!', level: 4 },
  { name: 'School', emoji: '🏫', sound: 'Learn!', level: 4 },
  { name: 'Book', emoji: '📚', sound: 'Read!', level: 4 },
  { name: 'Pencil', emoji: '✏️', sound: 'Write!', level: 4 },
  
  // Level 5 - Sea Creatures & Advanced
  { name: 'Frog', emoji: '🐸', sound: 'Ribbit!', level: 5 },
  { name: 'Turtle', emoji: '🐢', sound: 'Slow!', level: 5 },
  { name: 'Dolphin', emoji: '🐬', sound: 'Splash!', level: 5 },
  { name: 'Whale', emoji: '🐋', sound: 'Big!', level: 5 },
  { name: 'Crab', emoji: '🦀', sound: 'Pinch!', level: 5 },
  { name: 'Octopus', emoji: '🐙', sound: 'Wiggle!', level: 5 },
  { name: 'Butterfly', emoji: '🦋', sound: 'Flutter!', level: 5 },
  { name: 'Bee', emoji: '🐝', sound: 'Buzz!', level: 5 },
  { name: 'Snail', emoji: '🐌', sound: 'Slow!', level: 5 },
  { name: 'Ladybug', emoji: '🐞', sound: 'Spots!', level: 5 }
];

export const getLevelDescription = (level: number): string => {
  const descriptions: Record<number, string> = {
    1: 'Basic Animals & Objects',
    2: 'Farm Animals & Nature',
    3: 'Wild Animals & Transport',
    4: 'Food & Household',
    5: 'Sea Creatures & More'
  };
  return descriptions[level] || '';
};

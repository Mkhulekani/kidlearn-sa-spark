export interface LearningItem {
  name: string;
  emoji: string;
  sound: string;
  level: number;
  translations: {
    'en-ZA': string;
    'zu-ZA': string;
    'xh-ZA': string;
    'nso-ZA': string;
    'tn-ZA': string;
  };
}

export const learningItems: LearningItem[] = [
  // Level 1 - Basic Animals & Common Objects
  { name: 'Cat', emoji: '🐱', sound: 'Meow!', level: 1, translations: { 'en-ZA': 'Cat', 'zu-ZA': 'Ikati', 'xh-ZA': 'Ikati', 'nso-ZA': 'Katse', 'tn-ZA': 'Katse' } },
  { name: 'Dog', emoji: '🐶', sound: 'Woof!', level: 1, translations: { 'en-ZA': 'Dog', 'zu-ZA': 'Inja', 'xh-ZA': 'Inja', 'nso-ZA': 'Mpša', 'tn-ZA': 'Ntša' } },
  { name: 'Bird', emoji: '🐦', sound: 'Tweet!', level: 1, translations: { 'en-ZA': 'Bird', 'zu-ZA': 'Inyoni', 'xh-ZA': 'Intaka', 'nso-ZA': 'Nonyana', 'tn-ZA': 'Nonyana' } },
  { name: 'Fish', emoji: '🐟', sound: 'Blub!', level: 1, translations: { 'en-ZA': 'Fish', 'zu-ZA': 'Inhlanzi', 'xh-ZA': 'Intlanzi', 'nso-ZA': 'Hlapi', 'tn-ZA': 'Tlhapi' } },
  { name: 'Apple', emoji: '🍎', sound: 'Crunch!', level: 1, translations: { 'en-ZA': 'Apple', 'zu-ZA': 'I-apula', 'xh-ZA': 'Iapile', 'nso-ZA': 'Apole', 'tn-ZA': 'Apole' } },
  { name: 'Banana', emoji: '🍌', sound: 'Yummy!', level: 1, translations: { 'en-ZA': 'Banana', 'zu-ZA': 'Ubhanana', 'xh-ZA': 'Ibhanana', 'nso-ZA': 'Panana', 'tn-ZA': 'Banana' } },
  { name: 'Car', emoji: '🚗', sound: 'Vroom!', level: 1, translations: { 'en-ZA': 'Car', 'zu-ZA': 'Imoto', 'xh-ZA': 'Imoto', 'nso-ZA': 'Koloi', 'tn-ZA': 'Koloi' } },
  { name: 'Ball', emoji: '⚽', sound: 'Bounce!', level: 1, translations: { 'en-ZA': 'Ball', 'zu-ZA': 'Ibhola', 'xh-ZA': 'Ibhola', 'nso-ZA': 'Bolo', 'tn-ZA': 'Bolo' } },
  { name: 'Sun', emoji: '☀️', sound: 'Shine!', level: 1, translations: { 'en-ZA': 'Sun', 'zu-ZA': 'Ilanga', 'xh-ZA': 'Ilanga', 'nso-ZA': 'Letšatši', 'tn-ZA': 'Letsatsi' } },
  { name: 'Star', emoji: '⭐', sound: 'Twinkle!', level: 1, translations: { 'en-ZA': 'Star', 'zu-ZA': 'Inkanyezi', 'xh-ZA': 'Inkwenkwezi', 'nso-ZA': 'Naledi', 'tn-ZA': 'Naledi' } },
  
  // Level 2 - Farm Animals & Nature
  { name: 'Cow', emoji: '🐮', sound: 'Moo!', level: 2, translations: { 'en-ZA': 'Cow', 'zu-ZA': 'Inkomo', 'xh-ZA': 'Inkomo', 'nso-ZA': 'Kgomo', 'tn-ZA': 'Kgomo' } },
  { name: 'Pig', emoji: '🐷', sound: 'Oink!', level: 2, translations: { 'en-ZA': 'Pig', 'zu-ZA': 'Ingulube', 'xh-ZA': 'Ihagu', 'nso-ZA': 'Kolobe', 'tn-ZA': 'Kolobe' } },
  { name: 'Chicken', emoji: '🐔', sound: 'Cluck!', level: 2, translations: { 'en-ZA': 'Chicken', 'zu-ZA': 'Inkukhu', 'xh-ZA': 'Inkukhu', 'nso-ZA': 'Kgogo', 'tn-ZA': 'Kgogo' } },
  { name: 'Horse', emoji: '🐴', sound: 'Neigh!', level: 2, translations: { 'en-ZA': 'Horse', 'zu-ZA': 'Ihhashi', 'xh-ZA': 'Ihashe', 'nso-ZA': 'Pitsi', 'tn-ZA': 'Pitse' } },
  { name: 'Sheep', emoji: '🐑', sound: 'Baa!', level: 2, translations: { 'en-ZA': 'Sheep', 'zu-ZA': 'Imvu', 'xh-ZA': 'Imvu', 'nso-ZA': 'Nku', 'tn-ZA': 'Nku' } },
  { name: 'Duck', emoji: '🦆', sound: 'Quack!', level: 2, translations: { 'en-ZA': 'Duck', 'zu-ZA': 'Idada', 'xh-ZA': 'Idada', 'nso-ZA': 'Legata', 'tn-ZA': 'Namane' } },
  { name: 'Tree', emoji: '🌳', sound: 'Rustle!', level: 2, translations: { 'en-ZA': 'Tree', 'zu-ZA': 'Isihlahla', 'xh-ZA': 'Umthi', 'nso-ZA': 'Mohlare', 'tn-ZA': 'Setlhare' } },
  { name: 'Flower', emoji: '🌸', sound: 'Pretty!', level: 2, translations: { 'en-ZA': 'Flower', 'zu-ZA': 'Imbali', 'xh-ZA': 'Intyatyambo', 'nso-ZA': 'Palesa', 'tn-ZA': 'Lekgabu' } },
  { name: 'Rainbow', emoji: '🌈', sound: 'Colorful!', level: 2, translations: { 'en-ZA': 'Rainbow', 'zu-ZA': 'Umchilo', 'xh-ZA': 'Umnyama', 'nso-ZA': 'Modibanoka', 'tn-ZA': 'Modubanoka' } },
  { name: 'Cloud', emoji: '☁️', sound: 'Fluffy!', level: 2, translations: { 'en-ZA': 'Cloud', 'zu-ZA': 'Ifu', 'xh-ZA': 'Ilifu', 'nso-ZA': 'Leru', 'tn-ZA': 'Leru' } },
  
  // Level 3 - Wild Animals & Transport
  { name: 'Lion', emoji: '🦁', sound: 'Roar!', level: 3, translations: { 'en-ZA': 'Lion', 'zu-ZA': 'Ibhubesi', 'xh-ZA': 'Ingonyama', 'nso-ZA': 'Tau', 'tn-ZA': 'Tau' } },
  { name: 'Elephant', emoji: '🐘', sound: 'Trumpet!', level: 3, translations: { 'en-ZA': 'Elephant', 'zu-ZA': 'Indlovu', 'xh-ZA': 'Indlovu', 'nso-ZA': 'Tlou', 'tn-ZA': 'Tlou' } },
  { name: 'Monkey', emoji: '🐵', sound: 'Ooh ooh!', level: 3, translations: { 'en-ZA': 'Monkey', 'zu-ZA': 'Inkawu', 'xh-ZA': 'Inkawu', 'nso-ZA': 'Tšhwene', 'tn-ZA': 'Tshwene' } },
  { name: 'Giraffe', emoji: '🦒', sound: 'Tall!', level: 3, translations: { 'en-ZA': 'Giraffe', 'zu-ZA': 'Indlulamithi', 'xh-ZA': 'Indlulamthi', 'nso-ZA': 'Thutlwa', 'tn-ZA': 'Thutlwa' } },
  { name: 'Zebra', emoji: '🦓', sound: 'Stripes!', level: 3, translations: { 'en-ZA': 'Zebra', 'zu-ZA': 'Idube', 'xh-ZA': 'Iqwarhashe', 'nso-ZA': 'Pitsi ya naga', 'tn-ZA': 'Pitse ya naga' } },
  { name: 'Tiger', emoji: '🐯', sound: 'Growl!', level: 3, translations: { 'en-ZA': 'Tiger', 'zu-ZA': 'Ithayiga', 'xh-ZA': 'Ithayiga', 'nso-ZA': 'Nkwe', 'tn-ZA': 'Nkwe' } },
  { name: 'Bus', emoji: '🚌', sound: 'Beep beep!', level: 3, translations: { 'en-ZA': 'Bus', 'zu-ZA': 'Ibhasi', 'xh-ZA': 'Ibhasi', 'nso-ZA': 'Bese', 'tn-ZA': 'Bese' } },
  { name: 'Train', emoji: '🚂', sound: 'Choo choo!', level: 3, translations: { 'en-ZA': 'Train', 'zu-ZA': 'Isitimela', 'xh-ZA': 'Uloliwe', 'nso-ZA': 'Terene', 'tn-ZA': 'Terena' } },
  { name: 'Plane', emoji: '✈️', sound: 'Zoom!', level: 3, translations: { 'en-ZA': 'Plane', 'zu-ZA': 'Indiza', 'xh-ZA': 'Inqwelomoya', 'nso-ZA': 'Sefofane', 'tn-ZA': 'Sefofane' } },
  { name: 'Boat', emoji: '⛵', sound: 'Sail!', level: 3, translations: { 'en-ZA': 'Boat', 'zu-ZA': 'Isikebhe', 'xh-ZA': 'Iphenyane', 'nso-ZA': 'Sekepe', 'tn-ZA': 'Mokoro' } },
  
  // Level 4 - Food & Household
  { name: 'Bread', emoji: '🍞', sound: 'Fresh!', level: 4, translations: { 'en-ZA': 'Bread', 'zu-ZA': 'Isinkwa', 'xh-ZA': 'Isonka', 'nso-ZA': 'Borotho', 'tn-ZA': 'Borotho' } },
  { name: 'Milk', emoji: '🥛', sound: 'Yum!', level: 4, translations: { 'en-ZA': 'Milk', 'zu-ZA': 'Ubisi', 'xh-ZA': 'Ubisi', 'nso-ZA': 'Maswi', 'tn-ZA': 'Mashi' } },
  { name: 'Cheese', emoji: '🧀', sound: 'Tasty!', level: 4, translations: { 'en-ZA': 'Cheese', 'zu-ZA': 'Ushizi', 'xh-ZA': 'Itshizi', 'nso-ZA': 'Šisi', 'tn-ZA': 'Kase' } },
  { name: 'Pizza', emoji: '🍕', sound: 'Delicious!', level: 4, translations: { 'en-ZA': 'Pizza', 'zu-ZA': 'Ipizza', 'xh-ZA': 'Ipizza', 'nso-ZA': 'Pitsa', 'tn-ZA': 'Pitsa' } },
  { name: 'Ice Cream', emoji: '🍦', sound: 'Sweet!', level: 4, translations: { 'en-ZA': 'Ice Cream', 'zu-ZA': 'I-ayisikrimu', 'xh-ZA': 'I-ayisikhrimu', 'nso-ZA': 'Aesekream', 'tn-ZA': 'Aesekereme' } },
  { name: 'Cookie', emoji: '🍪', sound: 'Crunchy!', level: 4, translations: { 'en-ZA': 'Cookie', 'zu-ZA': 'Ibhiskidi', 'xh-ZA': 'Ibhiskithi', 'nso-ZA': 'Phišiki', 'tn-ZA': 'Khukhi' } },
  { name: 'House', emoji: '🏠', sound: 'Home!', level: 4, translations: { 'en-ZA': 'House', 'zu-ZA': 'Indlu', 'xh-ZA': 'Indlu', 'nso-ZA': 'Ntlo', 'tn-ZA': 'Ntlo' } },
  { name: 'School', emoji: '🏫', sound: 'Learn!', level: 4, translations: { 'en-ZA': 'School', 'zu-ZA': 'Isikole', 'xh-ZA': 'Isikolo', 'nso-ZA': 'Sekolo', 'tn-ZA': 'Sekolo' } },
  { name: 'Book', emoji: '📚', sound: 'Read!', level: 4, translations: { 'en-ZA': 'Book', 'zu-ZA': 'Incwadi', 'xh-ZA': 'Incwadi', 'nso-ZA': 'Puku', 'tn-ZA': 'Buka' } },
  { name: 'Pencil', emoji: '✏️', sound: 'Write!', level: 4, translations: { 'en-ZA': 'Pencil', 'zu-ZA': 'Ipensela', 'xh-ZA': 'Ipensile', 'nso-ZA': 'Pentsele', 'tn-ZA': 'Pentsele' } },
  
  // Level 5 - Sea Creatures & Advanced
  { name: 'Frog', emoji: '🐸', sound: 'Ribbit!', level: 5, translations: { 'en-ZA': 'Frog', 'zu-ZA': 'Ixoxo', 'xh-ZA': 'Isele', 'nso-ZA': 'Segwagwa', 'tn-ZA': 'Segwagwa' } },
  { name: 'Turtle', emoji: '🐢', sound: 'Slow!', level: 5, translations: { 'en-ZA': 'Turtle', 'zu-ZA': 'Ufudu', 'xh-ZA': 'Ufudo', 'nso-ZA': 'Khudu', 'tn-ZA': 'Khudu' } },
  { name: 'Dolphin', emoji: '🐬', sound: 'Splash!', level: 5, translations: { 'en-ZA': 'Dolphin', 'zu-ZA': 'Umgwegwe', 'xh-ZA': 'Idolphin', 'nso-ZA': 'Dolphin', 'tn-ZA': 'Dolphin' } },
  { name: 'Whale', emoji: '🐋', sound: 'Big!', level: 5, translations: { 'en-ZA': 'Whale', 'zu-ZA': 'Umkhomo', 'xh-ZA': 'Umnenga', 'nso-ZA': 'Leruarua', 'tn-ZA': 'Leruarua' } },
  { name: 'Crab', emoji: '🦀', sound: 'Pinch!', level: 5, translations: { 'en-ZA': 'Crab', 'zu-ZA': 'Unonkala', 'xh-ZA': 'Inkala', 'nso-ZA': 'Lekalakgale', 'tn-ZA': 'Lekakalakgale' } },
  { name: 'Octopus', emoji: '🐙', sound: 'Wiggle!', level: 5, translations: { 'en-ZA': 'Octopus', 'zu-ZA': 'I-octopus', 'xh-ZA': 'I-octopus', 'nso-ZA': 'Kgalo ya lewatle', 'tn-ZA': 'Kgalo ya lewatle' } },
  { name: 'Butterfly', emoji: '🦋', sound: 'Flutter!', level: 5, translations: { 'en-ZA': 'Butterfly', 'zu-ZA': 'Ivemvane', 'xh-ZA': 'Ibhabhathane', 'nso-ZA': 'Serurubele', 'tn-ZA': 'Serurubele' } },
  { name: 'Bee', emoji: '🐝', sound: 'Buzz!', level: 5, translations: { 'en-ZA': 'Bee', 'zu-ZA': 'Inyosi', 'xh-ZA': 'Inyosi', 'nso-ZA': 'Nošo', 'tn-ZA': 'Notshi' } },
  { name: 'Snail', emoji: '🐌', sound: 'Slow!', level: 5, translations: { 'en-ZA': 'Snail', 'zu-ZA': 'Umnenke', 'xh-ZA': 'Inkumbi', 'nso-ZA': 'Kgohu', 'tn-ZA': 'Kgohu' } },
  { name: 'Ladybug', emoji: '🐞', sound: 'Spots!', level: 5, translations: { 'en-ZA': 'Ladybug', 'zu-ZA': 'Igongolo', 'xh-ZA': 'Igongolo', 'nso-ZA': 'Khukhwane', 'tn-ZA': 'Khukhwane' } }
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

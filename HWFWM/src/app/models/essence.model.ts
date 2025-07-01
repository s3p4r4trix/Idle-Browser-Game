export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export const ESSENCE_LIST: Record<Rarity, string[]> = {
  Common: ['Adept', 'Air', 'Armour', 'Earth', 'Fire', 'Iron', 'Might', 'Plant', 'Shield', 'Swift', 'Water', 'Wind'],
  Uncommon: ['Balance', 'Blood', 'Bone', 'Dark', 'Ice', 'Life', 'Light', 'Lightning'],
  Rare: ['Crystal', 'Gathering', 'Moon', 'Sun'],
  Epic: ['Elemental', 'Harmonic', 'Malign', 'Omen', 'Potent', 'Renewal', 'Rune', 'Wing'],
  Legendary: ['Dimension', 'Myriad', 'Sin', 'Vast', 'Visage', 'Void'],
};


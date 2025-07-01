export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface EssenceDetail {
  name: string;
  rarity: Rarity;
  description: string;
  logoPath: string;
}

const defaultDescription = 'A powerful essence with unique abilities.';

export const ESSENCE_LIST: Record<Rarity, EssenceDetail[]> = {
  Common: [
    { name: 'Air', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Air.svg` },
    { name: 'Earth', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Earth.svg` },
    { name: 'Fire', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Fire.svg` },
    { name: 'Iron', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Iron.svg` },
    { name: 'Might', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Might.svg` },
    { name: 'Plant', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Plant.svg` },
    { name: 'Swift', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Swift.svg` },
    { name: 'Water', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Water.svg` },
    { name: 'Wind', rarity: 'Common', description: defaultDescription, logoPath: `/assets/essences/Wind.svg` },
  ],
  Uncommon: [
    { name: 'Balance', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Balance.svg` },
    { name: 'Blood', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Blood.svg` },
    { name: 'Bone', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Bone.svg` },
    { name: 'Dark', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Dark.svg` },
    { name: 'Ice', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Ice.svg` },
    { name: 'Life', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Life.svg` },
    { name: 'Light', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Light.svg` },
    { name: 'Lightning', rarity: 'Uncommon', description: defaultDescription, logoPath: `/assets/essences/Lightning.svg` },
  ],
  Rare: [
    { name: 'Crystal', rarity: 'Rare', description: defaultDescription, logoPath: `/assets/essences/Crystal.svg` },
    { name: 'Moon', rarity: 'Rare', description: defaultDescription, logoPath: `/assets/essences/Moon.svg` },
    { name: 'Sun', rarity: 'Rare', description: defaultDescription, logoPath: `/assets/essences/Sun.svg` },
  ],
  Epic: [
    { name: 'Harmonic', rarity: 'Epic', description: defaultDescription, logoPath: `/assets/essences/Harmonic.svg` },
    { name: 'Omen', rarity: 'Epic', description: defaultDescription, logoPath: `/assets/essences/Omen.svg` },
    { name: 'Potent', rarity: 'Epic', description: defaultDescription, logoPath: `/assets/essences/Potent.svg` },
    { name: 'Renewal', rarity: 'Epic', description: defaultDescription, logoPath: `/assets/essences/Renewal.svg` },
    { name: 'Rune', rarity: 'Epic', description: defaultDescription, logoPath: `/assets/essences/Rune.svg` },
  ],
  Legendary: [
    { name: 'Dimension', rarity: 'Legendary', description: defaultDescription, logoPath: `/assets/essences/Dimension.svg` },
    { name: 'Vast', rarity: 'Legendary', description: defaultDescription, logoPath: `/assets/essences/Vast.svg` },
    { name: 'Void', rarity: 'Legendary', description: defaultDescription, logoPath: `/assets/essences/Void.svg` },
  ],
};


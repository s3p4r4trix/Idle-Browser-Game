export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export const ESSENCE_LIST: Record<Rarity, string[]> = {
  Common: ['Adept', 'Air', 'Armour', 'Axe', 'Bow', 'Cage', 'Chain', 'Cloth', 'Coral', 'Earth', 'Eye', 'Feast', 'Fire', 'Foot', 'Fork', 'Fungus', 'Gun', 'Hair', 'Hammer', 'Hand', 'Heidel', 'Hook', 'Hunt', 'Iron', 'Knife', 'Magic', 'Might', 'Needle', 'Net', 'Paper', 'Plant', 'Rake', 'Sceptre', 'Shield', 'Ship', 'Shovel', 'Sickle', 'Spear', 'Spike', 'Staff', 'Swift', 'Sword', 'Technology', 'Thread', 'Trap', 'Tree', 'Trowel', 'Tooth', 'Vehicle', 'Water', 'Wheel', 'Whip', 'Wind'],
  Uncommon: ['Balance', 'Blood', 'Bone', 'Claw', 'Cloud', 'Cold', 'Dance', 'Dark', 'Death', 'Dust', 'Flesh', 'Glass', 'Growth', 'Ice', 'Knowledge', 'Life', 'Light', 'Lightning', 'Mirror', 'Pure', 'Sand', 'Smoke', 'Song', 'Venom'],
  Rare: ['Crystal', 'Deep', 'Echo', 'Gathering', 'Hunger', 'Moon', 'Resolute', 'Serene', 'Star', 'Sun', 'Zeal'],
  Epic: ['Corrupt', 'Discord', 'Elemental', 'Harmonic', 'Malign', 'Omen', 'Potent', 'Renewal', 'Rune', 'Shimmer', 'Tentacle', 'Wing'],
  Legendary: ['Dimension', 'Myriad', 'Sin', 'Vast', 'Visage', 'Void'],
};


import {AwakeningStone, Equipment} from './item.model';
import {ActiveMission} from './mechanic.model';

export type Rank = 'Mortal' | 'Iron' | 'Bronze' | 'Silver' | 'Gold' | 'Diamond';

export interface Ability {
  name: string;
  level: number; // 0-9
  progress: number; // 0-100%
  description: string;
  effect?: (character: Character, mission: ActiveMission) => void; // ToDo: define effects on mission and character
}

export interface Essence {
  name: string;
  rank: Rank;
  abilities: Ability[];
}

export interface Character {
  name: string;
  rank: Rank;
  essences: Essence[];
  inventory: Inventory;
}

export interface Attribute {
  name: 'speed' | 'power' | 'recovery' | 'spirit';
  rank: Rank;
  progress: number; // percentage from 0 to 100
  boundedEssence: Essence | null;
}

export interface Inventory {
  awakeningStones: AwakeningStone[];
  spiritCoins: {
    [key in Rank]: number;
  };
  vehicle: string; // ToDo
  weapon: Equipment;
  armor: Equipment;
}

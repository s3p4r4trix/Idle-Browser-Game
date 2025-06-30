import {Rank} from './character.model';
import {Rarity} from './essence.model';

export type EquipmentType = 'Weapon' | 'Armor';

export interface AwakeningStone {
  name: string;
  rarity: Rarity;
}

export interface Equipment {
  name: string;
  rank: Rank;
  rarity: Rarity;
  impact: number;
  type : EquipmentType;
}

export interface Vehicle {
  name: string;
  rank: Rank;
  rarity: Rarity;
}

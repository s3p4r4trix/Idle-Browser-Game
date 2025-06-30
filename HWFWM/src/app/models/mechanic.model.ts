export interface ActiveMission {
  mission: Mission;
  startTime: number;
  duration: number; // in seconds
  isComplete: boolean;
  success?: boolean;
  report?: string;
  lootFound?: string;
}

export interface Mission {
  type: 'Courier' | 'Escort' | 'Monster Slaying';
  description: string;
  difficulty: 'Easy' | 'Normal' | 'Hard' | 'Nearly Impossible';
}

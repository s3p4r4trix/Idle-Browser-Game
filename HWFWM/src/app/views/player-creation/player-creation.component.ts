import {Component, inject, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {Attribute, Character, Essence} from '../../models/character.model';
import {ESSENCE_LIST, Rarity} from '../../models/essence.model';
import {MatFormField, MatLabel, MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  imports: [
    MatSelect,
    MatOption,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
  ],
  styleUrls: ['./player-creation.component.scss']
})
export class PlayerCreationComponent implements OnInit {
  router = inject(Router);
  playerName = '';
  selectedEssenceName = signal('');
  availableEssences = signal(['']);

  // Define attributes for a new character
  private defaultAttributes: Attribute[] = [
    { name: 'speed', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'power', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'recovery', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'spirit', rank: 'Mortal', progress: 0, boundedEssence: null }
  ];

  ngOnInit(): void {
    this.#prepareEssenceList();
  }

  createCharacter(): void {
    if (!this.playerName) {
      alert('Please enter a character name.');
      return;
    }
    if (!this.selectedEssenceName()) {
      alert('Please select an essence.');
      return;
    }

    // Create the new essence object
    const newEssence: Essence = {
      name: this.selectedEssenceName(),
      rank: 'Mortal', // Starting rank for essences
      abilities: [] // TODO: Define how initial abilities are populated, if any
    };

    // Create a fresh copy of default attributes for this character
    const characterAttributes: Attribute[] = [...this.defaultAttributes];

    // Randomly assign the new essence to one attribute
    const randomIndex = Math.floor(Math.random() * characterAttributes.length);
    characterAttributes[randomIndex].boundedEssence = newEssence;

    // Create the character object
    const newCharacter: Character = {
      name: this.playerName,
      rank: 'Mortal', // Starting rank for characters
      essences: [newEssence],
      attributes: characterAttributes,
      inventory: { // Initialize empty or default inventory
        awakeningStones: [],
        spiritCoins: {
          Mortal: 0, Iron: 0, Bronze: 0, Silver: 0, Gold: 0, Diamond: 0
        },
        vehicle: '',
        weapon: {
          name: 'Fists', type: 'Weapon', rank: 'Mortal', impact: 1,
          rarity: 'Common'
        },
        armor: {
          name: 'Cloth', type: 'Armor', rank: 'Mortal', impact: 1,
          rarity: 'Common'
        }
      }
    };

    // For now, log the character to the console.
    // Later, this would involve saving to a service and navigating.
    console.log('New Character Created:', newCharacter);
    console.log('Attributes with bound essence:', characterAttributes);


    // TODO: Implement character saving (e.g., via a service)
    // TODO: Navigate to the next view (e.g., character sheet or game start)
    // Example: this.router.navigate(['/character', newCharacter.name]); // Or some ID
    alert(`Character ${newCharacter.name} created with ${newEssence.name} bound to ${characterAttributes[randomIndex].name}!`);
  }

  setSelection(essence: string): void {
    console.log(essence);
    this.selectedEssenceName.set(essence);
  }

  setName(name: string): void {
    console.log(name);
    this.playerName = name;
  }

  #prepareEssenceList(): void {
    const allEssences: string[] = [];
    for (const rarity in ESSENCE_LIST) {
      if (ESSENCE_LIST.hasOwnProperty(rarity)) {
        allEssences.push(...ESSENCE_LIST[rarity as Rarity]);
      }
    }
    this.availableEssences.set(allEssences.sort());
  }
}

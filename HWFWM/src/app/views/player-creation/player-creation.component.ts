import {Component, inject, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {Attribute, Character, Essence} from '../../models/character.model';
import {ESSENCE_LIST, EssenceDetail, Rarity} from '../../models/essence.model'; // Added EssenceDetail
import {MatFormField, MatLabel} from '@angular/material/form-field'; // MatSelect and MatOption removed for now
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
// Import CommonModule for @for if not using standalone components with it already
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  standalone: true, // Assuming it might be standalone, add CommonModule to imports
  imports: [
    CommonModule, // Needed for @for if standalone and not otherwise imported
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    // MatSelect and MatOption are removed as we are replacing the dropdown
  ],
  styleUrls: ['./player-creation.component.scss']
})
export class PlayerCreationComponent implements OnInit {
  router = inject(Router);
  playerName = '';
  selectedEssenceName = signal(''); // Stores the name of the selected essence
  selectableEssences = signal<EssenceDetail[]>([]); // Stores 3 random EssenceDetail objects

  // Define attributes for a new character
  private defaultAttributes: Attribute[] = [
    { name: 'speed', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'power', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'recovery', rank: 'Mortal', progress: 0, boundedEssence: null },
    { name: 'spirit', rank: 'Mortal', progress: 0, boundedEssence: null }
  ];

  ngOnInit(): void {
    this.#prepareSelectableEssences();
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

    // Create the new essence object for the Character model
    const newEssence: Essence = {
      name: this.selectedEssenceName(), // Use the name from the selected EssenceDetail
      rank: 'Mortal', // Starting rank for essences
      abilities: [] // TODO: Define how initial abilities are populated, if any
    };

    // Create a fresh copy of default attributes for this character
    const characterAttributes: Attribute[] = JSON.parse(JSON.stringify(this.defaultAttributes));

    // Randomly assign the new essence to one attribute
    const randomIndex = Math.floor(Math.random() * characterAttributes.length);
    characterAttributes[randomIndex].boundedEssence = newEssence;

    // Create the character object
    const newCharacter: Character = {
      name: this.playerName,
      rank: 'Mortal', // Starting rank for characters
      essences: [newEssence], // Store the Character model's Essence type
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

    console.log('New Character Created:', newCharacter);
    console.log('Attributes with bound essence:', characterAttributes);

    alert(`Character ${newCharacter.name} created with ${newEssence.name} bound to ${characterAttributes[randomIndex].name}!`);
    // TODO: Implement character saving (e.g., via a service)
    // TODO: Navigate to the next view (e.g., character sheet or game start)
  }

  setSelection(essence: EssenceDetail): void {
    console.log('Selected Essence:', essence.name);
    this.selectedEssenceName.set(essence.name);
  }

  setName(name: string): void {
    console.log('Player Name:', name);
    this.playerName = name;
  }

  #prepareSelectableEssences(): void {
    const allEssenceDetails: EssenceDetail[] = [];
    for (const rarityKey in ESSENCE_LIST) {
      if (ESSENCE_LIST.hasOwnProperty(rarityKey)) {
        const rarity = rarityKey as Rarity;
        allEssenceDetails.push(...ESSENCE_LIST[rarity]);
      }
    }

    if (allEssenceDetails.length === 0) {
      console.error("No essences available to choose from.");
      this.selectableEssences.set([]);
      return;
    }

    // Shuffle the array
    for (let i = allEssenceDetails.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allEssenceDetails[i], allEssenceDetails[j]] = [allEssenceDetails[j], allEssenceDetails[i]];
    }

    // Pick the first 3 (or fewer if not enough essences)
    this.selectableEssences.set(allEssenceDetails.slice(0, Math.min(3, allEssenceDetails.length)));
    console.log('Selectable Essences:', this.selectableEssences());
  }
}

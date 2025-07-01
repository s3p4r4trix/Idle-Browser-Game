import {Routes} from '@angular/router';
import {NotFoundComponent} from './views/not-found.component/not-found.component';
import {CharacterComponent} from './views/character/character.component';
import {PlayerCreationComponent} from './views/player-creation/player-creation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/create-character',
    pathMatch: 'full'
  },
  {
    path: 'create-character',
    component: PlayerCreationComponent,
  },
  {
    path: 'character',
    component: CharacterComponent,
  },
  // It's good practice to have '**' last
  { path: '**', component: NotFoundComponent }
];

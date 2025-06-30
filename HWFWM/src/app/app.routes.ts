import { Routes } from '@angular/router';
import {NotFoundComponent} from './views/not-found.component/not-found.component';
import {CharacterComponent} from './views/character/character.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/character',
  },
  {
    path: 'character',
    component: CharacterComponent,
  },

  { path: '**', component: NotFoundComponent }
];

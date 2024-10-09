import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RulesComponent } from './pages/rules/rules.component';
import { PetListComponent } from './pages/pet-list/pet-list.component';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    title: 'Quatro Patas',
  },
  {
    component: RulesComponent,
    path: 'regras',
    title: 'Quatro Patas | Regras',
  },
  {
    component: PetListComponent,
    path: 'lista-adocao',
    title: 'Quatro Patas | Lista de Adoção',
  },
  {
    component: HomeComponent,
    path: '**',
    redirectTo: '',
  },
];

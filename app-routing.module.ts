import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'inscription',
   loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'connection', loadChildren: './connection/connection.module#ConnectionPageModule' },
  { path: 'admin-inscrire', loadChildren: './admin-inscrire/admin-inscrire.module#AdminInscrirePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

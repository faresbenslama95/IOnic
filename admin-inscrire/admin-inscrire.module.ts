import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminInscrirePage } from './admin-inscrire.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInscrirePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminInscrirePage]
})
export class AdminInscrirePageModule {}

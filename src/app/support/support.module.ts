import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './supportRequest/support.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule  // Asegúrate de que FormsModule esté en los imports
  ]
})
export class SupportModule { }

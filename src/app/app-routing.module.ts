import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {AuthentificationComponent} from './Components/authentification/authentification.component';
import {EnseignantComponent} from './Components/enseignant/enseignant.component';
import {EtudiantComponent} from './Components/etudiant/etudiant.component';


const routes: Routes = [


  {path: 'login', component: AuthentificationComponent},
  {path: 'enseignant', component: EnseignantComponent},
  {path: 'etudiant', component: EtudiantComponent},

  {path:'**', redirectTo:'/error', pathMatch: 'full'}


];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DeshboardComponent} from './components/deshboard/deshboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DeshboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

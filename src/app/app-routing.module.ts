import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DeshboardComponent} from './components/deshboard/deshboard.component';
import {AddNewEmployeeComponent} from './components/add-new-employee/add-new-employee.component';
import {ListOfEmployeesComponent} from './components/list-of-employees/list-of-employees.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard', component: DeshboardComponent, children: [
      {path: 'add-new-employee', component: AddNewEmployeeComponent},
      {path: 'list-employees', component: ListOfEmployeesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

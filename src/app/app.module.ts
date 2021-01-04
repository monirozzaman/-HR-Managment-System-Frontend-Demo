import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {DeshboardComponent} from './components/deshboard/deshboard.component';
import {AddNewEmployeeComponent} from './components/add-new-employee/add-new-employee.component';
import {ListOfEmployeesComponent} from './components/list-of-employees/list-of-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DeshboardComponent,
    AddNewEmployeeComponent,
    ListOfEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

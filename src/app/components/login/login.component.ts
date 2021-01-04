import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoggedUserDetailsConfig} from '../../config/logged-user-details.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private loggedUserDetailsConfig: LoggedUserDetailsConfig,) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.userName, this.password).subscribe(res => {
      this.switchPanel(res);
    }, err => {

    });

  }

  private switchPanel(res): void {
    console.log(res);
    this.loggedUserDetailsConfig.saveLocalStorage(res.token);
    this.router.navigate(['dashboard']);
  }
}

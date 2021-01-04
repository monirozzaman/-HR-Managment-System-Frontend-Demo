import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {LoggedUserDetailsConfig} from '../../config/logged-user-details.config';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.css']
})
export class DeshboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private loggedUserDetailsConfig: LoggedUserDetailsConfig) {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServiceService } from '../service/login-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginAuthenticationService: LoginAuthenticationServiceService
  ) { }

  ngOnInit() {
    this.loginAuthenticationService.logout()
  }

}

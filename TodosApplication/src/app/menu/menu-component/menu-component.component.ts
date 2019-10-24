import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServiceService } from 'src/app/service/login-authentication-service.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  username = ''

  constructor(
    private loginAuthenticationService: LoginAuthenticationServiceService
  ) { }

  ngOnInit() {
    this.username = this.loginAuthenticationService.getAuthenticatedUser()
  }

}

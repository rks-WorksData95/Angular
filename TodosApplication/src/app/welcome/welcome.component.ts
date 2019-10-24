import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginAuthenticationServiceService } from '../service/login-authentication-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''

  constructor(
    private route:ActivatedRoute,
    private loginAuthenticationService: LoginAuthenticationServiceService
  ) { }

  ngOnInit() {
    // this.name = this.route.snapshot.params['name']
    this.name = this.loginAuthenticationService.getAuthenticatedUser()
  }

}

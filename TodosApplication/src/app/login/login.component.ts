import { Component, OnInit } from '@angular/core';
import { LoginAuthenticationServiceService } from '../service/login-authentication-service.service';
import { Router } from '@angular/router';

export class Login{
  constructor(
    public username: String,
    public password: String
  ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  login: Login
  errorMessage='Invalid Credentials.'
  invalidLogin=false

  constructor(
    private loginAuthenticationService: LoginAuthenticationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin(){
    this.login = new Login(this.username,this.password)
    this.loginAuthenticationService.executeLoginAuthenticationService(this.username, this.login).subscribe(
      data => {
        console.log(data)
        // this.router.navigate(['welcome',this.username])
        this.router.navigate(['welcome'])
        this.invalidLogin=false;
      },
      error => {
        console.log(error)
        this.invalidLogin=true;
      }
    )

  }

}

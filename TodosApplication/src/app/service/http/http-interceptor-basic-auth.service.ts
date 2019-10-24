import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginAuthenticationServiceService } from '../login-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(
    private loginAuthenticationService: LoginAuthenticationServiceService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    let basicAuthHeaderString = this.loginAuthenticationService.getAuthenticatedToken()
    let username = this.loginAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
      request = request.clone({
        setHeaders:{
          Authorization: basicAuthHeaderString
        }
      })
    }

    return next.handle(request)

  }


}

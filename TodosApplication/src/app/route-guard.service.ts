import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginAuthenticationServiceService } from './service/login-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private loginAuthenticationService: LoginAuthenticationServiceService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.loginAuthenticationService.isUserLoggedIn())
      return true

    this.router.navigate(['login'])
    return false;

  }

}
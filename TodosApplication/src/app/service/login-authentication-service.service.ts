import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationServiceService {

  constructor(private httpClient: HttpClient) { }

  executeLoginAuthenticationService(username, login){

    let basicAuthHeaderString = 'Basic ' + window.btoa('Cignex' + ':' + 'dummy') 

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.post<AuthenticationBean>(`/basicauth`,login,{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER,username)
          sessionStorage.setItem(TOKEN,basicAuthHeaderString)
          return data
        }
      )
    );

  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(private message: String){}
}
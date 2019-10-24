import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, SignInUsers } from 'src/AllClasses';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(
    private http: HttpClient
  ) { }

  registerNewUser(userData: UserInfo){
    return this.http.post("http://localhost:8080/userInfo", userData)
  }

  signInUser(signInData: SignInUsers){
    return this.http.post<any>("http://localhost:8080/authenticate", signInData).pipe(
      map(
        data => {
          sessionStorage.setItem("AUTHENTICATED_USER", signInData.username)
          sessionStorage.setItem("TOKEN", `Bearer ${data.token}`)
          return data;
        }
      )
    );
  }

  generateNewToken(signInData: SignInUsers){
    return this.http.post<any>("http://localhost:8080/generateNewToken", signInData)
  }

  verifyUserAccount(token: FormData){
    return this.http.post<any>("http://localhost:8080/varifyUserAccount", token)
  }

  forgotPassword(userEmail: FormData){
    return this.http.post<any>("http://localhost:8080/forgotPassword", userEmail)
  }

  verifyPasswordResetToken(token: FormData){
    return this.http.post<any>("http://localhost:8080/verifyPasswordResetToken", token)
  }

  resetPassword(formData: FormData){
    return this.http.post<any>("http://localhost:8080/resetPassword", formData)
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem("AUTHENTICATED_USER")
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem("TOKEN")
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("AUTHENTICATED_USER")
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem("AUTHENTICATED_USER")
    sessionStorage.removeItem("TOKEN")
  }

}

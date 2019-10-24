import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldBeanServiceWithPathVariable(name){

    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
    {headers});
    // console.log("Execute Hello World Bean Service");
  }

  createBasicAuthenticationHttpHeader(){
    let username = 'Cignex'
    let password = 'dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username +  ':' + password);
    return basicAuthHeaderString;
  }

}

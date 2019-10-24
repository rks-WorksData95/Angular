import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AllServiceService } from '../all-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  message: any = ""
  expireDate: any = ""
  generateToken: any = ""
  show: string = "password"
  icon: boolean = true;

  constructor(
    private fb:FormBuilder,
    private service: AllServiceService,
    private router: Router
  ) { }

  signInInfo = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit() {
  }

  closeMessage(){
    this.message =""
  }

  get errorControl(){
    return this.signInInfo.controls
  }

  passwordVisibility(){
    if(this.show == "password"){
      this.show = "text"
      this.icon = false
    }else{
      this.show = "password"
      this.icon = true
    }
  }

  generateNewToken(){
    console.log("*** Generate New Token ***")
    console.log(this.signInInfo.value)
    this.service.generateNewToken(this.signInInfo.value).subscribe(
      response => {
        this.message = response.message
        this.generateToken = ""
        console.log("Response :", this.message)
      }
    )
  }

  onSignInForm(){
    console.log('*** In SaveForm Method ***')
    console.log(this.signInInfo.value)
    this.service.signInUser(this.signInInfo.value).subscribe(
      response => {
        console.log("Success :", response)
        this.router.navigate(["welcome"])
      },
      error => {
        console.log("Error :", error)
        if(error.status === 401){
          this.generateToken = ""
          this.expireDate = ""
          this.message = error.error
          this.signInInfo.controls['password'].reset()
        }else if(error.status === 403){
          this.message = error.error.message.split(";")[0]
          this.generateToken = error.error.message.split(";")[1]
          this.expireDate = error.error.expiredDate
          console.log(error.error.message.split(";")[0])
          console.log(error.error.message.split(";")[1])
          this.signInInfo.controls['password'].reset()
        }else[
          this.message = "Signin Failed!"
        ]
      }
    )
  }

}

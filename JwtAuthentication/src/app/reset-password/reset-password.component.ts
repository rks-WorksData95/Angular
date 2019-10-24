import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { AllServiceService } from '../all-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  message: string = ""
  errorMessage: string = ""
  token: string = ""
  resetPasswordForm: Boolean = false
  errorMessageForm: Boolean = false

  constructor(
    private fb: FormBuilder,
    private service: AllServiceService,
    private route: ActivatedRoute
  ) { }

  resetPassword = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', Validators.required]
  },
    {validator: this.MatchPassword}
  ) 

  ngOnInit() {
    this.token = this.route.snapshot.params['token']
    console.log("Password Reset Token ::::=> ", this.token)
    
    let formData = new FormData()
    formData.append("token", this.token)

    this.service.verifyPasswordResetToken(formData).subscribe(
      response =>{
        console.log("Success : ", response)
        this.resetPasswordForm = true
        this.errorMessageForm = false
      },
      error =>{
        console.log("Error : ", error)
        this.errorMessage = error.error.message
        this.errorMessageForm = true
        this.resetPasswordForm = false
      }
    )
  }

  MatchPassword(abstractControl: AbstractControl){
      let password = abstractControl.get('password').value
      let confirmPassword = abstractControl.get('confirmPassword').value

      if(password !== confirmPassword){
          abstractControl.get('confirmPassword').setErrors({
          matchPassword: true
        })
      }else{
          return null
      }
  }

  closeMessage(){
    this.message = ""
  }

  get errorControl(){
    return this.resetPassword.controls
  }

  onResetPasswordForm(){
    console.log("*** In Reset Password Form ***")
    console.log("ResetPasswordForm : ", this.resetPassword.value)

    let password = this.resetPassword.get(['password']).value

    let formData = new FormData()
    formData.append("password", password)
    formData.append("token", this.token)

    this.service.resetPassword(formData).subscribe(
      response =>{
        console.log("Success : ", response)
        this.message = response.message
        this.resetPassword.reset()
      },
      error =>{
        console.log("Error : ", error)
        if(error.status === 401){
          this.message = error.error.message
        }
        if(error.status === 400){
          this.message = error.error.message
        }
      }
    )
  }

}

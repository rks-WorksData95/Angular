import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  message: any = ""

  constructor(
    private fb: FormBuilder,
    private service: AllServiceService
  ) { }

  forgotPassword = this.fb.group({
    emailId: ['', [Validators.required, Validators.email]]
  })

  ngOnInit() {
  }

  closeMessage(){
    this.message = ""
  }

  get errorControl(){
    return this.forgotPassword.controls
  }

  onForgotPasswordForm(){
    console.log("*** In Forgot Password Method ***")
    console.log("FormData : ", this.forgotPassword.value)
    
    let emailId = this.forgotPassword.get(['emailId']).value
    console.log("EmailId : ", emailId)

    let formData = new FormData()
    formData.append('userEmail', emailId)
    
    this.service.forgotPassword(formData).subscribe(
      response => {
        console.log("Success : ", response)
        this.message = response.message
        this.forgotPassword.reset()
      },
      error => {
        console.log("Error : ", error)
        this.message = error.error.message
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  message: any = ""
  error: any = ""

  constructor(
    private fb:FormBuilder,
    private service: AllServiceService
  ) { }

  userInfo = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    emailId: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit() {
  }

  closeMessage(){
    this.message = ""
  }

  closeError(){
    this.error = ""
  }

  get errorControl(){
    return this.userInfo.controls
  }

  onSaveForm(){
    console.log('*** In SaveForm Method ***')
    console.log(this.userInfo.value)
    this.service.registerNewUser(this.userInfo.value).subscribe(
      response => {
        console.log("Success : ", response)
        this.error = ""
        this.message = response
        this.userInfo.reset()
      },
      error => {
        console.log("Error : ", error)
        this.message = ""
        this.error = error
      }
    )
    
  }
}

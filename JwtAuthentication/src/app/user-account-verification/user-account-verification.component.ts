import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-user-account-verification',
  templateUrl: './user-account-verification.component.html',
  styleUrls: ['./user-account-verification.component.css']
})
export class UserAccountVerificationComponent implements OnInit {

  token: string = ""
  accountStatusSuccessMessage: any
  accountStatusErrorMessage: any

  constructor(
    private route: ActivatedRoute,
    private service: AllServiceService
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token']
    console.log("Verification Token ::::=> ", this.token)
    
    let formData = new FormData()
    formData.append("token", this.token)

    this.service.verifyUserAccount(formData).subscribe(
      response => {
        this.accountStatusSuccessMessage = response
        console.log("Success : ", response)
      },
      error => {
        this.accountStatusErrorMessage = error
        console.log("Error : ", error)
      }
    )

  }

}

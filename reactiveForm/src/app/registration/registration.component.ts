import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';
import { Router } from '@angular/router';

export class message{
  constructor(
    public message: String
  ){}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  minDate = new Date(1900, 0, 1);
  maxDate = new Date();

  hobbys: String[]=['Reading','Writing','Music','Movie','Sports']

  public file: any = File
  public url: string | ArrayBuffer = 'http://placehold.it/120';
  RequiredFileValidator = false
  fileSizeValidator = false
  RequiredFileValidatorSubmit = false
  fileSizeValidatorSubmit = false

  constructor(private fb:FormBuilder,
    private userRegistrationService: UserRegistrationServiceService,
    private router: Router
    ) { }

  userInfo = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.maxLength(60)]],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
    hobby: ['', Validators.required]
  })

  ngOnInit() {  

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.userInfo.controls[controlName].hasError(errorName);
  }

  // call each time file changes
  onSelectFile(event){
    if(event.target.files && event.target.files[0]){
      
      var name = event.target.files[0].name
      var type = event.target.files[0].type
      var size = event.target.files[0].size
      var lastModifiedDate = event.target.files[0].lastModifiedDate
      
      alert(
          "Name : "+name +"\n"+
          "Type : "+type +"\n"+
          "Size : "+Math.round(size/1000) +" KB \n"+
          "Last Modified Date : "+lastModifiedDate
        )
      
      if(size <= 600000){
        var reader = new FileReader()
        this.file = event.target.files[0]
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event) => {
          this.url = reader.result

          this.fileSizeValidator = false
          this.fileSizeValidatorSubmit = true
        }
      }else{
        this.fileSizeValidator = true
        this.fileSizeValidatorSubmit = false
      }
      
      this.RequiredFileValidatorSubmit = true
      this.RequiredFileValidator = false
      this.url = 'http://placehold.it/120'
    }else{
      this.RequiredFileValidatorSubmit = false
      this.RequiredFileValidator = true
      this.url = 'http://placehold.it/120'
    }
  }

  saveForm(){
    console.log('*** In SaveForm Method ***')
    const user = this.userInfo.value
    const formData = new FormData()
    formData.append("user", JSON.stringify(user))
    formData.append("file", this.file)
    this.userRegistrationService.saveNewUser(formData).subscribe(
      response => {
          console.log(response)
          this.router.navigate(['listUser'])
      }
    )
  }

}

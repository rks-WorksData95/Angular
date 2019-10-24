import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';
import { Router } from '@angular/router';

export class UserRegistration{
  constructor(
    public firstName: String,
    public lastName: String,
    public emailId: String,
    public username: String,
    public password: String
  ){}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistration: UserRegistration
  firstName=''
  lastName=''
  emailId=''
  username=''
  password=''

  failedMessage=false

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  registerNewUser(){
    this.userRegistration = new UserRegistration(this.firstName,this.lastName,this.emailId,this.username,this.password)
    console.log(this.userRegistration)
    this.todoDataService.userRegistration(this.userRegistration).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['login'])
      },
      error => {
        console.log(error)
        this.failedMessage=true
      }
    )
  }

}

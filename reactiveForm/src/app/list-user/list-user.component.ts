import { Component, OnInit } from '@angular/core';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

export class userInformation {
  constructor(
    public userid: number,
    public firstName: string,
    public lastName: String,
    public emailId: string,
    public address: string,
    public dateOfBirth: Date,
    public gender: String,
    public hobby: string,
    public createdDate: Date,
    public updatedDate: Date,
    public userImage: Blob,
    public userImageName: String
  ){}
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'emailId', 'address', 'dateOfBirth', 'gender', 'hobby', 'createdDate', 'updatedDate', 'userImage', 'imageName'];
  dataSource: userInformation[]

  title = "Angular Loader"
  loader = true

  constructor(
    private userRegistrationService: UserRegistrationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.retriveAllUser()
  }

  retriveAllUser(){
    this.userRegistrationService.retriveUser().subscribe(
      response => {
        this.loader = false
        console.log("Users : ", response)
        this.dataSource = response
      }
    )
  }

  addNewUser(){
    this.router.navigate(['registration'])
  }

}
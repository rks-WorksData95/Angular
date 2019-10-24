import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';
import { IfStmt } from '@angular/compiler';

export class shows {
  constructor(
    public showDate: Date,
    public startTime: String,
    public endTime: String,
    public goldPrice: Number,
    public silverPrice: Number,
    public platinumPrice: Number
  ){}
}

export class movieShowsDetails {
  constructor(
    public screenName: String,
    public movieName: String,
    public movieShow: shows[]
  ){}
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  message: String

  constructor(
    private fb: FormBuilder,
    private service: UserRegistrationServiceService
  ) { }

  dynamicForm = this.fb.group({
    screenName: ['', Validators.required],
    movieName: ['', Validators.required],
    movieShow: this.fb.array([
      this.addMovieShowFields()
    ])
  })

  ngOnInit() {
  }

  addMovieShowFields(): FormGroup{
    return this.fb.group({
      showDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      goldPrice: ['', Validators.required],
      silverPrice: ['', Validators.required],
      platinumPrice: ['', Validators.required]
    })
  }

  get movieShow(){
    return this.dynamicForm.get('movieShow') as FormArray
  }

  addMovieShow(){
    this.movieShow.push(this.addMovieShowFields())
  }

  removeMovieShow(){
    this.movieShow.removeAt(this.movieShow.length - 1)
  }

  resetMovieShow(){
    while(this.movieShow.length > 1){
      this.removeMovieShow()
    }
    this.dynamicForm.reset()
    this.message = ""
  }

  onSubmit(){
    console.log("*** Dynamic Form ***")
    console.log(this.dynamicForm.value)
    // for(let showsDetails of this.dynamicForm.get('movieShow').value){
    //   console.log(showsDetails.platinumPrice)
    // }
    this.service.saveMovieShows(this.dynamicForm.value).subscribe(
      response => {
        console.log("Response : ", response)
        this.resetMovieShow()
        this.message = "Movie Shows Save Successfully!"
      },
      error => {
        console.log("Response : ", error)
      }
    )
  }

}

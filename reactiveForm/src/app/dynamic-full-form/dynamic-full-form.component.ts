import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { UserRegistrationServiceService } from '../service/user-registration-service.service';

export class AllShows {
  constructor(
    public screenName: String,
    public movieName: String,
    public showDate: Date,
    public startTime: String,
    public endTime: String,
    public goldPrice: Number,
    public silverPrice: Number,
    public platinumPrice: Number
  ){}
}

export class showsArray{
  constructor(
    public movieShow: AllShows[]
  ){}
}

@Component({
  selector: 'app-dynamic-full-form',
  templateUrl: './dynamic-full-form.component.html',
  styleUrls: ['./dynamic-full-form.component.css']
})
export class DynamicFullFormComponent implements OnInit {

  noOfShows: Number
  message: String

  constructor(
    private fb: FormBuilder,
    private service: UserRegistrationServiceService
  ) { }

  dynamicForm = this.fb.group({
    movieShow: this.fb.array([
      // this.addMovieShowFields()
    ])
  })

  ngOnInit() {
  }

  addMovieShowFields(): FormGroup{
    return this.fb.group({
      screenName: ['', Validators.required],
      movieName: ['', Validators.required],
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
    while(this.movieShow.length > 0){
      this.removeMovieShow()
    }
    this.movieShow.reset()
    this.noOfShows=null
  }

  generateShows(){
    console.log("No Of Shows : ", this.noOfShows)
    for(let i=0;i<this.noOfShows;i++){
      this.addMovieShow()
    }
  }

  onSubmit(){
    console.log("*** Dynamic Full Form ***")
    console.log(this.dynamicForm.value)
    // for(let showsDetails of this.dynamicForm.get('movieShow').value){
    //   console.log(showsDetails.platinumPrice)
    // }
    this.service.saveAllMovieShows(this.dynamicForm.value).subscribe(
      response => {
        console.log("Response : ", response)
        this.resetMovieShow()
        this.message = "Shows Save Successfully!"
      },
      error => {
        console.log("Error : ", error)
      }
    )
  }
}

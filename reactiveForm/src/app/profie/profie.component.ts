import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profie',
  templateUrl: './profie.component.html',
  styleUrls: ['./profie.component.css']
})

export class ProfieComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    aliases: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  })

  get aliases(){
    return this.profileForm.get('aliases') as FormArray
  }

  addAliases(){
    this.aliases.push(this.fb.control(''))
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  updateName(){
    this.profileForm.setValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
    // this.firstName.setValue('Nancy')
  }

  onSubmit(){
    // console.log(this.profileForm.value)
    console.warn(this.profileForm.value)
  }

}

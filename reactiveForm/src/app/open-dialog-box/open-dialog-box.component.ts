import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-open-dialog-box',
  templateUrl: './open-dialog-box.component.html',
  styleUrls: ['./open-dialog-box.component.css']
})
export class OpenDialogBoxComponent implements OnInit {

  message: string

  constructor(
    public dialogRef: MatDialogRef<OpenDialogBoxComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  dynamicForm = this.fb.group({
    screenName: ['', Validators.required],
    movieName: ['', Validators.required],
    showDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    goldPrice: ['', Validators.required],
    silverPrice: ['', Validators.required],
    platinumPrice: ['', Validators.required]
  })

  onNoClick(): void {
    this.dialogRef.close()
    this.dynamicForm.reset()
  }

  onSubmit(){
    console.log("*** In Dialog Model ***")
    console.log(this.dynamicForm.value)
    this.dynamicForm.reset()
    this.message = "Data Save Successfully!"
  }

}

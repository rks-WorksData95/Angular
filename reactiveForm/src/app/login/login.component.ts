import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OpenDialogBoxComponent } from '../open-dialog-box/open-dialog-box.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  movieShow = this.fb.group({})

  openDialog(){
    console.log("******* Dialog *******")
    let config = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus = true
    config.width = "70%"
    this.dialog.open(OpenDialogBoxComponent, config)
  }

}
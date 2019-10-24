import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AllServiceService
  ) { }

  ngOnInit() {
    this.service.logout()
    this.router.navigate(["SignIn"])
  }

}

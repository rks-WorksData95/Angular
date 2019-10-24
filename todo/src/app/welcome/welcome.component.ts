import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeServiceService } from '../service/data/welcome-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  welcomeMessageFromService:String
  //Activated route
  constructor(private route:ActivatedRoute,
    private service:WelcomeServiceService) { }

  ngOnInit() {

    // console.log('Welcome Page.')
    // console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }

 

  getWelcomeMessage(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfullResponse(response),
        error => this.handleErrorResponse(error)
    );
    // console.log('last line of get welcome message')
    //console.log('Get Welcome Message');
  } 
  
  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
        response => this.handleSuccessfullResponse(response),
        error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfullResponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error){
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message;
  }

}

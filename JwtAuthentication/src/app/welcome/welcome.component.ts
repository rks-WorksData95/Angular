import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'], 
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-50%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  stackValue: string = null
  popElement: string = null
  pushElement: string = null
  stack = []

  constructor() { }

  ngOnInit() {
  }

  push(){
    if(this.stackValue === null){
      alert("Please, Enter stack value")
    }
    else{
      this.stack.push(this.stackValue)
      this.pushElement = this.stackValue
    }
    this.stackValue = null
    this.popElement = null
  }

  get stackLength(){
    return this.stack.length
  }

  pop(){
    console.log("Stack length : ", this.stackLength)
    if(this.stackLength === 0){
      alert("Stack is empty!")
    }else{
      this.popElement = this.stack[this.stackLength - 1]
      console.log("Pop Element : ", this.popElement)
      this.stack.pop()
      console.log("Stack length After Pop : ", this.stackLength)
      this.pushElement = null
    }
  }

  reset(){
    while(this.stack.length > 0){
      this.pop()
    }
    this.stackValue = null
    this.pushElement = null
    this.popElement = null
  }

  closeMessage(){
    this.pushElement = null
    this.popElement = null
  }

}

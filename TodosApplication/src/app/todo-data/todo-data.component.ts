import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.css']
})
export class TodoDataComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, sessionStorage.getItem('authenticaterUser'), '', false, new Date())

    if(this.id!=-1){
      this.todoDataService.retriveTodo(sessionStorage.getItem('authenticaterUser'),this.id).subscribe(
        data => {
          this.todo = data
        }
      )
    }

  }

  saveTodo(){
    //console.log("Is Completed : "+this.todo.done)
    if(this.id===-1){
      this.todoDataService.createTodo(sessionStorage.getItem('authenticaterUser'),this.todo).subscribe(
        data => {
          
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
    else{
      this.todoDataService.updateTodo(sessionStorage.getItem('authenticaterUser'),this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }

  gotoListTodo(){
    this.router.navigate(['todos'])
  }

}

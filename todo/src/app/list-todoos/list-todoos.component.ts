import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todoos',
  templateUrl: './list-todoos.component.html',
  styleUrls: ['./list-todoos.component.css']
})

export class ListTodoosComponent implements OnInit {

  todos: Todo[]
  message: String
  // todos = [
  //   new Todo(1, 'Learn to Dance.', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular.', false, new Date()),
  //   new Todo(3, 'Visit India.', false, new Date())
  //   // {id : 1, description : 'Java'},
  //   // {id : 2, description : 'Angular'},
  //   // {id : 3, description : 'Liferay'}
  // ]

  // todo = {
  //   id : 1,
  //   description : 'Java'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resfreshTodo();
  }

  resfreshTodo(){
    this.todoService.retriveAllTodos('Cignex').subscribe(
      response => {
      console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo : ${id}`);
    this.todoService.deleteTodo('Cignex', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.resfreshTodo();
      }
    )
  }

  updateTodo(id){
    console.log(`update todo : ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}

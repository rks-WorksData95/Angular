import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public username: String,
    public description: string,
    public done: boolean,
    public targetDate: Date   
  ){}
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]
  message: String

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoDataService.retriveAllTodos(sessionStorage.getItem('authenticaterUser')).subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  updateTodo(id){
    console.log('Update Todo : '+id)
    this.router.navigate(['todos',id])
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo(sessionStorage.getItem('authenticaterUser'), id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} Successful!`
        this.refreshTodos()
      }
    )
  }

  createTodo(){
    this.router.navigate(['todos',-1])
  }

}

import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todoos/list-todoos.component';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    // console.log("Execute Hello World Bean Service");
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retriveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

}

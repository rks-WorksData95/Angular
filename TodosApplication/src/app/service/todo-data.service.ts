import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../todos/todos.component';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retriveAllTodos(username){
    return this.httpClient.get<Todo[]>(`/users/${username}/todos`)
  }

  retriveTodo(username, id){
    return this.httpClient.get<Todo>(`/users/${username}/todos/${id}`)
  }

  deleteTodo(username, id){
    return this.httpClient.delete(`/users/${username}/todos/${id}`)
  }

  updateTodo(username,id, todo){
    return this.httpClient.put(`/users/${username}/todos/${id}`, todo)
  }

  createTodo(username, todo){
    return this.httpClient.post(`/users/${username}/todos`, todo)
  }

  userRegistration(userRegistration){

    let basicAuthHeaderString = 'Basic ' + window.btoa('Cignex' + ':' + 'dummy') 

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
    })

    return this.httpClient.post(`/users/registration`, userRegistration,{headers})
  }

}

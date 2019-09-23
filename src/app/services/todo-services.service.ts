import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from './../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class TodoServicesService {
  todoURL:string =  'https://jsonplaceholder.typicode.com/todos';
  todoLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  //Get Todo
  getTodos():Observable<Todos[]>{
   return this.http.get<Todos[]>(`${this.todoURL}${this.todoLimit}`);
  }

  //Todo Completed
  toggleCompleted(todo :Todos):Observable<any>{
    const url = `${this.todoURL}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  };

  //Delete Todo
  deleteTodo(todo :Todos):Observable<Todos>{
    const url = `${this.todoURL}/${todo.id}`;
    return this.http.delete<Todos>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todos):Observable<Todos>{
    return this.http.post<Todos>(this.todoURL, todo, httpOptions);
  }
}
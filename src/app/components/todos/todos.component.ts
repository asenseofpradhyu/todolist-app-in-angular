import { Component, OnInit } from '@angular/core';
import { Todos } from './../../models/Todo';
import { TodoServicesService } from './../../services/todo-services.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todo:Todos[];

  constructor(private ts:TodoServicesService) { }

  ngOnInit() {

    this.ts.getTodos().subscribe(todos => {
      this.todo = todos;
    });
  }

  deleteTodo(todo:Todos){
    //Remove from UI
    this.todo = this.todo.filter(t => t.id !== todo.id);
    //Removie from Server
    this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todos){
    this.ts.addTodo(todo).subscribe(todo => {
    this.todo.push(todo);
    });
  }

}
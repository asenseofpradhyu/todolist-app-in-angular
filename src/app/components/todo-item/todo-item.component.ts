import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoServicesService } from './../../services/todo-services.service';
import { Todos } from './../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() task: Todos;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();

  constructor(private ts:TodoServicesService) { }

  ngOnInit() {
  }
  // Set Classes
  setClasses(){
    let Classes = {
      todo:true,
      'is-complete':this.task.completed
    }
    return Classes;
  }

  // Toggle
  onToggle(task){
    task.completed = !task.completed;

    // Toggle on Server
    this.ts.toggleCompleted(task).subscribe(task => {
      console.log(task);
    });
  }

  // Delete
  onDelete(task){
    this.deleteTodo.emit(task);
  }
   
}
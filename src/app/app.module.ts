import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoServicesService } from './services/todo-services.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/addtodo/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    {path: '', component: TodosComponent},
    {path: 'about', component: AboutComponent}
  ])],
  
  declarations: [ AppComponent, HelloComponent, TodosComponent, TodoItemComponent, HeaderComponent, AddTodoComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoServicesService]
})
export class AppModule { }

import { Component } from '@angular/core';
import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {Todo} from './shared/todo.model';
import {todos} from './shared/todo.data';
import {TodoService} from './shared/todo.service'

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [TodoFormComponent ,TodoListComponent],
    providers: [TodoService]
})

export class AppComponent {
    title: string;
    
    constructor() {
        this.title = 'Angular2 2DO';
    }
}
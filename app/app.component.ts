import { Component } from '@angular/core';
import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {Todo} from './shared/todo.model';
import {todos} from './shared/todo.data';

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [TodoFormComponent ,TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: Todo[];
    
    constructor() {
        this.title = 'Angular2 2DO';
        this.todos = todos;
    }

    onTodoAdded(todo: Todo) {
        this.todos.push(todo);
    }
}
import { Component } from '@angular/core';
import {TodoFormComponent} from './todo/todo-form.component';
import {TodoListComponent} from './todo/todo-list.component';
import {Todo} from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent ,TodoListComponent]
})

export class AppComponent {
    title: string;
    todos: Todo[];
    
    constructor() {
        this.title = 'Angular2 2DO';
        this.todos = [
            new Todo('Angular2'),
            new Todo('TypeScript')
        ];
    }

    onTodoAdded(todo: Todo) {
        this.todos.push(todo);
    }
}
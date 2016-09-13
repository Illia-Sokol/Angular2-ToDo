import { Component } from '@angular/core';

import {Todo} from './shared/todo.model';
import {TodoService} from './shared/todo.service'
import {TodosComponent} from './components/todos/todos.component';

@Component({
    moduleId: module.id,
    selector: 'todo-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [TodosComponent],
    providers: [TodoService]
})

export class AppComponent {
    title: string;
    
    constructor() {
        this.title = 'Angular2 2DO';
    }
}
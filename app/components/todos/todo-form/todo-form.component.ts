import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../../shared/todo.model';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    @Output() created = new EventEmitter();

    constructor() {
        this.created = new EventEmitter<Todo>();
    };

    create(title: string) {
        if (title) {
            let todo = new Todo(title);
            this.created.emit(todo);
        }
    }
}
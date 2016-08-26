import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';

@Component({
    selector: 'todo-form',
    templateUrl: './app/components/todo-form/todo-form.component.html',
    styleUrls: ['./app/components/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
    @Output() added = new EventEmitter();

    add(title: string) {
        if (title) {
            this.added.emit(new Todo(title));
        }
    }
}
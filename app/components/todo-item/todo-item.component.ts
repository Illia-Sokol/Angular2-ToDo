import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model'
 
@Component({
    selector: 'todo-item',
    templateUrl: './app/components/todo-item/todo-item.component.html',
    styleUrls: ['./app/components/todo-item/todo-item.component.css']
    // inputs: ['todo']
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deleted = new EventEmitter();

    constructor() {}

    checkInput() {
        this.todo.done = !this.todo.done;
    }

    deleteTodo() {
        this.deleted.emit(this.todo);
    }
}
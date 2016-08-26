import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model'
 
@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
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
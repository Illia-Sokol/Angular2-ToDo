import {Component, Input, Output, EventEmitter} from '@angular/core';

import { ITodo } from '../../../shared/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css'],
    directives: [TodoItemComponent]
})

export class TodoListComponent {
    @Input() todos: ITodo[];
    @Output() delete: EventEmitter<ITodo>;
    @Output() toggled: EventEmitter<ITodo>;

    constructor() {
       this.delete = new EventEmitter<ITodo>();
       this.toggled = new EventEmitter<ITodo>();
    }

    get sortedTodos(): ITodo[] {
        return this.todos.map((todo) => todo)
        .sort( (a, b) => {
            if(a.title > b.title) return 1;
            else if(a.title < b.title) return -1;
            else return 0;
        })
        .sort( (a, b) => {
            if(a.done && !b.done) return 1;
            else if(!a.done && b.done) return -1;
            else return 0;
        } );
    }

    onTodoToggled(todo: ITodo): void {
        this.toggled.emit(todo);
    }

    onTodoDeleted(todo: ITodo): void {
        this.delete.emit(todo);
    }
}
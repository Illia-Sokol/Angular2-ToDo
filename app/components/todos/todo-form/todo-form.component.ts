import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';
import {TodoService} from '../../shared/todo.service'

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    @Output() added = new EventEmitter();

    constructor(private todoService: TodoService) {};

    add(title: string) {
        if (title) {
            let todo = new Todo(title);
            this.todoService.addTodo(todo).then(todo => console.log(todo));
        }
    }
}
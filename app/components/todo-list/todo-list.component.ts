import {Component, Input} from '@angular/core';
import {TodoItem} from '../todo-item/todo-item.component'
import {Todo} from '../../shared/todo.model';

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    directives: [TodoItem]
})

export class TodoListComponent {
    @Input() todos: Todo[];

    get sortedTodos() {
        return this.todos.map((todo: Todo) => todo)
        .sort( (a: Todo, b: Todo) => {
            if(a.title > b.title) return 1;
            else if(a.title < b.title) return -1;
            else return 0;
        })
        .sort( (a: Todo, b: Todo) => {
            if(a.done && !b.done) return 1;
            else if(!a.done && b.done) return -1;
            else return 0;
        } );
    }

    onTodoDeleted(todo: Todo) {
        if(todo) {
            let index = this.todos.indexOf(todo);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}
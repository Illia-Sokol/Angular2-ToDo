import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITodo } from './todo.model';
import { todos } from './todo.data';

@Injectable()

export class TodoService {
    constructor(private http: Http) {}

    getTodos(): Promise<ITodo[]> {
        return this.http.get('app/shared/todos.json')
                .toPromise()
                .then(res => res.json())
                .catch(this.handleError);
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo): void {
        let index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    }

    private handleError(err: any): Promise<any> {
        console.log('Произошла ошибка', err);
        return Promise.reject(err.message || err)
    }
}
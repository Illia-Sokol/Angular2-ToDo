import { Injectable } from '@angular/core';

import { ITodo } from './todo.model';
import { todos } from './todo.data';

@Injectable()

export class TodoService {
    getTodos(): Promise<ITodo[]> {
        return new Promise(resolve => setTimeout( () => resolve(todos), 2000));
    }
}
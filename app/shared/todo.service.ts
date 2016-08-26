import { Injectable } from '@angular/core';

import { ITodo } from './todo.model';
import { todos } from './todo.data';

@Injectable()

export class TodoService {
    getTodos(): ITodo[] {
        return todos;
    }
}
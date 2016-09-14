import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

import { ITodo } from './todo.model';

@Injectable()

export class TodoService {
    private apiUrl = 'api/todos';

    constructor(private http: Http) {}

    getTodos(): Observable<ITodo[]> {
        return this.http.get(this.apiUrl)
                .map(res => res.json().data)
                .catch(this.handleError);
    }

    addTodo(todo: ITodo): Observable<ITodo> {
        return this.post(todo);
    }

    saveTodo(todo: ITodo): Observable<ITodo> {
        return this.put(todo);
    }

    deleteTodo(todo: ITodo): Observable<ITodo> {
        return this.delete(todo);
    }

    private post(todo: ITodo): Observable<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers });
        return this.http.post(this.apiUrl, body, options)
                        .map(res => res.json().data)
                        .catch(this.handleError);
    }

    private put(todo: ITodo): Observable<ITodo> {
        let body = JSON.stringify(todo);        
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${todo.id}`

        return this.http.put(url, body, options)
                        .map(res => todo)
                        .catch(this.handleError);
    }

    private delete(todo: ITodo): Observable<ITodo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers });

        let url = `${this.apiUrl}/${todo.id}`

        return this.http.delete(url, options)
                        .map(res => todo)
                        .catch(this.handleError);
    }

    private handleError(err: any): Observable<any> {
        console.log('Произошла ошибка', err);
        return Observable.throw(err.message || err)
    }
}
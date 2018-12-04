import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.configUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.configUrl + '/'+ id);
  }

  delUserById(user: User){
    fetch(this.configUrl + '/'+ user.id, {
      method: 'DELETE'
    })
  }

  editUserById(user: User){
    fetch(this.configUrl + '/'+ user.id, {
      method: 'PATCH',
      body: JSON.stringify({
        name : user.name,
        username : user.username,
        email : user.email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
}

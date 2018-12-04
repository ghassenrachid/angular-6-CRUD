import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

  getPostsByUserId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.configUrl+ id);
  }

}

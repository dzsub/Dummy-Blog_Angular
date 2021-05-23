import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { PostComment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }

  getComments(): Observable<PostComment[]> {
    return this.http.get<PostComment[]>('http://localhost:3000/comments');
  }
}

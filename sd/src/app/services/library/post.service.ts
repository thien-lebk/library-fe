import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LibCardDto} from '../../modal/lib-card-dto';
import {SourceObject} from './source';
import {TopicDto} from '../../modal/TopicDto';
import {PostDto} from '../../modal/PostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
  ) {
  }

  getList(): Observable<LibCardDto[]> {
    const url = `${SourceObject.route}/post/list`;
    return this.http.get<any>(url);
  }

  getListTopic(): Observable<TopicDto[]> {
    const url = `${SourceObject.route}/topic/list`;
    return this.http.get<any>(url);
  }

  deletePost(id: number): Observable<any> {
    const url = `${SourceObject.route}/post/delete?id=${id}`;
    const body = JSON.stringify({id});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    // @ts-ignore
    return this.http.delete<any>(url, httpOptions);
  }

  create(data: PostDto[]): Observable<any> {
    const url = `${SourceObject.route}/post/create`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
  update(data: PostDto[]): Observable<any> {
    const url = `${SourceObject.route}/post/update`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
}

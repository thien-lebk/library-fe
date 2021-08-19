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
  create(data: PostDto[]): Observable<any> {
    const url = `${SourceObject.route}/post/create`;
    const body = JSON.stringify(data);
    const data2: any = Object.assign({guid: 'this.guid'});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }
}

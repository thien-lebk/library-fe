import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LibCardDto} from '../../modal/lib-card-dto';
import {SourceObject} from './source';
import {TopicDto} from '../../modal/TopicDto';
import {PostDto} from '../../modal/PostDto';
import {BookDto} from '../../modal/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
  ) {
  }

  getList(): Observable<BookDto[]> {
    const url = `${SourceObject.route}/book/list`;
    return this.http.get<any>(url);
  }

  create(data: BookDto): Observable<any> {
    const url = `${SourceObject.route}/book/create`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }

  getDetail(id: string): Observable<BookDto> {
    const url = `${SourceObject.route}/book/detail`;

    return this.http.get<any>(url, {
      params: {
        id,
      }
    });
  }
}

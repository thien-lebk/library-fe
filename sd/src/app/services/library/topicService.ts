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
export class TopicService {

  constructor(private http: HttpClient,
  ) {
  }
  getListTopicByIdPost(id: number): Observable<any> {
    const url = `${SourceObject.route}/topic/get-topic-by-post?id=${id}`;
    // @ts-ignore
    return this.http.post<any>(url);
  }

}

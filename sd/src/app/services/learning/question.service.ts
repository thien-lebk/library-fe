import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SourceObject} from './source';
import {Question} from '../../modal/Question';
import {QuestionDto} from '../../modal/QuestionDto';
import {SelectAnswerDto} from '../../modal/SelectAnswerDto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient,
  ) {
  }

  getList(): Observable<any> {
    const url = `${SourceObject.route}/question/list`;
    return this.http.get<any>(url);
  }

  create(data: QuestionDto): Observable<any> {
    const url = `${SourceObject.route}/question/create`;
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>(url, body, httpOptions);
  }

  getDetail(id: string): Observable<any> {
    const url = `${SourceObject.route}/question/detail?idQuestion=` + id;
    return this.http.post<any>(url, {
      params: {
        idQuestion: id,
      }
    });
  }

  update(data: Question, listAnswerRemove: SelectAnswerDto[]): Observable<any> {
    const questionDto = new QuestionDto();
    questionDto.question = data;
    questionDto.listAnswerRemove = listAnswerRemove;
    const url = `${SourceObject.route}/question/create`;
    const body = JSON.stringify(questionDto);
    console.log(listAnswerRemove);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.put<any>(url, body, httpOptions);
  }
}

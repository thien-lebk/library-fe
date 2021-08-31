import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MainSource} from './main-source';
import {User} from '../modal/User';

@Injectable({providedIn: 'root'})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') as string));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${MainSource.route}/login`, {username, password})
  }

  logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: User): any {
    return this.http.post(`${MainSource.route}/users/register`, user);
  }

  getAll(): any {
    return this.http.get<User[]>(`${MainSource.route}/users`);
  }

  getById(id: string): any {
    return this.http.get<User>(`${MainSource.route}/users/${id}`);
  }

  update(id: any, params: any): any {
    return this.http.put(`${MainSource.route}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id === this.userValue.id) {
          // update local storage
          const user = {...this.userValue, ...params};
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string): any {
    return this.http.delete(`${MainSource.route}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id === this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
}

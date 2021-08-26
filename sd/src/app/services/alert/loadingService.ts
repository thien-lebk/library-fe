import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoadingService {
  loadingObject: Subject<any> = new Subject();
  loadingObservable = this.loadingObject.asObservable();

  loading(data: boolean): void {
    return this.loadingObject.next(data);
  }

  startLoading(): void {
    return this.loadingObject.next(true);
  }
  stopLoading(): void {
    return this.loadingObject.next(false);
  }
}

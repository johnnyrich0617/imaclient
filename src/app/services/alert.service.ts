import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Alert} from '../models/alert.model';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultId: any;
  private subject: any;

  constructor() { }

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  clear(id: string): void {

  }
}

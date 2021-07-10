import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Alert, AlertType } from './alert.model';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultId = 'default-_alert';
  private subject = new Subject<Alert>();

  constructor() { }

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Success, message, displayType: 'alert_success' }));
  }

  error(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Error, message, displayType: 'alert_error' }));
  }

  info(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Info, message, displayType: 'alert_info' }));
  }

  warn(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message, displayType: 'alert_warn' }));
  }
  // main _alert method
  alert(alert: Alert): void {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId): void {
    this.subject.next(new Alert({ id }));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;
  constructor(private http: HttpClient) { }

  /*
  Load the runtime configuration for the application
   */
  loadAppConfig(): Promise<any> {
    return this.http.get('/assets/app-config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  /*
  Get the base URL for all API Requests
   */
  get apiBaseUrl(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded!');
    }
    return this.appConfig.baseApiUrl;
  }

  /*
  Get the Version for the API in use
   */
  get apiVersion(): string {
    if (!this.appConfig) {
      throw Error('Config file not loaded');
    }
    return this.appConfig.apiVersion;
  }

  get isMock(): boolean {
    if (!this.appConfig){
      throw Error('Config file not loaded');
    }
    return this.appConfig.isMock;
  }
}

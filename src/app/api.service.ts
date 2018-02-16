import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getAPI(URI) {
    if (environment.production) {
      return this.http.get(`/api/${URI}`);
    } else {
      return this.http.get(`http://localhost:8080/api/${URI}`);
    }
  }

}

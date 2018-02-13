import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  getStyles(URI) {
    return this.http.get(URI);
  }

}

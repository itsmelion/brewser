import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  beer: string;
  response: any;
  loading: boolean;
  httpOptions: Object;

  constructor(private http: HttpClient) {
    this.response = [{name: 'Go ahead and Search! Dont let the beers waiting'}];
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  onSubmit() {
    this.loading = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/beers', { name: this.beer }, this.httpOptions)
    .subscribe((res: any) => {
      if (res !== null) {
        this.response = res;
      } else {
        this.response = [{name: 'NOTHING FOUND, Maybe our server drank ya beer.'}];
      }
      this.loading = false;
    });
  }
}

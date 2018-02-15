import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  beer: string;

  onSubmit(form: NgForm) {
    console.log(this.beer);
    console.log('should search:', this.beer);
    form.resetForm();
  }
}

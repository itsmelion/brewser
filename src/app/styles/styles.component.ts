import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})

export class StylesComponent {
  styles: any;

  constructor(private api: ApiService) {
    this.api.getStyles('http://localhost:8080/api')
      .subscribe(res => this.styles = res.json());
  }



}

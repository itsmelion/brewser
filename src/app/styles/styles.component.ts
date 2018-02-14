import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})

export class StylesComponent {
  styles: any;
  loading: boolean;

  constructor(private api: ApiService) {
    this.loading = true;
    this.api.getStyles('http://localhost:8080/api')
      .subscribe((res) => {
        this.styles = res.json();
        this.loading = false;
      });
  }



}

import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss'],
})

@Input()
export class StylesComponent {
  styles: any;
  loading: boolean;

  constructor(private api: ApiService) {
    this.loading = true;
    this.api.getAPI('styles')
      .subscribe((res) => {
        this.styles = res;
        this.loading = false;
        this.codeURI(this.styles);
      });
  }

  codeURI(string) {
    for (let i = 0; i < string.length; i++) {
      this.styles[i].categoryURI = encodeURI(string[i].name);
    }
  }



}

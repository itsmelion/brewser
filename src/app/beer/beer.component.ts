import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})

export class BeerComponent {
  beer: Object;
  id: string;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.id = route.snapshot.params.ID;
    this.api.getAPI(`beer/${this.id}`)
    .subscribe((res) => {
      this.beer = res;
    });
  }

}

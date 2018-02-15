import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})

@Input()
export class BeersComponent {
  beers: any;
  loading: boolean;
  title: string;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    const styleID = route.snapshot.params.styleID;
    this.loading = true;
    this.api.getAPI(`http://localhost:8080/api/beers/${styleID}`)
    .subscribe((res) => {
      this.beers = res.json();
      this.title = this.beers[0].style.name + 's' || 'Style';
      this.loading = false;
    });
  }

}

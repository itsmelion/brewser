import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { SearchPipe } from '../search.pipe';
import { OrganicPipe } from '../organic.pipe';

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
  toggleOrganic: boolean;
  toggleIBU: boolean;
  toggleABV: boolean;
  order: string;
  reverse: boolean;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.order = 'name';
    this.reverse = false;
    this.loading = true;
    this.toggleOrganic = false;
    this.toggleIBU = false;
    this.toggleABV = false;
    this.beers = this.checkParams(route.snapshot.params);
  }

  checkParams(params) {
    let request: string;
    if (Object.keys(params).length !== 0 && params.constructor === Object) {
      request = `styles/${params.styleID}`;
      this.api.getAPI(request)
      .subscribe((res) => {
        this.beers = res;
        this.title = this.beers[0].style.name + 's' || 'Style';
        this.loading = false;
      });
    } else {
      request = `beers`;
      this.api.getAPI(request)
      .subscribe((res) => {
        this.beers = res;
        this.title = 'Beers for all!';
        this.loading = false;
      });
    }

  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}

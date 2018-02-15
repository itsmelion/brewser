import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { SearchPipe } from '../search.pipe';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})

@Input()
export class BeersComponent implements OnInit, OnDestroy {
  beers: any;
  loading: boolean;
  paramsSubscription: Subscription;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    const category = route.snapshot.params.category;
    this.loading = true;
    this.api.getStyles(`http://localhost:8080/api/beers/${category}`)
      .subscribe((res) => {
        this.beers = res.json();
        this.loading = false;
        this.codeURI(this.beers);
      });
  }

  ngOnInit() {
    // this.paramsSubscription = this.route.params.subscribe(params => {
    //   this.artist = this.artistService.getArtist(params['artistId']);
    // });
  }

  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
  }

  codeURI(string) {
    for (let i = 0; i < string.length; i++) {
      this.beers[i].categoryURI = encodeURI(string[i].name);
    }
  }

}

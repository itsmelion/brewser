import { RouterModule } from '@angular/router';
import { BeersComponent } from './beers/beers.component';
import { StylesComponent } from './styles/styles.component';
import { HomeComponent } from './home/home.component';

export const routing = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'styles',
    component: StylesComponent,
  },
  {
    path: 'beers/:styleID',
    component: BeersComponent,
  },
  {
    path: 'beers',
    component: BeersComponent,
  },
]);
